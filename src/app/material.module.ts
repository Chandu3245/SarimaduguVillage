import {MatButtonModule, MatCheckboxModule, MatNativeDateModule, MatOptionModule,MatCardModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatMenuModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, 
    MatNativeDateModule, MatOptionModule, MatSelectModule, MatInputModule, MatMenuModule, MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, 
    MatNativeDateModule, MatOptionModule, MatSelectModule, MatInputModule, MatMenuModule, MatCardModule],
})
export class MaterialModule { }