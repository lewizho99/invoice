import { helper } from '@ember/component/helper';

export function paidsum(params) {
    let sum = 0;
    params[0].forEach((invoice) => {
        sum += invoice.paid;
    });
    return sum;
};

export default helper(paidsum);