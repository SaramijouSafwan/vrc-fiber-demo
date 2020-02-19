import React from 'react';
import {useLoader} from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = (props) => {
    const gltf = useLoader(GLTFLoader, props.url)
    return <primitive object={gltf.scene} dispose={null} />
}

export default Model;