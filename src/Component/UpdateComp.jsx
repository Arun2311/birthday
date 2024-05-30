import React, { Component } from "react";

class UpdateComp extends Component {
  state = {
    count: 0,
  };


  componentDidMount(){
    console.log("componentDidMount");
  }
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount11111111111");

  }

 handleclick = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleclick}>ADD</button>
      </div>
    );
  }
}

export default UpdateComp;
