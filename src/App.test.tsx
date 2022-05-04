import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux'
import store from 'store'
import { BrowserRouter } from 'react-router-dom'

describe('renders correctly the <App /> component', () => {

  it ('should renders learn react link', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    const linkElement = screen.getByText(/learn react/i);

    expect(linkElement).toBeInTheDocument();
  });

  it ('should renders the logo', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    const logoElement = screen.getByAltText('logo');

    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveClass('App-logo');
  });

  it ('should give focus to text input in footer component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    const inputText = screen.getByTestId('Input');

    expect(inputText).toBeInTheDocument();
    expect(inputText).toHaveFocus();
  });
});
