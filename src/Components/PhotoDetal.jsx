import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class PhotoDetal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: [],
            id: this.props.match.params.id,
            like: false
        };
    }

    likePhoto = () => {
        this.setState(prevState => {
            return {
                like: !prevState.like
            }
        });
    };

    componentDidMount() {
        axios(`http://jsonplaceholder.typicode.com/photos/${this.state.id}`).then(
            p => {
                this.setState({
                    info: p.data
                });
            }
        );
    }

    render() {
        const { thumbnailUrl, title } = this.state.info;
        return (
            <div className="Main">
                <div className="bg-main">
                    <div className="row">
                        <div className="col-xs-12 col-xs-offset-0 col-sm-6 col-sm-offset-1 col-md-6 col-md-offset-1 col-lg-6 col-lg-offset-1">
                            <div className="item">
                                <div className="inner-img">
                                    <img
                                        className="img-responsive"
                                        src={thumbnailUrl}
                                        alt="img"
                                    />
                                    <button onClick={this.likePhoto} className="heart">
                                        <i className={this.state.like ? "fas fa-heart red" : "fas fa-heart"} />
                                    </button>
                                </div>
                                <div className="title">
                                    <h5>{title}</h5>
                                </div>
                            </div>
                        </div>
                        <Link to="/">
                            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 photo-detal-icon">
                                <div className='mobile-hidden'>
                                    <i className="fas fa-arrow-left" />
                                </div>
                                <div className='Like'>
                                    <h5 className='red'>
                                        {
                                            this.state.like ? 'You like this photo' : ''
                                        }
                                    </h5>
                                </div>
                                <div className='t-d-hidden'>
                                    <i className="fas fa-arrow-left" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default PhotoDetal;
