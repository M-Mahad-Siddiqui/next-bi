// import { useState } from "react";
// import { useStoreContext } from "../../context/StoreContext";
// import { useFireContext } from "../../context/FireContext";
// import "./placeOrder.css";

// export default function PlaceOrder() {
// 	const { getTotalCartAmount } = useStoreContext();
// 	const { addUserInfo, loading } = useFireContext();

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		addUserInfo(formValues);
// 		handleReset();
// 	};

// 	const handleReset = () => {
// 		setFormValues({
// 			firstName: "",
// 			lastName: "",
// 			email: "",
// 			street: "",
// 			city: "",
// 			state: "",
// 			zipCode: "",
// 			country: "",
// 			phone: "",
// 		});
// 	};

// 	// Manage form input values in an object
// 	const [formValues, setFormValues] = useState({
// 		firstName: "",
// 		lastName: "",
// 		email: "",
// 		street: "",
// 		city: "",
// 		state: "",
// 		zipCode: "",
// 		country: "",
// 		phone: "",
// 	});

// 	// Handle change for form inputs
// 	const handleInputChange = (e) => {
// 		const { name, value } = e.target;
// 		setFormValues({
// 			...formValues,
// 			[name]: value,
// 		});
// 	};

// 	console.log(formValues);

// 	return (
// 		<form className="placeOrder" onSubmit={handleSubmit}>
// 			<div className="place-order-left">
// 				<p className="title">Delivery Information</p>
// 				<div className="multi-fields">
// 					<input
// 						name="firstName"
// 						value={formValues.firstName}
// 						onChange={handleInputChange}
// 						type="text"
// 						placeholder="First Name"
// 					/>
// 					<input
// 						name="lastName"
// 						value={formValues.lastName}
// 						onChange={handleInputChange}
// 						type="text"
// 						placeholder="Last Name"
// 					/>
// 				</div>
// 				<input name="email" value={formValues.email} onChange={handleInputChange} type="email" placeholder="Email Address" />
// 				<input name="street" value={formValues.street} onChange={handleInputChange} type="text" placeholder="Street" />
// 				<div className="multi-fields">
// 					<input name="city" value={formValues.city} onChange={handleInputChange} type="text" placeholder="City" />
// 					<input name="state" value={formValues.state} onChange={handleInputChange} type="text" placeholder="State" />
// 				</div>
// 				<div className="multi-fields">
// 					<input name="zipCode" value={formValues.zipCode} onChange={handleInputChange} type="text" placeholder="Zip Code" />
// 					<input name="country" value={formValues.country} onChange={handleInputChange} type="text" placeholder="Country" />
// 				</div>
// 				<input name="phone" value={formValues.phone} onChange={handleInputChange} type="text" placeholder="Phone" />
// 			</div>

// 			<div className="place-order-right">
// 				<div className="cart-total">
// 					<h2>Cart Totals</h2>
// 					<div>
// 						<div className="cart-total-details">
// 							<p>Subtotal</p>
// 							<p>${getTotalCartAmount()}</p>
// 						</div>
// 						<hr />
// 						<div className="cart-total-details">
// 							<p>Delivery Fee</p>
// 							<p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
// 						</div>
// 						<hr />
// 						<div className="cart-total-details">
// 							<b>Total</b>
// 							<b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
// 						</div>
// 					</div>
// 					<button type="submit">{loading ? "Loading..." : "PROCEED TO PAYMENTS"}</button>
// 				</div>
// 			</div>
// 		</form>
// 	);
// }

// 2 apprach is to use better way to submit form using form data object
import { useFireContext } from "../../context/FireContext";
import { useStoreContext } from "../../context/StoreContext";
import "./placeOrder.css";

export default function PlaceOrder() {
  const { getTotalCartAmount } = useStoreContext();
  const { addUserInfo, loading } = useFireContext();

  // Use FormData to collect input values
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      street: formData.get("street"),
      city: formData.get("city"),
      state: formData.get("state"),
      zipCode: formData.get("zipCode"),
      country: formData.get("country"),
      phone: formData.get("phone")
    };

    addUserInfo(data);
    e.target.reset(); // Reset the form fields after submission
  };

  return (
    <form  className = "placeOrder" onSubmit = {handleSubmit}>
    <div   className = "place-order-left">
    <p     className = "title">Delivery Information</p>
    <div   className = "multi-fields">
    <input name      = "firstName" type      = "text" placeholder = "First Name" required />
    <input name      = "lastName" type       = "text" placeholder = "Last Name" required />
        </div>
        <input name      = "email" type  = "email" placeholder = "Email Address" required />
        <input name      = "street" type = "text" placeholder  = "Street" required />
        <div   className = "multi-fields">
        <input name      = "city" type   = "text" placeholder  = "City" required />
        <input name      = "state" type  = "text" placeholder  = "State" required />
        </div>
        <div className="multi-fields">
          <input name="zipCode" type="text" placeholder="Zip Code"  required/>
          <input name="country" type="text" placeholder="Country" required/>
        </div>
        <input name = "phone" type = "text" placeholder = "Phone" required/>
      </div>

      {/* cart totals */}
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type="submit">{loading ? "Loading..." : "PROCEED TO PAYMENTS"}</button>
        </div>
      </div>
    </form>
  );
}
