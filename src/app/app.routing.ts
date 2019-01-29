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
import { FestivalsComponent } from './components/festivals/festivals.component';
import { OthersComponent } from './components/others/others.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'activities', component: ActivitiesComponent},
    { path: 'syfoundation', component: SarimaduguYouthComponent},
    { path: 'politics', component: PoliticsComponent},
    { path: 'contact-us', component: ContactUsComponent},
    { path: 'about', component: AboutComponent},
    { path: 'misce', component: MiscellaneousComponent},
    { path: 'notification', component: NotificationsComponent},
    { path: 'photos', component: PhotosComponent},
    { path: 'festivals', component: FestivalsComponent},
    { path: 'others', component: OthersComponent},
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