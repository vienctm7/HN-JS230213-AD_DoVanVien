let infoInput=JSON.parse(localStorage.getItem("infoInput"));
function sendButton(){
    let valueInput = document.getElementById("sendInput").value;
    if(infoInput== null){
        infoInput=[];
        infoInput.push(valueInput);
        localStorage.setItem("infoInput", JSON.stringify(infoInput));
    }else{
        infoInput.push(valueInput);
        localStorage.setItem("infoInput", JSON.stringify(infoInput));
    }
    
    reder();
    }
    
    function reder(){
        let renderfel = ``;
        for(let i=0;i<infoInput.length;i++){
            renderfel+=`
            <div class="table">
            <p>${infoInput[i]}</p>
            <button onclick="dele(${i})" class="delete">delete</button>
            <button onclick="edit(${i})" class="edit">edit</button>        
            </div>
            `;
        }
        document.getElementById("table").innerHTML=renderfel;
    }
    function dele(index){
        alert("bạn có muốn delete");
        infoInput.splice(index,1);
        reder();
    }
    function edit(indexx){
        let edittext=prompt("nhập thông tin sửa")
        infoInput.splice(indexx,1,edittext);
        reder();
    }
