import React, { useState } from "react";
import Form from "./Components/Form";
import Success from "./Components/Success";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneCode: '',
    phoneNumber: '',
    country: '',
    city: '',
    aadhar: '',
    pan: ''
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form formData={formData} setFormData={setFormData}/>} />
        <Route path='/success' element={<Success formData={formData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
