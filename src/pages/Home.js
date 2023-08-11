const Home = () => {
    return (
        <div>
            <header>
                <div>
                    <h1>Welcome to Our Business</h1>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div>
                <div className="container">
                    <h2>Your Trusted Partner in Business</h2>
                    <p>We provide innovative solutions to help your business grow and succeed.</p>
                    <a>Learn More</a>
                </div>
            </div>
            <main>
                <div>
                    <h2>Our Services</h2>
                    <p>Explore the range of services we offer to meet your business needs.</p>
                    <ul>
                        <li>Service 1</li>
                        <li>Service 2</li>
                        <li>Service 3</li>
                    </ul>
                </div>
            </main>
            <footer>
                <div>
                    <p>&copy; 2023 Our Business. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;