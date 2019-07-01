import { helper } from '@ember/component/helper';

export function date(params) {
    let fromDateObj = new Date(params[0]),
        fromTime = fromDateObj.getTime();
    let toDateObj = new Date(params[1]),
        toTime = toDateObj.getTime() + 86400000; /** Get the lower boundry of the day. */
    let invoice = params[2];

    if(fromTime < toTime) {
        if(invoice.createdAt >= fromTime && invoice.createdAt <= toTime) return '';
        else return 'd-none';
    }
};

export default helper(date);