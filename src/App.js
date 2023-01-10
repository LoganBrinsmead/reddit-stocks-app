import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useState } from "react";
import RouteSwitch from "./RouteSwitch";


const App = () => {

  const [isLoading, setLoading] = useState(true);
  const [stocks, setStocks] = useState([]);

  async function getStocks() {
    const promise = await axios.get("http://localhost:8080/stocks");
    const status = promise.status;
    if (status === 200) {
      const data = await promise.data;
      setLoading(false);
      setStocks(data);
    }
  }

  function getAverageSentiment(stock) {
    let count = { 'Negative': 0, 'Neutral': 0, 'Positive': 0 }
    for (let item of stock["postInfo"]) {
      count[item["sentiment"]]++;
    }
    const ans = Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);
    return ans;
  }


  useEffect(() => {
    const controller = new AbortController();
    getStocks();
    return () => controller.abort();
  }, [])

  useEffect(() => {
    console.log(stocks);
  }, [stocks])

  if(isLoading) {
    return <div>Loading...</div>
  }

  return (
    <RouteSwitch
      stocks={stocks}
      getAverageSentiment={getAverageSentiment}
    />
  )
}

export default App;