[Simple geometry](../README.md) / [Exports](../modules.md) / [points](../modules/points.md) / Rect

# Class: Rect

[points](../modules/points.md).Rect

## Table of contents

### Methods

- [fromWH](points.Rect.md#fromwh)
- [isZero](points.Rect.md#iszero)

### Constructors

- [constructor](points.Rect.md#constructor)

### Properties

- [p0](points.Rect.md#p0)
- [p1](points.Rect.md#p1)
- [p2](points.Rect.md#p2)
- [p3](points.Rect.md#p3)

### Accessors

- [width](points.Rect.md#width)
- [height](points.Rect.md#height)
- [x](points.Rect.md#x)
- [y](points.Rect.md#y)
- [center](points.Rect.md#center)
- [square](points.Rect.md#square)

## Methods

### fromWH

▸ `Static` **fromWH**(`x`, `y`, `width`, `height`): [`Rect`](points.Rect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

[`Rect`](points.Rect.md)

#### Defined in

points.ts:12

___

### isZero

▸ **isZero**(): `boolean`

#### Returns

`boolean`

#### Defined in

points.ts:32

## Constructors

### constructor

• **new Rect**(`p0`, `p1`, `p2`, `p3`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p0` | [`Point`](points.Point.md) |
| `p1` | [`Point`](points.Point.md) |
| `p2` | [`Point`](points.Point.md) |
| `p3` | [`Point`](points.Point.md) |

#### Defined in

points.ts:10

## Properties

### p0

• **p0**: [`Point`](points.Point.md)

___

### p1

• **p1**: [`Point`](points.Point.md)

___

### p2

• **p2**: [`Point`](points.Point.md)

___

### p3

• **p3**: [`Point`](points.Point.md)

## Accessors

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

points.ts:16

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

points.ts:20

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Defined in

points.ts:24

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Defined in

points.ts:28

___

### center

• `get` **center**(): [`Point`](points.Point.md)

#### Returns

[`Point`](points.Point.md)

#### Defined in

points.ts:35

___

### square

• `get` **square**(): `number`

#### Returns

`number`

#### Defined in

points.ts:38
