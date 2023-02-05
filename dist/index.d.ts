export declare class Point {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
}
export declare class Line {
    p0: Point;
    p1: Point;
    constructor(p0: Point, p1: Point);
}
export declare class Rect {
    p0: Point;
    p1: Point;
    p2: Point;
    p3: Point;
    constructor(p0: Point, p1: Point, p2: Point, p3: Point);
    static fromWH(x: number, y: number, width: number, height: number): Rect;
    get width(): number;
    get height(): number;
    get x(): number;
    get y(): number;
    isZero(): boolean;
    get center(): Point;
    get square(): number;
}
export declare enum BasePoint {
    TopLeft = 4,
    Top = 5,
    TopRight = 6,
    Right = 7,
    BottomRight = 0,
    Bottom = 1,
    BottomLeft = 2,
    Left = 3
}
/**
 * Round value to the number of gecimal digits
 * @param number Value
 * @param digits Number decimal digits
 * @returns Rounded value
 */
export declare function round(value: any, digits?: number): any;
export declare function roundPoint(point: Point, digits: number): Point;
export declare function scalePoint(p: Point, dx: number, dy: number, boundingRect: Rect, basePoint: BasePoint): Point;
export declare function translatePoint(delta: Point, dx: number, dy: number): Point;
export declare function rotatePoint(angle: number, point: Point, cX: number, cY: number): Point;
export declare function rotatePoints(angle: number, points: Point[], cX: number, cY: number): Point[];
export declare function shiftPoint(point: Point, length: number, angle: number): Point;
export declare function contains(r1: Rect, r2: Rect): boolean;
export declare function getViewBox(point: Point, viewBox: Rect, heightWidthRatio: number, zoomIn: boolean): Rect;
export declare function getAngle(centerPoint: Point, startPoint: Point, endPoint: Point): number;
export declare function lineAngle(startPoint: Point | {
    x: number;
    y: number;
}, endPoint: Point | {
    x: number;
    y: number;
}): number;
export declare function pointsCenter(startPoint: Point, endPoint: Point): Point;
export declare function getDirection(centerPoint: Point, startPoint: Point, endPoint: Point): number;
export declare function lineLength(p1: Point, p2: Point): number;
export declare function lineLengthXY(x1: number, y1: number, x2: number, y2: number): number;
export declare function pointIsOnLine(p: Point, p1: Point, p2: Point): boolean;
export declare function perpendicularToLine(point: Point, start: Point, end: Point): {
    p: Point;
    isInside: boolean;
};
export declare function minDistanceLineEnds(l1: Line, p: Point): number;
export declare function minDistanceLineEndsXY(x1: number, y1: number, x2: number, y2: number, x: number, y: number): number;
export interface LinesIntersection {
    point: Point;
    onLine1: boolean;
    onLine2: boolean;
}
export declare function linesIntersection(line1: Line, line2: Line, minDistance?: number): LinesIntersection;
export declare function linesIntersectionXY(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number, minDistance?: number): LinesIntersection;
export declare function perpendicularPoint(start: Point, end: Point, pLength: number): Point;
export declare function lineRectangleIntersections(line: Line, rect: Rect): Point[];
export declare function lineCenter(p1: Point, p2: Point): Point;
export declare function triangleArea(p1: Point, p2: Point, p3: Point): number;
export declare function pointInsideRectangle(p: Point, rect: Rect): Point;
export declare function pointInsidePolygon(point: Point, polygon: Point[], excludeBounds?: boolean): boolean;
/**
 *
 * @param p point
 * @param rect unrotated rectangle
 * @returns
 */
export declare function pointInsideRectangleUnrotated(p: Point, rect: Rect): boolean;
/**
 * Detect smaller unrotated rectangle inside the bigger unrotated rectangle
 * @param rect1 Bigger rectangle
 * @param rect2 Smaller rectangle
 * @returns
 */
export declare function rectangleInsideRectangleUnrotated(rect1: Rect, rect2: Rect): boolean;
export declare function сentroid(points: Point[]): Point;
export declare function calculateBoundsRect(pts: Point[]): Rect;
export declare function intersectPolygons(points: Point[], polygon: Point[]): boolean;
export declare function getLUT(points: Point[], steps?: number): Point[];
export declare function toD(points: Point[]): string;
