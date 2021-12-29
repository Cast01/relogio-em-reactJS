import { useEffect, useState } from "react";

import '../styles/relogio.css';

export function Relogio() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const unsubscribe = setInterval(
      () => setTime(new Date()), 1000
    )
    return(() => {
      clearInterval(unsubscribe);
    })
  }, [time])

  return(
    <div className="container">
      <div>Hora: {time.toLocaleTimeString()}</div>
    </div>
  )
}