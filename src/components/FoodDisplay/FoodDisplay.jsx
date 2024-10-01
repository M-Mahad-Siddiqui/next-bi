import { useStoreContext } from '../../context/StoreContext'; // Corrected import
import FoodItem from '../FoodItem/FoodItem';
import './foodDisplay.css';

function FoodDisplay({ category }) {
    const { food_list } = useStoreContext();

   return (
    <div className='food-display' id='food-display'>
        <h2>Top Dishes near you</h2>
        {food_list.length > 0 ? (
            <div className='food-display-list'>
                {food_list.map((item, index) => (
                    <FoodItem key={index} item={item} />
                ))}
            </div>
        ) : (
            <p>No food items available.</p>
        )}
    </div>
);
}

export default FoodDisplay;
