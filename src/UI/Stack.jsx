import React from 'react';
import * as Proptypes from "prop-types";

const Stack = ({children,pos}) => {
    return (
        <div className={'stack'} style={{
        justifyContent: pos==='center'?'center':`flex-${pos}`}}>
            {children}
        </div>
    );
};

export default Stack;

Stack.propTypes={
    children:Proptypes.node.isRequired
}