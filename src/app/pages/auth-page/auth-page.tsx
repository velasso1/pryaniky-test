import { FC, useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import { authUser } from '../../store/slices/auth-slice';
import { IBodyRequest } from '../../types/auth-slice-types';
import { useAuth } from '../../hooks/useAuth';

import { Alert } from '@mui/material';
import { Box, Paper, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AuthPage: FC = () => {
  const dispatch = useAppDispatch();
  const userIsAuth = useAuth();
  const navigate = useNavigate();

  const { loading, error } = useAppSelector((state) => state.authData);

  const [fieldEmpty, setFieldEmpty] = useState<boolean>(false);

  const [userData, setUserData] = useState<IBodyRequest>({
    username: '',
    password: '',
  });

  useEffect(() => {
    if (userIsAuth) navigate('/');
  }, [userIsAuth, navigate]);

  const logIn = (body: IBodyRequest) => {
    if (userData.password.length > 0 && userData.username.length > 0) {
      dispatch(authUser(body));
      setFieldEmpty(false);
    } else {
      setFieldEmpty(true);
    }
  };

  return (
    <>
      <Box sx={{ width: '400px', margin: '0 auto', marginTop: '25vh' }}>
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            padding: '30px 40px',
          }}
        >
          <Typography sx={{ marginBottom: '10px', fontSize: '20px' }}>
            Авторизация
          </Typography>
          <TextField
            required
            disabled={loading}
            id="outlined"
            label="Логин"
            value={userData.username}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value.trim() })
            }
            sx={{ marginBottom: '10px' }}
          />
          <TextField
            required
            disabled={loading}
            id="outlined-password-input"
            label="Пароль"
            type="password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value.trim() })
            }
          />
          <Button
            disabled={loading}
            variant="contained"
            onClick={() => {
              logIn(userData);
            }}
            sx={{ marginTop: '10px', height: '40px' }}
          >
            Войти
          </Button>

          {fieldEmpty && (
            <Alert
              severity="error"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '10px',
              }}
            >
              Введите свой логин и пароль
            </Alert>
          )}

          {error && (
            <Alert
              severity="warning"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '10px',
              }}
            >
              Проверьте правильность ввода <br /> логина и пароля
            </Alert>
          )}
        </Paper>
      </Box>
    </>
  );
};

export default AuthPage;
