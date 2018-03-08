import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule , ReactiveFormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { SiteRoutModule } from "./siteRoute/siteRoute.model";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/contryApp/countries/countries.component';
import { CountryHeaderComponent } from './components/contryApp/country-header/country-header.component';
import { PopulationComponent } from './components/contryApp/population/population.component';
import { AreaComponent } from './components/contryApp/area/area.component';
import { GlobalStatsComponent } from './components/contryApp/global-stats/global-stats.component';
import { NeighborsComponent } from './components/contryApp/neighbors/neighbors.component';
import { MaxLangComponent } from './components/contryApp/max-lang/max-lang.component';
import { CapitalComponent } from './components/contryApp/capital/capital.component';
import { TimeZoneComponent } from './components/contryApp/time-zone/time-zone.component';
import { LanLatComponent } from './components/contryApp/lan-lat/lan-lat.component';
import { CallingCodeComponent } from './components/contryApp/calling-code/calling-code.component';
import { ContryPanelComponent } from './components/contryApp/contry-panel/contry-panel.component';
import { ByNameComponent } from './components/contryApp/by-name/by-name.component';
import { FavoritsComponent } from './components/contryApp/favorits/favorits.component';
import { AlbumComponent } from './components/albumApp/album/album.component';
import { UploadImgComponent } from './components/albumApp/upload-img/upload-img.component';
import { GalleryComponent } from './components/albumApp/gallery/gallery.component';
import { ImgPanelComponent } from './components/albumApp/img-panel/img-panel.component';
import { LoginComponent } from './components/login/login/login.component';
import { ProductsComponent } from './components/login/products/products.component';
import { CartComponent } from './components/login/cart/cart.component';
import { RegisterComponent } from './components/register/register.component';

import { ContryDataService } from "./servises/contryApp/contry-data.service";
import { FavoritsService } from "./servises/contryApp/favorits.service";
import { UploadService } from "./servises/albumApp/upload.service";
import { LoginService } from "./servises/login/login.service";
import { GuardService } from "./servises/login/guard.service";
import { InterseptorService } from "./servises/interseptors/interseptor.service";
import { ProductsService } from './servises/products/products.service';
import { CartService } from './servises/products/cart.service';
import { RegisterService } from './servises/login/register.service'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CountriesComponent,
    CountryHeaderComponent,
    PopulationComponent,
    AreaComponent,
    GlobalStatsComponent,
    NeighborsComponent,
    MaxLangComponent,
    CapitalComponent,
    TimeZoneComponent,
    LanLatComponent,
    CallingCodeComponent,
    ContryPanelComponent,
    ByNameComponent,
    FavoritsComponent,
    AlbumComponent,
    UploadImgComponent,
    GalleryComponent,
    ImgPanelComponent,
    LoginComponent,
    ProductsComponent,
    CartComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SiteRoutModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    ContryDataService,
    FavoritsService,
    UploadService,
    LoginService,
    GuardService,
    ProductsService,
    CartService,
    RegisterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterseptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
