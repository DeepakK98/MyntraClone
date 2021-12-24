import { Component, OnInit } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router'; // import router from angular router

// import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mens-wear',
  templateUrl: './mens-wear.component.html',
  styleUrls: ['./mens-wear.component.scss']
})
export class MensWearComponent implements OnInit {

  locationID: number;
  locationList: any = [];
  
  cartIcon = faCartPlus;
  // cartIcon2 = faShoppingBasket;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  go(){
    debugger;
		this.route.navigate(['/Myntra/Cart']); // navigate to other page
	}
  Load_HomePage(){
    debugger;
    this.route.navigate(['/Myntra']); // navigate to other page
  
  }
  
  onImageClick(){
    debugger;
    console.log('@@@@@@@@@@@')
    alert('Link to download app will be added shortly!');
  }

}
