import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './employee-dashboard.model';


@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  private employeeModelobj: EmployeeModel = new EmployeeModel();
  constructor(private myservice: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.show();
  }
  users: any;
  employeeForm = this.fb.group({
    id: [],
    firstName: [''],
    lastName: [''],
    email: [''],
    mobile: [''],
    salary: ['']
  })
  onSubmit() {
    this.myservice.save(this.employeeForm.value)
      .subscribe(
        data => {
          this.show();
          alert("saved");
          let ref = document.getElementById("cancel")
          ref?.click();
          this.employeeForm.reset();
        },
        error => {
          alert("problem");
        }

      )
  }
  onEdit(row: any) {
    this.employeeModelobj.id = row.id;
    this.employeeForm.controls['id'].setValue(row.id);
    this.employeeForm.controls['firstName'].setValue(row.firstName);
    this.employeeForm.controls['lastName'].setValue(row.lastName);
    this.employeeForm.controls['email'].setValue(row.email);
    this.employeeForm.controls['mobile'].setValue(row.mobile);
    this.employeeForm.controls['salary'].setValue(row.salary);
  }



  deleteEmployee(row: any) {
    this.myservice.delete(row.id)
      .subscribe(
        res => {

          alert("deleted");
          this.show();
        },
        error => {
          alert("problem");
        }
      )
  }
  show() {
    this.myservice.showData()
      .subscribe(
        data => {
          this.users = data;
        },
        error => {
          alert("problem");
        }

      )
  }
  updateEmployeeDetails() {

    this.employeeModelobj.id = this.employeeForm.value.id;
    this.employeeModelobj.firstName = this.employeeForm.value.firstName;
    this.employeeModelobj.lastName = this.employeeForm.value.lastName;
    this.employeeModelobj.email = this.employeeForm.value.email;
    this.employeeModelobj.mobile = this.employeeForm.value.mobile;
    this.employeeModelobj.salary = this.employeeForm.value.salary;
    this.myservice.update(this.employeeModelobj, this.employeeModelobj.id)
      .subscribe(res => {
        this.show();
        alert("updated");
        let ref = document.getElementById("cancel")
        ref?.click();
        this.employeeForm.reset();
      },
        error => {
          alert("problem");
        }
      )


  }
}



