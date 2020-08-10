import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { shallow } from 'enzyme';

describe('should render App', () => {
  it('should render without crashing', () => {
    let mountedApp = shallow(<App />);
  });

  it ('should render a StoreLocator', () => {
    let mountedApp = shallow(<App />);
    const locators = mountedApp.find('StoreLocator');
    expect(locators.length).toBe(1);
  })
})

