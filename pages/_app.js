import Navbar from '../components/Navbar'
import { useState,useEffect } from 'react'
import '../styles/globals.css'
import Footer from '../components/footer'


function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)

  useEffect(()=>{

    try{

      if(localStorage.getItem('cart')){
        setCart(JSON.parse(localStorage.getItem('cart')))
        saveCart(JSON.parse(localStorage.getItem('cart')))
      }

    } catch(err){
      console.error(err)
      localStorage.clear()
    }
    

  },[])

  const saveCart = (myCart) => {
    localStorage.setItem('cart', JSON.stringify(myCart))
    let total = 0
    let keys = Object.keys(myCart)
    for(let i=0; i<keys.length; i++){
      total += myCart[keys[i]].price * myCart[keys[i]].qty
    }
    setSubTotal(total)
  }

  const addToCart = (itemCode, qty, price, name, size, variant) => {

    let myCart = cart

    if (itemCode in cart) {
      myCart[itemCode].qty = cart[itemCode].qty + qty
    } else {
      myCart[itemCode] = { qty: 1, price: price, name, size, variant }
    }

    console.log(myCart)

    setCart(myCart)
    saveCart(myCart)
  }

  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let myCart = cart

    if (itemCode in cart) {
      myCart[itemCode].qty = myCart[itemCode].qty - qty
    } if (myCart[itemCode]["qty"]<=0){
      delete myCart[itemCode]
    }

    setCart(myCart)
    saveCart(myCart)
  }

  const clearCart = () => {
    setCart({})
    saveCart({})
  }

  return <>
    <Navbar key={subTotal} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
    <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    <Footer />
  </>
}

export default MyApp
