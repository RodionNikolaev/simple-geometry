import { Point, lineLength, linesIntersectionXY, perpendicularToLine } from "./points";

let { Bezier } = require("bezier-js");
let svgpath = require("svgpath");

export class PathPoint {
    public constructor(public code: string, public point: Point, public cp1: Point = null, public cp2: Point = null) {}
    public isVisible: boolean = true;
}

export function addPathPoint(pathPoints: PathPoint[], clickPoint: Point, isCurved: boolean): PathPoint[] {
    let subparts = subParts(pathPoints);

    let { pathPoint, pointOnPath, length } = subparts
        .map((p) => getPointOnPath(p, clickPoint))
        .sort((a, b) => a.length - b.length)[0];

    let actualPoint = length < 10 ? pointOnPath : clickPoint;

    let pPoints = subparts.find((p) => p.includes(pathPoint));
    let index = pPoints.indexOf(pathPoint);

    if (pathPoint.code === "Z" && pathPoint.point) pathPoint.point = null;

    if (pathPoint.code == "L" || pathPoint.code === "Z") {
        if (isCurved) {
            if (pathPoint.code === "Z") pathPoint.point = getNearestMPoint(pPoints, index).point;

            lineToQuadratic(pathPoint, actualPoint);
        } else {
            pPoints.splice(index, 0, new PathPoint("L", actualPoint));
        }
    } else {
        if (!isCurved) {
            var pp = splitBezier(pPoints[index - 1].point, pPoints[index], clickPoint);
            pPoints.splice(index, 1, ...pp);
        } else if (pathPoint.code == "Q") {
            quadraticToQubic(pathPoint, actualPoint);
        }
    }

    return subparts.reduce((prev, curr) => [...prev, ...curr], []).filter((p) => p.code != "Z" || (p.code === "Z" && !p.point));
}

export function splitPath(pathPoints: PathPoint[], clickPoint: Point): PathPoint[] {
    let subparts = subParts(pathPoints);
    let { pathPoint, pointOnPath } = subparts.map((p) => getPointOnPath(p, clickPoint)).sort((a, b) => a.length - b.length)[0];

    let pPoints = subparts.find((p) => p.includes(pathPoint));

    let index = pPoints.indexOf(pathPoint);

    if (pathPoint.code === "Z" && pathPoint.point) pathPoint.point = null;

    if (!pathPoint.cp1 && !pathPoint.cp2) {
        pPoints.splice(index, 0, ...[new PathPoint("L", pointOnPath), new PathPoint("M", pointOnPath)]);
    } else {
        let pp = splitBezier(pPoints[index - 1].point, pPoints[index], clickPoint);
        pp.splice(1, 0, new PathPoint("M", pp[0].point));
        pPoints.splice(index, 1, ...pp);
    }

    if (pPoints[pPoints.length - 1].code == "Z" && !pPoints[pPoints.length - 1].point) replaceZPoint(pPoints, index);

    return subparts.reduce((prev, curr) => [...prev, ...curr], []).filter((p) => p.code != "Z" || (p.code === "Z" && !p.point));
}

export function removePathPoint(pathPoints: PathPoint[], pointIndex: number, code: "point" | "cp1" | "cp2"): PathPoint[] {
    let pPoints = pathPoints.concat([]);

    let point = pPoints[pointIndex];

    if (code == "cp2") point = cubicToQuadratic(point, 2);
    else if (code == "cp1" && point.code == "C") point = cubicToQuadratic(point, 1);
    else if (code == "cp1" && point.code == "Q") point = quadraticToLine(point);
    else if (code == "point") deletePathPoint(pPoints, point);

    return pPoints;
}

export function splitPolygon(pathPoints: PathPoint[], p0: Point, p1: Point): PathPoint[] {
    let subparts = linerizePolygon(pathPoints);
    let intersections: Point[] = [];

    for (let i = 0; i < subparts.length; i++) {
        const part = subparts[i];

        for (let j = 1; j < part.length; j++) {
            let pPoint = part[j - 1];
            let point = part[j];

            let inter = linesIntersectionXY(p0.x, p0.y, p1.x, p1.y, pPoint.x, pPoint.y, point.x, point.y);

            if (inter.onLine1 && inter.onLine2) intersections.push(new Point(inter.point.x + 2, inter.point.y + 2));
        }
    }

    let _pathPoints: PathPoint[] = pathPoints;

    for (let i = 0; i < intersections.length; i++) {
        _pathPoints = clonePP(splitPath(_pathPoints, intersections[i]));
    }

    return _pathPoints;
}

