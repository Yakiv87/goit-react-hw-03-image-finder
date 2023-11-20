import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import loaders from 'react-loader-spinner';
import css from './Loader.module.css';

const LoaderSpinner = () => {
  return (
    <div className={css.container}>
      <loaders.Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default LoaderSpinner;
