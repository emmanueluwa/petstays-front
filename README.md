# Pet-Friendly Stays Booking App

## Project Overview

This project is a MERN (MongoDB, Express.js, React.js, Node.js) stack application for booking pet-friendly accommodations. It features a user-friendly interface built with React, styled using Tailwind CSS, and powered by a Express.js backend.

## Link

- Live project: [here](https://petstays.onrender.com)

## Features

- User Authentication (using HTTP cookies and JWT)
- Accommodation Management
  - Add, edit, and view pet-friendly stays
  - Image uploads for accommodations
- Search System
  - Search, sort, and filter accommodations
  - Save search terms to session storage
- Booking System
  - Booking confirmation page
  - Stripe integration for secure payments
- User Dashboard
  - View and manage bookings
- Home Page
  - Display of recently added pet-friendly stays

## Tech Stack

### Frontend:

- React.js
- Tailwind CSS
- React Router for navigation
- React Query for state management
- React Hook Form for form handling
- Stripe for payment processing

### Backend:

- Node.js with Express.js
- MongoDB for database
- JWT for authentication

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/emmanueluwa/petstays-front.git
   ```

2. Install dependencies:

   ```
   cd [project-directory]
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the necessary environment variables (refer to `.env.example`).

4. Start the development server:
   ```
   npm run dev
   ```

## Related Repositories

- Backend API: [backend](https://github.com/emmanueluwa/petstays_back.git)
- E2E Tests: [tests](https://github.com/emmanueluwa/petstays_e2e_tests)

## Deployment

This application is deployed using render. For deployment instructions, please refer to the documentation of your chosen platform.

## Acknowledgements

- [Stripe](https://stripe.com) for payment processing
- [React Icons](https://react-icons.github.io/react-icons/) for the icon set
- All other open-source libraries used in this project
