let infoHistory = [];

const itemHistory = document.getElementById("item");
const amountNumber = document.getElementById("amount");
const categoryTag = document.getElementById("category");
const dateNumber = document.getElementById("date");
const tableBody = document.getElementById("transactionHistory");
const expenseForm = document.getElementById("expenseForm");

const totalIncome = document.getElementById("totalIncome");
const totalExpenses = document.getElementById("totalExpenses");
const balanceAmount = document.getElementById("balance");

expenseForm.addEventListener('submit', function(event){
  event.preventDefault();

  const item = itemHistory.value.trim();
  const amount = Number(amountNumber.value);
  const category = categoryTag.value;
  const date = Number(dateNumber.value);

  if(item === ''){
    alert("Pls add a Description!!");
    return;
  }
  if(amount === ''){
    alert("Pls enter a Amount!!!");
    return;
  }
  if(category === ''){
    alert("Pls select a Category!!!");
    return;
  }
  if(date === ''){
    alert("Pls select a Date!!");
    return;
  }

  const formattedDate = new Date(date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  infoHistory.push({item, amount, category, date});

  const newRow = tableBody.insertRow();

  const itemCell = newRow.insertCell();
  const amountCell = newRow.insertCell();
  const categoryCell = newRow.insertCell();
  const dateCell = newRow.insertCell();

  const history = infoHistory[infoHistory.length - 1];
  itemCell.textContent = history.item;
  amountCell.textContent = history.amount;
  categoryCell.textContent = history.category;
  dateCell.textContent = history.date;

  updateSummary();
});

function updateSummary() {
  // Calculate totals from infoHistory
  let income = 0;
  let expenses = 0;

  infoHistory.forEach(transaction => {
    if (transaction.category === 'income') {
      income += transaction.amount;
    } else if (transaction.category === 'expense') {
      expenses += transaction.amount;
    }
  });

  // Calculate balance
  const balance = income - expenses;

  // Update DOM elements
  totalIncome.textContent = income.toFixed(2);
  totalExpenses.textContent = expenses.toFixed(2);
  balanceAmount.textContent = balance.toFixed(2);
}

expenseForm.addEventListener('reset', function(event){
  event.preventDefault();
  tableBody.innerHTML = '';
  infoHistory = [];
  updateSummary();
  expenseForm.reset();
});
