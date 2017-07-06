import React from 'react';
import {Row, Col} from 'react-materialize'


const Header = props => {
  const divStyle = {
    textAlign: 'center',
  }

  return (
    <Row>
      <Col style={divStyle} s={12}>
        <h1>{props.title}</h1>
        <p>{props.subTitle}</p>
      </Col>
    </Row>
  );
};


export default Header;
