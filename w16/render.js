import { FORM, TBL } from "./global.js";
import {saveToLS} from "./storage.js";

const renderTblHeading = function() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [
    "First",
    "Last",
    "Footprint Total",
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
}

const renderTblBtn = function(obj, index, data) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  btnEdit.textContent = "Edit";
  const btnDel = document.createElement("button");
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);

  btnDel.addEventListener("click", (e) => {
    onUpdate(data, index);
  });

  const onUpdate = function (data, index) {
    data.splice(index, 1);
    saveToLS(data);
    renderTbl(data);
  };

  btnEdit.addEventListener("click", (e) => {
    FORM.firstName.value = obj.first;
    FORM.lastName.value = obj.last;
    FORM.housem.value = obj.houseMembers;
    FORM.houses.value = obj.houseSize;
    FORM.foods.value = obj.foodChoice;
    FORM.foodSource.value = obj.foodSource;
    FORM.water.value = obj.waterConsumPoints.toString();
    FORM.purchase.value = obj.purchase;

    // event listener for checkbox
    const checkbox = document.querySelector("[name = appliances]");
    checkbox.checked = false;
    checkbox.disabled = false;
    
    checkbox.addEventListener("change", (e) => {
      if (checkbox.checked === true) {
        FORM.water.value = (obj.waterConsumPoints * 2).toString();
      } else {
        FORM.water.value = obj.waterConsumPoints.toString();
      }
    });
    onUpdate(data, index);
  });
  return td;
}

const renderTblBody = function(data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    const tr = document.createElement("tr");
    const keys = ["first", "last", "total"];
      keys.forEach(key => {
        const td = document.createElement("td");
        td.textContent = obj[key];
        tr.appendChild(td);
      })
    const td = renderTblBtn(obj, index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
}

const calculateAvgPoints = function (data) {
  const totalPoints = data.reduce((sum, obj) => {
    return sum + obj.houseHoldPoints + obj.houseSizePoints + obj.foodChoicePoints + obj.foodSourcePoints + obj.waterConsumPoints + obj.purchasePoints;
  }, 0);
  const averagePoints = totalPoints / data.length;
  return averagePoints
}

const renderTbl = function(cfpData) {
  TBL.innerHTML = "";
  if(cfpData.length !== 0) {
    const table = renderTblHeading();
    const tbody = renderTblBody(cfpData);
    const avgPoints = calculateAvgPoints(cfpData);
    const addRow = document.createElement("tr");
    addRow.textContent = `Average Footprint: ${avgPoints}`;
    tbody.appendChild(addRow);
    table.appendChild(tbody);
    TBL.appendChild(table);
  };
}


export {renderTbl};
