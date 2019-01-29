import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';//to disable animations
import {SlideshowModule} from 'ng-simple-slideshow';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { SarimaduguYouthComponent } from './components/sarimadugu-youth/sarimadugu-youth.component';
import { PoliticsComponent } from './components/politics/politics.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutComponent } from './components/about/about.component';
import { MiscellaneousComponent } from './components/miscellaneous/miscellaneous.component';
import { PhotosComponent } from './components/photos/photos.component';
import { FestivalsComponent } from './components/festivals/festivals.component';
import { OthersComponent } from './components/others/others.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivitiesComponent,
    SarimaduguYouthComponent,
    PoliticsComponent,
    NotificationsComponent,
    ContactUsComponent,
    AboutComponent,
    MiscellaneousComponent,
    PhotosComponent,
    FestivalsComponent,
    OthersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
