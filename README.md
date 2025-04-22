<p align="center">
<img src="https://online-project-images.s3.us-east-2.amazonaws.com/jobspot/JobSpot.svg"  height="55%" width="55%" alt="JobSpot Logo"/>
</p>

<div align="center" id="toc">
<ul style="list-style: none">
<summary>
 <h1>JopSpot</h1>
</summary>
</ul>
</div>

<br>

This job matching platform, built with React and Next.js using VITE, integrates Clerk for authentication, React Query for efficient data fetching, and features Shadcn-ui for clean UI, Supabase for backend services, Render for deployment, plus pagination and toast notifications for an enhanced, user-friendly experience.

## 🚀 Technologies Used 🚀

- **React**: Builds interactive, component-based user interfaces.
- **Next.js**: Framework for server-side rendered React applications.
- **VITE**: Fast, modern development and build tool.
- **React Query**: Fetches, caches, and updates remote data.
- **Clerk**: User authentication and authorization.
- **Shadcn-ui**: Prebuilt, customizable UI components for React.
- **Supabase**: Backend-as-a-service for database and authentication.
- **Render**: Hosts and deploys web applications easily.

## 📑 Key Features 📑

- **Pagination**: Navigate job listings across multiple pages.
- **Toast Notifications**: Display real-time feedback to users.
- **Stat Cards**: Summarize key job or user data visually.
- **Authentication**: Secure login and account management via Clerk.

## 🔧 Installation & Setup 🔧

1. **Clone the repository**:
```bash
git clone https://github.com/Isaiahpeoples/JobSpot.git
cd projectName
```

2. **Install dependencies**:
```bash
npm install
npx shadcn@latest init
npx shadcn@latest add button
npx shadcn@latest add dropdown-menu
npx shadcn@latest add form input
npx shadcn@latest add select
npx shadcn@latest add toast
npx shadcn@latest add badge separator card
npx shadcn@latest add skeleton
npx prisma init
npx prisma db push

```

3. **Environment variables: Configure the .env file with the following keys**:
```bash
NODE_ENV=development
PORT=5100
MONGO_URL=

SUPABASE_PROJECT=
DB_PASSWORD=

DATABASE_URL=""
DIRECT_URL=""

ADMIN_USER_ID=

SUPABASE_URL=

SUPABASE_KEY=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

4. **Start the development server**:
```bash
npm run dev
```

## 📂 Project Structure 📂

- **/app: Main application directory with API routes and pages**

- **/components: UI components and forms**

- **/utils: Utility functions for formatting, database, and API helpers**

- **/prisma: Prisma schema and migrations**

- **/assets: Static assets and images**

### ⭐️ Support ⭐️
If you found this project helpful or interesting, please give it a ⭐️! Your support helps to grow the project and boosts visibility. Thank you!
