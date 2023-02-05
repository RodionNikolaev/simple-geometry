"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRectForPolygon = void 0;
const index_1 = require("./index");
function getRectForPolygon(points) {
    const result = centroidRect(points);
    if (result == null) {
        var pts = points.map((p) => new index_1.Point(Math.round(p.x), Math.round(p.y)));
        var _controlPoints = controlPoints(pts);
        return gGetRect(_controlPoints);
    }
    return result;
}
exports.getRectForPolygon = getRectForPolygon;
function controlPoints(points) {
    var newPoints = [];
    let addnewPoint = (index, point) => {
        if (!points.find((p) => samePoint(p, point)) && !newPoints.find((np) => np[0] == index && samePoint(np[1], point)))
            newPoints.push([index, point]);
    };
    var lines = [];
    for (var i = 0; i < points.length - 1; i++)
        lines.push(new index_1.Line(points[i], points[i + 1]));
    for (let i = 0; i < lines.length; i++) {
        let line1 = lines[i];
        for (let j = 0; j < points.length; j++) {
            let point = points[j];
            if ((0, index_1.pointIsOnLine)(point, line1.p0, line1.p1))
                continue;
            var perp = (0, index_1.perpendicularToLine)(point, line1.p0, line1.p1);
            if (perp.isInside)
                addnewPoint(lines.indexOf(line1), perp.p);
        }
        for (let k = 0; k < lines.length; k++) {
            let line2 = lines[k];
            if (line1 == line2)
                continue;
            var inter = (0, index_1.linesIntersectionXY)(line1.p0.x, line1.p0.y, line1.p1.x, line1.p1.y, line2.p0.x, line2.p0.y, line2.p1.x, line2.p1.y);
            if (!inter.onLine1 && !inter.onLine2)
                continue;
            if (inter.onLine1)
                addnewPoint(lines.indexOf(line1), inter.point);
            else
                addnewPoint(lines.indexOf(line2), inter.point);
        }
    }
    var allPoints = [];
    for (var i = 0; i < lines.length; i++) {
        var p0 = lines[i].p0;
        if (!allPoints.find((ap) => samePoint(ap, p0)))
            allPoints.push(new index_1.Point(p0.x, p0.y));
        newPoints
            .filter((n) => n[0] == i)
            .sort((p) => (0, index_1.lineLength)(p[1], p0))
            .forEach((np) => {
            if (!allPoints.find((ap) => samePoint(ap, np[1])))
                allPoints.push(new index_1.Point(np[1].x, np[1].y));
        });
    }
    return allPoints;
}
function samePoint(p1, p2, minDistance = 1) {
    return (0, index_1.lineLength)(p1, p2) <= minDistance;
}
function gGetRect(points) {
    var area = 0;
    var rect = [];
    var centerPoints = [];
    for (var pi = 1; pi < points.length; pi++)
        centerPoints.push((0, index_1.pointsCenter)(points[pi], points[pi - 1]));
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
                    if (_isRect &&
                        a > area &&
                        !centerPoints.find((p) => (0, index_1.pointInsidePolygon)(p, r, true)) &&
                        !points.find((p) => (0, index_1.pointInsidePolygon)(p, r, true))) {
                        area = a;
                        rect = r;
                    }
                }
            }
        }
    }
    return rect;
}
function rectArea(points) {
    return isRect(points) ? (0, index_1.lineLength)(points[0], points[1]) * (0, index_1.lineLength)(points[1], points[2]) : 0;
}
function isRect(points) {
    if (points.length != 5 && points.length != 4)
        return false;
    var first = points[0];
    var second = points[1];
    var third = points[2];
    var fourth = points[3];
    return (Math.round(Math.abs((0, index_1.lineAngle)(first, second) - (0, index_1.lineAngle)(second, third))) % 90 == 0 &&
        Math.abs((0, index_1.lineLength)(first, second) - (0, index_1.lineLength)(third, fourth)) < 2 &&
        Math.abs((0, index_1.lineLength)(second, third) - (0, index_1.lineLength)(fourth, first)) < 2);
}
function centroidRect(points) {
    var _a, _b, _c, _d;
    var center = (0, index_1.сentroid)(points);
    if (!(0, index_1.pointInsidePolygon)(center, points))
        return null;
    var polyRect = (0, index_1.calculateBoundsRect)(points);
    var maxArea = 0;
    var maxPoints = null;
    var edgeOffsetLeft = (_a = nearestIntersection(center, (0, index_1.shiftPoint)(center, polyRect.width, 180), points)) !== null && _a !== void 0 ? _a : polyRect.width;
    var edgeOffseTop = (_b = nearestIntersection(center, (0, index_1.shiftPoint)(center, polyRect.height, 270), points)) !== null && _b !== void 0 ? _b : polyRect.height;
    var edgeOffseRight = (_c = nearestIntersection(center, (0, index_1.shiftPoint)(center, polyRect.width, 0), points)) !== null && _c !== void 0 ? _c : polyRect.width;
    var edgeOffseBottom = (_d = nearestIntersection(center, (0, index_1.shiftPoint)(center, polyRect.height, 90), points)) !== null && _d !== void 0 ? _d : polyRect.height;
    for (var left = 1; left <= edgeOffsetLeft; left += edgeOffsetLeft / 20) {
        for (var top = 1; top <= edgeOffseTop; top += edgeOffseTop / 20) {
            var p0 = new index_1.Point(center.x - left, center.y - top);
            if (!(0, index_1.pointInsidePolygon)(p0, points))
                break;
            for (var right = 1; right <= edgeOffseRight; right += edgeOffseRight / 20) {
                var p1 = new index_1.Point(center.x + right, center.y - top);
                if (!(0, index_1.pointInsidePolygon)(p1, points))
                    break;
                for (var bottom = 1; bottom <= edgeOffseBottom; bottom += edgeOffseBottom / 20) {
                    var p2 = new index_1.Point(center.x + right, center.y + bottom);
                    var p3 = new index_1.Point(center.x - left, center.y + bottom);
                    if (!(0, index_1.pointInsidePolygon)(p2, points) || !(0, index_1.pointInsidePolygon)(p3, points))
                        break;
                    var rect = [p0, p1, p2, p3, p0];
                    var intersect = (0, index_1.intersectPolygons)(rect, points);
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
    if (maxPoints == null)
        return null;
    return maxPoints;
}
function nearestIntersection(p0, p1, points) {
    let interPoints = [];
    for (var i = 1; i < points.length; i++) {
        var inter = (0, index_1.linesIntersectionXY)(p0.x, p0.y, p1.x, p1.y, points[i - 1].x, points[i - 1].y, points[i].x, points[i].y);
        if (!inter.onLine1 || !inter.onLine2)
            continue;
        interPoints.push(inter.point);
    }
    if (interPoints.length == 0)
        return null;
    var shortest = interPoints.sort((o) => (0, index_1.lineLengthXY)(p0.x, p0.y, o.x, o.y))[0];
    return (0, index_1.lineLengthXY)(p0.x, p0.y, shortest.x, shortest.y);
}
