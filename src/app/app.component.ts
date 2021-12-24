import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { AppsProAService } from '../app/shared/apps-pro-a.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { combineLatest } from 'rxjs';
import {
  ActivatedRoute,
  ActivationEnd,
  NavigationStart,
  Router,
  RouterModule,
  RoutesRecognized,
} from '@angular/router';
import { constants } from 'buffer';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Apps-Pro-A';

  isValid = true;
  errorMsg;
  userMsg;
  Msg;

  Cart$Items: any = [];

  mon = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  fullMonth = [
    'January',
    'Febrary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  _querystring;
  flag = 0;

  constructor(
    private platformLocation: PlatformLocation,
    private service: AppsProAService,
    public SpinnerService: NgxSpinnerService,
    public router: Router,
    public route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.service.urlProtocol = this.platformLocation.protocol;
    this.router.events.subscribe((event) => {
      if (event instanceof ActivationEnd) {
        this._querystring = event.snapshot.queryParams;
        if (this.flag == 0) {
          for (let i in this._querystring) {
            sessionStorage.setItem(i, this._querystring[i]);
          }
          this.checkValidUrl();
        }
      }
    });
  }

  checkValidUrl() {
    debugger;
    this.flag = 1;
    if (
      sessionStorage.getItem('client_code') == '0' ||
      sessionStorage.getItem('client_code') == null ||
      sessionStorage.getItem('client_code') == ''
    ) {
      this.router.navigate(['/error']);
    } else {
      if (this.platformLocation.pathname == '/purchaseregister') {
        if (
          sessionStorage.getItem('company_id') == '0' ||
          sessionStorage.getItem('company_id') == null ||
          sessionStorage.getItem('company_id') == ''
        ) {
          this.router.navigate(['/error']);
        }
      }
      console.log(this.platformLocation.href.split('?')[1]);
      console.log(this.platformLocation);
      // let url = this.platformLocation.href.split('?')[0].split('/');
      let url = this.platformLocation.pathname;
      let routedURL = url;

      if (url.toUpperCase().includes('ANG9')) {
        routedURL = url.split('ang9')[1];
      }
      this.router.navigate([routedURL]);
    }
  }

  errorTimeout() {
    setTimeout(() => {
      this.isValid = true;
      this.errorMsg = '';
    }, 4500);
  }

  userMsgTimeout() {
    setTimeout(() => {
      this.userMsg = false;
    }, 4000);
  }

  MsgTimeout() {
    setTimeout(() => {
      this.Msg = false;
    }, 4000);
  }

  formatDate(date, type) {
    if (type == 'T') {
      let splitDate = date.toString().split('T')[0].split('-');
      let newDate = `${splitDate[0]}/${splitDate[1]}/${splitDate[2]}`;
      return newDate;
    } else if (type == 'mmm') {
      let splitDate = date.toString().split(' ');
      let newDate = `${splitDate[2]}/${
        this.mon.findIndex((x) => x == splitDate[1]) + 1
      }/${splitDate[0]}`;
      return newDate;
    } else if (type == 'date') {
      let splitDate = date.toString().split(' ');
      let newDate = `${splitDate[3]}/${
        this.mon.findIndex((x) => x == splitDate[1]) + 1
      }/${splitDate[2]}`;
      return newDate;
    }
  }

  refreshSelectPicker() {
    setTimeout(() => {
      $('.selectpicker').selectpicker('refresh');
    }, 1);
  }

  getClientId() {
    if (sessionStorage.getItem('client_id') == undefined) {
      return 0;
    }
    return sessionStorage.getItem('client_id');
  }

  getUserId() {
    if (sessionStorage.getItem('user_id') == undefined) {
      return 0;
    }
    return sessionStorage.getItem('user_id');
  }

  getClientCode() {
    return sessionStorage.getItem('client_code');
  }

  getLocationId() {
    if (sessionStorage.getItem('location_id') == undefined) {
      return 0;
    }
    return sessionStorage.getItem('location_id');
  }

  getCompanyName() {
    return 'Royal Datamatics Pvt Ltd.';
  }

  getCompanyId() {
    if (sessionStorage.getItem('company_id') == undefined) {
      return 0;
    }
    return sessionStorage.getItem('company_id');
  }

  getScreenCode() {
    if (sessionStorage.getItem('screen_code') == undefined) {
      return '';
    }
    return sessionStorage.getItem('screen_code');
  }

  getUserName() {
    return 'admin';
  }

  getLocation() {
    return 'Noida';
  }

  getCurrentDate() {
    let date = new Date().toString().split(' ');
    let newDate = `${date[2]},${
      this.fullMonth[this.mon.findIndex((x) => x == date[1])]
    } ${date[3]}`;
    return newDate;
  }
}
