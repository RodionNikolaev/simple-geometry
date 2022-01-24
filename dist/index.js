"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
exports.Point = Point;
class Line {
    constructor(p0, p1) {
        this.p0 = p0;
        this.p1 = p1;
    }
}
exports.Line = Line;
class Rect {
    constructor(p0, p1, p2, p3) {
        this.p0 = p0;
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }
    get width() {
        return lineLength(this.p1, this.p2);
    }
    get height() {
        return lineLength(this.p1, this.p0);
    }
    get x() {
        return this.p0.x;
    }
    get y() {
        return this.p0.y;
    }
    static fromWH(x, y, width, height) {
        return new Rect(new Point(x, y), new Point(x + width, y), new Point(x + width, y + height), new Point(x, y + height));
    }
}
exports.Rect = Rect;
var BasePoint;
(function (BasePoint) {
    BasePoint[BasePoint["TopLeft"] = 4] = "TopLeft";
    BasePoint[BasePoint["Top"] = 5] = "Top";
    BasePoint[BasePoint["TopRight"] = 6] = "TopRight";
    BasePoint[BasePoint["Right"] = 7] = "Right";
    BasePoint[BasePoint["BottomRight"] = 0] = "BottomRight";
    BasePoint[BasePoint["Bottom"] = 1] = "Bottom";
    BasePoint[BasePoint["BottomLeft"] = 2] = "BottomLeft";
    BasePoint[BasePoint["Left"] = 3] = "Left";
})(BasePoint = exports.BasePoint || (exports.BasePoint = {}));
exports.round = (value, roundValue = 1) => Math.round(Math.round(value / roundValue) * roundValue);
exports.roundPoint = (point, roundValue) => !roundValue || roundValue == 0
    ? point
    : new Point(Math.round(exports.round(point.x, roundValue)), Math.round(exports.round(point.y, roundValue)));
