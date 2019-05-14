const usePreventLeave = () => {
  const listener = event => {
    event.preventDefault();
    event.returnValue = '';
  };
  const toggleEvent = method => () => window[method]('beforeunload', listener);
  const enablePrevent = toggleEvent('addEventListener');
  const disablePrevent = toggleEvent('removeEventListener');

  return { enablePrevent, disablePrevent };
};

export default usePreventLeave;
