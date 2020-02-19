import React from 'react';
import { Canvas } from "react-three-fiber";
import {connect} from "react-redux";

import BlankScene from './Three/Components/BlankScene';
import ObjectsPanel from './ObjectsPanel';
import PropsPanel from './PropsPanel';

function App(props) {

  return (
    <div className="page">

      <div className="objects">
        <ObjectsPanel />
      </div> 

      <div className="props">
        <PropsPanel />
      </div>

      <div className="scene">
        <Canvas camera={props.blankScene.defaultCamera}>
            <BlankScene />
        </Canvas>
      </div>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      blankScene: state.blankScene
  };
};

export default connect(mapStateToProps, )(App);



