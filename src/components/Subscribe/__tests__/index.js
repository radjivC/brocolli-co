import React from 'react'
import ReactDOM from 'react-dom'
import Form from '../'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe('RequestInviteForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form />, div);
  });

  it('render Form', () => {
    const wrapper = Enzyme.shallow(<Form />);
    wrapper.setState({ isDone: false });
    const input = wrapper.find('input')
    console.log('input',input);
    expect(wrapper.find('input')).to.be.length(3);

  })

  it('render done', () => {
    const wrapper = Enzyme.shallow(<Form />);
    wrapper.setState({ isDone: true });
  })
})
