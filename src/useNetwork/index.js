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

  const addEvent = name => addEventListener(window, name, handleChange);
  const removeEvent = name => removeEventListener(window, name, handleChange);

  useEffect(() => {
    eventList.map(name => addEvent(name));

    return () => {
      eventList.map(name => removeEvent(name));
    }
  });

  return status;
};

export default useNetwork;
