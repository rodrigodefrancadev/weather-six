import * as ReactTest from '@testing-library/react';
import App from './App';

test('renders Hello World!', () => {
  ReactTest.render(<App />);
  const linkElement = ReactTest.screen.getByText(/Hello World!/i);
  expect(linkElement).toBeInTheDocument();
});
