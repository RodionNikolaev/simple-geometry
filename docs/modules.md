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
- [getLUT](modules.md#getlut)
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
- [toD](modules.md#tod)
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

[index.ts:128](https://github.com/RodionNikolaev/simple-geometry/blob/5e97052/src/index.ts#L128)

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

[index.ts:147](https://github.com/RodionNikolaev/simple-geometry/blob/5e97052/src/index.ts#L147)

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

[index.ts:175](https://github.com/RodionNikolaev/simple-geometry/blob/5e97052/src/index.ts#L175)

___

### getLUT

▸ **getLUT**(`points`, `steps?`): `any`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `points` | [`Point`](classes/Point.md)[] | `undefined` |
| `steps` | `number` | `100` |

#### Returns

`any`[]

#### Defined in

[index.ts:308](https://github.com/RodionNikolaev/simple-geometry/blob/5e97052/src/index.ts#L308)

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

[index.ts:132](https://github.com/RodionNikolaev/simple-geometry/blob/5e97052/src/index.ts#L132)

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

[index.ts:158](https://github.com/RodionNikolaev/simple-geometry/blob/5e97052/src/index.ts#L158)

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

[index.ts:285](https://github.com/RodionNikolaev/simple-geometry/blob/5e97052/src/index.ts#L285)

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

[index.ts:183](https://github.com/RodionNikolaev/simple-geometry/blob/5e97052/src/index.ts#L183)

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

[index.ts:187](https://github.com/RodionNikolaev/simple-geometry/blob/5e97052/src/index.ts#L187)

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

[index.ts:267](https://github.com/RodionNikolaev/simple-geometry/blob/5e97052/src/index.ts#L267)

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

[index.ts:222](https://github.com/RodionNikolaev/simple-geometry/blob/5e97052/src/index.ts#L222)

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

[index.ts:212](https://github.com/RodionNikolaev/simple-geometry/blob/5e97052/src/index.ts#L212)

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

[index.ts:259](https://github.com/RodionNikolaev/simple-geometry/blob/5e97052/src/index.ts#L259)

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

[index.ts:195](https://github.com/RodionNikolaev/simple-geometry/blob/5e97052/src/index.ts#L195)

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

[index.ts:293](https://github.com/RodionNikolaev/simple-geometry/blob/5e97052/src/index.ts#L293)

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

[index.ts:191](https://github.com/RodionNikolaev/simple-geometry/blob/5e97052/src/index.ts#L191)

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

[index.ts:171](https://github.com/RodionNikolaev/simple-geometry/blob/5e97052/src/index.ts#L171)

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

[index.ts:109](https://github.com/RodionNikolaev/simple-geometry/blob/5e97052/src/index.ts#L109)

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

[index.ts:117](https://github.com/RodionNikolaev/simple-geometry/blob/5e97052/src/index.ts#L117)

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

[index.ts:59](https://github.com/RodionNikolaev/simple-geometry/blob/5e97052/src/index.ts#L59)

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

[index.ts:66](https://github.com/RodionNikolaev/simple-geometry/blob/5e97052/src/index.ts#L66)

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

[index.ts:70](https://github.com/RodionNikolaev/simple-geometry/blob/5e97052/src/index.ts#L70)

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

[index.ts:121](https://github.com/RodionNikolaev/simple-geometry/blob/5e97052/src/index.ts#L121)

___

### toD

▸ **toD**(`points`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | [`Point`](classes/Point.md)[] |

#### Returns

`string`

#### Defined in

[index.ts:373](https://github.com/RodionNikolaev/simple-geometry/blob/5e97052/src/index.ts#L373)

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

[index.ts:105](https://github.com/RodionNikolaev/simple-geometry/blob/5e97052/src/index.ts#L105)

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

[index.ts:289](https://github.com/RodionNikolaev/simple-geometry/blob/5e97052/src/index.ts#L289)
