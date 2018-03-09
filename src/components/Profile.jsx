import React from 'react';
import { Col, Container, Row, Nav, NavItem, NavLink} from 'reactstrap';

export default class Profile extends React.Component {
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
  }
   
  render() {
    let {imagePreviewUrl} = this.state.avatar;
    let $imagePreview = (<img src={imagePreviewUrl} id="avatar" alt="Awesome alt"/>);

    return (
      <div>
        <Container>
          <Row>
            <Col sm='12' md={{ size: 4, offset: 2 }}>
              {$imagePreview}
            </Col>
            <Col sm='12' md={{ size: 4 }}>
              <p>
                <b>Email:</b> {this.state.email}
              </p>
              <p>
                <b>Name:</b> {this.state.name}
              </p>
              <p>
                <b>Age:</b> {this.state.age}
              </p>
              <Nav pills>
                <NavItem>
                  <NavLink href="/edit" active>Edit</NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

