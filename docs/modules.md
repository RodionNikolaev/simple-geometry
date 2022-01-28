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

[index.ts:126](https://github.com/RodionNikolaev/simple-geometry/blob/7b35362/src/index.ts#L126)

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

[index.ts:145](https://github.com/RodionNikolaev/simple-geometry/blob/7b35362/src/index.ts#L145)

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

[index.ts:173](https://github.com/RodionNikolaev/simple-geometry/blob/7b35362/src/index.ts#L173)

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

[index.ts:130](https://github.com/RodionNikolaev/simple-geometry/blob/7b35362/src/index.ts#L130)

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

[index.ts:156](https://github.com/RodionNikolaev/simple-geometry/blob/7b35362/src/index.ts#L156)

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

[index.ts:283](https://github.com/RodionNikolaev/simple-geometry/blob/7b35362/src/index.ts#L283)

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

[index.ts:181](https://github.com/RodionNikolaev/simple-geometry/blob/7b35362/src/index.ts#L181)

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

[index.ts:185](https://github.com/RodionNikolaev/simple-geometry/blob/7b35362/src/index.ts#L185)

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

[index.ts:265](https://github.com/RodionNikolaev/simple-geometry/blob/7b35362/src/index.ts#L265)

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

[index.ts:220](https://github.com/RodionNikolaev/simple-geometry/blob/7b35362/src/index.ts#L220)

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

[index.ts:210](https://github.com/RodionNikolaev/simple-geometry/blob/7b35362/src/index.ts#L210)

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

[index.ts:257](https://github.com/RodionNikolaev/simple-geometry/blob/7b35362/src/index.ts#L257)

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

[index.ts:193](https://github.com/RodionNikolaev/simple-geometry/blob/7b35362/src/index.ts#L193)

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

[index.ts:291](https://github.com/RodionNikolaev/simple-geometry/blob/7b35362/src/index.ts#L291)

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

[index.ts:189](https://github.com/RodionNikolaev/simple-geometry/blob/7b35362/src/index.ts#L189)

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

[index.ts:169](https://github.com/RodionNikolaev/simple-geometry/blob/7b35362/src/index.ts#L169)

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

[index.ts:107](https://github.com/RodionNikolaev/simple-geometry/blob/7b35362/src/index.ts#L107)

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

[index.ts:115](https://github.com/RodionNikolaev/simple-geometry/blob/7b35362/src/index.ts#L115)

___

### round

▸ **round**(`number`, `digits?`): `number`

Round value to the number of gecimal digits

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `number` | `number` | `undefined` | Value |
| `digits` | `number` | `3` | Number decimal digits |

#### Returns

`number`

Rounded value

#### Defined in

[index.ts:60](https://github.com/RodionNikolaev/simple-geometry/blob/7b35362/src/index.ts#L60)

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

[index.ts:64](https://github.com/RodionNikolaev/simple-geometry/blob/7b35362/src/index.ts#L64)

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

[index.ts:68](https://github.com/RodionNikolaev/simple-geometry/blob/7b35362/src/index.ts#L68)

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

[index.ts:119](https://github.com/RodionNikolaev/simple-geometry/blob/7b35362/src/index.ts#L119)

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

[index.ts:103](https://github.com/RodionNikolaev/simple-geometry/blob/7b35362/src/index.ts#L103)

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

[index.ts:287](https://github.com/RodionNikolaev/simple-geometry/blob/7b35362/src/index.ts#L287)
