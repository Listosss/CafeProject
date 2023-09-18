import { Chapter_Title } from "../About/About";
import { productType} from "../../Types/Types";
import {useDispatch} from 'react-redux';
import './bestsellers.css';


const Product = ({ productData }: { productData: productType}) => {

    const dispatch = useDispatch();

    const addToShoppingCart = () =>{
        dispatch({type: 'add', payload: {...productData, count: 1}});
        dispatch({type: 'increment', payload: 1});
    }
    return (
        <div className="product_container">
            <div className="product_img"><img src={productData.imgSrc} /></div>
            <h1 className="product_name">{productData.name}</h1>
            <p className="product_descript chapter_description">{productData.descript}</p>
            <p className="product_price">{'$'+ productData.price }</p>
            <button className="orange_btn add_product_btn" onClick={addToShoppingCart}>Add to Cart</button>
        </div>
    )
}

export const Bestsellers_Products = ({ allProductData }: { allProductData: productType[]}) => {
    return (<>{
        allProductData.map((item, index) => { return <Product productData={item} key={index}/> })}
    </>)


}

export const Bestsellers = () => {

    const productsArray: productType[] = [];
    const imageSrcArray : string[] = ['./images/menu-1.jpg', './images/menu-2.jpg', './images/menu-3.jpg', './images/menu-4.jpg'];
    const coffeeNameArray: string[] = ['Mochaccino','Cinnamon Coffee','Espresso Tonic','Coffee Capuccino'];
        for (let index = 0; index < 4; index++) {
            productsArray.push({ name: coffeeNameArray[index],
            imgSrc: imageSrcArray[index],
            descript: 'A small river named Duden flows by their place and supplies',
            price: 5.90})       
        }

    return (
        <div className="section_div">
            <div className="best_sellers_wrapper">
                <Chapter_Title title="Discover" subTitle="Best Coffee Sellers"/>
                <p className="chapter_description">Far far away, behind the word mountains, far from the countries <br /> Vokalia and Consonantia, there live the blind texts.</p>
                <div className="all_product_flex_container">
                    <Bestsellers_Products allProductData={productsArray} />
                </div>
            </div>
        </div>
    )
}


