import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Testing the Navbar', () => {
  it('Nav is rendered', () => {
    const nav = renderer
      .create(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>,
      )
      .toJSON();
    expect(nav).toMatchSnapshot();
  });
});
