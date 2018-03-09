import React from 'react';
import Holder from 'holderjs'
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Col, Container, Media} from 'reactstrap';

export default class Main extends React.Component {
  render() {
    return (
      <Form>
        <Container>
          <FormGroup row>
            <Col sm="12" md={{ size: 4, offset: 2 }}>
              <Media row>
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
          </FormGroup>
          <FormGroup row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <Label for="exampleEmail">Email</Label>
              <Input />
              <FormFeedback>You will not be able to see this</FormFeedback>
              <FormText>Example help text that remains unchanged.</FormText>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <Label for="exampleEmail">Valid input</Label>
              <Input valid />
              <FormFeedback valid>Sweet! that name is available</FormFeedback>
              <FormText>Example help text that remains unchanged.</FormText>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <Label for="examplePassword">Invalid input</Label>
              <Input invalid />
              <FormFeedback>Oh noes! that name is already taken</FormFeedback>
              <FormText>Example help text that remains unchanged.</FormText>
            </Col>
          </FormGroup>
        </Container>
      </Form>
    );
  }
}
