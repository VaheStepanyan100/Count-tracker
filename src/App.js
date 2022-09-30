import { useEffect, useState } from "react";
import CardList from "./components/CardsList";
import Report from "./components/Report";

const initialData = [
  { num: 1, isShow: true, count: 0 },
  { num: 2, isShow: true, count: 0 },
  { num: 3, isShow: true, count: 0 },
  { num: 4, isShow: true, count: 0 },
  { num: 5, isShow: true, count: 0 },
  { num: 6, isShow: true, count: 0 },
];

function App() {
  const [data, setData] = useState(initialData);
  const [reportShow, setReportShow] = useState(false);
  const [card, setCard] = useState(null);

  useEffect(() => {
    if (!card) return;
    data[card.num - 1].count = card.count;
    setData([...data]);
  },[card]);

  function handlReport() {
    setReportShow(!reportShow);
  }

  return (
    <>
    <CardList
      setCard={setCard}
      cardsData={data}
      onClick={handlReport}
    />
    {reportShow ? <Report data={data}/> : ''}
    </>
  );
}

export default App;
