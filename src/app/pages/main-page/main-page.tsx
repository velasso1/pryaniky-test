import { FC, useEffect } from 'react';

import { useAppDispatch } from '../../store';
import { getAllEntries } from '../../store/slices/table-data-slice';

import Table from '../../components/ui/table/table';

const MainPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllEntries());
  }, [dispatch]);
  return (
    <>
      <div className="main">
        <Table />
      </div>
    </>
  );
};

export default MainPage;
