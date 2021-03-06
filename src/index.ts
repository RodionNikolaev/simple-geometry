export class Point {
    public constructor(public x: number = 0, public y: number = 0) {}
}

export class Line {
    constructor(public p0: Point, public p1: Point) {}
}

export class Rect {
    constructor(public p0: Point, public p1: Point, public p2: Point, public p3: Point) {}

    public static fromWH(x: number, y: number, width: number, height: number): Rect {
        return new Rect(new Point(x, y), new Point(x + width, y), new Point(x + width, y + height), new Point(x, y + height));
    }

    public get width(): number {
        return lineLength(this.p0, this.p1);
    }

    public get height(): number {
        return lineLength(this.p1, this.p2);
    }

    public get x(): number {
        return this.p0.x;
    }

    public get y(): number {
        return this.p0.y;
    }

    isZero(): boolean {
        return this.x == 0 && this.y == 0 && this.width == 0 && this.height == 0;
    }
    public get center(): Point {
        return { x: this.x + this.width / 2, y: this.y + this.height / 2 };
    }
    public get square(): number {
        return this.width * this.height;
    }
}

export enum BasePoint {
    TopLeft = 4,
    Top = 5,
    TopRight = 6,
    Right = 7,
    BottomRight = 0,
    Bottom = 1,
    BottomLeft = 2,
    Left = 3,
}
/**
 * Round value to the number of gecimal digits
 * @param number Value
 * @param digits Number decimal digits
 * @returns Rounded value
 */
export function round(value: any, digits: number = 3): any {
    if (!digits || digits == 0) return value;

    if (value.x != undefined && value.y != undefined) return new Point(round(value.x, digits), round(value.y, digits));
    return Math.round(value * Math.pow(10, digits)) / Math.pow(10, digits);
}

export function roundPoint(point: Point, digits: number): Point {
    return !digits || digits == 0 ? point : new Point(Math.round(round(point.x, digits)), Math.round(round(point.y, digits)));
}

export function scalePoint(p: Point, dx: number, dy: number, boundingRect: Rect, basePoint: BasePoint): Point {
    let point: Point;

    if (basePoint == BasePoint.Left || basePoint == BasePoint.Right) dy = 0;
    else if (basePoint == BasePoint.Top || basePoint == BasePoint.Bottom) dx = 0;

    if (basePoint == BasePoint.TopLeft || basePoint == BasePoint.Left || basePoint == BasePoint.Top) {
        point = new Point(
            round(p.x + ((p.x - boundingRect.x) / boundingRect.width) * dx),
            round(p.y + ((p.y - boundingRect.y) / boundingRect.height) * dy)
        );
    } else if (basePoint == BasePoint.TopRight || basePoint == BasePoint.Right) {
        point = new Point(
            round(p.x - ((boundingRect.x + boundingRect.width - p.x) / boundingRect.width) * -1 * dx),
            round(p.y + ((p.y - boundingRect.y) / boundingRect.height) * dy)
        );
    } else if (basePoint == BasePoint.BottomRight) {
        point = new Point(
            round(p.x - ((boundingRect.x + boundingRect.width - p.x) / boundingRect.width) * -1 * dx),
            round(p.y - ((boundingRect.y + boundingRect.height - p.y) / boundingRect.height) * -1 * dy)
        );
    } else if (basePoint == BasePoint.BottomLeft || basePoint == BasePoint.Bottom) {
        point = new Point(
            round(p.x + ((p.x - boundingRect.x) / boundingRect.width) * dx),
            round(p.y - ((boundingRect.y + boundingRect.height - p.y) / boundingRect.height) * -1 * dy)
        );
    }

    if (isNaN(point.x) || isNaN(point.y) || !isFinite(point.x) || !isFinite(point.y)) {
        return p;
    }

    return point;
}

export function translatePoint(delta: Point, dx: number, dy: number): Point {
    return new Point(round(dx + delta.x), round(dy + delta.y));
}

export function rotatePoint(angle: number, point: Point, cX: number, cY: number): Point {
    let radians = angle / (180 / Math.PI);
    return new Point(
        round((point.x - cX) * Math.cos(radians) - (point.y - cY) * Math.sin(radians) + cX),
        round((point.x - cX) * Math.sin(radians) + (point.y - cY) * Math.cos(radians) + cY)
    );
}

export function rotatePoints(angle: number, points: Point[], cX: number, cY: number): Point[] {
    return points.map((point) => rotatePoint(angle, point, cX, cY));
}

