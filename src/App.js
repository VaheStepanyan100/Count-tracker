import { useState } from "react";
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

  const updateReports = (num, count) => {
    data[num - 1].count = count;
    setData([...data]);
  }

  function handlReport() {
    setReportShow(!reportShow);
  }

  return (
    <>
    <CardList
      updateReports={updateReports}
      cardsData={data}
      getReport={handlReport}
    />
    {reportShow ? <Report data={data} /> : ''}
    </>
  );
}

export default App;
