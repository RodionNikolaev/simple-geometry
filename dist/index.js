"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pointInsideRectangle = exports.triangleArea = exports.lineCenter = exports.lineRectangleIntersections = exports.perpendicularPoint = exports.linesIntersection = exports.minDistanceLineEnds = exports.perpendicularToLine = exports.pointIsOnLine = exports.lineLengthXY = exports.lineLength = exports.getDirection = exports.pointsCenter = exports.lineAngle = exports.getAngle = exports.getViewBox = exports.contains = exports.shiftPoint = exports.rotatePoints = exports.rotatePoint = exports.translatePoint = exports.scalePoint = exports.roundPoint = exports.round = exports.BasePoint = exports.Rect = exports.Line = exports.Point = void 0;
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
/**
 * Round value to the number of gecimal digits
 * @param number Value
 * @param digits Number decimal digits
 * @returns Rounded value
 */
function round(number, digits = 3) {
    return Math.round(number * Math.pow(10, digits)) / Math.pow(10, digits);
}
exports.round = round;
function roundPoint(point, digits) {
    return !digits || digits == 0 ? point : new Point(Math.round(round(point.x, digits)), Math.round(round(point.y, digits)));
}
exports.roundPoint = roundPoint;
function scalePoint(p, dx, dy, boundingRect, basePoint) {
    let point;
    if (basePoint == BasePoint.Left || basePoint == BasePoint.Right)
        dy = 0;
    else if (basePoint == BasePoint.Top || basePoint == BasePoint.Bottom)
        dx = 0;
    if (basePoint == BasePoint.TopLeft || basePoint == BasePoint.Left || basePoint == BasePoint.Top) {
        point = new Point(round(p.x + ((p.x - boundingRect.x) / boundingRect.width) * dx), round(p.y + ((p.y - boundingRect.y) / boundingRect.height) * dy));
    }
    else if (basePoint == BasePoint.TopRight || basePoint == BasePoint.Right) {
        point = new Point(round(p.x - ((boundingRect.x + boundingRect.width - p.x) / boundingRect.width) * -1 * dx), round(p.y + ((p.y - boundingRect.y) / boundingRect.height) * dy));
    }
    else if (basePoint == BasePoint.BottomRight) {
        point = new Point(round(p.x - ((boundingRect.x + boundingRect.width - p.x) / boundingRect.width) * -1 * dx), round(p.y - ((boundingRect.y + boundingRect.height - p.y) / boundingRect.height) * -1 * dy));
    }
    else if (basePoint == BasePoint.BottomLeft || basePoint == BasePoint.Bottom) {
        point = new Point(round(p.x + ((p.x - boundingRect.x) / boundingRect.width) * dx), round(p.y - ((boundingRect.y + boundingRect.height - p.y) / boundingRect.height) * -1 * dy));
    }
    if (isNaN(point.x) || isNaN(point.y) || !isFinite(point.x) || !isFinite(point.y)) {
        return p;
    }
    return point;
}
exports.scalePoint = scalePoint;
function translatePoint(delta, dx, dy) {
    return new Point(round(dx + delta.x), round(dy + delta.y));
}
exports.translatePoint = translatePoint;
function rotatePoint(angle, point, cX, cY) {
    let radians = angle / (180 / Math.PI);
    return new Point(round((point.x - cX) * Math.cos(radians) - (point.y - cY) * Math.sin(radians) + cX), round((point.x - cX) * Math.sin(radians) + (point.y - cY) * Math.cos(radians) + cY));
}
exports.rotatePoint = rotatePoint;
function rotatePoints(angle, points, cX, cY) {
    return points.map((point) => rotatePoint(angle, point, cX, cY));
}
exports.rotatePoints = rotatePoints;
let shiftPoint = (point, length, angle) => {
    return {
        x: point.x + length * Math.sin(((90 - angle) * Math.PI) / 180.0),
        y: point.y + length * Math.sin((angle * Math.PI) / 180.0),
    };
};
exports.shiftPoint = shiftPoint;
function contains(r1, r2) {
    return r2.x + r2.width < r1.x + r1.width && r2.x > r1.x && r2.y > r1.y && r2.y + r2.height < r1.y + r1.height;
}
exports.contains = contains;
function getViewBox(point, viewBox, heightWidthRatio, zoomIn) {
    // Percentage offset mouse from top left corner
    let offsetX = (point.x - viewBox.x) / viewBox.width;
    let offsetY = (point.y - viewBox.y) / viewBox.height;
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
    let cos = round((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b), 3);
    let direction = getDirection(centerPoint, startPoint, endPoint);
    return direction * round((Math.acos(cos > 1 ? 1 : cos) * 180) / Math.PI, 2);
}
exports.getAngle = getAngle;
function lineAngle(startPoint, endPoint) {
    let p1 = { x: startPoint.x + 100000, y: startPoint.y };
    let a = lineLength(p1, startPoint);
    let b = lineLength(endPoint, startPoint);
    let c = lineLength(p1, endPoint);
    let cos = round((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b), 4);
    let direction = getDirection(startPoint, p1, endPoint);
    return direction * round((Math.acos(cos > 1 ? 1 : cos) * 180) / Math.PI, 3);
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
    return round(Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)), 4);
}
exports.lineLength = lineLength;
function lineLengthXY(x1, y1, x2, y2) {
    return round(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)), 4);
}
exports.lineLengthXY = lineLengthXY;
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
    a = round(numerator1 / denominator, 6);
    b = round(numerator2 / denominator, 6);
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
    let c = pointsCenter(start, end);
    const x = pLength * Math.cos((angle * Math.PI) / 180.0);
    const y = pLength * Math.sin((angle * Math.PI) / 180.0);
    return new Point(c.x + round(x, 1), c.y + round(y, 1));
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
function lineCenter(p1, p2) {
    return new Point((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
}
exports.lineCenter = lineCenter;
function triangleArea(p1, p2, p3) {
    return Math.abs(0.5 * (p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)));
}
exports.triangleArea = triangleArea;
function pointInsideRectangle(p, rect) {
    const rArea = lineLength(rect.p0, rect.p1) * lineLength(rect.p1, rect.p2);
    const sAreas = triangleArea(p, rect.p0, rect.p1) +
        triangleArea(p, rect.p1, rect.p2) +
        triangleArea(p, rect.p2, rect.p3) +
        triangleArea(p, rect.p3, rect.p0);
    return Math.abs(rArea - sAreas) < rArea * 0.01 ? p : null;
}
exports.pointInsideRectangle = pointInsideRectangle;
