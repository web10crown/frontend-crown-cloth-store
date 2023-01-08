import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Product() {
    const imgUrl = "https://crown-cloth-store-api.onrender.com/images/";
    const [data, setData] = useState([]);
    const [pData, setProductData] = useState({
        _id: "63b6783f7b85ae0e7fde6e83",
        brand: "zara",
        name: "zara jeans",
        colour: "denim blue",
        clothType: "jeans",
        description: "jeans from zara",
        size: "XL",
        genderType: "F",
        price: 100,
        productImage: "productImage-1672902719446.jpg",
        quantity: 2,
    });
    const params = useParams();
    useEffect(() => {
        fetch("https://crown-cloth-store-api.onrender.com/")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                let product = data.find((d) => {
                    return d._id === params.id;
                });
                setProductData(product);
            });
    }, []);
    const productDetails = (e) => {
        let id = e.target.id;
        let product = data.find((d) => {
            return d._id === id;
        });
        setProductData(product);
    };
    return (
        <>
            <link
                href="/assets/css/Product.css"
                rel="stylesheet"
                type="text/css"
            />
            <div className="pgrid">
                <div className="pimage">
                    <img src={imgUrl + pData.productImage} alt="" />
                </div>
                <div className="pdetails">
                    <h2 className="mb-3 mx-5 text-muted">
                        {pData.name.toUpperCase()}
                    </h2>

                    <h4 className="mx-5 my-2 text-secondary">
                        Brand : {pData.brand}
                    </h4>
                    <h4 className="mx-5 my-2 text-secondary">
                        Colour : {pData.colour}
                    </h4>
                    <h4 className="mx-5 my-2 text-secondary">
                        Cloth type : {pData.clothType}
                    </h4>
                    <h4 className="mx-5 my-2 text-secondary">
                        Product details : {pData.description}
                    </h4>
                    <h4 className="mx-5 my-2 text-secondary">
                        Quantity availiable : {pData.quantity}
                    </h4>
                    <h4 className="mx-5 my-2 text-secondary">
                        Size : {pData.size}
                    </h4>
                    <h4 className="mx-5 my-2 text-secondary">
                        For : {pData.genderType.toUpperCase()}
                    </h4>
                    <h4 className="mx-5 my-2 text-secondary">
                        Price : $ {pData.price}
                    </h4>
                </div>
            </div>
            <hr className="my-3" />
            <h3 className="mx-4 my-3">Related products </h3>
            <div className="mcontainer">
                <div className="mcards">
                    {data
                        .slice(0, 15)
                        .filter((p) => {
                            return p.clothType === pData.clothType;
                        })
                        .map((product) => {
                            return (
                                <div
                                    className="mcard"
                                    key={product._id}
                                    onClick={productDetails}
                                >
                                    <img
                                        src={`${imgUrl}${product.productImage}`}
                                        alt=""
                                        id={product._id}
                                    />
                                    <h3>
                                        {product.name
                                            .toUpperCase()
                                            }
                                    </h3>
                                    <p>
                                        {product.description} we dont sell
                                        anything
                                    </p>
                                    <button className="btn  " id={product._id}>
                                        shop ${product.price}
                                    </button>
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
}
export default Product;
