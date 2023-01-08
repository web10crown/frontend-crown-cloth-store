import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
    const imgUrl = "https://crown-cloth-store-api.onrender.com/images/";
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [crousalOne, setOne] = useState({
        _id: "",
        name: "",
        description: "",
        productImage: "",
    });
    const [crousalTwo, setTwo] = useState({
        _id: "",
        name: "",
        description: "",
        productImage: "",
    });
    const [crousalThree, setThree] = useState({
        _id: "",
        name: "",
        description: "",
        productImage: "",
    });
    useEffect(() => {
        fetch("https://crown-cloth-store-api.onrender.com/")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                if (data.length >= 3) {
                    setOne(data.slice().reverse()[0]);
                    setTwo(data.slice().reverse()[1]);
                    setThree(data.slice().reverse()[2]);
                    console.log("initialized");
                } else {
                    console.log("not done");
                }
            });
    }, []);

    const productDetails = (e) => {
        let id = e.target.id;
        navigate(`/product/${id}`);
    };

    return (
        <>
            <link rel="stylesheet" href="/assets/css/Home.css" />
            <div className="container">
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <ol className="carousel-indicators">
                        <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="0"
                            className="active"
                        ></li>
                        <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="1"
                        ></li>
                        <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="2"
                        ></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src={imgUrl + crousalOne.productImage}
                                className="d-block w-100 "
                                id={crousalOne._id}
                                style={{
                                    height: "35rem",
                                    objectFit: "cover",
                                }}
                                alt="..."
                                onClick={productDetails}
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="">
                                    {crousalOne.name.toUpperCase()}
                                </h5>
                                <p className="">{crousalOne.description}</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src={imgUrl + crousalTwo.productImage}
                                className="d-block w-100"
                                id={crousalTwo._id}
                                style={{
                                    height: "35rem",
                                    objectFit: "cover",
                                }}
                                alt="..."
                                onClick={productDetails}
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="">
                                    {crousalTwo.name.toUpperCase()}
                                </h5>
                                <p className="">{crousalTwo.description}</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src={imgUrl + crousalThree.productImage}
                                className="d-block w-100"
                                id={crousalThree._id}
                                style={{
                                    height: "35rem",
                                    objectFit: "cover",
                                }}
                                alt="..."
                                onClick={productDetails}
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="">
                                    {crousalThree.name.toUpperCase()}
                                </h5>
                                <p className="">{crousalThree.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div className="mcontainer">
                <div className="mcards">
                    {data.slice(0, 15).map((product) => {
                        return (
                            <div
                                className="mcard"
                                key={product._id}
                                id={product._id}
                                onClick={productDetails}
                            >
                                <img
                                    src={imgUrl + product.productImage}
                                    alt=""
                                    id={product._id}
                                />
                                <h5 className="card-title">
                                    {product.name.toUpperCase()}
                                </h5>
                                <p className="card-text">
                                    {product.description} this is an practice
                                    site
                                </p>
                                <button className="btn  " id={product._id}>
                                    shop ${product.price}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

            <h3 className="display-5 text-secondary mx-4 my-4">Latest Aded</h3>
            <div className="row">
                {data
                    .slice()
                    .reverse()
                    .slice(0, 8)
                    .map((user) => (
                        <div
                            className="card my-3 mx-auto"
                            key={user._id}
                            id={user._id}
                            onClick={productDetails}
                            style={{ width: "20rem", height: "24rem" }}
                        >
                            <img
                                src={imgUrl + user.productImage}
                                className="card-img-top"
                                id={user._id}
                                alt="..."
                                style={{
                                    width: "100%",
                                    maxHeight: "60%",
                                    objectFit: "cover",
                                }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    {`${user.name.toUpperCase()}
                                          `}
                                </h5>
                                <p className="card-text">{user.description}</p>
                                <button
                                    className="btn btn-secondary w-100 "
                                    id={user._id}
                                >
                                    Shop Now ${user.price}
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
            <hr className="my-4" />
            <h3 className="display-5 text-secondary mx-4 my-4">In Demand</h3>
            <div className="icontainer">
                <div className="icards">
                    {data.slice(0, 6).map((user) => {
                        return (
                            <div
                                className="icard"
                                key={user._id}
                                onClick={productDetails}
                            >
                                <img
                                    id={user._id}
                                    className="icard-image"
                                    src={imgUrl + user.productImage}
                                    alt="..."
                                />
                            </div>
                        );
                    })}
                </div>
                <hr className="my-4" />
            </div>

            <link
                href="/assets/css/Products.css"
                rel="stylesheet"
                type="text/css"
            />
            <h3 className="display-5 text-secondary mx-4 my-4">
                Vintage-Stock
            </h3>
            <hr />
            <div className="mcontainer">
                <div className="mcards">
                    {data.slice(0, 15).map((product) => {
                        return (
                            <div
                                className="mcard"
                                key={product._id}
                                id={product._id}
                                onClick={productDetails}
                            >
                                <img
                                    src={imgUrl + product.productImage}
                                    alt=""
                                    id={product._id}
                                />
                                <h5 className="card-title">
                                    {product.name.toUpperCase()}
                                </h5>
                                <p className="card-text">
                                    {product.description} this is a test site we
                                    are not selling{" "}
                                </p>
                                <button className="btn " id={product._id}>
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
export default Home;
