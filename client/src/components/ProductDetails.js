import React, { useEffect, useState } from 'react';
import queryString from "query-string";
import axios from 'axios';
import './ProductDetails.css';

const ProductDetails = () => {
  const queryParams = queryString.parse(window.location.search);

  const [product, setProduct] = useState([]);
  const [postVote, setPostVote] = useState(queryParams.vote)

  const getData = async () => {
    try {
      let result = await axios
        .get('https://fakestoreapi.com/products/' + queryParams.id)
        .catch((err) => console.log(err));
      if (result.data) {
        // console.log("Data", result.data);
        setProduct(result.data);
      }
    } catch (err) {
      alert("No products found");
      setProduct([]);
    }
  }

  const updateProduct = async () => {
    const response = await axios.patch('https://fakestoreapi.com/products/' + queryParams.id);
    setPostVote(parseInt(postVote) + 1);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div class="container">
        <div class="card">
          <div class="container-fliud">
            <div class="wrapper row">
              <div class="preview col-md-6">

                <div class="preview-pic">
                  <div class="active"><img src={product.image} /></div>
                </div>

              </div>
              <div class="details col-md-6">
                <h3 class="product-title">{product.title}</h3>
                <div class="rating">
                  <div class="stars">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                  <span class="review-no">41 reviews</span>
                </div>
                <p class="product-description">{product.description}</p>
                <h4 class="price">current price: <span>$ {product.price}</span></h4>
                <p class="vote"><strong>91%</strong> of buyers enjoyed this product!</p>
                <h4 class="price">current votes: <span>{postVote}</span></h4>
                <div class="action">
                  <button class="add-to-cart btn btn-default" type="button" onClick={updateProduct}>UpVote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
