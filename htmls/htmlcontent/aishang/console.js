



const ajaxdir="https://coachfox.cn/"; 
   //CSS选择器
   function CSSselect(item,removeclass,addClass){
    $('#'+item).removeClass(removeclass).addClass(addClass);
}
//
var weekdays={
    "1":"星期一",
    "2":"星期二",
    "3":"星期三",
    "4":"星期四",
    "5":"星期五",
    "6":"星期六",
    "0":"星期天",
} 
$(document).ready( 
 function(){
    
    initcom("init");
    getalltczl("all","");
//绑定组件功能
    $("#unlock").bind("click",function(){
        lockupdestate()
    })
 $("#tc").bind("click",function(){
   
    initcom("tc");
 })
 $("#submitu").bind("click",function(){
   

 })


 $('#tcidu').keydown(function(event){
    if(event.keyCode===13)
    {
        getalltczl("single",$("#tcidu").val().trim());
    }
  }
)
 ////
//提交团操基础资料
 $("#submit").bind("click",function(){
    if(isempty("tcid")||isempty("tcname")||isempty("tccoach")||isempty("tctime"))
    {
       alert("团操资料不完整！")
    }else{
    insertandupdatetczl("insert")
}

 })

$("#tcid").bind("input propertychange",function(rvent){
    limitinput("tcid",true);
})
//更新团操资料
$("#submitu").bind("click",function(){
    if(isempty("tcidu")||isempty("tcnameu")||isempty("tccoachu")||isempty("tctimeu"))
    {
       alert("团操资料不完整！")}
    else{
    insertandupdatetczl("update")
    lockupdestate()
}
})
}

)


//初始化组件状态，更改组件状态
function initcom(canuse){
    if(canuse==="init"){
        CSSselect('tczl',"display","hidden")
        lockupdestate()
    }else if(canuse==="tc")
    { 
   
        CSSselect('tczl',"hidden","display")
    }

    
}

//判断一个组件可以输入的内容
function isempty(comp){
    if($("#"+comp).val()==='')
    {return true;}
    else{
        return false;
    }
}

//限制输入
function limitinput(comp,isnumber)
{   var reg=/^[0-9.]/g;
    
    if(isnumber){
 
    $("#"+comp).val().replace(reg,'');
    }
}

///
function getalltczl(ob,query){
    $.ajax({
        url:ajaxdir+"getalltczl",
        type:"get",
        data:{gz:ob,query:query,cond:""},
        datatype:'json',
        success:function(data){
      if(ob==="all"){
      $("#tczlall tbody").html('');
       var thehead="<tr><th>团操ID</th><th>团操名称</th><th>团操教练</th><th>团操时间</th><th>团操标识图片</th></tr>"
       $('#tczlall tbody').append(thehead);
      $.each(data,function(i,n){
          var dayl=n.day
        var $tr = $("<tr>"+
        "<td>"+n.tcid+"</td>"+
        "<td>"+n.tcname+"</td>"+
        "<td>"+n.tccoach+"</td>"+
        "<td>"+weekdays[dayl]+" "+n.tctime+"</td>"+
        "<td>"+n.tcpic+"</td>"+
        "<td><a id="+n._id+" onclick= \"del(this)\"href=\"#\">删除</a></td>"+
        "</tr>");
      $('#tczlall tbody').append($tr);
        

      })
       } 
     else if(ob==='single'){
      
        $("#tcnameu").val(data[0].tcname)
        $("#tccoachu").val(data[0].tccoach)
        $("#tctimeu").val(data[0].tctime)
       $("#tcdayu").val(data[0].day)
       $("#tcpicu").val(data[0].tcpic)
       unlockupdestate()
     }
    }
       
    })
 

}

/////删除团操
function del(ob){
    let  r= confirm("确定删除这节团操?");
    if(r){
        let postqueryd={"id":$(ob).attr("id")};

        $.ajax({
            url:ajaxdir+"deltczl",
            data:postqueryd,
            datatype:'json',
            success:function(data,tatus){
                getalltczl("all","");
                alert(data); 
              
            }
        })

        
    }

}

function update(ob){
    alert("请直接删除后添加,后期版本会有更改功能!")
}

///
function lockupdestate(){
    $("#tcidu").removeAttr("disabled")
    $("#tcnameu").attr("disabled","false")
    $("#tccoachu").attr("disabled","false")
    $("#tcdayu").attr("disabled","false")
    $("#tctimeu").attr("disabled","false")
    $("#submitu").attr("disabled","false")
    $("#tcpicu").attr("disabled","false")
    $("#tcnameu").val("")
    $("#tccoachu").val("")
    $("#tctimeu").val("")
   $("#tcdayu").val("")
   $("#tcpicu").val("")

}
////
function unlockupdestate(){
    $("#tcidu").attr("disabled","false")
    $("#tcnameu").removeAttr("disabled")
    $("#tccoachu").removeAttr("disabled")
    $("#tcdayu").removeAttr("disabled")
    $("#tctimeu").removeAttr("disabled")
    $("#submitu").removeAttr("disabled")
    $("#tcpicu").removeAttr("disabled")
}
////修改团操资料
function insertandupdatetczl(whatyouwant)
{
  
        var ptcid;
        var ptcname;
        var ptccoach;
        var ptctime;
        var pday;
        var ptcpic;
        var gz
        var postquery;
        if(whatyouwant==="insert"){
           ptcid=$("#tcid").val().trim();
         ptcname=$("#tcname").val().trim();
        ptccoach=$("#tccoach").val().trim();
         ptctime=$("#tctime").val().trim();
        pday=$("#tcday").val().trim();
        ptcpic=$("#tcpic").val().trim()===""?"https://lg-1gk9yvqc-1256995886.cos.ap-shanghai.myqcloud.com/tclogo.jpg":$("#tcpic").val().trim();
        gz="insert";
        }else if(whatyouwant==="update")
        {
         ptcid=$("#tcidu").val().trim();
       ptcname=$("#tcnameu").val().trim();
         ptccoach=$("#tccoachu").val().trim();
         ptctime=$("#tctimeu").val().trim();
        pday=$("#tcdayu").val().trim();
        ptcpic=$("#tcpicu").val().trim()===""?"https://lg-1gk9yvqc-1256995886.cos.ap-shanghai.myqcloud.com/tclogo.jpg":$("#tcpicu").val().trim();
        gz="update";
        }
        postquery={   
            "gz":gz,
            "tcid":ptcid,
        "tcname":ptcname,
        "tccoach":ptccoach,
        "tctime":ptctime,
        "day":pday,
        "tcpic":ptcpic
        };

        $.post(ajaxdir+'inserttczl',postquery,function(data,status){
            if(whatyouwant==="insert"){
            $("#tcid").val("");
           $("#tcname").val("");
           $("#tccoach").val("");
           $("#tctime").val("");
           $("#tcpic").val("");}
           else if(whatyouwant==="update"){
          
            $("#tcnameu").val("");
            $("#tccoachu").val("");
            $("#tctimeu").val("");
            $("#tcpicu").val("");
           }
        alert(status);
        getalltczl("all","");
        })
    
   
}

////