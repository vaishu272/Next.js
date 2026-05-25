"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  await prisma.user.create({
    data: {
      name,
      email,
    },
  });

  revalidatePath("/");
}

export async function updateUser(formData: FormData) {
  const id = Number(formData.get("id"));
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  await prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
      email,
    },
  });

  revalidatePath("/");
}

export async function deleteUser(formData: FormData) {
  const id = Number(formData.get("id"));

  await prisma.user.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
}
