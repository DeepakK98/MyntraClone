
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AppsProAService } from 'src/app/shared/apps-pro-a.service';
import {Router} from '@angular/router'; // import router from angular router

declare let $: any;

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {
  datePickerConfig;  
  components;
  images_array = [
    {path: '../../../assets/Aimg1.png'},
    {path: '../../../assets/Aimg2.png'},
    {path: '../../../assets/Aimg3.png'},
    {path: '../../../assets/Aimg4.png'},
    {path: '../../../assets/Aimg5.png'},
]
  constructor(
    public appComponent: AppComponent,
    private service: AppsProAService,
    private route:Router
  ) {
    this.datePickerConfig = {
      containerClass: 'theme-dark-blue',
      value: new Date(),
      showWeekNumbers: false,
      dateInputFormat: 'DD-MMM-YYYY',
    };
    this.components = { checkboxRenderer: this.get(this) };
  }


  ngOnInit(): void {
  }

  onImageClick(){
    debugger;
    console.log('@@@@@@@@@@@')
    alert('Link to download app will be added shortly!');
  }


  go(){
    debugger;
		this.route.navigate(['/Myntra/Cart']); // navigate to other page
	}

  async display() {
      alert('Diaplay');
    }


    Load_HomePage(){
      debugger;
      this.route.navigate(['/Myntra']); // navigate to other page
    
    }
    
    get(self) {
      function CheckboxRenderer() {}
      CheckboxRenderer.prototype.init = function (params) {
        this.params = params;
    
        this.eGui = document.createElement('input');
        this.eGui.type = 'checkbox';
        this.eGui.checked = params.data.Paid_Status == 'Y' ? true : false;
    
        this.checkedHandler = this.checkedHandler.bind(this);
        this.eGui.addEventListener('click', this.checkedHandler);
      };
    
      CheckboxRenderer.prototype.checkedHandler = function (e) {
        let checked = e.target.checked;
        let colId = this.params.column.colId;
        this.params.node.setDataValue(colId, checked);
        console.log(checked);
    
        self.checkboxValue = checked;
        //self.onApproveCheckbox(e);
      };
    
      CheckboxRenderer.prototype.getGui = function (params) {
        return this.eGui;
      };
    
      CheckboxRenderer.prototype.destroy = function (params) {
        this.eGui.removeEventListener('click', this.checkedHandler);
      };
      return CheckboxRenderer;
    }
  
}


