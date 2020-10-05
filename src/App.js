import React from 'react';
import logo from './logo.svg';
import {TodoListStore} from './components/TodoList'
import {TodoFilterStore} from './components/TodoFilter'
import './App.css';
import { AddTOdoForm } from './components/AddTOdoForm';

function App() {
  return (
    <div>
    <TodoFilterStore/>
     <TodoListStore/>
     <AddTOdoForm/>
    </div>
  );
}

export default App;