export let shiftPoint = (point: Point, length: number, angle: number): Point => {
    return {
        x: point.x + length * Math.sin(((90 - angle) * Math.PI) / 180.0),
        y: point.y + length * Math.sin((angle * Math.PI) / 180.0),
    };
};

export function contains(r1: Rect, r2: Rect): boolean {
    return r2.x + r2.width < r1.x + r1.width && r2.x > r1.x && r2.y > r1.y && r2.y + r2.height < r1.y + r1.height;
}

export function getViewBox(point: Point, viewBox: Rect, heightWidthRatio: number, zoomIn: boolean): Rect {
    // Percentage offset mouse from top left corner
    let offsetX = (point.x - viewBox.x) / viewBox.width;
    let offsetY = (point.y - viewBox.y) / viewBox.height;

    let newWidth = zoomIn ? 0.8 * viewBox.width : 1.2 * viewBox.width;

    let newHeight = newWidth * heightWidthRatio;

    let newX = viewBox.x - (newWidth - viewBox.width) * offsetX;
    let newY = viewBox.y - (newHeight - viewBox.height) * offsetY;

    return Rect.fromWH(newX, newY, newWidth, newHeight);
}

export function getAngle(centerPoint: Point, startPoint: Point, endPoint: Point): number {
    let a = lineLength(startPoint, centerPoint);
    let b = lineLength(endPoint, centerPoint);
    let c = lineLength(startPoint, endPoint);
    let cos = round((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b), 3);

    let direction = getDirection(centerPoint, startPoint, endPoint);

    return direction * round((Math.acos(cos > 1 ? 1 : cos) * 180) / Math.PI, 2);
}

export function lineAngle(startPoint: Point | { x: number; y: number }, endPoint: Point | { x: number; y: number }): number {
    let p1 = { x: startPoint.x + 100000, y: startPoint.y };

    let a = lineLength(p1, startPoint);
    let b = lineLength(endPoint, startPoint);
    let c = lineLength(p1, endPoint);
    let cos = round((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b), 4);

    let direction = getDirection(startPoint, p1, endPoint);

    return direction * round((Math.acos(cos > 1 ? 1 : cos) * 180) / Math.PI, 3);
}

export function pointsCenter(startPoint: Point, endPoint: Point) {
    return new Point((startPoint.x + endPoint.x) / 2, (startPoint.y + endPoint.y) / 2);
}

export function getDirection(centerPoint: Point, startPoint: Point, endPoint: Point): number {
    return (startPoint.x - centerPoint.x) * (endPoint.y - centerPoint.y) -
        (startPoint.y - centerPoint.y) * (endPoint.x - centerPoint.x) <
        0
        ? -1
        : 1;
}

export function lineLength(p1: Point, p2: Point): number {
    return round(Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)), 4);
}

export function lineLengthXY(x1: number, y1: number, x2: number, y2: number): number {
    return round(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)), 4);
}

export function pointIsOnLine(p: Point, p1: Point, p2: Point): boolean {
    return lineAngle(p1, p) == lineAngle(p1, p2) && lineLength(p1, p) <= lineLength(p1, p2);
}

export function perpendicularToLine(point: Point, start: Point, end: Point): { p: Point; isInside: boolean } {
    const k =
        ((end.y - start.y) * (point.x - start.x) - (end.x - start.x) * (point.y - start.y)) /
        (Math.pow(end.y - start.y, 2) + Math.pow(end.x - start.x, 2));

    let p = new Point(point.x - k * (end.y - start.y), point.y + k * (end.x - start.x));

    return {
        p,
        isInside:
            p.x >= Math.min(start.x, end.x) &&
            p.x <= Math.max(start.x, end.x) &&
            p.y >= Math.min(start.y, end.y) &&
            p.y <= Math.max(start.y, end.y),
    };
}

export function minDistanceLineEnds(l1: Line, p: Point) {
    return Math.min(lineLength(l1.p0, p), lineLength(l1.p1, p));
}

export interface LinesIntersection {
    point: Point;
    onLine1: boolean;
    onLine2: boolean;
}

