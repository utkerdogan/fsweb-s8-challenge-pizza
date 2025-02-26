import { useState } from "react";
import "./SiparisFormu.css";
import { useHistory } from "react-router-dom";
import axios from "axios";





export default function SiparisFormu() {
    const [size, setSize] = useState('');
    const [dough, setDough] = useState('');
    const [extras, setExtras] = useState([]);
    const [note, setNote] = useState('');
    const [quantity, setQuantity] = useState(1);
    const history = useHistory();

const extraIngredients = [
    'Pepperoni',
    'Sosis',
    'Kanada Jambonu',
    'Jalepeno',
    'Ananas',
    'Domates',
    'Mısır',
    'Sucuk',
    'Biber',
    'Zaytin',
    'Sarımsak',
    'Soğan',
    'Tavuk',
    'Mantar',
];

    const basePrice = 85.5;
    const extraPrice = extras.length * 5;
    const totalPrice = (basePrice + extraPrice) * quantity;

const handleExtraChange = (option) => {
    setExtras((prev) => {
        if (prev.includes(option)) {
        return prev.filter((item) => item !== option);
        } else {
        if (prev.length >= 10) {
            alert('En fazla 10 ekstra malzeme seçebilirsiniz!');
            return prev;
        }
        return [...prev, option];
        }
    });
};

const handleSubmit = async (event) => { 
    event.preventDefault();
    
    if (!size || dough === 'Hamur Kalınlığı') {
        alert('Lütfen hamur kalınlığını ve boyutu seçiniz.');
        return;
    }

const orderData = {
    size,
    dough,
    extras,
    quantity,
    note,
    totalPrice,
};

    axios.post('https://reqres.in/api/pizza', orderData)
    .then((response) => {
        console.log('Sipariş Özeti:', response.data);
        history.push('/siparisOnayi');
    })
    .catch((error) => {
        console.error('Sipariş gönderme hatası:', error);
    });
};

    return (
        
        <div className="siparis-formu">
            <div className="siparis-header">
            <img src="../images/iteration-1-images/logo.svg" alt="Logo" ></img>
            </div>

            <form onSubmit={handleSubmit} className="pizza-container">
                <h1 className="pizza-title">Position Absolute Acı Pizza</h1>
                <p className="pizza-price">{basePrice.toFixed(2)}₺</p>
                <p className="pizza-description">
                Özel pizza tarifi ile hazırlanmış lezzetli bir pizza.
            </p>

            <div className="pizza-section">
                <div className="boyut-section">
                <p className="section-title">Boyut Seç *</p>
                {['Küçük', 'Orta', 'Büyük'].map((option) => (
                    <label key={option} className="radio-label">
                    <input
                        type="radio"
                        name="size"
                        value={option}
                        checked={size === option}
                        onChange={(e) => setSize(e.target.value)}
                    />{' '}
                    {option}
                    </label>
                ))}
                </div>

                <div className="hamur-section">
                <p className="section-title">Hamur Seç *</p>
                <select
                    className="select-input"
                    value={dough}
                    onChange={(e) => setDough(e.target.value)}
                >
                    <option value="">Hamur Kalınlığı</option>
                    <option value="İnce">İnce</option>
                    <option value="Kalın">Kalın</option>
                </select>
                </div>
            </div>

            <p className="section-title">Ek Malzemeler </p>
            <p>En fazla 10 malzeme seçebilirsiniz. (5₺) </p>
            <div className="malzeme-section">
                {extraIngredients.map((option) => (
                <label key={option} className="checkbox-label">
                    <input
                    type="checkbox"
                    checked={extras.includes(option)}
                    onChange={() => handleExtraChange(option)}
                    />{' '}
                    {option}
                </label>
                ))}
            </div>

            <div className="not-section">
                <p className="section-title">Sipariş Notu</p>
                <input
                type="text"
                className="text-input"
                placeholder="Siparişe eklemek istediğiniz not var mı?"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                />
            </div>

            <div className="quantity-order-container">
                <div className="quantity-container">
                <button
                    type="button"
                    className="quantity-btn"
                    onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                >
                    -
                </button>
                <span className="quantity-text">{quantity}</span>
                <button
                    type="button"
                    className="quantity-btn"
                    onClick={() => setQuantity(quantity + 1)}
                >
                    +
                </button>
                </div>
                <div className="summary-container">
                    <h1 className="summary-title">Sipariş Toplamı</h1>
                    <p className="summary-text">Seçimler: {extraPrice.toFixed(2)}₺</p>
                    <p className="total-price">Toplam: {totalPrice.toFixed(2)}₺</p>

                <button
                    type="submit"
                    className="order-btn"
                    onClick={handleSubmit}
                >
                    SİPARİŞ VER
                </button>
                </div>
            </div>
        </form>
    </div>
    );
}