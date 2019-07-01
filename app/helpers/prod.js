import { helper } from '@ember/component/helper';

export function prod(params) {
    return params.reduce((a, b) => {
        return a * b;
    });
};

export default helper(prod);