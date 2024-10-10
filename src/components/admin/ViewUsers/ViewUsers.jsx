import { useEffect, useState } from "react";
import { useFireContext } from "../../../context/FireContext";
import "./ViewUsers.css";

function ViewUsers() {
	const { getUserInfo, loading } = useFireContext();
	const [userInfo, setUserInfo] = useState([]);

	useEffect(() => {
		const fetchUserInfo = async () => {
			try {
				const users = await getUserInfo(); // Await the result
				setUserInfo(users || []); // Fallback to empty array if no users
			} catch (error) {
				console.error("Error fetching user info:", error);
			}
		};

		fetchUserInfo();
	}, [getUserInfo]); // Only run effect when getUserInfo changes

	// if (loading) {
	//   return <div>Loading...</div>;
	// }
	//   loading && <h1> Loading...</h1>;

	return (
		<div className = "view-users">
		<h1  className = "user-heading">Customer Details</h1>
		<div className = "user-title">
				<p>Full Name</p>
				<p>Email Address</p>
				<p>Street</p>
				<p>City</p>
				<p>State</p>
				<p>Zip Code</p>
				<p>Country</p>
				<p>Phone</p>
			</div>
			<br />
			<hr />
			{userInfo.length > 0 ? (
				userInfo.map((user) => (
					<>
						<div className="user-title users-entries" key={user.id}>
							<p>
								{user.firstName} {user.lastName}
							</p>
							<p>{user.email}</p>
							<p>{user.street}</p>
							<p>{user.city}</p>
							<p>{user.state}</p>
							<p>{user.zipCode}</p>
							<p>{user.country}</p>
							<p>{user.phone}</p>
						</div>
						<hr />
					</>
				))
			) : (
				<p>No users found.</p>
			)}
		</div>
	);
}

export default ViewUsers;
