import { Chapter_Title } from "../About/About";
import { useState } from 'react';
import { Bestsellers_Products } from "../Bestsellers/Bestsellers"; 
import './menu.css'
import { productType} from "../../Types/Types";

export const Menu = () => {

    const [menuChapter, setMenuChapter] = useState(1);
    let universalProduct ={
        descript: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
        price: 2.90,
    }
    const mainDishArray : productType[] = [{...universalProduct, name: 'STEAK', imgSrc: './images/dish-1.jpg'}, {...universalProduct, name: 'BBQ GRILL', imgSrc: './images/dish-2.jpg'}, {...universalProduct, name: 'GRILLED BEEF', imgSrc: './images/dish-3.jpg'}];
    const drinksArray : productType[] = [{...universalProduct, name: 'LEMONADE JUICE', imgSrc: './images/drink-1.jpg'}, {...universalProduct, name: 'PINEAPPLE JUICE', imgSrc: './images/drink-2.jpg'}, {...universalProduct, name: 'SODA DRINKS', imgSrc: './images/drink-3.jpg'}];
    const dessertsArray : productType[] = [{...universalProduct, name: 'HOT CAKE HONEY', imgSrc: './images/dessert-1.jpg'}, {...universalProduct, name: 'pancakes & seasonal berries', imgSrc: './images/dessert-2.jpg'}, {...universalProduct, name: 'fruit tartalete', imgSrc: './images/dessert-3.jpg'}];

    const changeActiveButton = (e:  React.MouseEvent<HTMLButtonElement>) => {
        let btnsArray = document.querySelectorAll('.menu_btn');
        if(btnsArray.length>0)
        btnsArray.forEach(item => item.classList.remove('_active'));
        (e.target as HTMLButtonElement).classList.add('_active');       
    }
    return (
        <div className="section_div">
            <div className="menu_wrapper">
                <Chapter_Title title="Discover" subTitle="Our Products"/>
                <p className="chapter_description">Far far away, behind the word mountains, far from the countries <br /> Vokalia and Consonantia, there live the blind texts.</p>
                <div className="menu_block">
                    <div className="menu_nav">
                        <button className='menu_btn _active' onClick={(e)=>{changeActiveButton(e); setMenuChapter(1); }}>Main Dish</button>
                        <button className='menu_btn' onClick={(e)=>{changeActiveButton(e); setMenuChapter(2); }}>Drinks</button>
                        <button className='menu_btn' onClick={(e)=>{changeActiveButton(e); setMenuChapter(3); }}>Desserts</button>
                    </div>
                    <div className="menu_products">
                        {menuChapter===1 && <Bestsellers_Products allProductData={mainDishArray}/>}
                        {menuChapter===2 && <Bestsellers_Products allProductData={drinksArray}/>}
                        {menuChapter===3 && <Bestsellers_Products allProductData={dessertsArray}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}