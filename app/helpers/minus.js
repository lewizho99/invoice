import { helper } from '@ember/component/helper';

export function minus(params) {
    return params.reduce((a, b) => {
        return a - b;
    });
};

export default helper(minus);