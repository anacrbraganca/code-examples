import React from 'react';
import Header from '../Header';
import { shallow } from 'enzyme';

describe('should render the Header', () => {
  let mountedHeader;
  
  beforeEach(() => {
    mountedHeader = shallow(<Header />);
  });

  it('should render the Header', () => {
    shallow(<Header />);
  })

  it('should render the logo', () => {
    const imgs = mountedHeader.find('img[src="img/wiredbrain.png"]');
    expect(imgs.length).toBe(1);
  })
})


