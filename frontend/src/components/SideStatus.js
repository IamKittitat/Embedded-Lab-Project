import React from "react";
import styled from "styled-components";
import { STATUS } from "../util/Status";

const SideStatus = ({status}) => {
    return <>
    {status === STATUS.PERFECT ? (<div>bad status</div>) : 
    status === STATUS.WARNING ? (<div>warning status</div>) : (<div>process status</div>) }
    </>
}

export default SideStatus;