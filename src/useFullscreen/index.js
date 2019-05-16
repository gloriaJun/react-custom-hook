import { useRef } from 'react';
import {
  isFunction,
} from '../utils';

const useFullscreen = cb => {
  const element = useRef(null);
  const triggerFull = () => {
    if (element.current) {
      const {current: el} = element;

      if (el.requestFullScreen) {
        el.requestFullScreen();
      } else if (el.mozRequestFullScreen) {
        el.mozRequestFullScreen();
      } else if (el.webkitRequestFullScreen) {
        el.webkitRequestFullScreen();
      } else if (el.msRequestFullscreen) {
        el.msRequestFullscreen();
      }

      isFunction(cb) && cb(true);
    }
  }
  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    isFunction(cb) && cb(false);
  };

  return { element, triggerFull, exitFull };
};

export default useFullscreen;
