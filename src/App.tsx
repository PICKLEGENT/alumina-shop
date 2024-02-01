import { Route, Routes } from "react-router-dom"
import { Footer, Header } from "./components"
import { Auth, Cart, Catalog, Contacts, Faq, Home, Info, NotFound, Support } from "./pages"
import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/catalog" Component={Catalog} />
        <Route path="/info" Component={Info} />
        <Route path="/contacts" Component={Contacts} />
        <Route path="/faq" Component={Faq} />
        <Route path="/support" Component={Support} />
        <Route path="/cart" Component={Cart} />
        <Route path="/login" Component={Auth} />
        <Route path="/404" Component={NotFound} />
      </Routes>
      <Footer />
    </>
  )
}

export default App