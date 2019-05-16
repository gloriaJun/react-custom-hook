import {
  isFunction,
} from '../utils';

const useConfirm = (message = '', onConfirm, onCancel) => {
  if ( !isFunction(onConfirm) || (onCancel && typeof onCancel !== 'function') ){
    return;
  }
  const confirmAction = () => window.confirm(message) ? onConfirm() : onCancel();

  return confirmAction;
};

export default useConfirm;
