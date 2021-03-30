import React from 'react'
import './top.scss'
import Weather from './weather'

import { Manager, Reference, Popper } from 'react-popper';

export default class TopSection extends React.Component{
  constructor(props){
      super(props)
      this.state ={
        isselectLocationOpen:false,
      }
  }

    onToggleSelectLocation(){
    this.setState((prevState) => ({ isselectLocationOpen: !prevState.isselectLocationOpen}))
  }

   onLocationNameChange(e){
    this.setState({locationName:e.target.value})
  }

    onSelectCity(){
    const {locationName} = this.state
    const {eventEmitter} = this.props
    this.setState({isselectLocationOpen:false})
    eventEmitter.emit("updateWeather", locationName)
  }

  render(){
  //  console.log("ehhkjhkj", this.props.weather_iconsURL)
    const {isselectLocationOpen} = this.state
    const { eventEmitter,name } = this.props
    //const abc = this.state.isselectLocationOpen
    return(
    <div className='top-container'>
       <div className='title'>{name}</div>
       <Weather {...this.props}/>
        <Manager>
           <Reference>
             {({ ref }) => (
               <button
               className='btn btn-select-location'
               ref={ref}
               onClick={this.onToggleSelectLocation.bind(this)}
               >
               Select Location
               </button>
             )}
           </Reference>
           <Popper placement="above">
             {({ ref, style, placement, arrowProps }) => ( isselectLocationOpen &&
               <div
                 className="popup-container"
                 ref={ref}
                 style={style}
                 data-placement={placement}>
                 <div className="form-container">
                   <label htmlFor="location-name">Location Name</label>
                   <input
                   id="location-name"
                   type="text"
                   placeholder="City Name"
                   onChange={this.onLocationNameChange.bind(this)}
                   />
                   <button
                   className="btn btn-select-location"
                   onClick={this.onSelectCity.bind(this)}
                   >
                   Select
                   </button>
                 </div>
                 <div ref={arrowProps.ref} style={arrowProps.style} />
               </div>
             )}
          </Popper>
      </Manager>
    </div>
  )}
}
