import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Select,
  MenuItem,
  FormControl,
  Container,
  IconButton,
  useTheme,
  useMediaQuery,
  Avatar
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const OrderSummary = ({ orderId, onBack }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [orderStatus, setOrderStatus] = useState('New');

  const orderData = {
    id: '#1234',
    date: '20 Apr 2025 | 12:45 PM',
    totalPrice: '₹ 1200',
    totalProducts: '3',
    paymentMethod: 'COD'
  };

  const products = [
    {
      id: 1,
      name: 'Wicker Basket',
      quantity: '01',
      price: '₹ 350',
      image: '🧺' 
    },
    {
      id: 2,
      name: 'Tea pot ceramic',
      quantity: '01',
      price: '₹ 350',
      image: '🫖'
    },
    {
      id: 3,
      name: 'Women cotton suit',
      quantity: '01',
      price: '₹ 350',
      image: '👗'
    }
  ];

  const handleStatusChange = (event) => {
    setOrderStatus(event.target.value);
  };

  const handleUpdate = () => {
    console.log('Order status updated to:', orderStatus);
  };

  return (
    <div className="page">
      <Sidebar />
      <div className="content">
        <Topbar />
        <Container maxWidth="xl" sx={{ mt: 3,ml:2, px: { xs: 2, md: 3 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <IconButton 
              onClick={onBack}
              sx={{ 
                mr: 2,
                p: 1,
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.04)'
                }
              }}
            >
              <ArrowBack />
            </IconButton>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 600,
                fontSize: { xs: '1.5rem', md: '2rem' }
              }}
            >
              Order Summary
            </Typography>
          </Box>

          <Card 
            sx={{ 
              mb: 3,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              borderRadius: 2
            }}
          >
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Box 
                sx={{ 
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gap: { xs: 2, md: 3 }
                }}
              >
                <Box>
                  <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
                    Order ID
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    {orderData.id}
                  </Typography>

                  <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
                    Date:
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    {orderData.date}
                  </Typography>

                  <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
                    Total Price:
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {orderData.totalPrice}
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
                    Total Products:
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    {orderData.totalProducts}
                  </Typography>

                  <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
                    Payment Method:
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {orderData.paymentMethod}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Products List */}
          <Box sx={{ mb: 3 }}>
            {products.map((product) => (
              <Card 
                key={product.id}
                sx={{ 
                  mb: 2,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  borderRadius: 2,
                  '&:last-child': { mb: 0 }
                }}
              >
                <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                  <Box 
                    sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: { xs: 2, md: 3 }
                    }}
                  >
                    <Avatar
                      sx={{
                        width: { xs: 50, md: 60 },
                        height: { xs: 50, md: 60 },
                        backgroundColor: '#f5f5f5',
                        fontSize: { xs: '1.5rem', md: '2rem' }
                      }}
                    >
                      {product.image}
                    </Avatar>
                    
                    <Box sx={{ flex: 1 }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 600,
                          fontSize: { xs: '1rem', md: '1.1rem' },
                          mb: 0.5
                        }}
                      >
                        {product.name}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'text.secondary',
                          fontSize: { xs: '0.875rem', md: '0.9rem' }
                        }}
                      >
                        Qty: {product.quantity}
                      </Typography>
                    </Box>
                    
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600,
                        fontSize: { xs: '1rem', md: '1.1rem' }
                      }}
                    >
                      {product.price}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* Order Status and Update */}
          <Card 
            sx={{ 
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              borderRadius: 2
            }}
          >
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 2,
                  fontWeight: 600,
                  fontSize: { xs: '1rem', md: '1.1rem' }
                }}
              >
                Order Status
              </Typography>
              
              <FormControl 
                fullWidth 
                sx={{ mb: 3 }}
              >
                <Select
                  value={orderStatus}
                  onChange={handleStatusChange}
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#e0e0e0'
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#bdbdbd'
                    }
                  }}
                >
                  <MenuItem value="New">New</MenuItem>
                  <MenuItem value="Accepted">Accepted</MenuItem>
                  <MenuItem value="In Progress">In Progress</MenuItem>
                  <MenuItem value="Delivered">Delivered</MenuItem>
                  <MenuItem value="Canceled">Canceled</MenuItem>
                </Select>
              </FormControl>
              
              <Button
                variant="contained"
                fullWidth
                onClick={handleUpdate}
                sx={{
                  backgroundColor: '#B6519C',
                  color: 'white',
                  py: { xs: 1.5, md: 2 },
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  fontWeight: 600,
                  textTransform: 'none',
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: '#A0447A'
                  }
                }}
              >
                Update
              </Button>
            </CardContent>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default OrderSummary;