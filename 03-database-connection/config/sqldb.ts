import mysql, { Pool, PoolConnection, RowDataPacket } from "mysql2/promise";

export const db: Pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Vaishu@752",
  database: "hospital_db",
});

const testConnection = async (): Promise<void> => {
  try {
    const connection: PoolConnection = await db.getConnection();

    console.log("Database connection successful!");

    connection.release();
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

testConnection();

export async function query<T = RowDataPacket[]>(
  sql: string,
  params: unknown[] = [],
): Promise<T> {
  try {
    const [rows] = await db.query(sql, params);

    return rows as T;
  } catch (err) {
    console.error("DB query error:", err);

    throw err;
  }
}
