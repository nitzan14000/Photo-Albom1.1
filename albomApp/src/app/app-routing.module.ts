import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent }from './Components/layout/layout.component';
import { FirstScreenComponent } from './Components/first-screen/first-screen.component';
import { ApproveComponent } from './Components/approve/approve.component'; 
import { DetailsComponent } from './Components/details/details.component';
import { MainComponent } from './Components/Add-photos/main/main.component';
import { CameraComponent } from './Components/Add-photos/camera/camera.component';
import { LocalMachineComponent } from './Components/Add-photos/local-machine/local-machine.component';
import { OnlineImagesComponent } from './Components/Add-photos/online-images/online-images.component';
import { PhotoAlbomComponent } from './Components/Albom/photo-albom/photo-albom.component';
import { EditPictureComponent } from './Components/Albom/edit-picture/edit-picture.component';
import { PrivateModeComponent } from './Components/Hamburger/private-mode/private-mode.component';
import { EditCategoriesComponent } from './Components/Hamburger/edit-categories/edit-categories.component';
import { GoogleMapComponent } from './Components/Albom/google-map/google-map.component';
import { SlideShowComponent } from './Components/Albom/slide-show/slide-show.component';
import { AboutComponent } from './Components/Hamburger/about/about.component';


const routes: Routes = [
  {path:'', component: FirstScreenComponent },
  {path:'approve', component: ApproveComponent},
  {path:'details', component: DetailsComponent},
  {path:'images', component: MainComponent },
  {path:'camera', component: CameraComponent },
  {path:'localMachine', component: LocalMachineComponent },
  {path:'onlineImages', component: OnlineImagesComponent },
  {path:'photo-albom', component: PhotoAlbomComponent },
  {path:'edit-picture', component: EditPictureComponent },
  {path:'private-mode', component: PrivateModeComponent },
  {path:'edit-categories', component: EditCategoriesComponent },
  {path:'google-map', component: GoogleMapComponent },
  {path:'slide-show', component: SlideShowComponent },
  {path:'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
