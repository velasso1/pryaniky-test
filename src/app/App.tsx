import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './routes/private-route';

import { Footer } from './components/ui/footer';
import { Header } from './components/ui/header';
import { AuthPage } from './pages/auth-page';
import { MainPage } from './pages/main-page';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route
          path="/main"
          element={<PrivateRoute children={<MainPage />} fakeAuth={true} />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
