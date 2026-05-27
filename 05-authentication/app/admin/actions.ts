"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { Roles } from "@/types/globals";
import { revalidatePath } from "next/cache";

export async function setRole(formData: FormData) {
  const { sessionClaims } = await auth();

  // Admin Protection
  if (sessionClaims?.metadata?.role !== "admin") {
    throw new Error("Unauthorized");
  }

  const client = await clerkClient();

  const userId = formData.get("userId") as string;

  const role = formData.get("role") as Roles;

  try {
    await client.users.updateUserMetadata(userId, {
      publicMetadata: {
        role,
      },
    });
  } catch (error) {
    console.log(error);

    throw new Error("Failed to set role");
  }

  revalidatePath("/admin");
}

export async function removeRole(formData: FormData) {
  const { sessionClaims } = await auth();

  // Admin Protection
  if (sessionClaims?.metadata?.role !== "admin") {
    throw new Error("Unauthorized");
  }

  const client = await clerkClient();

  const userId = formData.get("userId") as string;

  try {
    await client.users.updateUserMetadata(userId, {
      publicMetadata: {
        role: null,
      },
    });
  } catch (error) {
    console.log(error);

    throw new Error("Failed to remove role");
  }

  revalidatePath("/admin");
}

export async function removeUser(formData: FormData) {
  const { sessionClaims } = await auth();

  // Admin Protection
  if (sessionClaims?.metadata?.role !== "admin") {
    throw new Error("Unauthorized");
  }

  const client = await clerkClient();

  const userId = formData.get("userId") as string;

  try {
    await client.users.deleteUser(userId);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete user");
  }

  revalidatePath("/admin");
}
