[Simple geometry](../README.md) / [Exports](../modules.md) / pathPoints

# Module: pathPoints

## Table of contents

### Classes

- [PathPoint](../classes/pathPoints.PathPoint.md)

### Functions

- [addPathPoint](pathPoints.md#addpathpoint)
- [splitPath](pathPoints.md#splitpath)
- [removePathPoint](pathPoints.md#removepathpoint)
- [splitPolygon](pathPoints.md#splitpolygon)
- [linerizePolygon](pathPoints.md#linerizepolygon)
- [pathStringToPathPoints](pathPoints.md#pathstringtopathpoints)
- [clonePP](pathPoints.md#clonepp)
- [getLUT](pathPoints.md#getlut)

## Functions

### addPathPoint

▸ **addPathPoint**(`pathPoints`, `clickPoint`, `isCurved`): [`PathPoint`](../classes/pathPoints.PathPoint.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathPoints` | [`PathPoint`](../classes/pathPoints.PathPoint.md)[] |
| `clickPoint` | [`Point`](../classes/points.Point.md) |
| `isCurved` | `boolean` |

#### Returns

[`PathPoint`](../classes/pathPoints.PathPoint.md)[]

#### Defined in

[pathPoints.ts:11](https://github.com/RodionNikolaev/simple-geometry/blob/fbce11c/src/pathPoints.ts#L11)

___

### splitPath

▸ **splitPath**(`pathPoints`, `clickPoint`): [`PathPoint`](../classes/pathPoints.PathPoint.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathPoints` | [`PathPoint`](../classes/pathPoints.PathPoint.md)[] |
| `clickPoint` | [`Point`](../classes/points.Point.md) |

#### Returns

[`PathPoint`](../classes/pathPoints.PathPoint.md)[]

#### Defined in

[pathPoints.ts:45](https://github.com/RodionNikolaev/simple-geometry/blob/fbce11c/src/pathPoints.ts#L45)

___

### removePathPoint

▸ **removePathPoint**(`pathPoints`, `pointIndex`, `code`): [`PathPoint`](../classes/pathPoints.PathPoint.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathPoints` | [`PathPoint`](../classes/pathPoints.PathPoint.md)[] |
| `pointIndex` | `number` |
| `code` | ``"point"`` \| ``"cp1"`` \| ``"cp2"`` |

#### Returns

[`PathPoint`](../classes/pathPoints.PathPoint.md)[]

#### Defined in

[pathPoints.ts:68](https://github.com/RodionNikolaev/simple-geometry/blob/fbce11c/src/pathPoints.ts#L68)

___

### splitPolygon

▸ **splitPolygon**(`pathPoints`, `p0`, `p1`): [`PathPoint`](../classes/pathPoints.PathPoint.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathPoints` | [`PathPoint`](../classes/pathPoints.PathPoint.md)[] |
| `p0` | [`Point`](../classes/points.Point.md) |
| `p1` | [`Point`](../classes/points.Point.md) |

#### Returns

[`PathPoint`](../classes/pathPoints.PathPoint.md)[]

#### Defined in

[pathPoints.ts:81](https://github.com/RodionNikolaev/simple-geometry/blob/fbce11c/src/pathPoints.ts#L81)

___

### linerizePolygon

▸ **linerizePolygon**(`pathPoints`): [`Point`](../classes/points.Point.md)[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathPoints` | [`PathPoint`](../classes/pathPoints.PathPoint.md)[] |

#### Returns

[`Point`](../classes/points.Point.md)[][]

#### Defined in

[pathPoints.ts:107](https://github.com/RodionNikolaev/simple-geometry/blob/fbce11c/src/pathPoints.ts#L107)

___

### pathStringToPathPoints

▸ **pathStringToPathPoints**(`d`, `t?`): [`PathPoint`](../classes/pathPoints.PathPoint.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `d` | `string` | `undefined` |
| `t` | `string` | `null` |

#### Returns

[`PathPoint`](../classes/pathPoints.PathPoint.md)[]

#### Defined in

[pathPoints.ts:136](https://github.com/RodionNikolaev/simple-geometry/blob/fbce11c/src/pathPoints.ts#L136)

___

### clonePP

▸ **clonePP**(`pathPoints`): [`PathPoint`](../classes/pathPoints.PathPoint.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathPoints` | readonly [`PathPoint`](../classes/pathPoints.PathPoint.md)[] |

#### Returns

[`PathPoint`](../classes/pathPoints.PathPoint.md)[]

#### Defined in

[pathPoints.ts:197](https://github.com/RodionNikolaev/simple-geometry/blob/fbce11c/src/pathPoints.ts#L197)

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

[pathPoints.ts:390](https://github.com/RodionNikolaev/simple-geometry/blob/fbce11c/src/pathPoints.ts#L390)
