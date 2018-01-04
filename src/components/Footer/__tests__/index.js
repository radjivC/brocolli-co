/* global expectst */
import React from 'react'
import renderer from 'react-test-renderer'
import Footer from '../'

describe('Footer', () => {
  it('can render without crashing', () => {
    const component = renderer.create(
      <Footer />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
