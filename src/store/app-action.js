/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
let initialState = {
    categories: [{ normalized_name: '', display_name: '', description: '' }],
    products: [{ category_association: '', name: '', description: '', price: 0, inventory_count: 0 }],
  };
  
  
  export default (state = initialState, action) =>{
    let { type, payload } = action;
    switch (type) {
    case 'CATEGORIES':
      return state.categories.map(category =>{
        return {normalized_name: category.normalized_name, display_name: category.display_name, description: category.description};
      });
    case 'PRODUCTS':
      return state.categories.map(category =>{
        return {normalized_name: category.normalized_name, display_name: category.display_name, description: category.description};
      });  default:
      return state;
    }
  };
  
  export const categories = (normalized_name, display_name, description)=>{
    return {
      type: 'CATEGORIES',
      payload: {normalized_name, display_name, description},
    };
  };
  
  export const products = (category_association, name, description, price, inventory_count)=>{
    return {
      type: 'PRODUCTS',
      payload: {category_association, name, description, price, inventory_count},
    };
  };