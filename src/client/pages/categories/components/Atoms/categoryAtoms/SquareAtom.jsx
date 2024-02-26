import { useEffect, useState } from 'react';
import css from './SquareAtom.module.css';

const getRandomPosition = () => {
  const maxWidth = 400;
  const maxHeight = 400;

  const randomX = Math.floor(Math.random() * maxWidth);
  const randomY = Math.floor(Math.random() * maxHeight);

  return { x: randomX, y: randomY };
};

const Square = () => {
  const [position, setPosition] = useState(getRandomPosition());

  useEffect(() => {
    setPosition(getRandomPosition());
  }, []);

  return (
    <div
      className={css.Square}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    />
  );
};

export { Square };
