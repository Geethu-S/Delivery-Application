import { LightningElement,api  } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Delivery.Name';
import PHONE_NO_FIELD from '@salesforce/schema/Delivery.Phone_No';
import EMAIL_FIELD from '@salesforce/schema/Delivery.Email';
import PRODUCT_FIELD from '@salesforce/schema/Delivery.Product';
import PICKUP_ADDRESS_FIELD from '@salesforce/schema/Delivery.Pickup_Address';
import DELIVERY_ADDRESS_FIELD from '@salesforce/schema/Delivery.Delivery_Address';

export default class Customer extends LightningElement {
    @api recordId;
    @api objectApiName;
    fields = [NAME_FIELD,PHONE_NO_FIELD,EMAIL_FIELD,PRODUCT_FIELD,PICKUP_ADDRESS_FIELD,DELIVERY_ADDRESS_FIELD];
    handleSubmit(event){
        //you can change values from here
        //const fields = event.detail.fields;
        //fields.Name = 'My Custom  Name'; // modify a field
        console.log('Delivery detail : ',event.detail.fields);
        console.log('Delivery name : ',event.detail.fields.name);
    }
   
}
    

