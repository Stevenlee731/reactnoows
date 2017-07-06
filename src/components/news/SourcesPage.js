import React, {Component} from 'react';
import SourcesList from './SourcesList'
import Header from '../common/Header'
import PropTypes from 'prop-types'
import {Row, Col, Card, CardTitle} from 'react-materialize'
import {connect} from 'react-redux'
import * as newsActions from '../../actions/newsActions'
import {bindActionCreators} from 'redux'
import SourcesCategory from './SourcesCategory'

class SourcesPage extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      title: 'News Sources',
      subTitle: 'Choose from these curated News Sources',
      category: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    console.log(event.target)
    // this.setState(() => {
    //   return { category: true }
    // })
  }

    render() {
      const category = this.state.category
        return (
          <div>
            <Header
              title={this.state.title}
              subTitle={this.state.subTitle}
              backgroundImage={this.state.backgroundImage}
            />
            <Row>
              {!category && <SourcesCategory categories={this.props.categories} onClick={this.handleClick}/>}
              {category && <SourcesList sources={this.props.sources}/>}
            </Row>
          </div>
        );
    }
}

SourcesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  sources: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    sources: state.sources,
    categories: state.categories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(newsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SourcesPage);