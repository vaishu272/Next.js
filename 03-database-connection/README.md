# 🏥 Next.js Database Connection

A modern full-stack application built with **Next.js App Router**, **TypeScript**, **MySQL**, and **MongoDB** featuring Contact Management, Inline CRUD Operations, Server Actions, Dynamic Routing, and Responsive UI.

---

# 🚀 Features

- ✅ MySQL Database Connection
- ✅ MongoDB Database Connection
- ✅ Contact Form with Server Actions
- ✅ Inline Edit & Delete
- ✅ useActionState
- ✅ useFormStatus
- ✅ Dynamic Routing
- ✅ Custom 404 Page
- ✅ Responsive Tailwind UI
- ✅ TypeScript Support

---

# 🛠️ Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- MySQL
- MongoDB
- Mongoose
- mysql2
- Lucide React

---

# 📁 Project Structure

```bash
app/
│
├── contact/
│   ├── page.tsx
│   ├── contact.action.ts
│   └── contact-details/
│       ├── page.tsx
│       └── ContactTable.tsx
│
├── doctors/
│   └── [id]/
│       └── page.tsx
│
├── not-found.tsx
│
config/
│   ├── mongodb.ts
│   └── sqldb.ts
│
models/
│
public/
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone <your-repository-url>
```

---

## Install Dependencies

```bash
npm install
```

---

# 📦 Required Packages

```bash
npm install mysql2 mongoose lucide-react react-hot-toast
```

---

# 🗄️ MySQL Setup

## Create Database

```sql
CREATE DATABASE hospital_db;
```

---

## Use Database

```sql
USE hospital_db;
```

---

## Create Contacts Table

```sql
CREATE TABLE contacts (
    contact_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(20),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Create Doctors Table

```sql
CREATE TABLE doctors (
    doctor_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    gender ENUM('Male', 'Female', 'Other'),
    specialization VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(15),
    address TEXT,
    city VARCHAR(50),
    state VARCHAR(50),
    postal_code VARCHAR(10),
    date_of_birth DATE,
    experience_years INT,
    license_number VARCHAR(50) UNIQUE,
    joining_date DATE,
    is_active BOOLEAN DEFAULT TRUE
);
```

---

# 🍃 MongoDB Setup

## Create `.env.local`

```env
MONGODB_URI=mongodb://127.0.0.1:27017/pagination-demo
```

---

# ▶️ Run Project

```bash
npm run dev
```

---

# 🌐 Routes

| Route                      | Description     |
| -------------------------- | --------------- |
| `/`                        | Home Page       |
| `/contact`                 | Contact Form    |
| `/contact/contact-details` | Contact Table   |
| `/doctors/[id]`            | Doctor Details  |
| `/unknown-route`           | Custom 404 Page |

---

# 🎨 UI Features

- Responsive Design
- Gradient UI
- Glassmorphism
- Dark Theme
- Inline Editing Table
- Loading Animations
- Custom 404 Page

---

# 👨‍💻 Author

Built with ❤️ using:

- Next.js
- TypeScript
- MySQL
- MongoDB
- Tailwind CSS

---

# 📄 License

This project is licensed under the MIT License.
