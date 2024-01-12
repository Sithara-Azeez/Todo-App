import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import States from './components/States';
import { Container } from 'react-bootstrap';

import MainRouter from './components/ReatRouter/MainRouter';
import Todo from './components/TodoApp/Todo';

function App() {


  
  return (
    <div className='App'>
      <Todo />
  </div>
  );
}



export default App;
