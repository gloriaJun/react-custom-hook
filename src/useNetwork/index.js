import { useState, useEffect } from 'react';
import {
  isFunction,
  addEventListener,
  removeEventListener,
} from '../utils';

const eventList = ['online', 'offline'];
const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (isFunction(onChange)) {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  const toggleEvent = (f, name) => f(window, name, handleChange);

  useEffect(() => {
    eventList.map(name => toggleEvent(addEventListener, name));

    return () => {
      eventList.map(name => toggleEvent(removeEventListener, name));
    }
  });

  return status;
};

export default useNetwork;
