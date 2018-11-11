import React from 'react';
import AlbumList from './AlbumsList';
import renderer from 'react-test-renderer';

describe('Album List test', () => {

    it('should render as expected', ()=> {
        const tree = renderer
            .create(<AlbumList />)
            .toJSON();
        
        expect(tree).toMatchSnapshot();
    }); 
});