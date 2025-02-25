import { useState } from "react";
import "./SiparisFormu.css";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { useHistory } from "react-router-dom";




export default function SiparisFormu() {
    const [adet, setAdet] = useState(1);
    const fiyat = 85.5;
    const toplamFiyat = fiyat * adet;
    const history = useHistory();


    return (
        <div className="siparis-formu"> 

        <div className="siparis-header">
        <img src="../images/iteration-1-images/logo.svg" alt="Logo" ></img>
        </div>
        <div className="form-grup">
            <div className="boyut-sec">
            <FormGroup check>
            <Input
                name="radio1"
                type="radio"
            />
            <Label check>
                Küçük
            </Label>
            </FormGroup>
            <FormGroup check>
            <Input
                name="radio1"
                type="radio"
            />
            <Label check>
                Orta
            </Label>
            </FormGroup>
            <FormGroup
            check
            disabled
            >
            <Input
                name="radio1"
                type="radio"
            />
            <Label check>Büyük
            </Label>
            </FormGroup>
            </div>
            <div className="kalinlik-sec">
            <FormGroup>
                <Label for="kalinlik">Hamur Kalınlığı</Label>
                <Input type="select" name="kalinlik" id="kalinlik">
                <option>İnce</option>
                <option>Orta</option>
                <option>Kalın</option>
                </Input>
            </FormGroup>
            </div>
            <FormGroup>
                <Label>Sipariş Notu</Label>
                <Input type="textarea" placeholder="Eklemek istediğiniz not..." />
            </FormGroup>

            <FormGroup>
                <Label>Adet</Label>
                    <Button  onClick={() => setAdet(adet > 1 ? adet - 1 : 1)}>-</Button>
                    <Button  onClick={() => setAdet(adet + 1)}>+</Button>
            </FormGroup>

            <p>Toplam: {toplamFiyat.toFixed(2)}₺</p>
            <Button 
            className="button"
            onClick={() => history.push("/siparisOnayi")}>SİPARİŞ VER</Button>
            </div>
        </div>
    );
}