import React, { useMemo, useState } from "react";
import "./App.css";

const menuGroups = [
  {
    title: "OVERVIEW",
    items: [{ id: "dashboard", label: "Dashboard", icon: "▦" }],
  },
  {
    title: "SALES",
    items: [
      { id: "customers", label: "Customers", icon: "♟" },
      { id: "quotations", label: "Quotations", icon: "▤" },
      { id: "sales-orders", label: "Sales Orders", icon: "▥" },
      { id: "invoices", label: "Invoices", icon: "▧" },
      { id: "sales-receipts", label: "Sales Receipts", icon: "▣" },
      { id: "receivables", label: "Payments Received", icon: "₹" },
      { id: "credit-notes", label: "Credit Notes", icon: "↩" },
      { id: "delivery-notes", label: "Delivery Notes", icon: "▰" },
      { id: "packing-slips", label: "Packing Slips", icon: "▱" },
    ],
  },
  {
    title: "PURCHASES",
    items: [
      { id: "vendors", label: "Vendors", icon: "♙" },
      { id: "expenses", label: "Expenses", icon: "◆" },
      { id: "purchase-orders", label: "Purchase Orders", icon: "▤" },
      { id: "bills", label: "Bills", icon: "▧" },
      { id: "recurring-bills", label: "Recurring Bills", icon: "↻" },
      { id: "payments-made", label: "Payments Made", icon: "₹" },
      { id: "vendor-credits", label: "Vendor Credits", icon: "↩" },
    ],
  },
  {
    title: "ACCOUNTING",
    items: [
      { id: "chart-of-accounts", label: "Chart of Accounts", icon: "▤" },
      { id: "journal", label: "Journal Entries", icon: "☷" },
      { id: "ledger", label: "General Ledger", icon: "▥" },
      { id: "trial-balance", label: "Trial Balance", icon: "⚖" },
      { id: "profit-loss", label: "Profit & Loss", icon: "↗" },
      { id: "balance-sheet", label: "Balance Sheet", icon: "▤" },
    ],
  },
  {
    title: "BANKING & TAX",
    items: [
      { id: "banking", label: "Banking", icon: "▣" },
      { id: "taxation", label: "Taxation", icon: "%" },
      { id: "budgeting", label: "Budgeting", icon: "◫" },
    ],
  },
  {
    title: "REPORTS",
    items: [
      { id: "financial-reports", label: "Financial Reports", icon: "▥" },
      { id: "tax-reports", label: "Tax Reports", icon: "▤" },
    ],
  },
];

const initialInvoices = [
  {
    id: 1,
    number: "INV-1001",
    customer: "ABC Technologies",
    date: "05 Oct 2026",
    due: "20 Oct 2026",
    amount: 59000,
    status: "Paid",
  },
  {
    id: 2,
    number: "INV-1002",
    customer: "Nova Solutions",
    date: "04 Oct 2026",
    due: "19 Oct 2026",
    amount: 42000,
    status: "Pending",
  },
  {
    id: 3,
    number: "INV-1003",
    customer: "Bright Systems",
    date: "02 Oct 2026",
    due: "17 Oct 2026",
    amount: 78500,
    status: "Partial",
  },
];

const initialExpenses = [
  {
    id: 1,
    category: "Office Rent",
    description: "October office rent",
    date: "03 Oct 2026",
    amount: 50000,
    status: "Approved",
  },
  {
    id: 2,
    category: "Electricity",
    description: "Monthly electricity bill",
    date: "02 Oct 2026",
    amount: 12500,
    status: "Approved",
  },
  {
    id: 3,
    category: "Travel",
    description: "Business travel expenses",
    date: "01 Oct 2026",
    amount: 8500,
    status: "Pending",
  },
];

const customers = [
  {
    name: "ABC Technologies",
    email: "accounts@abc.com",
    phone: "+91 98765 43210",
    balance: 0,
  },
  {
    name: "Nova Solutions",
    email: "finance@nova.com",
    phone: "+91 98765 12345",
    balance: 42000,
  },
  {
    name: "Bright Systems",
    email: "billing@bright.com",
    phone: "+91 99887 66554",
    balance: 78500,
  },
];

