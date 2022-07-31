import React from "react";


export default class Child extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h3>{this.props.data.name}</h3>
                <button style={{display: "flex", marginLeft: "20px", marginTop: "20Px"}} onClick={() => this.props.data.changeName("Child Name Change")} />
            </div>
        )
    }
}