import React from 'react';
import { AppRegistry, asset, View } from 'react-360';
import Entity from 'Entity';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';

export default class Earth extends React.Component {
    render() {
        return (
            <View>
                <AmbientLight intensity={1.0} color={'#fff'} />
                <PointLight
                    intensity={1}
                    style={{ transform: [{ translate: [0, 2, -1] }] }}
                />
                <Entity
                    source={{ obj: asset('Basic_house.obj'), mtl: asset('Basic_house.mtl')}}
                    style={{
                        transform: [
                            { translate: [-1, 0.75, -3] },
                            { scale: 0.005 },
                            { rotateY: 270 }
                        ]
                    }}
                />
            </View>
        );
    }
}

