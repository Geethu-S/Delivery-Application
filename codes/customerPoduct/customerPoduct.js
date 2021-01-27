import { LightningElement } from 'lwc';
const columns = [
    {label: 'Product id', fieldName: 'productId', type: 'number'},
    {label: 'Product name', fieldName: 'productName', type: 'text'},
    {label: 'Price', fieldName: 'price', type: 'currency', typeAttributes: { currencyCode: 'USD'}},
    {label: 'Quantity', fieldName: 'quantity', type: 'number'},
    {label: 'Totalprice', fieldName: 'totalprice', type: 'currency', typeAttributes: { currencyCode: 'USD'}},
    {label: 'Driver name', fieldName: 'drivername', type: 'text'},
    {label:'Driver contact number', fieldName:'drivercontactnumber',type:'phone',},
    {label:'Location', fieldName:'location',type:'text'},
];

const data = [{
                   id: 'a',
                   productId: 111,
                   productName: 'Mobile',
                   price: 25000,
                   quantity: 2,
                   totalprice: 50000,
                   drivername: 'George',
                   drivercontactnumber: '222-444-555',
                   location: 'Baltimore',
                   trendIcon: 'utility:down'
               },
               {
                   id: 'b',
                   productId: 112,
                   productName: 'Laptop',
                   price: 35000,
                   quantity: 2,
                   totalprice: 70000,
                   drivername: 'James',
                   drivercontactnumber: '333-777-888',
                   location: 'College Park',
                   trendIcon: 'utility:up'
               },
               {
                   id: 'c',
                   productId: 113,
                   productName: 'Hard Disk',
                   price: 3000,
                   quantity: 3,
                   totalprice: 9000,
                   drivername: 'Joseph',
                   drivercontactnumber: '222-666-999',
                   location: 'Maryland',
               }
            
            ];
export default class CustomerPoduct extends LightningElement {
    data = data;
    columns = columns;

    getSelectedName(event) {
        const selectedRows = event.detail.selectedRows;
        // Display that fieldName of the selected rows
        for (let i = 0; i < selectedRows.length; i++){
            alert("You selected: " + selectedRows[i].productName);
        }
    }

}


