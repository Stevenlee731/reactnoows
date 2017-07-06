import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {connect} from 'react-redux'
import * as newsActions from '../../actions/newsActions'
import {bindActionCreators} from 'redux'
import SourcesCategory from './SourcesCategory'
import {
  withRouter
} from 'react-router-dom'


class ArticlePage extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      source: this.props.match.params.id
    }
  }
  render() {
    {this.props.actions.loadArticles(this.state.source)}
      return (
        <div className='category-box aligner'>
        </div>
      );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    sources: state.sources
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(newsActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticlePage));
