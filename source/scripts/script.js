import { arrows } from './Slider.js';
import { navigation } from './Navigation.js';
import { portfolio } from './Portfolio.js';
import { modalShow } from './Modal.js';
import { screen } from './Screen.js';
import { headerHide } from './Header.js';

window.onload = () => {
  navigation();
  arrows();
  portfolio();
  modalShow();
  screen();
  headerHide();
};
