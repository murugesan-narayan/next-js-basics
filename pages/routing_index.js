import Link from 'next/link'
import {useRouter} from 'next/router'

function Home(){
    const router = useRouter()
    const handleClick= ()=>{
        console.log('Order handle method')
        router.push('/product')
    }
    return <div>
        <h1>My Next JS Home Page</h1>
        
        <Link href="/blog">
            <a>Blog</a>
        </Link><br />
        <Link href="/product">
            <a>Product</a>
        </Link><br />
        <button onClick={handleClick}>Order</button>
    </div>
}
export default Home