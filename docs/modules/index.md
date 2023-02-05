[Simple geometry](../README.md) / [Modules](../modules.md) / index

# Module: index

## Table of contents

### Enumerations

- [BasePoint](../enums/index.BasePoint.md)

### Classes

- [Line](../classes/index.Line.md)
- [Point](../classes/index.Point.md)
- [Rect](../classes/index.Rect.md)

### Interfaces

- [LinesIntersection](../interfaces/index.LinesIntersection.md)

### Functions

- [calculateBoundsRect](index.md#calculateboundsrect)
- [contains](index.md#contains)
- [getAngle](index.md#getangle)
- [getDirection](index.md#getdirection)
- [getLUT](index.md#getlut)
- [getViewBox](index.md#getviewbox)
- [intersectPolygons](index.md#intersectpolygons)
- [lineAngle](index.md#lineangle)
- [lineCenter](index.md#linecenter)
- [lineLength](index.md#linelength)
- [lineLengthXY](index.md#linelengthxy)
- [lineRectangleIntersections](index.md#linerectangleintersections)
- [linesIntersection](index.md#linesintersection)
- [linesIntersectionXY](index.md#linesintersectionxy)
- [minDistanceLineEnds](index.md#mindistancelineends)
- [minDistanceLineEndsXY](index.md#mindistancelineendsxy)
- [perpendicularPoint](index.md#perpendicularpoint)
- [perpendicularToLine](index.md#perpendiculartoline)
- [pointInsidePolygon](index.md#pointinsidepolygon)
- [pointInsideRectangle](index.md#pointinsiderectangle)
- [pointInsideRectangleUnrotated](index.md#pointinsiderectangleunrotated)
- [pointIsOnLine](index.md#pointisonline)
- [pointsCenter](index.md#pointscenter)
- [rectangleInsideRectangleUnrotated](index.md#rectangleinsiderectangleunrotated)
- [rotatePoint](index.md#rotatepoint)
- [rotatePoints](index.md#rotatepoints)
- [round](index.md#round)
- [roundPoint](index.md#roundpoint)
- [scalePoint](index.md#scalepoint)
- [shiftPoint](index.md#shiftpoint)
- [toD](index.md#tod)
- [translatePoint](index.md#translatepoint)
- [triangleArea](index.md#trianglearea)
- [сentroid](index.md#сentroid)

## Functions

### calculateBoundsRect

▸ **calculateBoundsRect**(`pts`): [`Rect`](../classes/index.Rect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pts` | [`Point`](../classes/index.Point.md)[] |

#### Returns

[`Rect`](../classes/index.Rect.md)

#### Defined in

[index.ts:398](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L398)

___

### contains

▸ **contains**(`r1`, `r2`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `r1` | [`Rect`](../classes/index.Rect.md) |
| `r2` | [`Rect`](../classes/index.Rect.md) |

#### Returns

`boolean`

#### Defined in

[index.ts:128](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L128)

___

### getAngle

▸ **getAngle**(`centerPoint`, `startPoint`, `endPoint`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `centerPoint` | [`Point`](../classes/index.Point.md) |
| `startPoint` | [`Point`](../classes/index.Point.md) |
| `endPoint` | [`Point`](../classes/index.Point.md) |

#### Returns

`number`

#### Defined in

[index.ts:147](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L147)

___

### getDirection

▸ **getDirection**(`centerPoint`, `startPoint`, `endPoint`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `centerPoint` | [`Point`](../classes/index.Point.md) |
| `startPoint` | [`Point`](../classes/index.Point.md) |
| `endPoint` | [`Point`](../classes/index.Point.md) |

#### Returns

`number`

#### Defined in

[index.ts:175](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L175)

___

### getLUT

▸ **getLUT**(`points`, `steps?`): [`Point`](../classes/index.Point.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `points` | [`Point`](../classes/index.Point.md)[] | `undefined` |
| `steps` | `number` | `100` |

#### Returns

[`Point`](../classes/index.Point.md)[]

#### Defined in

[index.ts:434](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L434)

___

### getViewBox

▸ **getViewBox**(`point`, `viewBox`, `heightWidthRatio`, `zoomIn`): [`Rect`](../classes/index.Rect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point`](../classes/index.Point.md) |
| `viewBox` | [`Rect`](../classes/index.Rect.md) |
| `heightWidthRatio` | `number` |
| `zoomIn` | `boolean` |

#### Returns

[`Rect`](../classes/index.Rect.md)

#### Defined in

[index.ts:132](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L132)

___

### intersectPolygons

▸ **intersectPolygons**(`points`, `polygon`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | [`Point`](../classes/index.Point.md)[] |
| `polygon` | [`Point`](../classes/index.Point.md)[] |

#### Returns

`boolean`

#### Defined in

[index.ts:412](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L412)

___

### lineAngle

▸ **lineAngle**(`startPoint`, `endPoint`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `startPoint` | [`Point`](../classes/index.Point.md) \| { `x`: `number` ; `y`: `number`  } |
| `endPoint` | [`Point`](../classes/index.Point.md) \| { `x`: `number` ; `y`: `number`  } |

#### Returns

`number`

#### Defined in

[index.ts:158](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L158)

___

### lineCenter

▸ **lineCenter**(`p1`, `p2`): [`Point`](../classes/index.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | [`Point`](../classes/index.Point.md) |
| `p2` | [`Point`](../classes/index.Point.md) |

#### Returns

[`Point`](../classes/index.Point.md)

#### Defined in

[index.ts:316](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L316)

___

### lineLength

▸ **lineLength**(`p1`, `p2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | [`Point`](../classes/index.Point.md) |
| `p2` | [`Point`](../classes/index.Point.md) |

#### Returns

`number`

#### Defined in

[index.ts:183](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L183)

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

[index.ts:187](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L187)

___

### lineRectangleIntersections

▸ **lineRectangleIntersections**(`line`, `rect`): [`Point`](../classes/index.Point.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | [`Line`](../classes/index.Line.md) |
| `rect` | [`Rect`](../classes/index.Rect.md) |

#### Returns

[`Point`](../classes/index.Point.md)[]

#### Defined in

[index.ts:298](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L298)

___

### linesIntersection

▸ **linesIntersection**(`line1`, `line2`, `minDistance?`): [`LinesIntersection`](../interfaces/index.LinesIntersection.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `line1` | [`Line`](../classes/index.Line.md) | `undefined` |
| `line2` | [`Line`](../classes/index.Line.md) | `undefined` |
| `minDistance` | `number` | `0` |

#### Returns

[`LinesIntersection`](../interfaces/index.LinesIntersection.md)

#### Defined in

[index.ts:226](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L226)

___

### linesIntersectionXY

▸ **linesIntersectionXY**(`x1`, `y1`, `x2`, `y2`, `x3`, `y3`, `x4`, `y4`, `minDistance?`): [`LinesIntersection`](../interfaces/index.LinesIntersection.md)

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

[`LinesIntersection`](../interfaces/index.LinesIntersection.md)

#### Defined in

[index.ts:240](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L240)

___

### minDistanceLineEnds

▸ **minDistanceLineEnds**(`l1`, `p`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `l1` | [`Line`](../classes/index.Line.md) |
| `p` | [`Point`](../classes/index.Point.md) |

#### Returns

`number`

#### Defined in

[index.ts:212](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L212)

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

[index.ts:216](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L216)

___

### perpendicularPoint

▸ **perpendicularPoint**(`start`, `end`, `pLength`): [`Point`](../classes/index.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | [`Point`](../classes/index.Point.md) |
| `end` | [`Point`](../classes/index.Point.md) |
| `pLength` | `number` |

#### Returns

[`Point`](../classes/index.Point.md)

#### Defined in

[index.ts:290](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L290)

___

### perpendicularToLine

▸ **perpendicularToLine**(`point`, `start`, `end`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point`](../classes/index.Point.md) |
| `start` | [`Point`](../classes/index.Point.md) |
| `end` | [`Point`](../classes/index.Point.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `isInside` | `boolean` |
| `p` | [`Point`](../classes/index.Point.md) |

#### Defined in

[index.ts:195](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L195)

___

### pointInsidePolygon

▸ **pointInsidePolygon**(`point`, `polygon`, `excludeBounds?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `point` | [`Point`](../classes/index.Point.md) | `undefined` |
| `polygon` | [`Point`](../classes/index.Point.md)[] | `undefined` |
| `excludeBounds` | `boolean` | `false` |

#### Returns

`boolean`

#### Defined in

[index.ts:335](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L335)

___

### pointInsideRectangle

▸ **pointInsideRectangle**(`p`, `rect`): [`Point`](../classes/index.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Point`](../classes/index.Point.md) |
| `rect` | [`Rect`](../classes/index.Rect.md) |

#### Returns

[`Point`](../classes/index.Point.md)

#### Defined in

[index.ts:324](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L324)

___

### pointInsideRectangleUnrotated

▸ **pointInsideRectangleUnrotated**(`p`, `rect`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | [`Point`](../classes/index.Point.md) | point |
| `rect` | [`Rect`](../classes/index.Rect.md) | unrotated rectangle |

#### Returns

`boolean`

#### Defined in

[index.ts:361](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L361)

___

### pointIsOnLine

▸ **pointIsOnLine**(`p`, `p1`, `p2`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Point`](../classes/index.Point.md) |
| `p1` | [`Point`](../classes/index.Point.md) |
| `p2` | [`Point`](../classes/index.Point.md) |

#### Returns

`boolean`

#### Defined in

[index.ts:191](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L191)

___

### pointsCenter

▸ **pointsCenter**(`startPoint`, `endPoint`): [`Point`](../classes/index.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `startPoint` | [`Point`](../classes/index.Point.md) |
| `endPoint` | [`Point`](../classes/index.Point.md) |

#### Returns

[`Point`](../classes/index.Point.md)

#### Defined in

[index.ts:171](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L171)

___

### rectangleInsideRectangleUnrotated

▸ **rectangleInsideRectangleUnrotated**(`rect1`, `rect2`): `boolean`

Detect smaller unrotated rectangle inside the bigger unrotated rectangle

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rect1` | [`Rect`](../classes/index.Rect.md) | Bigger rectangle |
| `rect2` | [`Rect`](../classes/index.Rect.md) | Smaller rectangle |

#### Returns

`boolean`

#### Defined in

[index.ts:371](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L371)

___

### rotatePoint

▸ **rotatePoint**(`angle`, `point`, `cX`, `cY`): [`Point`](../classes/index.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |
| `point` | [`Point`](../classes/index.Point.md) |
| `cX` | `number` |
| `cY` | `number` |

#### Returns

[`Point`](../classes/index.Point.md)

#### Defined in

[index.ts:109](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L109)

___

### rotatePoints

▸ **rotatePoints**(`angle`, `points`, `cX`, `cY`): [`Point`](../classes/index.Point.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |
| `points` | [`Point`](../classes/index.Point.md)[] |
| `cX` | `number` |
| `cY` | `number` |

#### Returns

[`Point`](../classes/index.Point.md)[]

#### Defined in

[index.ts:117](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L117)

___

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

[index.ts:59](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L59)

___

### roundPoint

▸ **roundPoint**(`point`, `digits`): [`Point`](../classes/index.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point`](../classes/index.Point.md) |
| `digits` | `number` |

#### Returns

[`Point`](../classes/index.Point.md)

#### Defined in

[index.ts:66](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L66)

___

### scalePoint

▸ **scalePoint**(`p`, `dx`, `dy`, `boundingRect`, `basePoint`): [`Point`](../classes/index.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Point`](../classes/index.Point.md) |
| `dx` | `number` |
| `dy` | `number` |
| `boundingRect` | [`Rect`](../classes/index.Rect.md) |
| `basePoint` | [`BasePoint`](../enums/index.BasePoint.md) |

#### Returns

[`Point`](../classes/index.Point.md)

#### Defined in

[index.ts:70](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L70)

___

### shiftPoint

▸ **shiftPoint**(`point`, `length`, `angle`): [`Point`](../classes/index.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point`](../classes/index.Point.md) |
| `length` | `number` |
| `angle` | `number` |

#### Returns

[`Point`](../classes/index.Point.md)

#### Defined in

[index.ts:121](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L121)

___

### toD

▸ **toD**(`points`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | [`Point`](../classes/index.Point.md)[] |

#### Returns

`string`

#### Defined in

[index.ts:499](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L499)

___

### translatePoint

▸ **translatePoint**(`delta`, `dx`, `dy`): [`Point`](../classes/index.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | [`Point`](../classes/index.Point.md) |
| `dx` | `number` |
| `dy` | `number` |

#### Returns

[`Point`](../classes/index.Point.md)

#### Defined in

[index.ts:105](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L105)

___

### triangleArea

▸ **triangleArea**(`p1`, `p2`, `p3`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | [`Point`](../classes/index.Point.md) |
| `p2` | [`Point`](../classes/index.Point.md) |
| `p3` | [`Point`](../classes/index.Point.md) |

#### Returns

`number`

#### Defined in

[index.ts:320](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L320)

___

### сentroid

▸ **сentroid**(`points`): [`Point`](../classes/index.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | [`Point`](../classes/index.Point.md)[] |

#### Returns

[`Point`](../classes/index.Point.md)

#### Defined in

[index.ts:380](https://github.com/RodionNikolaev/simple-geometry/blob/88bb558/src/index.ts#L380)
