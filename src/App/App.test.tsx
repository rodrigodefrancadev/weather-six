import * as ReactTest from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders HomeScreen', () => {
  ReactTest.render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const titleElement = ReactTest.screen.getByText(/Hello World!/i);
  expect(titleElement).toBeInTheDocument();
});


test('rendering not available city', () => {
  ReactTest.render(
    <MemoryRouter initialEntries={["/New York"]}>
      <App />
    </MemoryRouter>
  );

  const errorMessage = ReactTest.screen.getByText(/City not available/i);
  expect(errorMessage).toBeInTheDocument();
});



