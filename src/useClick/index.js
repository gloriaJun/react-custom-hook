import { useEffect, useRef } from 'react';
import {
  addEventListener,
  removeEventListener,
} from '../utils';

const useClick = (onClick) => {
  const element = useRef(null);
  const toggleEvent = f => element.current && f(element.current, 'click', onClick);

  useEffect(() => {
    toggleEvent(addEventListener);
    return () => {
      toggleEvent(removeEventListener);
      console.log('unmount')
    }
  });

  return element;
};

export default useClick;
