const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Show Tracker</h1>
            <div className="links">
                <a href="/create" style ={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>Home</a>
            </div>
        </nav>
     );
}
 
export default Navbar;