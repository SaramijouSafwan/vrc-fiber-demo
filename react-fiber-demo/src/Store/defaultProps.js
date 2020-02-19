export const defaultCameraProps = {
    aspect: window.innerWidth / window.innerHeight,
    fov: 45,
    near: 0.1,
    far: 500,
    position: [15, 10, 15]
}

export const defaultBoxGeometryProps = {
    id: "",
    type: "Box-Geometry",
    visible: true,
    position: [0, 0, 0],
    dimensions: [2, 2, 2],
    material: "Normal",
    color: 0xff3300,
    castShadow: false,
    receiveShadow: false,
}

