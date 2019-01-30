import { NgModule } from '@angular/core';
import { FestivalsComponent } from '../festivals/festivals.component';
import { OthersComponent } from '../others/others.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActivitiesComponent } from './activities.component';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';


const routes: Routes = [
    { path: '', component: ActivitiesComponent,
     children: [
        { path: "festivals", component: FestivalsComponent},
        { path: "others", component: OthersComponent},
        { path: "", pathMatch: "full", redirectTo: "festivals"},
        
    ] },
];

@NgModule({
    declarations: [FestivalsComponent, OthersComponent, ActivitiesComponent],
    imports: [RouterModule.forChild(routes),MaterialModule, FormsModule, CommonModule]
})
export class ActivitiesModule { }