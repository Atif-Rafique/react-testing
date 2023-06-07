import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />); // render is used to create a Virtual DOM.
  // Screen is an object, which contains method to query the DOM. here we are quering with getByText.
  // getByText accepts strings or regular expressions. below we've used case insensitive regix with the word learn react.
  const headingElement = screen.getByText(/learn react/i); // i means to ignore the type cases (uppercase or lowercase), we can also pass strings.

  // we expect the headingElement to be in the App.
  expect(headingElement).toBeInTheDocument();
});

// test and expect are globally available in react app so no worry to import it explicitly.
