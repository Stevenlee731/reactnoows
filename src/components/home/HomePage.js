import React from 'react';
import {Row, Col} from 'react-materialize'

class HomePage extends React.Component {

    render() {
        return (
            <Row>
              <Col s={12} className='grid-example'>
                <h1>React News</h1>
                <p>Your relevant news hub</p>
              </Col>
            </Row>
        );
    }
}

export default HomePage;
