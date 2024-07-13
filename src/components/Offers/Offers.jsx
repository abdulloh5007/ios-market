import './Offers.scss';

import laptop from '../../assets/laptop.png';
import watch from '../../assets/watch.png';
import phone from '../../assets/phone.png';
import tablet from '../../assets/tablet.png';

function Offers() {
    return (
        <section id='offers' className='offers'>
            <div className="top">
                <b>Shop our latest offers and categories</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="cards">
                <div className="left">
                    <div className="card laptop">
                        <img src={laptop} alt="laptop" />
                        <div className="txt">
                            <b>Laptops</b>
                            <p>True Laptop Solution</p>
                        </div>
                    </div>
                    <div className="card watch">
                        <img src={watch} alt="watch" />
                        <div className="txt">
                            <b>Watch</b>
                            <p>Not just stylisht</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="card phone">
                        <img src={phone} alt="phone" />
                        <div className="txt">
                            <b>Phones</b>
                            <p>Your day to day life</p>
                        </div>
                    </div>
                    <div className="card tablet">
                        <div className="txt">
                            <b>Tablet</b>
                            <p>Empower your work</p>
                        </div>
                        <img src={tablet} alt="tablet" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offers