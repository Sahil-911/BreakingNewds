import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [];
    constructor() {
        super();
        console.log("News constructor called");
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
    };

    async componentDidMount() {
        console.log("News component did mount called");
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&page=2&pagesize=18&apiKey=aacce8652f284af49a70dcfd2d7fefc8`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }

    handlePrevclick = async () => {
        console.log('Previous');
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&page=${this.state.page - 1}&pagesize=18&apiKey=aacce8652f284af49a70dcfd2d7fefc8`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        });
    }

    handleNextclick = async () => {
        console.log('Next');
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 18)) {
            console.log("No more pages");
        }
        else {

            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&page=${this.state.page + 1}&pagesize=18&apiKey=aacce8652f284af49a70dcfd2d7fefc8`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            });
        }

    }

    render() {
        return (
            <div className="container my-3">
                <h2>
                    Breaking-Newds Top Headlines
                </h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 90) : ""} imgUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page===1} className="btn btn-dark" onClick={this.handlePrevclick}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page===Math.ceil(this.state.totalResults / 18)} className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News