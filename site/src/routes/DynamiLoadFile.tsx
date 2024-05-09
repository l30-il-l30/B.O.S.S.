import React from "react";
import LoadComponent from "./LoadComponent";
import { useParams } from "react-router-dom";

const DynamicLoadFile: React.FC = () => {
    const { dirname, filename } = useParams();
    return <LoadComponent dirname={String(dirname)} filename={String(filename)} />
}

export default DynamicLoadFile;