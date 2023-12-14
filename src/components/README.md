### react-janimate

The simplest **animation-on-scroll** library.

Animations include: 
* Slide from Left/Right
* Fade from Top/Bottom
* Box Slide
* Expand

```
import {FadeFromTop} from 'react-janimate';

<FadeFromTop>
    <h2>Hello, World</h2>
</FadeFromTop>
```

#### Usage
All components can take a  **threshold** prop. The threshold is the amount of the element that needs to be in the viewport before the animation takes place. It takes a value between **0.1** and **1.0** The default is **0.5**.
E.g. `<SlideFromLeft threshold={0.8}>`.

The other prop that can be used is **hideOverflow**. This is a true/false value and can be used with overflow and horizontal scroll issues.

`<FadeFromBottom hideOverflow={true}>`

The `<BoxSlide>` component also needs to take a backgroundColor prop. This will take any css color value.
```
<BoxSlide backgroundColor={'red'}>
    <h2>Hello World</h2>
</BoxSlide>
```

Although not very customizable or flexible it is designed to be quick and easy to make a site more responsive as fast as possible. Just install, wrap some elements in an animation container and you're done.

Happy Coding!


To see a demo of this package go to: https://jamy2910.github.io/haven-ai-concept/



