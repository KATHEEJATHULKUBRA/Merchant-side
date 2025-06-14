// src/pages/EditProduct.jsx
import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField,
  Button,
  Card,
  CardMedia,
  IconButton,
  Switch,
  FormControlLabel,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  Add as AddIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const EditProduct = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [productData, setProductData] = useState({
    name: 'Wrist Watch',
    description: 'Elegant and timeless, this wristwatch for women combines style and precision with a sleek design, perfect for both everyday wear and special occasions.',
    price: 250,
    quantity: 26,
    discount: '',
    active: true,
    images: [
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=300&h=200&fit=crop'
    ]
  });

  const handleInputChange = (field, value) => {
    setProductData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = () => {
    // Create a file input element
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;
    
    input.onchange = (e) => {
      const files = Array.from(e.target.files);
      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = (event) => {
          setProductData(prev => ({
            ...prev,
            images: [...prev.images, event.target.result]
          }));
        };
        reader.readAsDataURL(file);
      });
    };
    
    input.click();
  };

  const handleRemoveImage = (index) => {
    setProductData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSaveProduct = () => {
    console.log('Save product:', productData);
    // Here you would typically send the data to your backend API
    alert('Product saved successfully!');
  };

  const handleCancel = () => {
    console.log('Cancel edit');
    // Reset to original state or navigate back
    alert('Changes cancelled');
  };

  const handleGoBack = () => {
    console.log('Go back to products');
    // Navigate back to products list
    window.history.back();
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
          <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton 
              onClick={handleGoBack}
              sx={{ 
                bgcolor: '#fff',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                '&:hover': { bgcolor: '#f5f5f5' }
              }}
            >
              <ArrowBackIcon sx={{ color: '#666' }} />
            </IconButton>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 600, 
                color: '#333',
                fontSize: '28px'
              }}
            >
              Edit Products
            </Typography>
          </Box>
          
          {/* Form Content */}
          <Box sx={{ maxWidth: '1000px' }}>
            {/* Product Name, Price, and Quantity - Each in separate rows */}
            <Box 
              sx={{ 
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 3,
                mb: 4
              }}
            >
              {/* Left Column */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {/* Product Name */}
                <Box>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontWeight: 600, 
                      mb: 1,
                      color: '#333',
                      fontSize: '16px'
                    }}
                  >
                    Product Name
                  </Typography>
                  <TextField
                    fullWidth
                    value={productData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter product name"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                        bgcolor: '#fff',
                        '& fieldset': {
                          borderColor: '#e0e0e0',
                        },
                        '&:hover fieldset': {
                          borderColor: '#d4a5c4',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#b8639c',
                        },
                      },
                    }}
                  />
                </Box>

                {/* Price */}
                <Box>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontWeight: 600, 
                      mb: 1,
                      color: '#333',
                      fontSize: '16px'
                    }}
                  >
                    Price (₹)
                  </Typography>
                  <TextField
                    fullWidth
                    type="number"
                    value={productData.price}
                    onChange={(e) => handleInputChange('price', parseInt(e.target.value) || 0)}
                    placeholder="₹ 250"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                        bgcolor: '#fff',
                        '& fieldset': {
                          borderColor: '#e0e0e0',
                        },
                        '&:hover fieldset': {
                          borderColor: '#d4a5c4',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#b8639c',
                        },
                      },
                    }}
                  />
                </Box>

                {/* Quantity in Stock */}
                <Box>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontWeight: 600, 
                      mb: 1,
                      color: '#333',
                      fontSize: '16px'
                    }}
                  >
                    Quantity in Stock
                  </Typography>
                  <TextField
                    fullWidth
                    type="number"
                    value={productData.quantity}
                    onChange={(e) => handleInputChange('quantity', parseInt(e.target.value) || 0)}
                    placeholder="Eg: 26"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                        bgcolor: '#fff',
                        '& fieldset': {
                          borderColor: '#e0e0e0',
                        },
                        '&:hover fieldset': {
                          borderColor: '#d4a5c4',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#b8639c',
                        },
                      },
                    }}
                  />
                </Box>
              </Box>

              {/* Right Column - Description and Discount */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {/* Description */}
                <Box>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontWeight: 600, 
                      mb: 1,
                      color: '#333',
                      fontSize: '16px'
                    }}
                  >
                    Description
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    value={productData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Enter product description"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                        bgcolor: '#fff',
                        '& fieldset': {
                          borderColor: '#e0e0e0',
                        },
                        '&:hover fieldset': {
                          borderColor: '#d4a5c4',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#b8639c',
                        },
                      },
                    }}
                  />
                </Box>

                {/* Discount */}
                <Box>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontWeight: 600, 
                      mb: 1,
                      color: '#333',
                      fontSize: '16px'
                    }}
                  >
                    Discount (Optional)
                  </Typography>
                  <TextField
                    fullWidth
                    value={productData.discount}
                    onChange={(e) => handleInputChange('discount', e.target.value)}
                    placeholder="Enter discount percentage"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                        bgcolor: '#fff',
                        '& fieldset': {
                          borderColor: '#e0e0e0',
                        },
                        '&:hover fieldset': {
                          borderColor: '#d4a5c4',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#b8639c',
                        },
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Upload Images Section - Fixed to match UI */}
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: 600, 
                  mb: 2,
                  color: '#333',
                  fontSize: '16px'
                }}
              >
                Upload Images
              </Typography>
              
              {/* Images Grid - Horizontal layout like in UI */}
              <Box 
                sx={{ 
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                  flexWrap: 'wrap'
                }}
              >
                {productData.images.map((image, index) => (
                  <Box key={index} sx={{ position: 'relative' }}>
                    <Card 
                      sx={{ 
                        width: '235px',
                        height: '235px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        position: 'relative'
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={image}
                        alt={`Product ${index + 1}`}
                        sx={{ 
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                      <IconButton
                        size="small"
                        onClick={() => handleRemoveImage(index)}
                        sx={{
                          position: 'absolute',
                          top: 4,
                          right: 4,
                          bgcolor: 'rgba(0,0,0,0.6)',
                          color: '#fff',
                          width: 20,
                          height: 20,
                          '&:hover': {
                            bgcolor: 'rgba(0,0,0,0.8)'
                          }
                        }}
                      >
                        <CloseIcon sx={{ fontSize: '14px' }} />
                      </IconButton>
                    </Card>
                  </Box>
                ))}
                
                {/* Add Image Button - only show if less than 4 images */}
                {productData.images.length < 4 && (
                  <Box>
                    <Card 
                      sx={{ 
                        width: '235px',
                        height: '235px',
                        borderRadius: '12px',
                        border: '2px dashed #d4a5c4',
                        bgcolor: 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          bgcolor: '#faf7f9',
                          borderColor: '#b8639c'
                        }
                      }}
                      onClick={handleImageUpload}
                    >
                      <AddIcon sx={{ color: '#d4a5c4', fontSize: '24px' }} />
                    </Card>
                  </Box>
                )}
              </Box>
            </Box>

            {/* Status Section - Moved below images to match UI */}
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                mb: 4,
                py: 1
              }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: 600,
                  color: '#333',
                  fontSize: '16px'
                }}
              >
                Status
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#333',
                    fontSize: '16px',
                    fontWeight: 500
                  }}
                >
                  Active
                </Typography>
                <Switch
                  checked={productData.active}
                  onChange={(e) => handleInputChange('active', e.target.checked)}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#b8639c',
                      '&:hover': {
                        backgroundColor: 'rgba(184, 99, 156, 0.04)',
                      },
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#b8639c',
                    },
                    '& .MuiSwitch-track': {
                      backgroundColor: '#e0e0e0',
                    }
                  }}
                />
              </Box>
            </Box>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4, maxWidth: '600px', mx: 'auto' }}>
              <Button
                fullWidth
                variant="contained"
                onClick={handleSaveProduct}
                sx={{
                  bgcolor: '#b8639c',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '16px',
                  textTransform: 'none',
                  borderRadius: '8px',
                  py: 1.5,
                  '&:hover': {
                    bgcolor: '#a0527c'
                  }
                }}
              >
                Save Product
              </Button>
              <Button
                fullWidth
                variant="outlined"
                onClick={handleCancel}
                sx={{
                  borderColor: '#b8639c',
                  color: '#b8639c',
                  fontWeight: 600,
                  fontSize: '16px',
                  textTransform: 'none',
                  borderRadius: '8px',
                  py: 1.5,
                  '&:hover': {
                    borderColor: '#a0527c',
                    color: '#a0527c',
                    bgcolor: 'rgba(184, 99, 156, 0.04)'
                  }
                }}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProduct;