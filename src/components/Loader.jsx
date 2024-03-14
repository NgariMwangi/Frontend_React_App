import ClipLoader from "react-spinners/ClipLoader";
import { ScaleLoader } from 'react-spinners';

export default function Loader(){

    return(
        <div style={{ display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh"}}>
        <ScaleLoader color="#FFCC00" />
      </div>
    )
}