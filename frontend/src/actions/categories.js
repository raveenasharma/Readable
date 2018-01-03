import Api from 'api';
import { GET_ALL_CATEGORIES } from 'actions/constants';

export const getAllCategories = () => (dispatch) => {
  Api.getCategories()
    .then(categories => dispatch(getAllCategoriesAction(categories)));
}

const getAllCategoriesAction = (categories) => {
  return {
    type: GET_ALL_CATEGORIES,
    categories
  }
}