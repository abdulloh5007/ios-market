import './Footer.scss';

import logo from '../../assets/logo.svg';

function Footer() {
  return (
    <section id='footer' className='footer'>
      <div>
        <img src={logo} alt="logo" />
        <p className='txt'>Sign up for texts to be notified about our best offers on the perfect gifts.</p>
      </div>
      <div>
        <b>All products</b>
        <a href="#">Phones</a>
        <a href="#">Watch</a>
        <a href="#">Tablet</a>
        <a href="#">Laptops</a>
      </div>
      <div>
        <b>Company</b>
        <a href="#">About</a>
        <a href="#">Support</a>
      </div>
      <div>
        <b>Support</b>
        <a href="#">Style Guide</a>
        <a href="#">Licensing</a>
        <a href="#">Change Log</a>
        <a href="#">Contact</a>
      </div>
      <div>
        <b>Follow Us</b>
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">Linkedin</a>
        <a href="#">Youtube</a>
      </div>
    </section>
  )
}

export default Footer