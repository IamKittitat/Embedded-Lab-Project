import React from "react";
import styled from "styled-components";

const StatusCard = ({icon,data,name}) => {
    return (
        <>
            <div>
                <p>{icon}</p>
                <p>{data}</p>
            </div>
            <h2>{name}</h2>
        </>
    )
}

export default StatusCard;