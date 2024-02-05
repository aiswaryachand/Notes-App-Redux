import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns"

const noteSlice=createSlice({
    name:"notes",
    initialState:[{
        id:"0",
        title:"First Note",
        content:"Hi." ,
        date: sub(new Date(), { minutes: 0 }).toISOString()
    }],
   
    reducers:{
        addNote:(state,action)=>{
            state.push(action.payload) 
        },

        editNote:(state,action)=>{
            const {id,title,content,date}=action.payload;
            const enote=state.find(note=>note.id===id);
            if(enote){
                enote.title=title;
                enote.content=content;
                enote.date=date;
            }
        },

        deleteNote:(state,action)=>{
            const {id}=action.payload;
            const enote=state.find(note=>note.id===id);
            if(enote){
                return state.filter(f=>f.id !== id);
            }
        }
    }
});

export const{addNote,editNote,deleteNote}=noteSlice.actions;
export default noteSlice.reducer;