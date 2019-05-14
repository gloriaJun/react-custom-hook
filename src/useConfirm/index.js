const useConfirm = (message = '', onConfirm, onCancel) => {
  if ( (!onConfirm || typeof onConfirm !== 'function')
  || (onCancel && typeof onCancel !== 'function') ){
    return;
  }

  const confirmAction = () => {
   confirm(message) ? onConfirm() : onCancel();
  };

  return confirmAction;
};

export default useConfirm;
