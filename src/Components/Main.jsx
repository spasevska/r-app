import React from 'react';
import Axios from 'axios';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            photo: [],
            id: 1
        }
    }

    loadMore() {
        Axios(`http://jsonplaceholder.typicode.com/photos/${this.state.id}`)
            .then((res) => {
                this.setState({
                    post: [...this.state.post, res.data],
                    photo: [...this.state.photo, photos.data],
                    id: this.state.id + 1
                })
            })
    }

    componentDidMount() {
        Axios(`http://jsonplaceholder.typicode.com/photos/${this.state.id}`)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    post: [...this.state.post, res.data],
                    photo: [...this.state.photo, photos.data],
                    id: this.state.id + 1
                })
            })
    }

    render() {
        console.log(this.state.post);
        return (
            <div className='Main'>
                <div className='bg-main'>
                    <div>
                        <button className='btn btn-primary button' onClick={this.loadMore.bind(this)}>Load more</button>
                    </div>
                    <div className='row'>
                        {
                            this.state.post.map((item, index) => {
                                return (
                                    <div className='col-md-4 text-center' key={`post${index}`}>
                                        <div>
                                            <img src={this.state.photo[index] ? this.state.photo[index].thumbnailUrl : ''} alt="img" />
                                        </div>
                                        <h5 style={styleTitle}>{item.title}</h5>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        );
    }
}

const styleTitle = {
    maxHeight: '30px',
    overflow: 'hidden'
}

export default Main;
