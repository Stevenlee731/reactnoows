import React from 'react';
import {Row, Col, Card, CardTitle} from 'react-materialize'

const SourceItem = ({source}) => {
  return (
  <Col s={4}>
    <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
        title={source.name}
        reveal={<p>{source.description}</p>}>
        <p><a href="www.google.com">This is a link</a></p>
    </Card>
  </Col>
  )
}

const SourcesList = ({sources}) => {
  console.log(sources)
  return (
      <Row>
        {sources.map(source =>
          <SourceItem key={source.id} source={source} />
        )}
      </Row>
  )
}

export default SourcesList
