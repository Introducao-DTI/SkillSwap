import { useEffect, useState } from "react";

type Props = {
  value: number;
  duration: number;
}

export const AnimatedNumber = ({ value, duration = 700 } : Props) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCurrent(value);
        clearInterval(timer);
      } else {
        setCurrent(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{current}</span>;
};