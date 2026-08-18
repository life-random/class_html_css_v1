 function changeMessage(){
        var img = document.getElementById("sample-img");
        if(img){
          img.src = "b.png";
          console.log("자바스크립트 로그를 찍을 수 있습니다");
        } else {
          console.error("이미지 요소를 찾을 수 없습니다.");
        }
      }