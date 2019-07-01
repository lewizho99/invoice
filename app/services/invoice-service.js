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
        }, {
            id: 'inv_' + (Date.now() - 10800000) ,
            name: 'Flowers Invoice',
            from: 'Logan Price',
            to: 'Lando Freeman',
            total: 500,
            paid: 200,
            due: Date.now() - 90000000,
            items: [
                {
                    name: 'Rose Flower',
                    unitPrice: 200,
                    number: 2
                }, {
                    name: 'Sun Flower',
                    unitPrice: 150,
                    number: 2
                }, {
                    name: 'Big Bouquet',
                    unitPrice: 500,
                    number: 1
                }
            ]
        }
    ]
});
