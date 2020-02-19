import {defaultBoxGeometryProps} from "../defaultProps";

export function addMesh() {
    return {
        type: "ADD-MESH",
        payload: defaultBoxGeometryProps
    };
}

export function deleteMesh(meshId) {
    return {
        type: "DELETE-MESH",
        payload: meshId
    };
}

export function updateMesh(meshId, updatedObject) {
    return {
        type: "UPDATE-MESH",
        payload: {id: meshId, object: updatedObject}
    };
}

export function selectObject(objectId, objectType) {
    return {
        type: "SELECT-OBJECT",
        payload: {id: objectId, type: objectType}
    };
}

