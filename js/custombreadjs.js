function addText() {
  var val1 = document.getElementById("textVal1").value;
  var val2 = document.getElementById("textVal2").value;
  var result = document.getElementById("answerlbl");
  try{
    if((val1=="")&&(val2=="")){
      throw "EmptyAll";
    } else if (val1=="") {
      throw "Empty1"
    } else if (val2=="") {
      throw "Empty2"
    }
  }
  catch(err){
    if (err=="EmptyAll"){
      alert("Number 1 or Number 2 field cannot be empty");
    } else if (err=="Empty1") {
      alert("Number 1 field cannot be empty")
    } else if (err=="Empty2") {
      alert("Number 2 field cannot be empty")
    }
    return;
  }
  result.innerHTML = "Answer: " + (Number(val1) + Number(val2))
};

function subtractText() {
  var val1 = document.getElementById("textVal1").value;
  var val2 = document.getElementById("textVal2").value;
  var result = document.getElementById("answerlbl");
  try{
    if((val1=="")&&(val2=="")){
      throw "EmptyAll";
    } else if (val1=="") {
      throw "Empty1"
    } else if (val2=="") {
      throw "Empty2"
    }
  }
  catch(err){
    if (err=="EmptyAll"){
      alert("Number 1 or Number 2 field cannot be empty");
    } else if (err=="Empty1") {
      alert("Number 1 field cannot be empty")
    } else if (err=="Empty2") {
      alert("Number 2 field cannot be empty")
    }
    return;
  }
  result.innerHTML = "Answer: " + (Number(val1) - Number(val2))
};






var msgplaceholder = document.getElementById('msgbtn');
msgplaceholder.addEventListener('focus', function() {
  msgplaceholder.setAttribute('placeholder', '')
})
msgplaceholder.addEventListener('blur', function() {
  msgplaceholder.setAttribute('placeholder', 'Message...')
})

var nameph = document.getElementById('namebtn');
nameph.addEventListener('focus', function() {
  nameph.setAttribute('placeholder', '')
})
nameph.addEventListener('blur', function() {
  nameph.setAttribute('placeholder', 'Name')
})

var emailph = document.getElementById('emailbtn');
emailph.addEventListener('focus', function() {
  emailph.setAttribute('placeholder', '')
})
emailph.addEventListener('blur', function() {
  emailph.setAttribute('placeholder', 'Email')
})
