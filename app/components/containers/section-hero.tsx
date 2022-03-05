import { Link } from 'remix';

export default function Hero() {
  return (
    <header className="root-hero">
      <div className="logo-container">
        <Link to="/">
          <img src='/assets/logo.svg' alt="Homepage" />
        </Link>
      </div>
      <div className="hero-container">        
        <div className="content">
          <h1 className="title">Group Chat for Everyone</h1>
          <p className="description">
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <div className="cta-buttons">
            <Link to='/'>Download v1.3</Link>
            <Link to='/'>What is it?</Link>  
          </div>
        </div>        
      </div>
    </header>
  );
}
