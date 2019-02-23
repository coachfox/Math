




 const ajaxdir="https://coachfox.cn/"; 
$(document).ready(    
    function(){ 
// 页面初始化内容
//设置页面初始化组件状态
initcom(false);

//数据载入
   $.get(ajaxdir+'zuishuget',{gz:"all","cond":{_id: 1,pzmc:1,shpplu:1 }},function(data,status){
       
       if(data.length===0){
       
           $("#readydel").append(  
    "<option value=\"noitem\">没有选项</option>");
      
       }else{
        $.each(data, function(index, item) {
            $("#readydel").append(  //此处向select中循环绑定数据
    "<option value="+item._id+">" + item.pzmc+"," +item.shpplu+"</option>");
        });
    }
   })


        $("#tijiao").bind('click',()=>{
     ///资料完整性判断
     if($("#shpplu").val()===""||$("#pzmc").val()===""||$("#gys").val()===""||$("#jyz").val()===""||$("#cd").val()===""||$("#scdw").val()===""||$("#zzsj").val()===""||$("#sssj").val()==="")
    {
         alert("请完善必填内容！")
     }
     else{

    
           let Pshpplu=$("#shpplu").val().trim();
            let Ppzmc=$("#pzmc").val().trim();
            let Pzjqk="合格";
            let Psbdm=Pshpplu;
            let Pgys=$("#gys").val().trim();
            let Pjyz=$("#jyz").val().trim();
            let Pcd= $("#cd").val().trim();
            let Pscdw=$("#scdw").val().trim();
            let Pzzsj=$("#zzsj").val().trim();
            let Psssj=$("#sssj").val().trim();
            let Pimg1=$("#img1").val().trim();
            let Pimg2=$("#img2").val().trim();
            let Pimg3=$("#img3").val().trim();
            let Pimg4=$("#img4").val().trim();
          
            let postquery={"shpplu":Pshpplu,
            "pzmc":Ppzmc,
            "zjqk":Pzjqk,
            "sbdm":Psbdm,
            "gys":Pgys,
            "jyz":Pjyz,
            "cd":Pcd,
            "scdw":Pscdw,
            "zzsj":Pzzsj,
            "sssj":Psssj,
            "img1":Pimg1,
            "img2":Pimg2,
            "img3":Pimg3,
            "img4":Pimg4,
            "gz":"insert"
            };
            $.post(ajaxdir+'submitzhuisuzl',postquery,function(data,status){

                  alert(data);
              $("#shpplu").val("");
              $("#pzmc").val("");
                $("#gys").val("");
                $("#jyz").val("");
               $("#cd").val("");
                 $("#scdw").val("");
                 $("#zzsj").val("");
                 $("#sssj").val("");
               $("#img1").val("");
                 $("#img2").val("");
                  $("#img3").val("");
                 $("#img4").val("");

            }) 
        }
        })
       

        $("#delpz").bind('click',()=>{
            if($("#readydel").val()==="noitem"){
                alert("没有任何可以删除的内容！");
            }else{
                let  r= confirm("确定删除?")
              if(r) 
               {
              $.get(ajaxdir+'delshpzl',{"zuishuid":"y","id":$("#readydel").val()},function(data,status){
                alert(data);
                location.reload();
              })}
            }
            
        })
        $('#upplu').keydown(function(event){
            if(event.keyCode===13){
                $.get(ajaxdir+'zuishuget',{query:$('#upplu').val(),gz:"single",cond:""},function(data,status){
                   if(data[0].shpplu===$('#upplu').val()){
                        $("#uppzmc").val(data[0].pzmc);  
                        $("#upgys").val(data[0].gys);
                        $("#upjyz").val(data[0].jyz);
                       $("#upcd").val(data[0].cd);
                         $("#upscdw").val(data[0].scdw);
                         $("#upzzsj").val(data[0].zzsj);
                         $("#upsssj").val(data[0].sssj);
                       $("#upimg1").val(data[0].img1);
                         $("#upimg2").val(data[0].img2);
                          $("#upimg3").val(data[0].img3);
                         $("#upimg4").val(data[0].img4);
                         initcom(true);
                    }else{
                        alert("数据库中无此项数据");
                    }
                   
                })
            }

        })
        ////更新
        $("#upchange").bind('click',()=>{
            let postquery1={"shpplu":$("#upplu").val().trim(),
            "pzmc":$("#uppzmc").val().trim(),
            "zjqk":"合格",
            "sbdm":$("#upplu").val().trim(),
            "gys":$("#upgys").val().trim(),
            "jyz":$("#upjyz").val().trim(),
            "cd":$("#upcd").val().trim(),
            "scdw":$("#upscdw").val().trim(),
            "zzsj":$("#upzzsj").val().trim(),
            "sssj":$("#upsssj").val().trim(),
            "img1":$("#upimg1").val().trim(),
            "img2":$("#upimg2").val().trim(),
            "img3":$("#upimg3").val().trim(),
            "img4":$("#upimg4").val().trim(),
            "gz":"update"
            };
            $.post(ajaxdir+'submitzhuisuzl',postquery1,function(data,status){
                initcom(false);
                alert(data);
            })

        })
    })

    function initcom(canuse){
        if(canuse){
            $("#upplu").attr("disabled","false");
            $("#uppzmc").removeAttr("disabled");
            $("#upgys").removeAttr("disabled");
            $("#upjyz").removeAttr("disabled");
            $("#upcd").removeAttr("disabled");
            $("#upscdw").removeAttr("disabled");
            $("#upzzsj").removeAttr("disabled");
            $("#upsssj").removeAttr("disabled");
            $("#upimg1").removeAttr("disabled");
            $("#upimg2").removeAttr("disabled");
            $("#upimg3").removeAttr("disabled");
            $("#upimg4").removeAttr("disabled");
            $("#upchange").removeAttr("disabled");
        }else{
            $("#upplu").removeAttr("disabled");
        $("#uppzmc").attr("disabled","false");
        $("#upgys").attr("disabled","false");
        $("#upjyz").attr("disabled","false");
        $("#upcd").attr("disabled","false");
        $("#upscdw").attr("disabled","false");
        $("#upzzsj").attr("disabled","false");
        $("#upsssj").attr("disabled","false");
        $("#upimg1").attr("disabled","false");
        $("#upimg2").attr("disabled","false");
        $("#upimg3").attr("disabled","false");
        $("#upimg4").attr("disabled","false");
        $("#upchange").attr("disabled","false");
    }
    }