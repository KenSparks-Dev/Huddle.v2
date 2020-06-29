import React, { Component } from 'react'

export class random extends Component {
  constructor(){
    super()
    this.state = {
      firstName:"Henry",
      lastName: "Sparks",
      Age:"34"
    }
  }
  render() {
    return (
      <div>
        {this.state.firstName}
      </div>
    )
  }
}

export default random
