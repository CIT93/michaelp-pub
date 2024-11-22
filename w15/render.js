import { FORM, TBL } from "./global.js";
import {saveToLS} from "./storage.js";

const renderTblHeading = function() {
  // TBL.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [
    "Name",
    "Household",
    "House Size",
    "Food Choice",
    "Footprint",
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

  btnDel.addEventListener("click", function (e) {
    onUpdate(data, index);
  });
  
const onUpdate = function(data, index) {
  data.splice(index, 1);
  saveToLS(data);
  renderTbl(data);
}



  btnEdit.addEventListener("click", function (e) {
    FORM[1].value = obj.first;
    FORM[2].value = obj.last;
    FORM[3].value = obj.houseMembers;
    FORM[4].value = obj.houseSize;
    FORM[5].value = obj.foodChoice;
    onUpdate(data, index);
  })
  return td;
}


const renderTblBody = function(data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    console.log(index);
    const tr = document.createElement("tr");
    const keys = ["first", "houseMembers", "houseSize", "foodChoice", "total"];
    //for (const [key, value] of Object.entries(obj)) {
      //if (key !== "last" && key !== "houseHoldPoints" && key !== "houseSizePoints" && key !== "foodChoicePoints") {
      keys.forEach(key => {
        const td = document.createElement("td");
        td.textContent = obj[key];
        tr.appendChild(td);
      })

      //}
    //}
    const td = renderTblBtn(obj, index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
}

const calculateAvgPoints = function (data) {
  const totalPoints = data.reduce((sum, obj) => {
    return sum + obj.houseHoldPoints + obj.houseSizePoints + obj.foodChoicePoints;
  }, 0);
  const averagePoints = totalPoints / data.length;
  console.log(averagePoints);
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
