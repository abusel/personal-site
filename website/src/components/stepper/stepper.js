import './stepper.css'
import React from 'react'


const Stepper = props => {
    return <div className="container">
        {
            props.steps.map((step, i) => {
                return <StepperStep {...step} noLine={i === props.steps.length -1} />
            })
        }
    </div>
}

/*
StepProps: {
    title: string,
    subtitle1: string,
    subtitle2: string,
    additionalInfo?: string[],
    images?: {
        src: string,
        alt: string
    }[],
    noLine?: boolean
}
*/
const StepperStep = props => {

    return <div className="step-container">
    <div className="step-left-container">
      <div className="circle" />
      {!props.noLine && <div className="line"
      style={{
        height: 80 + (props.additionalInfo.length * 25) + (props.images ? 140 : 0)
      }}
      />}
    </div>
    <div className="step-right-container">
    <div className="title">
          {props.title}
        </div>
        <div className="subtitle-1">
          {props.subtitle1}
        </div>
   <div className="subtitle-2">
            {props.subtitle2}
   </div>
    <div className="bullet-container">
    {props.additionalInfo.map((item) => (
       <div className="bullet">
          - {item}
       </div>
    ))}
    </div>
    {props.images &&
     <div className="image-container">
        {props.images.map(image => (
            <img src={image.src} alt={image.alt} className="styled-image-inline" />
        ))}
     </div>
    }
    </div>
  </div>
}
export default Stepper