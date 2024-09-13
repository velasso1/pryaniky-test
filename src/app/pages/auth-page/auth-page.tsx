import { FC, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import { authUser } from '../../store/slices/auth-slice';
import { IBodyRequest } from '../../types/auth-slice-types';

import {
  Box,
  Paper,
  Button,
  TextField,
  Typography,
  Alert,
} from '@mui/material';
import { Loader } from '../../components/ui/loader';

const AuthPage: FC = () => {
  const dispatch = useAppDispatch();

  const { loading, error } = useAppSelector((state) => state.authData);

  const [fieldEmpty, setFieldEmpty] = useState<boolean>(false);
  const [userData, setUserData] = useState<IBodyRequest>({
    username: '',
    password: '',
  });

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
      <Box
        sx={{
          width: '400px',
          margin: '0 auto',
          marginTop: '25vh',
        }}
      >
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            padding: '30px 40px',
            position: 'relative',
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
          {loading && <Loader />}
        </Paper>
      </Box>
    </>
  );
};

export default AuthPage;
