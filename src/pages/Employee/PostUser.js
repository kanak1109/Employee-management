
import "./PostUser.css"
import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import form from "react-bootstrap/Form"
import {  useNavigate } from "react-router-dom";
const PostUser=()=>{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        department: ''
    });
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log('Changing', name, 'to', value); // Debug log
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const navigate=useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
     
        console.log('Form submitted:', formData);
     try{
        const response=await fetch("http://localhost:8080/api/employee",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(formData)
        });
        const data =await response.json();
        console.log("employee created: ",data);
        navigate("/")
     }
     catch(error){
   console.log("error creating employee",error.message);
     }
     
    };
      return (
        <>
        <div className="center-form">
            <h1>ADD NEW EMPLOYEES</h1>
            <form onSubmit={handleSubmit}>
                <form.Group controlId="formBasicName">
     <form.Control
     type="text"
     name="name"
     placeholder="Enter name"
     value={formData.name}
     onChange={handleInputChange}
     />
                </form.Group>
                <form.Group controlId="formBasicName">
     <form.Control
     type="email"
     name="email"
     placeholder="Enter mail"
     value={formData.email}
     onChange={handleInputChange}
     />
                </form.Group>   
                <form.Group controlId="formBasicName">
     <form.Control
     type="text"
     name="phone"
     placeholder="Enter phone"
     value={formData.phone}
     onChange={handleInputChange}
     />
                </form.Group>
      
                <form.Group controlId="formBasicName">
     <form.Control
     type="text"
     name="department"
     placeholder="Enter department"
     value={formData.department}
     onChange={handleInputChange}
     />
                </form.Group>
                <Button variant="primary" type="submit" className="w-100">
                    ADD EMPLOYEE
                </Button>
            </form>
        </div>
        </>
        
      );
    
}
export default PostUser;