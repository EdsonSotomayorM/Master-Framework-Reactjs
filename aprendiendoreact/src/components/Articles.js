import React, { Component } from 'react';
import axios from 'axios';

class Articles extends Component {


    state = {
        articles: [],
        status: null
    }

    componentWillMount() {
        this.getArticles();
    }



    getArticles = () => {
        axios.get("http://127.0.0.1:3900/api/articles")
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
                console.log(this.state);
            });
    }


    render() {

        return (
            <div id="articles">
                <h1>Hola Mundo</h1>
            </div>
        );
    }

}

export default Articles;