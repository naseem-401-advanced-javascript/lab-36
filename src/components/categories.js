/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';

import { categories, products } from '../store/actions.js';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

const Categories = props =>{
  return (
    <section>
      <ul>
        {props.item.categories.map((category, idx)=>{
          return (
            <li key={idx}>
              <input type='text' placeholder='type the category normalized_name' onChange={()=>{
                props.categories(category.normalized_name);
              }} />
              <input type='text' placeholder='type the category display_name' onChange={()=>{
                props.categories(category.display_name);                            }} />

              <input type='text' placeholder='type the category description' onChange={()=>{
                props.categories(category.description);                            }} />

            </li>
          );
        })}
      </ul>
    </section>
  );
};

const mapStateToProps = state => ({
  item: state.item,
});

const mapDispatchToProps = { categories };

export default connect(mapStateToProps, mapDispatchToProps(Categories));