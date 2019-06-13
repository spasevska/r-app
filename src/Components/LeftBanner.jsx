import React from 'react';
import Info from './Info';
import Card from './Card';

const LeftBanner = () => {
    return (
        <div className='LeftBanner'>
            <div className='user'>
                <h4><i className="fas fa-user"></i> Jhon Doe</h4>
            </div>
            {
                Info.map((element, i) => {
                    return (
                        <Card img={element.image} name={element.name} key={`info-${i}`} />
                    )
                })
            }
        </div>
    )
}

// class LeftBanner extends React.Component {
//     constructor() {
//         super();

//         this.state = {
//             info: Info
//         }
//     }

//     render() {
//         return (
//             <div className='LeftBanner'>
//                 <div>
//                     <h4><i className="far fa-user"></i> Jhon Doe</h4>
//                     <div>
//                         {
//                             this.state.info.map((element, i) => {
//                                 return (
//                                     <div>
//                                         <Card img={element.image} name={element.name} key={`info-${i}`} />
//                                     </div>
//                                 )
//                             })
//                         }
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

export default LeftBanner;
