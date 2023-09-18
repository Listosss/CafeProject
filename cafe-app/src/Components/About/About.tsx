import './about.css';

export const Chapter_Title = ({ title, subTitle, description }: { title: string, subTitle?: string, description?: string }) => {
    return (<>
        <h1 className='chapter_title'>{title}</h1>
        <h2 className='chapter_subtitle'>{subTitle}</h2>
        <p className='chapter_description'>{description}
        </p></>)
}

export const About = () => {
    return (
        <div className='about_container'>
            <div className='about_container_img'>
            </div>
            <div className='about_text_container'>
                <div className='about_container_wrapper'>
                    <Chapter_Title title='Discover' subTitle='Our Story' description='On her way she met a copy. The copy warned the Little Blind Text, that where it came from it
                        would have been rewritten a thousand times and everything that was left from its origin would be
                        the word "and" and the Little Blind Text should turn around and return to its own, safe country.
                        But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy
                        Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where
                        they abused her for their.'/>                 
                </div>
            </div>
        </div>
    )
}