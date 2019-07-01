import { helper } from '@ember/component/helper';

export function overdue(params) {
    if(Date.now() >= params[0]) return 'text-danger';
    else return '';
};

export default helper(overdue);