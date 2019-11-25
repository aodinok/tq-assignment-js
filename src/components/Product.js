import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';

class Product extends React.PureComponent {
  render() {
    const { productUrl, image, title, summary, price } = this.props;
    return (
      <a href={productUrl} className="tq-product">
        <img className="tq-product-img" src={image} alt={title} />
        <div className="tq-product-content">
          <h3 className="tq-product-title">{title}</h3>
          <p className="tq-product-summary">{summary}</p>
          <p className="tq-product-price">{price}</p>
        </div>
      </a>
    );
  }
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  productUrl: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  price: PropTypes.number,
};

export default Product;
