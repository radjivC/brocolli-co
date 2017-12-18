import React, {Component} from "react"
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import Button from 'react-validation/build/button'
import { required, email, miniChar } from '../../helpers/validator'
import SubscribeService from '../../services/Subscribe'

export default class Subscribe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      confirmEmail: '',
      email: '',
      isDone:false,
      error: false
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    e.target.disabled = true
    if(this.state.email !== this.state.confirmEmail){
      this.setState({error:true})
    }

    SubscribeService.post(this.state)
      .then(data => this.setState({ isDone: true  }))
      .catch(err => this.setState({ error: true  }))
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  Done = () => (
    <div>
      <center>
        <h1>All Done</h1>
      <br />
      <p>You will be one of the first to experience Brocoli and co, when we launch</p>
      <br />
      <button className="button is-success is-medium" onClick={e => this.props.closeModalRequest()}>Done</button>
      </center>
    </div>
  )

  SubscribeForm = () => (
    <Form>
      <div className="is-uppercase">
        <center>
          <h1 className="has-text-info">Request an Invite</h1>
        </center>
        <br />
      </div>
      <div className="field">
        <div className="control has-icons-left">
          <Input className="input" name="name" type="text" placeholder="Name" value={this.state.name} validations={[required, miniChar]} onChange={e => this.change(e)} />
          <span className="icon is-small is-left">
            <i className="fa fa-user" />
          </span>
        </div>
      </div>

      <div className="field">
        <div className="control has-icons-left">
          <Input className="input" name="email" type="email" placeholder="Email" value={this.state.email} validations={[required, email]} onChange={e => this.change(e)} />
          <span className="icon is-small is-left">
            <i className="fa fa-envelope" />
          </span>
        </div>
      </div>

      <div className="field">
        <div className="control has-icons-left">
          <Input className="input" name="confirmEmail" type="confirmEmail" placeholder="Confirm Email" value={this.state.confirmEmail} validations={[required, email]} onChange={e => this.change(e)} />
          <span className="icon is-small is-left">
            <i className="fa fa-envelope" />
          </span>
        </div>
      </div>
      <br />
      <div>
        {this.state.error ? <center><p className="has-text-danger">Error, please try again</p></center> : <center><p>Please enter the details above and then click submit.</p></center> }
        <br />
        <center><Button className="button is-primary is-medium" onClick={e => this.onSubmit(e)}>Submit</Button></center>
      </div>
    </Form>
  )


  render() {
    return (
      <div>
        { this.state.isDone ? this.Done() : this.SubscribeForm() }
      </div>
    )
  }
}
