import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface AppLayoutProps {
  children: ReactNode;
  hideHeader?: boolean;
}

function AppLayout({ children, hideHeader = false }: AppLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      {!hideHeader && <Header />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default AppLayout;
