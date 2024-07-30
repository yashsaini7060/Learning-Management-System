# Learning Management System Website

This is a full-stack learning management system website that allows users to buy courses, view videos, and manage their account. Administrators can add new courses. The project uses various technologies for both the frontend and backend development.

## Features

- **User Features:**
  - Sign up and log in with authentication
  - Browse and purchase courses
  - Access purchased courses and watch videos
  - Profile management
  - Receive email notifications

- **Admin Features:**
  - Add, update, and delete courses
  - Upload course materials and videos
  - Manage users

## Technologies Used

### Backend
- **Node.js** and **Express.js**: Server-side development and routing
- **MongoDB** and **Mongoose**: Database and ODM for data management
- **JSON Web Token (jsonwebtoken)**: Authentication and authorization
- **Multer**: File uploads
- **Cloudinary**: Cloud storage for images and videos
- **Nodemailer**: Sending email notifications

### Frontend
- **React**: Frontend library for building user interfaces
- **Redux**: State management
- **Axios**: HTTP client for API requests
- **React Router DOM**: Routing for React applications
- **Chart.js**: Data visualization and analytics
- **DaisyUI**: UI components and styling

## Installation

### Prerequisites

- Node.js
- MongoDB
- Cloudinary account for media storage

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/learning-management-website.git
   cd learning-management-website
    ```
1. **Backend Setup:**

- Navigate to the backend directory and install dependencies:

  ```bash
  cd server
  npm install
  ```
- Create a .env file in the backend directory with the following environment variables:

  ```bash
  NODE_ENV=development
  PORT=5014
  MONGO_URI=<your_mongo_connection_string>
  JWT_SECRET=<your_jwt_secret>
  JWT_EXPIRY=90d
  CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
  CLOUDINARY_API_KEY=<your_cloudinary_api_key>
  CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
  SMTP_HOST=<your_smtp_host>
  SMTP_PORT=<your_smtp_port>
  SMTP_USERNAME=<your_smtp_username>
  SMTP_PASSWORD=<your_smtp_password>
  SMTP_FROM_EMAIL=<your_smtp_from_email>
  RAZORPAY_KEY_ID=<your_razorpay_key_id>
  RAZORPAY_SECRET=<your_razorpay_seceret>
  RAZORPAY_PLAN_ID=<your_razorpay_plan_id>
  FRONTEND_URL=<your_frontend_url>
  CONTACT_US_EMAIL=<your_contact_us_email>

  ```
- Start the backend server:

  ```bash
  npm start
  ```

3. **Frontend Setup:**
- Navigate to the frontend directory and install dependencies:

  ```bash
  cd ../client
  npm install
  ```
- Create a `.env` file in the frontend directory with the following environment variables:

  ```bash
  BASE_URL=http://localhost:5014/api/v1
  ```
- Start the frontend development server:

  ```bash
  npm start
  ```

4. **Access the Application:**
- Open your browser and navigate to http://localhost:3000 to view the website.


### Usage
1. **User Registration and Login:**
    - Users can sign up, log in, and manage their profiles.
2. **Course Browsing and Purchase:**
    - Users can browse available courses, purchase them, and access course materials.

1. **Admin Panel:**
    - Admins can add, update, and manage courses.
