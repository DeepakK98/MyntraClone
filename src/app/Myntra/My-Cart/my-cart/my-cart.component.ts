import { Component, OnInit } from '@angular/core';

import { AppComponent } from 'src/app/app.component';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router'; // import router from angular router

// import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

// (cellClicked)="OnDetailCellClicked($event)"

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})

export class MyCartComponent implements OnInit {

  plusIcon = faPlusCircle;
  trashIcon =faTrash;
  billDate: boolean = true;
  locationID: number;
  locationList: any = [];
  
  Total_value: any;
  CartData: any = [];


  constructor(
    public appComponent: AppComponent,
    private route:Router) { 
    }

  ngOnInit(): void {
    this.cart_data();
  }

  cart_data(){
    debugger;
    this.CartData = this.appComponent.Cart$Items;
    
    if(this.CartData){
      this.Total_value = ((this.CartData[0].Price) * (this.CartData[0].Qty)) ;
      for(let k=1;k<this.CartData.length;k++){
      this.Total_value += (this.CartData[k].Price * this.CartData[k].Qty); 
    }
  }
  }

  delete_row(value){
    debugger;
    alert(value);

    
    let flag1 =0;
     
    this.appComponent.Cart$Items.forEach((node)=>{
      debugger;
      if(flag1==0){ 
      if(node.Id == value){
          this.appComponent.Cart$Items.splice(this.appComponent.Cart$Items.findIndex((a)=> a.Id == value),1)
          flag1=1;
        }
    }
    })

  }
  go(){
    debugger;
		this.route.navigate(['/Myntra/Cart']); // navigate to other page
	}
  Load_HomePage(){
    debugger;
    this.route.navigate(['/Myntra']); // navigate to other page
  
  }
  

  Alter_Values(){
    debugger;
    
    if(this.CartData){
      this.Total_value = ((this.CartData[0].Price) * (this.CartData[0].Qty)) ;
      for(let k=1;k<this.CartData.length;k++){
      this.Total_value += (this.CartData[k].Price * this.CartData[k].Qty); 
    }
  }
  }

  onImageClick(){
    debugger;
    console.log('@@@@@@@@@@@')
    alert('Link to download app will be added shortly!');
  }

}


function getIcon(self) {
  function IconRenderer() {}
  IconRenderer.prototype.init = function (params) {
    this.eGui = document.createElement('span');
    this.eGui.innerHTML = '<em class="material-icons" style="color: red">delete</em>';
  };

  IconRenderer.prototype.getGui = function (params) {
    return this.eGui;
  };

  return IconRenderer;
}
