import './footer.css';

export const Footer = () => {
    return (
        <div className='footer_container'>
            <div className='footer_container_wrapper'>
                <div className='footer_section fs_1'>
                    <h2 className='footer_text'>ABOUT US</h2>
                    <p className='footer_sub_text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className='footer_social_list'>
                        <div><a href='#' className='twitter_icon' /></div>
                        <div><a href='#' className='inst_icon' /></div>
                        <div><a href='#' className='fb_icon' /></div>
                    </div>
                </div>
                <div className='footer_section fs_2'>
                    <h2 className='footer_text'>RECENT BLOG</h2>
                    <div className='blog_section'>
                        <div><img src='./images/image_1.jpg' /></div>
                        <div className='blog_section_text'>
                            <h1 className='footer_text'>Even the all-powerful Pointing has no control about</h1>
                            <div>
                            <p>Sept 15, 2018</p>
                            <p>Admin</p>
                            <p>19</p>
                        </div>
                        </div>
                        
                    </div>
                    <div className='blog_section'>
                        <div><img src='./images/image_2.jpg' /></div>
                        <div className='blog_section_text'>
                            <h1 className='footer_text'>Even the all-powerful Pointing has no control about</h1>
                            <div>
                                <p>Sept 15, 2018</p>
                                <p>Admin</p>
                                <p>19</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer_section fs_3'>
                    <h2 className='footer_text'>SERVICES</h2>
                    <p className='footer_sub_text'>Cooked</p>
                    <p className='footer_sub_text'>Deliver</p>
                    <p className='footer_sub_text'>Quality Foods</p>
                    <p className='footer_sub_text'>Mixed</p>
                </div>
                <div className='footer_section fs_4'>
                    <h2 className='footer_text'>HAVE A QUESTIONS?</h2>
                    <p className='footer_sub_text'>203 Fake St. Mountain View, San Francisco, California, USA</p>
                    <p >+2 392 3929 210</p>
                    <p>info@yourdomain.com</p>
                </div>
            </div>
        </div>
    )
}