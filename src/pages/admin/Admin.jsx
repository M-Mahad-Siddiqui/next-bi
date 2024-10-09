import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Corrected import
import back from '../../assets/back.png';
import AddProduct from '../../components/admin/AddProduct/AddProduct';
import ViewOrder from '../../components/admin/ViewOrder/ViewOrder';
import ViewProducts from '../../components/admin/ViewProducts/ViewProducts';
import ViewUsers from '../../components/admin/ViewUsers/ViewUsers';
import './Admin.css';

// Constants for selected views
const VIEWS = {
  ADD_PRODUCT: 'AddProduct',
  VIEW_ORDER: 'ViewOrder',
  VIEW_USERS: 'ViewUsers',
  VIEW_PRODUCTS: 'ViewProducts',
};

function Admin() {
  const [select, setSelect] = useState('');
  const navigate = useNavigate(); // Correctly using useNavigate

  return (
    <div className='adminBody'>
      <div>
        <div className='header'>
          <img onClick={() => navigate('/')} className='back' src={back} alt="" />
          <h1>Welcome to Admin Panel</h1>
        </div>
        <div className='main'>
          <div className='sidebar'>
            <span onClick={() => setSelect(VIEWS.ADD_PRODUCT)}>Add Product</span>
            <span onClick={() => setSelect(VIEWS.VIEW_ORDER)}>View Orders</span>
            <span onClick={() => setSelect(VIEWS.VIEW_USERS)}>View Users</span>
            <span onClick={() => setSelect(VIEWS.VIEW_PRODUCTS)}>View Products</span>
          </div>
          <div className="body">
            {select === VIEWS.ADD_PRODUCT && <AddProduct />}
            {select === VIEWS.VIEW_ORDER && <ViewOrder />}
            {select === VIEWS.VIEW_PRODUCTS && <ViewProducts />}
            {select === VIEWS.VIEW_USERS && <ViewUsers />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
