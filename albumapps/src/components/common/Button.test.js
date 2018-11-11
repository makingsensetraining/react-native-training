import Button from './Button';
import React from 'react';
import renderer from 'react-test-renderer';
import shallow from 'enzyme';

describe('Button test', () => {
    let props;
    beforeEach(() => {
        props = {
            children: 'Button Text', 
            onPress: jest.fn(),
            isSignOut: false,
        };
      });

    it('should render as expected ', () => {
        const tree = renderer
            .create( <Button {...props} />)
            .toJSON();
        
        expect(tree).toMatchSnapshot();
    });

    it('should call press event', async () => {
        const wrapper = shallow(<Button {...props} />);
        await (wrapper.find('TouchableOpacity').first().prop('onPress'))();
        expect(props.onPress).toBeCalledTimes(1);
      });
});