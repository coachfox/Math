

const path=require('path');
let output="";
//待读取文件路径
//公共CSS载入
const CSSfilepath=path.join(__dirname,"../public/index.css");
const CSS1filepath=path.join(__dirname,"./htmlcontent/zuishu/zuishumainpage.css");
const CSS2filepath=path.join(__dirname,"./htmlcontent/zuishu/zuishuwebpage.css");
const CSS3filepath=path.join(__dirname,"./htmlcontent/aishang/console.css");
//公共html载入
const headheadfilepath=path.join(__dirname,"./htmlcontent/headhead.html");
const headmiddlefilepath=path.join(__dirname,"./htmlcontent/headmiddle.html");
const headendfilepath=path.join(__dirname,"./htmlcontent/headend.html");
const bodyendfilepath=path.join(__dirname,"./htmlcontent/bodyend.html");
const jqureypath=path.join(__dirname,"../lib/jquery-3.3.1/jquery-3.3.1.min.js");
const jqureypluspath=path.join(__dirname,"../lib/ajaxfileupload.js");
//个性化页面载入
const indexjspath=path.join(__dirname,"./htmlcontent/indexcontent.js");
const bodyheadfilepath=path.join(__dirname,"./htmlcontent/mainpagebodyhead.html");
const maincontentfilepath=path.join(__dirname,"./htmlcontent/all.html");
const testjsfilepath=path.join(__dirname,"../test/test.js");
const testhtmlfilepath=path.join(__dirname,"../test/test.html");
const zuishumainpagehtmlfilepath=path.join(__dirname,"./htmlcontent/zuishu/zuishumainpage.html");
const zuishumainpagejsfilepath=path.join(__dirname,"./htmlcontent/zuishu/zuishumainpage.js");
const zuishuwebpagehtmlfilepath=path.join(__dirname,"./htmlcontent/zuishu/zuishuwebpage.html");
const zuishuwebpagejsfilepath=path.join(__dirname,"./htmlcontent/zuishu/zuishuwebpage.js");
const aishangconsolejsfilepath=path.join(__dirname,"./htmlcontent/aishang/console.js");
const aishangconsolehtmlfilepath=path.join(__dirname,"./htmlcontent/aishang/console.html");
//获取READ方法
const read=require(path.join(__dirname,"../lib/readfileutil.js"));

//html拼装器
function makehtml(what){
//读取文件内容后拼接HTML
output=read.outputfile(headheadfilepath);
output+=read.outputfile(CSSfilepath);
output+=read.outputfile(headmiddlefilepath);
output+=read.outputfile(jqureypath);
output+=read.outputfile(jqureypluspath);

    if(what==='mainpage'){
//载入主页js
output+=read.outputfile(indexjspath);
output+=read.outputfile(headendfilepath);
output+=read.outputfile(bodyheadfilepath);
//载入主页HTML内容
output+=read.outputfile(maincontentfilepath);
output+=read.outputfile(bodyendfilepath);
     return output;
    }
    if(what==='test'){
        output+=read.outputfile(testjsfilepath);
        output+=read.outputfile(headendfilepath);

        output+=read.outputfile(testhtmlfilepath);
        output+=read.outputfile(bodyendfilepath);
        return output;

    }

    if(what==='zuishumainpage')
    {   output='';
    output=read.outputfile(headheadfilepath);
    output+=read.outputfile(CSS1filepath);
    output+=read.outputfile(headmiddlefilepath);
    output+=read.outputfile(jqureypath);
    output+=read.outputfile(jqureypluspath);
        output+=read.outputfile(zuishumainpagejsfilepath);
        output+=read.outputfile(headendfilepath);

        output+=read.outputfile(zuishumainpagehtmlfilepath);
        output+=read.outputfile(bodyendfilepath);
        return output;

    }
    if(what==='zuishuwebpage'){
        output='';
        output=read.outputfile(headheadfilepath);
        output+=read.outputfile(CSS2filepath);
        output+=read.outputfile(headmiddlefilepath);
        output+=read.outputfile(jqureypath);
        output+=read.outputfile(jqureypluspath);
            output+=read.outputfile(zuishuwebpagejsfilepath);
            output+=read.outputfile(headendfilepath);
    
            output+=read.outputfile(zuishuwebpagehtmlfilepath);
            output+=read.outputfile(bodyendfilepath);
            return output;
    }
    if(what==='aishangconsole')
    {
        output='';
        output=read.outputfile(headheadfilepath);
        output+=read.outputfile(CSS3filepath);
        output+=read.outputfile(headmiddlefilepath);
        output+=read.outputfile(jqureypath);
        output+=read.outputfile(jqureypluspath);
            output+=read.outputfile(aishangconsolejsfilepath);
            output+=read.outputfile(headendfilepath);
    
            output+=read.outputfile(aishangconsolehtmlfilepath);
            output+=read.outputfile(bodyendfilepath);
            return output;
    }
}



module.exports={makehtml}