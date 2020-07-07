import Navbar from './Navbar';

export default (props) =>{

    return (
        <>

        <Navbar/>
        {props.children}

        </>

    );

}