import React, { useRef }  from 'react'
import { useResource, useFrame } from 'react-three-fiber'

import TransformControl from '../Controls/TransformControl'
import store from '../../Store/store';
import { selectObject } from '../../Store/Action/blankSceneAction';

const BoxGeometry = (props) => {
  const [ref, mesh] = useResource();
  const boxHelperRef = useRef();

  let hovered = store.getState().blankScene.selectedObject.id === props.name ? true : false;
  let state = store.getState().blankScene.meshes.find(({id})=> id === props.name);

  let basicMaterial = state.material === "Basic" ? true : false;
  let normalMaterial = state.material === "Normal" ? true : false;
  let phongMaterial = state.material === "Phong" ? true : false;

  useFrame(() => {
    if(boxHelperRef.current)
      boxHelperRef.current.update(mesh) 
  });
  
  return (
    <>
      <mesh ref={ref} 
        visible={state.visible}
        position={state.position}
        onClick={() => store.dispatch(selectObject(props.name, "MESH")) }
        castShadow={state.castShadow}
        receiveShadow={state.receiveShadow}
        {...props}
      >
        <boxGeometry attach="geometry" args={state.dimensions} />
        {normalMaterial && <meshNormalMaterial attach="material" />}
        {basicMaterial  && <meshBasicMaterial attach="material" color={state.color}/>}
        {phongMaterial  && <meshPhongMaterial attach="material" color={state.color}/>}
      </mesh>
      
      { hovered ? mesh  && <TransformControl orbit={props.orbit} mesh={mesh} /> : null}
      { hovered ? mesh  && <boxHelper args={[mesh, 0xffff00]} ref={boxHelperRef}/> : null}
    </>
  );
};
export default BoxGeometry;
