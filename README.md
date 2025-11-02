# petify

![Next.js](https://img.shields.io/badge/-Next.js-blue?logo=nextjs&logoColor=white) ![React](https://img.shields.io/badge/-React-blue?logo=react&logoColor=white)

## 📝 Description

Petify is a web application built with Next.js and React, designed to connect pet owners with services and resources for their beloved companions. Whether you need to find a local veterinarian, discover pet-friendly parks, or connect with other pet owners in your area, Petify provides a central hub for all things pet-related.

## ✨ Features

- 🕸️ Web


## 🛠️ Tech Stack

- next.js Next.js
- ⚛️ React


## 📦 Key Dependencies

```
@clerk/nextjs: ^6.13.0
@emailjs/browser: ^4.4.1
@radix-ui/react-label: ^2.1.2
@vercel/analytics: ^1.5.0
clsx: ^2.1.1
framer-motion: ^12.6.2
mini-svg-data-uri: ^1.4.4
motion: ^12.6.2
next: ^15.2.4
react: ^19.0.0
react-dom: ^19.0.0
react-hot-toast: ^2.5.2
tailwind-merge: ^3.0.2
```

## 🚀 Run Commands

- **dev**: `npm run dev`
- **build**: `npm run build`
- **start**: `npm run start`
- **lint**: `npm run lint`


## 📁 Project Structure

```
.
├── app
│   ├── adopt
│   │   └── page.jsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── home
│   │   ├── [cardId]
│   │   │   └── page.jsx
│   │   └── page.jsx
│   ├── layout.js
│   ├── login
│   │   ├── new.js
│   │   └── page.jsx
│   ├── page.js
│   ├── signup
│   │   └── page.jsx
│   └── verify-email
│       ├── code
│       │   └── page.jsx
│       └── page.jsx
├── components
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── cta.jsx
│   └── ui
│       ├── AdoptionForm.jsx
│       ├── Button.jsx
│       ├── Button2.jsx
│       ├── FeaturingPets.jsx
│       ├── GlowingEffect.jsx
│       ├── Highlight.jsx
│       ├── HomeMagicCard.jsx
│       ├── Input.js
│       ├── Label.js
│       ├── Loading.jsx
│       ├── Petcard.jsx
│       ├── TestimotinalCard.jsx
│       ├── background.jsx
│       ├── magicCard.jsx
│       └── mouseEffect.jsx
├── eslint.config.mjs
├── jsconfig.json
├── lib
│   └── utils.js
├── middleware.js
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── public
│   ├── assets
│   │   └── image
│   │       ├── form2.png
│   │       ├── form3.jpeg
│   │       ├── form3.png
│   │       ├── form4.png
│   │       ├── home.jpeg
│   │       ├── home2.jpg
│   │       ├── home2Removed.png
│   │       ├── home3.jpg
│   │       ├── signupImage.jpeg
│   │       └── verifyCode.png
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
└── tailwind.config.mjs
```

## 🛠️ Development Setup

### Node.js/JavaScript Setup
1. Install Node.js (v18+ recommended)
2. Install dependencies: `npm install` or `yarn install`
3. Start development server: (Check scripts in `package.json`, e.g., `npm run dev`)


## 👥 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/SAHILAHMAD9/petify.git`
3. **Create** a new branch: `git checkout -b feature/your-feature`
4. **Commit** your changes: `git commit -am 'Add some feature'`
5. **Push** to your branch: `git push origin feature/your-feature`
6. **Open** a pull request

Please ensure your code follows the project's style guidelines and includes tests where applicable.

---
