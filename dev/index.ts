import { Point } from "../src";
import getRectForPolygon from "../src/rectInPolygon";

let polygon = [ 
    new Point(45, 340),
    new Point(30, 340),
    new Point(30, 300),
    new Point(10, 300),
    new Point(10, 385),
    new Point(45, 385),
    new Point(45, 340),
];

var res = getRectForPolygon(polygon);
console.info(res)    