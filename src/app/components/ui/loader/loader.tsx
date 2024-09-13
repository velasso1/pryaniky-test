import { FC } from 'react';

import { RotatingLines } from 'react-loader-spinner';

const Loader: FC = () => {
  return (
    <div className="loader">
      <RotatingLines
        visible={true}
        strokeColor="grey"
        width="96"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader;
