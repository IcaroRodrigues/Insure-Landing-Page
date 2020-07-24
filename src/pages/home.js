import React from 'react';

import logo from '../assets/images/logo.svg'
import intro_image from '../assets/images/intro.jpg'
import svg1 from '../assets/images/svg1.svg'
import svg2 from '../assets/images/svg2.svg'
import price from '../assets/images/price.svg'
import people from '../assets/images/people.svg'
import flash from '../assets/images/flash.svg'

import { Container, Header, MainContent, Process, Footer } from './styles'

function App() {
    return (
        <Container>
            <Header>
                <div>
                    <img src={logo} alt={logo} />
                </div>

                <div>
                    <nav>
                        <ul>
                            <li>HOW WE WORK</li>
                            <li>BLOG</li>
                            <li>ACCOUNT</li>
                            <li className="button">VIEW PLANS</li>
                        </ul>
                    </nav>
                </div>
            </Header>

            <MainContent>
                <div className="section">
                    <div>
                        <hr />
                        <h1>Humanizing <br />your insurance.</h1>
                        <p>Get your life insurance coverage easier and faster. We blend our expertise <br /> and technology to help you find the plan that’s right for you. Ensure you <br /> and your loved ones are protected.</p>
                        <button>VIEW PLANS</button>
                    </div>

                    <div>
                        <img src={svg1} alt={svg1} />
                        <img src={intro_image} alt={intro_image} />
                    </div>
                </div>
            </MainContent>

            <Process>
                <div className="process_header">
                    <img src={svg2} alt={svg2} />
                    <hr />
                    <h1>We're different</h1>
                </div>

                <div className="grid_group">

                    <div>
                        <img src={flash} alt={flash} />
                        <h2>Snappy Process</h2>
                        <p>Our application process can be completed in <br /> minutes, not hours. Don’t get stuck filling in <br /> tedious forms.</p>
                    </div>

                    <div>
                        <img src={people} alt={people} />
                        <h2>Affordable Prices</h2>
                        <p>We don’t want you worrying about high monthly <br />costs. Our prices may be low, but we still offer <br />the best coverage possible.</p>
                    </div>

                    <div>
                        <img src={price} alt={price} />
                        <h2>People First</h2>
                        <p>Our plans aren’t full of conditions and clauses <br /> to prevent payouts. We make sure you’re <br />covered when you need it.</p>
                    </div>
                </div>

                <div className="modal">
                    <h1>
                        Find out more <br />
                        about how we work
                    </h1>

                    <button>HOW WE WORK</button>
                </div>
            </Process>

            <Footer></Footer>

        </Container>
    );
}

export default App;