const vendors = [
  {
    name: "Tech Supplies Pvt Ltd",
    email: "sales@techsupplies.com",
    phone: "+91 90000 11111",
    balance: 85000,
  },
  {
    name: "Office Mart",
    email: "billing@officemart.com",
    phone: "+91 90000 22222",
    balance: 32500,
  },
];

const formatMoney = (value) =>
  `₹${Number(value).toLocaleString("en-IN", {
    maximumFractionDigits: 0,
  })}`;

function Logo() {
  return (
    <div className="logo-area">
      <div className="logo-mark">
        <span>S</span>
      </div>
      <div>
        <div className="logo-text">STACKLY</div>
        <div className="logo-subtitle">FINANCIAL MANAGEMENT</div>
      </div>
    </div>
  );
}

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setError("");
    onLogin();
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="login-brand">
          <Logo />
        </div>

        <div className="login-content">
          <div className="login-badge">FINANCIAL MANAGEMENT</div>

          <h1>
            Manage your finances
            <br />
            <span>with confidence.</span>
          </h1>

          <p>
            Track accounting, invoices, expenses, banking and financial
            reports from one powerful workspace.
          </p>

          <div className="login-features">
            <div>
              <span>✓</span> Complete accounting management
            </div>
            <div>
              <span>✓</span> Real-time financial insights
            </div>
            <div>
              <span>✓</span> Secure business operations
            </div>
          </div>
        </div>
      </div>

      <div className="login-right">
        <form className="login-card" onSubmit={handleSubmit}>
          <div className="mobile-logo">
            <Logo />
          </div>

          <div className="login-title">
            <h2>Welcome back</h2>
            <p>Sign in to continue to your workspace</p>
          </div>

          {error && <div className="error-box">{error}</div>}

          <label>Email / Username</label>
          <div className="input-wrap">
            <span>✉</span>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label>Password</label>
          <div className="input-wrap">
            <span>●</span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="eye-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "◉" : "◌"}
            </button>
          </div>

          <div className="login-options">
            <label className="remember">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember me
            </label>

            <button type="button" className="forgot">
              Forgot Password?
            </button>
          </div>

          <button className="login-button" type="submit">
            Sign In <span>→</span>
          </button>

          <p className="login-footer">
            © 2026 STACKLY. All rights reserved.
          </p>
        </form>
      </div>
    </div>
  );
}

