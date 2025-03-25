"use server";

import { db } from "./db";
import { users } from "./schema";

export async function getUsers() {
  return await db.query.users.findMany();
}

export async function addUser({
  name,
  age,
  email,
}: {
  name: string;
  age: number;
  email: string;
}) {
  await db.insert(users).values({ name, age, email });
}
