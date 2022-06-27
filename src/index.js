import ScrollOut from 'scroll-out';
import Splitting from 'splitting';
console.clear();

ScrollOut({
  cssProps: {
    visibleY: true,
    viewportY: true
  }
});

Splitting({target: '.heading'});
