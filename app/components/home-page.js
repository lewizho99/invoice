import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    computeInvoiceTrigger: true,
    fromDate: '2019-01-01',
    toDate: computed(function() {
        let dateObj = new Date();
        let month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
        let date = ("0" + dateObj.getDate()).slice(-2);
        return dateObj.getFullYear() + "-" + month + "-" + date;
    }),
    invoiceService: Ember.inject.service('invoice-service'),
    invoices: computed('invoiceService', 'computeInvoiceTrigger', function() {
        return this.get('invoiceService').invoices;
    }),
    actions: {
        remove(invoiceId) {
            console.log(invoiceId, this.computeInvoiceTrigger);

            for(let i = 0; i < this.invoices.length; i++){
                if(this.invoices[i].id === invoiceId) {
                    this.invoices.splice(i, 1);
                    break;
                }
            }
            this.set('computeInvoiceTrigger', !this.computeInvoiceTrigger);
        }
    }
});
