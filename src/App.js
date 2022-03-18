import './App.css';
import Navbar from './components/navbar';
import Benefit from './components/benefit';
import VidioPromotion from './components/vidio';
import Map from './components/map';
import Price from './components/price';
import Galery from './components/galery';
import Banner from './components/banner';
import Footer from './components/footer';
import News from './components/news';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <div className='mx-auto lg:w-12/12'>
        <Banner/>
      </div>
      <div id='keunggulan' className='mx-auto lg:w-10/12'>
        <div className='pt-[80px] lg:pt-[120px]'>
          <Benefit/>
        </div>
      </div>
      <div id='Lingkungan' className=''>
        <div className='pt-[80px] lg:pt-[120px]'>
          <VidioPromotion/>
        </div>
      </div>
      <div id='Siteplan' className=''>
        <div className='pt-[80px] lg:pt-[120px]'>
          <Map/>
        </div>
      </div>
      <div>
        <div className='pt-[80px] lg:pt-[120px]'>
          <News/>
        </div>
      </div>
      <div id='Harga' className=''>
        <div className='pt-[80px] lg:pt-[120px]'>
          <Price/>
        </div>
      </div>
      <div id='Galeri' className='mb-[120px]'>
        <div className='pt-[80px] lg:pt-[120px]'>
          <Galery/>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
      <a href="https://api.whatsapp.com/send?phone=6281234800723" className='right-6 fixed bottom-8 flex items-center justify-center p-2 rounded-full w-[64px] h-[64px] bg-green-500 shadow-lg'>
        <img src={require('../src/assets/whatsapp.png')} alt="" />
      </a>
     
    </div>
  );
}

export default App;
