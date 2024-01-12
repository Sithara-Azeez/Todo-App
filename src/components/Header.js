import React from 'react'
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import {Accordion, Card, Nav, Navbar, Container} from 'react-bootstrap';

const Header = () => {
  const [colour, setColour] = useState('Green');
  const [count, setCount] = useState(0);
const changeColour = ()=>{
    setColour("red")
};
const increment = ()=>{
    setCount(count + 1)
};
const decrement = ()=>{
    setCount(count - 1)
};
  return (
    <>
    <h1 className='bg-success text-white'>Hello Sithara</h1>
    <h2>My fav Color is {colour}</h2>
    <button onClick={changeColour}>Change Color</button>
    <br></br>
    <br></br>
    <h1>Counter is {count}</h1>
    <button onClick={increment} className='m-2 bg-success'>+</button>
    <button onClick={decrement} className='m-2 bg-danger'>-</button>
    
    </>
  );
};

export default Header
