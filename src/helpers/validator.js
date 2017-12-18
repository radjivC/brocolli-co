import validator from 'validator'
import React from 'react'

const required = (value) => {
  let html = ''
  if (!value.toString().trim().length > 0) {
    html = <div className="has-text-danger">* Required</div>
  }
  return html
}

const email = (value) => {
  let html = ''
  if (!validator.isEmail(value)) {
    html = <div className="has-text-danger">Email is not a valid.</div>
  }
  return html
}

const miniChar = (value) => {
  let html = ''
  if (value.length <= 3) {
    html = <div className="has-text-danger">Name too short</div>
  }
  return html
}

export { required, email, miniChar}
