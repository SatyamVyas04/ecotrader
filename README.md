# EcoTrader

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/SatyamVyas04/ecotrader
```

### 2. Navigate to Project Directory

```bash
cd ecotrader
```

### 3. Install Dependencies

```bash
npm install
```

This command will install all required project dependencies specified in `package.json`

### 4. Configure Environment Variables

```bash
echo "MONGODB_URI=" > .env
```

-   Open the `.env` file
-   Add your MongoDB connection string
-   Example:
    ```
    MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/ecotrader?retryWrites=true&w=majority
    ```

### 5. Build the Project

```bash
npm run build
```

This command compiles the project and prepares it for deployment or local running
