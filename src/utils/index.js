const controlEvent = method => (el, name, event) => el[method](name, event);

export const addEventListener = controlEvent('addEventListener');
export const removeEventListener = controlEvent('removeEventListener');


/**
 for checking type
 **/
export const isFunction = f => f && typeof f === 'function';