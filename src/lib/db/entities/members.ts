import { db } from "..";
import { makeUUIDv5 } from "../../util/uuid";
import { UUID, UUIDable } from "../types";
import { getSystemUUID } from "./system";

export type Member = UUIDable & {
	name: string,
	pronouns?: string,
	description?: string,
	role?: string,
	image?: Blob,
	color?: string, // todo
	isArchived: boolean,
	isCustomFront: boolean, // todo
	tags?: UUID[] // array of UUIDs
}

export function getTable() {
	return db.members;
}

function genid(name: string) {
	return makeUUIDv5(getSystemUUID(), `members\0${name}`);
}

export async function newMember(member: Omit<Member, keyof UUIDable>) {
	const uuid = genid(member.name);
	return await getTable().add({
		...member,
		uuid
	});
}