import React from "react";
import ReactDOM from "react-dom/client";
// 1. Impor BrowserRouter untuk mengaktifkan routing
import { BrowserRouter, HashRouter } from "react-router-dom";

import App from "./App.jsx";

// 2. Impor CSS Bootstrap agar tersedia di seluruh aplikasi
import "bootstrap/dist/css/bootstrap.min.css";

// Hapus CSS default Vite jika ada, atau buat file baru jika perlu styling global
// import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 3. Bungkus komponen <App /> dengan <HashRouter> */}
    {/*    Ini adalah langkah krusial yang membuat semua komponen routing berfungsi. */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
