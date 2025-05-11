import Swup from 'https://unpkg.com/swup@4?module';
import SwupFadeTheme from 'https://unpkg.com/@swup/fade-theme?module';

const swup = new Swup({
  containers: ["#swup"],
  plugins: [new SwupFadeTheme()]
});