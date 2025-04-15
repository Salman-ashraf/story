/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { useArgs } from '@storybook/preview-api';
import './Modal.css'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    title: { control: 'text' },
    width: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    open: true,
    title: 'Default Modal',
    children: 'This is a simple modal with some content.',
  },
  render: (args) => {
    const [_, updateArgs] = useArgs();
    const handleClose = () => updateArgs({ open: false });

    return (
      <Modal {...args} onClose={handleClose}>
        {args.children}
      </Modal>
    );
  },
};

export const LargeModal: Story = {
  args: {
    open: true,
    title: 'Large Modal',
    width: '700px',
    children: 'This modal has a custom larger width.',
  },
  render: (args) => {
    const [_, updateArgs] = useArgs();
    const handleClose = () => updateArgs({ open: false });

    return (
      <Modal {...args} onClose={handleClose}>
        {args.children}
      </Modal>
    );
  },
};

export const CustomContent: Story = {
  args: {
    open: true,
    title: 'Modal with Form',
    children: (
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>
          Name: <input type="text" />
        </label>
        <label>
          Email: <input type="email" />
        </label>
        <button type="submit">Submit</button>
      </form>
    ),
  },
  render: (args) => {
    const [_, updateArgs] = useArgs();
    const handleClose = () => updateArgs({ open: false });

    return (
      <Modal {...args} onClose={handleClose}>
        {args.children}
      </Modal>
    );
  },
};

export const WithoutTitle: Story = {
  args: {
    open: true,
    title: '',
    children: 'This modal has no title.',
  },
  render: (args) => {
    const [_, updateArgs] = useArgs();
    const handleClose = () => updateArgs({ open: false });

    return (
      <Modal {...args} onClose={handleClose}>
        {args.children}
      </Modal>
    );
  },
};
