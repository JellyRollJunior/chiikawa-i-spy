import { useEffect, useState } from 'react';
import styles from './Stopwatch.module.css';

const Stopwatch = ({ startTime }) => {
  const [stopwatch, setStopwatch] = useState({
    minutes: 0,
    seconds: 0,
    centiseconds: 0,
  });

  useEffect(() => {
    setInterval(() => {
      if (startTime) {
        const start = new Date(startTime);
        const duration = new Date() - start;

        let minutes = Math.floor(duration / 60000);
        let seconds = Math.floor(duration / 1000) % 60;
        let centiseconds = Math.floor(duration / 10) % 100;

        if (minutes < 10) minutes = `0${minutes}`;
        if (seconds < 10) seconds = `0${seconds}`;
        if (centiseconds < 10) centiseconds = `0${centiseconds}`;
        setStopwatch({ minutes, seconds, centiseconds });
      }
    }, 10);
  }, [startTime]);

  return (
    <div>
      {stopwatch.minutes}:{stopwatch.seconds}:{stopwatch.centiseconds}
    </div>
  );
};

export { Stopwatch };
