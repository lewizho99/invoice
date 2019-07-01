import { helper } from '@ember/component/helper';

export function arraysum(params) {
    let sum = 0;
    params[0].forEach((invoice) => {
        sum += invoice.total;
    });
    return sum;
};

export default helper(arraysum);