import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './Myntra/Main-Page/main-page/main-page.component';
import { ProductsPageComponent } from './Myntra/Products-Page/products-page/products-page.component';
import { ItemPageComponent } from './Myntra/Item-Page/item-page/item-page.component';
import { MensWearComponent } from './Myntra/Mens-Wear/mens-wear/mens-wear.component';
import { WomenWearComponent } from './Myntra/Women-Wear/women-wear/women-wear.component';
import { MyCartComponent } from './Myntra/My-Cart/my-cart/my-cart.component';


const routes: Routes = [

  { path: 'Myntra', component: MainPageComponent },
  { path: 'Myntra/Products', component: ProductsPageComponent },
  { path: 'Myntra/Item', component: ItemPageComponent },

  { path: 'Myntra/MensWear', component: MensWearComponent },
  { path: 'Myntra/WomenWear', component: WomenWearComponent },

  { path: 'Myntra/Cart', component: MyCartComponent },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      enableTracing: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
