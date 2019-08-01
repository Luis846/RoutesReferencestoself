import React from 'react';
import './App.css';
import { Link } from "react-router-dom";


function Nav() {
  return (
<div className="nav">
<h1>Navigation</h1>


        <Link to="/store">
            <button>Store</button>
        </Link>
        <Link to="/about">
            <button>About</button>
        </Link>
        <Link to="/panda">
            <button>Pandas!</button>
        </Link>
         <Link to="/luis">
            <button>Luis!</button>
        </Link>


        </div>
  );
}

export default Nav;
