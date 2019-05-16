import axios from 'axios';
import { useState, useEffect } from 'react';

const useAxios = (options, api = axios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);

  const setApiResult = opt => {
    setState({
      ...state,
      ...opt,
    });
  };

  const reload = () => {
    setApiResult({
      loading: true,
    });
    setTrigger(Date.now());
  }

  useEffect(() => {
    if (!options.url) return;
    api(options)
      .then(data => {
        setApiResult({
          loading: false,
          data,
        });
    }).catch(error => {
      setApiResult({
        loading: false,
        error,
      });
    });
  }, [ trigger ]);

  return { ...state, reload };
};

export default useAxios;
