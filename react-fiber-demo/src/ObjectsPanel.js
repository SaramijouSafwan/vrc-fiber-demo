import React from 'react';
import { connect } from 'react-redux';
import {addMesh} from "./Store/Action/blankSceneAction";

function ObjectsPanel(props){
    return(
      <div>
        <button onClick={()=> props.addMesh()}> 
            BoxGeometry 
        </button>
      </div>
    )
}

const mapStateToProps = (state) => {
    return{
        blankScene: state.blankScene
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
      addMesh: () => {dispatch(addMesh())}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ObjectsPanel);