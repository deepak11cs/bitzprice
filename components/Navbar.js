import Link from 'next/link';
import Style from '../styles/Navbar';

export default ()=>{
    return (
        <div>
            <ul>
                <li><Link href="/" ><a>Home</a></Link></li>
                <li><Link href="/about"><a>About</a></Link></li>
            </ul>
            <Style/>
        </div>
    );
}