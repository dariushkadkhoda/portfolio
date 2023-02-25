import './header.css'
import HeaderImage from '../../assets/image/men.jpg'
import data from '../header/data';

const Header = () => {
    return (
        <header id="header">
            <div className="container header__container">
                <div className="header__profile">
                    <img src={HeaderImage} alt="header_profile" />
                </div>
                <h3>Dariush Kadkhoda</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta magnam placeat mollitia! Labore, fuga quibusdam
                    possimus reprehenderit laborum fugitpossimus reprehenderit laborum fugit
                </p>
                <div className="header__cta">
                    <a href="#contact" className='btn primary'>Let`s Talk</a>
                    <a href="#portfolio" className='btn light'>My work</a>
                </div>
                <div className='header__socials'>
                    {
                        data.map(item => <a key={item.id} href={item.link} target="_blank" rel='noopener noreferrer'>{item.icon}</a>)
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;
