import './services.css';

const Services_Block = ({ title, subtitle, iconType }: { title: string, subtitle: string, iconType: string }) => {
    return (
        <div className='services_block'>
            <div className={iconType}></div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>)
}
export const Services = () => {
    let subTitleText = 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.';
    return (
        <div className='services_container'>
            <div className='services_container_wrapper'>
                <Services_Block title='Easy to Order' subtitle={subTitleText} iconType='choice_icon' />
                <Services_Block title='Fastest Delivery' subtitle={subTitleText} iconType='delivery_icon' />
                <Services_Block title='Quality Coffee' subtitle={subTitleText} iconType='coffee_beans_icon' />
            </div>
        </div>)
}