function scalePoint(p, dx, dy, rect, basePoint) {
    let point;
    if (basePoint == BasePoint.Left || basePoint == BasePoint.Right)
        dy = 0;
    else if (basePoint == BasePoint.Top || basePoint == BasePoint.Bottom)
        dx = 0;
    if (basePoint == BasePoint.TopLeft || basePoint == BasePoint.Left || basePoint == BasePoint.Top) {
        point = new Point(exports.round(p.x + ((p.x - rect.x) / rect.width) * dx), exports.round(p.y + ((p.y - rect.y) / rect.height) * dy));
    }
    else if (basePoint == BasePoint.TopRight || basePoint == BasePoint.Right) {
        point = new Point(exports.round(p.x - ((rect.x + rect.width - p.x) / rect.width) * -1 * dx), exports.round(p.y + ((p.y - rect.y) / rect.height) * dy));
    }
    else if (basePoint == BasePoint.BottomRight) {
        point = new Point(exports.round(p.x - ((rect.x + rect.width - p.x) / rect.width) * -1 * dx), exports.round(p.y - ((rect.y + rect.height - p.y) / rect.height) * -1 * dy));
    }
    else if (basePoint == BasePoint.BottomLeft || basePoint == BasePoint.Bottom) {
        point = new Point(exports.round(p.x + ((p.x - rect.x) / rect.width) * dx), exports.round(p.y - ((rect.y + rect.height - p.y) / rect.height) * -1 * dy));
    }
    if (isNaN(point.x) || isNaN(point.y) || !isFinite(point.x) || !isFinite(point.y)) {
        return p;
    }
    return point;
}
exports.scalePoint = scalePoint;
function translatePoint(delta, dx, dy) {
    return new Point(exports.round(dx + delta.x), exports.round(dy + delta.y));
}
exports.translatePoint = translatePoint;
function rotatePoint(angle, point, cX, cY) {
    let radians = angle / (180 / Math.PI);
    return new Point(exports.round((point.x - cX) * Math.cos(radians) - (point.y - cY) * Math.sin(radians) + cX), exports.round((point.x - cX) * Math.sin(radians) + (point.y - cY) * Math.cos(radians) + cY));
}
exports.rotatePoint = rotatePoint;
function rotatePoints(angle, points, cX, cY) {
    return points.map((point) => rotatePoint(angle, point, cX, cY));
}
exports.rotatePoints = rotatePoints;
exports.shiftPoint = (point, length, angle) => {
    return {
        x: point.x + length * Math.sin(((90 - angle) * Math.PI) / 180.0),
        y: point.y + length * Math.sin((angle * Math.PI) / 180.0),
    };
};
function contains(r1, r2) {
    return r2.x + r2.width < r1.x + r1.width && r2.x > r1.x && r2.y > r1.y && r2.y + r2.height < r1.y + r1.height;
}
exports.contains = contains;
function getViewBox(mousePosition, viewBox, heightWidthRatio, zoomIn) {
    // Percentage offset mouse from top left corner
    let offsetX = (mousePosition.x - viewBox.x) / viewBox.width;
    let offsetY = (mousePosition.y - viewBox.y) / viewBox.height;
    let newWidth = zoomIn ? 0.8 * viewBox.width : 1.2 * viewBox.width;
    let newHeight = newWidth * heightWidthRatio;
    let newX = viewBox.x - (newWidth - viewBox.width) * offsetX;
    let newY = viewBox.y - (newHeight - viewBox.height) * offsetY;
    return Rect.fromWH(newX, newY, newWidth, newHeight);
}
exports.getViewBox = getViewBox;
function getAngle(centerPoint, startPoint, endPoint) {
    let a = lineLength(startPoint, centerPoint);
    let b = lineLength(endPoint, centerPoint);
    let c = lineLength(startPoint, endPoint);
    let cos = exports.round((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b), 3);
    let direction = getDirection(centerPoint, startPoint, endPoint);
    return direction * exports.round((Math.acos(cos > 1 ? 1 : cos) * 180) / Math.PI, 2);
}
exports.getAngle = getAngle;
function lineAngle(startPoint, endPoint) {
    let p1 = { x: startPoint.x + 100000, y: startPoint.y };
    let a = lineLength(p1, startPoint);
    let b = lineLength(endPoint, startPoint);
    let c = lineLength(p1, endPoint);
    let cos = (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b);
    let direction = getDirection(startPoint, p1, endPoint);
    return direction * exports.round((Math.acos(cos > 1 ? 1 : cos) * 180) / Math.PI, 3);
}
exports.lineAngle = lineAngle;
function pointsCenter(startPoint, endPoint) {
    return new Point((startPoint.x + endPoint.x) / 2, (startPoint.y + endPoint.y) / 2);
}
exports.pointsCenter = pointsCenter;
function getDirection(centerPoint, startPoint, endPoint) {
    return (startPoint.x - centerPoint.x) * (endPoint.y - centerPoint.y) -
        (startPoint.y - centerPoint.y) * (endPoint.x - centerPoint.x) <
        0
        ? -1
        : 1;
}
exports.getDirection = getDirection;
function lineLength(p1, p2) {
    return exports.round(Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)), 4);
}
exports.lineLength = lineLength;
function lineLengthXY(x1, y1, x2, y2) {
    return exports.round(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)), 4);
}
exports.lineLengthXY = lineLengthXY;
function center(p1, p2) {
    return new Point((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
}
exports.center = center;
function pointIsOnLine(p, p1, p2) {
    return lineAngle(p1, p) == lineAngle(p1, p2) && lineLength(p1, p) <= lineLength(p1, p2);
}
exports.pointIsOnLine = pointIsOnLine;
function perpendicularToLine(point, start, end) {
    const k = ((end.y - start.y) * (point.x - start.x) - (end.x - start.x) * (point.y - start.y)) /
        (Math.pow(end.y - start.y, 2) + Math.pow(end.x - start.x, 2));
    let p = new Point(point.x - k * (end.y - start.y), point.y + k * (end.x - start.x));
    return {
        p,
        isInside: p.x >= Math.min(start.x, end.x) &&
            p.x <= Math.max(start.x, end.x) &&
            p.y >= Math.min(start.y, end.y) &&
            p.y <= Math.max(start.y, end.y),
    };
}
exports.perpendicularToLine = perpendicularToLine;
function minDistanceLineEnds(l1, p) {
    return Math.min(lineLength(l1.p0, p), lineLength(l1.p1, p));
}
exports.minDistanceLineEnds = minDistanceLineEnds;
function linesIntersection(line1, line2) {
    let denominator, a, b, numerator1, numerator2, result = {
        point: null,
        onLine1: false,
        onLine2: false,
    };
    denominator = (line2.p1.y - line2.p0.y) * (line1.p1.x - line1.p0.x) - (line2.p1.x - line2.p0.x) * (line1.p1.y - line1.p0.y);
    if (denominator === 0)
        return result;
    a = line1.p0.y - line2.p0.y;
    b = line1.p0.x - line2.p0.x;
    numerator1 = (line2.p1.x - line2.p0.x) * a - (line2.p1.y - line2.p0.y) * b;
    numerator2 = (line1.p1.x - line1.p0.x) * a - (line1.p1.y - line1.p0.y) * b;
    a = exports.round(numerator1 / denominator, 6);
    b = exports.round(numerator2 / denominator, 6);
    result.point = new Point(line1.p0.x + a * (line1.p1.x - line1.p0.x), line1.p0.y + a * (line1.p1.y - line1.p0.y));
    if (a >= 0 && a <= 1)
        result.onLine1 = true;
    if (b >= 0 && b <= 1)
        result.onLine2 = true;
    if ((!result.onLine1 || !result.onLine2) &&
        ((result.onLine1 && minDistanceLineEnds(line2, result.point) <= 0.1) ||
            (result.onLine2 && minDistanceLineEnds(line1, result.point) <= 0.1)))
        result.onLine1 = result.onLine2 = true;
    return result;
}
exports.linesIntersection = linesIntersection;
function perpendicularPoint(start, end, pLength) {
    const angle = lineAngle(start, end) - 90;
    let c = center(start, end);
    const x = pLength * Math.cos((angle * Math.PI) / 180.0);
    const y = pLength * Math.sin((angle * Math.PI) / 180.0);
    return new Point(c.x + exports.round(x, 1), c.y + exports.round(y, 1));
}
exports.perpendicularPoint = perpendicularPoint;
function lineRectangleIntersections(line, rect) {
    const points = [];
    let res = linesIntersection(line, new Line(rect.p0, rect.p1));
    if (res.onLine1 && res.onLine2)
        points.push(new Point(res.point.x, res.point.y));
    res = linesIntersection(line, new Line(rect.p1, rect.p2));
    if (res.onLine1 && res.onLine2)
        points.push(new Point(res.point.x, res.point.y));
    res = linesIntersection(line, new Line(rect.p2, rect.p3));
    if (res.onLine1 && res.onLine2)
        points.push(new Point(res.point.x, res.point.y));
    res = linesIntersection(line, new Line(rect.p0, rect.p3));
    if (res.onLine1 && res.onLine2)
        points.push(new Point(res.point.x, res.point.y));
    return points;
}
exports.lineRectangleIntersections = lineRectangleIntersections;
