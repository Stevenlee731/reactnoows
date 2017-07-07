import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import * as newsActions from '../../actions/newsActions'
import {bindActionCreators} from 'redux'
import Header from '../common/Header'
import {Button, Icon, Row, Preloader, Col, Card, CardTitle} from 'react-materialize'
import placeholderImg from '../../assets/img/dark-triangles.png'

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

    this.renderTitle = this.renderTitle.bind(this)
  }

  componentDidMount() {
    this.props.actions.loadArticles(this.state.source)
  }


  renderTitle(sources) {
    const params = this.state.title
    const title = sources.filter(source => {
      if (source.id === params) {
        console.log(source.name)
        return source.name
      }
    })
  }

  render() {
    const articles = this.props.articles
    const imageUrl = url => {
      if (!url) {
        return placeholderImg
      }
      else {
        return url
      }
    }
      return (
        <div>
          {this.props.loading &&
            <Row className="preloader">
              <Col s={12}>
                <Preloader size='big'/>
              </Col>
            </Row>
          }
          {!this.props.loading &&
            <div>
              <Header
                title={this.state.title}
                subTitle={this.state.subTitle}
                />
              <Row className='row-articles'>
                {articles.map((article, i) =>
                  <Col m={4} s={12} key={i} value={i} className="article">
                    <div className="border">
                      <div>
                        <img style={imageStyle} src={imageUrl(article.urlToImage)}/>
                      </div>
                      <div className="border-box">
                        <div className="content">
                          <div className="flex">
                            <div className="title">{article.title}</div>
                            <div className="description">{article.description}</div>
                          </div>
                        </div>
                        <div className="link"><a target="_new" href={article.url}>view article</a></div>
                      </div>
                    </div>
                  </Col>
                )}
              </Row>
            </div>
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
