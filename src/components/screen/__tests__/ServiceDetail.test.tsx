import 'react-native';
import * as React from 'react';
import ServiceDetail from '../ServiceDetail';

import renderer from 'react-test-renderer';
import { render, fireEvent } from 'react-native-testing-library';

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

describe('[ServiceDetail] Interaction', () => {
  beforeEach(() => {
    props = createTestProps({});
    component = <ServiceDetail {...props} />;
    testing = render(component);
  });

  it('should render [Text] with value "myText"', () => {
    const textInstance: renderer.ReactTestInstance = testing.getByTestId('myText');
    expect(textInstance.props.children).toEqual('dooboolab');
  });
});
