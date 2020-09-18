import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

//configure enzyme
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Counter testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  test('renders learn react link', () => {
    expect(wrapper.find('h1').text()).toContain('This is a counter app')
  });

  test('render a button with a text of `increment`', () => {
    expect(wrapper.find('#increment-btn').text()).toBe('Increment')
  })

  test('render the intial value of state in a div', () => {
    expect(wrapper.find('#counter-value').text()).toBe("0")
  })

  test('render the click event of increment button and increment counter value', () => {
    wrapper.find('#increment-btn').simulate('click')
    expect(wrapper.find('#counter-value').text()).toBe('1')
  })

  test('render the click event of decrement button and decrement counter value', () => {
    wrapper.find('#decrement-btn').simulate('click')
    expect(wrapper.find('#counter-value').text()).toBe('-1')
  })

});
