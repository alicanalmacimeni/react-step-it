import React from 'react';
import StepWizard from './components/StepWizard';
import Step from './components/Step';

function App() {
  return (
    <StepWizard navButtons={true} navDots={true}>
      <Step>
        <p>Step 1 Content</p>
      </Step>
      <Step>
        <p>Step 2 Content</p>
      </Step>
      <Step>
        <p>Step 3 Content</p>
      </Step>
      <Step>
        <p>Step 4 Content</p>
      </Step>
    </StepWizard>
  );
}

export default App;
