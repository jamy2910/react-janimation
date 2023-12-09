import './App.css'
import FadeFromBottom from './components/FadeFromBottom';
import BoxSlide from './components/BoxSlide';
import SlideFromLeft from './components/SlideFromLeft';
import SlideFromRight from './components/SlideFromRight';
import FadeFromTop from './components/FadeFromTop';
import Expand from './components/Expand';

function App() {

  return (
    <main>
      <FadeFromTop>
        <h2 className='headingOne'>Hello, World</h2>
      </FadeFromTop>

      <FadeFromBottom>
        <h2 className='headingOne'>Hello, world</h2>
      </FadeFromBottom>

        <BoxSlide backgroundColor={'red'}>
          <h2 className='headingOne'>Hello, World</h2>
        </BoxSlide>


      <div className='containerOne'>
        <BoxSlide backgroundColor={'#159599'}>
          <h2 className='headingOne'>Goodbye, Earth</h2>
        </BoxSlide>
      </div>


      <SlideFromLeft>
        <h2 className='headingOne'>Hello World</h2>
      </SlideFromLeft>

      <SlideFromRight>
        <h2 className='headingOne'>Hello, world</h2>
      </SlideFromRight>

      <FadeFromBottom>
        <h2 className='headingOne'>Hello, world</h2>
      </FadeFromBottom>

      <Expand>
        <h2 className='headingOne'>Hello, World</h2>
        <h2 className='headingOne'>Hello, World</h2>
        <h2 className='headingOne'>Hello, World</h2>
      </Expand>

    </main>

  )
}

export default App
