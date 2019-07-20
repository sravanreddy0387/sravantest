import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AboutComponent } from './about/about.component';
import { EmployeeService } from './services/employee.service';
import { SearchComponent } from './search/search.component';
import { SearchService } from './services/search.service';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AboutComponent,
    SearchComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    Ng2SearchPipeModule
  ],
  entryComponents: [ModalComponent],
  providers: [EmployeeService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
