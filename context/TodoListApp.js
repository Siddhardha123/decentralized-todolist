import React ,{useState} from 'react';
import web3Modal from 'web3modal';
import {ethers} from 'ethers';
import { toDoListAddress, toDoListABI} from "./Constant";

const fetchContract = (signerOrProvider)=> 
  new ethers.Contract(toDoListAddress,toDoListABI,singerOrProvider);

  export const ToDoListProvider = React.createContext();
const TodoListApp = () => {
  return (
    <div>TodoListApp</div>
  )
}

export default TodoListApp