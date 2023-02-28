import React from 'react';
import createCategoryRequest from '../../api/createCategoryRequest.js';
import Category from './Category.jsx';

class CreateTaskContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: null,
    }
    this.getCategories = this.getCategories.bind(this);
  }

  getCategories(){
    createCategoryRequest()
    .then((res) => res.json())
    .then((res) => this.setState({ categories: res }))
  }

  // componentDidMount(){
  //   this.getCategories();
  // }

  componentDidUpdate(){
    this.getCategories();
  }

  render() {
    return (
      <div>
        <Category categories={this.state.categories}/>
      </div>
    )
  }
}

export default CreateTaskContainer;