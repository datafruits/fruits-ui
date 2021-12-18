import { helper } from '@ember/component/helper';

export default helper(function paginationQuery([paramName, number]) {
  let query = {};
  let param = paramName || 'page';
  query[param] = number;
  return query;
});
