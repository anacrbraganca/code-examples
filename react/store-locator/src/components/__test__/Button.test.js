import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('should a map', () => {
    let mountedButton;

    beforeEach(() => {
        mountedButton = shallow(<Button />);
    });

    it('should render without crashing', () => {
        let mountedButton = shallow(<Button />);
        expect(mountedButton.length).toBe(1);
    });

    it('should have a button element', () => {
        let buttons = mountedButton.find('button');
        expect(buttons.length).toBe(1);
    });

    it('should call callback function when clicked', () => {
        const mockFunction = jest.fn();
        const buttons = shallow(<Button handleClick={mockFunction} />);
        buttons.find('button').simulate('click');
        expect(mockFunction.mock.calls.length).toEqual(1);
    })
});

describe('When a location is passed to it', () => {
    let mountedButton;
    let props;

    beforeEach(() => {
        const props = {
            location: "Some location",
        }

        mountedButton = shallow(<Button {...props} />);
    });

    it('display the location given to it', () => {
        const locationName = mountedButton.find('.location-button');
        expect(locationName.text()).toEqual('Some location');
    })
});

describe('When an undefined location is passed to it', () => {
    let mountedButton;
    let props;

    beforeEach(() => {
        const props = {
            location: undefined,
        }

        mountedButton = shallow(<Button {...props} />);
    });

    it('display specific text', () => {
        const locationName = mountedButton.find('.location-button');
        expect(locationName.text()).toEqual('All Locations');
    })
});


