[Simple geometry](../README.md) / [Exports](../modules.md) / Rect

# Class: Rect

## Table of contents

### Constructors

- [constructor](Rect.md#constructor)

### Properties

- [p0](Rect.md#p0)
- [p1](Rect.md#p1)
- [p2](Rect.md#p2)
- [p3](Rect.md#p3)

### Accessors

- [center](Rect.md#center)
- [height](Rect.md#height)
- [square](Rect.md#square)
- [width](Rect.md#width)
- [x](Rect.md#x)
- [y](Rect.md#y)

### Methods

- [isZero](Rect.md#iszero)
- [fromWH](Rect.md#fromwh)

## Constructors

### constructor

• **new Rect**(`p0`, `p1`, `p2`, `p3`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p0` | [`Point`](Point.md) |
| `p1` | [`Point`](Point.md) |
| `p2` | [`Point`](Point.md) |
| `p3` | [`Point`](Point.md) |

#### Defined in

[index.ts:10](https://github.com/RodionNikolaev/simple-geometry/blob/53b0e55/src/index.ts#L10)

## Properties

### p0

• **p0**: [`Point`](Point.md)

___

### p1

• **p1**: [`Point`](Point.md)

___

### p2

• **p2**: [`Point`](Point.md)

___

### p3

• **p3**: [`Point`](Point.md)

## Accessors

### center

• `get` **center**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

#### Defined in

[index.ts:35](https://github.com/RodionNikolaev/simple-geometry/blob/53b0e55/src/index.ts#L35)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:20](https://github.com/RodionNikolaev/simple-geometry/blob/53b0e55/src/index.ts#L20)

___

### square

• `get` **square**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:38](https://github.com/RodionNikolaev/simple-geometry/blob/53b0e55/src/index.ts#L38)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:16](https://github.com/RodionNikolaev/simple-geometry/blob/53b0e55/src/index.ts#L16)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:24](https://github.com/RodionNikolaev/simple-geometry/blob/53b0e55/src/index.ts#L24)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:28](https://github.com/RodionNikolaev/simple-geometry/blob/53b0e55/src/index.ts#L28)

## Methods

### isZero

▸ **isZero**(): `boolean`

#### Returns

`boolean`

#### Defined in

[index.ts:32](https://github.com/RodionNikolaev/simple-geometry/blob/53b0e55/src/index.ts#L32)

___

### fromWH

▸ `Static` **fromWH**(`x`, `y`, `width`, `height`): [`Rect`](Rect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

[`Rect`](Rect.md)

#### Defined in

[index.ts:12](https://github.com/RodionNikolaev/simple-geometry/blob/53b0e55/src/index.ts#L12)
