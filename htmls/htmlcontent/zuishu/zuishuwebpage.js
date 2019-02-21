

 $.ajax({
    cache:false
 })
 const ajaxdir="https://coachfox.cn/"; 
       var images = new Array();  
        var cIndex = 0;  
        var speed = 5;  
        var context;  
        var canvas;  
        var currentImage;  
        var width=300;  
        var height=300;  
        var stopX = 100;  
        var stopY = 0;  
        var autoTimeout;  
        var manuTimeout;  
        var interval;  
        var img1;  
        var img2;  
        var img3;  
        var img4;  
        var timeoutInterval = 5;  
        var  im1=new Image();  
        var  im2=new Image();
        var  im3=new Image();
        var  im4=new Image();
        im1.src="";
        im2.src="";
        im3.src="";
        im4.src="";


//初始化图片属性
        function InitImages(a,b,c,d){  
            img1 = new slideImage("img1",-200,0,a);  
            img2 = new slideImage("img2",100,0,b);  
            img3 = new slideImage("img3",400,0,c);  
            img4 = new slideImage("img4",700,0,d);  
            img1.preImage = img4;  
            img1.nextImage = img2;  
            img2.preImage= img1;  
            img2.nextImage= img3;  
            img3.preImage=img2;  
            img3.nextImage=img4;  
            img4.preImage = img3;  
            img4.nextImage = img1;  
            currentImage=img2;  
            hilightSelectedImg();  
        }  

$(document).ready(    
    function(){ 

        var Cwidth=document.documentElement.clientWidth;//获取屏幕的宽度
        var Cheight=document.documentElement.clientHeight;//获取屏幕的高度
  
        $("#head").css("width",Cwidth+"px");
        $("#maincontent").css("width",Cwidth+"px");
        var searchd = window.location.search
         searchd=searchd.slice(8,300);
      
        $.get(ajaxdir+'zuishuget',{"shpplu":searchd},function(data,status){
           
              $('#pzmc').html(data.pzmc);
              $("#zjqk").html(data.zjqk);
              $("#cd").html(data.cd);
              $("#gys").html(data.gys);
              $("#jyz").html(data.jyz);
              $("#scdw").html(data.scdw);
              $("#zzsj").html(data.zzsj);
              $("#sbdm").html(data.sbdm);
              $("#sssj").html(data.sssj);
              
             im1.src=data.img1===""?"http://132.232.109.62/images/images/havenopic.jpg":data.img1;
             im2.src=data.img2===""?"http://132.232.109.62/images/images/havenopic.jpg":data.img2;
             im3.src=data.img3===""?"http://132.232.109.62/images/images/havenopic.jpg":data.img3;
             im4.src=data.img4===""?"http://132.232.109.62/images/images/havenopic.jpg":data.img4;
              
           
        })
        InitImages(im1,im2,im3,im4);  
        canvas = document.getElementById("pztp");  
        context = canvas.getContext("2d");  
        //移动图片  
        context.drawImage(currentImage.imgObj,currentImage.x,currentImage.y,width,height);  
        context.drawImage(currentImage.preImage.imgObj,currentImage.preImage.x,currentImage.preImage.y,width,height);  
        context.drawImage(currentImage.nextImage.imgObj,currentImage.nextImage.x,currentImage.nextImage.y,width,height);  
        context.fillStyle="rgba(100,150,185,0.5)";  
        context.fillRect(0,0,100,height);  
        context.fillRect(400,0,100,height);  
        interval = setTimeout("intervalSlide()", 20);  
        ////
  

    }  
);  
  
function intervalSlide(){  
    currentImage = currentImage.nextImage;  
    hilightSelectedImg();  
    autoTimeout = setTimeout("drawFrame()", timeoutInterval);  
    setTimeout("intervalSlide()", 5000)  
}  
  
///
function slideImage(id,x,y,imgObj){  
    this.speed = speed;  
    this.preImage = null;  
    this.nextImage = null;  
    this.imgObj=imgObj;  
    this.x=x;  
    this.y=y;  
    this.direction="right";  
    this.id = id;
}  

//     
function buttonNext(x,y,bwidth,bheight){  
    this.x = x;  
    this.y = y;  
    this.width = bwidth;  
    this.height = bheight;  
}  

//
function canvasClick(){  
    currentImage = currentImage.nextImage;  
    manuTimeout = setTimeout("drawFrame()",timeoutInterval);  
}  

///
function iconClick(obj){  
    if(obj == "img1"){  
        currentImage = img1;  
    }  
    else if(obj == "img2"){  
        currentImage = img2;  
    }  
    else if(obj == "img3"){  
        currentImage = img3;  
    }  
    else if(obj == "img4"){  
        currentImage = img4;  
    }  
    currentImage.preImage.x = 100;  
    currentImage.preImage.preImage.x = -200;  
    currentImage.x = 400;  
    hilightSelectedImg();  
    manuTimeout = setTimeout("drawFrame()",timeoutInterval);  
}  

function drawFrame(){  
    context.clearRect(0,0,canvas.width,canvas.height);  
    //调用beginPath()确保不会接着上次绘制的图形绘制  
    context.beginPath();  
    context.drawImage(currentImage.imgObj,currentImage.x,currentImage.y,width,height);  
    context.drawImage(currentImage.preImage.imgObj,currentImage.preImage.x,currentImage.preImage.y,width,height);  
    context.drawImage(currentImage.nextImage.imgObj,currentImage.nextImage.x,currentImage.nextImage.y,width,height);  
    context.drawImage(currentImage.preImage.preImage.imgObj,currentImage.preImage.preImage.x,currentImage.preImage.preImage.y,width,height);  
    //遮罩  
    context.fillStyle="rgba(100,150,185,0.5)";  
    context.fillRect(0,0,100,height);  
    context.fillRect(400,0,100,height);  
    //每一帧的位置变动  
    currentImage.x -= speed;  
    currentImage.preImage.x -= speed;  
    currentImage.nextImage.x -= speed;  
    currentImage.preImage.preImage.x -= speed;  
      
    if(currentImage.x == 200){  
        currentImage.nextImage.x = 500;  
    }  
    //到达指定位置停止变动  
    if(currentImage.x != stopX){  
        autoTimeout = setTimeout("drawFrame()",timeoutInterval);  
    }  
    else{  
          
    }  
}  

////
function hilightSelectedImg(){  
    img1.imgObj.width = 125;  
    img1.imgObj.height = 150;  
    img1.imgObj.style.opacity = 0.5;  
    img2.imgObj.width = 125;  
    img2.imgObj.height = 150;  
    img2.imgObj.style.opacity = 0.5;  
    img3.imgObj.width = 125;  
    img3.imgObj.height = 150;  
    img3.imgObj.style.opacity = 0.5;  
    img4.imgObj.width = 125;  
    img4.imgObj.height = 150;  
    img4.imgObj.style.opacity = 0.5  
    currentImage.imgObj.width = 150;  
    currentImage.imgObj.height = 175;  
    currentImage.imgObj.style.opacity = 1;  
}  