function lucky(){
    let input = document.getElementById("input");
    let btn = document.getElementById("btn");
    let ketqua = document.getElementById("ketqua").textContent;
    let array = [1,2,3,4,5,6,7,8,9,10];
    let kiemtra = 0;
    
    btn.addEventListener('click', function(){
        let input_value = document.getElementById("input").value
        let arrayrandom = array[Math.floor(Math.random()*array.length)]
        
        if(input_value<1 || input_value>10 || isNaN(input_value)){
            alert("Bạn chỉ được nhập từ 1 đến 10")
            document.getElementById("input").value = ""
            document.getElementById("ketqua").textContent="KẾT QUẢ"
        }

        else{

        if(input_value != arrayrandom){
            document.getElementById("ketqua").textContent = `Wrong, the result is: `+arrayrandom
            kiemtra = kiemtra + 1
            if(kiemtra == 3){
              alert("GAME OVER")
               
            }
        }
        else {document.getElementById("ketqua").textContent = "Congratulation !!!!"
        kiemtra = 0
    }
        document.getElementById("input").value = ""
        
    }
    })
    
}

lucky()
