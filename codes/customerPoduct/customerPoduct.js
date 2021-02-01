import { LightningElement , api } from 'lwc';
import PRODUCT_ID_FIELD from '@salesforce/schema/Delivery.Product_Id';
import PRODUCT_NAME_FIELD from '@salesforce/schema/Delivery.Product_Name';
import QUANTITY_FIELD from '@salesforce/schema/Delivery.Quantity';
import PRICE_FIELD from '@salesforce/schema/Delivery.Price';
import TOTAL_PRICE_FIELD from '@salesforce/schema/Delivery.Total_Price';
import DRIVER_NAME_FIELD from '@salesforce/schema/Delivery.Driver_Name';
import DRIVER_CONTACT_NO from '@salesforce/schema/Delivery.Driver_Contact_No';
import LOCATION_FIELD from '@salesforce/schema/Delivery.Location';
export default class CustomerPoduct extends LightningElement {
    @api recordId;
    @api objectApiName;
    fields = [PRODUCT_ID_FIELD, PRODUCT_NAME_FIELD, QUANTITY_FIELD,PRICE_FIELD,TOTAL_PRICE_FIELD,DRIVER_NAME_FIELD,DRIVER_CONTACT_NO,LOCATION_FIELD];    
    handleSubmit(event){
        //you can change values from here
        //const fields = event.detail.fields;
        //fields.Name = 'My Custom  Name'; // modify a field
        console.log('Delivery detail : ',event.detail.fields);
        console.log('Delivery name : ',event.detail.fields.Name);
    }
   
    

}


