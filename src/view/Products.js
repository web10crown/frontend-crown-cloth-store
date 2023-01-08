import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Products() {
  const imgUrl = "https://crown-cloth-store-api.onrender.com/images/";
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://crown-cloth-store-api.onrender.com/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const productDetails = (e) => {
    let id = e.target.id;
    navigate(`/product/${id}`);
  };

  return (
    <>
      <link href="/assets/css/Products.css" rel="stylesheet" type="text/css" />
      <div className="mcontainer">
        <div className="mcards">
          {data.slice(0, 15).map((product) => {
            return (
              <div className="mcard" key={product._id} onClick={productDetails}>
                <img
                  src={imgUrl + product.productImage}
                  alt=""
                  id={product._id}
                />
                <h3>{product.name}</h3>
                <p>{product.description} this is a test site from crown </p>
                <button className="btn " id={product._id}>
                  shop ${product.price}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="my-3" />
      <h3 className="mx-4 my-3">Men's Fashion</h3>
      <div className="mgrid">
        {data
          .slice(0, 12)
          .filter((p) => {
            return p.genderType === "M";
          })
          .map((p) => (
            <div className="gcontent" key={p._id} onClick={productDetails}>
              <img src={imgUrl + p.productImage} alt="" id={p._id} />
            </div>
          ))}
      </div>
      <hr className="my-3" />

      <h3 className="mx-4 my-3">Woomen Fashion</h3>
      <div className="mgrid">
        {data
          .slice(0, 12)
          .filter((p) => {
            return p.genderType === "F";
          })
          .map((p) => (
            <div className="gcontent" key={p._id} onClick={productDetails}>
              <img src={imgUrl + p.productImage} alt="" id={p._id} />
            </div>
          ))}
      </div>
      <h3 className="mx-4 my-3">Jackets</h3>
      <div className="mgrid">
        {data
          .slice(0, 12)
          .filter((p) => {
            return p.clothType === "jacket";
          })
          .map((p) => (
            <div className="gcontent" key={p._id} onClick={productDetails}>
              <img src={imgUrl + p.productImage} alt="" id={p._id} />
            </div>
          ))}
      </div>
      <h3 className="mx-4 my-3">Jeans</h3>
      <div className="mgrid">
        {data
          .slice(0, 12)
          .filter((p) => {
            return p.clothType === "jeans";
          })
          .map((p) => (
            <div className="gcontent" key={p._id} onClick={productDetails}>
              <img src={imgUrl + p.productImage} alt="" id={p._id} />
            </div>
          ))}
      </div>
      <h3 className="mx-4 my-3">shirts</h3>
      <div className="mgrid">
        {data
          .slice(0, 12)
          .filter((p) => {
            return p.clothType === "shirt";
          })
          .map((p) => (
            <div className="gcontent" key={p._id} onClick={productDetails}>
              <img src={imgUrl + p.productImage} alt="" id={p._id} />
            </div>
          ))}
      </div>
      <h3 className="mx-4 my-3">explore More</h3>
      <div className="mgrid">
        {data.map((p) => (
          <div className="gcontent" key={p._id} onClick={productDetails}>
            <img src={imgUrl + p.productImage} alt="" id={p._id} />
          </div>
        ))}
      </div>
    </>
  );
}
export default Products;
