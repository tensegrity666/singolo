import { arrows } from './Slider.mjs';
import { navigation } from './Navigation.mjs';
import { portfolio } from './Portfolio.mjs';
import { modalShow } from './Modal.mjs';
import { screen } from './Screen.mjs';

window.onload = () => {
  arrows();
  navigation();
  portfolio();
  modalShow();
  screen();
};
