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
- [lineLength](modules.md#linelength)
- [lineLengthXY](modules.md#linelengthxy)
- [lineRectangleIntersections](modules.md#linerectangleintersections)
- [linesIntersection](modules.md#linesintersection)
- [minDistanceLineEnds](modules.md#mindistancelineends)
- [perpendicularPoint](modules.md#perpendicularpoint)
- [perpendicularToLine](modules.md#perpendiculartoline)
- [pointIsOnLine](modules.md#pointisonline)
- [pointsCenter](modules.md#pointscenter)
- [rotatePoint](modules.md#rotatepoint)
- [rotatePoints](modules.md#rotatepoints)
- [round](modules.md#round)
- [roundPoint](modules.md#roundpoint)
- [scalePoint](modules.md#scalepoint)
- [shiftPoint](modules.md#shiftpoint)
- [translatePoint](modules.md#translatepoint)

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

[index.ts:109](https://github.com/RodionNikolaev/simple-geometry/blob/e8bbfed/src/index.ts#L109)

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

[index.ts:128](https://github.com/RodionNikolaev/simple-geometry/blob/e8bbfed/src/index.ts#L128)

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

[index.ts:156](https://github.com/RodionNikolaev/simple-geometry/blob/e8bbfed/src/index.ts#L156)

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

[index.ts:113](https://github.com/RodionNikolaev/simple-geometry/blob/e8bbfed/src/index.ts#L113)

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

[index.ts:139](https://github.com/RodionNikolaev/simple-geometry/blob/e8bbfed/src/index.ts#L139)

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

[index.ts:164](https://github.com/RodionNikolaev/simple-geometry/blob/e8bbfed/src/index.ts#L164)

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

[index.ts:168](https://github.com/RodionNikolaev/simple-geometry/blob/e8bbfed/src/index.ts#L168)

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

[index.ts:248](https://github.com/RodionNikolaev/simple-geometry/blob/e8bbfed/src/index.ts#L248)

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

[index.ts:203](https://github.com/RodionNikolaev/simple-geometry/blob/e8bbfed/src/index.ts#L203)

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

[index.ts:193](https://github.com/RodionNikolaev/simple-geometry/blob/e8bbfed/src/index.ts#L193)

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

[index.ts:240](https://github.com/RodionNikolaev/simple-geometry/blob/e8bbfed/src/index.ts#L240)

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

[index.ts:176](https://github.com/RodionNikolaev/simple-geometry/blob/e8bbfed/src/index.ts#L176)

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

[index.ts:172](https://github.com/RodionNikolaev/simple-geometry/blob/e8bbfed/src/index.ts#L172)

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

[index.ts:152](https://github.com/RodionNikolaev/simple-geometry/blob/e8bbfed/src/index.ts#L152)

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

[index.ts:90](https://github.com/RodionNikolaev/simple-geometry/blob/e8bbfed/src/index.ts#L90)

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

[index.ts:98](https://github.com/RodionNikolaev/simple-geometry/blob/e8bbfed/src/index.ts#L98)

___

### round

▸ **round**(`number`, `digits?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `number` | `number` | `undefined` |
| `digits` | `number` | `3` |

#### Returns

`number`

#### Defined in

[index.ts:44](https://github.com/RodionNikolaev/simple-geometry/blob/e8bbfed/src/index.ts#L44)

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

[index.ts:48](https://github.com/RodionNikolaev/simple-geometry/blob/e8bbfed/src/index.ts#L48)

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

[index.ts:51](https://github.com/RodionNikolaev/simple-geometry/blob/e8bbfed/src/index.ts#L51)

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

[index.ts:102](https://github.com/RodionNikolaev/simple-geometry/blob/e8bbfed/src/index.ts#L102)

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

[index.ts:86](https://github.com/RodionNikolaev/simple-geometry/blob/e8bbfed/src/index.ts#L86)
