import "./Fullmenu.css"
import { Link} from 'react-router-dom';

const Fullmenu = () => {
	return(
		<div>
			<div className="toolBarContainer">
				<Link to="/Home">Home</Link>
				<Link to="/About">About</Link>
				<Link to="/Posts">Posts</Link>
				<Link to="/Contact">Contact</Link>
			</div>
		</div>
	); 
};

export default Fullmenu;