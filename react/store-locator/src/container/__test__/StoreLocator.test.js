import React from 'react';
import { shallow } from 'enzyme';
import StoreLocator from '../StoreLocator';
import axios from 'axios';
import renderer from 'react-test-renderer';

describe('should render StoreLocator', () => {
    let mountedStoreLocator;

    beforeEach(() => {
        mountedStoreLocator = shallow(<StoreLocator />);
    })

    it('should call axios.get when #componentDidMount is executed', () => {
        return mountedStoreLocator.instance().componentDidMount().then(() => {
            expect(axios.get).toHaveBeenCalled();
        });
    })

    it('should call axios.get with correct url', () => {
        return mountedStoreLocator.instance().componentDidMount().then(() => {
            expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/data/shops.json');
        });
    })

     it('udpates state with api data', () => {
        return mountedStoreLocator.instance().componentDidMount().then(() => {
            expect(mountedStoreLocator.state()).toHaveProperty('shops', [{
                    "location": "test location",
                    "address": "test address",
                }]
            );
        });
    })

    it('should render correctly', () => {
        const tree = renderer.create(<StoreLocator />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render the Header', () => {
        let headers = mountedStoreLocator.find('Header');
        expect(headers.length).toBe(1);
    })

    it('should render Map', () => {
        let maps = mountedStoreLocator.find('Map');
        expect(maps.length).toBe(1);
    })
});

describe('should handle choose map event', () => {
    it('should update currentMap in the state using the location passed to it', () => {
        let mountStoreLocator = shallow(<StoreLocator />);
        let mockEvent = {
            target: {
                value: 'testland'
            },
        };
        mountStoreLocator.instance().chooseMap(mockEvent);
        expect(mountStoreLocator.instance().state.currentMap).toEqual('testland.png');
    });
});