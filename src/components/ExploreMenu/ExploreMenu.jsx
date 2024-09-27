import { menu_list } from '../../assets/assets'
import './ExploreMenu.css'

export default function ExploreMenu({ category, setCategory }) {



    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our Menu</h1>
            <p className='explore-menu-text'>Choose from a diverse collection of delicious array of dishes and drinks with the finest ingredients and culinary expertise. Our mission is to satisfy our customers with quality food and make food accessible to all.</p>
            <div className='explore-menu-list' >
                {menu_list.map((item, index) => {
                    return (
                        <div className='explore-menu-list-item' onClick={() => setCategory(pre => (pre === item.menu_name ? 'All' : item.menu_name))} key={index}>
                            <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} alt={item.menu_name} />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}
