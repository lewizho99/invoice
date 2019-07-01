import { helper } from '@ember/component/helper';

export function itemsum(params) {
    let totalSum = 0;
    let paidSum = 0;
    params[0].forEach((invoice) => {
        totalSum += invoice.total;
        paidSum += invoice.paid;
    });
    return totalSum - paidSum;
};

export default helper(itemsum);