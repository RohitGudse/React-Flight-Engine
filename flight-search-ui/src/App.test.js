import { render, screen } from '@testing-library/react';
import App from './App';

test('displays the Learn React link', () => {
  render(<App />);

  const learnReactLink = screen.getByRole('link', {
    name: /learn react/i,
  });

  expect(learnReactLink).toBeInTheDocument();
});