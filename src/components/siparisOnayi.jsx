import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import "./siparisOnayi.css"


export default function SiparisOnayi(){

    const history = useHistory();

    useEffect(() => {
        const timer = setTimeout(() => {
        history.push('/');
    }, 3000);

    return () => clearTimeout(timer);
    }, []);

    return (
        <div className="siparis-onayi">
            <img src="../images/iteration-1-images/logo.svg" alt="Logo" className="logo" ></img>
            <div className="title">
            </div>
            <h2 className="subtitle">TEBRİKLER!<br />SİPARİŞİNİZ ALINDI!</h2>
        </div>
    )
}