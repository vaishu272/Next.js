import Link from "next/link";
import { db } from "@/config/sqldb";
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  CalendarDays,
  BadgeCheck,
} from "lucide-react";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

interface Doctor {
  doctor_id: number;
  first_name: string;
  last_name: string;
  gender: string;
  specialization: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postal_code: string;
  date_of_birth: string;
  experience_years: number;
  license_number: string;
  joining_date: string;
  is_active: boolean;
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const formatDate = (value?: string): string => {
  if (!value) return "N/A";

  const date = new Date(value);

  return Number.isNaN(date.getTime())
    ? "N/A"
    : date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
};

const DoctorDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;

  const numericId = Number(id);

  if (!Number.isInteger(numericId) || numericId <= 0) {
    notFound();
  }

  const [rows] = await db.query("SELECT * FROM doctors WHERE doctor_id = ?", [
    id,
  ]);

  const doctor = (rows as Doctor[])[0];

  if (!doctor) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black px-4 py-8">
      <div className="mx-auto w-full max-w-xl">
        {/* Home Button */}
        <div className="mb-6 flex justify-end">
          <Link
            href="/mysql"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
          >
            Back to Doctors List
          </Link>
        </div>

        {/* Card */}
        <div className="overflow-hidden rounded-3xl bg-slate-950 border border-white/10 shadow-2xl shadow-black/50">
          {/* Top Section */}
          <div className="bg-linear-to-r from-sky-600 via-violet-600 to-pink-500 p-6 relative">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-white text-3xl font-bold text-slate-950 shadow-lg">
              {doctor.first_name?.charAt(0) ?? "D"}
            </div>

            <div className="mt-4 text-white">
              <h1 className="text-2xl font-bold">
                Dr. {doctor.first_name} {doctor.last_name}
              </h1>

              <p className="text-sm opacity-90">{doctor.specialization}</p>

              <div className="mt-1 flex items-center gap-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-green-400"></span>

                <span>{doctor.is_active ? "Active" : "Inactive"}</span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-5 p-6 text-slate-300">
            <div className="flex items-start gap-3">
              <Mail className="mt-1 text-blue-500" size={18} />

              <p className="text-sm">{doctor.email}</p>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-1 text-blue-500" size={18} />

              <p className="text-sm text-slate-200">{doctor.phone}</p>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-1 text-red-500" size={18} />

              <div className="text-sm text-slate-200">
                <p>{doctor.address}</p>

                <p>
                  {doctor.city}, {doctor.state} {doctor.postal_code}
                </p>
              </div>
            </div>

            {/* Experience + License */}
            <div className="grid grid-cols-2 gap-5 pt-3">
              <div>
                <div className="mb-1 flex items-center gap-2 text-yellow-400">
                  <Briefcase size={18} />

                  <span className="text-sm font-semibold text-slate-100">
                    Experience
                  </span>
                </div>

                <p className="text-sm text-slate-300">
                  {doctor.experience_years} Years
                </p>
              </div>

              <div>
                <div className="mb-1 flex items-center gap-2 text-purple-400">
                  <BadgeCheck size={18} />

                  <span className="text-sm font-semibold text-slate-100">
                    License
                  </span>
                </div>

                <p className="text-sm text-slate-300">
                  {doctor.license_number}
                </p>
              </div>
            </div>

            {/* Joined */}
            <div className="pt-2">
              <div className="mb-1 flex items-center gap-2 text-blue-400">
                <CalendarDays size={18} />

                <span className="text-sm font-semibold text-slate-100">
                  Joined
                </span>
              </div>

              <p className="text-sm text-slate-300">
                {formatDate(doctor.joining_date)}
              </p>
            </div>

            {/* Footer */}
            <div className="flex justify-between border-t border-white/10 pt-4 text-xs text-slate-400">
              <p>ID: {doctor.doctor_id}</p>

              <p>Born: {formatDate(doctor.date_of_birth)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsPage;
