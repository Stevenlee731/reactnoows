import React from 'react';
import {Row, Col, Card, CardTitle} from 'react-materialize'
import coverImg from '../../assets/img/reactnoows.jpg'

const divStyle = {
  textAlign: 'left',
  backgroundImage: `url(${coverImg})`,
  backgroundSize: 'cover',
  height: '70vh',
}

const hStyle = {
  fontWeight: 'bold',
  color: '#5FCF80'
}

class HomePage extends React.Component {

    render() {
        return (
            <Row>
              <div></div>
            </Row>
        );
    }
}

export default HomePage;
