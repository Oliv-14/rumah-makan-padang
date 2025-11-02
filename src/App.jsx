import { Routes, Route } from 'react-router-dom';

// 1. Impor semua komponen layout dan halaman yang sudah Anda buat
import Header from './component/Header.jsx';
import Footer from './component/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

// Hapus import default dari Vite jika masih ada
// import './App.css'; 

function App() {
  return (
    // 2. Ini adalah pembungkus utama aplikasi
    <div>
      {/* Header akan selalu tampil di atas untuk semua halaman */}
      <Header />

      {/* Tag <main> untuk konten utama yang akan berubah-ubah */}
      <main>
        {/* <Routes> adalah area di mana React Router akan menukar halaman */}
        <Routes>
          {/* 3. Definisikan setiap rute/halaman yang Anda miliki */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Footer akan selalu tampil di bawah untuk semua halaman */}
      <Footer />
    </div>
  );
}

export default App;