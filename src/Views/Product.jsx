import React, { useEffect, useState } from "react"
import axios from "axios";
import { useParams } from "react-router";

function Product(){
    const {id} = useParams()
    const url = `https://61ec8943f3011500174d21a8.mockapi.io/product/${id}`
    const [product,setProduct] = useState(null)
    let content = null;

    useEffect(()=>{
        axios.get(url).then(response =>{
            setProduct(response.data)
        })
    },[url])

    if(product){
        content =
         <div>
            <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
            <div className="object-scale-down h-45 w-96 " >
                <img src={product.images} alt={product.name} />
            </div>
            <div className="font-bold text-2xl mb-3">
                $ {product.price}
            </div>
            <div>
                {product.description}
            </div>
        </div>
        
    }
    return (
        <div>
            {content}
        </div>
    )
};

export default Product;