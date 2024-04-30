import React from 'react';
import SectionHeading from '../../../Common/SectionHeading';

function WhoWeAre(props) {
    const style = {fontSize: "20px"}
    return (
        <div className='about-us-who-we-are-content'>
            <div className="who-we-are-image">
                <img src="src/assets/machine/machine-1.webp" alt="" />
            </div>
            <div className="who-we-are">
                <div className="who-we-are-heading">
                    <div className="section-heading-container">
                        <SectionHeading style={style}
                            backgroundText=""
                            headingText1="WHO"
                            headingText2="WE ARE"
                        />
                    </div>
                </div>
                <div className="who-we-are-description">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
                </div>
                <div className="abhinitee-plast-logo">
                    <img src="src/assets/logo/abhinidhi-logo.webp" alt="" />
                </div>
            </div>
        </div>
    );
}

export default WhoWeAre;