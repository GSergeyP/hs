import Head from 'next/head';
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  const res = await fetch( 'https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  if(data.length < 5) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      }
    }
  }
  else {
    console.log('123')
    return {
      props: {
        user: data,
      }
    }
  }
}
const Product = ({ user }) => {
  const router = useRouter();
  console.log(router);

  return(
    <>
      <Head>
        <title>Detail product page {router.query.id}</title>
      </Head>
      <div>Detail product page {router.query.id}</div>
      {
        user.map((item) => (
          <div key={item.name}>{item.name}</div>
        ))
      }
    </>
  )

}
export default Product;