import { Link} from 'react-router-dom';
import "./Hamburger.css"

const Hamburger = () => {
	return(
		<div class="hamburger-menu">
			<input id="menu__toggle" type="checkbox" />
			<label class="menu__btn" for="menu__toggle">
			<span></span>
			</label>

			<ul class="menu__box">
				<li>
					<Link to="/home" className="menu__item">Home</Link>
				</li>
				<li>
					<Link to="/about" className="menu__item">About</Link>
				</li>
				<li>
					<Link to="/posts" className="menu__item">Posts</Link>
				</li>
				<li>
					<Link to="/contact" className="menu__item">Contact</Link>
				</li>
			</ul>
		</div>

	); 
};

export default Hamburger;