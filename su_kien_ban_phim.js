window.onload = function init() {
    let imgObj = null;
    imgObj = document.getElementById("img");
    imgObj.style.position = 'relative';
    imgObj.style.left = '50px';
    imgObj.style.top = '50px';
    document.addEventListener("keydown", function presskeyfunc() {
        switch(event.keyCode){
            case 37:
                Moveleft();
                break;
            case 38:
                Moveup();
                break;
            case 39:
                Moveright();
                break;
            case 40:
                Movedown();
                break;
        }

        }
    );
    function Moveleft(){
        let left= parseFloat(imgObj.style.left);
        imgObj.style.left=eval(left-20)+"px";
        console.log(imgObj.style.left);
    }
    function Moveright(){
        let left= parseFloat(imgObj.style.left);
        imgObj.style.left=eval(left+20)+"px";
        console.log(imgObj.style.left);
    }
    function Moveup(){
        let top= parseFloat(imgObj.style.top);
        imgObj.style.top=eval(top-20)+"px";
        console.log(imgObj.style.top);
    }
    function Movedown(){
        let top= parseFloat(imgObj.style.top);
        imgObj.style.top=eval(top+20)+"px";
    }
}