import React from "react";
import { query } from "@/config/sqldb";
import Link from "next/link";
import ContactTable from "./ContactTable";

type ContactRow = {
  contact_id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
};

async function getContacts(): Promise<ContactRow[]> {
  const sql = `
    SELECT 
      contact_id,
      name,
      email,
      phone,
      message,
      created_at
    FROM contacts
    ORDER BY created_at DESC
  `;

  const rows = await query<ContactRow[]>(sql, []);

  return rows;
}

const ContactDetails = async () => {
  const contacts = await getContacts();

  return (
    <div className="min-h-screen bg-black px-4 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl font-bold text-white tracking-tight">
              Contact Details
            </h1>

            <p className="mt-2 text-gray-400 text-sm sm:text-base">
              View all submitted contact messages.
            </p>
          </div>

          {/* Right Button */}
          <div className="flex justify-start sm:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-white/20 hover:scale-105"
            >
              Back to Contact
            </Link>
          </div>
        </div>

        {/* Empty State */}
        {contacts.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
            <p className="text-lg text-gray-300">No contacts found.</p>
          </div>
        ) : (
          <ContactTable contacts={contacts} />
        )}
      </div>
    </div>
  );
};

export default ContactDetails;
