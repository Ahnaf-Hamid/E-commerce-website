import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { Context } from '../context/Context'
import { toast } from 'react-toastify'
import axios from 'axios'

const PlaceOrder = () => {

  const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, deliveryFee, products } = useContext(Context)
  const [paymentMethod, setPaymentMethod] = useState('cod')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  })

  const onChangeHandler = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      let orderItems = []

      for (const itemId in cartItems) {
        for (const size in cartItems[itemId]) {
          if (cartItems[itemId][size] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === itemId))
            if (itemInfo) {
              itemInfo.size = size
              itemInfo.quantity = cartItems[itemId][size]
              orderItems.push(itemInfo)
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + deliveryFee
      }

      switch (paymentMethod) {
        case 'cod':
          const response = await axios.post(`${backendUrl}/api/order/place`, orderData, { headers: { token } })

          if (response.data.success) {
            setCartItems({})
            navigate('/orders')
          } else {
            toast.error(response.data.msg)
          }
          break;

        case 'stripe':
          const responseStripe = await axios.post(`${backendUrl}/api/order/stripe`, orderData, { headers: { token } })
          if(responseStripe.data.success){
            const { session_url } = responseStripe.data
            window.location.replace(session_url)
          } else {
            toast.error(responseStripe.data.msg)
          }

          break;

        default:
          break;
      }


    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const razorPayError = () => {
    alert('Unfortunately Razorpay is currently not Working')
    console.log('Unfortunately Razorpay is currently not Working');
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] max-w-7xl mx-auto px-5 border-t'>
      {/* *************** left side ********************** */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='flex justify-start'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-300 rounded py-1 px-3 w-full' type="text" placeholder='First Name' required />
          <input onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-300 rounded py-1 px-3 w-full' type="text" placeholder='Last Name' required />
        </div>
        <input onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded py-2 px-4 w-full' type="email" placeholder='Email' required />
        <input onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-300 rounded py-2 px-4 w-full' type="text" placeholder='Street' required />
        <div className='flex gap-3'>
          <input onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded py-1 px-3 w-full' type="text" placeholder='City' required />
          <input onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded py-1 px-3 w-full' type="text" placeholder='State' required />
        </div>
        <div className='flex gap-3'>
          <input onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-gray-300 rounded py-1 px-3 w-full' type="number" placeholder='Zipcode' required />
          <input onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-300 rounded py-1 px-3 w-full' type="text" placeholder='Country' required />
        </div>
        <input onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded py-1 px-3 w-full' type="number" placeholder='Phone Number' required />
      </div>

      {/* *************** right side ********************** */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-8'>
          <div className='flex justify-start'>
            <Title text1={'PAYMENT'} text2={'METHOD'} />
          </div>
          {/* *************** payment method selection ********************** */}
          <div className='flex flex-col lg:flex-row gap-3'>
            <div onClick={() => setPaymentMethod('stripe')} className='flex gap-3 items-center border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3 h-3 border rounded-full ${paymentMethod === 'stripe' ? 'bg-green-500' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={razorPayError} className='flex gap-3 items-center border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3 h-3 border rounded-full ${paymentMethod === 'razorpay' ? 'bg-green-500' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={() => setPaymentMethod('cod')} className='flex gap-3 items-center border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3 h-3 border rounded-full ${paymentMethod === 'cod' ? 'bg-green-500' : ''}`}></p>
              <p className='text-gray-500 font-medium text-sm mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className="text-end">
            <button type='submit' className="bg-black text-white text-sm my-8 px-12 py-3">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder