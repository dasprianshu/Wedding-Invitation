import './App.css';
import Pager from './Pager.js';
import Pagenum from './Pagenum';

function App() {
  return (
    <div className="App">
    	<section className='Carousel'>
        	<Pager num={1}/>
		</section>
        <div className='Pagenum'> 
          	<Pagenum num={3}/>
        </div>
		<button id='left-btn'>Left</button>
		<button id='right-btn'>Right</button>

    </div>
  );
}

export default App;
