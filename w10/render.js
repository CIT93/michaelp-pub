import { FORM, TBL } from "./global.js";
import {saveToLS} from "./storage.js";

const renderTblHeading = () => {
  // TBL.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [
    "Name",
    "# of People in Household",
    "House Size",
    "Carbon  Footprint",
    "Actions",
  ];
  headingTextArr.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);

  return table;
}

const renderTblBtn = (obj, index, data) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  btnEdit.textContent = "Edit";
  const btnDel = document.createElement("button");
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);

  btnDel.addEventListener("click", e => {
    onUpdate(data, index);
  });
  
const onUpdate = (data, index) => {
  data.splice(index, 1);
  saveToLS(data);
  renderTbl(data);
}



  btnEdit.addEventListener("click", e => {
    FORM[1].value = obj.firstName;
    FORM[2].value = obj.lastName;
    FORM[3].value = obj.houseM;
    FORM[4].value = obj.houseS;
    onUpdate(data, index);
  })
  return td;
}


const renderTblBody = (data) => {
  const tbody = document.createElement("tbody");
  data.forEach((obj, index) => {
    console.log(index);
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(obj)) {
      if (key !== "lastName" && key !== "houseMPTS" && key !== "houseSPTS") {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
    }
    const td = renderTblBtn(obj, index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
}

const renderTbl = (cfpData) => {
  TBL.innerHTML = "";
  if(cfpData.length !== 0) {
    const table = renderTblHeading();
    const tbody = renderTblBody(cfpData);
    table.appendChild(tbody);
    TBL.appendChild(table);
  };
}

export {renderTbl};
