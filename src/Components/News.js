import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className="container my-3">
                <h2>
                    Breaking-Newds Top Headlines
                </h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title='first title' description='firstdesc' />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title='first title' description='firstdesc' />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title='first title' description='firstdesc' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title='first title' description='firstdesc' />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title='first title' description='firstdesc' />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title='first title' description='firstdesc' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title='first title' description='firstdesc' />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title='first title' description='firstdesc' />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title='first title' description='firstdesc' />
                    </div>
                </div>
            </div>
        )
    }
}

export default News