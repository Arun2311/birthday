import React, { Component } from 'react'

 class ABout extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        contact:{this.props.PHONE}   ,,<br/>   
        
          {this.props.TIME}
        
      </div>
    )
  }
}
export default ABout