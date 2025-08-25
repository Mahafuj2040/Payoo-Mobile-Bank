// Add money event
const savePin = 1234;
let Finalbalance = document.getElementById("balance");

// Balance Update function
function UpadateBalance(balance, calculateType) {
    let intBalance = parseInt(Finalbalance.innerText);

    if (calculateType === "plus") {
        Finalbalance.innerText = intBalance + balance;
        alert("Balance update successfully!");
        return;
    }
    if (calculateType === "minus") {
        Finalbalance.innerText = intBalance - balance;
        alert("Balance update successfully!");
        return;
    }
}

// Validation Check Function

function validationCheck(checkObjects) {
    for (const obj in checkObjects) {
        console.log(obj);

        // select type check
        if (obj === "SlectType") {
            const type_select = checkObjects[obj];
            if (
                !type_select.name ||
                type_select.name.trim() === "" ||
                type_select.name === "Select back" || type_select.name === "Select bill"
            ) {
                alert(`Please select a ${type_select.type}!`);
                return false;
            }
        }

        //Account Number Check
        if (obj === "AccountNo") {
            const accountNumber = checkObjects[obj];
            if (accountNumber.length !== 11) {
                alert("Insert a 11 digit account number.");
                return false;
            }
        }

        // Amount Check
        if (obj === "Amount") {
            const amount = checkObjects[obj];
            if (amount < 1 || isNaN(amount)) {
                alert("Please input more than zero.");
                return false;
            }
        }

        // Pin check
        if (obj === "Pin") {
            const pin = checkObjects[obj];
            if (pin !== savePin) {
                alert("Enter the right pin mumber.");
                return false;
            }
        }
    }
    return true;
}

// Add money events
document
    .getElementById("add-money-btn")
    .addEventListener("click", function (e) {
        e.preventDefault();
        const selectBank = document.getElementById("select-bank").value;
        const bankAccountNo = document.getElementById("bank-account-no").value;
        const addAmount = parseInt(document.getElementById("add-amount").value);
        const pin = parseInt(document.getElementById("bank-pin").value);

        //valisation check
        const valid = validationCheck({
            SlectType: {
                type: "bank",
                name: selectBank,
            },
            AccountNo: bankAccountNo,
            Amount: addAmount,
            Pin: pin,
        });

        if (valid) {
            UpadateBalance(addAmount, "plus");
        }
    });

// Cash Out events
document
    .getElementById("cashOut-btn-click")
    .addEventListener("click", function (e) {
        e.preventDefault();

        const agentNum = document.getElementById("agent-num").value;
        const cashOutAmount = parseInt(
            document.getElementById("agent-amount").value
        );
        const agentPin = parseInt(document.getElementById("agent-pin").value);

        const valid = validationCheck({
            AccountNo: agentNum,
            Amount: cashOutAmount,
            Pin: agentPin,
        });

        if(valid){
            UpadateBalance(cashOutAmount, "minus");
        }
    });

// Send money events
document
    .getElementById("send-now-btn")
    .addEventListener("click", function (e) {
        e.preventDefault();

        const agentNum = document.getElementById("user-account-no").value;
        const cashOutAmount = parseInt(
            document.getElementById("amount").value
        );
        const senderPin = parseInt(document.getElementById("send-money-pin").value);

        const valid = validationCheck({
            AccountNo: agentNum,
            Amount: cashOutAmount,
            Pin: senderPin,
        });

        if(valid){
            UpadateBalance(cashOutAmount, "minus");
        }
    });

// Pay Bill Events
document
    .getElementById("pay-now-btn")
    .addEventListener("click", function (e) {
        e.preventDefault();
        const selectToPay = document.getElementById("select-to-pay").value;
        const billerAccountNo = document.getElementById("biller-account-no").value;
        const billAmount = parseInt(document.getElementById("biller-amount").value);
        const pin = parseInt(document.getElementById("biller-pin").value);

        //valisation check
        const valid = validationCheck({
            SlectType: {
                type: "Pay",
                name: selectToPay,
            },
            AccountNo: billerAccountNo,
            Amount: billAmount,
            Pin: pin,
        });

        if (valid) {
            UpadateBalance(billAmount, "minus");
        }
    });

// <--Toggle Design form-->
const addMoney = document.getElementById("add-moeny-section");
const cashOut = document.getElementById("cash-out-section");
const transferMoney = document.getElementById("transfer-money-section");
const getBonus = document.getElementById("get-bonus-section");
const payBill = document.getElementById("pay-bill-section");
const transactions = document.getElementById("transactions-section");

const toogleArray = [
    addMoney,
    cashOut,
    transferMoney,
    getBonus,
    payBill,
    transactions,
];

// buttons
const addMoneyBtn = document.getElementById("addMoney-btn");
const cashOutBtn = document.getElementById("cashOut-btn");
const transferBtn = document.getElementById("transfer-btn");
const getBonusBtn = document.getElementById("get-bonus-btn");
const payBillBtn = document.getElementById("pay-bill-btn");
const transactionsBtn = document.getElementById("transactions-btn");

const buttonArray = [
    addMoneyBtn,
    cashOutBtn,
    transferBtn,
    getBonusBtn,
    payBillBtn,
    transactionsBtn,
];

function hideAllsections() {
    for (const value of toogleArray) {
        value.classList.add("hidden");
    }
    for (const button of buttonArray) {
        button.classList.remove("card-selected-effect");
        button.style.pointerEvents = "auto";
    }
}

function showSection(section, btnEffect) {
    hideAllsections();
    section.classList.remove("hidden");
    btnEffect.classList.add("card-selected-effect");
    btnEffect.style.pointerEvents = "none";
}

// button event
addMoneyBtn.addEventListener("click", function () {
    showSection(addMoney, addMoneyBtn);
});
cashOutBtn.addEventListener("click", function () {
    showSection(cashOut, cashOutBtn);
});
transferBtn.addEventListener("click", function () {
    showSection(transferMoney, transferBtn);
});

getBonusBtn.addEventListener("click", function () {
    showSection(getBonus, getBonusBtn);
});
payBillBtn.addEventListener("click", function () {
    showSection(payBill, payBillBtn);
});
transactionsBtn.addEventListener("click", function () {
    showSection(transactions, transactionsBtn);
});


// LogOut
document.getElementById("log-out").addEventListener("click", function(){
    window.location.href = "./index.html"
})