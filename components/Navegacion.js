import Link from 'next/link';

const Navegacion = () => (
   <div>
        <ul>
            <li><Link href="/"><a>Inicio</a></Link></li>
            <li><Link href="/nosotros"><a>Nosotros</a></Link></li>
        </ul>
        <style jsx>{`
            ul {
                background-color:#333;
                list-style:none;
                dispplay:flex;
            }
            ul li {
                padding: .5rem 0;
                margin-right: 1rem;

            }
            ul li a {
                text-decoration:none;
                color: white;
                font-size: 1.2rem;
            }
        `}</style>
   </div>
)

export default Navegacion;