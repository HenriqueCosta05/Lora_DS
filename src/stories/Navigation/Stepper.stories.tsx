import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { ButtonComponent } from "../../components/Buttons/Button/Button";
import { StepperComponent } from "../../components/Navigation/Stepper/Stepper";

const meta = {
  component: StepperComponent,
  title: "Navigation/Stepper",
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StepperComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const steps = [
  { label: 'Select campaign settings' },
  { label: 'Create an ad group' },
  { label: 'Create an ad' },
];

const stepsWithDescription = [
  { label: 'Select campaign settings', description: 'Choose your target audience' },
  { label: 'Create an ad group', description: 'Define ad parameters' },
  { label: 'Create an ad', description: 'Write your ad content' },
];

const stepsWithOptional = [
  { label: 'Account details' },
  { label: 'Profile information', optional: true },
  { label: 'Review and submit' },
];

export const Horizontal: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(0);
    return (
      <div>
        <StepperComponent activeStep={activeStep} steps={steps} />
        <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
          <ButtonComponent onPress={() => setActiveStep(Math.max(0, activeStep - 1))} isDisabled={activeStep === 0}>
            Back
          </ButtonComponent>
          <ButtonComponent onPress={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))} isDisabled={activeStep === steps.length - 1}>
            Next
          </ButtonComponent>
        </div>
      </div>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(0);
    return (
      <div style={{ display: 'flex', gap: '32px' }}>
        <StepperComponent activeStep={activeStep} steps={steps} orientation="vertical" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <ButtonComponent onPress={() => setActiveStep(Math.max(0, activeStep - 1))} isDisabled={activeStep === 0}>
            Back
          </ButtonComponent>
          <ButtonComponent onPress={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))} isDisabled={activeStep === steps.length - 1}>
            Next
          </ButtonComponent>
        </div>
      </div>
    );
  },
};

export const WithDescriptions: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(1);
    return (
      <div>
        <StepperComponent activeStep={activeStep} steps={stepsWithDescription} />
        <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
          <ButtonComponent onPress={() => setActiveStep(Math.max(0, activeStep - 1))}>
            Back
          </ButtonComponent>
          <ButtonComponent onPress={() => setActiveStep(Math.min(stepsWithDescription.length - 1, activeStep + 1))}>
            Next
          </ButtonComponent>
        </div>
      </div>
    );
  },
};

export const WithOptional: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(1);
    return (
      <StepperComponent activeStep={activeStep} steps={stepsWithOptional} />
    );
  },
};
