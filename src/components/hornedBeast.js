import React from 'react';

class HornedBeasts extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title} Title</h1>
                <p>{this.props.description} </p>
                <img src={this.props.img} alt="" />
            </div>
        )
    }
}

export default HornedBeasts;