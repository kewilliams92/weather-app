import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import Forecast from './components/Forecast';
import getFormatedWeatherData from './services/weartherService';

function App() {
  const fetchWeather = async () => {
    const data = await getFormatedWeatherData("weather", { q: "London" });
    console.log(data);
  }

  fetchWeather();

  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <Forecast title="hourly forecast"/>
      <Forecast title="daily forecast"/>
    </div>
  );
}

export default App;
