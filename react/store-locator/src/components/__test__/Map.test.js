import React from 'react';
import { shallow } from 'enzyme';
import Map from '../Map';

describe('should render a Map', () => {
    let mountedMap;

    beforeEach(() => {
        let props = {
            'imagename': 'testImage.png',
        }
        mountedMap = shallow(<Map {...props} />);
    });

    it('should render without crashing', () => {
        let mountedMap = shallow(<Map />);
        expect(mountedMap.length).toBe(1);
    })
    
    it('should render imagename when its passed to it', () => {
        let imgs = mountedMap.find('img[src="img/testImage.png"]');
        expect(imgs.length).toBe(1);
    });
});

describe('should render a Map even when none image is passed to it', () => {
    it('should render none map when none place is selected', () => {
        let mountedMap = shallow(<Map />);
        let imgs = mountedMap.find('img[src="img/none.png"]');
        expect(imgs.length).toBe(1);
    });
});