export function linesIntersection(line1: Line, line2: Line): LinesIntersection {
    let denominator: number,
        a: number,
        b: number,
        numerator1: number,
        numerator2: number,
        result: LinesIntersection = {
            point: null,
            onLine1: false,
            onLine2: false,
        };

    denominator = (line2.p1.y - line2.p0.y) * (line1.p1.x - line1.p0.x) - (line2.p1.x - line2.p0.x) * (line1.p1.y - line1.p0.y);
    if (denominator === 0) return result;

    a = line1.p0.y - line2.p0.y;
    b = line1.p0.x - line2.p0.x;
    numerator1 = (line2.p1.x - line2.p0.x) * a - (line2.p1.y - line2.p0.y) * b;
    numerator2 = (line1.p1.x - line1.p0.x) * a - (line1.p1.y - line1.p0.y) * b;
    a = round(numerator1 / denominator, 6);
    b = round(numerator2 / denominator, 6);

    result.point = new Point(line1.p0.x + a * (line1.p1.x - line1.p0.x), line1.p0.y + a * (line1.p1.y - line1.p0.y));

    if (a >= 0 && a <= 1) result.onLine1 = true;
    if (b >= 0 && b <= 1) result.onLine2 = true;

    if (
        (!result.onLine1 || !result.onLine2) &&
        ((result.onLine1 && minDistanceLineEnds(line2, result.point) <= 0.1) ||
            (result.onLine2 && minDistanceLineEnds(line1, result.point) <= 0.1))
    )
        result.onLine1 = result.onLine2 = true;

    return result;
}

export function perpendicularPoint(start: Point, end: Point, pLength: number): Point {
    const angle = lineAngle(start, end) - 90;
    let c = pointsCenter(start, end);
    const x = pLength * Math.cos((angle * Math.PI) / 180.0);
    const y = pLength * Math.sin((angle * Math.PI) / 180.0);
    return new Point(c.x + round(x, 1), c.y + round(y, 1));
}

export function lineRectangleIntersections(line: Line, rect: Rect): Point[] {
    const points: Point[] = [];

    let res = linesIntersection(line, new Line(rect.p0, rect.p1));
    if (res.onLine1 && res.onLine2) points.push(new Point(res.point.x, res.point.y));

    res = linesIntersection(line, new Line(rect.p1, rect.p2));
    if (res.onLine1 && res.onLine2) points.push(new Point(res.point.x, res.point.y));

    res = linesIntersection(line, new Line(rect.p2, rect.p3));
    if (res.onLine1 && res.onLine2) points.push(new Point(res.point.x, res.point.y));

    res = linesIntersection(line, new Line(rect.p0, rect.p3));
    if (res.onLine1 && res.onLine2) points.push(new Point(res.point.x, res.point.y));

    return points;
}

export function lineCenter(p1: Point, p2: Point): Point {
    return new Point((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
}

export function triangleArea(p1: Point, p2: Point, p3: Point): number {
    return Math.abs(0.5 * (p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)));
}

export function pointInsideRectangle(p: Point, rect: Rect): Point {
    const rArea = lineLength(rect.p0, rect.p1) * lineLength(rect.p1, rect.p2);
    const sAreas =
        triangleArea(p, rect.p0, rect.p1) +
        triangleArea(p, rect.p1, rect.p2) +
        triangleArea(p, rect.p2, rect.p3) +
        triangleArea(p, rect.p3, rect.p0);

    return Math.abs(rArea - sAreas) < rArea * 0.01 ? p : null;
}

/// Bezier functions

export function getLUT(points: Point[], steps: number = 100): Point[] {
    let lut = [];
    // n steps means n+1 points
    steps++;

    for (let i = 0; i < steps; i++) {
        let t = i / (steps - 1);
        let p = round(compute(t, points), 3);
        lut.push(p);
    }
    return lut;
}

function compute(t: number, points: Point[]): Point {
    let p = points;

    if (t === 0) return points[0];

    const order = points.length - 1;

    if (t === 1) return points[order];

    const mt = 1 - t;

    // constant?
    if (order === 0) return points[0];

    // linear?
    if (order === 1) {
        const ret = {
            x: mt * p[0].x + t * p[1].x,
            y: mt * p[0].y + t * p[1].y,
            t: t,
        };
        return ret;
    }

    // quadratic/cubic curve?
    let mt2 = mt * mt;
    let t2 = t * t;
    let a: number;
    let b: number;
    let c: number;
    let d = 0;

    if (order === 2) {
        p = [p[0], p[1], p[2], { x: 0, y: 0 }];
        a = mt2;
        b = mt * t * 2;
        c = t2;
    } else if (order === 3) {
        a = mt2 * mt;
        b = mt2 * t * 3;
        c = mt * t2 * 3;
        d = t * t2;
    }

    const ret = {
        x: a * p[0].x + b * p[1].x + c * p[2].x + d * p[3].x,
        y: a * p[0].y + b * p[1].y + c * p[2].y + d * p[3].y,
        t: t,
    };
    return ret;
}

export function toD(points: Point[]): string {
    let str = "";

    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        str += i == 0 ? `M${point.x},${point.y}` : `L${point.x},${point.y}`;
    }

    return str;
}
