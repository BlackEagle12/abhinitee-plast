import React from 'react';
import { Link } from 'react-router-dom';

function ComminSoon(props) {
    return (
        <div className="comming-soon-page-content">
            <div className="about">
            <a className="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank">
                <span className="icon"></span>
            </a>
            <a className="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank">
                <span className="icon"></span>
            </a>
            <a className="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
                <span className="icon"></span>
            </a>
            <a className="bg_links logo"></a>
            </div>
            {/* <!-- end about --> */}


                <section className="wrapper">

                    <div className="container">

                        <div id="scene" className="scene" data-hover-only="false">


                            <div className="circle" data-depth="1.2"></div>

                            <div className="one" data-depth="0.9">
                                <div className="content">
                                    <span className="piece"></span>
                                    <span className="piece"></span>
                                    <span className="piece"></span>
                                </div>
                            </div>

                            <div className="two" data-depth="0.60">
                                <div className="content">
                                    <span className="piece"></span>
                                    <span className="piece"></span>
                                    <span className="piece"></span>
                                </div>
                            </div>

                            <div className="three" data-depth="0.40">
                                <div className="content">
                                    <span className="piece"></span>
                                    <span className="piece"></span>
                                    <span className="piece"></span>
                                </div>
                            </div>

                            <p className="p404" data-depth="0.50">Comming Soon</p>
                            <p className="p404" data-depth="0.10">Comming Soon</p>

                        </div>

                        <div className="text">
                            <article>
                                <p>Coming soon! Get ready for something amazing. Stay tuned for updates.</p>
                                <Link to="/"> <button>Home Page!</button> </Link>
                            </article>
                        </div>

                    </div>
                </section>
        </div>
    );
}

export default ComminSoon;