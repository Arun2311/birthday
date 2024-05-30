// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import BookMyShow from "./Component/BookMyShow"
// import TestOne from './Component/TestOne'
// import ABout from './Component/ABout'
// import ProductsComp from './Component/ProductsComp'
// import UpdateComp from './Component/UpdateComp'
// function App() {

//   return (
//     <div>
//       {/* <h1>Arun</h1> */}

//       {/* <BookMyShow  /> */}

//       {/* <ProductsComp/> */}

//       <UpdateComp/>

//     </div>
//   )
// }

// export default App

import React, { Component } from "react";
import UpdateComp from "./Component/UpdateComp";
import DetailsComp from "./Component/FuncTion/DetailsComp";
import CounterComp from "./Component/FuncTion/CounterComp";
import NameHide from "./Component/FuncTion/NameHide";
import BirthdayComp from "./Component/BirthdayComp";
import Deatailform from "./Component/FuncTion/Deatailform";
import LifeCycleFun from "./Component/FuncTion/LifeCycleFun";
import "bootstrap/dist/css/bootstrap.min.css";
import HookForms from "./Component/HookForms";
import GroceryList from "./Component/FuncTion/GroceryList/GroceryList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UseREF from "./Component/FuncTion/UseREF";

class App extends Component {
  render() {
    return (
      // <BrowserRouter>
      //   <div className="m-3">
      //     <Link to="/Detail">DetailsComp</Link>

      //     <Link to="/Birthday"> BirthdayComp</Link>

      //     <Link to="/Grocery-List"> GroceryList</Link>
      //   </div>

      //   {/* <Deatailform/> */}
      //   {/* <HookForms/> */}
      //   {/* <NameHide/> */}
      //   {/* <LifeCycleFun/> */}
      //   {/* <CounterComp/> */}

      //   <Routes>
      //     <Route path="/Detail" element={<DetailsComp />} />

      //     <Route path="/Birthday" element={<BirthdayComp />} />

      //     <Route path="/Grocery-List" element={<GroceryList />} />
      //   </Routes>
      // </BrowserRouter>

      <div>

        <UseREF/>
      </div>
    );
  }
}

export default App;
