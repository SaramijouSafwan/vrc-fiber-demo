import React from 'react';
import { connect } from 'react-redux';

import BoxGeometryProps from './Three/PropsComponents/BoxGeometryProp';

function Panel(props){
  let boxGeometrySelected = props.blankScene.selectedObject && props.blankScene.selectedObject.type === "Box-Geometry" ? true : false
    return(
      <div>
          <h4> PropProperties Panal</h4>
          {boxGeometrySelected && <BoxGeometryProps />}
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    blankScene: state.blankScene
  }
}


export default connect(mapStateToProps,)(Panel);