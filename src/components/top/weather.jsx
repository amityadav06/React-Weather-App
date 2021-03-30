import React from 'react'
import SunImg from '../../resources/images/sun.png'

export default class Weather extends React.Component{
  constructor(props){
    super(props)
    this.state ={}
  }

  render(){
    const{name,temperature,weather_descriptions,weather_icons,lat,lon,localtime,wind_speed,wind_degree,wind_dir,pressure,precip,humidity,cloudcover,uv_index,visibility} = this.props
  //  console.log('ytyuyut',weather_icons)
    return(
      <div className='weather-container'>
        <div className='header'>{weather_descriptions}</div>
        <div className='inner-container'>
          <div className='image'>
            <img src={weather_icons} />
          </div>
          <div className='current-weather'>{temperature}°</div>
        </div>
        <div className='footer'>
              Localtime &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;{localtime}<br/>
              Latitude &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;{lat}<br/>
              Longitude &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;{lon}<br/>
              Wind speed &nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;{wind_speed} &nbsp;km/h<br/>
              Wind degree &nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;{wind_degree}<br/>
              Wind direction &nbsp; :&nbsp;{wind_dir}<br/>
              Pressure &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;{pressure}&nbsp;mbar<br/>
              Precipitation &nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;{precip}<br/>
              Humidity &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;{humidity}%<br/>
              Cloud cover &nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;{cloudcover}%<br/>
              UV index &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;{uv_index}<br/>
              Visibility &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;{visibility}&nbsp; km<br/>
          </div>
      </div>

    )
  }
}
