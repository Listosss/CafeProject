import './achievements.css';

export const Achievement_Block = ({ value, ach_name }: { value: string, ach_name: string }) => {
    return (
        <div className='achment_container'>
            <div className='achment_icon'>
                <div className='achment_icon_square'>
                    
                </div>
                <span className='coffee_icon'></span>
            </div>
            <h1>{value}</h1>
            <p>{ach_name}</p>
        </div>
    )
}
export const Achievements = () => {
    return (
        <div className='achievements_blocks'>
            <div className='achievements_wrapper'>
                <div className='achievements_row'>
                    <Achievement_Block value='100' ach_name='Coffee Brunches' />
                    <Achievement_Block value='85' ach_name='Number of Awards' />
                    <Achievement_Block value='10,567' ach_name='Happy Customers' />
                    <Achievement_Block value='900' ach_name='Staff' />
                </div>
            </div>
        </div>
    )
}