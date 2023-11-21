import { Point } from "./points";
export declare class PathPoint {
    code: string;
    point: Point;
    cp1: Point;
    cp2: Point;
    constructor(code: string, point: Point, cp1?: Point, cp2?: Point);
    isVisible: boolean;
}
export declare function addPathPoint(pathPoints: PathPoint[], clickPoint: Point, isCurved: boolean): PathPoint[];
export declare function splitPath(pathPoints: PathPoint[], clickPoint: Point): PathPoint[];
export declare function removePathPoint(pathPoints: PathPoint[], pointIndex: number, code: "point" | "cp1" | "cp2"): PathPoint[];
export declare function splitPolygon(pathPoints: PathPoint[], p0: Point, p1: Point): PathPoint[];
export declare function linerizePolygon(pathPoints: PathPoint[]): Point[][];
export declare function pathStringToPathPoints(d: string, t?: string): PathPoint[];
/**
 * Generates a LookUp Table of coordinates on the curve
 * @param points point, cp1, [cp2], point
 * @param steps
 * @returns
 */
export declare function getLUT(points: Point[], steps?: number): Point[];
