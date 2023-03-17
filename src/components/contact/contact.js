
import './style.css';
export default function Contact() {
    return (
        <section className="contact-me" id="connect">
            <h2 className="section-title mt-5 text-center">
                Connect with Us!
            </h2>
            <hr />
            <div id="contact-details" className="text-center pt-3 pb-4">
                <a href="#home" className="d-block bg-accent h4">Trade Wars</a>
                <a href="" className="d-block bg-accent h4"></a>
                <a href="mailto:baz.hardacre@gmail.com" className="d-block bg-accent h4"></a>
                <hr />
                <h3 className="mb-3">Follow me on GitHub and LinkedIn</h3>
                <div id="social-icons" className="justify-content-center">
                    <a href="https://github.com/bhar88" className="bg-accent" target="_blank">
                        <i className="fab fa-github h2 mr-3 mb-0"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/barry-hardacre-a18921224/" className="bg-accent" target="_blank">
                        <i className="fab fa-linkedin h2 mr-3 mb-0"></i>
                    </a>
                </div>
            </div>
        </section>

    );
}
 