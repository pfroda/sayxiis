// import React from 'react';
jest.mock('./button.css');
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';


describe('Button Component', () => {
  it('renders without crashing', () => {
    render(<Button title="Click Me" />);
  });

  it('calls funcFollow when clicked', () => {
    const mockFunc = jest.fn();
    const { getByText } = render(<Button title="Click Me" funcFollow={mockFunc} />);
    const buttonElement = getByText('Click Me');
    fireEvent.click(buttonElement);
    expect(mockFunc).toHaveBeenCalled();
  });
});
