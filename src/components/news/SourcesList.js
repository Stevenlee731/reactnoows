import React from 'react';
import {Row, Col, Card, CardTitle} from 'react-materialize'

const SourceItem = ({source, onClick}) => {
  return (
    <Col m={4} s={6} className='category-column'>
      <div onClick={onClick} value={source.id} className='category-box aligner'>
        {source.name}
      </div>
    </Col>
  )
}

const SourcesList = ({sources, category, onClick}) => {
  const filteredSources = sources.filter(source => source.category === category)
  console.log(filteredSources)
  return (
      <Row>
        {filteredSources.map((source) =>
          <SourceItem onClick={onClick} key={source.id} source={source} />
        )}
      </Row>
  )
}

export default SourcesList
