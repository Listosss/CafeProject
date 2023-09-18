import './header.css';
import { HeaderSwiper } from './HeaderSwiper';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { storeType } from '../../Store';


const ShoppingCart = () => {

    const count = useSelector<storeType, number>((state) => state.ordersNum );
    
    return (
        <NavLink to='/shopping'><div className='shopping_cart_div' ><a href='#' className='shopping_cart_nav' /><h1>{count}</h1></div></NavLink>
    )
}

export const NavBar = () => {
    return (
        <div id='nav-container'>
            <div id='nav-container-wrapper'>
                <NavLink to='/' className='navlink navbar-brand' >COFFEE<br /><small>BLEND</small></NavLink>
                <div className='hidden_menu_nav'>
                    <ShoppingCart />
                    <div className="menu_icon">
                        <span></span>
                    </div>
                </div>
                <div className='navbar-nav'>
                    <NavLink to='/' className={({isActive}) => isActive? 'active-navlink': 'navlink'}>HOME</NavLink>
                    <NavLink to='/menu' className={({isActive}) => isActive? 'active-navlink': 'navlink'}>MENU</NavLink>
                    <NavLink to='/services' className={({isActive}) => isActive? 'active-navlink': 'navlink'}>SERVICES</NavLink>
                    <NavLink to='/blog' className={({isActive}) => isActive? 'active-navlink': 'navlink'}>BLOG</NavLink>
                    <NavLink to='/about' className={({isActive}) => isActive? 'active-navlink': 'navlink'}>ABOUT</NavLink>
                    <NavLink to='/shop' className={({isActive}) => isActive? 'active-navlink': 'navlink'}>SHOP</NavLink>
                    <NavLink to='/contact' className={({isActive}) => isActive? 'active-navlink': 'navlink'}>CONTACT</NavLink>
                    <ShoppingCart />
                </div>
            </div>
        </div>)
}

export const HeaderSwiperText = ({ title, subTitle }: { title: string, subTitle: string }) => {
    return (
        <div className='headerSwiper-container'>
            <p className='welome-slider-text'>Welcome</p>
            <h1 className='title-slider-text'>{title}</h1>
            <p className='subtitle-slider-text'>{subTitle}</p>
            <div className='headerSwiper-btn-container'>
                <div className='order-button'><p>Order Now</p></div>
                <div className='view-menu-button'><p>View Menu</p></div>
            </div>
        </div>
    )
}

export const Header = () => {

    useEffect(() => {
        const menuIcon = document.querySelector('.menu_icon') as HTMLElement;
        let menuBody = document.querySelector('.navbar-nav') as HTMLElement;

        menuIcon.addEventListener('click', () => {
            menuBody.classList.toggle('_active')
        })

        const menuLinks = document.querySelectorAll('.nav-item');
        let onMenuClickLink = (e: Event) => {
            if (menuBody.classList.contains('_active')) {
                menuBody.classList.remove('_active');
            }
            e.preventDefault();
        }


        if (menuLinks.length > 0) {
            for (let index = 0; index < menuLinks.length; index++) {
                const menuArrow = menuLinks[index];
                menuArrow.addEventListener('click', onMenuClickLink);
            }
        }
    }, []);


    return (<>
        <NavBar />
        <HeaderSwiper />
    </>)
}