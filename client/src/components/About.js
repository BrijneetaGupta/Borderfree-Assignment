import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Products from './Products';
import 'bootstrap/dist/css/bootstrap.css';
import './About.css';
import slider_2 from '../images/3_2.png';
import slider_3 from '../images/3_4.png';

const About = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [productsData, setProductsData] = useState([]);

  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      // console.log(data);
      // setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);
      navigate('/login');
    }
    // ================================================================================
    try {
      let result = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err) => console.log(err));
      if (result.data) {
        // console.log("Data", result.data);
        setProductsData(result.data);
      }
      if(!result.status === 200){
        const error = new Error(result.error);
        throw error;
      }
    } catch (err) {
      alert("No products found")
      navigate('/login');
      setProductsData([]);
    }
  }
  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <div id="demo" class="carousel slide" data-ride="carousel">

        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={slider_2} alt="Product 1" width="100%" height="450" />
          </div>
          <div class="carousel-item">
            <img src={slider_3} alt="Product 2" width="100%" height="450" />
          </div>
        </div>

        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>

      <Products all_products={productsData} />
    </>
  );
}

export default About;
