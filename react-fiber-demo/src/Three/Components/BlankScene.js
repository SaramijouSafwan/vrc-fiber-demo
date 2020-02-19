import React, {createRef, Suspense} from 'react'
import store from '../../Store/store';

import OrbitControl from '../Controls/OrbitControl';
import BoxGeometry from './BoxGeometry';
import Model from './Model';
import Plane from './Plane';

const BlankScene = (props) => {
const orbitRef = createRef();
  return (
    <>
        {store.getState().blankScene.meshes.map((mesh) => <BoxGeometry orbit={orbitRef} key={mesh.id} name={mesh.id}/>)}
        <gridHelper args={[20, 10 ]} />
        <spotLight position={[30, 30, 30]} castShadow />
        <Suspense fallback={ <Plane/> }>
          <Model url="https://poly.googleapis.com/downloads/fp/1582109649112130/7rUkCX-AIR2/1zHcAn1cUrx/GasStation.gltf" />
        </Suspense>
        <OrbitControl ref={orbitRef} />
    </>
  );
};
export default BlankScene;
