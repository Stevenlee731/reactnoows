import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as newsActions from '../../actions/newsActions'
import {bindActionCreators} from 'redux'
import {Row, Preloader, Col} from 'react-materialize'
import placeholderImg from '../../assets/img/dark-triangles.png'

const imageStyle = {
  width: '100%'
}

const headingStyle = {
  textAlign: 'left',
  fontWeight: 'bold',
  marginBottom: '0',
  marginTop: '0'
}

const rowStyle = {
  paddingTop: '22rem',
  marginBottom: '0',
  paddingLeft: '0.75rem'
}

const titleStyle = {
  width: '100%',
  fontWeight: 'bold',
  fontSize: '2rem',
  textAlign: 'left',
  padding: '0 1rem',
}


class Popular extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);
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
          {this.state.loading &&

            <Row className="preloader-home">
              <Col s={12}>
                <Preloader size='big'/>
              </Col>
            </Row>
          }
          {!this.state.loading &&
            <div>
              <Row style={rowStyle}>
                <div>
                  <h2 style={headingStyle}>What{"'"}s Popular</h2>
                </div>
              </Row>
              <Row>
                {articles.first.articles.slice(0,2).map((article, i) => {

                  return (
                    <Col m={6} s={12} key={i} value={i} className="article-home">
                      <div className="border">
                        <div>
                          <img style={imageStyle} src={imageUrl(article.urlToImage)} alt={article.title}/>
                        </div>
                        <div className="border-box">
                          <div className="content">
                            <div className="flex">
                              <div className="title">{articles.first.source}</div>
                              <h6 style={titleStyle}>{article.title}</h6>
                              <div className="description">{article.description}</div>
                            </div>
                          </div>
                          <div className="link"><a target="_new" href={article.url}>view article</a></div>
                        </div>
                      </div>
                    </Col>
                  )
                })}
              </Row>
              <Row>
                {articles.second.articles.slice(0,2).map((article, i) => {

                  return (
                    <Col m={6} s={12} key={i} value={i} className="article-home">
                      <div className="border">
                        <div>
                          <img style={imageStyle} src={imageUrl(article.urlToImage)} alt={article.title}/>
                        </div>
                        <div className="border-box">
                          <div className="content">
                            <div className="flex">
                              <div className="title">{articles.second.source}</div>
                              <h6 style={titleStyle}>{article.title}</h6>
                              <div className="description">{article.description}</div>
                            </div>
                          </div>
                          <div className="link"><a target="_new" href={article.url}>view article</a></div>
                        </div>
                      </div>
                    </Col>
                  )
                })}
              </Row>
              <Row>
                {articles.third.articles.slice(0,2).map((article, i) => {

                  return (
                    <Col m={6} s={12} key={i} value={i} className="article-home">
                      <div className="border">
                        <div>
                          <img style={imageStyle} src={imageUrl(article.urlToImage)} alt={article.title}/>
                        </div>
                        <div className="border-box">
                          <div className="content">
                            <div className="flex">
                              <div className="title">{articles.third.source}</div>
                              <h6 style={titleStyle}>{article.title}</h6>
                              <div className="description">{article.description}</div>
                            </div>
                          </div>
                          <div className="link"><a target="_new" href={article.url}>view article</a></div>
                        </div>
                      </div>
                    </Col>
                  )
                })}
              </Row>
            </div>
          }

        </div>
      );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    articles: state.homePageArticles,
    loading: state.ajaxCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(newsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Popular);
