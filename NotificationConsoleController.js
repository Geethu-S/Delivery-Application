({
  onInit: function (component, event, helper) {
    component.set('v.notifications', [
        { date:'12/12/2020', time: '07:00am', message: 'Ordered: Your Order has been placed.' },
        { date:'12/12/2020', time: '05:00pm', message: 'Packed: Your item has been picked up by courier partner.' },
        { date:'18/12/2020', time: '11:00am', message: 'Shipped: Your item has been received in the hub nearest to you.Your item is out for delivery.' },
        { date:'18/12/2020', time: '03:00pm', message: 'Your item has been delivered.'}
    
    ]);
    helper.displayToast(component, 'success', 'Ready to receive notifications.');
  },
  onClear: function (component, event, helper) {
    component.set('v.notifications', []);
  },
  onToggleMute: function (component, event, helper) {
    const isMuted = component.get('v.isMuted');
    component.set('v.isMuted', !isMuted);
    helper.displayToast(component, 'success', 'Notifications ' + ((!isMuted) ? 'muted' : 'unmuted') + '.');
  }
})
