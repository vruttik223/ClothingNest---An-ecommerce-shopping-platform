import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, Box } from '@mui/material';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

const Steppers = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: 'Step One', component: <StepOne /> },
    { label: 'Step Two', component: <StepTwo /> },
    { label: 'Step Three', component: <StepThree /> },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography variant="h6">
              All steps completed - you're finished
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            {steps[activeStep].component}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mt: 1, mr: 1 }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 1, mr: 1 }}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </div>
        )}
      </div>
    </Box>
  );
};

export default Steppers;