function StatCard({ title, value, change, icon, type }) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${type}`}>{icon}</div>
      <div className="stat-info">
        <span>{title}</span>
        <strong>{value}</strong>
        <small className={change?.startsWith("+") ? "positive" : ""}>
          {change}
        </small>
      </div>
    </div>
  );
}

function Dashboard({
  invoices,
  expenses,
  onNavigate,
}) {
  const totalRevenue = invoices.reduce((sum, x) => sum + x.amount, 0);
  const totalExpenses = expenses.reduce((sum, x) => sum + x.amount, 0);
  const receivable = invoices
    .filter((x) => x.status !== "Paid")
    .reduce((sum, x) => sum + x.amount, 0);

  const profit = totalRevenue - totalExpenses;

  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle="Here's what's happening with your finances today."
        action={
          <button
            className="primary-btn"
            onClick={() => onNavigate("invoices")}
          >
            + New Transaction
          </button>
        }
      />

      <div className="stats-grid">
        <StatCard
          title="Total Revenue"
          value={formatMoney(totalRevenue)}
          change="+12.8% from last month"
          icon="₹"
          type="green"
        />
        <StatCard
          title="Total Expenses"
          value={formatMoney(totalExpenses)}
          change="+4.6% from last month"
          icon="↗"
          type="orange"
        />
        <StatCard
          title="Net Profit"
          value={formatMoney(profit)}
          change="+18.2% from last month"
          icon="◆"
          type="purple"
        />
        <StatCard
          title="Accounts Receivable"
          value={formatMoney(receivable)}
          change="3 invoices outstanding"
          icon="◷"
          type="blue"
        />
      </div>

      <div className="dashboard-grid">
        <div className="panel chart-panel">
          <div className="panel-head">
            <div>
              <h3>Revenue vs Expenses</h3>
              <p>Financial performance for the current year</p>
            </div>
            <select>
              <option>2026</option>
              <option>2025</option>
            </select>
          </div>

          <div className="fake-chart">
            <div className="chart-y">
              <span>₹30L</span>
              <span>₹20L</span>
              <span>₹10L</span>
              <span>₹0</span>
            </div>

            <div className="chart-area">
              <div className="grid-line one" />
              <div className="grid-line two" />
              <div className="grid-line three" />
              <div className="bars">
                {[42, 58, 45, 70, 63, 80, 67].map((height, i) => (
                  <div className="bar-group" key={i}>
                    <div
                      className="bar revenue"
                      style={{ height: `${height}%` }}
                    />
                    <div
                      className="bar expense"
                      style={{ height: `${Math.max(25, height - 28)}%` }}
                    />
                    <span>
                      {["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="chart-legend">
            <span>
              <i className="legend revenue-color" /> Revenue
            </span>
            <span>
              <i className="legend expense-color" /> Expenses
            </span>
          </div>
        </div>

        <div className="panel">
          <div className="panel-head">
            <div>
              <h3>Expense Breakdown</h3>
              <p>Current month</p>
            </div>
            <button className="text-btn" onClick={() => onNavigate("expenses")}>
              View all
            </button>
          </div>

          <div className="donut-wrap">
            <div className="donut">
              <div>
                <strong>{formatMoney(totalExpenses)}</strong>
                <span>Total</span>
              </div>
            </div>
          </div>

          <div className="expense-list">
            <div>
              <span><i className="dot d1" /> Office</span>
              <strong>42%</strong>
            </div>
            <div>
              <span><i className="dot d2" /> Operations</span>
              <strong>28%</strong>
            </div>
            <div>
              <span><i className="dot d3" /> Travel</span>
              <strong>18%</strong>
            </div>
            <div>
              <span><i className="dot d4" /> Other</span>
              <strong>12%</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-grid">
        <div className="panel">
          <div className="panel-head">
            <div>
              <h3>Recent Transactions</h3>
              <p>Latest financial activities</p>
            </div>
            <button
              className="text-btn"
              onClick={() => onNavigate("invoices")}
            >
              View all
            </button>
          </div>

          <TransactionTable invoices={invoices.slice(0, 4)} />
        </div>

        <div className="panel quick-panel">
          <div className="panel-head">
            <div>
              <h3>Quick Actions</h3>
              <p>Create a new financial record</p>
            </div>
          </div>

          <div className="quick-actions">
            <button onClick={() => onNavigate("invoices")}>
              <span>▧</span>
              <div>
                <strong>New Invoice</strong>
                <small>Create customer invoice</small>
              </div>
              →
            </button>

            <button onClick={() => onNavigate("expenses")}>
              <span>◆</span>
              <div>
                <strong>Add Expense</strong>
                <small>Record business expense</small>
              </div>
              →
            </button>

            <button onClick={() => onNavigate("journal")}>
              <span>☷</span>
              <div>
                <strong>Journal Entry</strong>
                <small>Record accounting entry</small>
              </div>
              →
            </button>

            <button onClick={() => onNavigate("reports")}>
              <span>▥</span>
              <div>
                <strong>Financial Reports</strong>
                <small>View business reports</small>
              </div>
              →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function PageHeader({ title, subtitle, action }) {
  return (
    <div className="page-header">
      <div>
        <div className="breadcrumb">Home / {title}</div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

function TransactionTable({ invoices }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>REFERENCE</th>
            <th>CUSTOMER</th>
            <th>DATE</th>
            <th>AMOUNT</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((item) => (
            <tr key={item.id}>
              <td>
                <strong className="reference">{item.number}</strong>
              </td>
              <td>{item.customer}</td>
              <td>{item.date}</td>
              <td>
                <strong>{formatMoney(item.amount)}</strong>
              </td>
              <td>
                <Status status={item.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Status({ status }) {
  return (
    <span className={`status ${status.toLowerCase()}`}>
      <i /> {status}
    </span>
  );
}

function DataPage({
  title,
  subtitle,
  data,
  columns,
  addText = "Add New",
  onAdd,
  searchPlaceholder = "Search...",
}) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return data.filter((row) =>
      Object.values(row)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [data, search]);

  return (
    <>
      <PageHeader
        title={title}
        subtitle={subtitle}
        action={
          <button className="primary-btn" onClick={onAdd}>
            + {addText}
          </button>
        }
      />

      <div className="panel full-panel">
        <div className="toolbar">
          <div className="search-box">
            <span>⌕</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={searchPlaceholder}
            />
          </div>

          <div className="toolbar-actions">
            <button className="secondary-btn">Filter</button>
            <button className="secondary-btn">Export</button>
          </div>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.key}>{column.label}</th>
                ))}
                <th>ACTIONS</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((row, index) => (
                <tr key={row.id || index}>
                  {columns.map((column) => (
                    <td key={column.key}>
                      {column.key === "status" ? (
                        <Status status={row[column.key]} />
                      ) : column.money ? (
                        formatMoney(row[column.key])
                      ) : (
                        row[column.key]
                      )}
                    </td>
                  ))}
                  <td>
                    <div className="action-buttons">
                      <button title="View">◉</button>
                      <button title="Edit">✎</button>
                      <button title="Delete">⌫</button>
                    </div>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={columns.length + 1}>
                    <div className="empty-state">No records found</div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function FormModal({ title, type, onClose, onSave }) {
  const [form, setForm] = useState({
    customer: "",
    category: "",
    amount: "",
    date: "2026-10-05",
    description: "",
    invoice: "",
  });

  const update = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const submit = (e) => {
    e.preventDefault();

    if (!form.amount) return;

    onSave(form);
  };

  const isInvoice = type === "invoice";

  return (
    <div className="modal-overlay" onMouseDown={onClose}>
      <form
        className="modal"
        onSubmit={submit}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <div>
            <h2>{title}</h2>
            <p>Enter the details below</p>
          </div>
          <button type="button" onClick={onClose} className="close-btn">
            ×
          </button>
        </div>

        {isInvoice ? (
          <>
            <div className="form-grid">
              <div className="form-field">
                <label>Customer</label>
                <select
                  value={form.customer}
                  onChange={(e) => update("customer", e.target.value)}
                >
                  <option value="">Select customer</option>
                  {customers.map((x) => (
                    <option key={x.name}>{x.name}</option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label>Invoice Date</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                />
              </div>

              <div className="form-field">
                <label>Due Date</label>
                <input type="date" />
              </div>

              <div className="form-field">
                <label>Amount</label>
                <input
                  type="number"
                  placeholder="0"
                  value={form.amount}
                  onChange={(e) => update("amount", e.target.value)}
                />
              </div>
            </div>

            <div className="form-field">
              <label>Description</label>
              <textarea
                placeholder="Enter invoice description..."
                value={form.description}
                onChange={(e) => update("description", e.target.value)}
              />
            </div>
          </>
        ) : (
          <>
            <div className="form-grid">
              <div className="form-field">
                <label>Expense Category</label>
                <select
                  value={form.category}
                  onChange={(e) => update("category", e.target.value)}
                >
                  <option value="">Select category</option>
                  <option>Office Rent</option>
                  <option>Salary</option>
                  <option>Electricity</option>
                  <option>Travel</option>
                  <option>Office Supplies</option>
                  <option>Internet</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-field">
                <label>Expense Date</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                />
              </div>

              <div className="form-field">
                <label>Amount</label>
                <input
                  type="number"
                  placeholder="0"
                  value={form.amount}
                  onChange={(e) => update("amount", e.target.value)}
                />
              </div>

              <div className="form-field">
                <label>Payment Method</label>
                <select>
                  <option>Bank Transfer</option>
                  <option>Cash</option>
                  <option>UPI</option>
                  <option>Card</option>
                  <option>Cheque</option>
                </select>
              </div>
            </div>

            <div className="form-field">
              <label>Description</label>
              <textarea
                placeholder="Describe the expense..."
                value={form.description}
                onChange={(e) => update("description", e.target.value)}
              />
            </div>
          </>
        )}

        <div className="modal-actions">
          <button type="button" className="secondary-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="primary-btn" type="submit">
            Save {isInvoice ? "Invoice" : "Expense"}
          </button>
        </div>
      </form>
    </div>
  );
}

function SimpleAccountingPage({ id }) {
  const pages = {
    "chart-of-accounts": {
      title: "Chart of Accounts",
      subtitle: "Manage your company's financial account structure.",
      cards: [
        ["Assets", "12 Accounts", "₹18,50,000"],
        ["Liabilities", "7 Accounts", "₹6,25,000"],
        ["Equity", "4 Accounts", "₹12,40,000"],
        ["Revenue", "8 Accounts", "₹25,00,000"],
        ["Expenses", "16 Accounts", "₹7,90,000"],
      ],
    },
    journal: {
      title: "Journal Entries",
      subtitle: "Record and manage double-entry accounting transactions.",
      cards: [
        ["Posted Entries", "124", "This month"],
        ["Draft Entries", "8", "Needs review"],
        ["Debit Total", "₹25,00,000", "Current period"],
        ["Credit Total", "₹25,00,000", "Current period"],
      ],
    },
    ledger: {
      title: "General Ledger",
      subtitle: "View all account transactions and balances.",
      cards: [
        ["Total Accounts", "47", "Active"],
        ["Debit Transactions", "248", "This period"],
        ["Credit Transactions", "231", "This period"],
        ["Closing Balance", "₹31,75,000", "Current"],
      ],
    },
    "trial-balance": {
      title: "Trial Balance",
      subtitle: "Verify that total debits and credits are balanced.",
      cards: [
        ["Total Debit", "₹25,00,000", "Balanced"],
        ["Total Credit", "₹25,00,000", "Balanced"],
        ["Difference", "₹0", "No difference"],
      ],
    },
    "profit-loss": {
      title: "Profit & Loss",
      subtitle: "Analyze revenue, expenses and net profit.",
      cards: [
        ["Revenue", "₹25,00,000", "+12.8%"],
        ["Expenses", "₹7,90,000", "+4.6%"],
        ["Gross Profit", "₹17,10,000", "+18.2%"],
        ["Net Margin", "68.4%", "Healthy"],
      ],
    },
    "balance-sheet": {
      title: "Balance Sheet",
      subtitle: "View assets, liabilities and owner's equity.",
      cards: [
        ["Total Assets", "₹31,75,000", "Current"],
        ["Total Liabilities", "₹9,35,000", "Current"],
        ["Total Equity", "₹22,40,000", "Current"],
      ],
    },
    banking: {
      title: "Banking",
      subtitle: "Manage bank accounts, transfers and reconciliation.",
      cards: [
        ["Bank Balance", "₹6,75,000", "3 Accounts"],
        ["Cash Balance", "₹2,00,000", "Available"],
        ["Pending Reconciliation", "12", "Transactions"],
      ],
    },
    taxation: {
      title: "Taxation",
      subtitle: "Manage GST, tax records and tax liabilities.",
      cards: [
        ["GST Payable", "₹1,24,500", "Current period"],
        ["GST Receivable", "₹62,800", "Current period"],
        ["Taxable Sales", "₹25,00,000", "Current period"],
        ["Filing Status", "Pending", "October"],
      ],
    },
    budgeting: {
      title: "Budgeting",
      subtitle: "Plan and monitor your company's financial budgets.",
      cards: [
        ["Annual Budget", "₹40,00,000", "FY 2026"],
        ["Actual Spending", "₹28,75,000", "71.8% used"],
        ["Remaining", "₹11,25,000", "Available"],
      ],
    },
    "financial-reports": {
      title: "Financial Reports",
      subtitle: "Generate detailed reports for business decisions.",
      cards: [
        ["Profit & Loss", "Available", "Generate"],
        ["Balance Sheet", "Available", "Generate"],
        ["Cash Flow", "Available", "Generate"],
        ["Trial Balance", "Available", "Generate"],
      ],
    },
    "tax-reports": {
      title: "Tax Reports",
      subtitle: "Generate GST and tax-related financial reports.",
      cards: [
        ["GST Summary", "Available", "Generate"],
        ["Tax Liability", "₹1,24,500", "Current"],
        ["Input Tax Credit", "₹62,800", "Available"],
      ],
    },
  };

  const page = pages[id] || pages["chart-of-accounts"];

  return (
    <>
      <PageHeader
        title={page.title}
        subtitle={page.subtitle}
        action={
          <button className="primary-btn">
            + Add New
          </button>
        }
      />

      <div className="mini-cards">
        {page.cards.map((card, index) => (
          <div className="mini-card" key={index}>
            <span>{card[0]}</span>
            <strong>{card[1]}</strong>
            <small>{card[2]}</small>
          </div>
        ))}
      </div>

      <div className="panel full-panel">
        <div className="panel-head">
          <div>
            <h3>{page.title} Overview</h3>
            <p>Manage and review your financial information.</p>
          </div>
          <div className="toolbar-actions">
            <button className="secondary-btn">Filter</button>
            <button className="secondary-btn">Export</button>
          </div>
        </div>

        <div className="information-grid">
          <div>
            <span>Financial Year</span>
            <strong>2026 - 2027</strong>
          </div>
          <div>
            <span>Period</span>
            <strong>October 2026</strong>
          </div>
          <div>
            <span>Currency</span>
            <strong>INR (₹)</strong>
          </div>
          <div>
            <span>Last Updated</span>
            <strong>05 Oct 2026</strong>
          </div>
        </div>

        <div className="report-placeholder">
          <div className="report-icon">▥</div>
          <h3>{page.title}</h3>
          <p>
            Your detailed {page.title.toLowerCase()} information will appear
            here.
          </p>
          <button className="primary-btn">Generate Report</button>
        </div>
      </div>
    </>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [invoices, setInvoices] = useState(initialInvoices);
  const [expenses, setExpenses] = useState(initialExpenses);
  const [modal, setModal] = useState(null);

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  const activeItem = menuGroups
    .flatMap((group) => group.items)
    .find((item) => item.id === activePage);

  const handleSave = (form) => {
    if (modal === "invoice") {
      const newInvoice = {
        id: Date.now(),
        number: `INV-${1001 + invoices.length}`,
        customer: form.customer || "New Customer",
        date: form.date || "05 Oct 2026",
        due: "20 Oct 2026",
        amount: Number(form.amount),
        status: "Pending",
      };

      setInvoices((prev) => [newInvoice, ...prev]);
    }

    if (modal === "expense") {
      const newExpense = {
        id: Date.now(),
        category: form.category || "Other",
        description: form.description || "Business expense",
        date: form.date || "05 Oct 2026",
        amount: Number(form.amount),
        status: "Pending",
      };

      setExpenses((prev) => [newExpense, ...prev]);
    }

    setModal(null);
  };

  const navigate = (page) => {
    setActivePage(page);
    setSidebarOpen(false);
  };

  const renderPage = () => {
    if (activePage === "dashboard") {
      return (
        <Dashboard
          invoices={invoices}
          expenses={expenses}
          onNavigate={navigate}
        />
      );
    }

    if (activePage === "invoices") {
      return (
        <DataPage
          title="Invoices"
          subtitle="Create, manage and track customer invoices."
          data={invoices}
          addText="New Invoice"
          onAdd={() => setModal("invoice")}
          searchPlaceholder="Search invoices, customers..."
          columns={[
            { key: "number", label: "INVOICE" },
            { key: "customer", label: "CUSTOMER" },
            { key: "date", label: "DATE" },
            { key: "due", label: "DUE DATE" },
            { key: "amount", label: "AMOUNT", money: true },
            { key: "status", label: "STATUS" },
          ]}
        />
      );
    }

    if (activePage === "expenses") {
      return (
        <DataPage
          title="Expenses"
          subtitle="Track and manage all business expenses."
          data={expenses}
          addText="Add Expense"
          onAdd={() => setModal("expense")}
          searchPlaceholder="Search expenses..."
          columns={[
            { key: "category", label: "CATEGORY" },
            { key: "description", label: "DESCRIPTION" },
            { key: "date", label: "DATE" },
            { key: "amount", label: "AMOUNT", money: true },
            { key: "status", label: "STATUS" },
          ]}
        />
      );
    }

    if (activePage === "customers") {
      return (
        <DataPage
          title="Customers"
          subtitle="Manage customer accounts and receivables."
          data={customers}
          addText="Add Customer"
          onAdd={() => alert("Customer form is ready to connect.")}
          searchPlaceholder="Search customers..."
          columns={[
            { key: "name", label: "CUSTOMER" },
            { key: "email", label: "EMAIL" },
            { key: "phone", label: "PHONE" },
            { key: "balance", label: "BALANCE", money: true },
          ]}
        />
      );
    }

    if (activePage === "vendors") {
      return (
        <DataPage
          title="Vendors"
          subtitle="Manage suppliers and accounts payable."
          data={vendors}
          addText="Add Vendor"
          onAdd={() => alert("Vendor form is ready to connect.")}
          searchPlaceholder="Search vendors..."
          columns={[
            { key: "name", label: "VENDOR" },
            { key: "email", label: "EMAIL" },
            { key: "phone", label: "PHONE" },
            { key: "balance", label: "PAYABLE", money: true },
          ]}
        />
      );
    }

    if (activePage === "receivables") {
      return (
        <DataPage
          title="Payments Received"
          subtitle="Track payments received from customers."
          data={invoices.filter((x) => x.status !== "Paid")}
          addText="Record Payment"
          onAdd={() => alert("Payment form opened.")}
          columns={[
            { key: "number", label: "INVOICE" },
            { key: "customer", label: "CUSTOMER" },
            { key: "date", label: "DATE" },
            { key: "amount", label: "AMOUNT", money: true },
            { key: "status", label: "STATUS" },
          ]}
        />
      );
    }

    if (activePage === "reports") {
      navigate("financial-reports");
      return null;
    }

    return <SimpleAccountingPage id={activePage} />;
  };

  return (
    <div className="app">
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-top">
          <Logo />
          <button
            className="mobile-close"
            onClick={() => setSidebarOpen(false)}
          >
            ×
          </button>
        </div>

        <nav>
          {menuGroups.map((group) => (
            <div className="nav-group" key={group.title}>
              <div className="nav-title">{group.title}</div>

              {group.items.map((item) => (
                <button
                  key={item.id}
                  className={`nav-item ${
                    activePage === item.id ? "active" : ""
                  }`}
                  onClick={() => navigate(item.id)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <button
            className="nav-item"
            onClick={() => navigate("settings")}
          >
            <span className="nav-icon">⚙</span>
            Settings
          </button>

          <button
            className="nav-item logout-nav"
            onClick={() => setLoggedIn(false)}
          >
            <span className="nav-icon">↪</span>
            Logout
          </button>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <button
            className="menu-toggle"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>

          <div className="mobile-page-name">
            {activeItem?.label || "Dashboard"}
          </div>

          <div className="top-search">
            <span>⌕</span>
            <input placeholder="Search transactions, accounts..." />
            <kbd>Ctrl K</kbd>
          </div>

          <div className="topbar-right">
            <button className="icon-btn">◔</button>
            <button className="icon-btn notification">
              ♢
              <i />
            </button>

            <div className="user-menu">
              <div className="avatar">G</div>
              <div>
                <strong>Gowthami</strong>
                <span>Administrator</span>
              </div>
              <span className="down">⌄</span>
            </div>
          </div>
        </header>

        <section className="content">{renderPage()}</section>
      </main>

      {modal && (
        <FormModal
          title={modal === "invoice" ? "Create New Invoice" : "Add Expense"}
          type={modal}
          onClose={() => setModal(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

export default App;