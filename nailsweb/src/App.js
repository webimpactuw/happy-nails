import './app.css';
import { Link } from "react-router-dom"

function App() {
  return (
    <div className="Home">
      <div className="top">
      <Link to="/gallery">
        <button>Gallery</button>
      </Link>
      <Link to="/services">
        <button>Services</button>
      </Link>
      <Link to="/book">
        <button>Book Now</button>
      </Link>
      </div>
      <div className='logo'>HappyNail</div>
      <section className='store-comment'>
        <img src="nails.png" alt="Store"></img>
        <div className='comment-container'>
          <p>Be fresh</p>
          <p>Be bold</p>
          <p>Be Happy</p>
        </div>
      </section>
      <section className='store-comment'>
        <div className='about-me'>
          <div>About me</div>
          <div>text</div>
        </div>
        <img src="nail-shop.png" alt="Store"></img>
      </section>

      <footer>
        <p>store info</p>
        <a href="https://www.freepik.com/free-photo/woman-showing-her-beautiful-nails_10368202.htm">nail photo citation</a>
        <p>store photo from clients</p>
      </footer>

    </div>
  );
}

export default App;
