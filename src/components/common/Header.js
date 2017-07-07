import React from 'react';
import {Row, Col} from 'react-materialize'

const Header = props => {
  const divStyle = {
    textAlign: 'left',
    borderBottom: '1px solid #e5e5e5'
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
