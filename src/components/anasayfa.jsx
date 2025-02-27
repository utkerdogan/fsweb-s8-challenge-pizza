import { useHistory } from "react-router-dom";
import "./anasayfa.css";

export default function Anasayfa() {
    const history = useHistory();

    return (

        <div className="container">
            <div className="title">
            <img src="../images/iteration-1-images/logo.svg" alt="Logo" className="logo"></img>
            <h2 className="subtitle">KOD ACIKTIRIR<br />PİZZA, DOYURUR</h2>
            <button 
            className="button"
            onClick={() => history.push("/siparisFormu")}
            >
            ACIKTIM
            </button>
            </div>
            <img src="../images/iteration-1-images/home-banner.png" alt="Background" className="background-image"></img>
        </div>

    );
};

