import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from '@/components/Layout/AppLayout';
import HomePage from '@/pages/HomePage';
import DockPage from '@/pages/DockPage';
import LockPage from '@/pages/LockPage';
import GranaryPage from '@/pages/GranaryPage';
import FamilyPage from '@/pages/FamilyPage';
import RoutesPage from '@/pages/RoutesPage';
import { useConfigStore } from '@/hooks/useConfigStore';

export default function App() {
  const loadConfig = useConfigStore((s) => s.loadConfig);

  useEffect(() => {
    loadConfig();
  }, [loadConfig]);

  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dock" element={<DockPage />} />
          <Route path="/lock" element={<LockPage />} />
          <Route path="/granary" element={<GranaryPage />} />
          <Route path="/family" element={<FamilyPage />} />
          <Route path="/routes" element={<RoutesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}
