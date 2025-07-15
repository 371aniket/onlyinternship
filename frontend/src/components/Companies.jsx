import './Companies.css';
import salesforceLogo from '../assets/Salesforce.com_logo.svg.png';
import spaceXLogo from '../assets/space.png';

const Companies = () => {
    return (
        <div className="companies-page">
            {/* Companies Section */}
            <section className="companies-section">
                <div className="container">
                    <h2>Top Companies Hiring</h2>
                    <div className="companies-strip-container">
                        <div className="openings-counter">
                            <div className="counter-content">
                                <h3>10k+</h3>
                                <p>Openings</p>
                            </div>
                        </div>
                        <div className="companies-strip">
                            {/* First set of companies */}
                            <div className="company-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="Google" />
                                <span>Google</span>
                            </div>
                            <div className="company-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2560px-Microsoft_logo.svg.png" alt="Microsoft" />
                                <span>Microsoft</span>
                            </div>
                            <div className="company-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" alt="Apple" />
                                <span>Apple</span>
                            </div>
                            <div className="company-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="Amazon" />
                                <span>Amazon</span>
                            </div>
                            <div className="company-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png" alt="Meta" />
                                <span>Meta</span>
                            </div>
                            <div className="company-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Netflix" />
                                <span>Netflix</span>
                            </div>
                            <div className="company-item">
                                <img src={spaceXLogo} alt="SpaceX" />
                                <span>SpaceX</span>
                            </div>
                            <div className="company-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" alt="Stripe" />
                                <span>Stripe</span>
                            </div>
                            <div className="company-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="LinkedIn" />
                                <span>LinkedIn</span>
                            </div>
                            <div className="company-item">
                                <img src={salesforceLogo} alt="Salesforce" />
                                <span>Salesforce</span>
                            </div>
                            {/* Duplicate set for seamless loop */}
                            <div className="company-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="Google" />
                                <span>Google</span>
                            </div>
                            <div className="company-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2560px-Microsoft_logo.svg.png" alt="Microsoft" />
                                <span>Microsoft</span>
                            </div>
                            <div className="company-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" alt="Apple" />
                                <span>Apple</span>
                            </div>
                            <div className="company-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="Amazon" />
                                <span>Amazon</span>
                            </div>
                            <div className="company-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png" alt="Meta" />
                                <span>Meta</span>
                            </div>
                            <div className="company-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Netflix" />
                                <span>Netflix</span>
                            </div>
                            <div className="company-item">
                                <img src={spaceXLogo} alt="SpaceX" />
                                <span>SpaceX</span>
                            </div>
                            <div className="company-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" alt="Stripe" />
                                <span>Stripe</span>
                            </div>
                            <div className="company-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="LinkedIn" />
                                <span>LinkedIn</span>
                            </div>
                            <div className="company-item">
                                <img src={salesforceLogo} alt="Salesforce" />
                                <span>Salesforce</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Companies; 