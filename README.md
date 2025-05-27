# Personal E-commerce Site – Medusa + Next.js + Admin

This project is a full-stack e-commerce site built with [Medusa](https://medusajs.com/) for the backend, a [Next.js](https://nextjs.org/) storefront, and Medusa Admin for internal store management. 

Backend: Medusa (Node.js, Express, PostgreSQL)
Frontend: Next.js
Admin Panel: Medusa Admin (React)
Styling: Tailwind CSS (on the frontend)
Auth: Session & JWT (built-in with Medusa)



## 🧱 Project Structure

my-medusa-store/
├── admin # Medusa Admin panel (React app)
├── backend # Medusa backend server (Node.js / Express)
└── storefront # Next.js storefront

---

## 🚀 Getting Started

> Make sure you have **Node.js (>=18.x)**, **Yarn**, and **PostgreSQL** installed.

### 1. Clone the Repo

```bash
git clone git@github.com-personal:yourusername/my-medusa-store.git
cd my-medusa-store
```

### 2. Install Dependencies
cd backend
npm install

cd ../admin
npm install

cd ../storefront
npm install

### 3. Start the Backend (Medusa Server)
cd backend
npm run dev 

### 4. Start the Storefront (Next.js)
cd backend
npm run dev 

### 5. Environment Variables

<!-- backend/.env -->
DATABASE_URL=postgres://localhost/medusa-store
JWT_SECRET=your_jwt_secret
COOKIE_SECRET=your_cookie_secret

<!-- storefront/.env.local -->
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000


### 6. Useful commands
# Create a new admin user
npx medusa user -e admin@example.com -p yourpassword

# Run Medusa migrations
yarn medusa migrations run

# Seed the database
yarn medusa seed


