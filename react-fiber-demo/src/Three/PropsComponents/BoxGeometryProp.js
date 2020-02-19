import React from 'react';
import {connect} from 'react-redux';
import {updateMesh} from "../../Store/Action/blankSceneAction";

const BoxGeometryProps = (props) => {
    let selectedObjectId = props.blankScene.selectedObject.id;
    let selectedObject = props.blankScene.selectedObject;
    return(
        <div>
            <div>
                {"ID =  " + selectedObjectId}
            </div>
            <br />
            <button onClick= {() => props.updateMesh(
                selectedObjectId, {...selectedObject, visible: !selectedObject.visible})}
            >  Visible </button>

            <button onClick= {() => props.updateMesh(
                selectedObjectId, {...selectedObject, castShadow: !selectedObject.castShadow})}
            > Cast Shadow </button>

            <button onClick= {() => props.updateMesh(
                selectedObjectId, {...selectedObject, receiveShadow: !selectedObject.receiveShadow})}> Recive Shadow </button>
            <br /> <br />
            <div>
                {"X : " + selectedObject.position[0]}
                <button onClick= {() => props.updateMesh(
                selectedObjectId, {...selectedObject, position: [selectedObject.position[0] + 1, selectedObject.position[1], selectedObject.position[2]]})}>+</button>
                <button onClick= {() => props.updateMesh(
                selectedObjectId, {...selectedObject, position: [selectedObject.position[0] - 1, selectedObject.position[1], selectedObject.position[2]]})}>-</button>
                <br />
                {"Y : " + selectedObject.position[1]}
                <button onClick= {() => props.updateMesh(
                selectedObjectId, {...selectedObject, position: [selectedObject.position[0], selectedObject.position[1] + 1, selectedObject.position[2]]})}>+</button>
                <button onClick= {() => props.updateMesh(
                selectedObjectId, {...selectedObject, position: [selectedObject.position[0], selectedObject.position[1] - 1, selectedObject.position[2]]})}>-</button>
                <br />
                {"Z : " + selectedObject.position[2]}
                <button onClick= {() => props.updateMesh(
                selectedObjectId, {...selectedObject, position: [selectedObject.position[0], selectedObject.position[1], selectedObject.position[2] + 1]})}>+</button>
                <button onClick= {() => props.updateMesh(
                selectedObjectId, {...selectedObject, position: [selectedObject.position[0], selectedObject.position[1], selectedObject.position[2] - 1]})}>-</button>
                <br /> <br />
            </div>
            <div>
                {"Width : " + + selectedObject.dimensions[0]}       
                <button onClick= {() => props.updateMesh(
                selectedObjectId, {...selectedObject, dimensions: [selectedObject.dimensions[0] + 1, selectedObject.dimensions[1], selectedObject.dimensions[2]]})}>+</button>
                <button onClick= {() => props.updateMesh(
                selectedObjectId, {...selectedObject, dimensions: [selectedObject.dimensions[0] - 1, selectedObject.dimensions[1], selectedObject.dimensions[2]]})}>-</button>
                <br />
                {"Hight : " + selectedObject.dimensions[1]}
                <button onClick= {() => props.updateMesh(
                selectedObjectId, {...selectedObject, dimensions: [selectedObject.dimensions[0], selectedObject.dimensions[1] + 1, selectedObject.dimensions[2]]})}>+</button>
                <button onClick= {() => props.updateMesh(
                selectedObjectId, {...selectedObject, dimensions: [selectedObject.dimensions[0], selectedObject.dimensions[1] - 1, selectedObject.dimensions[2]]})}>-</button>
                
                <br />
                {"Depth : " + + selectedObject.dimensions[2]}
                <button onClick= {() => props.updateMesh(
                selectedObjectId, {...selectedObject, dimensions: [selectedObject.dimensions[0], selectedObject.dimensions[1], selectedObject.dimensions[2] + 1]})}>+</button>
                <button onClick= {() => props.updateMesh(
                selectedObjectId, {...selectedObject, dimensions: [selectedObject.dimensions[0], selectedObject.dimensions[1], selectedObject.dimensions[2] - 1]})}>-</button>
                <br /> <br />
            </div>
            <div>
                <button onClick= {() => props.updateMesh(
                    selectedObjectId, {...selectedObject, material: "Basic"})}
                > Basic Material </button> <br />
            
                <button onClick= {() => props.updateMesh(
                    selectedObjectId, {...selectedObject, material: "Normal"})}
                > Normal Material </button> <br />

                <button onClick= {() => props.updateMesh(
                    selectedObjectId, {...selectedObject, material: "Phong"})}
                > Phong Material </button> <br />

                <input type="color" />
            </div>
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
      updateMesh: (meshId, updatedObject) => {dispatch(updateMesh(meshId, updatedObject))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoxGeometryProps);

