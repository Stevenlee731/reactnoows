import React from 'react';
import {Col} from 'react-materialize'

const SourcesCategory = ({categories, onClick}) => {
    return (
      <div>
        {categories.map((category, i) =>
          <Col m={4} s={6} key={i} value={i} className='category-column'>
            <div onClick={onClick} value={category.category} className='category-box aligner'>
              <div>
                <h4>{category.category}</h4>
              </div>
            </div>
          </Col>
        )}
      </div>
    )

}

export default SourcesCategory
