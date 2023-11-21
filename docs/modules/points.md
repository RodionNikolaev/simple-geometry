[Simple geometry](../README.md) / [Exports](../modules.md) / points

# Module: points

## Table of contents

### Classes

- [Point](../classes/points.Point.md)
- [Line](../classes/points.Line.md)
- [Rect](../classes/points.Rect.md)
- [PathPoint](../classes/points.PathPoint.md)

### Enumerations

- [BasePoint](../enums/points.BasePoint.md)

### Functions

- [round](points.md#round)
- [roundPoint](points.md#roundpoint)
- [scalePoint](points.md#scalepoint)
- [translatePoint](points.md#translatepoint)
- [rotatePoint](points.md#rotatepoint)
- [rotatePoints](points.md#rotatepoints)
- [shiftPoint](points.md#shiftpoint)
- [contains](points.md#contains)
- [getViewBox](points.md#getviewbox)
- [getAngle](points.md#getangle)
- [lineAngle](points.md#lineangle)
- [pointsCenter](points.md#pointscenter)
- [getDirection](points.md#getdirection)
- [lineLength](points.md#linelength)
- [lineLengthXY](points.md#linelengthxy)
- [pointIsOnLine](points.md#pointisonline)
- [perpendicularToLine](points.md#perpendiculartoline)
- [minDistanceLineEnds](points.md#mindistancelineends)
- [minDistanceLineEndsXY](points.md#mindistancelineendsxy)
- [linesIntersection](points.md#linesintersection)
- [linesIntersectionXY](points.md#linesintersectionxy)
- [perpendicularPoint](points.md#perpendicularpoint)
- [lineRectangleIntersections](points.md#linerectangleintersections)
- [lineCenter](points.md#linecenter)
- [triangleArea](points.md#trianglearea)
- [pointInsideRectangle](points.md#pointinsiderectangle)
- [pointInsidePolygon](points.md#pointinsidepolygon)
- [pointInsideRectangleUnrotated](points.md#pointinsiderectangleunrotated)
- [rectangleInsideRectangleUnrotated](points.md#rectangleinsiderectangleunrotated)
- [сentroid](points.md#сentroid)
- [calculateBoundsRect](points.md#calculateboundsrect)
- [intersectPolygons](points.md#intersectpolygons)
- [getRectForPolygon](points.md#getrectforpolygon)
- [addPathPoint](points.md#addpathpoint)
- [splitPath](points.md#splitpath)
- [removePathPoint](points.md#removepathpoint)
- [splitPolygon](points.md#splitpolygon)
- [linerizePolygon](points.md#linerizepolygon)
- [pathStringToPathPoints](points.md#pathstringtopathpoints)
- [getLUT](points.md#getlut)

### Interfaces

- [LinesIntersection](../interfaces/points.LinesIntersection.md)

## Functions

### round

▸ **round**(`value`, `digits?`): `any`

Round value to the number of gecimal digits

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `any` | `undefined` | - |
| `digits` | `number` | `3` | Number decimal digits |

#### Returns

`any`

Rounded value

#### Defined in

[points.ts:66](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L66)

___

### roundPoint

▸ **roundPoint**(`point`, `digits`): [`Point`](../classes/points.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point`](../classes/points.Point.md) |
| `digits` | `number` |

#### Returns

[`Point`](../classes/points.Point.md)

#### Defined in

[points.ts:73](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L73)

___

### scalePoint

▸ **scalePoint**(`p`, `dx`, `dy`, `boundingRect`, `basePoint`): [`Point`](../classes/points.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Point`](../classes/points.Point.md) |
| `dx` | `number` |
| `dy` | `number` |
| `boundingRect` | [`Rect`](../classes/points.Rect.md) |
| `basePoint` | [`BasePoint`](../enums/points.BasePoint.md) |

#### Returns

[`Point`](../classes/points.Point.md)

#### Defined in

[points.ts:77](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L77)

___

### translatePoint

▸ **translatePoint**(`delta`, `dx`, `dy`): [`Point`](../classes/points.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | [`Point`](../classes/points.Point.md) |
| `dx` | `number` |
| `dy` | `number` |

#### Returns

[`Point`](../classes/points.Point.md)

#### Defined in

[points.ts:112](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L112)

___

### rotatePoint

▸ **rotatePoint**(`angle`, `point`, `cX`, `cY`): [`Point`](../classes/points.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |
| `point` | [`Point`](../classes/points.Point.md) |
| `cX` | `number` |
| `cY` | `number` |

#### Returns

[`Point`](../classes/points.Point.md)

#### Defined in

[points.ts:116](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L116)

___

### rotatePoints

▸ **rotatePoints**(`angle`, `points`, `cX`, `cY`): [`Point`](../classes/points.Point.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |
| `points` | [`Point`](../classes/points.Point.md)[] |
| `cX` | `number` |
| `cY` | `number` |

#### Returns

[`Point`](../classes/points.Point.md)[]

#### Defined in

[points.ts:124](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L124)

___

### shiftPoint

▸ **shiftPoint**(`point`, `length`, `angle`): [`Point`](../classes/points.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point`](../classes/points.Point.md) |
| `length` | `number` |
| `angle` | `number` |

#### Returns

[`Point`](../classes/points.Point.md)

#### Defined in

[points.ts:128](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L128)

___

### contains

▸ **contains**(`r1`, `r2`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `r1` | [`Rect`](../classes/points.Rect.md) |
| `r2` | [`Rect`](../classes/points.Rect.md) |

#### Returns

`boolean`

#### Defined in

[points.ts:135](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L135)

___

### getViewBox

▸ **getViewBox**(`point`, `viewBox`, `heightWidthRatio`, `zoomIn`): [`Rect`](../classes/points.Rect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point`](../classes/points.Point.md) |
| `viewBox` | [`Rect`](../classes/points.Rect.md) |
| `heightWidthRatio` | `number` |
| `zoomIn` | `boolean` |

#### Returns

[`Rect`](../classes/points.Rect.md)

#### Defined in

[points.ts:139](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L139)

___

### getAngle

▸ **getAngle**(`centerPoint`, `startPoint`, `endPoint`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `centerPoint` | [`Point`](../classes/points.Point.md) |
| `startPoint` | [`Point`](../classes/points.Point.md) |
| `endPoint` | [`Point`](../classes/points.Point.md) |

#### Returns

`number`

#### Defined in

[points.ts:154](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L154)

___

### lineAngle

▸ **lineAngle**(`startPoint`, `endPoint`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `startPoint` | [`Point`](../classes/points.Point.md) \| { `x`: `number` ; `y`: `number`  } |
| `endPoint` | [`Point`](../classes/points.Point.md) \| { `x`: `number` ; `y`: `number`  } |

#### Returns

`number`

#### Defined in

[points.ts:165](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L165)

___

### pointsCenter

▸ **pointsCenter**(`startPoint`, `endPoint`): [`Point`](../classes/points.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `startPoint` | [`Point`](../classes/points.Point.md) |
| `endPoint` | [`Point`](../classes/points.Point.md) |

#### Returns

[`Point`](../classes/points.Point.md)

#### Defined in

[points.ts:178](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L178)

___

### getDirection

▸ **getDirection**(`centerPoint`, `startPoint`, `endPoint`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `centerPoint` | [`Point`](../classes/points.Point.md) |
| `startPoint` | [`Point`](../classes/points.Point.md) |
| `endPoint` | [`Point`](../classes/points.Point.md) |

#### Returns

`number`

#### Defined in

[points.ts:182](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L182)

___

### lineLength

▸ **lineLength**(`p1`, `p2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | [`Point`](../classes/points.Point.md) |
| `p2` | [`Point`](../classes/points.Point.md) |

#### Returns

`number`

#### Defined in

[points.ts:190](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L190)

___

### lineLengthXY

▸ **lineLengthXY**(`x1`, `y1`, `x2`, `y2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `y1` | `number` |
| `x2` | `number` |
| `y2` | `number` |

#### Returns

`number`

#### Defined in

[points.ts:194](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L194)

___

### pointIsOnLine

▸ **pointIsOnLine**(`p`, `p1`, `p2`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Point`](../classes/points.Point.md) |
| `p1` | [`Point`](../classes/points.Point.md) |
| `p2` | [`Point`](../classes/points.Point.md) |

#### Returns

`boolean`

#### Defined in

[points.ts:198](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L198)

___

### perpendicularToLine

▸ **perpendicularToLine**(`point`, `start`, `end`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point`](../classes/points.Point.md) |
| `start` | [`Point`](../classes/points.Point.md) |
| `end` | [`Point`](../classes/points.Point.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `p` | [`Point`](../classes/points.Point.md) |
| `isInside` | `boolean` |

#### Defined in

[points.ts:202](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L202)

___

### minDistanceLineEnds

▸ **minDistanceLineEnds**(`l1`, `p`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `l1` | [`Line`](../classes/points.Line.md) |
| `p` | [`Point`](../classes/points.Point.md) |

#### Returns

`number`

#### Defined in

[points.ts:219](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L219)

___

### minDistanceLineEndsXY

▸ **minDistanceLineEndsXY**(`x1`, `y1`, `x2`, `y2`, `x`, `y`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `y1` | `number` |
| `x2` | `number` |
| `y2` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`number`

#### Defined in

[points.ts:223](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L223)

___

### linesIntersection

▸ **linesIntersection**(`line1`, `line2`, `minDistance?`): [`LinesIntersection`](../interfaces/points.LinesIntersection.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `line1` | [`Line`](../classes/points.Line.md) | `undefined` |
| `line2` | [`Line`](../classes/points.Line.md) | `undefined` |
| `minDistance` | `number` | `0` |

#### Returns

[`LinesIntersection`](../interfaces/points.LinesIntersection.md)

#### Defined in

[points.ts:233](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L233)

___

### linesIntersectionXY

▸ **linesIntersectionXY**(`x1`, `y1`, `x2`, `y2`, `x3`, `y3`, `x4`, `y4`, `minDistance?`): [`LinesIntersection`](../interfaces/points.LinesIntersection.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x1` | `number` | `undefined` |
| `y1` | `number` | `undefined` |
| `x2` | `number` | `undefined` |
| `y2` | `number` | `undefined` |
| `x3` | `number` | `undefined` |
| `y3` | `number` | `undefined` |
| `x4` | `number` | `undefined` |
| `y4` | `number` | `undefined` |
| `minDistance` | `number` | `0` |

#### Returns

[`LinesIntersection`](../interfaces/points.LinesIntersection.md)

#### Defined in

[points.ts:247](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L247)

___

### perpendicularPoint

▸ **perpendicularPoint**(`start`, `end`, `pLength`): [`Point`](../classes/points.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | [`Point`](../classes/points.Point.md) |
| `end` | [`Point`](../classes/points.Point.md) |
| `pLength` | `number` |

#### Returns

[`Point`](../classes/points.Point.md)

#### Defined in

[points.ts:297](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L297)

___

### lineRectangleIntersections

▸ **lineRectangleIntersections**(`line`, `rect`): [`Point`](../classes/points.Point.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | [`Line`](../classes/points.Line.md) |
| `rect` | [`Rect`](../classes/points.Rect.md) |

#### Returns

[`Point`](../classes/points.Point.md)[]

#### Defined in

[points.ts:305](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L305)

___

### lineCenter

▸ **lineCenter**(`p1`, `p2`): [`Point`](../classes/points.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | [`Point`](../classes/points.Point.md) |
| `p2` | [`Point`](../classes/points.Point.md) |

#### Returns

[`Point`](../classes/points.Point.md)

#### Defined in

[points.ts:323](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L323)

___

### triangleArea

▸ **triangleArea**(`p1`, `p2`, `p3`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | [`Point`](../classes/points.Point.md) |
| `p2` | [`Point`](../classes/points.Point.md) |
| `p3` | [`Point`](../classes/points.Point.md) |

#### Returns

`number`

#### Defined in

[points.ts:327](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L327)

___

### pointInsideRectangle

▸ **pointInsideRectangle**(`p`, `rect`): [`Point`](../classes/points.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Point`](../classes/points.Point.md) |
| `rect` | [`Rect`](../classes/points.Rect.md) |

#### Returns

[`Point`](../classes/points.Point.md)

#### Defined in

[points.ts:331](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L331)

___

### pointInsidePolygon

▸ **pointInsidePolygon**(`point`, `polygon`, `excludeBounds?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `point` | [`Point`](../classes/points.Point.md) | `undefined` |
| `polygon` | [`Point`](../classes/points.Point.md)[] | `undefined` |
| `excludeBounds` | `boolean` | `false` |

#### Returns

`boolean`

#### Defined in

[points.ts:342](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L342)

___

### pointInsideRectangleUnrotated

▸ **pointInsideRectangleUnrotated**(`p`, `rect`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | [`Point`](../classes/points.Point.md) | point |
| `rect` | [`Rect`](../classes/points.Rect.md) | unrotated rectangle |

#### Returns

`boolean`

#### Defined in

[points.ts:368](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L368)

___

### rectangleInsideRectangleUnrotated

▸ **rectangleInsideRectangleUnrotated**(`rect1`, `rect2`): `boolean`

Detect smaller unrotated rectangle inside the bigger unrotated rectangle

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rect1` | [`Rect`](../classes/points.Rect.md) | Bigger rectangle |
| `rect2` | [`Rect`](../classes/points.Rect.md) | Smaller rectangle |

#### Returns

`boolean`

#### Defined in

[points.ts:378](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L378)

___

### сentroid

▸ **сentroid**(`points`): [`Point`](../classes/points.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | [`Point`](../classes/points.Point.md)[] |

#### Returns

[`Point`](../classes/points.Point.md)

#### Defined in

[points.ts:387](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L387)

___

### calculateBoundsRect

▸ **calculateBoundsRect**(`pts`): [`Rect`](../classes/points.Rect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pts` | [`Point`](../classes/points.Point.md)[] |

#### Returns

[`Rect`](../classes/points.Rect.md)

#### Defined in

[points.ts:405](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L405)

___

### intersectPolygons

▸ **intersectPolygons**(`points`, `polygon`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | [`Point`](../classes/points.Point.md)[] |
| `polygon` | [`Point`](../classes/points.Point.md)[] |

#### Returns

`boolean`

#### Defined in

[points.ts:419](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L419)

___

### getRectForPolygon

▸ **getRectForPolygon**(`points`): [`Point`](../classes/points.Point.md)[]

Creates an inscribed rectangle inside the polygon

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `points` | [`Point`](../classes/points.Point.md)[] | polygon points |

#### Returns

[`Point`](../classes/points.Point.md)[]

rectange points

#### Defined in

[points.ts:444](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L444)

___

### addPathPoint

▸ **addPathPoint**(`pathPoints`, `clickPoint`, `isCurved`): [`PathPoint`](../classes/points.PathPoint.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathPoints` | [`PathPoint`](../classes/points.PathPoint.md)[] |
| `clickPoint` | [`Point`](../classes/points.Point.md) |
| `isCurved` | `boolean` |

#### Returns

[`PathPoint`](../classes/points.PathPoint.md)[]

#### Defined in

[points.ts:464](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L464)

___

### splitPath

▸ **splitPath**(`pathPoints`, `clickPoint`): [`PathPoint`](../classes/points.PathPoint.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathPoints` | [`PathPoint`](../classes/points.PathPoint.md)[] |
| `clickPoint` | [`Point`](../classes/points.Point.md) |

#### Returns

[`PathPoint`](../classes/points.PathPoint.md)[]

#### Defined in

[points.ts:498](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L498)

___

### removePathPoint

▸ **removePathPoint**(`pathPoints`, `pointIndex`, `code`): [`PathPoint`](../classes/points.PathPoint.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathPoints` | [`PathPoint`](../classes/points.PathPoint.md)[] |
| `pointIndex` | `number` |
| `code` | ``"point"`` \| ``"cp1"`` \| ``"cp2"`` |

#### Returns

[`PathPoint`](../classes/points.PathPoint.md)[]

#### Defined in

[points.ts:521](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L521)

___

### splitPolygon

▸ **splitPolygon**(`pathPoints`, `p0`, `p1`): [`PathPoint`](../classes/points.PathPoint.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathPoints` | [`PathPoint`](../classes/points.PathPoint.md)[] |
| `p0` | [`Point`](../classes/points.Point.md) |
| `p1` | [`Point`](../classes/points.Point.md) |

#### Returns

[`PathPoint`](../classes/points.PathPoint.md)[]

#### Defined in

[points.ts:534](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L534)

___

### linerizePolygon

▸ **linerizePolygon**(`pathPoints`): [`Point`](../classes/points.Point.md)[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathPoints` | [`PathPoint`](../classes/points.PathPoint.md)[] |

#### Returns

[`Point`](../classes/points.Point.md)[][]

#### Defined in

[points.ts:560](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L560)

___

### pathStringToPathPoints

▸ **pathStringToPathPoints**(`d`, `t?`): [`PathPoint`](../classes/points.PathPoint.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `d` | `string` | `undefined` |
| `t` | `string` | `null` |

#### Returns

[`PathPoint`](../classes/points.PathPoint.md)[]

#### Defined in

[points.ts:589](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L589)

___

### getLUT

▸ **getLUT**(`points`, `steps?`): [`Point`](../classes/points.Point.md)[]

Generates a LookUp Table of coordinates on the curve

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `points` | [`Point`](../classes/points.Point.md)[] | `undefined` | point, cp1, [cp2], point |
| `steps` | `number` | `100` |  |

#### Returns

[`Point`](../classes/points.Point.md)[]

#### Defined in

[points.ts:843](https://github.com/RodionNikolaev/simple-geometry/blob/42813f0/src/points.ts#L843)
