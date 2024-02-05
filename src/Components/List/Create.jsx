import React,{useState,useRef} from 'react'
import {Form,Button} from 'react-bootstrap'
import { useDispatch,useSelector} from 'react-redux';
import { sub } from "date-fns";
import { addNote } from '../../Redux/noteSlice';
function Create() {
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");

    const notes=useSelector((state)=>state.notes);
    const dispatch=useDispatch();

    const ftitle=useRef("");
    const fcontent=useRef("");

    const handleSave=(e)=>{
        e.preventDefault();
        dispatch(addNote({id:notes[notes.length-1].id+1,title,content,date: sub(new Date(), { minutes: 0 }).toISOString()}))

            ftitle.current.value=""
            fcontent.current.value=""
    }
    
  return (
    <>
    <div className='notes-editor p-4' style={
        {
          height: '350px',
          width:'700px'
      }}>
  
  <h2>Add a Note</h2>
          <Form onSubmit={handleSave}>
            <Form.Group>
                <Form.Control type="text" ref={ftitle} placeholder="Title" className='title' onChange={(e)=>setTitle(e.target.value)}/>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Control as="textarea" required type="text" ref={fcontent} rows="6" cols="10" placeholder="Take a note..."
          className='note-area' onChange={(e)=>setContent(e.target.value)}/>
            </Form.Group>
            <div className="note-footer my-1">
              
              <Button type="submit" className="save" onClick={handleSave}>Save</Button>
            </div>  
          </Form>      
      </div>
    </>
  )
}

export default Create