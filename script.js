let expenses = [];

function addExpense() {
  const amount = document.getElementById('amount').value;
  const category = document.getElementById('category').value;

  if(amount === '' || category === '') {
    alert('Please enter both amount and category');
    return;
  }

  expenses.push({amount: parseFloat(amount), category});

  let summary = '';
  const totals = {};

  expenses.forEach(exp => {
    if(!totals[exp.category]) totals[exp.category] = 0;
    totals[exp.category] += exp.amount;
  });

  for(const cat in totals){
    summary += `${cat}: $${totals[cat].toFixed(2)}<br>`;
  }

  document.getElementById('result').innerHTML = summary;

  document.getElementById('amount').value = '';
  document.getElementById('category').value = '';
}
