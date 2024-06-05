import React from 'react'

export default function BuddyCardTwo(props) {
  return (
    <div className="buddy-card-two">
        <div className='buddy-card-two-background-layer'>
            <div className='buddy-card-two-content'>
                <div className='director-designation-heading'>
                    About our {props.Designation}
                </div>
                <div className='director-info-content'>
                    <div className='director-info'>
                        <p className='property'>Name : <span className='value'>{props.Name} </span></p>
                        <p className='property'>Eductional qualification : <span className='value'>{props.Education}</span></p>
                        <p className='property'>Achievements : <span className='value'>{props.Achievements}</span></p>
                    </div>
                    <div className='director-image'>
                        <img src={props.Image} alt='director' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
