import './App.css'
import BoxSlide from './components/BoxSlide';
import SlidFromLeft from './components/SlideFromLeft';
import SlideFromRight from './components/SlideFromRight';
import FadeFromTop from './components/FadeFromTop';
import Expand from './components/Expand';
import { FadeFromBottom, SlideFromLeft } from 'react-janimation';

function App() {

  return (
    <main>

      <FadeFromBottom>
        <h2 className='headingOne'>Hello, World</h2>
      </FadeFromBottom>

      <FadeFromTop threshold={.2}>
        <div className='fadeDiv' style={{ width: 'auto', marginBottom: '1rem' }}>Hello, World</div>
      </FadeFromTop>

      <div className='fadeContainer'>
        <SlideFromLeft>
          <div className='fadeDiv'>Hello, World</div>
        </SlideFromLeft>

        <FadeFromBottom>
          <div className='fadeDiv'>Hello, World</div>
        </FadeFromBottom>

        <SlideFromRight hideOverflow={false}>
          <div className='fadeDiv'>Hello, World</div>
        </SlideFromRight>
      </div>

      <SlideFromLeft>
        <div className='fadeDiv' style={{ width: 'auto', marginBottom: '1rem' }}>Hello, World</div>
      </SlideFromLeft>

      <SlideFromRight hideOverflow={true}>
        <div className='fadeDiv' style={{ width: 'auto', marginBottom: '1rem' }}>Hello, World</div>
      </SlideFromRight>

      <FadeFromBottom hideOverflow={true}>
        <div className='fadeDiv' style={{ width: 'auto', marginBottom: '1rem' }}>Hello, World</div>
      </FadeFromBottom>

      <div style={{ textAlign: 'center', margin: '4rem' }}>
        <BoxSlide backgroundColor={'red'}>
          <h2 style={{ fontSize: '2rem'}}>Hello, World</h2>
        </BoxSlide>
      </div>

      <Expand>
        <div className='fadeDiv' style={{ width: 'auto', marginBottom: '1rem' }}>Hello, World</div>
      </Expand>

    </main>

  )
}

export default App
