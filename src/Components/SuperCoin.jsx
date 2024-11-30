import {useSelector} from 'react-redux';
import { CartSlice } from '/.CartSlice.jsx'

const [superCoins, setSuperCoins] = useState(0);

const cartItems = useSelector(state => state.cart.cartItems);

const totalAmount = cartItems.reduce((total, item) => total + item.price*item.quantity, 0);