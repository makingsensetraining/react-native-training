import React from 'react';
import LoginForm from './LoginForm';
import renderer from 'react-test-renderer';

describe('test login form',() =>{
    it('should render as expected', ()=>{
        const tree = renderer
            .create(<LoginForm />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});