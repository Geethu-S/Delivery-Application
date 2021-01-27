import { LightningElement, track  } from 'lwc';

export default class CustomerMap extends LightningElement {

@track
    mapMarkers = [
        {
            value: 'Pickup Address',
            location: {
                Street:"5350 Campbell Blvd",
                City: "Baltimore",
                State:"Maryland",
                Country: 'US',
                PostalCode:"21236"
            },

            icon: 'custom:custom26',
            title: "Pickup Address",
        },
        {
            value: 'Delivery Address',
            location: {
                Street:"123 Secret Street",
                City: "Baltimore",
                State:"Maryland",
                Country: 'US',
                PostalCode:"20755"
            },

            icon: 'custom:custom26',
            title: "Delivery Address",
        }
    ];
    @track markersTitle = "Location";

    @track selectedMarkerValue = 'Pickup Address';

    handleMarkerSelect(event) {
        this.selectedMarkerValue = event.detail.selectedMarkerValue;
    }
}
