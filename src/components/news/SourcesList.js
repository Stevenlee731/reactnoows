import React from 'react';
import {Row, Col, Card, CardTitle} from 'react-materialize'

const SourceItem = ({source}) => {
  return (
  <Col s={4}>
    <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
        title={source.name}
        reveal={<p>{source.descrip}</p>}>
        <p><a href="www.google.com">This is a link</a></p>
    </Card>
  </Col>
  )
}

const SourcesList = ({sources, category}) => {
  const filteredSources = sources.filter(source => source.category === category)
  console.log(filteredSources)
  return (
      <Row>
        {filteredSources.map((source, category) =>
          <SourceItem key={source.id} source={source} />
        )}
      </Row>
  )
}

export default SourcesList
