import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"

const App = () => {
  //SADECE JAVASCRIPT YAZILABILAECEK YER

  return (
    // HTML+CSS+JS YAZILABILECEK YER
    <div className="container">
      <Header />
      <Main></Main>
      <Footer />
    </div>
  )
}

export default App