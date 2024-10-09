import React, { ReactNode } from 'react';
import Header from '@/layouts/Layout/Header'; // Kendi Header componentinizi içe aktarın
import Footer from '@/layouts/Layout/Footer'; // Kendi Footer componentinizi içe aktarın

interface LayoutProps {
  children: ReactNode; // children yapısı ile gelen verileri temsil eder
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Ana içerik */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
