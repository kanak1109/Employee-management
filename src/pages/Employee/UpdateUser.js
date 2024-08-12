
import "./UpdateUser.css"
import { useEffect, useState } from "react";
import { Button}  from "react-bootstrap";
import form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
const UpdateUser=()=>{
    const{id}=useParams();
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
        })
    };
    useEffect(()=>{
        const fetchEmployee=async() =>{
            try{
                const response=await fetch(`http://localhost:8080/api/employee/${id}`);
                const data =await response.json();
                setFormData(data);
            }
            catch(error){
                console.log("error fetching user",error.message);
            }
        }
            fetchEmployee();
    },[id]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(`http://localhost:8080/api/employee/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const updatedEmployee = await response.json();
            console.log('Employee updated successfully:', updatedEmployee);
    
            // You can handle the response as needed, e.g., redirecting or updating UI
        } catch (error) {
            console.error('Error updating employee:', error);
        }
    };
    
     
    
    return (
        
        <>
        <div className="center-form">
            <h1>EDIT EMPLOYEES</h1>
            <form onClick={handleSubmit}>
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
                    EDIT EMPLOYEE
                </Button>
            </form>
        </div>
        </>
    );
}
export default UpdateUser;