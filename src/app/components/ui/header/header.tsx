import { FC, useEffect } from 'react';

import { useAuth } from '../../../hooks/useAuth';
import { checkAuth } from '../../../store/slices/auth-slice';
import { useAppDispatch } from '../../../store';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const userIsAuth = useAuth();

  useEffect(() => {
    const token = localStorage.getItem('secretToken');
    if (token) {
      dispatch(checkAuth(token));
    }
  }, [dispatch]);

  const logOut = (): void => {
    localStorage.removeItem('secretToken');
  };

  return (
    <div className="header">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Тестовое задание
          </Typography>
          {userIsAuth && (
            <Button color="inherit" onClick={() => logOut()}>
              Выйти
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
