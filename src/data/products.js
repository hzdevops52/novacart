export const categories = [
  {
    id: 'fashion',
    name: 'Fashion',
    description: 'Everyday styles',
    icon: 'shirt',
  },
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Smart essentials',
    icon: 'headphones',
  },
  {
    id: 'home',
    name: 'Home & Living',
    description: 'Make it yours',
    icon: 'lamp',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Finishing touches',
    icon: 'watch',
  },
];

export const products = [
  {
    id: 'nc-001',
    name: 'Everyday Classic Sneakers',
    category: 'fashion',
    price: 64.99,
    originalPrice: 79.99,
    rating: 4.8,
    reviewCount: 124,
    badge: 'Bestseller',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80',
    description:
      'Comfortable everyday sneakers with a versatile design for casual outings and daily wear.',
  },
  {
    id: 'nc-002',
    name: 'Minimal Everyday Backpack',
    category: 'accessories',
    price: 42.00,
    originalPrice: null,
    rating: 4.7,
    reviewCount: 86,
    badge: 'Popular',
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80',
    description:
      'A clean, practical backpack designed to carry your everyday essentials in style.',
  },
  {
    id: 'nc-003',
    name: 'Wireless Studio Headphones',
    category: 'electronics',
    price: 89.99,
    originalPrice: 109.99,
    rating: 4.9,
    reviewCount: 203,
    badge: 'Sale',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80',
    description:
      'Enjoy your favorite music with comfortable over-ear headphones and a modern everyday design.',
  },
  {
    id: 'nc-004',
    name: 'Modern Table Lamp',
    category: 'home',
    price: 36.50,
    originalPrice: null,
    rating: 4.6,
    reviewCount: 58,
    badge: null,
    image:
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80',
    description:
      'A simple, contemporary lamp that adds warm light to a desk, bedside table, or reading corner.',
  },
  {
    id: 'nc-005',
    name: 'Classic Everyday Watch',
    category: 'accessories',
    price: 74.00,
    originalPrice: 92.00,
    rating: 4.7,
    reviewCount: 91,
    badge: 'Sale',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80',
    description:
      'A timeless watch with a minimalist face, suitable for everyday wear and special occasions.',
  },
  {
    id: 'nc-006',
    name: 'Cotton Casual T-Shirt',
    category: 'fashion',
    price: 24.99,
    originalPrice: null,
    rating: 4.5,
    reviewCount: 72,
    badge: null,
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80',
    description:
      'A versatile casual T-shirt designed for comfortable everyday outfits.',
  },
  {
    id: 'nc-007',
    name: 'Portable Bluetooth Speaker',
    category: 'electronics',
    price: 49.99,
    originalPrice: 59.99,
    rating: 4.8,
    reviewCount: 147,
    badge: 'Popular',
    image:
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80',
    description:
      'A compact speaker for enjoying music at home or taking your playlist on the go.',
  },
  {
    id: 'nc-008',
    name: 'Ceramic Decor Vase',
    category: 'home',
    price: 28.00,
    originalPrice: null,
    rating: 4.6,
    reviewCount: 43,
    badge: null,
    image:
      'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=700&q=80',
    description:
      'A simple decorative vase that complements shelves, tables, and contemporary interiors.',
  },
];

export const formatPrice = (price) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
