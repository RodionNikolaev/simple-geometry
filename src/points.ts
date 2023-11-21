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
    Center = 8,
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

export function shiftPoint(point: Point, length: number, angle: number): Point {
    return {
        x: point.x + length * Math.sin(((90 - angle) * Math.PI) / 180.0),
        y: point.y + length * Math.sin((angle * Math.PI) / 180.0),
    };
}

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

export function minDistanceLineEndsXY(x1: number, y1: number, x2: number, y2: number, x: number, y: number) {
    return Math.min(lineLengthXY(x1, y1, x, y), lineLengthXY(x2, y2, x, y));
}

export interface LinesIntersection {
    point: Point;
    onLine1: boolean;
    onLine2: boolean;
}

export function linesIntersection(line1: Line, line2: Line, minDistance: number = 0): LinesIntersection {
    return linesIntersectionXY(
        line1.p0.x,
        line1.p0.y,
        line1.p1.x,
        line1.p1.y,
        line2.p0.x,
        line2.p0.y,
        line2.p1.x,
        line2.p1.y,
        minDistance
    );
}

export function linesIntersectionXY(
    x1: number,
    y1: number,
    x2: number,
    y2: number,

    x3: number,
    y3: number,
    x4: number,
    y4: number,

    minDistance: number = 0
): LinesIntersection {
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

    denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
    if (denominator === 0) return result;

    a = y1 - y3;
    b = x1 - x3;
    numerator1 = (x4 - x3) * a - (y4 - y3) * b;
    numerator2 = (x2 - x1) * a - (y2 - y1) * b;
    a = round(numerator1 / denominator, 6);
    b = round(numerator2 / denominator, 6);

    result.point = new Point(x1 + a * (x2 - x1), y1 + a * (y2 - y1));

    if (a >= 0 && a <= 1) result.onLine1 = true;
    if (b >= 0 && b <= 1) result.onLine2 = true;

    if (
        minDistance &&
        (!result.onLine1 || !result.onLine2) &&
        ((result.onLine1 && minDistanceLineEndsXY(x3, y3, x4, y4, result.point.x, result.point.y) <= minDistance) ||
            (result.onLine2 && minDistanceLineEndsXY(x1, y1, x2, y2, result.point.x, result.point.y) <= minDistance))
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

export function pointInsidePolygon(point: Point, polygon: Point[], excludeBounds: boolean = false): boolean {
    if (excludeBounds)
        for (var i = 0; i < polygon.length - 1; i++) if (pointIsOnLine(point, polygon[i], polygon[i + 1])) return false;

    let result = false;
    let j = polygon.length - 1;
    for (var i = 0; i < polygon.length; i++) {
        if ((polygon[i].y < point.y && polygon[j].y >= point.y) || (polygon[j].y < point.y && polygon[i].y >= point.y)) {
            if (
                polygon[i].x + ((point.y - polygon[i].y) / (polygon[j].y - polygon[i].y)) * (polygon[j].x - polygon[i].x) <
                point.x
            ) {
                result = !result;
            }
        }
        j = i;
    }
    return result;
}

/**
 *
 * @param p point
 * @param rect unrotated rectangle
 * @returns
 */
export function pointInsideRectangleUnrotated(p: Point, rect: Rect): boolean {
    return p.x > rect.p0.x && p.x < rect.p2.x && p.y > rect.p0.y && p.y < rect.p2.y;
}

/**
 * Detect smaller unrotated rectangle inside the bigger unrotated rectangle
 * @param rect1 Bigger rectangle
 * @param rect2 Smaller rectangle
 * @returns
 */
export function rectangleInsideRectangleUnrotated(rect1: Rect, rect2: Rect): boolean {
    return (
        pointInsideRectangleUnrotated(rect2.p0, rect1) &&
        pointInsideRectangleUnrotated(rect2.p1, rect1) &&
        pointInsideRectangleUnrotated(rect2.p2, rect1) &&
        pointInsideRectangleUnrotated(rect2.p3, rect1)
    );
}

export function сentroid(points: Point[]) {
    let accumulatedArea = 0;
    let centerX = 0;
    let centerY = 0;

    for (var i = 0, j = points.length - 1; i < points.length; j = i++) {
        if (points[i] == null || points[j] == null) continue;

        var temp = points[i].x * points[j].y - points[j].x * points[i].y;
        accumulatedArea += temp;
        centerX += (points[i].x + points[j].x) * temp;
        centerY += (points[i].y + points[j].y) * temp;
    }

    accumulatedArea *= 3;
    return new Point(centerX / accumulatedArea, centerY / accumulatedArea);
}

export function calculateBoundsRect(pts: Point[]): Rect {
    let points = [].concat(pts).sort((a, b) => a.x - b.x);

    var x1 = points[0].x;
    var x2 = points[points.length - 1].x;

    points = points.sort((a, b) => a.y - b.y);

    var y1 = points[0].y;
    var y2 = points[points.length - 1].y;

    return new Rect(new Point(x1, y1), new Point(x2, y1), new Point(x2, y2), new Point(x1, y2));
}

export function intersectPolygons(points: Point[], polygon: Point[]): boolean {
    for (var i = 1; i < points.length; i++) {
        for (var j = 1; j < polygon.length; j++) {
            var inter = linesIntersectionXY(
                points[i - 1].x,
                points[i - 1].y,
                points[i].x,
                points[i].y,
                polygon[j - 1].x,
                polygon[j - 1].y,
                polygon[j].x,
                polygon[j].y
            );
            if (inter.onLine1 && inter.onLine2) return true;
        }
    }

    return false;
}
