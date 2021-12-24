import { PlatformLocation } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppsProAService {
  constructor(
    private http: HttpClient,
    private platformLocation: PlatformLocation
  ) {}
  urlProtocol = '';
  //  url = '//localhost:53449/api';
  url = '//api.bluekaktus.com/api';

  myGrid;

  PostAPICall(URL, object: any) {
    return this.http.post(this.urlProtocol + this.url + URL, object);
  }

  PostApiCall(URL, object) {
    return this.http
      .post(this.urlProtocol + this.url + URL, object)
      .toPromise();
  }

  ButtonApiCall(URL, object) {
    let id = object['Id'];
    let type = object['Type'];
    let action = object['Action'];
    let sClientCode = object['sClientCode'];
    return (
      this.http
        .post(
          URL +
            '?Id=' +
            id +
            '&Type=' +
            type +
            '&Action=' +
            action +
            '&sClientCode=' +
            sClientCode,
          ''
        )
        // .post( URL ,object)
        .toPromise()
    );
  }

  PostApiCall_CostingPDF(object) {
    return this.http
      .post('https://bkmfgprint.bluekaktus.com/api/Costing/GetPDF', object)
      .toPromise();
  }

  PostApiCall_PrintChallanPDF(object) {
    return this.http
      .post('https://bkmfgprint.bluekaktus.com/api/GeneralIssue/GetGIPdf', object)
      .toPromise();
  }

  // postData(body) {
  //   // body = JSON.stringify(body);
  //   return this.http
  //     .post(this.urlProtocol + this.url + '/bulkAllocation/SaveValue', {
  //       datum: body,
  //     })
  //     .toPromise();
  // }

  // replaceSaveDataValue(object) {
  //   let REPLACE_TYPE_ID = object['REPLACE_TYPE_ID'];
  //   if (REPLACE_TYPE_ID == '5232' || REPLACE_TYPE_ID == '5552') {
  //     let Buyer = object['Buyer'];
  //     let SO_ID = object['SO_ID'];
  //     let NEW_VALUE = object['NEW_VALUE'];
  //     let P_CONTROLTYPE = object['P_CONTROLTYPE'];
  //     let PROD_CAT_ID = object['PROD_CAT_ID'];
  //     return this.http
  //       .post(
  //         this.urlProtocol + this.url + '/ReplaceData/ReplaceDataSaveValue',
  //         {
  //           SO_ID: SO_ID,
  //           Buyer: Buyer,
  //           NEW_VALUE: NEW_VALUE,
  //           P_CONTROLTYPE: P_CONTROLTYPE,
  //           REPLACE_TYPE_ID: REPLACE_TYPE_ID,
  //           PROD_CAT_ID: PROD_CAT_ID,
  //           user_id: '1',
  //           location_id: '',
  //           client_code: 'akri48',
  //         }
  //       )
  //       .toPromise();
  //   } else if (REPLACE_TYPE_ID == '5554') {
  //     let P_CONTROLTYPE = object['P_CONTROLTYPE'];
  //     let ITEM_ID = object['ITEM_ID'];
  //     let NEW_VALUE = object['NEW_VALUE'];
  //     let CURR_ITEM_PARENT = object['CURR_ITEM_PARENT'];
  //     return this.http
  //       .post(
  //         this.urlProtocol + this.url + '/ReplaceData/ReplaceDataSaveValue',
  //         {
  //           ITEM_ID: ITEM_ID,
  //           CURR_ITEM_PARENT: CURR_ITEM_PARENT,
  //           NEW_VALUE: NEW_VALUE,
  //           P_CONTROLTYPE: P_CONTROLTYPE,
  //           REPLACE_TYPE_ID: REPLACE_TYPE_ID,
  //           user_id: '1',
  //           location_id: '',
  //           client_code: 'akri48',
  //         }
  //       )
  //       .toPromise();
  //   } else if (REPLACE_TYPE_ID == '5555') {
  //     let P_CONTROLTYPE = object['P_CONTROLTYPE'];
  //     let SO_ID = object['SO_ID'];
  //     let NEW_VALUE = object['NEW_VALUE'];
  //     let PROD_CAT_ID = object['PROD_CAT_ID'];
  //     let COLOR_OLD_VAL = object['COLOR_OLD_VALUE'];
  //     return this.http
  //       .post(
  //         this.urlProtocol + this.url + '/ReplaceData/ReplaceDataSaveValue',
  //         {
  //           SO_ID: SO_ID,
  //           PROD_CAT_ID: PROD_CAT_ID,
  //           NEW_VALUE: NEW_VALUE,
  //           P_CONTROLTYPE: P_CONTROLTYPE,
  //           COLOR_OLD_VAL: COLOR_OLD_VAL,
  //           REPLACE_TYPE_ID: REPLACE_TYPE_ID,
  //           user_id: '1',
  //           location_id: '',
  //           client_code: 'akri48',
  //         }
  //       )
  //       .toPromise();
  //   } else if (REPLACE_TYPE_ID == '5553') {
  //     let P_CONTROLTYPE = object['P_CONTROLTYPE'];
  //     let SO_ID = object['SO_ID'];
  //     let PARTY_ID = object['PARTY_ID'];
  //     let OLD_SIZE_GROUP_NAME = object['OLD_SIZE_GROUP_NAME'];
  //     let NEW_VALUE = object['NEW_VALUE'];
  //     let size_range = object['size_range'];
  //     return this.http
  //       .post(this.urlProtocol + this.url + '/ReplaceData/Replace_Size_Group', {
  //         P_CONTROLTYPE: P_CONTROLTYPE,
  //         PARTY_ID: PARTY_ID,
  //         SO_ID: SO_ID,
  //         OLD_SIZE_GROUP_NAME: OLD_SIZE_GROUP_NAME,
  //         NEW_VALUE: NEW_VALUE,
  //         size_range: size_range,
  //         REPLACE_TYPE_ID: REPLACE_TYPE_ID,
  //         user_id: '1',
  //         location_id: '',
  //         client_code: 'akri48',
  //       })
  //       .toPromise();
  //   }
  // }
}
