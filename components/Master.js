import Head from "next/head";
import Navegacion from "./Navegacion";

const MasterPage = (props) => (
    <div>
        <Head>
            <title>Bitcoin app</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/> 
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
        </Head>

        <Navegacion/>

        {props.children}
    </div>
)

export default MasterPage;