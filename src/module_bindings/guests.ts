// THIS FILE IS AUTOMATICALLY GENERATED BY SPACETIMEDB. EDITS TO THIS FILE
// WILL NOT BE SAVED. MODIFY TABLES IN RUST INSTEAD.

// @ts-ignore
import { __SPACETIMEDB__, AlgebraicType, ProductType, BuiltinType, ProductTypeElement, SumType, SumTypeVariant, DatabaseTable, AlgebraicValue, ReducerEvent, Identity, Address, ClientDB, SpacetimeDBClient } from "@clockworklabs/spacetimedb-sdk";

export class Guests extends DatabaseTable
{
	public static db: ClientDB = __SPACETIMEDB__.clientDB;
	public static tableName = "Guests";
	public address: Address;
	public identity: Identity;
	public nickname: string;
	public color: string;
	public selectedElementId: number;
	public positionX: number;
	public positionY: number;
	public authenticated: boolean;

	public static primaryKey: string | undefined = "address";

	constructor(address: Address, identity: Identity, nickname: string, color: string, selectedElementId: number, positionX: number, positionY: number, authenticated: boolean) {
	super();
		this.address = address;
		this.identity = identity;
		this.nickname = nickname;
		this.color = color;
		this.selectedElementId = selectedElementId;
		this.positionX = positionX;
		this.positionY = positionY;
		this.authenticated = authenticated;
	}

	public static serialize(value: Guests): object {
		return [
		Array.from(value.address.toUint8Array()), Array.from(value.identity.toUint8Array()), value.nickname, value.color, value.selectedElementId, value.positionX, value.positionY, value.authenticated
		];
	}

	public static getAlgebraicType(): AlgebraicType
	{
		return AlgebraicType.createProductType([
			new ProductTypeElement("address", AlgebraicType.createProductType([
			new ProductTypeElement("addressBytes", AlgebraicType.createArrayType(AlgebraicType.createPrimitiveType(BuiltinType.Type.U8))),
		])),
			new ProductTypeElement("identity", AlgebraicType.createProductType([
			new ProductTypeElement("__identity_bytes", AlgebraicType.createArrayType(AlgebraicType.createPrimitiveType(BuiltinType.Type.U8))),
		])),
			new ProductTypeElement("nickname", AlgebraicType.createPrimitiveType(BuiltinType.Type.String)),
			new ProductTypeElement("color", AlgebraicType.createPrimitiveType(BuiltinType.Type.String)),
			new ProductTypeElement("selectedElementId", AlgebraicType.createPrimitiveType(BuiltinType.Type.U32)),
			new ProductTypeElement("positionX", AlgebraicType.createPrimitiveType(BuiltinType.Type.I32)),
			new ProductTypeElement("positionY", AlgebraicType.createPrimitiveType(BuiltinType.Type.I32)),
			new ProductTypeElement("authenticated", AlgebraicType.createPrimitiveType(BuiltinType.Type.Bool)),
		]);
	}

	public static fromValue(value: AlgebraicValue): Guests
	{
		let productValue = value.asProductValue();
		let __Address = new Address(productValue.elements[0].asProductValue().elements[0].asBytes());
		let __Identity = new Identity(productValue.elements[1].asProductValue().elements[0].asBytes());
		let __Nickname = productValue.elements[2].asString();
		let __Color = productValue.elements[3].asString();
		let __SelectedElementId = productValue.elements[4].asNumber();
		let __PositionX = productValue.elements[5].asNumber();
		let __PositionY = productValue.elements[6].asNumber();
		let __Authenticated = productValue.elements[7].asBoolean();
		return new this(__Address, __Identity, __Nickname, __Color, __SelectedElementId, __PositionX, __PositionY, __Authenticated);
	}

	public static *filterByAddress(value: Address): IterableIterator<Guests>
	{
		for (let instance of this.db.getTable("Guests").getInstances())
		{
			if (instance.address.isEqual(value)) {
				yield instance;
			}
		}
	}

	public static findByAddress(value: Address): Guests | undefined
	{
		return this.filterByAddress(value).next().value;
	}

	public static *filterByIdentity(value: Identity): IterableIterator<Guests>
	{
		for (let instance of this.db.getTable("Guests").getInstances())
		{
			if (instance.identity.isEqual(value)) {
				yield instance;
			}
		}
	}

	public static findByIdentity(value: Identity): Guests | undefined
	{
		return this.filterByIdentity(value).next().value;
	}

	public static *filterByNickname(value: string): IterableIterator<Guests>
	{
		for (let instance of this.db.getTable("Guests").getInstances())
		{
			if (instance.nickname === value) {
				yield instance;
			}
		}
	}

	public static *filterByColor(value: string): IterableIterator<Guests>
	{
		for (let instance of this.db.getTable("Guests").getInstances())
		{
			if (instance.color === value) {
				yield instance;
			}
		}
	}

	public static *filterBySelectedElementId(value: number): IterableIterator<Guests>
	{
		for (let instance of this.db.getTable("Guests").getInstances())
		{
			if (instance.selectedElementId === value) {
				yield instance;
			}
		}
	}

	public static *filterByPositionX(value: number): IterableIterator<Guests>
	{
		for (let instance of this.db.getTable("Guests").getInstances())
		{
			if (instance.positionX === value) {
				yield instance;
			}
		}
	}

	public static *filterByPositionY(value: number): IterableIterator<Guests>
	{
		for (let instance of this.db.getTable("Guests").getInstances())
		{
			if (instance.positionY === value) {
				yield instance;
			}
		}
	}

	public static *filterByAuthenticated(value: boolean): IterableIterator<Guests>
	{
		for (let instance of this.db.getTable("Guests").getInstances())
		{
			if (instance.authenticated === value) {
				yield instance;
			}
		}
	}


}

export default Guests;
