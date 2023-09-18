import './reviews.css';
import { Chapter_Title } from '../About/About';

export const Review_Block = ({ review_text, author_name, author_job, color, imgUrl }: { review_text: string, author_name: string, author_job: string, color: string, imgUrl: string }) => {

    let backgrStyle = {
        backgroundColor: color,
    }
    let authorImg = {
        backgroundImage: `url(${imgUrl})`,
    }

    return (
        <div className='rev_block' style={backgrStyle}>
            <p>{review_text}</p>
            <div className='author_review_info'>
                <div className='author_review_img' style={authorImg}></div>
                <div className='author_review_name'>
                    <h1>{author_name}</h1>
                    <p>{author_job}</p>
                </div>
            </div>
        </div>)
}


export const Reviews = () => {
    return (
        <div className='reviews_section'>
            <div className='reviews_section_wrapper'>
                <Chapter_Title title='Testimony' subTitle='Customers Says' />
                <p className="chapter_description review_section_descr">Far far away, behind the word mountains, far from the countries <br /> Vokalia and Consonantia, there live the blind texts.</p>
                <div className='reviews_flex'>
                    <Review_Block review_text='“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”'
                        author_name='Louise Kelly' author_job='Illustrator Designer' color='#c49b63' imgUrl='./images/person_1.jpg' />
                    <Review_Block review_text='“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.”'
                        author_name='Louise Kelly' author_job='Illustrator Designer' color='#a88858' imgUrl='./images/person_2.jpg' />
                    <Review_Block review_text='“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name. ”'
                        author_name='Louise Kelly' author_job='Illustrator Designer' color='#c49b63' imgUrl='./images/person_3.jpg' />
                    <Review_Block review_text='“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however.”'
                        author_name='Louise Kelly' author_job='Illustrator Designer' color='#a88858' imgUrl='./images/person_2.jpg' />
                    <Review_Block review_text='“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name. ”'
                        author_name='Louise Kelly' author_job='Illustrator Designer' color='#c49b63' imgUrl='./images/person_1.jpg' />
                </div>
            </div>
        </div>)
}