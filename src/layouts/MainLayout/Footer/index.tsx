const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Şirket</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">Hakkımızda</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Kariyer</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Blog</a>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Müşteri Servisleri</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">İletişim</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Geri Dönüşler</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Teslimat</a>
              </li>
              <li>
                <a href="#" className="hover:underline">SSS</a>
              </li>
            </ul>
          </div>
          
          {/* Account */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hesap</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">Giriş Yap</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Kayıt Ol</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Sipariş Durumu</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Siparişinizi Takip Edin</a>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bizi Takip Edin</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">
                <span className="sr-only">Facebook</span>
                {/* Add social media icons here */}
                Facebook
              </a>
              <a href="#" className="hover:underline">
                <span className="sr-only">Instagram</span>
                Instagram
              </a>
              <a href="#" className="hover:underline">
                <span className="sr-only">Twitter</span>
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-indigo-500 pt-6 text-center">
          <p>&copy; 2024 Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
