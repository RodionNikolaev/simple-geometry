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

points.ts:60

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

points.ts:67

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

points.ts:71

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

points.ts:106

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

points.ts:110

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

points.ts:118

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

points.ts:122

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

points.ts:129

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

points.ts:133

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

points.ts:148

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

points.ts:159

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

points.ts:172

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

points.ts:176

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

points.ts:184

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

points.ts:188

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

points.ts:192

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

points.ts:196

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

points.ts:213

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

points.ts:217

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

points.ts:227

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

points.ts:241

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

points.ts:291

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

points.ts:299

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

points.ts:317

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

points.ts:321

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

points.ts:325

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

points.ts:336

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

points.ts:362

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

points.ts:372

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

points.ts:381

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

points.ts:399

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

points.ts:413
