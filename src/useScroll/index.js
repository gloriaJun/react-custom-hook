import { useState, useEffect } from 'react';
import {
  addEventListener,
  removeEventListener,
} from '../utils';

const useScroll = () => {
  const [status, setStatus] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setStatus({
      x: window.scrollX,
      y: window.scrollY,
    });
  };
  const toggleEvent = f => f(window, 'scroll', onScroll);

  useEffect(() => {
    toggleEvent(addEventListener);
    return () => toggleEvent(removeEventListener);
  });

  return status;
};

export default useScroll;
