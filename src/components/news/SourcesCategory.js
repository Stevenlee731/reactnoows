import React, {Component} from 'react';
import {Row, Col, Card, CardTitle} from 'react-materialize'
import newsImg from '../../assets/img/news-sources.jpg'

const SourcesCategory = ({categories, onClick}) => {
    return (
      <div>
        {categories.map((category, i) =>
          <Col m={4} s={6} key={i} value={i} className='category-column'>
            <div onClick={onClick} value={category.category} className='category-box aligner'>
              {category.category}
            </div>
          </Col>
        )}
      </div>
    )

}

export default SourcesCategory
