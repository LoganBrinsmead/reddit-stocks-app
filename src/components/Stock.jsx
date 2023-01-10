import { Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Stock = () => {

    const location = useLocation();
    const { data } = location.state;

    return (
        <>
        <h1>Stock name, mentions, and average sentiment.</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Stock Name</th>
                        <th>Mentions</th>
                        <th>Average Sentiment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.mentions}</td>
                        <td>{data.getAverageSentiment}</td>
                    </tr>
                </tbody>
            </Table>
            <h2>Posts where stock was mentioned...</h2>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Post Title</th>
                        <th>Post Link</th>
                        <th>Analyzed Sentiment from Title</th>
                    </tr>
                </thead>
                <tbody>
                    {data.postInfo.map((item) => {
                        return (
                            <>
                                <tr>
                                    <td>{item.postTitle}</td>
                                    <td>{item.postLink}</td>
                                    <td>{item.sentiment}</td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}

export default Stock;