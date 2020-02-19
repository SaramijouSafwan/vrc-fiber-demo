import React from 'react';

function Plane(props) {
    return (
        <mesh {...props} rotation={ [-0.5 * Math.PI, 0, 0] }>
            <planeGeometry attach="geometry" args={ [10, 10, 10 ] }/>
            <meshLambertMaterial attach="material" color={0x96a3d1} />
        </mesh>
    );
}

export default Plane;