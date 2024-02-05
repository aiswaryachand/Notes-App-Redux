import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import { editNote } from '../../Redux/noteSlice';

import { sub } from 'date-fns';

function Edit() {
    const notes=useSelector((state)=>state.notes);
    const {id}=useParams();

    const existingNote=notes.filter(f=>f.id===id);
    const {title,content}=existingNote[0];
    const [etitle,setTitle]=useState(title);
    const [econtent,setContent]=useState(content);

    const dispatch=useDispatch();

    const navigate=useNavigate();
    
    const handleEdit=(e)=>{
        e.preventDefault();
        dispatch(editNote({id:id,title:etitle,content:econtent,date: sub(new Date(), { minutes: 0 }).toISOString()}))
        
        navigate('/')
    }

  return (
    <>
    <div className='notes-editor p-4' style={
        {
          height: '350px',
          width:'700px'
      }}>
  
  <h2>Edit a Note</h2>
          <Form onSubmit={handleEdit}>
            <Form.Group>
                <Form.Control type="text" placeholder="Title" className='title' value={etitle} onChange={(e)=>setTitle(e.target.value)}/>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Control as="textarea" required type="text" rows="6" cols="10" placeholder="Take a note..."
          className='note-area' value={econtent} onChange={(e)=>setContent(e.target.value)}/>
            </Form.Group>
            <div className="note-footer my-1">
              
              <Button type="submit" className="edit" onClick={handleEdit}>Update</Button>
            </div>  
          </Form>      
      </div>
    </>
  )
}

export default Edit