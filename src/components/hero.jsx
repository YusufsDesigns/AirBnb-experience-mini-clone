import '../style.css';
import HeroImg from '../assets/hero.png'

export default function Hero(){
    return(
        <div className='hero'>
            <div>
                <div className='hero-img'>
                    <img src={HeroImg} alt="" />
                </div>
                <h2>Online Experiences</h2>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}