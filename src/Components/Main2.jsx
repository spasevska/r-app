import React from 'react';
import axios from 'axios';
// import Gallery from './Gallery';
import Gallery2 from './Gallery2';

class Main2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: [],
            id: 16,
        }
    }

    loadMore() {
        axios(`http://jsonplaceholder.typicode.com/photos/${this.state.id}`)
            .then((res) => {
                // console.log(res.data);
                this.setState({
                    profile: [...this.state.profile, res.data],
                    id: this.state.id + 1
                })
            })
    }

    deletePhoto = (id) => {
        let tempArr = [];
        tempArr = this.state.profile.filter(el => el.id !== id);
        this.setState({ profile: tempArr });
        // console.log(tempArr);
    }

    componentDidMount() {
        axios('http://jsonplaceholder.typicode.com/photos?_limit=15')
            .then((photos) => {
                // console.log(photos.data);
                this.setState({
                    profile: photos.data
                })
            })
    }

    render() {
        const { profile } = this.state;
        console.log(profile);
        return (
            <div className='Main'>
                <div className='bg-main'>
                    <div className='row'>
                        {
                            profile.map((element, i) => {
                                return (
                                    // <Gallery deleteClickHandler={this.deletePhoto} editPhoto={this.editPhoto} thumbnailUrl={element.thumbnailUrl} title={element.title} id={element.id} key={i} />

                                    <Gallery2 deleteClickHandler={this.deletePhoto} editPhoto={this.editPhoto} thumbnailUrl={element.thumbnailUrl} title={element.title} id={element.id} key={i} />
                                )
                            })
                        }
                    </div>
                    <div className='row'>
                        <div className='col-md-12 text-center' style={{ margin: '15px auto' }}>
                            <button className='btn btn-primary' onClick={() => this.loadMore()}>Load more</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main2;