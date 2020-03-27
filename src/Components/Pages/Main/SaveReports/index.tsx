import React from 'react';
import { SaveReportsStyle } from '../../../Assets/Styles';

interface Iprops {
    name: string;
}

function SaveReports (props: Iprops) {
    return (
            <SaveReportsStyle>    
          	    <span>{props.name}</span>
        	</SaveReportsStyle>
     

    );
}

export default SaveReports;