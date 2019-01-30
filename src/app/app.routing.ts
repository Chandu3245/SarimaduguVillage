import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { SarimaduguYouthComponent } from './components/sarimadugu-youth/sarimadugu-youth.component';
import { PoliticsComponent } from './components/politics/politics.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutComponent } from './components/about/about.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { MiscellaneousComponent } from './components/miscellaneous/miscellaneous.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ActivitiesModule } from './components/activities/activities.module';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    // { path: 'activities', loadChildren: './components/activities/activities.module#ActivitiesModule'},
    { path: 'activities', loadChildren:() => ActivitiesModule},
    { path: 'syfoundation', component: SarimaduguYouthComponent},
    { path: 'politics', component: PoliticsComponent},
    { path: 'contact-us', component: ContactUsComponent},
    { path: 'about', component: AboutComponent},
    { path: 'misce', component: MiscellaneousComponent},
    { path: 'notification', component: NotificationsComponent},
    { path: 'photos', component: PhotosComponent},
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    // { path: '**', component: PageNotFoundComponent }
  ];

  @NgModule({
    imports: [
        RouterModule.forRoot(
          appRoutes,
        )
      ],
      exports: [RouterModule]
  })
  export class AppRoutingModule{

  }