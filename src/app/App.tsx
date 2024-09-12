import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './routes/private-route';

import { Header } from './components/ui/header';
import { AuthPage } from './pages/auth-page';
import { MainPage } from './pages/main-page';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/" element={<PrivateRoute children={<MainPage />} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
