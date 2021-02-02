import { LightningElement  } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Product2.Name';
import ProductCode_FIELD from '@salesforce/schema/Product2.ProductCode';
import PRICE__C_FIELD from '@salesforce/schema/Product2.Price__c';
import QUANTITY__C_FIELD from '@salesforce/schema/Product2.Quantity__c';
import TOTAL_PRICE__C_FIELD from '@salesforce/schema/Product2.Total_Price__c';
import DRIVER_NAME__C_FIELD from '@salesforce/schema/Product2.Driver_Name__c';
import DRIVER_PHONE_NUMBER__C_FIELD from '@salesforce/schema/Product2.Driver_Phone_Number__c';

import PRODUCT2_OBJECT from '@salesforce/schema/Product2';

export default class CustomerPoduct extends LightningElement {
    
 
    objectName = PRODUCT2_OBJECT;
    

    objectFields = [NAME_FIELD,ProductCode_FIELD,PRICE__C_FIELD,QUANTITY__C_FIELD,TOTAL_PRICE__C_FIELD,DRIVER_NAME__C_FIELD,DRIVER_PHONE_NUMBER__C_FIELD];

    handleLoad(event) {
       console.log(NAME_FIELD);
       console.log(PRODUCT2_OBJECT);
       console.log(event.type);
       console.log(JSON.stringify(event.detail));
   }

   handleCancel(event) {
       console.log(event.type);
       console.log(JSON.stringify(event.detail));
   }

   handleSubmit(event) {
       console.log(event.type);
       console.log(JSON.stringify(event.detail));
   }

    handleSuccess(event) {
        console.log(event.type);
        console.log(JSON.stringify(event.detail));
    }
  
    handleError(event) {
       console.log(event.type);
       console.log(JSON.stringify(event.detail));
   }
}



