import React from 'react';

import Search from '../components/Search';
import { fetchSearchResults } from '../api/search';

import './ProductList.css';
import Product from '../components/Product';

class ProductList extends React.PureComponent {
  constructor () {
    super();
    this.state = {
      query: '',
      products: [],
      error: '',
      isLoading: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <Search onSearch={this.handleSearch} />
        {this.renderContent()}
      </React.Fragment>
    );
  }

  renderContent = () => {
    if (this.state.error) {
      return <div className="tq-prod-list-error">{this.state.error}</div>;
    }
    if (this.state.isLoading) {
      return <div className="tq-prod-list-loading">Loading...</div>;
    }
    return (
      <div className="tq-prod-list">
        {this.state.products.map(p => <Product {...p} key={p.id} />)}
      </div>
    );
  }

  handleSearch = async (query) => {
    try {
      this.setState({ isLoading: true, error: '' })
      const products = await fetchSearchResults(query);
      this.setState({ products, isLoading: false })
    } catch (ex) {
      this.setState({ isLoading: false, products: [], error: ex.message });
    }
  }
}

export default ProductList;
