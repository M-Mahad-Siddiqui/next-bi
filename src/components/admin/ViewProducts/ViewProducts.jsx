import { useEffect, useState } from "react";
import { useFireContext } from "../../../context/FireContext";
import Modal from "./Modal"; // Import the Modal component
import "./ViewProducts.css";

function ViewProducts() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { getProducts, deleteProduct, updateProduct } = useFireContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [getProducts]);

  const handleUpdateProduct = async (updatedProduct) => {
    await updateProduct(updatedProduct.id, updatedProduct);
    const data = await getProducts(); // Refresh the products list
    setProducts(data);
  };

  return (
    <div className="container">
      <h1>View Products</h1>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Product Price</th>
            <th>Product Image</th>
            <th>Product Category</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                {product.image && <img id='product-image' src={product.image} alt={product.name} style={{ width: '100px' }} />}
              </td>
              <td>{product.category}</td>
              <td onClick={() => deleteProduct(product.id)}>🗑️(❌)</td>
              <td onClick={() => {
                setSelectedProduct(product);
                setIsModalOpen(true);
              }}>🔄(✏️)</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
        onUpdate={handleUpdateProduct}
      />
    </div>
  );
}

export default ViewProducts;
