
let expenses = [
    {
        id: 1,
        name: "Lunch",
        amount: 120,
        category: "Food"
    },
    {
        id: 2,
        name: "Transport",
        amount: 50,
        category: "Travel"
    },
    {
        id: 3,
        name: "Notebook",
        amount: 80,
        category: "Education"
    }
];

function displayExpenses() {
    console.log("\n===== ALL EXPENSES =====");

    if (expenses.length === 0) {
        console.log("No expenses recorded.");
        return;
    }

    for (let expense of expenses) {
        console.log(
            expense.id + ". " +
            expense.name + " - " +
            expense.amount + " ETB - " +
            expense.category
        );
    }
}

function addExpense(id, name, amount, category) {
    if (name === "" || category === "" || amount <= 0) {
        console.log("Invalid expense information.");
        return;
    }

    let newExpense = {
        id: id,
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(newExpense);
    console.log(name + " added successfully.");
}

function searchExpense(name) {
    let foundExpense = expenses.find(function(expense) {
        return expense.name.toLowerCase() === name.toLowerCase();
    });

    if (foundExpense) {
        console.log("Expense found:", foundExpense);
    } else {
        console.log("Expense not found.");
    }
}

function calculateTotal() {
    let total = 0;

    for (let expense of expenses) {
        total += expense.amount;
    }

    console.log("Total expenses:", total, "ETB");
}

function filterExpenses(category) {
    let filteredExpenses = expenses.filter(function(expense) {
        return expense.category.toLowerCase() === category.toLowerCase();
    });

    console.log("\n===== FILTERED EXPENSES =====");

    if (filteredExpenses.length === 0) {
        console.log("No expenses found in this category.");
        return;
    }

    for (let expense of filteredExpenses) {
        console.log(expense.name + " - " + expense.amount + " ETB");
    }
}

function deleteExpense(id) {
    let initialLength = expenses.length;

    expenses = expenses.filter(function(expense) {
        return expense.id !== id;
    });

    if (expenses.length < initialLength) {
        console.log("Expense deleted successfully.");
    } else {
        console.log("Expense not found.");
    }
}



displayExpenses();

addExpense(4, "Internet", 200, "Utilities");

searchExpense("Lunch");

calculateTotal();

filterExpenses("Food");

deleteExpense(2);

displayExpenses();

calculateTotal();
