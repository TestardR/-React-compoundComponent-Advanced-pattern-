import React, { useState } from 'react';
import {
  MediumClap,
  ClapIcon,
  ClapCount,
  CountTotal,
} from './components/MediumClap';

import styles from './components/medium-clap.css';

function App() {
  const [count, setCount] = useState(0);
  const handleClap = (clapState) => {
    setCount(clapState.count);
  };

  return (
    <div style={{ width: '100%' }}>
      <MediumClap onClap={handleClap}>
        <ClapIcon />
        <ClapCount />
        <CountTotal />
      </MediumClap>
      {!!count && (
        <div className={styles.info}>{`You have clapped ${count} times`}</div>
      )}
    </div>
  );
}

export default App;
