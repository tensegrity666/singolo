import { arrows } from './Slider.mjs';
import { tabs } from './Tabs.mjs';
import { portfolio } from './Portfolio.mjs';
import { modalShow } from './Modal.mjs';
import { screen } from './Screen.mjs';

window.onload = () => {
  arrows();
  tabs();
  portfolio();
  modalShow();
  screen();
};
