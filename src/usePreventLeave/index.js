import {
  addEventListener,
  removeEventListener,
} from '../utils';

const usePreventLeave = () => {
  const listener = event => {
    event.preventDefault();
    event.returnValue = '';
  };
  const toggleEvent = f => f(window, 'beforeunload', listener);
  const enablePrevent = toggleEvent(addEventListener);
  const disablePrevent = toggleEvent(removeEventListener);

  return { enablePrevent, disablePrevent };
};

export default usePreventLeave;
