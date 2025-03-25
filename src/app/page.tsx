import { Suspense } from "react";
import { getUsers } from "@/db/api";
import { AddUser } from "./add-user";
export default function Home() {
  return (
    <div className="flex h-screen flex-col p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <Users />
      </Suspense>
      <AddUser />
    </div>
  );
}

async function Users() {
  const users = await getUsers();
  return (
    <div>
      <h1 className="font-bold text-2xl">Users</h1>
      <ul className="flex flex-col gap-2">
        {users.map((user) => (
          <li key={user.id} className="flex items-center gap-2">
            <p className="font-bold text-lg"> {user.name}</p>
            <p className="text-gray-500 text-sm">{user.age}</p>
            <p className="text-gray-500 text-sm">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
