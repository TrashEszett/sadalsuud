import React from 'react';

import './MainLogo.scss'

interface Props {
    userName : string;
}

const MainLogo: React.FC<Props> = ({userName}) => {
    return (
        <div className={"MainLogo"}>
            <img src={`${process.env.PUBLIC_URL}/image/Logo.png`} alt={"Main Logo - Vase and star"}/>
            <p>Welcome ! {userName}<br/>사이트 개장 준비중입니다...</p>
        </div>
    );
};

export default MainLogo;
