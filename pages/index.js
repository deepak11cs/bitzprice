import Layout from "../components/Layout";
import Fetch from 'isomorphic-unfetch';
import Prices from '../components/Prices';
const Index = (props)=>{
    return (
        <Layout>
            <div>
                <h1>Welcome to bitzprice</h1>
                <Prices bpi={props.bpi}/>
            </div>
        </Layout>
    );
}
Index.getInitialProps = async function() {
    const res = await Fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

    return {
        bpi: data.bpi
    }
}
export default Index;