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
