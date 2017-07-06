import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import * as newsActions from '../../actions/newsActions'
import {bindActionCreators} from 'redux'
import Header from '../common/Header'
import {Row, Preloader, Col, Card, CardTitle} from 'react-materialize'

const imageStyle = {
  width: '100%'
}

class ArticlePage extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      source: this.props.match.params.id,
      title: this.props.match.params.id
    }
  }

  componentDidMount() {
    this.props.actions.loadArticles(this.state.source).then(() => {
      console.log('finished')
    })
  //   const title = sources.filter(source => {
  //     if (source.id === params) {
  //       console.log(source.name)
  //       return source
  //     }
  //   })
  //
  //   console.log(title[0].name)
  //   this.setState(() => {
  //     return {
  //       title: title[0].name
  //     }
  //   })
  // })
  }


  render() {
    const articles = this.props.articles
    console.log('articles', articles)
      return (
        <div>
          <Header
            title={this.state.title}
            subTitle={this.state.subTitle}
            backgroundImage={this.state.backgroundImage}
          />
          {this.props.loading &&
            <Row>
              <Col s={12}>
                <Preloader size='big'/>
              </Col>
            </Row>
          }
          {!this.props.loading &&
            <Row>
              {articles.map((article, i) =>
                <Col m={4} s={6} key={i} value={i} className="article">
                  <div value={article.name}>
                    <div><img style={imageStyle} src={article.urlToImage}/></div>
                    <div><h5 className="title">{article.title}</h5></div>
                    <div className="description">{article.description}</div>
                    <div className="link"><a target="_new" href={article.url}>view article</a></div>

                  </div>
                </Col>
              )}
            </Row>
          }

        </div>
      );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    sources: state.sources,
    articles: state.articles,
    loading: state.ajaxCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(newsActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticlePage));
