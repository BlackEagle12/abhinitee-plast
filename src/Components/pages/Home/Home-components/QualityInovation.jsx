import React from 'react';
import quality from '../../../../assets/Quality-inovation/quality.webp'
import innovative from '../../../../assets/Quality-inovation/innovative.webp'

function QualityInovation(props) {
    return (
        <div className='home-quality-inovation-content'>
            <div className="characteristic">
                <div className="char-image">
                    <img src={quality} alt="" />
                </div>
                <div className="char-content">
                    <div className="heading">Innovative</div>
                    <div className="slogan">Empowering your vision with plastic precision.</div>
                    <p className="description">
                        We are dedicated to providing exceptional quality service to our clients in the plastic industry. With a focus on excellence and precision, we ensure that every project meets the highest standards of quality and satisfaction.
                    </p>
                </div>
            </div>
            <div className="characteristic">
                <div className="char-content">
                    <div className="heading">Quality</div>
                    <div className="slogan">Quality is pride of workmanship.</div>
                    <p className="description">
                        We thrive on innovation. As pioneers in the plastic industry, we constantly push boundaries, exploring new materials and technologies to deliver cutting-edge solutions that meet the evolving needs of our clients.
                    </p>
                </div>
                <div className="char-image">
                    <img src={innovative} alt="" />
                </div>
            </div>
        </div>
    );
}

export default QualityInovation;