import 'react-native';
import * as React from 'react';
import ServiceDetail from '../ServiceDetail';
import { render } from '@testing-library/react-native';

import renderer from 'react-test-renderer';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
    goBack: jest.fn(),
  },
  ...props,
});

let props: any;
let testing: any;
let component: any;

describe('[ServiceDetail]', () => {
  beforeAll(() => {
    props = createTestProps({});
  });

  it('renders without crashing', () => {
    const rendered: renderer.ReactTestRendererJSON = renderer.create(<ServiceDetail />).toJSON();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });
});
