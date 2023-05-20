import {Link} from "react-router-dom";
const Navbar=()=>{
    return (
        <nav className="navbar">
            <h1>Immersion Program</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Adds">New Student</Link>
            </div>
        </nav>
    );
}
export default Navbar;