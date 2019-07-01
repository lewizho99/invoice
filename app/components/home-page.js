import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    computeInvoiceTrigger: true,
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
