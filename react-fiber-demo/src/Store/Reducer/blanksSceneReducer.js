import uuid from "uuid/v1";
import {defaultCameraProps} from '../defaultProps';

const defaultBlankSceneState = {
  defaultCamera: defaultCameraProps,
  meshes: [],
  selectedObject: {}
}

const sceneReducer = (state = defaultBlankSceneState, action) => {
    switch (action.type) {
      case "UPDATE-CAMERA": {
        state = {...state, defaultCamera: action.payload}
        break;
      }
      case "ADD-MESH":{
        const mesh = {...action.payload, id: uuid()};
        state = {...state, meshes: [...state.meshes, mesh]};
        break;
      }
      case "DELETE-MESH":{
        const result = state.meshes.filter(({id}) => id !== action.payload);
        state = {...state, meshes: result};
        break;
      }
      case "UPDATE-MESH": {
        const result = state.meshes.filter(({id}) => id !== action.payload.id);
        state = {...state, meshes: [...result, action.payload.object], selectedObject: action.payload.object};
        break;
      }
      case "SELECT-OBJECT": {
        if(action.payload.type === "MESH") {
          const mesh = state.meshes.find(({id}) => id === action.payload.id);
          state = {...state, selectedObject: mesh};
        }
        else if(action.payload.type === "DEFAULT-CAMERA") {
          state = {...state, selectedObject: state.defaultCamera}
        }
        break;
      }
      default: {
        break;
      }
    }
    return state;
};

export default sceneReducer;