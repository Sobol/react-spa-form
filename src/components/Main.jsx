import React from 'react';
/* Line below shows warning - it is needed to work with the missing image */
import Holder from 'holderjs'
import { Redirect } from 'react-router'
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Col, Container, Row, Button} from 'reactstrap';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    let cachedState = localStorage.getItem('mySubmitedData');
    if (cachedState) {
      this.state = JSON.parse(cachedState);
    } else {
      this.state = {
        email: '',
        name: '',
        age: '',
        avatar: {
          avatarFile: '',
          imagePreviewUrl: 'holder.js/256x256'
        }
      };
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   
  handleFileChange(event) {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        avatar: { 
          avatarFile: file,
          imagePreviewUrl: reader.result
        }
      });
    }
    reader.readAsDataURL(file)
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
    let emailValid = event.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true:false;
    this.setState({validEmail: emailValid});
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
    let nameValid = event.target.value.length > 3 ? true:false;
    this.setState({validName: nameValid});
  }
  
  handleAgeChange(event) {
    this.setState({age: event.target.value});
    let ageValid = (isFinite(String(event.target.value)) && event.target.value < 105 && event.target.value !== '') ? true:false;
    this.setState({validAge: ageValid});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.validAge && this.state.validName && this.state.validEmail) {
      localStorage.setItem('mySubmitedData', JSON.stringify(this.state, null, 2));
      this.setState({ fireRedirect: true })
    }
  }

  render() {
    let { from } = this.props.location.state || '/'
    let { fireRedirect } = this.state
    let {imagePreviewUrl} = this.state.avatar;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} id="avatar" alt="Generic alt attribute :-)" />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Container>
            <FormGroup>
              <Row>
                <Col sm='12' md={{ size: 4, offset: 2 }}>
                  {$imagePreview}
                </Col>
                <Col sm='12' md={{ size: 4 }}>
                  <Label for='exampleFile'>Avatar</Label>
                  <Input type='file' name='file' value={this.state.avatarFile} onChange={this.handleFileChange} accept='image/x-png,image/jpeg' />
                  <FormText color='muted'>
                    Pleace upload imge file for the avatar(png/jpeg).
                  </FormText>
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Col sm='12' md={{ size: 8, offset: 2 }}>
                <Label for='email'>Email</Label>
                <FormText>Please provide vaild email address.</FormText>
                <Input value={this.state.email} onChange={this.handleEmailChange} valid={this.state.validEmail === true} invalid={this.state.validEmail === false} />
                <FormFeedback>Oh noes! Invalid email format.</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm='12' md={{ size: 8, offset: 2 }}>
                <Label for='name'>Full name</Label>
                <FormText>Please provide your full name(min length 3 chars).</FormText>
                <Input value={this.state.name} onChange={this.handleNameChange} valid={this.state.validName === true} invalid={this.state.validName === false} />
                <FormFeedback>Name is too short.</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm='12' md={{ size: 8, offset: 2 }}>
                <Label for='age'>Your age</Label>
                <FormText>Please provide your age(numeric value only).</FormText>
                <Input value={this.state.age} onChange={this.handleAgeChange} valid={this.state.validAge === true} invalid={this.state.validAge === false} />
                <FormFeedback>Age must be typical numeric value for age(less than 105 - you can't live that long).</FormFeedback>
                <FormFeedback>Or can you......</FormFeedback>
              </Col>
            </FormGroup>
            <Col sm='12' md={{ size: 8, offset: 2 }}>
              <Button>Submit</Button>
              <FormText>*You need to fill in all inputs to submit.</FormText>      
            </Col>
          </Container>
        </Form>
        {fireRedirect && (
          <Redirect to={from || '/profile'}/>
        )}
      </div>
    );
  }
}
