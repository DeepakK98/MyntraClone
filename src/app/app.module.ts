import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { ButtonsModule, WavesModule, IconsModule } from 'angular-bootstrap-md'

import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule } from '@angular/forms';
import { AppsProAService } from './shared/apps-pro-a.service';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgxSpinnerModule } from 'ngx-spinner';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NestedRowFilterPipe } from './shared/nested-row-filter.pipe';
import { DxTreeListModule } from 'devextreme-angular';
import { MainPageComponent } from './Myntra/Main-Page/main-page/main-page.component';
import { ProductsPageComponent } from './Myntra/Products-Page/products-page/products-page.component';
import { ItemPageComponent } from './Myntra/Item-Page/item-page/item-page.component';
import { MensWearComponent } from './Myntra/Mens-Wear/mens-wear/mens-wear.component';
import { WomenWearComponent } from './Myntra/Women-Wear/women-wear/women-wear.component';
import { MyCartComponent } from './Myntra/My-Cart/my-cart/my-cart.component';

FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
]);

@NgModule({
  declarations: [
    AppComponent,
    NestedRowFilterPipe,
    MainPageComponent,
    ProductsPageComponent,
    ItemPageComponent,
    MensWearComponent,
    WomenWearComponent,
    MyCartComponent,    
  ],
  imports: [
    BrowserModule,
    IvyCarouselModule,
    ButtonsModule,
     WavesModule,
      IconsModule,
     
    AppRoutingModule,
    FormsModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    DatePickerModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonToggleModule,
    NgxSpinnerModule,
    BsDatepickerModule.forRoot(),
    DxTreeListModule,
    FontAwesomeModule,
  ],
  providers: [AppsProAService],
  bootstrap: [AppComponent],
})
export class AppModule {}
