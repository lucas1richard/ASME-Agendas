(function() {

  var allData = (function() {
    data = {
      records : []
    };
    return {
      data: data,
      update: update
    }

    function update(key, newdata) {
      if(!data[key]) data[key] = [];
      if(typeof newdata == "string" || typeof newdata == "object") data[key] = newdata;
      else console.log("Error: " + typeof newdata + " not supported");
      console.log(key + ": " + allData.data[key]);
    }
  })();

  var DOM = {
    currentRecords: document.getElementById("currentRecords")
  };

  var inputs = (function() {
    var addrecord     = document.getElementById("addrecord");
    var addrecordBtn  = document.getElementById("addrecordBtn");
    var committee     = document.getElementById("committee");
    var date          = document.getElementById("date");

    addrecordBtn.addEventListener("click", appendRecord);

    function appendRecord() {
      var li = document.createElement("li");
      li.innerText = addrecord.value;

      DOM.currentRecords.appendChild(li);

      var records = allData.data.records;
      records.push(addrecord.value);
      allData.update("records", records);
    }
  })();



})();