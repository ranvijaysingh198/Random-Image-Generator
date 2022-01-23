import React, { useEffect, useState } from "react"
import axios from "axios";
import { useParams } from "react-router";
import Loader from "../Components/Loader";

function Product(){
    const {id} = useParams()
    const url = `https://61ec8943f3011500174d21a8.mockapi.io/product/${id}`
    const [product,setProduct] = useState({
        loading:false,
        data:null,
        error:false
    })
    let content = null;

    useEffect(()=>{
        setProduct({
            loading:true,
            data:null,
            error:false
        })
        axios.get(url)
        .then(response =>{
            setProduct({
                loading:false,
                data:response.data,
                error:false
            })
        })
        .catch(()=>{
            setProduct({
                loading:false,
                data:null,
                error:true
            })
        })
    },[url])

    if(product.loading){
        content = <Loader></Loader>
    }
    if(product.error){
        content = <p>
            There was an error please Refresh or try again later
        </p>
    }

    if(product.data){
        content =
         <div>
            <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
            <div className="object-scale-down h-45 w-96 " >
                <img src={product.data.images} alt={product.data.name} />
            </div>
            <div className="font-bold text-2xl mb-3">
                $ {product.data.price}
            </div>
            <div>
                {product.data.description}
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