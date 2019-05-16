import { useEffect } from 'react';
import {
  isFunction,
  addEventListener,
  removeEventListener,
} from '../utils';

const useBeforeLeave = onBefore => {
  const handle = event => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  const toggleEvent = f => f(document, 'mouseleave', handle);

  useEffect(() => {
    if (isFunction(onBefore))  {
      toggleEvent(addEventListener);
      return () => toggleEvent(removeEventListener);
    }
  });
};

export default useBeforeLeave;
