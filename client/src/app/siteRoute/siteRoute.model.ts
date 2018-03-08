import { NgModule ,ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "../components/home/home.component";
import { CountriesComponent } from "../components/contryApp/countries/countries.component";
import { PopulationComponent} from "../components/contryApp/population/population.component";
import { AreaComponent } from "../components/contryApp/area/area.component";
import { GlobalStatsComponent } from "../components/contryApp/global-stats/global-stats.component";
import { NeighborsComponent } from "../components/contryApp/neighbors/neighbors.component";
import { MaxLangComponent } from "../components/contryApp/max-lang/max-lang.component";
import { CapitalComponent } from "../components/contryApp/capital/capital.component";
import { TimeZoneComponent } from "../components/contryApp/time-zone/time-zone.component";
import { LanLatComponent } from "../components/contryApp/lan-lat/lan-lat.component";
import { CallingCodeComponent } from "../components/contryApp/calling-code/calling-code.component";
import { ByNameComponent } from "../components/contryApp/by-name/by-name.component";
import { FavoritsComponent } from "../components/contryApp/favorits/favorits.component";
import { AlbumComponent } from "../components/albumApp/album/album.component";
import { UploadImgComponent } from "../components/albumApp/upload-img/upload-img.component";
import { GalleryComponent } from "../components/albumApp/gallery/gallery.component";
import { LoginComponent } from "../components/login/login/login.component";
import { GuardService } from "../servises/login/guard.service"
import { ProductsComponent } from "../components/login/products/products.component";
import { CartComponent } from '../components/login/cart/cart.component';
import { RegisterComponent } from '../components/register/register.component';


const appRoutes :Routes = [
  { path:'home', component: HomeComponent, children: [
    { path: 'register', component: RegisterComponent}
  ]},
  { path:'countries', component: CountriesComponent, children: [
      {path:'population', component: PopulationComponent},
      {path:'area', component: AreaComponent},
      {path:'globalStats', component: GlobalStatsComponent},
      {path:'neighbors', component: NeighborsComponent},
      {path:'maxLang', component: MaxLangComponent},
      {path:'capital', component: CapitalComponent},
      {path:'timeZone', component: TimeZoneComponent},
      {path:'lanLat', component: LanLatComponent},
      {path:'callingCode', component: CallingCodeComponent},
      {path:'byName', component: ByNameComponent},
      {path:'favorits', component: FavoritsComponent}
  ]},

  { path:'album', component: AlbumComponent, children: [
      {path:'uploadImg', component: UploadImgComponent},
      {path:'gallery', component: GalleryComponent}
  ]},

  { path:'login', component: LoginComponent},
  { path:'products', component: ProductsComponent, canActivate: [GuardService],data: {roles:['admin','user']}},
   { path:'cart',component: CartComponent,canActivate: [GuardService],data: {roles:['admin']}},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];


const appRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes);
@NgModule({
  imports: [
    appRouter
  ],
  declarations: []
})

export class SiteRoutModule { 

  
}
