import { getImagePath } from './pathUtils';

export const setImagePathVariables = () => {
  const root = document.documentElement;
  root.style.setProperty('--result-bb-image', `url('${getImagePath('/images/result_bb.gif')}')`);
  root.style.setProperty('--result-bb-hover-image', `url('${getImagePath('/images/result_bb_hover.gif')}')`);
}; 