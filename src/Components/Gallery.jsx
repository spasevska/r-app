import React from "react";
import { Link } from "react-router-dom";

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            edit: false
        };
    }

    editGallery = () => {
        this.setState(prevState => {
            return {
                edit: !prevState.edit
            };
        });
    };

    clickEdit = () => {
        this.props.editPhoto()
    }

    clickHandler(id) {
        this.props.deleteClickHandler(id);
    }

    render() {
        const { id, thumbnailUrl, title } = this.props;
        return (
            <div className="col-md-4 text-center photo-icon">
                <div style={styleCard}>
                    <div>
                        <i onClick={this.clickEdit} className={this.state.edit ? "fas fa-plus visible" : 'fas fa-plus'} />
                    </div>
                    <Link to={`/PhotoDetal/${id}`}>
                        <div
                            className="bg-image"
                            style={{
                                backgroundImage: `url(${thumbnailUrl})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover"
                            }}
                        >
                        </div>
                        <h5 style={styleTitle}>{title}</h5>
                    </Link>
                    <div
                        className="icon"
                        style={{ marginTop: "10px", marginBottom: "10px" }}
                    >
                        <span onClick={this.editGallery} className="edit" style={styleEdit}>
                            <i className={this.state.edit ? "fas fa-check" : "fas fa-edit"} />
                        </span>
                        <span
                            onClick={() => this.clickHandler(id)}
                            id="trash"
                            style={styleTrash}
                        >
                            <i className={this.state.edit ? "fas fa-times" : "fas fa-trash"} />
                        </span>
                    </div>
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
    // maxHeight: '14px',
    height: "28px",
    overflow: "hidden",
    width: "80%",
    margin: "0 auto",
    marginTop: "8px"
};

const styleEdit = {
    padding: "6px 8px",
    backgroundColor: "#474242",
    color: "white",
    borderRadius: "5px",
    marginRight: "15px",
    cursor: "pointer"
};

const styleTrash = {
    padding: "6px 9px",
    backgroundColor: "rgb(219, 52, 52)",
    borderRadius: "5px",
    cursor: "pointer",
    color: "white"
};

export default Gallery;
