package com.myapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import com.myapp.entity.Employee;
import com.myapp.service.EmployeeService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class EmployeeController {
    @Autowired

	private  EmployeeService employeeservice ;
	@PostMapping("/employee")

	public Employee postEmployee(@RequestBody Employee employee) {
		return employeeservice.postEmployee(employee);
		
	}
	  @GetMapping("/getemployee")
	  public List<Employee> getAllemployees(){
		  return employeeservice.getAllemployees();
		  
	  }
	  @DeleteMapping("/deleteemp/{id}")
	  public String deleteEmployee(@PathVariable Long id){
		  return employeeservice.deleteEmployee(id);
	  }  
	  
	  @PutMapping("/employee/{id}")
	    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails) {
	        Employee updatedEmployee = employeeservice.updateEmployee(id, employeeDetails);
	        if (updatedEmployee == null) {
	            return ResponseEntity.notFound().build();
	        }
	        return ResponseEntity.ok(updatedEmployee);
	    }

}
