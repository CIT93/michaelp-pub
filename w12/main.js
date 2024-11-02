const FORM = document.getElementById("form");

FORM.addEventListener("submit", function(event) {
    event.preventDefault();
    startTransaction();
});

function startTransaction () {
    const userName = document.getElementById("name").value;
    const account = document.getElementById("account").value;
    const cash = document.getElementById("cash").value;

    const createOutputDiv = document.createElement("div");
    createOutputDiv.innerHTML = `Processing withdrawal request from ${userName}, for the amount of $${cash} from the ${account} account`;
    document.body.appendChild(createOutputDiv);

    setTimeout(() => {
        endTransaction(createOutputDiv);
    }, 3000);
}

function endTransaction() {
    const completeDiv = document.createElement("div");
    completeDiv.innerHTML = "Transaction completed";
    document.body.appendChild(completeDiv);
    FORM.reset();
}

    