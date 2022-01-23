import React from "react";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import useAxiosGet from "../Hooks/HttpRequests";

function Home(){
    
    const url = `https://61ec8943f3011500174d21a8.mockapi.io/product?page=1&limit=10`
    
    
    let products = useAxiosGet(url);

    let content = null;

    if(products.loading){
        content = <Loader></Loader>
    }
    if(products.error){
        content = <p>
            There was an error please Refresh or try again later
        </p>
    }

    if(products.data){
        content = products.data.map((currentProduct) => 
            <div key = {currentProduct.id}>
                <ProductCard product = {currentProduct}/>
            </div>
        )
        
    }



    return(
        <div>
            <h1 className="font-bold mb-3 text-2xl">
                Random Image Generator
            </h1>
            {content}
    
        </div>
    )
}

export default Home;