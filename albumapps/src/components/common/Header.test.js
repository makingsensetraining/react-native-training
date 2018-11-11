import Header from './Header';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Header test', () => {
    let props;
    beforeEach(() => {
        props = {
            headerText: 'This is my header test',
        };
      });

    it('should render as expected ', () => {
        const tree = renderer
            .create( <Header {...props} />)
            .toJSON();
        
        expect(tree).toMatchSnapshot();
    });
});