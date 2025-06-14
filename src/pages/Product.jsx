// // src/pages/Product.jsx
// import Sidebar from '../components/Sidebar';
// import Topbar from '../components/Topbar';
// import './Product.css';

// const Product = () => (
//     <div className="page">
//         <Sidebar />
//         <div className="content">
//             <Topbar />
//             <h1>Product Page</h1>
//         </div>
//     </div>
// );

// export default Product;

// src/pages/Product.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  IconButton, 
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Fab,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon
} from '@mui/icons-material';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const Product = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Wrist Watch',
      description: 'Quartz Wrist Watch for women',
      price: 250,
      quantity: 26,
      images: ['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=200&fit=crop'],
      active: true
    },
    {
      id: 2,
      name: 'Wrist Watch',
      description: 'Quartz Wrist Watch for women',
      price: 250,
      quantity: 15,
      images: ['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=200&fit=crop'],
      active: true
    },
    {
      id: 3,
      name: 'Wrist Watch',
      description: 'Quartz Wrist Watch for women',
      price: 250,
      quantity: 20,
      images: ['https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=300&h=200&fit=crop'],
      active: true
    },
    {
      id: 4,
      name: 'Wrist Watch',
      description: 'Quartz Wrist Watch for women',
      price: 250,
      quantity: 12,
      images: ['https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=300&h=200&fit=crop'],
      active: true
    },
    {
      id: 5,
      name: 'Wrist Watch',
      description: 'Quartz Wrist Watch for women',
      price: 250,
      quantity: 8,
      images: ['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=200&fit=crop'],
      active: true
    },
    {
      id: 6,
      name: 'Wrist Watch',
      description: 'Quartz Wrist Watch for women',
      price: 250,
      quantity: 25,
      images: ['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=200&fit=crop'],
      active: true
    },
    {
      id: 7,
      name: 'Wrist Watch',
      description: 'Quartz Wrist Watch for women',
      price: 250,
      quantity: 18,
      images: ['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=200&fit=crop'],
      active: true
    },
    {
      id: 8,
      name: 'Wrist Watch',
      description: 'Quartz Wrist Watch for women',
      price: 250,
      quantity: 30,
      images: ['https://images.unsplash.com/photo-1491336477066-31156b5e4f35?w=300&h=200&fit=crop'],
      active: true
    },
    {
      id: 9,
      name: 'Wrist Watch',
      description: 'Quartz Wrist Watch for women',
      price: 250,
      quantity: 10,
      images: ['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=200&fit=crop'],
      active: true
    },
    {
      id: 10,
      name: 'Wrist Watch',
      description: 'Quartz Wrist Watch for women',
      price: 250,
      quantity: 22,
      images: ['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=200&fit=crop'],
      active: true
    },
    {
      id: 11,
      name: 'Wrist Watch',
      description: 'Quartz Wrist Watch for women',
      price: 250,
      quantity: 16,
      images: ['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=200&fit=crop'],
      active: true
    }
  ]);

  const handleEdit = (product) => {
    navigate(`/edit-product/${product.id}`);
  };

  const handleDelete = (product) => {
    setProductToDelete(product);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    setProducts(products.filter(p => p.id !== productToDelete.id));
    setDeleteDialogOpen(false);
    setProductToDelete(null);
  };

  const handleAddProduct = () => {
    // Navigate to Add Product page
    navigate('/AddProduct');
  };

  // Function to add a new product (this would be called from AddProduct page)
  const addNewProduct = (newProductData) => {
    const newProduct = {
      id: Math.max(...products.map(p => p.id)) + 1,
      name: newProductData.name,
      description: newProductData.description,
      price: parseInt(newProductData.price),
      quantity: parseInt(newProductData.quantity),
      images: newProductData.images.filter(img => img !== null),
      active: newProductData.active,
      category: newProductData.category,
      discount: newProductData.discount,
      customFields: newProductData.customFields
    };
    
    setProducts(prev => [...prev, newProduct]);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#faf9fa' }}>
      <Sidebar />
      
      <Box 
        sx={{ 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column',
          marginLeft: { xs: 0, md: '260px' },
          width: { xs: '100%', md: 'calc(100% - 260px)' }
        }}
      >
        <Topbar />
        
        <Box sx={{ flexGrow: 1, p: 3 }}>
          {/* Header */}
          <Box sx={{ mb: 4 }}>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 600, 
                color: '#333',
                fontSize: '28px'
              }}
            >
              Products
            </Typography>
          </Box>
          
          {/* Products Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)'
              },
              gap: 2,
              width: '100%'
            }}
          >
            {products.map((product) => (
              <Box key={product.id}>
                <Card 
                  sx={{ 
                    position: 'relative',
                    borderRadius: '8px',
                    boxShadow: 'none',
                    border: '1px solid #e0e0e0',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: '#fff',
                    overflow: 'visible',
                    '&:hover': {
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      '& .product-actions': {
                        opacity: 1
                      }
                    }
                  }}
                >
                  {/* Action Buttons */}
                  <Box 
                    className="product-actions"
                    sx={{ 
                      position: 'absolute', 
                      top: 8, 
                      right: 8, 
                      zIndex: 2,
                      display: 'flex',
                      gap: 0.5,
                      opacity: { xs: 1, md: 0 },
                      transition: 'opacity 0.2s ease'
                    }}
                  >
                    <IconButton 
                      size="small" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(product);
                      }}
                      sx={{ 
                        bgcolor: 'rgba(255,255,255,0.9)',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                        width: 28,
                        height: 28,
                        '&:hover': { 
                          bgcolor: '#e8f5e8'
                        }
                      }}
                    >
                      <EditIcon fontSize="small" sx={{ color: '#4caf50', fontSize: '16px' }} />
                    </IconButton>
                    <IconButton 
                      size="small" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(product);
                      }}
                      sx={{ 
                        bgcolor: 'rgba(255,255,255,0.9)',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                        width: 28,
                        height: 28,
                        '&:hover': { 
                          bgcolor: '#ffeaea'
                        }
                      }}
                    >
                      <DeleteIcon fontSize="small" sx={{ color: '#f44336', fontSize: '16px' }} />
                    </IconButton>
                  </Box>
                  
                  {/* Product Image */}
                  <Box 
                    sx={{ 
                      height: 190, 
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: '#fafafa',
                      p: 0
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={product.images[0]}
                      alt={product.name}
                      sx={{ 
                        maxHeight: '260px',
                        maxWidth: '260px',
                        objectFit: 'contain',
                        borderRadius: '8px'
                      }}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/140x140?text=No+Image';
                      }}
                    />
                  </Box>
                  
                  {/* Product Info */}
                  <CardContent sx={{ 
                    p: '16px 20px 20px 20px !important', 
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600, 
                        mb: 0.5,
                        fontSize: '16px',
                        color: '#333',
                        lineHeight: 1.3
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ 
                        fontSize: '14px',
                        lineHeight: 1.4,
                        color: '#888'
                      }}
                    >
                      {product.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
            
            {/* Add Product Card */}
            <Box>
              <Card 
                sx={{ 
                  height: 260,
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px dashed #d4a5c4',
                  bgcolor: 'transparent',
                  cursor: 'pointer',
                  borderRadius: '12px',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    bgcolor: '#faf7f9',
                    borderColor: '#b8639c'
                  }
                }}
                onClick={handleAddProduct}
              >
                <Box sx={{ textAlign: 'center', color: '#d4a5c4' }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      border: '2px solid #d4a5c4',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 12px auto',
                      fontSize: '24px',
                      fontWeight: 'bold'
                    }}
                  >
                    +
                  </Box>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontWeight: 500,
                      fontSize: '14px',
                      color: '#d4a5c4'
                    }}
                  >
                    Add Product
                  </Typography>
                </Box>
              </Card>
            </Box>
          </Box>

          {/* Floating Action Button for Mobile */}
          <Fab
            color="primary"
            aria-label="add"
            onClick={handleAddProduct}
            sx={{
              position: 'fixed',
              bottom: 24,
              right: 24,
              bgcolor: '#b8639c',
              '&:hover': { bgcolor: '#a0527c' },
              display: { xs: 'flex', sm: 'none' }
            }}
          >
            <AddIcon />
          </Fab>

          {/* Delete Confirmation Dialog */}
          <Dialog
            open={deleteDialogOpen}
            onClose={() => setDeleteDialogOpen(false)}
            PaperProps={{
              sx: {
                borderRadius: '12px',
                maxWidth: '400px'
              }
            }}
          >
            <DialogTitle sx={{ fontWeight: 'bold', fontSize: '20px' }}>
              Confirm Delete
            </DialogTitle>
            <DialogContent>
              <Typography sx={{ color: '#666', lineHeight: 1.5 }}>
                Are you sure you want to delete "{productToDelete?.name}"? This action cannot be undone.
              </Typography>
            </DialogContent>
            <DialogActions sx={{ p: 3, pt: 0 }}>
              <Button 
                onClick={() => setDeleteDialogOpen(false)}
                sx={{ 
                  color: '#666',
                  fontWeight: 600,
                  textTransform: 'none'
                }}
              >
                Cancel
              </Button>
              <Button 
                onClick={confirmDelete} 
                variant="contained"
                sx={{ 
                  bgcolor: '#f44336',
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': { bgcolor: '#d32f2f' }
                }}
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </Box>
  );
};

export default Product;