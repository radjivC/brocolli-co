import React from 'react'
import { mount } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import Subscribe from '../'

configure({ adapter: new Adapter() })

describe('Subscribe', () => {
  it('can render without crashing', () => {
    const component = renderer.create(
      <Subscribe />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('can render form', () => {
    const wrapper = mount(<Subscribe />)
    wrapper.setState({ isDone:false })
    expect(wrapper.find('input').length).toEqual(3)
    expect(wrapper.find('h1').text()).toEqual('Request an Invite')
    expect(wrapper.find('button.button.is-primary.is-medium').text()).toEqual('Submit')
    expect(wrapper.find('p').text()).toEqual('Please enter the details above and then click submit.')
  })

  it('can render done', () => {
    const wrapper = mount(<Subscribe />)
    wrapper.setState({ isDone:true })
    expect(wrapper.find('input').length).toEqual(0)
    expect(wrapper.find('h1').text()).toEqual('All Done')
    expect(wrapper.find('p').text()).toEqual('You will be one of the first to experience Brocoli and co, when we launch')
    expect(wrapper.find('button.button.is-success.is-medium').text()).toEqual('Done')
  })
})
