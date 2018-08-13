import React from "react";
import PropTypes from "prop-types";

class AutoScalingInput extends React.Component {
  constructor(props) {
    super(props);

    this.ownRef = React.createRef();
    this.inputRef = React.createRef();

    this.state = {
      scale: 1
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }

    // Calculate children width
    const childrenWidth = this.inputRef.current.offsetWidth;
    // Get the max width
    const maxWidth = this.ownRef.current.offsetWidth;

    // Compare children width to max width
    // If larger, set scale to maxWidth/childrenWidth
    // If not, set scale to 1
    this.setState({
      scale: Math.min(1, maxWidth / childrenWidth)
    });
  }

  render() {
    return (
      <div ref={this.ownRef} style={{transform:`scale(${this.state.scale})`}}>
        <input ref={this.inputRef} {...this.props} onChange={this.onChange} />
      </div>
    );
  }
}

export default AutoScalingInput;