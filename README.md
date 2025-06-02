# Balancr

Balancr is a modern personal finance tracker built with React and Vite. It helps users manage their income and expenses, visualize trends, and gain insights into their financial health.

## Features

- **User Authentication**: Secure login and registration.
- **Dashboard**: Overview of total balance, income, and expenses.
- **Income & Expense Tracking**: Add, view, and delete transactions.
- **Charts & Analytics**: Visualize income and expense trends with interactive charts.
- **Profile Management**: Upload and manage your profile photo.
- **Data Export**: Download your income and expense data as Excel files.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/) (for charts)
- [Axios](https://axios-http.com/)
- [React Router](https://reactrouter.com/)
- [Moment.js](https://momentjs.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [emoji-picker-react](https://github.com/ealush/emoji-picker-react)

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/Balancr_frontend.git
   cd Balancr_frontend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```sh
npm run build
```

### Lint the Code

```sh
npm run lint
```

## Project Structure

```
src/
  components/      # Reusable UI components
  context/         # React context for user state
  hooks/           # Custom React hooks
  pages/           # Page components (Dashboard, Auth, etc.)
  utils/           # Utility functions and API helpers
  assets/          # Static assets (images, icons)
public/
  icon.png         # App icon
index.html         # Main HTML file
```

## API

This project uses a backend API for authentication and data management. Update the API base URL in [`src/utils/apiPaths.js`](src/utils/apiPaths.js) if needed.

## Deployment

The project is ready to deploy on platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/). See [vercel.json](vercel.json) for rewrite rules.

## License

This project is licensed under the MIT License.

---

**Made with ❤️ using React and Vite**