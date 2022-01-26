[Simple geometry](README.md) / Exports

# Simple geometry

## Table of contents

### Enumerations

- [BasePoint](enums/BasePoint.md)

### Classes

- [Line](classes/Line.md)
- [Point](classes/Point.md)
- [Rect](classes/Rect.md)

### Interfaces

- [LinesIntersection](interfaces/LinesIntersection.md)

### Functions

- [contains](modules.md#contains)
- [getAngle](modules.md#getangle)
- [getDirection](modules.md#getdirection)
- [getViewBox](modules.md#getviewbox)
- [lineAngle](modules.md#lineangle)
- [lineCenter](modules.md#linecenter)
- [lineLength](modules.md#linelength)
- [lineLengthXY](modules.md#linelengthxy)
- [lineRectangleIntersections](modules.md#linerectangleintersections)
- [linesIntersection](modules.md#linesintersection)
- [minDistanceLineEnds](modules.md#mindistancelineends)
- [perpendicularPoint](modules.md#perpendicularpoint)
- [perpendicularToLine](modules.md#perpendiculartoline)
- [pointInsideRectangle](modules.md#pointinsiderectangle)
- [pointIsOnLine](modules.md#pointisonline)
- [pointsCenter](modules.md#pointscenter)
- [rotatePoint](modules.md#rotatepoint)
- [rotatePoints](modules.md#rotatepoints)
- [round](modules.md#round)
- [roundPoint](modules.md#roundpoint)
- [scalePoint](modules.md#scalepoint)
- [shiftPoint](modules.md#shiftpoint)
- [translatePoint](modules.md#translatepoint)
- [triangleArea](modules.md#trianglearea)

## Functions

### contains

▸ **contains**(`r1`, `r2`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `r1` | [`Rect`](classes/Rect.md) |
| `r2` | [`Rect`](classes/Rect.md) |

#### Returns

`boolean`

#### Defined in

[index.ts:116](https://github.com/RodionNikolaev/simple-geometry/blob/a2a583f/src/index.ts#L116)

___

### getAngle

▸ **getAngle**(`centerPoint`, `startPoint`, `endPoint`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `centerPoint` | [`Point`](classes/Point.md) |
| `startPoint` | [`Point`](classes/Point.md) |
| `endPoint` | [`Point`](classes/Point.md) |

#### Returns

`number`

#### Defined in

[index.ts:135](https://github.com/RodionNikolaev/simple-geometry/blob/a2a583f/src/index.ts#L135)

___

### getDirection

▸ **getDirection**(`centerPoint`, `startPoint`, `endPoint`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `centerPoint` | [`Point`](classes/Point.md) |
| `startPoint` | [`Point`](classes/Point.md) |
| `endPoint` | [`Point`](classes/Point.md) |

#### Returns

`number`

#### Defined in

[index.ts:163](https://github.com/RodionNikolaev/simple-geometry/blob/a2a583f/src/index.ts#L163)

___

### getViewBox

▸ **getViewBox**(`point`, `viewBox`, `heightWidthRatio`, `zoomIn`): [`Rect`](classes/Rect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point`](classes/Point.md) |
| `viewBox` | [`Rect`](classes/Rect.md) |
| `heightWidthRatio` | `number` |
| `zoomIn` | `boolean` |

#### Returns

[`Rect`](classes/Rect.md)

#### Defined in

[index.ts:120](https://github.com/RodionNikolaev/simple-geometry/blob/a2a583f/src/index.ts#L120)

___

### lineAngle

▸ **lineAngle**(`startPoint`, `endPoint`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `startPoint` | [`Point`](classes/Point.md) \| { `x`: `number` ; `y`: `number`  } |
| `endPoint` | [`Point`](classes/Point.md) \| { `x`: `number` ; `y`: `number`  } |

#### Returns

`number`

#### Defined in

[index.ts:146](https://github.com/RodionNikolaev/simple-geometry/blob/a2a583f/src/index.ts#L146)

___

### lineCenter

▸ **lineCenter**(`p1`, `p2`): [`Point`](classes/Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | [`Point`](classes/Point.md) |
| `p2` | [`Point`](classes/Point.md) |

#### Returns

[`Point`](classes/Point.md)

#### Defined in

[index.ts:273](https://github.com/RodionNikolaev/simple-geometry/blob/a2a583f/src/index.ts#L273)

___

### lineLength

▸ **lineLength**(`p1`, `p2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | [`Point`](classes/Point.md) |
| `p2` | [`Point`](classes/Point.md) |

#### Returns

`number`

#### Defined in

[index.ts:171](https://github.com/RodionNikolaev/simple-geometry/blob/a2a583f/src/index.ts#L171)

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

[index.ts:175](https://github.com/RodionNikolaev/simple-geometry/blob/a2a583f/src/index.ts#L175)

___

### lineRectangleIntersections

▸ **lineRectangleIntersections**(`line`, `rect`): [`Point`](classes/Point.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | [`Line`](classes/Line.md) |
| `rect` | [`Rect`](classes/Rect.md) |

#### Returns

[`Point`](classes/Point.md)[]

#### Defined in

[index.ts:255](https://github.com/RodionNikolaev/simple-geometry/blob/a2a583f/src/index.ts#L255)

___

### linesIntersection

▸ **linesIntersection**(`line1`, `line2`): [`LinesIntersection`](interfaces/LinesIntersection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `line1` | [`Line`](classes/Line.md) |
| `line2` | [`Line`](classes/Line.md) |

#### Returns

[`LinesIntersection`](interfaces/LinesIntersection.md)

#### Defined in

[index.ts:210](https://github.com/RodionNikolaev/simple-geometry/blob/a2a583f/src/index.ts#L210)

___

### minDistanceLineEnds

▸ **minDistanceLineEnds**(`l1`, `p`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `l1` | [`Line`](classes/Line.md) |
| `p` | [`Point`](classes/Point.md) |

#### Returns

`number`

#### Defined in

[index.ts:200](https://github.com/RodionNikolaev/simple-geometry/blob/a2a583f/src/index.ts#L200)

___

### perpendicularPoint

▸ **perpendicularPoint**(`start`, `end`, `pLength`): [`Point`](classes/Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | [`Point`](classes/Point.md) |
| `end` | [`Point`](classes/Point.md) |
| `pLength` | `number` |

#### Returns

[`Point`](classes/Point.md)

#### Defined in

[index.ts:247](https://github.com/RodionNikolaev/simple-geometry/blob/a2a583f/src/index.ts#L247)

___

### perpendicularToLine

▸ **perpendicularToLine**(`point`, `start`, `end`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point`](classes/Point.md) |
| `start` | [`Point`](classes/Point.md) |
| `end` | [`Point`](classes/Point.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `isInside` | `boolean` |
| `p` | [`Point`](classes/Point.md) |

#### Defined in

[index.ts:183](https://github.com/RodionNikolaev/simple-geometry/blob/a2a583f/src/index.ts#L183)

___

### pointInsideRectangle

▸ **pointInsideRectangle**(`p`, `rect`): [`Point`](classes/Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Point`](classes/Point.md) |
| `rect` | [`Rect`](classes/Rect.md) |

#### Returns

[`Point`](classes/Point.md)

#### Defined in

[index.ts:281](https://github.com/RodionNikolaev/simple-geometry/blob/a2a583f/src/index.ts#L281)

___

### pointIsOnLine

▸ **pointIsOnLine**(`p`, `p1`, `p2`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Point`](classes/Point.md) |
| `p1` | [`Point`](classes/Point.md) |
| `p2` | [`Point`](classes/Point.md) |

#### Returns

`boolean`

#### Defined in

[index.ts:179](https://github.com/RodionNikolaev/simple-geometry/blob/a2a583f/src/index.ts#L179)

___

### pointsCenter

▸ **pointsCenter**(`startPoint`, `endPoint`): [`Point`](classes/Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `startPoint` | [`Point`](classes/Point.md) |
| `endPoint` | [`Point`](classes/Point.md) |

#### Returns

[`Point`](classes/Point.md)

#### Defined in

[index.ts:159](https://github.com/RodionNikolaev/simple-geometry/blob/a2a583f/src/index.ts#L159)

___

### rotatePoint

▸ **rotatePoint**(`angle`, `point`, `cX`, `cY`): [`Point`](classes/Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |
| `point` | [`Point`](classes/Point.md) |
| `cX` | `number` |
| `cY` | `number` |

#### Returns

[`Point`](classes/Point.md)

#### Defined in

[index.ts:97](https://github.com/RodionNikolaev/simple-geometry/blob/a2a583f/src/index.ts#L97)

___

### rotatePoints

▸ **rotatePoints**(`angle`, `points`, `cX`, `cY`): [`Point`](classes/Point.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |
| `points` | [`Point`](classes/Point.md)[] |
| `cX` | `number` |
| `cY` | `number` |

#### Returns

[`Point`](classes/Point.md)[]

#### Defined in

[index.ts:105](https://github.com/RodionNikolaev/simple-geometry/blob/a2a583f/src/index.ts#L105)

___

### round

▸ **round**(`number`, `digits?`): `number`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `number` | `number` | `undefined` | Value |
| `digits` | `number` | `3` | Number decimal digits |

#### Returns

`number`

Rounded value

#### Defined in

[index.ts:50](https://github.com/RodionNikolaev/simple-geometry/blob/a2a583f/src/index.ts#L50)

___

### roundPoint

▸ **roundPoint**(`point`, `digits`): [`Point`](classes/Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point`](classes/Point.md) |
| `digits` | `number` |

#### Returns

[`Point`](classes/Point.md)

#### Defined in

[index.ts:54](https://github.com/RodionNikolaev/simple-geometry/blob/a2a583f/src/index.ts#L54)

___

### scalePoint

▸ **scalePoint**(`p`, `dx`, `dy`, `boundingRect`, `basePoint`): [`Point`](classes/Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Point`](classes/Point.md) |
| `dx` | `number` |
| `dy` | `number` |
| `boundingRect` | [`Rect`](classes/Rect.md) |
| `basePoint` | [`BasePoint`](enums/BasePoint.md) |

#### Returns

[`Point`](classes/Point.md)

#### Defined in

[index.ts:58](https://github.com/RodionNikolaev/simple-geometry/blob/a2a583f/src/index.ts#L58)

___

### shiftPoint

▸ **shiftPoint**(`point`, `length`, `angle`): [`Point`](classes/Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point`](classes/Point.md) |
| `length` | `number` |
| `angle` | `number` |

#### Returns

[`Point`](classes/Point.md)

#### Defined in

[index.ts:109](https://github.com/RodionNikolaev/simple-geometry/blob/a2a583f/src/index.ts#L109)

___

### translatePoint

▸ **translatePoint**(`delta`, `dx`, `dy`): [`Point`](classes/Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | [`Point`](classes/Point.md) |
| `dx` | `number` |
| `dy` | `number` |

#### Returns

[`Point`](classes/Point.md)

#### Defined in

[index.ts:93](https://github.com/RodionNikolaev/simple-geometry/blob/a2a583f/src/index.ts#L93)

___

### triangleArea

▸ **triangleArea**(`p1`, `p2`, `p3`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | [`Point`](classes/Point.md) |
| `p2` | [`Point`](classes/Point.md) |
| `p3` | [`Point`](classes/Point.md) |

#### Returns

`number`

#### Defined in

[index.ts:277](https://github.com/RodionNikolaev/simple-geometry/blob/a2a583f/src/index.ts#L277)
