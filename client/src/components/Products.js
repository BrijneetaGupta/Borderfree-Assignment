import React, {useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Products = (all_products) => {
//   console.log(all_products.all_products);

  return (
    <>
      <div className="container pb-5">
      <h2 className='section_heading'>All Products</h2>
        <div className="row">

          {
            all_products.all_products.map(item => {
                {/* console.log(item.id); */}
              return (
                <div className="col-md-3">
                <NavLink to={{pathname:`/productDetails?id=${item.id}&vote=${item.rating.count}`, }}>
                  <div className="profile-card-4 text-center"><img src={item.image} className="img img-responsive" />
                    <div className="profile-content">
                      <div className="profile-name">{item.title}</div>
                      <div className="profile-description">{item.description}</div>
                      <div className="row">
                        <div className="col-4">
                          <div className="profile-overview">
                            <p>PRICE</p>
                            <h4>{item.price}</h4>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="profile-overview">
                            <p>RATING</p>
                            <h4>{item.rating.rate}</h4>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="profile-overview">
                            <p>COUNT</p>
                            <h4>{item.rating.count}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </NavLink>
                </div>

              )
            })
          }

        </div>
      </div>        
    </>
  );
}

export default Products;
