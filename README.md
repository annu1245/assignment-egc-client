## 🧾 **Expense Tracker Frontend (React + Vite + Redux Toolkit + RTK Query)**

A modern **React.js** application built using **Vite**, **Redux Toolkit**, and **RTK Query** to manage and visualize personal expense data.
The app allows users to record income and expense transactions, apply filters, and view summarized insights via an interactive **Income vs Expense** bar chart.

---

### 🚀 **Tech Stack**

| Category         | Technology                                                                 |
| ---------------- | -------------------------------------------------------------------------- |
| Framework        | [React.js](https://react.dev/) + [Vite](https://vitejs.dev/)               |
| State Management | [Redux Toolkit](https://redux-toolkit.js.org/)                             |
| API Handling     | [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)               |
| Form Handling    | [React Hook Form](https://react-hook-form.com/)                            |
| Charts           | [Recharts](https://recharts.org/en-US/)                                    |
| UI Library       | [DaisyUI](https://daisyui.com/) + [Tailwind CSS](https://tailwindcss.com/) |
| Notifications    | [React Toastify](https://fkhadra.github.io/react-toastify/introduction)    |

---

### 📂 **Folder Structure**

```
src/
│
├── app/
│   ├── store.js               # Redux store configuration
│   └── filterSlice.js         # Redux slice for filters
│
├── components/
│   ├── Dashboard.jsx          # Main dashboard layout
│   ├── Filter.jsx             # Filter section with type, category, and date range
│   ├── SelectCategory.jsx     # Select input for category
│   ├── TransactionAction.jsx  # Add income/expense buttons + filter
│   ├── TransactionDialog.jsx  # Modal to create new transaction
│   ├── Transactions.jsx       # Transaction table
│   └── TransactionBarChart.jsx# Income vs Expense bar chart
│
├── services/
│   └── api.js                 # RTK Query API endpoints
│
├── utils/
│   └── form.js                # Utility helpers (e.g., getTodayDate, formatDate)
│
└── main.jsx / App.jsx         # Entry point & root component
```

---

### ⚙️ **Installation and Setup**

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/assignment-egc-client.git
   cd assignment-egc-client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set environment variables**
   Create a `.env` file at the root with the following:

   ```bash
   VITE_BASE_URL=http://localhost:3000
   ```

4. **Run the app**

   ```bash
   npm run dev
   ```

5. Open in your browser:
   👉 [http://localhost:5173](http://localhost:5173)

---

### 🧩 **Core Features**

#### 🧮 Transaction Management

* Add **income** or **expense** transactions.
* Each transaction includes:

  * Type (Income / Expense)
  * Amount
  * Category
  * Description
  * Date

#### 🔍 Filter System

* Filter transactions by:

  * **Type** (income or expense)
  * **Category**
  * **Date Range** (from - to)
* Auto-updates dashboard and chart in real-time using Redux.

#### 📊 Analytics Dashboard

* Displays **Income vs Expense** data using Recharts.
* Fully responsive, updates instantly with filter changes.

#### 💾 Persistent Data Fetching

* Powered by **RTK Query** for efficient API caching and invalidation.
* Automatically re-fetches data after new transactions.

#### ⚡ UI & Experience

* Fast and responsive layout with **Tailwind CSS + DaisyUI**.
* Reusable modal for adding new transactions.
* Toast notifications for success/error messages.

---

### 🧠 **Redux State Overview**

```js
{
  filter: {
    type: "",       // "income" | "expense"
    category: "",   // string
    startDate: "",  // date (YYYY-MM-DD)
    endDate: ""     // date (YYYY-MM-DD)
  },
  api: { ... }      // RTK Query cache
}
```

---

### 📡 **API Integration**

All API calls are managed using **RTK Query** (`src/services/api.js`):

| Endpoint                       | Method | Description                           |
| ------------------------------ | ------ | ------------------------------------- |
| `/api/transactions`            | GET    | Fetch all transactions (with filters) |
| `/api/transactions`            | POST   | Create new transaction                |
| `/api/transactions/categories` | GET    | Fetch available categories            |

Supports query parameters like:

```
/api/transactions?type=income&category=salary&startDate=2025-01-01&endDate=2025-01-31
```

---

### 📈 **Charts Overview**

The **`TransactionBarChart`** component:

* Groups transactions by **month and year**
* Displays **Income vs Expense** using `Recharts`
* Updates dynamically when filters change

Example Data Transformation:

```js
[
  { month: "Jan 2025", income: 12000, expense: 8000 },
  { month: "Feb 2025", income: 15000, expense: 10000 },
]
```

---

### 🧑‍💻 **Developer Notes**

* Uses **`invalidatesTags`** in RTK Query to auto-refresh data on creation.
* Follows clean component structure and separation of concerns.
* Built with scalability in mind — can easily support authentication, pagination, and charts extension.

---
