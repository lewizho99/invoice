import { helper } from '@ember/component/helper';

export function date(params) {
    console.log(params);
    let dateObj = new Date(params[0]);
    return dateObj.toDateString();
};

export default helper(date);