import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { deleteNote } from '../../Redux/noteSlice';
import TimeAgo from './Timeago';


function Note() {
    const notes=useSelector((state)=>state.notes);
    
    const dispatch=useDispatch();

    const navigate=useNavigate();

    const handleDelete=(id)=>{
        dispatch(deleteNote({id:id}));
    }

  
  return<>
 
  <div className='page-head d-flex py-3'>
            <i className="fa-regular fa-file-lines"></i> &nbsp;
            <h3>My Notes</h3>
  </div>
        <small>Recently Viewed</small>
        <div className='notes-list my-3' >
    {
        notes.map((note,index)=>(

    <div className="note py-3 px-3 mx-3 my-3" key={index}>
    <div className='header'>
      <h2>{note.title}</h2>
      <div className='edit-delete'>
      <button className='edit-btn' onClick={()=>{navigate(`/edit/${note.id}`)}}>
            <i className="fa-sharp fa-solid fa-pen"></i>
      </button>
      <button onClick={()=>handleDelete(note.id)}><i class="fa-regular fa-trash-can"></i></button>
      </div>
    </div>
    <div className='note-body'>  
      <span>{note.content}</span>
    </div>
    <div className='footer'>
      <TimeAgo timeStamp={note.date} />
    </div> 
      </div>
        ))}
 </div> 
</>
}

export default Note