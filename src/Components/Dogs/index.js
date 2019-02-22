import React, { Component } from "react";
import logo from "../../logo.svg";
import "../../App.css";

import { connect } from "react-redux";

const style = { marginRight: '2%', marginLeft: '2%', marginTop: '1%', marginBottom: '1%' }

class Dogs extends Component {
  componentDidMount(){
    this.props.onRequestDog()
  }

  render() {
    const { dog, error } = this.props;
   
    return (
      <div style={style}>
          <img src={dog || logo} height="200" width="300" alt="logo" />
          <h1 className="App-title">Welcome to Dog Saga</h1>

          <button className='btn btn-primary' onClick={() => this.props.history.push('/breeds')}>
          See more dogs
          </button>

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.dogsReducer.fetching,
    dog: state.dogsReducer.dog,
    error: state.dogsReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dogs);