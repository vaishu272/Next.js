"use client";

import { Mail, Phone, User, MapPin } from "lucide-react";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import { createContact } from "./contact.action";
import { useRouter } from "next/navigation";
import { SubmitButton } from "./SubmitButton";

const ContactPage = () => {
  const router = useRouter();
  const initialState = {
    success: false,
    message: "",
  };
  const [state, formAction] = useActionState(createContact, initialState);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message);
        router.push("/contact/contact-details");
      } else {
        toast.error(state.message);
      }
    }
  }, [state, router]);
  return (
    <div className="min-h-screen bg-black px-4 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 items-center">
        {/* Left Section */}
        <div>
          <div className="mb-6 flex  gap-2 justify-end">
            <Link
              href="/contact/contact-details"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              View Contact Details
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Back to Home
            </Link>
          </div>

          <p className="font-semibold uppercase tracking-widest text-blue-400">
            Contact Us
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight">
            Let’s Build Something Amazing Together
          </h1>

          <p className="mt-6 leading-relaxed text-gray-400">
            Have questions, suggestions, or want to collaborate? Fill out the
            form and our team will get back to you soon.
          </p>

          <div className="mt-10 space-y-6">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-blue-600 p-3">
                <Mail size={22} />
              </div>

              <div>
                <p className="font-semibold">Email</p>

                <p className="text-gray-400">support@example.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-purple-600 p-3">
                <Phone size={22} />
              </div>

              <div>
                <p className="font-semibold">Phone</p>

                <p className="text-gray-400">+91 9876543210</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-pink-600 p-3">
                <MapPin size={22} />
              </div>

              <div>
                <p className="font-semibold">Location</p>

                <p className="text-gray-400">Ahmedabad, Gujarat, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
          <h2 className="mb-8 text-3xl font-bold">Send Message</h2>

          <form action={formAction} className="space-y-6">
            {/* Name */}
            <div>
              <div className="flex items-center rounded-xl border border-white/10 bg-white/5 px-4">
                <User className="text-gray-400" size={18} />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full bg-transparent px-3 py-4 outline-none"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center rounded-xl border border-white/10 bg-white/5 px-4">
                <Mail className="text-gray-400" size={18} />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent px-3 py-4 outline-none"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-center rounded-xl border border-white/10 bg-white/5 px-4">
                <Phone className="text-gray-400" size={18} />

                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full bg-transparent px-3 py-4 outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                rows={5}
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-4 outline-none"
                required
              />
            </div>

            {/* Button */}
            <SubmitButton />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
