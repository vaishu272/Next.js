# Next.js Prisma SQLite CRUD App

A simple full-stack CRUD application built using:

- Next.js
- TypeScript
- Prisma ORM
- SQLite
- Tailwind CSS

---

# Features

- Create User
- Read Users
- Update User
- Delete User
- Search Users
- Dark Dashboard UI
- Conditional Edit Form

---

# What is Prisma?

Prisma is an ORM used to interact with databases using TypeScript instead of raw SQL queries.

Example:

- Create user
- Fetch users
- Update user
- Delete user

using simple Prisma methods.

---

# What is SQLite?

SQLite is a lightweight file-based database.

Advantages:

- No installation required
- Beginner friendly
- Stores data locally
- Perfect for learning and small projects

Database file example:

```bash
dev.db
```

---

# Schema Explanation

| Field                     | Meaning                   |
| ------------------------- | ------------------------- |
| id                        | Primary key               |
| @id                       | Marks primary key         |
| @default(autoincrement()) | Auto increments IDs       |
| @unique                   | Prevents duplicate emails |

---

# Technologies Used

| Technology   | Purpose              |
| ------------ | -------------------- |
| Next.js      | Full-stack framework |
| TypeScript   | Type safety          |
| Prisma ORM   | Database operations  |
| SQLite       | Database             |
| Tailwind CSS | Styling              |

---

# Project Setup

## 1. Create Project

```bash
npx create-next-app@latest prisma-crud-app --typescript
```

---

## 2. Install Dependencies

```bash
npm install prisma @prisma/client
```

```bash
npm install @prisma/adapter-better-sqlite3 better-sqlite3
```

---

## 3. Initialize Prisma

```bash
npx prisma init
```

---

## 4. Configure Database

Update `.env`

```env
DATABASE_URL="file:./prisma/dev.db"
```

---

## 5. Run Migration

```bash
npx prisma migrate dev --name init
```

---

## 6. Generate Prisma Client

```bash
npx prisma generate
```

---

# Prisma Commands

## Start Development Server

```bash
npm run dev
```

---

## Open Prisma Studio

```bash
npx prisma studio
```

---

## Create Migration

```bash
npx prisma migrate dev --name init
```

---

## Reset Database

```bash
npx prisma migrate reset
```

---

# Folder Structure

```bash
app/
components/
lib/
prisma/

.env
prisma.config.ts
```

---

# CRUD Operations

| Operation | Description |
| --------- | ----------- |
| Create    | Add user    |
| Read      | Fetch users |
| Update    | Edit user   |
| Delete    | Remove user |

---

# Search Functionality

Users can be searched using:

- Name
- Email

using client-side filtering.

---

# UI Features

- Dark modern dashboard
- Editable rows
- Responsive table
- Search input
- Action buttons

---

# Learning Outcomes

This project helps in learning:

- Prisma setup
- SQLite connection
- CRUD operations
- Server Actions
- Conditional rendering
- Search functionality
- Tailwind CSS
- Full-stack TypeScript

---

# Final Result

A modern CRUD dashboard using:

- Next.js
- Prisma
- SQLite
- TypeScript
- Tailwind CSS
