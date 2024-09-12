import { FC } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  // TableHead,
  TableRow,
  Box,
  Paper,
  Checkbox,
} from '@mui/material';

const Talbe: FC = () => {
  const handleSelect = () => {};
  return (
    <>
      <Box sx={{ width: '100%', mt: 10 }}>
        <Paper>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow hover sx={{ cursor: 'pointer' }}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>Строка 1, ячейка 1</TableCell>
                  <TableCell>Строка 1, ячейка 2</TableCell>
                  <TableCell>Строка 1, ячейка 3</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </>
  );
};

export default Talbe;
