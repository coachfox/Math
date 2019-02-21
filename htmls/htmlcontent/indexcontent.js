
$(document).ready(
    ()=>{
        //页面全局变量、常量
        let newormodify='new'; //判断商品是否为新
        let currentshpid='';
        let currentshpname="";
       const ajaxdir="https://127.0.0.1:8124/"; //主机域名设置
        //CSS选择器
        function CSSselect(item,removeclass,addClass){
            $('#'+item).removeClass(removeclass).addClass(addClass);
        }
        //初始化页面设置
      //设置商品上传组件初始化
          /// 工具函数
            //清空页面控件内容
    function cleancontent(){
        $('#shpprice').val("");
        $('#danbaizhi').val("");
        $('#tanshui').val("");
        $('#xianweisu').val("");
        $('#shpjj').val("");
        $('#zhifang').val("");
        $('#mainpicurl').val("");
        $('#detailpicurl1').val("");
        $('#detailpicurl2').val("");
        $('#detailpicurl3').val("");
        $('#detailpicurl4').val("");
        $('#detailpicurl5').val("");

    }
     //页面内容赋值
     /////
      function inishpcomp(){
          $("#danbaizhi").attr("disabled","false");
          $("#shpprice").attr("disabled","false");
          $("#tanshui").attr("disabled","false");
          $("#zhifang").attr("disabled","false");
          $("#xianweisu").attr("disabled","false");
          $("#tijiao").attr("disabled","false")
          $("#shpjj").attr("disabled","false");
          $("#shplb").attr("disabled","false");
          $("#mainpicurl").attr("disabled","false");
          
          $("#detailpicurl1").attr("disabled","false");
          $("#detailpicurl2").attr("disabled","false");
          $("#detailpicurl3").attr("disabled","false");
          $("#detailpicurl4").attr("disabled","false");
          $("#detailpicurl5").attr("disabled","false");
          $("#shpname").removeAttr("disabled");

          CSSselect('yypic','display','hidden');
      }
      function useshpcom(){
        $("#danbaizhi").removeAttr("disabled");
        $("#shpprice").removeAttr("disabled");
        $("#tanshui").removeAttr("disabled");
        $("#zhifang").removeAttr("disabled");
        $("#xianweisu").removeAttr("disabled");
        $("#tijiao").removeAttr("disabled");
        $("#shpjj").removeAttr("disabled");
        $("#shplb").removeAttr("disabled");
        $("#mainpicurl").removeAttr("disabled");
        $("#detailpicurl1").removeAttr("disabled");
        $("#detailpicurl2").removeAttr("disabled");
        $("#detailpicurl3").removeAttr("disabled");
        $("#detailpicurl4").removeAttr("disabled");
        $("#detailpicurl5").removeAttr("disabled");
        $("#shpname").attr("disabled","false");
      
      }


      $('#unlockshpname').bind('click',()=>{
        inishpcomp();
    });
      ////
       inishpcomp();
       CSSselect('ismainpic','','itemsize');
        CSSselect('secmenu','','hidden');
        CSSselect('shpzlnew','display','hidden');
        CSSselect('seeallshpzl','display','hidden');
        CSSselect('yypic','display','hidden');
        CSSselect('upload','canuse','cannotuse');
        CSSselect('newshpbutton','display','hidden')
        $('#spzlwh').bind('click',()=>{    
            //隐藏上传图片面板
            
            CSSselect('secmenu','','display');
            CSSselect('shpzlnew','','display');
            CSSselect('seeallshpzl','display','hidden');
            CSSselect('djcx','selected','unselected');
            CSSselect('hyzx','selected','unselected');     
        });
        $('#djcx').bind('click',()=>{
            CSSselect('yypic','display','hidden');
            CSSselect('secmenu','display','hidden'); 
            CSSselect('shpzlnew','display','hidden'); 
            CSSselect('seeallshpzl','display','hidden');
            CSSselect('spzlwh','selected','unselected'); 
            CSSselect('djcx','unselected','selected'); 
            CSSselect('hyzx','selected','unselected'); 
           
        });
        $('#hyzx').bind('click',()=>{
            CSSselect('yypic','display','hidden');
            CSSselect('secmenu','display','hidden'); 
            CSSselect('shpzlnew','display','hidden'); 
            CSSselect('seeallshpzl','display','hidden');
            CSSselect('spzlwh','selected','unselected'); 
            CSSselect('djcx','selected','unselected'); 
            CSSselect('hyzx','unselected','selected'); 
         
        }); 
//次级页面点击动作
     //第一个次级菜单
        $('#newshp').bind('click',()=>{
             if(currentshpid===''){
                CSSselect('yypic','display','hidden');
                CSSselect('newshpbutton','hidden','display');
             }else{
               // CSSselect('yypic','hidden','display');
                CSSselect('newshpbutton','display','hidden');
             }
            CSSselect('shpzlnew','hidden','display');  
            CSSselect('seeallshpzl','display','hidden');
        });
        $('#seeshpzl').bind('click',()=>{
            CSSselect('yypic','display','hidden');
            CSSselect('shpzlnew','display','hidden');
            CSSselect('seeallshpzl','hidden','display');
            CSSselect('newshpbutton','display','hidden');
            seeshpzl();

        }); 
        
    

     //第一个次级菜单对应功能页面
     //查找商品是否存在
$('#shpname').keydown(function(event){
       if(event.keyCode===13)
       {
   $.get(ajaxdir+'getshpname',{gz:"single",query:$('#shpname').val()},function(data,status){
       cleancontent();
     if(data.shpname===$('#shpname').val()){
       // CSSselect('yypic','hidden','display');
        CSSselect('newshpbutton','display','hidden');
        useshpcom();
       $('#checkshp').html("商品已在数据库中存在");
       $('#shpprice').val(data.shpprice);
       $('#danbaizhi').val(data.danbaizhi);
       $('#tanshui').val(data.tanshui);
       $('#xianweisu').val(data.xianweisu);
       $('#shpjj').val(data.shpjj);
       $('#zhifang').val(data.zhifang);
       $('#shplb').val(data.shplb);
       $('#mainpicurl').val(data.mainpicurl);
       $('#detailpicurl1').val(data.alldetailpic[0]);
       $('#detailpicurl2').val(data.alldetailpic[1]);
       $('#detailpicurl3').val(data.alldetailpic[2]);
       $('#detailpicurl4').val(data.alldetailpic[3]);
       $('#detailpicurl5').val(data.alldetailpic[4]);
       currentshpid=data._id;
       currentshpname=data.shpname;
        newormodify='modify';
        $("#showshpzt").html(newormodify);
             }else{
                CSSselect('yypic','display','hidden');
                $('#checkshp').html("数据库中无此商品"); 
                newormodify='new';
                CSSselect('newshpbutton','hidden','display');
                useshpcom();
                $("#showshpzt").html(newormodify);
                currentshpid="";
                currentshpname="";
             }

       $('#shpprice').focus();
       })}
   });

         ////商品资料提交
    $("#tijiao").bind('click',()=>{
       let Pshpname=$('#shpname').val().trim();
       let  Pprice=$('#shpprice').val().trim();
       let  Pdanbaizhi=$('#danbaizhi').val().trim();
       let  Ptanshui=$('#tanshui').val().trim();
       let  Pxianweisu=$('#xianweisu').val().trim(); 
       let  Pshpjj=$('#shpjj').val().trim();
       let pzhifang=$('#zhifang').val().trim();
       let pshplb=$('#shplb').val().trim();
       let pmainpicurl=$('#mainpicurl').val().trim();
      let   pdetailpicurl1=$('#detailpicurl1').val().trim();
      let   pdetailpicurl2=$('#detailpicurl2').val().trim();
      let   pdetailpicurl3=$('#detailpicurl3').val().trim();
      let   pdetailpicurl4=$('#detailpicurl4').val().trim();
      let   pdetailpicurl5=$('#detailpicurl5').val().trim();
        
       let postquery={"shpname":Pshpname,
        "shpprice":Pprice,
        "danbaizhi":Pdanbaizhi,
        "tanshui":Ptanshui,
        "xianweisu":Pxianweisu,
        "shpjj":Pshpjj,
        "zhifang":pzhifang,
        "shplb":pshplb,
        "mainpicurl":pmainpicurl,
        "alldetailpic1":pdetailpicurl1,
        "alldetailpic2":pdetailpicurl2,
        "alldetailpic3":pdetailpicurl3,
        "alldetailpic4":pdetailpicurl4,
        "alldetailpic5":pdetailpicurl5
        };
       
       let updatequery={"id":currentshpid,
       "shpname":Pshpname,
       "shpprice":Pprice,
       "danbaizhi":Pdanbaizhi,
       "tanshui":Ptanshui,
       "xianweisu":Pxianweisu,
       "shpjj":Pshpjj,
       "zhifang":pzhifang,
       "shplb":pshplb,
       "mainpicurl":pmainpicurl,
       "alldetailpic1":pdetailpicurl1,
        "alldetailpic2":pdetailpicurl2,
        "alldetailpic3":pdetailpicurl3,
        "alldetailpic4":pdetailpicurl4,
        "alldetailpic5":pdetailpicurl5
    
    };
        // postquery=JSON.stringify(postquery);
        // updatequery=JSON.stringify(updatequery);
       if($('#shpname').val()===''||$('#shpprice').val()===''){
           alert("商品名价格信息不完整！")
       }else{
      let  r= confirm("确定提交商品资料?")
       if(r){
        //插入分支
           if(newormodify==='new'){
           
           
   $.post(ajaxdir+'submitspzl',postquery,function(data,status){
       alert(status); 
       $('#shpname').val("");
       cleancontent();
       })
       inishpcomp();
    }

       //更新分支
       if(newormodify==='modify'){
      
        $.post(ajaxdir+'submitspzl',updatequery,function(data,status){
            alert(status); 
            $('#shpname').val("");
            cleancontent();
            })
            inishpcomp();
           
       }
       CSSselect('yypic','display','hidden');

    }}
    }
   
    )
    ///图片预览
    $('#file').change(function(event){
        var files = event.target.files
        if (files && files.length > 0) {
            // 获取目前上传的文件
            file = files[0];// 文件大小校验的动作
            if (!/image\/\w+/.test(file.type)) {
                alert("只能选择图片");
                CSSselect('upload','canuse','cannotuse');
                return false;
            }

            if(file.size > 1024 * 1024 * 2) {
                alert('图片大小不能超过 2MB!');
                CSSselect('upload','canuse','cannotuse');
                return false;
            }

            // 获取 window 的 URL 工具
            var URL = window.URL || window.webkitURL;
            // 通过 file 生成目标 url
            var imgURL = URL.createObjectURL(file);
            
            //用attr将img的src属性改成获得的url
            $("#image").attr("src",imgURL);
          
          CSSselect('upload','cannotuse','canuse');
            // 使用下面这句可以在内存中释放对此 url 的伺服，跑了之后那个 URL 就无效了
            // URL.revokeObjectURL(imgURL);
        }else{CSSselect('upload','canuse','cannotuse');}

    })


    /////图片上传
   $('#uploadfile').click(function(){
     
   $('#uploadpanel').slideToggle();
   })
   ////////////////////////////////////////////上传选中的文件
   $("#upload").bind('click',function(obj,type){
    let  r= confirm("与要上传的图片匹配的商品为："+currentshpname+"，若正确请点击确定");
    if(r){
        let d={"shppicid":currentshpid}
        $.ajax({
            url:ajaxdir+"uploadfileid",
            type:"GET",
            data: d,
             contentType:" application/json; charset=utf-8" ,
            success:function (data) {
               alert("上传图片id成功！")
         
            },error:function (err) {
               alert("上传id失败，请联系管理员！");
            }
        })
     //发送随图片的商品ID
     /*$.post(ajaxdir+'uploadfileid',d,function(data,status){
        alert(status); 
        })*/
//上传图片
    var formData = new FormData($('#uploadForm')[0]);
   
           $.ajax({
               url:ajaxdir+"uploadFile",
               type:"post",
               data: formData,
                cache: false,
                processData: false,
                //contentType只能设置成FALSE才能上传
              contentType:false ,
               success:function (data) {
                  alert("上传图片成功！")
            
               },error:function (err) {
                  alert("上传失败，请联系管理员！");
               }
           })
        }
       
   });
    ///
   $('#shpprice').keydown(function(event){
       if(event.keyCode===13)
       {
           $('#shpjj').focus(); 
       }
   })
   $('#danbaizhi').keydown(function(event){
       if(event.keyCode===13)
       {
           $('#tanshui').focus(); 
       }
   })

   $('#tanshui').keydown(function(event){
       if(event.keyCode===13)
       {
           $('#xianweisu').focus(); 
       }
   })
///////第二个次级菜单（商品一览）
function seeshpzl(){
     $.ajax({
         url:ajaxdir+'getshpzl',
         data:{gz:'all'},
         datatype:'json',
        success:function(data){
            $("#allshp tbody").html('');
            var thehead="<tr><th>商品名称</th><th>价格</th><th>营养含量</th><th>简介</th></tr>"
            $('#allshp tbody').append(thehead);
           $.each(data,function(i,n){
             var $tr = $("<tr>"+
             "<td>"+n.shpname+"</td>"+
             "<td>"+n.shpprice+"</td>"+
             "<td>蛋白质："+n.danbaizhi+"，脂肪："+n.zhifang+"，碳水化合物："+n.tanshui+"</td>"+
             "<td>"+n.shpjj+"</td>"+
             "<td>"+n.shplb+"</td>"+
             "<td><a id="+n._id+" onclick= \"update(this)\" href=\"#\">修改</a></td>"+
             "<td><a id="+n._id+" onclick= \"del(this)\" href=\"#\">删除</a></td>"+
             "</tr>");
           $('#allshp tbody').append($tr);
           })
        }
     }) 
}
////
function update(ob){
alert("?")
}
function del(ob){
    let  r= confirm("确定删除此商品?");
    if(r){
        let postqueryd={"id":$(ob).attr("id")};

        $.ajax({
            url:ajaxdir+"delshpzl",
            data:postqueryd,
            datatype:'json',
            success:function(data,tatus){
                alert(data); 
                seeshpzl();
            }
        })

        
    }
}

/////



  }
)



