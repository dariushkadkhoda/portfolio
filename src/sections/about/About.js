import './about.css'
import aboutImage from '../../assets/image/men.jpg'
import CV from '../../assets/cv/Resume.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
const About = () => {
    return (
        <section id="about">
            <div className="container about__container">
                <div className="about__left">
                    <div className="about__portrait">
                        <img src={aboutImage} alt="AboutImage" />
                    </div>
                </div>
                <div className="about__right">
                    <h2>درباره من</h2>
                    <div className="about__cards">
                        {
                            data.map(item =>(
                                <Card key={item.id} className="about__card">
                                    <span className='about__card-icon'>{item.icon}</span>
                                    <h5>{item.title}</h5>
                                    <small>{item.desc}</small>
                                </Card>
                            ))
                        }
                    </div>
                    <p>پروژه های ساختمانی که مشتریان من دوست دارند همیشه علاقه من بوده است. با بیش از 3 سال حضور در صنعت توسعه وب و خدمت به بیش از 70 مشتری خوشحال در سراسر جهان، همیشه انگیزه انجام کارهای بیشتر را دارم!</p>
                    <p>سلام، اسم داریوش کدخدا است. من یک توسعه دهنده وب با مدرک لیسانس در علوم کامپیوتر هستم. اولویت اصلی من این است که کسب و کار شما را به روش صحیح آنلاین برسانم، به شما طراحی استاندارد صنعتی و تمام عملکردهایی را که برای کار آنلاین به آن نیاز دارید ارائه می دهم. امروز با جزئیات پروژه خود با من تماس بگیرید، بیایید شروع کنیم! رزومه من را در زیر بررسی کنید!</p>
                    <a href={CV} download className='btn primary'>دانلود رزومه <HiDownload/></a>
                </div>
            </div>
        </section>
    );
}

export default About;
