import assert from 'assert'
import React from 'react'
import TestUtils from 'react-addons-test-utils'

import Modal from './'

describe("Modal component unit tests", function() {
  it("should render the Modal component", function() {
    const renderer = TestUtils.createRenderer()
    renderer.render( <Modal /> )
    const output = renderer.getRenderOutput()
    assert(output.type === "div")
  })
})
