import React from 'react';
import {Row} from 'react-materialize'
import Header from '../common/Header'
import Popular from './Popular'

class HomePage extends React.Component {

    render() {
        return (
          <div>
            <div>
              <Header
                title='React News'
                subTitle='Your relevant React News Hub'
                />
            </div>
            <Row>
              <Popular/>
            </Row>
          </div>
        );
    }
}

export default HomePage;
