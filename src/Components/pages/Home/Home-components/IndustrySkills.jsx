import React from 'react';

function IndustrySkills(props) {
    return (
        <div className='industry-skills-content'>
            <div className="industry-skills-image">
                <img src="src/assets/plastic-bottle/bottles.webp" alt="" />
            </div>
            <div className="industry-skills-data">
                <div className="heading">Why to choose us?</div>
                <div className="industry-skills">
                    <div className="industry-skill">
                        <div className="skill-info">
                            <div className="skill-name">Reasearch</div>
                            <div className="skillanount">100%</div>
                        </div>
                        <div className="skill-visulizer"></div>
                    </div>
                    <div className="industry-skill">
                        <div className="skill-info">
                            <div className="skill-name">Creativity</div>
                            <div className="skillanount">100%</div>
                        </div>
                        <div className="skill-visulizer"></div>
                    </div>
                    <div className="industry-skill">
                        <div className="skill-info">
                            <div className="skill-name">Customer Support</div>
                            <div className="skillanount">100%</div>
                        </div>
                        <div className="skill-visulizer"></div>
                    </div>
                    <div className="industry-skill">
                        <div className="skill-info">
                            <div className="skill-name">Customer Statisfaction</div>
                            <div className="skillanount">100%</div>
                        </div>
                        <div className="skill-visulizer"></div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default IndustrySkills;