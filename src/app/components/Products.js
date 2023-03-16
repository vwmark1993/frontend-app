import React, { Component } from 'react';
import { Thumbnail } from './Thumbnail';
import axios from 'axios';
import './Products.css';

export class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }
  }

  async componentDidMount() {
    await axios.get('https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6')
    .then(res => {
      const productsResponse = res.data.data.products;
      let products = []

      productsResponse.forEach(product => {
        products.push({
          id: product._id,
          images: product.imageURLs,
          price: product.retailPrice,
          name: product.fulhausProductName,
          quantity: 1
        })

        this.setState(() => {
          return {
            products: products
          }
        })
      });
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    const { products } = this.state

    return (
        <div className="products-component lg:col-span-9 md:col-span-8 col-span-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 h-full p-4 items-center justify-items-center">
            {products.map((product, index) => {
              return (
                <Thumbnail product={product} key={index} />
              )
            })}
          </div>
      </div>
    )
  }
}