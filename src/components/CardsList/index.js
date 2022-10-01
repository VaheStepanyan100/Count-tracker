import Card from "../Card";
import './styles.css';

export default function CardList({ cardsData, getReport, updateReports }) {

    return (
        <>
            <div className="cards">
                {cardsData.map(card => (
                    <Card
                        updateReports={updateReports}
                        count={card.count}
                        isShow={card.isShow}
                        key={card.num}
                        number={card.num} />
                ))}
            </div>
            <button
                className="getReport"
                onClick={getReport}>
                Get Report
            </button>
        </>
    );
}