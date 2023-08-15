import React from 'react';
import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import Messaging from './inbox';

jest.mock('axios');

const mockData = {
    messages: [
      { messagelist: 1, subject: 'Test message 1' },
      { messagelist: 2, subject: 'Test message 2' },
      { messagelist: 3, subject: 'Test message 3' },
    ],
};

it('renders fetched inbox messages', async () => {
    axios.get.mockResolvedValue({ data: mockData });
    render(<Messaging />);
    await waitFor(() => screen.getByText('Inbox'));
    expect(screen.getByText('Inbox')).toBeInTheDocument();
    expect(screen.getByText('Test message 1')).toBeInTheDocument();
    expect(screen.getByText('Test message 2')).toBeInTheDocument();
    expect(screen.getByText('Test message 3')).toBeInTheDocument();
  });