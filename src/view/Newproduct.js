import axios from "axios";
import { useState } from "react";
function NewProduct() {
	// declaring states for input data

	const [Pbrand, setBrand] = useState("");
	const [Pname, setName] = useState("");
	const [Pcolour, setColour] = useState("");
	const [PclothType, setClothType] = useState("");
	const [Pdescription, setDescription] = useState("");
	const [Pquantity, setQuantity] = useState(1);
	const [Psize, setSize] = useState("L");
	const [PgenderType, setGenderType] = useState("M");
	const [Pprice, setPrice] = useState("");
	const [Pimage, setImage] = useState("");

	// functions for setting data
	const Fbrand = (e) => {
		setBrand(e.target.value);
	};
	const Fname = (e) => {
		setName(e.target.value);
	};
	const Fcolour = (e) => {
		setColour(e.target.value);
	};
	const FclothType = (e) => {
		setClothType(e.target.value);
	};
	const Fdescription = (e) => {
		setDescription(e.target.value);
	};
	const Fquantity = (e) => {
		setQuantity(e.target.value);
	};
	const Fsize = (e) => {
		setSize(e.target.value);
	};
	const FgenderType = (e) => {
		setGenderType(e.target.value);
	};
	const Fprice = (e) => {
		setPrice(e.target.value);
	};
	const Fimage = (e) => {
		setImage(e.target.files[0]);
	};
	// Submit function start here
	const SubmitData = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		const _id = Date.now();
		formData.append("_id", _id);
		formData.append("brand", Pbrand);
		formData.append("name", Pname);
		formData.append("colour", Pcolour);
		formData.append("clothType", PclothType);
		formData.append("description", Pdescription);
		formData.append("quantity", Pquantity);
		formData.append("size", Psize);
		formData.append("genderType", PgenderType);
		formData.append("price", Pprice);
		formData.append("productImage", Pimage);

		const result = await axios.post(
			"https://crown-cloth-store-api.onrender.com/newproduct",
			formData,
			{
				headers: {
					"Content-Type": "multipart/form-data",
				},
			}
		);
		console.log(result.data);
	};

	return (
		<div className="container">
			<div className="jumbotron my-3">
				<form onSubmit={SubmitData} encType="multipart/form-data">
					<div className="form-row">
						<div className="form-group col-md-6">
							<label htmlFor="text">Brand</label>
							<input
								type="text"
								className="form-control"
								id="brand"
								placeholder="Enter the brand name"
								onChange={Fbrand}
								required
							/>
						</div>
						<div className="form-group col-md-6">
							<label htmlFor="text">Name</label>
							<input
								type="text"
								className="form-control"
								id="name"
								placeholder="Enter the product name"
								onChange={Fname}
								required
							/>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="text">Colour</label>
						<input
							type="text"
							className="form-control"
							id="colour"
							placeholder="Enter the color like black,green etc.."
							onChange={Fcolour}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="text">Cloth Type</label>
						<input
							type="text"
							className="form-control"
							id="clothType"
							placeholder="Enter the type like shirt,shorts,jeans etc.."
							onChange={FclothType}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="text">Description</label>
						<input
							type="text"
							className="form-control"
							id="description"
							placeholder="Enter description"
							onChange={Fdescription}
							required
						/>
					</div>
					<div className="form-row">
						<div className="form-group col-md-6">
							<label htmlFor="quantity">Quantity</label>
							<input
								type="number"
								className="form-control"
								id="quantity"
								value={Pquantity}
								onChange={Fquantity}
								min="1"
								required
							/>
						</div>
						<div className="form-group col-md-2">
							<label htmlFor="text">Size</label>
							<select
								id="Size"
								className="form-control"
								onChange={Fsize}
								value={Psize}
								required
							>
								<option>M</option>
								<option>S</option>
								<option>L</option>
								<option>XL</option>
								<option>XXL</option>
							</select>
						</div>
						<div className="form-group col-md-2">
							<label htmlFor="text">Gender Type</label>
							<select
								className="form-control"
								id="genderType"
								onChange={FgenderType}
								value={PgenderType}
								required
							>
								<option>M</option>
								<option>F</option>
							</select>
						</div>
						<div className="form-group col-md-2">
							<label htmlFor="price">Price in $</label>
							<input
								type="number"
								className="form-control"
								id="price"
								value={Pprice}
								onChange={Fprice}
								min="0"
								required
							/>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="file">Select Image file</label>
						<input
							className="form-control-file"
							name="productImage"
							type="file"
							onChange={Fimage}
							required
						></input>
					</div>

					<button type="submit" className="btn btn-success">
						Submit product details
					</button>
				</form>
			</div>
			<hr className="my-3" />
		</div>
	);
}
export default NewProduct;
