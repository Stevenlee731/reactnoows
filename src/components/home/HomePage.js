import React from 'react';
import {Row, Col} from 'react-materialize'
import coverImg from '../../assets/img/reactnoows.jpg'

const divStyle = {
  textAlign: 'left'
}

class HomePage extends React.Component {

    render() {
        return (
            <Row>
              <div className="cover">
                <Col s={12} style={divStyle}>
                  <h1>React News</h1>
                  <p>Your relevant news hub</p>
                </Col>
              </div>
            </Row>
        );
    }
}

export default HomePage;
