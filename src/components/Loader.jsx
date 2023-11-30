import React from 'react';
import { MoonLoader   } from 'react-spinners';

export const Loader = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <MoonLoader   color="#000000" />
    </div>
  );
};

export default Loader;