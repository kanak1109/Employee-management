package com.myapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.myapp.entity.Employee;
import com.myapp.repository.EmployeeRepository;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service

public class EmployeeService {
	@Autowired
	private  EmployeeRepository employeerepository;
	  @Transactional
		public Employee postEmployee(Employee employee) {
		 return employeerepository.save(employee);
		
	}
	
	public List<Employee> getAllemployees() {
		return employeerepository.findAll();
	}
	public String deleteEmployee(long id) {
		if(!employeerepository.existsById(id)) {
			throw new EntityNotFoundException("entity with ID" + id + "not found");
		}
		employeerepository.deleteById(id);
		 return "deleted id"+id;
	}
	public Employee updateEmployee(Long id,Employee employee){
		Optional<Employee> optionalemployee=employeerepository.findById(id);
		if(optionalemployee.isPresent()) {
			Employee existingemployee=optionalemployee.get();
			 existingemployee.setEmail(employee.getEmail());
			 existingemployee.setName(employee.getName());
			 existingemployee.setDepartment(employee.getDepartment());
			 existingemployee.setPhone(employee.getPhone());
			 return employeerepository.save(existingemployee);
		}
		return null;
	}

}
