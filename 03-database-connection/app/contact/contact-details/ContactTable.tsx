"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Pencil, Trash2, Save, X } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { deleteContact, updateContact } from "../contact.action";

type Contact = {
  contact_id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
};

interface Props {
  contacts: Contact[];
}

type HotToast = { id: string | number };

const ContactTable = ({ contacts }: Props) => {
  const router = useRouter();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedData, setEditedData] = useState<Contact | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleEdit = (contact: Contact) => {
    setEditingId(contact.contact_id);
    setEditedData(contact);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditedData(null);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (!editedData) return;

    setEditedData({
      ...editedData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    if (!editedData) return;

    const id = toast.loading("Saving contact...");

    try {
      await updateContact(editedData.contact_id, {
        name: editedData.name,
        email: editedData.email,
        phone: editedData.phone,
        message: editedData.message,
      });

      toast.success("Contact saved", { id });

      startTransition(() => {
        router.refresh();
        setEditingId(null);
        setEditedData(null);
      });
    } catch (error) {
      toast.error("Failed to save contact", { id });
      console.error(error);
    }
  };

  const handleDelete = async (contactId: number) => {
    const confirmed = await new Promise<boolean>((resolve) => {
      toast(
        (t: unknown) => (
          <div className="flex flex-col">
            <div className="text-sm">
              Are you sure you want to delete this contact?
            </div>
            <div className="mt-3 flex items-center gap-2">
              <button
                onClick={() => {
                  toast.dismiss(String((t as HotToast).id));
                  resolve(true);
                }}
                className="rounded bg-red-600 px-3 py-1 text-sm text-white"
              >
                Delete
              </button>

              <button
                onClick={() => {
                  toast.dismiss(String((t as HotToast).id));
                  resolve(false);
                }}
                className="rounded bg-gray-700 px-3 py-1 text-sm text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        ),
        { duration: Infinity },
      );
    });

    if (!confirmed) return;

    const id = toast.loading("Deleting contact...");

    try {
      await deleteContact(contactId);

      toast.success("Contact deleted", { id });

      startTransition(() => {
        router.refresh();
        if (editingId === contactId) {
          setEditingId(null);
          setEditedData(null);
        }
      });
    } catch (error) {
      toast.error("Failed to delete contact", { id });
      console.error(error);
    }
  };

  return (
    <div>
      <Toaster position="top-right" />

      <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-white/10 bg-white/10 text-left">
              {[
                "ID",
                "Name",
                "Email",
                "Phone",
                "Message",
                "Created At",
                "Actions",
              ].map((heading) => (
                <th
                  key={heading}
                  className="px-6 py-4 text-sm font-semibold uppercase tracking-wide text-blue-400"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact) => {
              const isEditing = editingId === contact.contact_id;

              return (
                <tr
                  key={contact.contact_id}
                  className="border-b border-white/5 hover:bg-white/5"
                >
                  <td className="px-6 py-5">{contact.contact_id}</td>

                  <td className="px-6 py-5">
                    {isEditing ? (
                      <input
                        type="text"
                        name="name"
                        value={editedData?.name || ""}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 outline-none"
                      />
                    ) : (
                      contact.name
                    )}
                  </td>

                  <td className="px-6 py-5">
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={editedData?.email || ""}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 outline-none"
                      />
                    ) : (
                      contact.email
                    )}
                  </td>

                  <td className="px-6 py-5">
                    {isEditing ? (
                      <input
                        type="text"
                        name="phone"
                        value={editedData?.phone || ""}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 outline-none"
                      />
                    ) : (
                      contact.phone
                    )}
                  </td>

                  <td className="px-6 py-5">
                    {isEditing ? (
                      <textarea
                        name="message"
                        value={editedData?.message || ""}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 outline-none"
                      />
                    ) : (
                      contact.message
                    )}
                  </td>

                  <td className="px-6 py-5 text-sm text-gray-400">
                    {new Date(contact.created_at).toLocaleString("en-IN", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      hour12: true,
                    })}
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      {isEditing ? (
                        <>
                          <button
                            onClick={handleSave}
                            disabled={isPending}
                            className="inline-flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400 transition hover:bg-green-500/20 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <Save size={16} />
                            Save
                          </button>

                          <button
                            onClick={handleCancel}
                            className="inline-flex items-center gap-2 rounded-xl border border-gray-500/30 bg-gray-500/10 px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-gray-500/20"
                          >
                            <X size={16} />
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleEdit(contact)}
                            className="inline-flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400 transition hover:bg-blue-500/20"
                          >
                            <Pencil size={16} />
                            Edit
                          </button>

                          <button
                            onClick={() => handleDelete(contact.contact_id)}
                            className="inline-flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/20"
                          >
                            <Trash2 size={16} />
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactTable;
