import React from 'react';
import Holder from 'holderjs'
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Col, Container, Media, Row} from 'reactstrap';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      age: '',
      avatar: ''
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleEmailChange(event) {
    this.setState({email: event.target.value});
    let emailValid = event.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? false:true;
    this.setState({validEmail: emailValid});
  }
  
  handleNameChange(event) {
    this.setState({name: event.target.value});
    let nameValid = event.target.value.length > 3 ? false:true;
    this.setState({validName: nameValid});
  }
  
  handleAgeChange(event) {
    this.setState({age: event.target.value});
    let ageValid = (isFinite(String(event.target.value)) && event.target.value < 105) ? false:true;
    this.setState({validAge: ageValid});
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Form>
        <Container>
          <FormGroup>
            <Row>
              <Col sm="12" md={{ size: 4, offset: 2 }}>
                <Media>
                  <Media left href="#">
                    <Media object data-src="holder.js/256x256" alt="Generic placeholder image" />
                  </Media>
                </Media>
              </Col>
              <Col sm="12" md={{ size: 4 }}>
                <Label for="exampleFile">Avatar</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                  Pleace upload imge file for the avatar.
                </FormText>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <Label for="email">Email</Label>
              <FormText>Please provide vaild email address.</FormText>
              <Input value={this.state.email}  onChange={this.handleEmailChange} valid={this.state.validEmail} invalid={this.state.validEmail} />
              <FormFeedback>Oh noes! Invalid email format.</FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <Label for="name">Full name</Label>
              <FormText>Please provide your full name(min length 3 chars).</FormText>
              <Input value={this.state.name}  onChange={this.handleNameChange} valid={this.state.validName} invalid={this.state.validName} />
              <FormFeedback>Name is too short.</FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <Label for="age">Your age</Label>
              <FormText>Please provide your age(numeric value only).</FormText>
              <Input value={this.state.age}  onChange={this.handleAgeChange} valid={this.state.validAge} invalid={this.state.validAge} />
              <FormFeedback>Age must be typical numeric value for age(less than 105 - you can't live that long).</FormFeedback>
              <FormFeedback>Or can you......</FormFeedback>
            </Col>
          </FormGroup>
      </Container>
      </Form>
    );
  }
}
