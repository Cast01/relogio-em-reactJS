import '../styles/relogio.css';

import { useEffect, useState } from 'react';

export function Relogio() {
  const [ tick, setTick ] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTick(new Date().toLocaleTimeString());
    },1000);
  }, []);

  return(
    <div className='container'>
      Hora: {tick}
    </div>
  );
}