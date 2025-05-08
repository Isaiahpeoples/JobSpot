<p align="center">
  <img src="https://online-project-images.s3.us-east-2.amazonaws.com/jobspot/JobSpot.svg" height="55%" width="55%" alt="JobSpot Logo"/>
</p>

<div align="center" id="toc">
  <ul style="list-style: none">
	<summary>
  	<h1>💼 JobSpot 💼</h1>
	</summary>
  </ul>
</div>

<div align="center">

[![Version](https://img.shields.io/badge/version-3.0.0-chocolate.svg)](https://github.com/Isaiahpeoples/JobSpot)
[![Built With](https://img.shields.io/badge/Built_with-Next.js_&_Vite-chocolate)](https://nextjs.org/)
[![UI](https://img.shields.io/badge/UI-Shadcn--ui-chocolate)](https://ui.shadcn.com/)
[![Auth](https://img.shields.io/badge/Auth-Clerk-chocolate)](https://clerk.dev/)
[![Data](https://img.shields.io/badge/Data-React_Query-chocolate)](https://tanstack.com/query)
[![Backend](https://img.shields.io/badge/Backend-Supabase-chocolate)](https://supabase.com/)

[![Hosting](https://img.shields.io/badge/Deployed_on-Render-brightgreen)](https://render.com/)
[![Live](https://img.shields.io/badge/Live-Demo-brightgreen)](https://job-spot-gamma.vercel.app/)

</div>
<br/>

## 🔍 Project Overview

**JobSpot** is a sleek, responsive job matching platform that connects users with opportunities in real-time. Built with **React**, **Next.js**, and **VITE**, and backed by **Supabase** and **Clerk**, it supports secure authentication, smooth navigation, clean UI with **Shadcn-ui**, and optimized data handling via **React Query**.

From dynamic pagination to real-time toast notifications, JobSpot is designed for both performance and user experience.

<br/>

## 🚀 Technologies Used

| Technology     	| Description                                                          	|
|--------------------|--------------------------------------------------------------------------|
| **React**      	| ⚛️ Builds dynamic, component-based UIs.                             	|
| **Next.js**    	| 🚀 React framework for SSR and routing.                              	|
| **VITE**       	| ⚡ High-speed build tool for frontend apps.                          	|
| **Clerk**      	| 🔐 Auth provider for secure login & user management.                 	|
| **React Query**	| 🔄 Handles fetching and caching of async data.                       	|
| **Shadcn-ui**  	| 🧩 Prebuilt, accessible UI components styled with Tailwind.          	|
| **Supabase**   	| 🛠️ Backend-as-a-service for DB and auth APIs.                       	|
| **Render**     	| ☁️ Simple deployment for full-stack apps.                           	|

<br/>

## 📸 Project Screenshot

![JobSpot Website Preview](https://online-project-images.s3.us-east-2.amazonaws.com/jobspot/JobSpot-1.png)

*A clean and functional job browsing interface with stat cards and filtering.*

<br/>

## 📑 Key Features

- 📄 **Pagination** — Browse job listings across multiple pages.  
- 🔔 **Toast Notifications** — Real-time feedback and alerts.  
- 📊 **Stat Cards** — Visual job or user data summaries.  
- 🔐 **Clerk Authentication** — Secure user login and management.  

<br/>

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

<br/>

## 📂 Project Structure 📂

- **/app: Application logic, pages, and route handlers**

- **/components: UI components and layout modules**

- **/utils: Utility functions for formatting, database, and API helpers**

- **/prisma: Prisma schemas and DB migrations**

- **/assets: Static assets and images**

<br/>

## 🌐 Live Demo

Check out the live version:  
👉 [JobSpot Live Demo](https://job-spot-gamma.vercel.app/)

<br/>

### ⭐️ Support ⭐️
If you found this project useful or inspiring, please consider giving it a ⭐️ Star!
Your encouragement helps others discover the work and motivates future enhancements. **Thanks for checking out JobSpot!** 👔
