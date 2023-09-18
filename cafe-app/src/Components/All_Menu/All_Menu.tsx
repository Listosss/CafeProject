import "./all_menu.css";
import { productType } from "../../Types/Types";

const Menu_Item = ({ product }: { product: productType }) => {
    return (
        <div className="menu_item_wrapper">
            <div><img src={product.imgSrc} /></div>
            <div className="menu_item_info">
                <div className="menu_item_info_header">
                    <h1>{product.name}</h1>
                    <div></div>
                    <p>{'$'+product.price}</p>
                </div>
                <p>{product.descript}</p>
            </div>
        </div>
    )
}

const Menu_Section = ({ products, section_name }: { products: productType[], section_name: string }) => {
    return (
        <div className="menu_section_wrapper">
            <h1 className="section_name">{section_name}</h1>
            {products.map((item, index) => { return <Menu_Item product={item} key={index}/> })}
        </div>
    )
}

export const All_Menu = () => {
    const descript = 'A small river named Duden flows by their place and supplies';

    const starter: productType[] = [
        { name: 'Cornish - Mackerel', descript: descript, imgSrc: './images/dish-1.jpg', price: 20.00},
        { name: 'Roasted Steak', descript: descript, imgSrc: './images/dish-2.jpg', price: 29.00 },
        { name: 'Seasonal Soup', descript: descript, imgSrc: './images/dish-3.jpg', price: 20.00 },
        { name: 'Chicken Curry', descript: descript, imgSrc: './images/dish-4.jpg', price: 20.00 }];

    const main_dish: productType[] = [
        { name: 'Sea Trout', descript: descript, imgSrc: './images/dish-5.jpg', price: 49.91 },
        { name: 'Roasted Beef', descript: descript, imgSrc: './images/dish-6.jpg', price: 20.00 },
        { name: 'Butter Fried Chicken', descript: descript, imgSrc: './images/dish-7.jpg', price: 20.00 },
        { name: 'Chiken Filet', descript: descript, imgSrc: './images/dish-8.jpg', price: 20.00 }];

    const desserts: productType[] = [
        { name: 'Hot Cake Honey', descript: descript, imgSrc: './images/dessert-1.jpg', price: 20.00 },
        { name: 'Roasted Beef', descript: descript, imgSrc: './images/dessert-2.jpg', price: 20.00 },
        { name: 'Butter Fried Chicken', descript: descript, imgSrc: './images/dessert-3.jpg', price: 29.00 },
        { name: 'Chiken Filet', descript: descript, imgSrc: './images/dessert-4.jpg', price: 20.00 }];

    const drinks: productType[] = [
        { name: 'Sea Trout', descript: descript, imgSrc: './images/drink-5.jpg', price: 49.91 },
        { name: 'Roasted Beef', descript: descript, imgSrc: './images/drink-6.jpg', price: 20.00 },
        { name: 'Butter Fried Chicken', descript: descript, imgSrc: './images/drink-7.jpg', price: 20.00 },
        { name: 'Chiken Filet', descript: descript, imgSrc: './images/drink-8.jpg', price: 20.00 }];

    return (
        <div className="all_menu_container">
            <div className="all_menu_wrapper">
                <Menu_Section section_name="starter" products={starter} />
                <Menu_Section section_name="main dish" products={main_dish} />
                <Menu_Section section_name="desserts" products={desserts} />
                <Menu_Section section_name="drinks" products={drinks} />
            </div>
        </div>
    )
}