import { useState } from 'react';
import './AddProduct.css';

function AddProduct() {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState(['Electronics', 'Clothing', 'Books']); // Default categories

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle product submission (e.g., send to backend)
    const productData = {
      name: productName,
      description,
      price,
      category: newCategory || category,
      image,
    };
    console.log('Product submitted:', productData);
    // Reset form
    resetForm();
  };

  const resetForm = () => {
    setProductName('');
    setDescription('');
    setPrice('');
    setCategory('');
    setNewCategory('');
    setImage(null);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Save selected image file
  };

  const addCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]); // Add new category to the list
      setCategory(newCategory); // Set the new category as selected
      setNewCategory(''); // Clear input
    }
  };

  return (
    <div className="add-product-container">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="newCategory">Add New Category:</label>
          <input
            type="text"
            id="newCategory"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button type="button" onClick={addCategory}>Add Category</button>
        </div>
        <div className="form-group">
          <label htmlFor="image">Product Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" className="submit-button">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
