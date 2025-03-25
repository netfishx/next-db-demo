"use client";

import { useRouter } from "next/navigation";
import { startTransition, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { addUser } from "@/db/api";
export function AddUser() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  async function handleAddUser() {
    startTransition(async () => {
      await addUser({
        name: Math.random().toString(36).substring(2, 15),
        age: Math.floor(Math.random() * 100),
        email: Math.random().toString(36).substring(2, 15),
      });
      router.refresh();
    });
  }
  return (
    <Button onClick={handleAddUser} disabled={isPending}>
      {isPending ? "Adding..." : "Add User"}
    </Button>
  );
}
