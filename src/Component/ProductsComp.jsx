import React, { Component } from "react";

class ProductsComp extends Component {
  state = {
    vignesh: [],
  };


  
  componentDidMount() {
    console.log("asjbdsadasjdsadjashja--------vignesh");
    this.handlefetch();
  }

  async handlefetch() {
    let response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    this.setState({ vignesh: data });
    console.log(data)
  }



  render() {
    return (
      <div>
        <h1>Arun Shops</h1>

        {this.state.vignesh.map((da) => (
          <div>
            <img src={da.image} height={200} width={200} />
            <h1>{da.title}</h1>
            <p>{da.price} rs</p>
          </div>
        ))}



      </div>
    );
  }
}

export default ProductsComp;
