import './menu_info.css';
import { Chapter_Title } from '../About/About';

export const Menu_Info = () => {
    return (
        <div className='menu_info_block'>
            <div className='menu_info_text'>
                <Chapter_Title title='Discover' subTitle='Our Menu' description='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                    there live the blind texts. Separated they live in Bookmarksgrove right at the coast of 
                    the Semantics, a large language ocean'/>
                <div ><a href='#' className='view_menu_btn orange_btn'>View Full Menu</a></div>
            </div>
            <div className='menu_images_grid'>
                <div className='menu_image_wrapper menu_image_wrapper_top'><div className='menu_info_div menu_info_div_1'></div></div>
                <div className='menu_image_wrapper menu_image_wrapper_center'><div className='menu_info_div menu_info_div_2'></div></div>
                <div className='menu_image_wrapper menu_image_wrapper_top'><div className='menu_info_div menu_info_div_3'></div></div>
                <div className='menu_image_wrapper menu_image_wrapper_center'><div className='menu_info_div menu_info_div_4'></div></div>
            </div>
        </div>)
}