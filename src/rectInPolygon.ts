import {
    calculateBoundsRect,
    intersectPolygons,
    Line,
    lineAngle,
    lineLength,
    lineLengthXY,
    linesIntersectionXY,
    perpendicularToLine,
    Point,
    pointInsidePolygon,
    pointIsOnLine,
    pointsCenter,
    shiftPoint,
    сentroid,
} from "./index";

export function getRectForPolygon(points: Point[]): Point[] {

    const result = centroidRect(points);

    if (result == null) {
        var pts = points.map((p) => new Point(Math.round(p.x), Math.round(p.y)));
        var _controlPoints = controlPoints(pts);

        return gGetRect(_controlPoints);
    }

    return result;
}

function controlPoints(points: Point[]): Point[] {
    var newPoints: [number, Point][] = [];

    let addnewPoint = (index: number, point: Point) => {
        if (!points.find((p) => samePoint(p, point)) && !newPoints.find((np) => np[0] == index && samePoint(np[1], point)))
            newPoints.push([index, point]);
    };

    var lines: Line[] = [];

    for (var i = 0; i < points.length - 1; i++) lines.push(new Line(points[i], points[i + 1]));

    for (let i = 0; i < lines.length; i++) {
        let line1 = lines[i];

        for (let j = 0; j < points.length; j++) {
            let point = points[j];

            if (pointIsOnLine(point, line1.p0, line1.p1)) continue;

            var perp = perpendicularToLine(point, line1.p0, line1.p1);

            if (perp.isInside) addnewPoint(lines.indexOf(line1), perp.p);
        }

        for (let k = 0; k < lines.length; k++) {
            let line2 = lines[k];

            if (line1 == line2) continue;

            var inter = linesIntersectionXY(
                line1.p0.x,
                line1.p0.y,
                line1.p1.x,
                line1.p1.y,
                line2.p0.x,
                line2.p0.y,
                line2.p1.x,
                line2.p1.y
            );
            if (!inter.onLine1 && !inter.onLine2) continue;

            if (inter.onLine1) addnewPoint(lines.indexOf(line1), inter.point);
            else addnewPoint(lines.indexOf(line2), inter.point);
        }
    }

    var allPoints: Point[] = [];

    for (var i = 0; i < lines.length; i++) {
        var p0 = lines[i].p0;

        if (!allPoints.find((ap) => samePoint(ap, p0))) allPoints.push(new Point(p0.x, p0.y));

        newPoints
            .filter((n) => n[0] == i)
            .sort((p) => lineLength(p[1], p0))
            .forEach((np) => {
                if (!allPoints.find((ap) => samePoint(ap, np[1]))) allPoints.push(new Point(np[1].x, np[1].y));
            });
    }
    return allPoints;
}

function samePoint(p1: Point, p2: Point, minDistance: number = 1) {
    return lineLength(p1, p2) <= minDistance;
}

function gGetRect(points: Point[]): Point[] {
    var area = 0;
    var rect: Point[] = [];

    var centerPoints: Point[] = [];
    for (var pi = 1; pi < points.length; pi++) centerPoints.push(pointsCenter(points[pi], points[pi - 1]));

    for (var i = 0; i < points.length - 3; i++) {
        var first = points[i];

        for (var j = i + 1; j < points.length - 2; j++) {
            var second = points[j];

            for (var k = j + 1; k < points.length - 1; k++) {
                var third = points[k];

                for (var l = k + 1; l < points.length; l++) {
                    var fourth = points[l];

                    var r = [first, second, third, fourth, first];
                    var a = rectArea(r);

                    var _isRect = isRect(r);

                    if (
                        _isRect &&
                        a > area &&
                        !centerPoints.find((p) => pointInsidePolygon(p, r, true)) &&
                        !points.find((p) => pointInsidePolygon(p, r, true))
                    ) {
                        area = a;
                        rect = r;
                    }
                }
            }
        }
    }

    return rect;
}

function rectArea(points: Point[]): number {
    return isRect(points) ? lineLength(points[0], points[1]) * lineLength(points[1], points[2]) : 0;
}

function isRect(points: Point[]): boolean {
    if (points.length != 5 && points.length != 4) return false;

    var first = points[0];
    var second = points[1];
    var third = points[2];
    var fourth = points[3];

    return (
        Math.round(Math.abs(lineAngle(first, second) - lineAngle(second, third))) % 90 == 0 &&
        Math.abs(lineLength(first, second) - lineLength(third, fourth)) < 2 &&
        Math.abs(lineLength(second, third) - lineLength(fourth, first)) < 2
    );
}

function centroidRect(points: Point[]): Point[] {
    var center = сentroid(points);

    if (!pointInsidePolygon(center, points)) return null;

    var polyRect = calculateBoundsRect(points);

    var maxArea = 0;
    var maxPoints: Point[] = null;

    var edgeOffsetLeft = nearestIntersection(center, shiftPoint(center, polyRect.width, 180), points) ?? polyRect.width;
    var edgeOffseTop = nearestIntersection(center, shiftPoint(center, polyRect.height, 270), points) ?? polyRect.height;
    var edgeOffseRight = nearestIntersection(center, shiftPoint(center, polyRect.width, 0), points) ?? polyRect.width;
    var edgeOffseBottom = nearestIntersection(center, shiftPoint(center, polyRect.height, 90), points) ?? polyRect.height;

    for (var left = 1; left <= edgeOffsetLeft; left += edgeOffsetLeft / 20) {
        for (var top = 1; top <= edgeOffseTop; top += edgeOffseTop / 20) {
            var p0 = new Point(center.x - left, center.y - top);
            if (!pointInsidePolygon(p0, points)) break;

            for (var right = 1; right <= edgeOffseRight; right += edgeOffseRight / 20) {
                var p1 = new Point(center.x + right, center.y - top);
                if (!pointInsidePolygon(p1, points)) break;

                for (var bottom = 1; bottom <= edgeOffseBottom; bottom += edgeOffseBottom / 20) {
                    var p2 = new Point(center.x + right, center.y + bottom);
                    var p3 = new Point(center.x - left, center.y + bottom);

                    if (!pointInsidePolygon(p2, points) || !pointInsidePolygon(p3, points)) break;

                    var rect = [p0, p1, p2, p3, p0];

                    var intersect = intersectPolygons(rect, points);

                    if (!intersect) {
                        var area = rectArea(rect);

                        if (area > maxArea) {
                            maxArea = area;
                            maxPoints = rect;
                        }
                    }
                }
            }
        }
    }

    if (maxPoints == null) return null;
    return maxPoints;
}

function nearestIntersection(p0: Point, p1: Point, points: Point[]): number {
    let interPoints: Point[] = [];

    for (var i = 1; i < points.length; i++) {
        var inter = linesIntersectionXY(p0.x, p0.y, p1.x, p1.y, points[i - 1].x, points[i - 1].y, points[i].x, points[i].y);
        if (!inter.onLine1 || !inter.onLine2) continue;
        interPoints.push(inter.point);
    }

    if (interPoints.length == 0) return null;

    var shortest = interPoints.sort((o) => lineLengthXY(p0.x, p0.y, o.x, o.y))[0];

    return lineLengthXY(p0.x, p0.y, shortest.x, shortest.y);
}
