
import './App.css';
import Navbar from './assets/components/navbar/Navbar';
import LandingComponent from './assets/components/navbar/landing-component';

function App() {
  return (
    <div className=''>

      <Navbar />
      <LandingComponent className={"rounded-lg mx-4 md:mx-6 lg:mx-11 h-full  bg-blue-500 text-white p-4 sm:bg-red-500 md:bg-green-500 lg:bg-yellow-500 xl:bg-purple-500 2xl:bg-pink-500 my-4"} img={"/512x512bb.jpg"} />
      <LandingComponent className={"rounded-lg mx-4 md:mx-6 lg:mx-11 h-full  bg-blue-500 text-white p-4 sm:bg-red-500 md:bg-green-500 lg:bg-yellow-500 xl:bg-purple-500 2xl:bg-pink-500 my-4"} img={"/poster women.png"} />
    </div>
  );
}

export default App;
