import "./App.css"
import CounterSample from "./components/CounterSample"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import UseStateSample from "./components/UseStateSample"

const App = () => {
  //SADECE JAVASCRIPT YAZILABILAECEK YER

  let headerText = "Ben Header'ım ve ben App.js içerisinden prop olarak geldim."
  let mainText = "Ben Main'im ve ben App.js içerisinden prop olarak geldim."
  let footerText =  "Ben Footer'im ve ben App.js içerisinden prop olarak geldim."



  return (
    // HTML+CSS+JS YAZILABILECEK YER
    // <div className="container">
    //   <Header yazi={headerText} age={28} city={'İstanbul'} />
    //   <Main yazi2={"Ben Main'im ve ben App.js içerisinden prop olarak geldim."}></Main>
    //   <Footer footerText={footerText} />
    // </div>
    // <UseStateSample/>
    <CounterSample />
  )
}

export default App