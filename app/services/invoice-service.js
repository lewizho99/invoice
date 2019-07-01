import Service from '@ember/service';

export default Service.extend({
    invoices: [
        {
            id: 'inv_' + Date.now(),
            name: 'New Invoice',
            from: 'Logan Price',
            to: 'Lando Freeman',
            total: 500,
            paid: 0,
            due: Date.now() + 3600000,
            items: [
                {
                    name: 'Macbook Pro 2019',
                    unitPrice: 2000,
                    number: 2
                }, {
                    name: 'Macbook Pro 2018',
                    unitPrice: 2000,
                    number: 2
                }, {
                    name: 'Macbook Pro 2017',
                    unitPrice: 2000,
                    number: 2
                }
            ]
        }
    ]
});
