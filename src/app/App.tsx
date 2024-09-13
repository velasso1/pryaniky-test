import { FC, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useAppSelector } from './store';
import PrivateRoute from './routes/private-route';
import { useAppDispatch } from './store';
import { checkAuth } from './store/slices/auth-slice';

import { Header } from './components/ui/header';
import { AuthPage } from './pages/auth-page';
import { MainPage } from './pages/main-page';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { authorized } = useAppSelector((state) => state.authData);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch, navigate]);

  useEffect(() => {
    navigate(`${authorized ? '/' : '/login'}`);
  }, [authorized, navigate]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/" element={<PrivateRoute children={<MainPage />} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
