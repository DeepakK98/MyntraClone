
import { Component, OnInit } from '@angular/core';

import { AppComponent } from 'src/app/app.component';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router'; // import router from angular router

// import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})

export class ProductsPageComponent implements OnInit {

  plusIcon = faPlusCircle;

  billDate: boolean = true;
  arr_select_chkbox: boolean[] = [];
  arr_select_chkbox_1: boolean[] = [];
  arr_select_chkbox_2: boolean[] = [];
  arr_select_chkbox_3: boolean[] = [];
  
  
  categories$List: any = [
    {Id: 0, Name: 'Shirt'},
    {Id: 1, Name: 'T-Shirt'},
    {Id: 2, Name: 'Jeans'},
    {Id: 3, Name: 'Suit'},
    {Id: 4, Name: 'Kurta'},
    {Id: 5, Name: 'Accessories'},
  ];

  brands$List: any = [
    {Id: 0, Name: 'Mufti'},
    {Id: 1, Name: 'Reymonds'},
    {Id: 2, Name: 'Polo'},
    {Id: 3, Name: 'Octave'},
    {Id: 4, Name: 'Pepe Jeans'},
    {Id: 5, Name: 'Louis Phillipe'},
  ];

  
  Price$List: any = [
    {Id: 0, Name: '500-1000'},
    {Id: 1, Name: '1000-2000'},
    {Id: 2, Name: '2000-3000'},
    {Id: 3, Name: '3000 and above'},
     ];

  discount$List: any = [
       {Id: 0, Name: '10%-20%'},
       {Id: 1, Name: '20%-40%'},
       {Id: 2, Name: '40%-50%'},
       {Id: 3, Name: '50% and above'},
        ];
   
  locationID: number;
  locationList: any = [];
  
  constructor(
    public appComponent: AppComponent,
    private route:Router) { }

  ngOnInit(): void {
  }

  addNewRow(Identity,price ){
    alert('Item Added to Cart Successfully!');
    let row= {Id: Identity, Name:'Shirt '+Identity ,Qty: 1,Price: price ,ACTION :''}
    console.log(row);

    this.appComponent.Cart$Items.push(row);
    console.log(this.appComponent.Cart$Items);

  }

  Load_HomePage(){
    debugger;
    this.route.navigate(['/Myntra']); // navigate to other page
  
  }
  
  
  go(){
    debugger;
		this.route.navigate(['/Myntra/Cart']); // navigate to other page
	}
  onImageClick(){
    debugger;
    console.log('@@@@@@@@@@@')
    alert('Link to download app will be added shortly!');
  }

}
