import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder'

const detalsMock = [
  {
    title: 'product 1',
    id: '1',
  },
  {
    title: 'product 2',
    id: '2',
  },
  {
    title: 'product 3',
    id: '3',
  }
];


/*export async function getStaticProps(context) {
  return {
    props: {
      detals: detalsMock
    }, 
  }
}*/



export async function getServerSideProps(context) {
  const _imeg = 'https://mobimg.b-cdn.net/v3/fetch/59/59c8750681364de90b00e6081342c856.jpeg';
  const { base64, img } = await getPlaiceholder(
    _imeg
  );
  
  return {
    props: {
      detals: detalsMock,
      imageProps: {
        ...img,
        blurDataURL: base64,
      }
    }, 
  }
}


const Products = ({ detals, imageProps }) => {

  return(
    <>
      <Head>
        <title>Product page</title>
      </Head>
      {/*<Image 
        src='https://mobimg.b-cdn.net/v3/fetch/59/59c8750681364de90b00e6081342c856.jpeg'
        alt='imag'
        width={350}
        height={250}
      />*/}
      <div style={{
        position: 'relative',
        width: '350px',
        height: '250px',
        objectFit: 'contain'
      }}>
        <Image 
          {...imageProps}
          placeholder='blur'
          alt='imeg'
          width={250}
          height={150}
        />
      </div>
      <div>
        <ul>
          {
          detals.map((item) => (
            <li key={item.id}>
              <Link href={{
                pathname: '/products/[id]',
                query: {id: item.id}
              }}>
                {item.title}
              </Link>
            </li>))
          }
        </ul>
        <br />
        <ul>
          {
          detals.map((item) => (
            <li key={item.id}>
              <Link href={`/products/${item.id}`}>
                {item.title}
              </Link>
            </li>))
          }
        </ul>
      </div>
    </>
  )
}
export default Products;