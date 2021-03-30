import React from 'react'
import './ftop.scss'

export default class Ftop extends React.Component{
  constructor(props){
    super(props)

    this.state={}
  }

  render(){
    return(
      <div className='upper-container'>
           <div className='write-here'>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search accurate weather information about your city.
           </div>
           <div className='comp-img'>

           </div>
      </div>
    )
  }
}
