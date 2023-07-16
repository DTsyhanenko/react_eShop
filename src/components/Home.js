import "./Home.css";
import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
            <img src="https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" alt="eshop" className="home__image" />

            <div className="home__row">
                <Product
                    id="0001"
                    title="Gen 5E Smartwatch Silikon schwarz"
                    price={11.96}
                    rating={5}
                    image="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
                />
                <Product
                    id="0002"
                    title="Gen 5E Smartwatch Silikon schwarz"
                    price={121.96}
                    rating={4}
                    image="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=768&q=80"
                />
            </div>

            <div className="home__row">
                <Product
                    id="0003"
                    title="Gen 5E Smartwatch Silikon schwarz"
                    price={111.96}
                    rating={2}
                    image="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
                />
                <Product
                    id="0004"
                    title="Gen 5E Smartwatch Silikon schwarz"
                    price={113.96}
                    rating={3}
                    image="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
                />
                <Product
                    id="0005"
                    title="Gen 5E Smartwatch Silikon schwarz"
                    price={2311.96}
                    rating={5}
                    image="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                />
            </div>

            <div className="home__row">
                <Product
                    id="0006"
                    title="Gen 5E Smartwatch Silikon schwarz"
                    price={151.96}
                    rating={4}
                    image="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
                />
            </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
