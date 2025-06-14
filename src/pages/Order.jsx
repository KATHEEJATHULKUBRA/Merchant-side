// import Sidebar from '../components/Sidebar';
// import Topbar from '../components/Topbar';
// import './Order.css';

// const Order = () => (
//   <div className="page">
//     <Sidebar />
//     <div className="content">
//       <Topbar />
//       <h1>Order Page</h1>
//     </div>
//   </div>
// );

// export default Order;

import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Chip, 
  Container,
  useTheme,
  useMediaQuery
} from '@mui/material';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import OrderSummary from './OrderSummary';
import './Order.css';

const Order = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const handleOrderClick = (orderId) => {
    setSelectedOrderId(orderId);
  };

  const handleBackToOrders = () => {
    setSelectedOrderId(null);
  };

  // If an order is selected, show OrderSummary
  if (selectedOrderId) {
    return <OrderSummary orderId={selectedOrderId} onBack={handleBackToOrders} />;
  }

  const orders = [
    {
      id: '#1235',
      customer: 'Imran Khan',
      date: '20 Apr, 2025, 3:45 PM',
      amount: '₹120',
      status: 'New',
      statusColor: '#2196F3'
    },
    {
      id: '#1235',
      customer: 'Ayesha',
      date: '20 Apr, 2025, 4:45 PM',
      amount: '₹370',
      status: 'New',
      statusColor: '#2196F3'
    },
    {
      id: '#1236',
      customer: 'Sarah Ali',
      date: '18 Apr, 2025, 12:45 PM',
      amount: '₹12,00',
      status: 'Accepted',
      statusColor: '#9C27B0'
    },
    {
      id: '#1237',
      customer: 'Arjun Patel',
      date: '20 Apr, 2025, 3:45 PM',
      amount: '₹760',
      status: 'In Progress',
      statusColor: '#FF9800'
    },
    {
      id: '#1238',
      customer: 'Ayesha Azhar',
      date: '20 Apr, 2025, 3:45 PM',
      amount: '₹350',
      status: 'Delivered',
      statusColor: '#4CAF50'
    },
    {
      id: '#1239',
      customer: 'Imran Khan',
      date: '20 Apr, 2025, 3:45 PM',
      amount: '₹120',
      status: 'Delivered',
      statusColor: '#4CAF50'
    },
    {
      id: '#1240',
      customer: 'Imran Khan',
      date: '20 Apr, 2025, 3:45 PM',
      amount: '₹120',
      status: 'Canceled',
      statusColor: '#F44336'
    },
    {
      id: '#1235',
      customer: 'Imran Khan',
      date: '20 Apr, 2025, 3:45 PM',
      amount: '₹120',
      status: 'Delivered',
      statusColor: '#4CAF50'
    }
  ];

  return (
    <div className="page">
      <Sidebar />
      <div className="content">
        <Topbar />
        <Container maxWidth="xl" sx={{ mt: 3,ml:2, px: { xs: 2, md: 3 } }}>
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 3, 
              fontWeight: 600,
              fontSize: { xs: '1.5rem', md: '2rem' }
            }}
          >
            Orders
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {orders.map((order, index) => (
              <Card 
                key={index}
                sx={{ 
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    transform: 'translateY(-2px)'
                  }
                }}
                onClick={() => handleOrderClick(order.id)}
              >
                <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: { xs: 'flex-start', md: 'center' },
                      flexDirection: { xs: 'column', md: 'row' },
                      gap: { xs: 2, md: 0 }
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 600,
                          fontSize: { xs: '1rem', md: '1.1rem' }
                        }}
                      >
                        Order {order.id}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'text.secondary',
                          fontSize: { xs: '0.875rem', md: '0.9rem' }
                        }}
                      >
                        {order.customer}
                      </Typography>
                    </Box>
                    
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: { xs: 2, md: 3 },
                        flexDirection: { xs: 'row', md: 'row' },
                        justifyContent: { xs: 'space-between', md: 'flex-end' },
                        width: { xs: '100%', md: 'auto' }
                      }}
                    >
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'text.secondary',
                          fontSize: { xs: '0.75rem', md: '0.875rem' },
                          minWidth: { xs: 'auto', md: '140px' },
                          textAlign: { xs: 'left', md: 'right' }
                        }}
                      >
                        {order.date}
                      </Typography>
                      
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 600,
                          minWidth: { xs: 'auto', md: '80px' },
                          textAlign: { xs: 'center', md: 'right' },
                          fontSize: { xs: '1rem', md: '1.1rem' }
                        }}
                      >
                        {order.amount}
                      </Typography>
                      
                      <Chip
                        label={order.status}
                        sx={{
                          backgroundColor: order.statusColor,
                          color: 'white',
                          fontWeight: 500,
                          minWidth: { xs: '80px', md: '100px' },
                          height: { xs: '28px', md: '32px' },
                          fontSize: { xs: '0.75rem', md: '0.875rem' },
                          '& .MuiChip-label': {
                            px: { xs: 1, md: 1.5 }
                          }
                        }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Order;