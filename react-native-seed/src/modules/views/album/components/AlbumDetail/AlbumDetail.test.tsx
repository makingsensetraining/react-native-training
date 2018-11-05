import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { getAlbum_1 } from '../../../../../test/entities';
import AlbumDetail, { IAlbumDetailProps } from './AlbumDetail';
import { any } from 'prop-types';

describe('AlbumDetail', () => {
  let props: IAlbumDetailProps;

  beforeEach(() => {

    AlbumDetail.linker = {
      canOpenURL: jest.fn().mockReturnValue(Promise.resolve(true)),
      openURL: jest.fn()
    } as any;

    props = {
      album: getAlbum_1()
    };

  });

  it('renders without crashing', () => {
    const rendered = renderer.create(<AlbumDetail {...props} />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('should open a link', async () => {
    const url = 'https://www.amazon.com/Imaginaerum-Nightwish/dp/B006CBSE86';
    AlbumDetail.linker = {
      canOpenURL: jest.fn().mockReturnValue(Promise.resolve(true)),
      openURL: jest.fn()
    } as any;
    const wrapper = shallow(<AlbumDetail {...props} />);
    wrapper.setProps({ url });
    await (wrapper.find('Button').first().prop('onPress') as any)();
    expect(AlbumDetail.linker.openURL).toBeCalledWith(url);
  });
});
