# alpinejs-scroll-direction
alpinejs directive to add classes when scrolling in a certain direction

```javascript
import Alpine from 'alpinejs';
import scroll from './scroll-direction';

Alpine.plugin(scroll);
window.Alpine = Alpine;
Alpine.start();
```

```html
<div x-scroll.up="bg-blue-500" x-scroll.down="bg-red-500" x-scroll-threshold="100"></div>
```
