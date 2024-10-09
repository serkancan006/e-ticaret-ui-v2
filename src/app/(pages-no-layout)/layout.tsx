import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode; // children yapısı ile gelen verileri temsil eder
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <header>
        <p>No Layout Header</p>
      </header>

      {/* Ana içerik */}
      <main>{children}</main>

      {/* Footer */}
      <footer>
        <p>No Layout Footer</p>
      </footer>
    </div>
  );
};

export default Layout;
