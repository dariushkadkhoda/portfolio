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
                <p>با ساختن وب سایت یا برنامه وب رویایی خود یک کلیک فاصله دارید. امروز جزییات پروژه خود را برای یک وب سایت مدرن، واکنش گرا و با عملکرد بالا برای من ارسال کنید!
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
