import Card from "../Card";
import './styles.css';

export default function CardList({ cardsData, onClick, setCard }) {

    return (
        <>
            <div className="cards">
                {cardsData.map(card => (
                    <Card setCard={setCard} count={card.count} isShow={card.isShow} key={card.num} number={card.num} />
                ))}
            </div>
            <button 
            className="getReport"
            onClick={onClick}
            >Get Report</button>
        </>
    );
}