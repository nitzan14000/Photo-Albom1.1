import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Components/app/app.component';
import { LayoutComponent } from './Components/layout/layout.component';

import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FirstScreenComponent } from './Components/first-screen/first-screen.component';
import { ApproveComponent } from './Components/approve/approve.component';
import { DetailsComponent } from './Components/details/details.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';


import { MainComponent } from './Components/Add-photos/main/main.component';
import { CameraComponent } from './Components/Add-photos/camera/camera.component';
import { LocalMachineComponent } from './Components/Add-photos/local-machine/local-machine.component';
import { OnlineImagesComponent } from './Components/Add-photos/online-images/online-images.component';
import { PhotoAlbomComponent } from './Components/Albom/photo-albom/photo-albom.component';

import { WebcamModule } from 'ngx-webcam';
import { ChoosenPictureComponent } from './Components/Add-photos/choosen-picture/choosen-picture.component';
import { EditPictureComponent } from './Components/Albom/edit-picture/edit-picture.component';
import { PrivateModeComponent } from './Components/Hamburger/private-mode/private-mode.component';
import { ExitPrivateModeComponent } from './Components/MessageBoxs/exit-private-mode/exit-private-mode.component';
import { EditCategoriesComponent } from './Components/Hamburger/edit-categories/edit-categories.component';
import { GoogleMapComponent } from './Components/Albom/google-map/google-map.component';

import { AgmCoreModule } from '@agm/core';
import { SlideShowComponent } from './Components/Albom/slide-show/slide-show.component';
import { AboutComponent } from './Components/Hamburger/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FirstScreenComponent,
    ApproveComponent,
    DetailsComponent,
    MainComponent,
    CameraComponent,
    LocalMachineComponent,
    OnlineImagesComponent,
    PhotoAlbomComponent,
    ChoosenPictureComponent,
    EditPictureComponent,
    PrivateModeComponent,
    ExitPrivateModeComponent,
    EditCategoriesComponent,
    GoogleMapComponent,
    SlideShowComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatDialogModule,
    WebcamModule,
    AgmCoreModule.forRoot({
      
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// צריך להזחיר לimports את הwebcemra
