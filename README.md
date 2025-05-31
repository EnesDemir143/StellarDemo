# 📦 Stellar Click Reward DApp

This project is a decentralized application (DApp) built on the Stellar blockchain that rewards users with tokens for clicking. It's built using Next.js, React, and Stellar/Soroban technologies, offering a modern and interactive user experience.

## 🚀 Features

- 🔗 **Freighter Wallet Integration** - Seamless connection with Stellar's Freighter wallet
- 💰 **Click-to-Earn System** - Earn tokens with each click
- 🌐 **Stellar Futurenet Support** - Built and tested on Stellar's test network
- 🎨 **Modern UI/UX** - Beautiful animations and responsive design
- ⚡ **Real-time Counters** - Live tracking of earned tokens and click count
- 🔒 **Secure Transactions** - Built on Stellar's secure blockchain
- 🎯 **Interactive Elements** - Engaging animations and visual feedback

## 📂 Project Structure

```bash
stellar/
├── src/                    # Source code directory
│   ├── app/               # Next.js application directory
│   │   ├── page.tsx      # Main application page
│   │   ├── layout.tsx    # Root layout component
│   │   └── globals.css   # Global styles
│   └── components/       # React components (if any)
├── public/               # Static assets
├── contracts/           # Smart contract directory
├── .stellar/           # Stellar configuration
├── node_modules/       # Dependencies
├── next.config.ts     # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
├── package.json       # Project dependencies and scripts
└── tsconfig.json     # TypeScript configuration
```

## 🛠️ Technologies Used

- [Next.js 15.3.3](https://nextjs.org/) - React framework for production
- [React 19](https://reactjs.org/) - UI library
- [@soroban-react](https://github.com/soroban-react) - Stellar/Soroban integration
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Freighter Wallet](https://www.freighter.app/) - Stellar wallet integration

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- [Freighter Wallet](https://www.freighter.app/) browser extension
- Stellar Futurenet account
- Basic understanding of blockchain concepts

## 🚀 Installation

1️⃣ **Clone the repository:**
```bash
git clone https://github.com/yourusername/stellar.git
cd stellar
```

2️⃣ **Install dependencies:**
```bash
npm install
# or
yarn install
```

3️⃣ **Start the development server:**
```bash
npm run dev
# or
yarn dev
```

4️⃣ **Access the application:**
Open [http://localhost:3000](http://localhost:3000) in your browser

## 💻 Usage

1. Install and set up Freighter Wallet
2. Connect to Stellar Futurenet
3. Click "Connect Freighter Wallet" on the main page
4. Approve the wallet connection
5. Start clicking to earn tokens
6. Monitor your earned tokens and click count in real-time

## 🔧 Development

```bash
# Run linting
npm run lint

# Build for production
npm run build

# Start production server
npm run start

# Run tests (if implemented)
npm run test
```

## ⚠️ Known Issues

- Critical dependency warnings related to `require-addon` and `sodium-native` modules
- These warnings are related to Stellar SDK dependencies and don't affect functionality
- For development, you can safely ignore these warnings

## 📝 Code Structure Details

### Main Components

- `src/app/page.tsx`: Main application component
  - Handles wallet connection
  - Manages click rewards
  - Implements UI components
  - Manages state with React hooks

### Key Features Implementation

- **Wallet Connection**: Uses `@stellar/freighter-api` for secure wallet integration
- **Token Rewards**: Implements click-to-earn mechanism with state management
- **UI Components**: Built with Tailwind CSS for responsive design
- **Animations**: Custom CSS animations for enhanced user experience

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact & Support

- Project Link: [https://github.com/yourusername/stellar](https://github.com/yourusername/stellar)
- Twitter: [@your-twitter](https://twitter.com/your-twitter)

## 🔗 Useful Links

- [Stellar Documentation](https://developers.stellar.org/docs/)
- [Soroban Documentation](https://soroban.stellar.org/docs)
- [Freighter Wallet](https://www.freighter.app/)
- [Next.js Documentation](https://nextjs.org/docs)

---

**Note:** Make sure to have Freighter Wallet installed and connected to Futurenet before testing the application!

---

Made with ❤️ by [Your Name]