export function linerizePolygon(pathPoints: PathPoint[]): Point[][] {
    let subparts = subParts(clonePP(pathPoints));
    let result: Point[][] = [];

    for (let i = 0; i < subparts.length; i++) {
        const subpart = subparts[i];

        const _subpart: Point[] = [];
        result.push(_subpart);

        for (let j = 0; j < subpart.length; j++) {
            let pPoint = subpart[j - 1];
            let point = subpart[j];

            let points =
                !point.cp1 && !point.cp2
                    ? [point.code == "Z" ? subpart[0].point : point.point]
                    : getLUT(
                          [pPoint.point, point.cp1, point.cp2, point.point].filter((p) => !!p),
                          10
                      );

            _subpart.push(...points);
        }
    }

    return result;
}

export function pathStringToPathPoints(d: string, t: string = null): PathPoint[] {
    let commands: any[] = [];

    try {
        let path = svgpath(d).unarc().unshort().abs();

        if (t) path.transform(t).round(3);

        commands = path.segments;
    } catch (e) {
        return [];
    }

    let pathPoints: PathPoint[] = [];

    for (let index = 0; index < commands.length; index++) {
        let command = commands[index];

        let prevPPoint = pathPoints[pathPoints.length - 1] || null;
        let newPPoint = new PathPoint(command[0].toUpperCase(), null);

        if (command[0] == "M" || command[0] == "L" || command[0] == "C" || command[0] == "Q") {
            newPPoint.point = new Point(command[command.length - 2], command[command.length - 1]);

            if (command[0] == "C") {
                newPPoint.cp1 = new Point(command[1], command[2]);
                newPPoint.cp2 = new Point(command[3], command[4]);
            } else if (command[0] == "Q") newPPoint.cp1 = new Point(command[1], command[2]);
        } else if (command[0] == "V") {
            newPPoint.point = new Point(prevPPoint.point.x, command[1]);
        } else if (command[0] == "H") {
            newPPoint.point = new Point(command[1], prevPPoint.point.y);
        } else if (command[0] == "Z") {
            newPPoint.point = null;
        }

        pathPoints.push(newPPoint);
    }

    return pathPoints;
}

function subParts(pathPoints: PathPoint[]): PathPoint[][] {
    let sp: PathPoint[][] = [];
    let part: PathPoint[] = null;

    for (let i = 0; i < pathPoints.length; i++) {
        if (pathPoints[i].code == "M") {
            part = [];
            sp.push(part);
        }
        part.push(pathPoints[i]);
    }

    sp.forEach((p) => {
        if (p.length > 1 && p[p.length - 1].code != "Z") p.push(new PathPoint("Z", p[0].point));
    });

    return sp;
}

export function clonePP(pathPoints: Readonly<PathPoint[]>): PathPoint[] {
    return pathPoints.map((pp) => new PathPoint(pp.code, pp.point, pp.cp1, pp.cp2));
}

function replaceZPoint(pathPoints: PathPoint[], index: number) {
    for (let i = 0; i <= index; i++) pathPoints.push(...pathPoints.splice(0, 1));

    for (let i = 0; i < pathPoints.length; i++) {
        if (pathPoints[i].code == "Z" && pathPoints[i + 1]?.code == "M") {
            pathPoints[i + 1].code = "L";
            pathPoints.splice(i, 1);
            break;
        }
    }
}

function splitBezier(point: Point, pathPoint: PathPoint, clickPoint: Point): PathPoint[] {
    let pathPoints: PathPoint[] = [];

    let bezier = createBezier(point, pathPoint);
    let lut = getLUT(
        [point, pathPoint.cp1, pathPoint.cp2, pathPoint.point].filter((p) => !!p),
        30
    );

    let len = 0;
    let fullLen = lut.reduce((prev, curr, index) => (index > 0 ? prev + lineLength(lut[index - 1], curr) : 0), 0);

    for (let i = 0; i < lut.length; i++) {
        let perp = perpendicularToLine(clickPoint, lut[i], lut[i + 1]);

        if (perp.isInside) {
            len += lineLength(lut[i], perp.p);
            break;
        }

        len += lineLength(lut[i], lut[i + 1]);
    }

    let { left, right } = bezier.split(len / fullLen);
    let lPoints = left.points;
    let rPoints = right.points;

    if (left.points.length === 3) {
        pathPoints.push(new PathPoint("Q", new Point(lPoints[2].x, lPoints[2].y), new Point(lPoints[1].x, lPoints[1].y)));
        pathPoints.push(new PathPoint("Q", new Point(rPoints[2].x, rPoints[2].y), new Point(rPoints[1].x, rPoints[1].y)));
    } else {
        pathPoints.push(
            new PathPoint(
                "C",
                new Point(lPoints[3].x, lPoints[3].y),
                new Point(lPoints[1].x, lPoints[1].y),
                new Point(lPoints[2].x, lPoints[2].y)
            )
        );
        pathPoints.push(
            new PathPoint(
                "C",
                new Point(rPoints[3].x, rPoints[3].y),
                new Point(rPoints[1].x, rPoints[1].y),
                new Point(rPoints[2].x, rPoints[2].y)
            )
        );
    }

    return pathPoints;
}

