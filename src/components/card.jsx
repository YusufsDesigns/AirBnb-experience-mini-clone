import starImg from '../assets/Star.png'

export default function Card(props) {
    let badgeText;
    if(props.openSpots === 0){
        badgeText = 'SOLD'
    } else if(props.location === 'Online'){
        badgeText = 'ONLINE'
    }
    return (
        <div className="card">
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img src={`/dist/images/${props.coverImg}`} className="card-image" />
            <div className="card--stats">
                <img src={starImg} className="card-star" />
                <span className='card-rating'>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount})•</span>
                <span className="gray">{props.location}</span>
            </div>
            <p className='card-title'>{props.title}</p>
            <p className="bold">From ${props.price}<span > / person</span></p>
        </div>
    )
}