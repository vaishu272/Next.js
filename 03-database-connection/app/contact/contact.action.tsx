"use server";

import { query } from "@/config/sqldb";
import { revalidatePath } from "next/cache";

type ContactForm = {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  message?: string | null;
};

export interface ContactState {
  success: boolean;
  message: string;
}

export const createContact = async (
  prevState: ContactState,
  formData: FormData,
): Promise<ContactState> => {
  try {
    const data: ContactForm = {
      name: formData.get("name")?.toString() || null,

      email: formData.get("email")?.toString() || null,

      phone: formData.get("phone")?.toString() || null,

      message: formData.get("message")?.toString() || null,
    };

    if (!data.name || !data.email || !data.message) {
      return {
        success: false,
        message: "Name, email and message are required",
      };
    }

    const sql = `
      INSERT INTO contacts (
        name,
        email,
        phone,
        message,
        created_at
      )
      VALUES (?, ?, ?, ?, NOW())
    `;

    await query(sql, [data.name, data.email, data.phone, data.message]);

    revalidatePath("/contact/contact-details");

    return {
      success: true,
      message: "Contact submitted successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to submit contact",
    };
  }
};

interface UpdateContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function updateContact(
  contactId: number,
  data: UpdateContactData,
): Promise<void> {
  try {
    const sql = `
      UPDATE contacts
      SET
        name = ?,
        email = ?,
        phone = ?,
        message = ?
      WHERE contact_id = ?
    `;

    await query(sql, [
      data.name,
      data.email,
      data.phone,
      data.message,
      contactId,
    ]);

    revalidatePath("/contact/contact-details");
  } catch (error) {
    console.error("Update Error:", error);

    throw new Error("Failed to update contact");
  }
}

export async function deleteContact(contactId: number): Promise<void> {
  try {
    const sql = `
      DELETE FROM contacts
      WHERE contact_id = ?
    `;

    await query(sql, [contactId]);

    revalidatePath("/contact/contact-details");
  } catch (error) {
    console.error("Delete Error:", error);

    throw new Error("Failed to delete contact");
  }
}
