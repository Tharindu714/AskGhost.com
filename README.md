# Ghost Bot 🎃👻🍬🦇💀🧡

A demonic chatbot built with Next.js (App Router), Vercel for hosting, and Firebase for data storage. Step into the Cursed Realm and let the Ghost guide you.

---

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Project Structure](#project-structure)
4. [Local Setup](#local-setup)
5. [Firebase Configuration](#firebase-configuration)
6. [Vercel Deployment](#vercel-deployment)
7. [Scripts](#scripts)
8. [Customize Your Horror](#customize-your-horror)
9. [License](#license)

---

## Features

* **Next.js App Router** with Server and Client Components
* **Inline CSS** for a cursed, demonic UI
* **Firebase Firestore** (or Realtime Database) integration
* **Vercel** hosting with zero-cost serverless functions
* **Dynamic lore** display via modal or scroll

---

## Prerequisites

* Node.js v18+ and npm
* Git
* A Firebase project (for Firestore)
* A Vercel account (free tier)

---

## Project Structure

```
ghost-bot/                # Root folder
├─ app/                   # Next.js App Router pages
│  ├─ layout.tsx          # Root layout (global styles)
│  └─ page.tsx            # Cursed welcome & lore
├─ public/                # Static assets (if any)
├─ styles/                # (Optional) global CSS
├─ firebase.ts            # Firebase SDK init
├─ package.json           # Project manifest
├─ tsconfig.json          # TypeScript config
└─ README.md              # This documentation
```

---

## Local Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Tharindu714/AskGhost.com.git
   cd AskGhost.com
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Setup Firebase SDK key**

   * Verify `firebase.ts` contains your Firebase config.

4. **Run development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view.

---

## Firebase Configuration

1. Create a Firebase project at console.firebase.google.com
2. Enable **Firestore** or **Realtime Database**
3. Copy your config object into `firebase.ts`
4. Secure your database rules for production

---

## Vercel Deployment

1. Push your code to GitHub.
2. In Vercel dashboard, **Import Project** → select your repo.
3. Framework Preset: **Next.js**
4. Build Command: `npm run build`
5. Output Directory: (leave blank)
6. Deploy and note your `https://<your-project>.vercel.app`

---

## Scripts

* `npm run dev` — Start dev server
* `npm run build` — Create production build
* `npm start` — Start production server (Next.js)

---

## Customize Your Horror

* **Change Lore**: Edit `app/page.tsx` and update the `lore` string.
* **UI Theme**: Modify inline styles or add Tailwind
* **Database**: Add Firestore reads/writes in components
* **Voice**: Integrate Web Speech API for TTS/STT

---

## License

MIT © Tharindu714
