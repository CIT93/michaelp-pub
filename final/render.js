import { FORM, TBL } from "./global.js";
import { saveToLS } from "./storage.js";

const renderTblHeading = function () {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [
    "For the Date:",
    "Christmas will be on:",
    "Days:",
    "Months:",
    "Message",
    "Actions",
  ];
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
};

const renderTblBtn = function (index, data, item) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  btnEdit.textContent = "Edit";
  const btnDel = document.createElement("button");
  btnDel.textContent = "Del";

  td.appendChild(btnEdit);
  td.appendChild(btnDel);

  btnDel.addEventListener("click", function () {
    onDelete(data, index);
  });
  const onDelete = function (data, index) {
    data.splice(index, 1); 
    saveToLS(data); 
    renderTbl(data); 
  };

  btnEdit.addEventListener("click", function () {
    onEdit(item, data, index);
  });

  return td;
};

const onEdit = function (item, data, index) {
  data.splice(index, 1);
  saveToLS(data);
  renderTbl(data);

  FORM[0].value = item.selectedDate.getFullYear();  
  FORM[1].value = item.selectedDate.getMonth() + 1;
  FORM[2].value = item.selectedDate.getDate();     

  FORM[0].focus();
};

const formatDate = function (date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const renderTblBody = function (data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (item, index) {
    const tr = document.createElement("tr");

    const tdSelectedDate = document.createElement("td");
    tdSelectedDate.textContent = formatDate(item.selectedDate);

    const tdXmasDate = document.createElement("td");
    tdXmasDate.textContent = formatDate(item.nextXmasDate);

    const tdDaysLeft = document.createElement("td");
    tdDaysLeft.textContent = item.daysRemaining;

    const tdMonthsLeft = document.createElement("td");
    tdMonthsLeft.textContent = item.monthsRemaining;

    const tdMessage = document.createElement("td");
    tdMessage.textContent = item.message;

    tr.append(tdSelectedDate, tdXmasDate, tdDaysLeft, tdMonthsLeft, tdMessage);
    const tdActions = renderTblBtn(index, data, item);
    tr.appendChild(tdActions);
    tbody.appendChild(tr);
  });
  return tbody;
};

const renderTbl = function (countdownData) {
  if (countdownData.length !== 0) {
    TBL.innerHTML = ""; 
    const table = renderTblHeading(); 
    const tbody = renderTblBody(countdownData);
    table.appendChild(tbody); 
    TBL.appendChild(table); 
  } else {
    TBL.innerHTML = "";
  }
};

export { renderTbl };
