import { useEffect,useState } from "react";
import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";



const Dashboard=()=>{
   
        const [employees, setemployees] = useState([]);
       const navigate=useNavigate();
        useEffect(()=>
        {
            const fetchemployees=async()=>{
                try{
                    const response=await fetch("http://localhost:8080/api/getemployee")
                     const data =await response.json();
                     setemployees(data);
                }
                catch(error){
                    console.log("error fetching employees",error.message);
                }
            }
    fetchemployees();
        },[]);

        const handleDelete=async(employeeId)=>{
            try{
                const response=await fetch(`http://localhost:8080/api/deleteemp/${employeeId}`,{
                method:"DELETE",
            });
            if(response.ok){
                setemployees((prevEmployees)=>
                    prevEmployees.filter((employee)=>employee.id !== employeeId)
                )
            }
            console.log(`employee with given id ${employeeId} deleted successfully`);
        }
        catch(error){
            console.log("error deleting employees",error.message);
        }
    }
    const handleUpdate=(employeeid)=>
    {
        navigate(`/employee/${employeeid}`);
    }
    return(
       <>
       <Container className="mt-5">
        <Row>
            <Col>
            <h1 className="text-center">Employees</h1>
         <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>name</th>
                    <th>Email </th>
                    <th>Phone</th>
                    <th>Department</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee)=>(
                    <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.department}</td>
       <td>
        <Button variant="outline-secondary" onClick={()=> handleUpdate(employee.id)}>Update</Button>{" "}
        <Button variant="outline-danger" onClick={()=> handleDelete(employee.id)}>Delete</Button>
       </td>


                    </tr>
                ))

                }
            </tbody>
         </Table>
           
            </Col>
        </Row>
         </Container></>

    )
}


export default Dashboard;