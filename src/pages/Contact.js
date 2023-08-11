const Contact = () => {
    return (
        <div>
                <div className="container">
                    <h2>Get in Touch</h2>
                    <p>If you have any questions or inquiries, feel free to reach out to us.</p>
                    <form>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                        
						<br></br>
						<br></br>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        
                    </form>
                </div>
                <div className="container">
                    <p>&copy; 2023 Our Business. All rights reserved.</p>
                </div>
        </div>
    );
};

export default Contact;
