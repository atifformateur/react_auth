import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';

function App() {

  return (
    <>
      {/*active le systeme de router*/}
      <BrowserRouter>
        {/*defini le conteneur des routes*/}
        <Routes>
          {/*route pour register !*/}
          <Route path='/register' element={<RegisterForm/>}/>
          
          {/*si aucune route ne correspond -> register */}
          <Route path='*' element={<Navigate to="/register"/>}/>
        </Routes>
      </BrowserRouter>  
    </>
)}

export default App
