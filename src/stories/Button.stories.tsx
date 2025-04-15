// src/stories/MUIButton.stories.tsx

import { ButtonProps, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { Meta, StoryFn } from '@storybook/react';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

interface CustomButtonProps extends ButtonProps {
  textColor?: string;
  bgColor?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  margin?: string;
  padding?: string;
}
(Button as any).displayName = 'Button';

export default {
  title: 'MUI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'contained', 'outlined'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
    textColor: { control: 'color' },
    bgColor: { control: 'color' },
    width: { control: 'text' },
    height: { control: 'text' },
    borderRadius: { control: 'text' },
    margin: { control: 'text' },
    padding: { control: 'text' },
  },
} as Meta<CustomButtonProps>;

const Template: StoryFn<CustomButtonProps> = ({
  textColor,
  bgColor,
  width,
  height,
  borderRadius,
  margin,
  padding,
  sx,
  ...args
}) => {
  const customStyles = {
    ...(textColor && { color: textColor }),
    ...(bgColor && { backgroundColor: bgColor }),
    ...(width && { width }),
    ...(height && { height }),
    ...(borderRadius && { borderRadius }),
    ...(margin && { margin }),
    ...(padding && { padding }),
  };

  return (
    <Button
      {...args}
      sx={{
        ...customStyles,
        ...sx, // allow override/merge from existing sx
      }}
    />
  );
};


// 👇 Main interactive story
export const Playground = Template.bind({});
Playground.args = {
  variant: 'contained',
  color: 'primary',
  size: 'medium',
  children: 'Super Customizable Button',
  disabled: false,
  fullWidth: false,
  borderRadius: '8px',
  margin: '10px',
  padding: '10px',
};

// 👉 Presets
export const Primary = Template.bind({});
Primary.args = {
  variant: 'contained',
  color: 'primary',
  children: 'Primary Button',
};

export const FullWidthButton = Template.bind({});
FullWidthButton.args = {
  variant: 'contained',
  color: 'primary',
  fullWidth: true,
  children: 'Full Width Button',
};

export const ButtonAsLink = Template.bind({});
ButtonAsLink.args = {
  variant: 'text',
  href: 'https://mui.com',
  children: 'Go to MUI Docs',
};




export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'contained',
  color: 'primary',
  disabled: true,
  children: 'Disabled',
};

// ✅ Static layouts with `Stack`
export const Sizes = () => (
  <Stack spacing={2} direction="row">
    <Button size="small" variant="contained">Small</Button>
    <Button size="medium" variant="contained">Medium</Button>
    <Button size="large" variant="contained">Large</Button>
  </Stack>
);

export const Variants = () => (
  <Stack spacing={2} direction="row">
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
  </Stack>
);






export const Colors = () => (
  <Stack spacing={2} direction="row">
    <Button color="primary" variant="contained">Primary</Button>
    <Button color="secondary" variant="contained">Secondary</Button>
    <Button color="success" variant="contained">Success</Button>
    <Button color="error" variant="contained">Error</Button>
    <Button color="warning" variant="contained">Warning</Button>
    <Button color="info" variant="contained">Info</Button>
  </Stack>
);

export const IconButtons = () => (
  <Stack spacing={2} direction="row">
    <Button variant="contained" startIcon={<SaveIcon />}>Save</Button>
    <Button variant="outlined" endIcon={<DeleteIcon />}>Delete</Button>
  </Stack>
);

export const DisabledButtons = () => (
  <Stack spacing={2} direction="row">
    <Button variant="contained" disabled>Contained</Button>
    <Button variant="outlined" disabled>Outlined</Button>
    <Button variant="text" disabled>Text</Button>
  </Stack>
);
