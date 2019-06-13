import React from "react";
import { Link } from "react-router-dom";

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditMode: false,
        };
    }

    editGallery = () => {
        this.setState({
            isEditMode: !this.state.isEditMode
        });
    };

    changeEditMode = () => {
        console.log("edit mode");
        this.setState({
            isEditMode: !this.state.isEditMode
        });
    };

    updateValue = () => {
        console.log("update");
        this.setState({
            isEditMode: false,
            title: this.refs.theTextInput.value,
        });
    };

    clickHandler(id) {
        this.props.deleteClickHandler(id);
    }

    render() {
        const { id, thumbnailUrl, title } = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center photo-icon">
                <div style={styleCard}>
                    <Link to={`/PhotoDetal/${id}`}>
                        <div
                            className="bg-image"
                            style={{
                                backgroundImage: `url(${thumbnailUrl})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover"
                            }}
                        />
                    </Link>
                    {this.state.isEditMode ? (
                        <div>
                            <div>
                                <input
                                    className="inputEdit"
                                    type="text"
                                    defaultValue={title}
                                    ref="theTextInput"
                                />
                            </div>
                            <div className="icon">
                                <span
                                    onClick={this.updateValue}
                                    className="styleEdit edit"
                                >
                                    <i className="fas fa-check" />
                                </span>
                                <span
                                    onClick={this.changeEditMode}
                                    id="trash"
                                    className="styleTrash"
                                >
                                    <i className="fas fa-times" />
                                </span>
                            </div>
                        </div>
                    ) : (
                            <div>
                                <h5 style={styleTitle}>{title}</h5>
                                <div className="icon">
                                    <span onClick={this.changeEditMode} className="styleEdit edit">
                                        <i className="fas fa-edit" />
                                    </span>
                                    <span
                                        onClick={() => this.clickHandler(id)}
                                        id="trash"
                                        className="styleTrash"
                                    >
                                        <i className="fas fa-trash" />
                                    </span>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        );
    }
}

const styleCard = {
    padding: "5px",
    border: "1px solid lightgrey",
    borderRadius: "5px",
    marginBottom: "10px"
};

const styleTitle = {
    height: "31px",
    overflow: "hidden",
    width: "80%",
    margin: "0 auto",
    marginTop: "8px"
};

export default Gallery;
