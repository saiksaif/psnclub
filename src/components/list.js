import React from 'react'
import axios from 'axios';
import { baseURL } from '../utils/constant';
import {BiEditAlt} from 'react-icons/bi';
import {BsTrash} from 'react-icons/bs';

const List = ({id, task, setUpdateUI, updateMode}) => {
  const deleteTask = () => {
    console.warn(id)
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res);
      setUpdateUI((prevState) => !prevState);
    }).catch((err) => {
      console.log(err)
    });
  };
  
  
  return (
    <li>
      {task}
      <div className='iconHolder'>
        <BiEditAlt className='icon' onClick={() => updateMode(id, task)} />
        <BsTrash className='icon' onClick={deleteTask} />
      </div>
    </li>
  )
}

export default List