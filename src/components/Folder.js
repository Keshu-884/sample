// import React, { useState } from "react";

// function Folder({ explorer }) {
//     const [expand, setExpand] = useState(false);
//     if (explorer.isFolder) {
//         return (
//             <div>
//                 <span onClick={() => setExpand(!expand)}>
//                     {explorer.name}
//                 </span>

//                 <div style={{ display: expand ? 'block' : 'none', paddingLeft: 15 }}>
//                     {explorer.items.map((exp) => {
//                         return <Folder key={exp.name} explorer={exp} />
//                     })}
//                 </div>
//             </div>
//         )
//     } else {
//         return (
//             <span>
//                 {explorer.name}
//                 <br />
//             </span>
//         )
//     }
// }

// export default Folder;

import React from "react";

class Folder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false
        }
    }
    setExpand = (expand) => {
        this.setState({ expand })
    };
    componentDidMount(){
        this.setExpand()
    }
    render() {
        if (this.props && this.props.explorer.isFolder) {
            return (
                <div>
                    <span onClick={()=> this.setExpand(!this.state.expand)}>
                        {this.props.explorer.name}
                    </span>

                    <div style={{ display: this.state.expand ? 'block' : 'none', paddingLeft: 15 }}>
                        {this.props.explorer.items.map((exp) => {
                            return <Folder key={exp.name} explorer={exp} />
                        })}
                    </div>
                </div>

            )
        } else {
            return (
                <span>
                    {this.props.explorer.name}
                    <br />
                </span>
            )
        }
    }
}

export default Folder;
