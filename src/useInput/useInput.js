import { useState } from 'react';

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: { value }
    } = event;

    if ( typeof validator !== 'function' ||
      (typeof validator === 'function' && validator(value)) ) {
      setValue(value);
    }
  };
  return { value, onChange };
};
