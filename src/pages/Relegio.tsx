import { useEffect, useState } from 'react';
import '../styles/relogio.css';

export function Relogio() {
  const [ time, setTime ] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const unsubscribe = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    },1000)

    return(() => {
      clearInterval(unsubscribe);
    })
  }, []);

  return(
    <div className="container">
      <div className="horas">
        Hora: {time}
      </div>
    </div>
  )
}