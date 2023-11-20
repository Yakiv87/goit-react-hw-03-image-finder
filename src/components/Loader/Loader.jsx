import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import loaders  from 'react-loader-spinner';
import css from "./Loader.module.css";

const LoaderSpinner = () => {
  return (
    <div className={css.container}>
      <loaders.BallTriangle
        color="#3f51b5"  
        height={80}
        width={80}
        timeout={3000} 
      />
    </div>
  );
};

export default LoaderSpinner;