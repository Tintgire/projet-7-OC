import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/footer/Footer'
// import image

export default function Home() {
  const text = 'Chez vous, partout et ailleurs'
  return (
    <div>
      <Header />
      <Banner data={text} />
      <Footer />
    </div>
  )
}
