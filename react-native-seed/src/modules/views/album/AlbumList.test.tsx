import React from 'react';
import renderer from 'react-test-renderer';

import AlbumList, { IAlbumListProps } from './AlbumList';
import { getState, getUser_1 } from '../../../test/entities';

describe('AlbumList', () => {
  let props: IAlbumListProps;

  beforeEach(() => {
    props = {
        currentUser: getUser_1(),
        albumMap: getState().album.albumMap,
        fetchAlbumList: jest.fn()
    };
  });

  it('renders without crashing', () => {
    const rendered = renderer.create(<AlbumList {...props} />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
