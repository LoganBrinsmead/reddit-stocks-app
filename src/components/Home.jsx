import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = ({ stocks, getAverageSentiment }) => {
    let number = 0;
    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Stock Name</th>
                        <th>Mentioned</th>
                        <th>Average Sentiment</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map((stock) => {
                        number+=1;
                        return(
                        <>
                        <tr>
                            <td>{number}</td>
                            <td><Link key={stock.name} to={`/stock/${stock.name}`} state={{ data: stock }}>{stock.name}</Link></td>
                            <td>{stock.mentions}</td>
                            <td>{getAverageSentiment(stock)}</td>
                        </tr>
                        </>
                        )
                    })}
                </tbody>
            </Table>
        </>

    )
}

export default Home;