import { SORT_BY } from 'actions/constants';

export const setSortBy = (content, sortByType, order) => {
  return {
    type: SORT_BY,
    content,
    sortByType,
    order
  }
}