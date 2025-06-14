// src/pages/AddProduct.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  TextField,
  Button,
  Card,
  CardMedia,
  IconButton,
  Switch,
  Select,
  MenuItem,
  FormControl,
  useMediaQuery,
  useTheme,
  Snackbar,
  Alert
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  Add as AddIcon,
  Close as CloseIcon,
  Image as ImageIcon
} from '@mui/icons-material';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const AddProduct = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const [productData, setProductData] = useState({
    category: 'Crockery',
    name: '',
    description: '',
    price: '',
    quantity: '',
    discount: '',
    active: true,
    images: [],
    customFields: [
      { label: 'Color', value: '' },
      { label: 'Size', value: '' }
    ]
  });

  const categories = ['Crockery', 'Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Books'];

  const handleInputChange = (field, value) => {
    setProductData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCustomFieldChange = (index, value) => {
    setProductData(prev => ({
      ...prev,
      customFields: prev.customFields.map((field, i) => 
        i === index ? { ...field, value } : field
      )
    }));
  };

  const handleAddCustomField = () => {
    setProductData(prev => ({
      ...prev,
      customFields: [...prev.customFields, { label: 'New Field', value: '' }]
    }));
  };

  const handleImageUpload = (index) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setProductData(prev => {
            const newImages = [...prev.images];
            newImages[index] = event.target.result;
            return {
              ...prev,
              images: newImages
            };
          });
        };
        reader.readAsDataURL(file);
      }
    };
    
    input.click();
  };

  const handleRemoveImage = (index) => {
    setProductData(prev => {
      const newImages = [...prev.images];
      newImages[index] = null;
      return {
        ...prev,
        images: newImages
      };
    });
  };

  const validateForm = () => {
    if (!productData.name.trim()) {
      setSnackbar({ open: true, message: 'Product name is required', severity: 'error' });
      return false;
    }
    if (!productData.price || productData.price <= 0) {
      setSnackbar({ open: true, message: 'Valid price is required', severity: 'error' });
      return false;
    }
    if (!productData.quantity || productData.quantity <= 0) {
      setSnackbar({ open: true, message: 'Valid quantity is required', severity: 'error' });
      return false;
    }
    if (!productData.description.trim()) {
      setSnackbar({ open: true, message: 'Product description is required', severity: 'error' });
      return false;
    }
    return true;
  };

  const handleSaveProduct = () => {
    if (!validateForm()) {
      return;
    }

    try {
      // Here you would typically send the data to your backend API
      console.log('Save product:', productData);
      
      // For now, we'll simulate saving and show success message
      setSnackbar({ open: true, message: 'Product saved successfully!', severity: 'success' });
      
      // Navigate back to products page after a short delay
      setTimeout(() => {
        navigate('/Product');
      }, 1500);
      
    } catch (error) {
      console.error('Error saving product:', error);
      setSnackbar({ open: true, message: 'Error saving product. Please try again.', severity: 'error' });
    }
  };

  const handleCancel = () => {
    navigate('/Product');
  };

  const handleGoBack = () => {
    navigate('/Product');
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
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
              Add Products
            </Typography>
          </Box>
          
          {/* Form Content */}
          <Box sx={{ maxWidth: '1000px' }}>
            {/* Product Category, Name, Price, and Quantity */}
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
                {/* Product Category */}
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
                    Product Category
                  </Typography>
                  <FormControl fullWidth>
                    <Select
                      value={productData.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      sx={{
                        borderRadius: '8px',
                        bgcolor: '#fff',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#e0e0e0',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#d4a5c4',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#b8639c',
                        },
                      }}
                    >
                      {categories.map((category) => (
                        <MenuItem key={category} value={category}>
                          {category}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>

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
                    Product Name *
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
                    Price (₹) *
                  </Typography>
                  <TextField
                    fullWidth
                    type="number"
                    value={productData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    placeholder="Enter price"
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
                    Quantity in Stock *
                  </Typography>
                  <TextField
                    fullWidth
                    type="number"
                    value={productData.quantity}
                    onChange={(e) => handleInputChange('quantity', e.target.value)}
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

              {/* Right Column - Description, Discount, and Custom Fields */}
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
                    Description *
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
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

                {/* Customize Product Field */}
                <Box>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontWeight: 600, 
                      mb: 2,
                      color: '#333',
                      fontSize: '16px'
                    }}
                  >
                    Customize Product Field:
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    {productData.customFields.slice(0, 2).map((field, index) => (
                      <Box key={index} sx={{ flex: 1 }}>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            fontWeight: 500, 
                            mb: 1,
                            color: '#333',
                            fontSize: '14px'
                          }}
                        >
                          {field.label}:
                        </Typography>
                        <TextField
                          fullWidth
                          size="small"
                          value={field.value}
                          onChange={(e) => handleCustomFieldChange(index, e.target.value)}
                          placeholder={`Enter ${field.label.toLowerCase()}`}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '6px',
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
                    ))}
                  </Box>

                  <Button
                    variant="text"
                    onClick={handleAddCustomField}
                    sx={{
                      color: '#b8639c',
                      textTransform: 'none',
                      fontSize: '14px',
                      fontWeight: 500,
                      p: 0,
                      '&:hover': {
                        bgcolor: 'transparent',
                        color: '#a0527c'
                      }
                    }}
                  >
                    + Add Customize Field
                  </Button>
                </Box>
              </Box>
            </Box>

            {/* Upload Images Section */}
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
              
              <Box 
                sx={{ 
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                  flexWrap: 'wrap'
                }}
              >
                {Array.from({ length: 4 }).map((_, index) => (
                  <Box key={index} sx={{ position: 'relative' }}>
                    <Card 
                      sx={{ 
                        width: '150px',
                        height: '150px',
                        borderRadius: '12px',
                        border: '2px dashed #d4a5c4',
                        bgcolor: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        overflow: 'hidden',
                        '&:hover': {
                          bgcolor: '#faf7f9',
                          borderColor: '#b8639c'
                        }
                      }}
                      onClick={() => handleImageUpload(index)}
                    >
                      {productData.images[index] ? (
                        <>
                          <CardMedia
                            component="img"
                            image={productData.images[index]}
                            alt={`Product ${index + 1}`}
                            sx={{ 
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                          <IconButton
                            size="small"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveImage(index);
                            }}
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
                        </>
                      ) : (
                        <ImageIcon sx={{ color: '#d4a5c4', fontSize: '30px' }} />
                      )}
                    </Card>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Status Section */}
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

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AddProduct;