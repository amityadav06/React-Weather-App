import React from 'react'
import './bottom.scss'
import Forcastday from './forcastday'

export default class BottomSection extends React.Component{
  constructor(props){
      super(props)
      this.state ={}
  }

  render(){
    const {forecast} = this.props
    return(
      <div className='bottom-container'>
          <Forcastday/>
      </div>
  )
  }
}
