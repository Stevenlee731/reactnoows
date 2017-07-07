import React from 'react';
import {Row, Col} from 'react-materialize'

const Header = props => {
  const divStyle = {
    textAlign: 'left',
  }

  const pStyle = {
    paddingLeft: '4rem',
    color: 'white',
  }

  const headerStyle = {
    paddingLeft: '3rem',
    fontWeight: 'bold',
    color: 'white',
    borderLeft: '10px solid white'
  }

  return (
    <Row className='row-header'>
      <Col style={divStyle} s={12}>
        <h1 style={headerStyle}>{props.title}</h1>
        <p style={pStyle}>{props.subTitle}</p>
      </Col>
    </Row>
  );
};


export default Header;
