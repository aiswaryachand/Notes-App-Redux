import React from 'react'
import Note from './Components/List/Note';
import Create from './Components/List/Create';
import Edit from './Components/List/Edit';
import Sidebar from './Components/List/Sidebar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'


function App() {
  return <>
  <div className='container-fluid d-flex min-vh-100'>
    <Router>
      <Sidebar/>
        <Routes>
            <Route path='/' element={
           <div className='main mx-3 my-3 py-5 px-5'>
           <Create/>
           <Note/>
       </div>     }/>
            <Route path='/edit/:id' element={<Edit/>}/>
        </Routes>
    </Router>
  </div>
</>
}

export default App