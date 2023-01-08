function Contact() {
    return (
        <>
            <link rel="stylesheet" href="/assets/css/About.css" />

            <div className="container">
                <section>
                    <div className="image">
                        <img src="https://cdn.pixabay.com/photo/2017/08/26/23/37/business-2684758__340.png" />
                    </div>

                    <div className="content">
                        <h2>Linked In</h2>
                        {/*<span><!-- line here --></span>*/}
                        <p>
                            You can contact me on my Linked in profile elit.
                            Nobis aspernatur voluptas inventore ab voluptates
                            nostrum minus illo laborum harum laudantium earum
                            ut, temporibus fugiat sequi explicabo facilis unde
                            quos corporis!
                        </p>
                        <ul className="links">
                            <li>
                                <a href="#">work</a>
                            </li>
                            <div className="vertical-line"></div>
                            <li>
                                <a href="#">service</a>
                            </li>
                            <div className="vertical-line"></div>
                            <li>
                                <a href="#">contact</a>
                            </li>
                        </ul>
                        <ul className="icons">
                            <li>
                                <i className="fa fa-twitter"></i>
                            </li>
                            <li>
                                <i className="fa fa-facebook"></i>
                            </li>
                            <li>
                                <i className="fa fa-github"></i>
                            </li>
                            <li>
                                <i className="fa fa-pinterest"></i>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            <script
                src="https://kit.fontawesome.com/dbed6b6114.js"
                crossOrigin="anonymous"
            ></script>
        </>
    );
}
export default Contact;
