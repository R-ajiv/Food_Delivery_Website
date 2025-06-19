# 🍕 Food Delivery Website

A full-stack food delivery web application built with React.js, Node.js, Express.js, and MongoDB. This project consists of three main components: a customer frontend, an admin panel, and a backend API.

## 🚀 Features

### Customer Frontend
- **Browse Menu**: Explore various food categories and items
- **User Authentication**: Secure login and registration system
- **Shopping Cart**: Add/remove items and manage quantities
- **Order Placement**: Complete checkout process with order details
- **Order Tracking**: View order history and current order status
- **Responsive Design**: Mobile-friendly interface

### Admin Panel
- **Food Management**: Add, edit, and delete food items
- **Order Management**: View and update order status
- **Dashboard**: Overview of restaurant operations
- **Inventory Control**: Manage food availability

### Backend API
- **RESTful API**: Clean and organized endpoints
- **Authentication**: JWT-based user authentication
- **Database Integration**: MongoDB for data persistence
- **File Upload**: Image upload for food items
- **Order Processing**: Complete order lifecycle management

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Vite (Build tool)
- CSS3
- Context API for state management

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Multer (File uploads)

**Admin Panel:**
- React.js
- Vite
- Modern UI components

## 📁 Project Structure

```
r-ajiv-food_delivery_website/
├── frontend/          # Customer-facing React application
├── admin/            # Admin panel React application
└── backend/          # Node.js/Express API server
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/r-ajiv-food_delivery_website.git
   cd r-ajiv-food_delivery_website
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   
   # Create .env file with the following variables:
   # MONGODB_URI=your_mongodb_connection_string
   # JWT_SECRET=your_jwt_secret_key
   # PORT=4000
   
   npm start
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Admin Panel Setup**
   ```bash
   cd admin
   npm install
   npm run dev
   ```

## 🔧 Environment Variables

Create a `.env` file in the backend directory:

```env
MONGODB_URI=mongodb://localhost:27017/food-delivery
JWT_SECRET=your-secret-key
PORT=4000
STRIPE_SECRET_KEY=your-stripe-secret-key
```

## 📱 Usage

1. **Customer Interface**: Navigate to `http://localhost:5173` (or your Vite dev server port)
2. **Admin Panel**: Navigate to `http://localhost:5174` (or your admin dev server port)
3. **API Server**: Runs on `http://localhost:4000`

### Customer Flow
1. Browse the menu and select food items
2. Add items to cart
3. Register/Login to place order
4. Proceed to checkout and place order
5. Track order status

### Admin Flow
1. Login to admin panel
2. Add new food items with images
3. Manage existing food inventory
4. View and process customer orders
5. Update order status

## 🗂️ API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login

### Food Management
- `GET /api/food/list` - Get all food items
- `POST /api/food/add` - Add new food item (Admin)
- `POST /api/food/remove` - Remove food item (Admin)

### Cart Management
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart
- `POST /api/cart/get` - Get user cart

### Order Management
- `POST /api/order/place` - Place new order
- `POST /api/order/verify` - Verify payment
- `POST /api/order/userorders` - Get user orders
- `GET /api/order/list` - Get all orders (Admin)
- `POST /api/order/status` - Update order status (Admin)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Rajiv**
- GitHub: [@r-ajiv](https://github.com/r-ajiv)

## 🙏 Acknowledgments

- Thanks to all contributors who helped with this project
- Inspired by modern food delivery applications
- Built with love for the developer community

## 📞 Support

If you have any questions or need help with setup, please open an issue in the GitHub repository.

---

⭐ If you found this project helpful, please give it a star on GitHub!
