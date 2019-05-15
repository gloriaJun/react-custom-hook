import { useEffect } from 'react';

const useBeforeLeave = onBefore => {
  const isFunction = onBefore && typeof onBefore === 'function';
  const handle = event => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  const toggleEvent = method => document[method]('mouseleave', handle);

  useEffect(() => {
    if (isFunction)  {
      toggleEvent('addEventListener');
      return () => toggleEvent('removeEventListener');
    }
  });
};

export default useBeforeLeave;
