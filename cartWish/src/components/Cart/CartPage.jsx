import React from 'react'
import './CartPage.css';
import user from '../../assets/user.webp'; // Assuming you have a user image in assets
import Table from '../Common/Table';
import QuantityInput from '../SingleProduct/QuantityInput';

const CartPage = () => {
  return (
    <section className='align_center cart_page'>
        <div className="align_center user_info">
            <img src={user} alt="user_profile" />
       <div>
        <p className='user_name'>Harley</p>
        <p className='user_email'>harley@gmail.com</p>
         </div>
         </div>
        {/* Cart Table */}
        <Table headings = {["Item","Price","Quantity","Total","Remove"]}>
          <tbody>
            <tr>
              <td>iPhone 14</td>
              <td>$10.00</td>
              <td className='align_center table_quantity_input'><QuantityInput/></td>
              <td>$10.00</td>
              <td>Remove</td>


            </tr>
          </tbody>
        </Table>
        <table className="cart_bill">
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>$10.00</td>
            </tr>
            {/* Example row, you can map through your cart items here */}
            <tr>
              <td>Shipping Charge</td>
              <td>$1.00</td>
             
            </tr>
            <tr className='cart_bill_final'>
              <td>Total</td>
              <td>$11.00</td>
             
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
        <button className="seach_button checkout_button">Checkout</button>
         </section>

        )
}

export default CartPage