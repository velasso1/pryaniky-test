import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../../store';
import { userLogOut } from '../../../store/slices/auth-slice';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { authorized } = useAppSelector((state) => state.authData);

  return (
    <div className="header">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Тестовое задание
          </Typography>
          {authorized && (
            <Button color="inherit" onClick={() => dispatch(userLogOut())}>
              Выйти
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
