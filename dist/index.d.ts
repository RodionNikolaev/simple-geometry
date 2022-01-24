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
    readonly width: number;
    readonly height: number;
    readonly x: number;
    readonly y: number;
    static fromWH(x: number, y: number, width: number, height: number): Rect;
}
export declare enum BasePoint {
    TopLeft = 4,
    Top = 5,
    TopRight = 6,
    Right = 7,
    BottomRight = 0,
    Bottom = 1,
    BottomLeft = 2,
    Left = 3,
}
export declare function round(number: number, digits?: number): number;
export declare let roundPoint: (point: Point, roundValue: number) => Point;
export declare function scalePoint(p: Point, dx: number, dy: number, rect: Rect, basePoint: BasePoint): Point;
export declare function translatePoint(delta: Point, dx: number, dy: number): Point;
export declare function rotatePoint(angle: number, point: Point, cX: number, cY: number): Point;
export declare function rotatePoints(angle: number, points: Point[], cX: number, cY: number): Point[];
export declare let shiftPoint: (point: Point, length: number, angle: number) => Point;
export declare function contains(r1: Rect, r2: Rect): boolean;
export declare function getViewBox(mousePosition: Point, viewBox: Rect, heightWidthRatio: number, zoomIn: boolean): Rect;
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
export declare function center(p1: Point, p2: Point): Point;
export declare function pointIsOnLine(p: Point, p1: Point, p2: Point): boolean;
export declare function perpendicularToLine(point: Point, start: Point, end: Point): {
    p: Point;
    isInside: boolean;
};
export declare function minDistanceLineEnds(l1: Line, p: Point): number;
export declare type LinesIntersection = {
    point: Point;
    onLine1: boolean;
    onLine2: boolean;
};
export declare function linesIntersection(line1: Line, line2: Line): LinesIntersection;
export declare function perpendicularPoint(start: Point, end: Point, pLength: number): Point;
export declare function lineRectangleIntersections(line: Line, rect: Rect): Point[];