function getPointOnPath(
    pathPoints: PathPoint[],
    clickPoint: Point
): { pathPoint: PathPoint; pointOnPath: Point; length: number } {
    let min: { len: number; pathPoint: PathPoint; pointOnPath: Point } = {
        len: Number.MAX_VALUE,
        pathPoint: null,
        pointOnPath: null,
    };

    for (let index = 1; index < pathPoints.length; index++) {
        const p = pathPoints[index];
        const pp = pathPoints[index - 1];

        let subPoints: Point[] = [];

        if (p.code === "Z") {
            subPoints = [pathPoints[index - 1].point, getNearestMPoint(pathPoints, index).point];
        } else if (pp.point && !p.cp1 && !p.cp2) {
            subPoints = [pp.point, p.point];
        } else if (p.cp1) {
            subPoints = getLUT(
                [pp.point, p.cp1, p.cp2, p.point].filter((p) => !!p),
                10
            );
        }

        for (let i = 1; i < subPoints.length; i++) {
            let perp = perpendicularToLine(clickPoint, subPoints[i - 1], subPoints[i]);
            if (perp.isInside) {
                let len = lineLength(perp.p, clickPoint);
                if (len && len < min.len) {
                    min.len = len;
                    min.pathPoint = pathPoints[index];
                    min.pointOnPath = perp.p;
                }
            }
        }
    }

    return {
        length: min.len,
        pathPoint: min.pathPoint,
        pointOnPath: min.pointOnPath,
    };
}

function cubicToQuadratic(point: PathPoint, cpIndexToRemove: 1 | 2): PathPoint {
    point.code = "Q";
    point.cp1 = cpIndexToRemove == 1 ? point.cp2 : point.cp1;
    point.cp2 = null;
    return point;
}

function quadraticToLine(point: PathPoint): PathPoint {
    point.code = "L";
    point.cp1 = null;
    return point;
}

function lineToQuadratic(point: PathPoint, cp: Point): PathPoint {
    point.code = "Q";
    point.cp1 = cp;
    return point;
}

function quadraticToQubic(point: PathPoint, cp: Point): PathPoint {
    point.code = "C";

    if (lineLength(cp, point.point) < lineLength(point.cp1, point.point)) {
        point.cp2 = cp;
    } else {
        point.cp2 = point.cp1;
        point.cp1 = cp;
    }

    return point;
}

function deletePathPoint(points: PathPoint[], point: PathPoint) {
    let index = points.indexOf(point);
    points.splice(index, 1);

    if (point.code == "M" && points[index]) {
        points[index].cp1 = points[index].cp2 = null;
        points[index].code = "M";
    }

    for (let i = 0; i < points.length - 1; i++) {
        if (points[i].code === "M" && points[i + 1].code === "M") {
            points.splice(i, 1);
            break;
        }
    }

    return points;
}

function getNearestMPoint(points: PathPoint[], index: number): PathPoint {
    for (let i = index; i >= 0; i--) {
        if (points[i].code === "M") return points[i];
    }
}

function createBezier(point: Point, pathPoint: PathPoint) {
    return new Bezier(
        ...[
            point.x,
            point.y,
            pathPoint.cp1.x,
            pathPoint.cp1.y,
            pathPoint.cp2?.x ?? null,
            pathPoint.cp2?.y ?? null,
            pathPoint.point.x,
            pathPoint.point.y,
        ].filter((p) => p != null)
    );
}

/**
 * Generates a LookUp Table of coordinates on the curve
 * @param points point, cp1, [cp2], point
 * @param steps
 * @returns
 */
export function getLUT(points: Point[], steps: number = 100): Point[] {
    let lut = [];
    // n steps means n+1 points
    steps++;

    for (let i = 0; i < steps; i++) {
        let t = i / (steps - 1);
        let p = compute(t, points);
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
