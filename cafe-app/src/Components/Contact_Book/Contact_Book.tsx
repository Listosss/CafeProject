import { json } from 'stream/consumers';
import './contacts_book.css';
import { useState, useEffect } from 'react';

const Contacts_Text_Block = ({ title, subtitle, icon_class }: { title: string, subtitle: string, icon_class: string }) => {

    return (
        <div className='contacts_icon_text_container'>
            <div className={`icon ${icon_class}`}><span></span></div>
            <div className='contacts_text_container'>
                <h1 className='contacts_title'>{title}</h1>
                <p className='contacts_subtitle'>{subtitle}</p>
            </div>
        </div>)
}

const Booking_Form = () => {

    interface bookData {
        firstName: string,
        lastName: string,
        date: string,
        time: string,
        phone: string,
        message: string,
    }
    const [userBookData, setUserBookData] = useState<bookData>((sessionStorage.getItem('userBookData')) ? (JSON.parse(sessionStorage.getItem('userBookData') as string)) : { firstName: '', lastName: '', date: ' ', time: '', phone: '', message: '' })
    useEffect(() => {
        sessionStorage.setItem('userBookData', JSON.stringify(userBookData));
    }, [userBookData]);


    const submitBookingForm = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        setUserBookData({ firstName: '', lastName: '', date: '', time: '', phone: '', message: '' });
        sessionStorage.removeItem('userBookData');

        e.preventDefault();
        const sentDataMessage = document.getElementById('success_sent_window');
        sentDataMessage?.classList.add('_active');
    }
    return (<div className='book_container'>
        <div className='book_container_wrapper'>
            <h1>Book a table</h1>
            <form className='booking_form' action='#'>
                <div>
                    <input type='text' placeholder='First Name' className='long_input' value={userBookData.firstName} onChange={(e) => setUserBookData({ ...userBookData, firstName: e.target.value })} />
                    <input type='text' placeholder='Last Name' className='long_input' value={userBookData.lastName} onChange={(e) => setUserBookData({ ...userBookData, lastName: e.target.value })} />
                </div>
                <div>
                    <input type='text' placeholder='Date' onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} className='short_input' value={userBookData.date} onChange={(e) => setUserBookData({ ...userBookData, date: e.target.value })} />
                    <input type='text' placeholder='Time' className='short_input' value={userBookData.time} onChange={(e) => setUserBookData({ ...userBookData, time: e.target.value })} />
                    <input type='text' placeholder='Phone' className='short_input' value={userBookData.phone} onChange={(e) => setUserBookData({ ...userBookData, phone: e.target.value })} />
                </div>
                <div>
                    <textarea placeholder='Message' rows={2} className='long_input' value={userBookData.message} onChange={(e) => setUserBookData({ ...userBookData, message: e.target.value })}></textarea>
                    <input type='submit' className='long_input submit_button' value='Appointment' onClick={(e) => submitBookingForm(e)} />
                </div>
            </form>
        </div>
    </div>
    )
}


export const Contacts_Book = () => {
    return (
        <div id='contacts_book_container'>
            <div id='success_sent_window'>
                <h1>Booking details sent successfully!<br />Wait for a call</h1>
                <button onClick={()=>{ const sentDataMessage = document.getElementById('success_sent_window'); sentDataMessage?.classList.remove('_active');}}>Ok, thank you</button>
            </div>
            <div className='contacts_block'>
                <div className='contacts_block_wrapper'>
                    <Contacts_Text_Block title='000 (123) 456 7890' icon_class='icon_call' subtitle='A small river named Duden flows by their place and supplies.' />
                    <Contacts_Text_Block title='198 West 21th Street' icon_class='icon_location' subtitle='203 Fake St. Mountain View, San Francisco, California, USA' />
                    <Contacts_Text_Block title='Open Monday-Friday' icon_class='icon_clock' subtitle='8:00am - 9:00pm' />
                </div>
            </div>
            <Booking_Form />
        </div>
    )
}