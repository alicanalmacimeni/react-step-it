import './StepWizard.css';
import React, { useState } from 'react';

function StepWizard({
  children,
  navButtons,
  navDots,
  prevButtonName = "Prev",
  nextButtonName = "Next",
  dotClassName = "",
  buttonsClassName = ""
}) {
  const [activeStep, setActiveStep] = useState(1)

  const handleDumpDots = () => {
    let liElements = [];
    for (let i = 0; i < children.length; i++) {
      liElements.push(
        <li
          key={i}
          className={dotClassName + (i + 1 === activeStep ? ' active' : '')}
          onClick={() => setActiveStep(i + 1)}>
          <span>{i + 1}</span>
        </li>
      );
    }
    return liElements;
  }

  return (
    <div className="step-wizard-container">
      {navDots &&
        <div className="dots-container">
          <ul className="nav-dots">
            {handleDumpDots()}
          </ul>
        </div>
      }

      <div className="content-container">
        {children[(activeStep - 1)]}
      </div>

      {navButtons &&
        <div className="buttons-container">
          <button className={buttonsClassName}
            onClick={() => setActiveStep(activeStep - 1)}
            disabled={activeStep === 1}
          >{prevButtonName}</button>
          <button className={buttonsClassName}
            onClick={() => setActiveStep(activeStep + 1)}
            disabled={activeStep === children.length}
          >{nextButtonName}</button>
        </div>
      }
    </div>
  );
}

export default StepWizard;