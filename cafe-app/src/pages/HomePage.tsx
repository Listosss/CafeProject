import { Contacts_Book } from '../Components/Contact_Book/Contact_Book';
import { About } from '../Components/About/About';
import { Services } from '../Components/Services/Services';
import { Menu_Info } from '../Components/Menu_Info/Menu_Info';
import { Achievements } from '../Components/Achievements/Achievements';
import { Bestsellers } from '../Components/Bestsellers/Bestsellers';
import { Gallery } from '../Components/Gallery/Gallery';
import { Menu } from '../Components/Menu/Menu';
import { Reviews } from '../Components/Reviews/Reviews';
import { createContext, useState } from 'react';


export const OrdersContext = createContext([]);
export const setOrdersContext = createContext((a: any) => { });

export const HomePage = () => {
    const [orders, setOrders] = useState([]);

    /* useEffect(()=>{
    localStorage.setItem('buyingProoducts', JSON.stringify(orders));
    }, [orders]);*/

    return (
        <>
            <Contacts_Book />
            <About />
            <Services />
            <Menu_Info />
            <Achievements />         
            <Bestsellers />
            <Gallery />
            <Menu />
            <Reviews />
        </>
    )
}