const TBL = document.getElementById("tab-data");

function renderTblHeading() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [
    "Name",
    "Household",
    "HouseSize",
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

function renderTbl(data) {
  const table = renderTblHeading();
  const tbody = document.createElement("tbody");
  const tr = document.createElement("tr");
  data.forEach(function (data) {
    const tr = document.createElement("tr");
    const tdHouseHold = document.createElement("td");
    tdHouseHold.textContent = data.houseMPTS;
    const tdHouseSize = document.createElement("td");
    tdHouseSize.textContent = data.houseSPTS;
    const tdFootprint = document.createElement("td");
    tdFootprint.textContent = data.cfpTotal;
    tbody.append(tdHouseHold, tdHouseSize, tdFootprint);
  });
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  btnEdit.textContent = "Edit";
  const btnDel = document.createElement("button");
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  tr.appendChild(td);
  tbody.appendChild(tr);
  table.appendChild(tbody);
  console.log(table);
  TBL.appendChild(table);
}


export { renderTbl, renderTblHeading };
