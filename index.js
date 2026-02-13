let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;
    let note = document.getElementById("note").value;

    if (amount === "" || category === "" || note === "") {
        alert("Please fill all fields");
        return;
    }

    expenses.push({ amount, category, note });
    localStorage.setItem("expenses", JSON.stringify(expenses));

    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";
    document.getElementById("note").value = "";

    displayExpenses();
}

function displayExpenses() {
    let expenseList = document.getElementById("expenseList");
    expenseList.innerHTML = "";
    let total = 0;

    expenses.forEach((expense, index) => {
        total += Number(expense.amount);

        expenseList.innerHTML += `
            <tr>
                <td>₹${expense.amount}</td>
                <td>${expense.category}</td>
                <td>${expense.note}</td>
                <td>
                    <button class="delete-btn" onclick="deleteExpense(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });

    document.getElementById("total").innerText = total;
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    displayExpenses();
}

displayExpenses();
