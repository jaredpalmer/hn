import React, { Component } from 'react';
import Nav from './components/Nav'
import Story from './components/Story'
import Repo from './components/Repo'
import {css, withStyles} from './withStyles'

class App extends Component {
  constructor() {
    super()
    this.state = {
      section: 'topstories',
      data: [],
      ids: [],
      page: 1,
      paging: false,
      done: false
    }
    this.fetchRepos = this.fetchRepos.bind(this)
    this.checkWindowScroll = this.checkWindowScroll.bind(this)
    this.getPage = this.getPage.bind(this)
  }

  checkWindowScroll () {
    // Get scroll pos & window data
    const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    const s = document.body.scrollTop
    const scrolled = (h + s) + 300 > document.body.offsetHeight

    // If scrolled enough, not currently paging and not complete...
    if (scrolled && !this.state.paging && !this.state.done) {
      // Set application state (Paging, Increment page)
      this.setState({paging: true, page: this.state.page + 1})

      // Get the next page of repos from the server
      this.getPage(this.state.page)
    }
  }

  getPage (page) {
    Promise.all(this.state.ids.slice((page*30 - 30), page*30).map(id => (
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`))
          .then(response => response.json())
      ))
      .then(res => {
        if (res.length > 0) {
          const updatedData = this.state.data
          res.forEach(item => updatedData.push(item))
          this.setState({ data: updatedData, paging: false })
        } else {
          this.setState({ paging: false, done: true })
        }
      }).catch(e => {
        console.log(e)
        this.setState({ paging: false, done: true })
      })
  }

  componentDidMount () {
    window.addEventListener('scroll', this.checkWindowScroll)
    fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`)
      .then(response => response.json())
      .then(ids => {
        this.setState({ ids }, () => this.getPage(this.state.page))
      })
  }


  fetchRepos() {
    this.setState({ isLoading:true })
    fetch(`https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc`)
      .then(response => response.json())
      .then(res => this.setState({
          isLoading: false,
          data: res.items,
          lastFetched: new Date()
        })
      )
  }

  render() {
    const { styles } = this.props
    return (
      <div>
        <Nav />
        {this.state.isLoading && <div>Loading....</div>}
        <ol {...css(styles.stories)}>
        {!this.state.isLoading &&
          this.state.data.map((item, i) => <Story key={item.id} item={item}/>)}
        </ol>
      </div>
    );
  }
}

export default withStyles(({ color, unit }) => ({
  stories: {
    background: color.white,
    listStyle: 'decimal',
    paddingTop: unit(3),
    '@media only screen and (min-width: 916px)': {
      maxWidth: 800,
      marginLeft: 116,
    },
  }
}))(App);
