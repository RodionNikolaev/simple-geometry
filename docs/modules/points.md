[Simple geometry](../README.md) / [Exports](../modules.md) / points

# Module: points

## Table of contents

### Classes

- [Point](../classes/points.Point.md)
- [Line](../classes/points.Line.md)
- [Rect](../classes/points.Rect.md)

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
- [polygonArea](points.md#polygonarea)

### Interfaces

- [LinesIntersection](../interfaces/points.LinesIntersection.md)

## Functions

### round

▸ **round**(`value`, `digits?`): `any`

Round value to the number of gecimal digits

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `number` | `undefined` | - |
| `digits` | `number` | `3` | Number decimal digits |

#### Returns

`any`

Rounded value

#### Defined in

[points.ts:63](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L63)

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

[points.ts:68](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L68)

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

[points.ts:72](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L72)

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

[points.ts:107](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L107)

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

[points.ts:111](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L111)

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

[points.ts:119](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L119)

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

[points.ts:123](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L123)

___

### contains

▸ **contains**(`rect1`, `rect2`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rect1` | [`Rect`](../classes/points.Rect.md) |
| `rect2` | [`Rect`](../classes/points.Rect.md) |

#### Returns

`boolean`

#### Defined in

[points.ts:130](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L130)

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

[points.ts:169](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L169)

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

[points.ts:184](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L184)

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

[points.ts:195](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L195)

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

[points.ts:208](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L208)

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

[points.ts:212](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L212)

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

[points.ts:220](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L220)

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

[points.ts:224](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L224)

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

[points.ts:228](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L228)

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

[points.ts:232](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L232)

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

[points.ts:249](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L249)

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

[points.ts:253](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L253)

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

[points.ts:263](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L263)

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

[points.ts:277](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L277)

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

[points.ts:327](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L327)

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

[points.ts:335](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L335)

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

[points.ts:353](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L353)

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

[points.ts:357](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L357)

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

[points.ts:361](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L361)

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

[points.ts:372](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L372)

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

[points.ts:398](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L398)

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

[points.ts:408](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L408)

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

[points.ts:417](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L417)

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

[points.ts:435](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L435)

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

[points.ts:449](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L449)

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

[points.ts:474](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L474)

___

### polygonArea

▸ **polygonArea**(`points`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | [`Point`](../classes/points.Point.md)[] |

#### Returns

`number`

#### Defined in

[points.ts:487](https://github.com/RodionNikolaev/simple-geometry/blob/4651fb4/src/points.ts#L487)
