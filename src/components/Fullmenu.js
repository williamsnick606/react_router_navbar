import "./Fullmenu.css"
import { Link} from 'react-router-dom';

const Fullmenu = () => {
	return(
		<div>
			<div className="toolBarContainer">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/posts">Posts</Link>
				<Link to="/contact">Contact</Link>
			</div>
		</div>
	); 
};

export default Fullmenu;