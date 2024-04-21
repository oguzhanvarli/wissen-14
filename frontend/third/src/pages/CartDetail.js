import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteCart } from '../store/slices/cartSlice';
import YesNoModel from '../componets/YesNoModel';

const CartDetail = () => {

  const products = useSelector(state => state.cart.products)
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)

  const clearCart = () => {
    dispatch(deleteCart())
    setOpen(false)
  }

  return (
    <div className='flex justify-center'>
      <TableContainer component={Paper} sx={{
        maxWidth: '80%',
        mt: 10
      }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell >Name</TableCell>
              <TableCell >Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              products && products.map((item) => (
                <TableRow>
                  <TableCell>
                    <img
                      className="w-20 h-20"
                      src={item.image}
                      alt="product image"
                    />
                  </TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell >{item.price}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
        <div className='flex justify-end m-3'>
          <Button onClick={() => setOpen(true)} variant="outlined" color='error' startIcon={<DeleteIcon />}>Clear Cart</Button>
        </div>
      </TableContainer>
      <YesNoModel open={open} setOpen={setOpen} title={'Would you like to delete all cart?'} clickYes={clearCart} />
    </div>

  )
}

export default CartDetail