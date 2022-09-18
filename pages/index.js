import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Filter from '../components/Filter'
import SingleProduct from '../components/SingleProduct'
import { CartState } from '../context/Context'

export default function Home() {
const router = useRouter()
  const { state: { products },
    productState: { sort, byStock, searchQuery, byFastDelivery, byRating }

  } = CartState()


  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    
    }
  

    return sortedProducts;
  };
  return (

    <div >
      <Head>
        <title>Home || Shopping Mall </title>
        <meta name="description" content="created by Adewale Shittu" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className='flex gap-4 mt-4'>
        <Filter />
        <div className='w-[78%] p-[20px] grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 '>
        
        {transformProducts().length == 0 && (<div className='flex items-center col-span-3 justify-center text-2xl font-semibold'>No Product was found</div>)}
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
       
        
        </div>
      
      </main>
     

      
    </div>
  )
}
