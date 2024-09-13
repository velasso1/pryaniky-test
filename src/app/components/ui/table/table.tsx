import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store';
import { Loader } from '../loader';
import { ITableData } from '../../../types/data-slice-types';

import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  Button,
  TableRow,
  Box,
  Paper,
  Checkbox,
  Modal,
} from '@mui/material';

const Talbe: FC = () => {
  // const handleSelect = () => {};

  const [openModal, setOpenModal] = useState<boolean>(false);
  const { tableItems } = useAppSelector((state) => state.tableData);
  const { loading } = useAppSelector((state) => state.authData);

  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      ></Modal>
      <Box sx={{ width: '100%', mt: 10 }}>
        <Paper sx={{ position: 'relative' }}>
          {loading && <Loader />}
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>Sig. Date</TableCell>
                  <TableCell>Sig. Name</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Emp. Number</TableCell>
                  <TableCell>Emp. Date</TableCell>
                  <TableCell>Emp. Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {!loading && tableItems ? (
                  tableItems.map((item) => {
                    const newSigDate = new Date(
                      item.companySigDate
                    ).toLocaleDateString();
                    const newEmpSigDate = new Date(
                      item.employeeSigDate
                    ).toLocaleDateString();
                    return (
                      <TableRow key={item.id} hover sx={{ cursor: 'pointer' }}>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell>{newSigDate}</TableCell>
                        <TableCell>{item.companySignatureName}</TableCell>
                        <TableCell>{item.documentName}</TableCell>
                        <TableCell>{item.documentStatus}</TableCell>
                        <TableCell>{item.documentType}</TableCell>
                        <TableCell>{item.employeeNumber}</TableCell>
                        <TableCell>{newEmpSigDate}</TableCell>
                        <TableCell>{item.employeeSignatureName}</TableCell>
                      </TableRow>
                    );
                  })
                ) : (
                  <TableRow>
                    <TableCell>Данные отсутствуют</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <Button variant="contained" sx={{ marginTop: '10px' }}>
          Новая запись
        </Button>
      </Box>
    </>
  );
};

export default Talbe;
