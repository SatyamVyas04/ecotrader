
![Screen Shot 2025-01-29 at 21 19 49](https://github.com/user-attachments/assets/477e077f-c6a8-40e2-9d1e-b33d48d079b1)

**EcoTrader** is a platform that empowers small investors to participate in the renewable energy market, allowing investments in solar, wind, hydrogen, and waste-to-energy projects. The platform aims to provide users with opportunities to earn passive income while contributing to climate change mitigation. [Visit EcoTrader](https://www.ecotrader.io/)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- **User Authentication**: Secure login and registration system.
- **Investment Dashboard**: Real-time insights into investment portfolios.
- **Project Exploration**: Browse and invest in various renewable energy projects.
- **Responsive Design**: Optimized for various devices and screen sizes.
- **Animations**: Smooth transitions and animations for enhanced user experience.

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [React AOS](https://www.npmjs.com/package/react-aos)
- **UI Components**: Custom components with "magic" UI effects

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/SatyamVyas04/ecotrader.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd ecotrader
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

   This command will install all required project dependencies specified in `package.json`.

4. **Configure Environment Variables**

   Create a `.env` file in the root directory and add your MongoDB connection string:

   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/ecotrader?retryWrites=true&w=majority
   ```

   Replace `<username>` and `<password>` with your MongoDB credentials.

5. **Build the Project**

   ```bash
   npm run build
   ```

   This command compiles the project and prepares it for deployment or local running.

## Usage

After completing the installation steps, you can start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to explore the application.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes.
4. Push to your fork and submit a pull request.


This project is licensed under the MIT License. See the `LICENSE` file for details.
