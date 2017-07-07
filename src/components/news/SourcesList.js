import React from 'react';
import {Row, Col} from 'react-materialize'

const SourceItem = ({source, onClick}) => {
  return (
    <Col m={4} s={6} className='category-column'>
      <div onClick={onClick} value={source.id} className='category-box aligner'>
        <h4>{source.name}</h4>
      </div>
    </Col>
  )
}

const SourcesList = ({sources, category, handleNewSource}) => {
  const filteredSources = sources.filter(source => source.category === category)
  console.log(filteredSources)
  return (
      <Row>
        {filteredSources.map((source) =>
          <SourceItem onClick={() => {handleNewSource(source.id)}} key={source.id} source={source} />
        )}
      </Row>
  )
}

export default SourcesList
