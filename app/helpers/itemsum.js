import { helper } from '@ember/component/helper';

export function itemsum(params) {
    let sum = 0;
    params[0].forEach((invoice) => {
        sum += invoice.items.length;
    });
    return sum;
};

export default helper(itemsum);