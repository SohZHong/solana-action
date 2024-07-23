# Project Name
This project is built using Solana Actions and Blinks technology.
## Getting Started

To get started with this project, you need to set up the environment variables required for the Blink functionality. Follow the steps below:

### Prerequisites

- Node.js (version 14.x or higher)
- npm (version 6.x or higher)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/project-name.git
    cd project-name
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env.local` file in the root directory of the project. This file should contain your environment variables. You can start by copying the sample file:

    ```bash
    cp .env.local.example .env.local
    ```

4. Update the `.env.local` file with your email details for Blink functionality:

    ```plaintext
    RECIPIENT=<Your Solflare / Phantom Wallet Address>
    DEFAULT_AMOUNT=0
    RPC_URL_MAINNET=https://api.devnet.solana.com
    DEFAULT_TITLE=<Any Title>
    DEFAULT_DESCRIPTION=<Any description>
    DEFAULT_DONATION_URL=<Any endpoint, default: /api/actions/feedback>
    DEFAULT_EMAIL=<Email to receive feedback>
    DEFAULT_EMAIL_PASSWORD=<Password of your email account, secret key for Google 2FA Accounts>
    ```

### Usage

Once the environment variables are set up, you can start the development server:

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
