import React from 'react'
import { mount } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import Main from '../'

configure({ adapter: new Adapter() })

describe('Subscribe', () => {
  it('can render without crashing', () => {
    const component = renderer.create(
      <Main />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('can render done', () => {
    const wrapper = mount(<Main />)
    wrapper.setState({ modalIsOpen:false })
    expect(wrapper.find('Header').length).toEqual(1)
    expect(wrapper.find('Footer').length).toEqual(1)
    expect(wrapper.find('Modal').length).toEqual(1)
    expect(wrapper.find('a.bd-tw-button.button.is-danger').text()).toEqual('Request an invite')
  })

  it('can render the modal', () => {
    const wrapper = mount(<Main />)
    wrapper.setState({ modalIsOpen:true })
    expect(wrapper.find('Header').length).toEqual(1)
    expect(wrapper.find('Footer').length).toEqual(1)
    expect(wrapper.find('Modal').length).toEqual(1)
    expect(wrapper.find('Subscribe').length).toEqual(1)
  })
})
