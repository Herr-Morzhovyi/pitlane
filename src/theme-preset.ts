import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const MyPreset = definePreset(Aura, {
  primaryColor: 'rgb(230, 145, 53)',
  semantic: {
    primary: {
      '50': 'rgb(251, 242, 235)',   // Lightest - almost white with a hint of orange
      '100': 'rgb(247, 229, 214)',  // Very light
      '200': 'rgb(242, 204, 178)',  // Light
      '300': 'rgb(238, 179, 142)',  // Medium light
      '400': 'rgb(234, 162, 97)',   // Light medium
      '500': 'rgb(230, 145, 53)',   // Base color
      '600': 'rgb(207, 131, 48)',   // Dark medium
      '700': 'rgb(184, 116, 43)',   // Medium dark
      '800': 'rgb(161, 101, 37)',   // Dark
      '900': 'rgb(138, 87, 32)'     // Darkest
    },
    surface: {
      ground: '#040d19',
      section: '#071426',
      card: '#071426',
      overlay: '#0c1e37',
      border: '#0c1e37',
      hover: 'rgba(230, 137, 53, 0.05)'
    }
  },
  focus: {
    color: 'rgba(230, 137, 53, 0.2)'
  }
});
