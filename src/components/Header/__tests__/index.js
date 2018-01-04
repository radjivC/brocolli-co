import React from 'react'
import renderer from 'react-test-renderer'
import Header from '../'

describe('Header', () => {
  it('can render without crashing', () => {
    const component = renderer.create(
      <Header />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
