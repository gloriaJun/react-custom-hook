import { useEffect, useRef } from 'react';

const useClick = (onClick) => {
  const element = useRef(null);
  const toggleEvent = method => element.current && element.current[method]('click', onClick);

  useEffect(() => {
    toggleEvent('addEventListener');
    return () => {
      toggleEvent('removeEventListener');
      console.log('unmount')
    }
  });

  return element;
};

export default useClick;
