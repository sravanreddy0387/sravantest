import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../services/employee';
import { SearchService } from '../services/search.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];
  searchText: string;
  constructor(private employeeService: EmployeeService, private searchService: SearchService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getEmployees();
    this.searchService.inputValue$.subscribe(res => this.searchText = res);
  }

  getEmployees(): void {
    this.employeeService.getEmployees().then(employees => this.employees = employees);
  }

  open(emp) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.emp = emp;
  }
}
