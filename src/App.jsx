import React from 'react';
import logo from './logo.svg';
import './App.css';
import './sass/app.scss'
import TopSection from './components/top/top'
import BottomSection from './components/bottom/bottom'
import Ftop from './components/footer/footer_top/ftop'
import Fbottom from './components/footer/footer_bottom/fbottom'
import axios from 'axios'

const WEATHER_KEY = '7c1a4226552d6724bb4ffafeaa3a1b3b'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      name:'Pune',
      forecast:4,
      isloading:true,
    }
  }

  updateWeather(){
    const {name,forecast} = this.state
    const URL = `http://api.weatherstack.com/forecast?access_key=${WEATHER_KEY}&query=${name}&forecast_days = 4`
    axios.get(URL)
    .then((res) =>{
      console.log('data: ', res.data)
      let data = res.data
      this.setState({
        isloading:false,
        name:data.location.name,
        weather_descriptions:data.current.weather_descriptions,
        weather_icons:data.current.weather_icons[0],
        temperature:data.current.temperature,
        lat:data.location.lat,
        lon:data.location.lon,
        localtime:data.location.localtime,
        wind_speed:data.current.wind_speed,
        wind_degree:data.current.wind_degree,
        wind_dir:data.current.wind_dir,
        pressure:data.current.pressure,
        precip:data.current.precip,
        humidity:data.current.humidity,
        cloudcover:data.current.cloudcover,
        uv_index:data.current.uv_index,
        visibility:data.current.visibility,
        forecast:data.forecast.forecast,
      })
      return res.data
    })
    // .then((data) =>{
    //   this.setState={
    //     isloading:false,
    //     weather_descriptions:data.current.weather_descriptions,
    //     weather_iconsURL:data.current.weather_iconsURL,
    //     temperature:data.current.temperature,
    //   }
    // })
    .catch((err) =>{
      if(err)
      console.error("Cannot fetch Weather Data from API,",err)
    })
  }

  componentDidMount(){
    const { eventEmitter } = this.props

    this.updateWeather()
       eventEmitter.on("updateWeather", (data) =>{
       this.setState({name:data}, () => this.updateWeather())
    })

  }

  render(){
       const {isloading,name, temperature, weather_descriptions, weather_icons,forecast,lat,lon,localtime,wind_speed,wind_degree,wind_dir,pressure,precip,humidity,cloudcover,uv_index,visibility} =this.state

    return(
      <div className='whole-container'>
      <div className='app-container'>
            <div className='text-container'>
            <div className='headerdash'>
                 <div className='headimage'>j</div>
                 <div className='headtext'>WeatherToday</div>
           </div>
              <div className='text-section'>
                 <p> &nbsp;&nbsp;&nbsp;&nbsp;</p>
              </div>
            </div>
      <div className='main-container'>
      {isloading && <h3>Loading Weather...</h3> }
      {!isloading &&(
        <div className='top-section'>
          <TopSection
            name={name}
            temperature={temperature}
            weather_descriptions={weather_descriptions}
            weather_icons={weather_icons}
            lat={lat}
            lon={lon}
            localtime={localtime}
            wind_speed={wind_speed}
            wind_degree={wind_degree}
            wind_dir={wind_dir}
            pressure={pressure}
            precip={precip}
            humidity={humidity}
            cloudcover={cloudcover}
            uv_index={uv_index}
            visibility={visibility}
            eventEmitter={this.props.eventEmitter}
          />
      </div>
    )}
       <div className='bottom-section'>
           < BottomSection  forcastdays={forecast}/>
        </div>
       </div>
      </div>
         <div className='whole-footer'>
             <div className='footer-top'>
                < Ftop/>
             </div>
             <div className='footer-bottom'>
                <Fbottom/>
             </div>
        </div>
    </div>
    )
   }
  }

  export default App;
