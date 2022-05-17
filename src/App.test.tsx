import { render, screen } from '@testing-library/react';

import App from './App';

test('renders Testing title', () => {
  render(<App />);
  expect(screen.getByText('Testing')).toHaveTextContent('Testing');
});
