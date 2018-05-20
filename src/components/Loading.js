import React from 'react';

export const styles = {
  container: {
    display       : 'flex',
    alignItems    : 'center',
    justifyContent: 'center',
  },
};

export const Loading = () => (
  <div style={styles.container}>
    <img style={styles.image} alt='loading' src='images/loader.gif' />
  </div>
);

export default Loading;
