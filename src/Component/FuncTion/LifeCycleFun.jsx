import React, { useEffect, useState } from "react";

function LifeCycleFun() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    handlefetch();
  }, []);

  const handlefetch = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    setdata(data);
    console.log(data);
  };

  const handleadd = () => {
    setcount(count - 1);
  };

  return (
    <div>
      <h1>Api Call</h1>
      <button type="button" class="btn btn-primary">Show </button>
<div className="row">
      {data.map((da) => (
  <div className="col-3">

        <div class="card" style={{width: "18rem"}}>
          <img src={da.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{da.title}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
            show
            </a>
          </div>
        </div>
        </div>

        
      ))}
</div>
    </div>
  );
}

export default LifeCycleFun;
