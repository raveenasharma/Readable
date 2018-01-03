import { GET_ALL_CATEGORIES } from 'actions/constants';

const categories = (state = [], action) => {
  switch(action.type) {
    case GET_ALL_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
}

export default categories;