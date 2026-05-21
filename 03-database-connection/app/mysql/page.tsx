import Link from "next/link";
import { query } from "@/config/sqldb";
import styles from "./doctor.module.css";

export const dynamic = "force-dynamic";

const DoctorsList = async () => {
  const rows = await query(
    "SELECT doctor_id, first_name, last_name, specialization, city, is_active FROM doctors ORDER BY doctor_id DESC LIMIT 100",
  );

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="mb-10 overflow-hidden rounded-4xl border border-white/10 bg-slate-950/90 p-8 shadow-xl shadow-black/50 backdrop-blur-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">
                Hospital directory
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Doctors list
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Browse the hospital doctor directory and open any profile for
                more details.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Home
            </Link>
          </div>
        </section>

        <div className={styles.listGrid}>
          {rows.map((d) => (
            <Link
              key={d.doctor_id}
              href={`/mysql/${d.doctor_id}`}
              className={`${styles.listItem} group`}
            >
              <div className="flex items-start gap-4">
                <div className={styles.avatar}>
                  {d.first_name?.charAt(0) ?? "D"}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                    {d.city}
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-white">
                    Dr. {d.first_name} {d.last_name}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {d.specialization}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]">
                    <span
                      className={
                        styles.statusBadge +
                        " " +
                        (d.is_active
                          ? styles.activeBadge
                          : styles.inactiveBadge)
                      }
                    >
                      {d.is_active ? "Active" : "Inactive"}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default DoctorsList;
