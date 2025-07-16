# 🛒 Amazon Clone

![Amazon Clone Banner](https://user-images.githubusercontent.com/placeholder/banner-amazon-clone.png)

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react" />
  <img src="https://img.shields.io/badge/Vite-6.3.5-646CFF?logo=vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4.14-38BDF8?logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Firebase-11.0.2-FFCA28?logo=firebase" />
  <img src="https://img.shields.io/badge/Redux%20Toolkit-2.3.0-764ABC?logo=redux" />
  <img src="https://img.shields.io/badge/Deployed-Demo-green?logo=vercel" />
</p>

> **A beautiful, interactive, and full-featured Amazon e-commerce clone built with React, Vite, Tailwind CSS, Redux Toolkit, and Firebase.**

---

## 🚀 Live Demo - (https://amazon-clone-eight-coral.vercel.app/)
<img width="1898" height="983" alt="image" src="https://github.com/user-attachments/assets/00ddcb4f-3b0e-4583-98ec-7b549a1f7b2d" />


---

## ✨ Features

- 🏠 **Modern Home Page**: Carousel, trending products, vertical and horizontal product strips, and category cards.
- 🔍 **Powerful Search**: Real-time product search with filters and sorting.
- 🛒 **Shopping Cart**: Add, remove, and update products. Cart persists in local storage.
- 🛍️ **Product Pages**: Detailed product info, reviews, and quick add-to-cart.
- 👤 **Authentication**: Email/password & Google sign-in/up (via Firebase Auth).
- 🧑‍💼 **Account Management**: View orders, addresses, and more.
- 📱 **Responsive Design**: Looks great on desktop, tablet, and mobile.
- 🧭 **Sidebar & Category Filters**: Easy navigation and product discovery.
- ⚡ **Fast & Optimized**: Built with Vite and Tailwind CSS for instant reloads and smooth UX.

---

## 🗂️ Folder Structure

```
amazon-clone/
├── public/                # Static assets (favicon, etc.)
├── src/
│   ├── assets/            # Images, SVGs, carousel images
│   ├── components/        # UI components (Header, Footer, ProductCard, etc.)
│   ├── features/          # Redux slices (cart, theme)
│   ├── firebase/          # Firebase config & auth logic
│   ├── global/            # Reusable functions
│   ├── pages/             # Main pages (Home, Cart, Product, Search, Account, etc.)
│   ├── store/             # Redux store setup
│   ├── productData.js     # Large product dataset
│   ├── sampleData.js      # Sample homepage card data
│   ├── index.css          # Tailwind & custom styles
│   ├── App.jsx, main.jsx  # App entry points
│   └── layout.jsx         # App layout (header/sidebar/wrapper)
├── package.json           # Project metadata & scripts
├── tailwind.config.js     # Tailwind config
├── vite.config.js         # Vite config
└── README.md              # This file
```

---

## 🛠️ Tech Stack

- ![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react) React 18
- ![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?logo=vite) Vite
- ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.14-38BDF8?logo=tailwindcss) Tailwind CSS
- ![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.3.0-764ABC?logo=redux) Redux Toolkit
- ![Firebase](https://img.shields.io/badge/Firebase-11.0.2-FFCA28?logo=firebase) Firebase Auth

---

## ⚙️ Getting Started

### 1. **Clone the repo**
```bash
git clone https://github.com/your-username/amazon-clone.git
cd amazon-clone
```

### 2. **Install dependencies**
```bash
npm install
```

### 3. **Run the app locally**
```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173)

### 4. **Build for production**
```bash
npm run build
```

### 5. **Lint the code**
```bash
npm run lint
```

---

## 🔑 Firebase Setup

This project uses Firebase for authentication. The current config is public for demo purposes. For production, [create your own Firebase project](https://console.firebase.google.com/) and update `src/firebase/utils.js`:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

---

## 🧩 Notable Components

- **Header & Sidebar**: Navigation, search, cart, account, and location.
- **Carousel**: Interactive, auto-advancing hero images.
- **CategoryFilters**: Quick access to product categories.
- **ProductCard & SearchedProduct**: Add to cart, view details, ratings, and price.
- **Cart**: Persistent, interactive cart with subtotal, free delivery progress, and suggestions.
- **SignIn/SignUp**: Email/password & Google authentication.

---

## 🤝 Contributing

1. Fork this repo
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

All contributions, issues, and feature requests are welcome!

---

## 🙏 Credits

- UI inspired by [Amazon.in](https://www.amazon.in/)
- Built by [Garima](https://github.com/your-profile)
- Product data: [Amazon public listings]
- Icons: [Feather Icons](https://feathericons.com/), [Heroicons](https://heroicons.com/)

---

## 📄 License

This project is for educational/demo purposes only. Not for commercial use.

---

<p align="center">
  <b>Amazon Clone &copy; 2024</b> | Built with ❤️ by Garima
</p>
