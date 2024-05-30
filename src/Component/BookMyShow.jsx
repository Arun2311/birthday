import React, { Component } from "react";
import Shanks from "../assets/download.jpg";
import "./movieticket.css";
import ABout from "./ABout";
class BookMyShow extends Component {
  state = {
    count: 0,
    moviename: "Red Hair sHanks",
    time: "3hrs",
    
  };



  a = () => {
    this.setState({count:this.state.count+1})
    console.log("Arun");
  };

  render() {
    return (
      <div>
        <h1>{this.state.moviename}</h1>
        <img src={Shanks} />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
          labore, incidunt ipsa odio illo voluptatibus suscipit libero quam
          placeat minima eligendi explicabo voluptatum cumque sit non! Corrupti
          perferendis officiis porro.
        </p>

        <p>Time : {this.state.time}</p>
        <h1>Count : {this.state.count}</h1>

        <button onClick={this.a}>Add Ticket</button>
<ABout PHONE= "78378327" TIME={this.state.time}/>
      </div>
    );
  }
}

export default BookMyShow;
