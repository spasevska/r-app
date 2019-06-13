import React from "react";
import { Link } from "react-router-dom";

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditMode: false,
            title: this.props.title
        };
    }

    editGallery = () => {
        this.setState(prevState => {
            return {
                isEditMode: !prevState.edit
            };
        });
    };

    changeEditMode = () => {
        console.log("edit mode");
        this.setState({
            isEditMode: !this.state.isEditMode
        });
    };

    updateValue = () => {
        this.setState({
            isEditMode: false,
            title: this.refs.theTextInput.value
        });
    };

    // renderEditView = () => {
    //     return (
    //         <div>
    //             <div>
    //                 <input className='inputEdit' type="text" defaultValue={title} />
    //             </div>
    //             <div className='icon'>
    //                 <span className='styleEdit edit'>
    //                     <i className='fas fa-check'></i>
    //                 </span>
    //                 <span id='trash' className='styleTrash'>
    //                     <i className='fas fa-times'></i>
    //                 </span>
    //             </div>
    //         </div>
    //     )
    // }

    // renderDefaultView = () => {
    //     return (
    //         <div>
    //             <h5 style={styleTitle}>{title}</h5>
    //             <div className='icon'>
    //                 <span onClick={this.changeEditMode} className='styleEdit edit'>
    //                     <i className='fas fa-edit'></i>
    //                 </span>
    //                 <span onClick={() => this.clickHandler(id)} id='trash' className='styleTrash'>
    //                     <i className='fas fa-trash'></i>
    //                 </span>
    //             </div>
    //         </div>
    //     )
    // }

    clickEdit = () => {
        this.props.editPhoto();
    };

    clickHandler(id) {
        this.props.deleteClickHandler(id);
    }

    render() {
        const { id, thumbnailUrl, title } = this.props;
        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center photo-icon">
                <div style={styleCard}>
                    {/* <div>
                        <i onClick={this.clickEdit} className='fas fa-plus' />
                    </div> */}
                    <Link to={`/PhotoDetal/${id}`}>
                        <div
                            className="bg-image"
                            style={{
                                backgroundImage: `url(${thumbnailUrl})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover"
                            }}
                        />
                        {/* <h5 style={styleTitle}>{title}</h5> */}
                    </Link>
                    {this.state.isEditMode ? (
                        <div>
                            <div>
                                <input className="inputEdit" type="text" defaultValue={title} ref='theTextInput' />
                            </div>
                            <div className="icon">
                                <span onClick={this.updateValue} className="styleEdit edit">
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
                    {/* <div
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
                    </div> */}
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

// const styleEdit = {
//     padding: "6px 8px",
//     backgroundColor: "#474242",
//     color: "white",
//     borderRadius: "5px",
//     marginRight: "15px",
//     cursor: "pointer"
// };

// const styleTrash = {
//     padding: "6px 9px",
//     backgroundColor: "rgb(219, 52, 52)",
//     borderRadius: "5px",
//     cursor: "pointer",
//     color: "white"
// };

export default Gallery;
