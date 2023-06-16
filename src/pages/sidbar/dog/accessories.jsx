import Nav from "../../../components/nav";
import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Product from "../../../components/card";
import { useEffect, useState } from "react";
function Dogaccessories() {
    const { Meta } = Card;
    const api_url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(api_url)
            .then(res=>res.json())
            .then(data=>setProducts(data))
    }, [])
    return (
        <>
            <Nav />

            <div className="d-flex justify-content-center mt-5" >

                <div className="fs-1 fw-bold">
                    accessories

                </div>
            </div>
            <div className="d-flex justify-content-center mt-5 text-center">
                <div className="container w-100">
                    <div className="row">
                        <div className="col-12 col-md-3 mb-5 col-sm-6" key={products.id}>

                    {products.map((product) => {
                        return (
                            <Product products={product} />
                            )
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dogaccessories;