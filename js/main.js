


var result = `/*
*面试官你好，我是XXX
*我将以动画的形式来介绍我自己
*只用文字介绍太单调了
*我就用代码来介绍吧
*首先准备一些样式
*/

{
    transition : all 1s;
}
html{
    background:rgb(222,222,222);
    font-size:16px;
}
#code{
    border:1px solid #AAA;
    padding:16px;
}

/* 我需要一点代码高亮 */
.token.selector{
    color: #690;
}
.token.property{
    color: #905;
}

.token.function{
    color: #DD4A68;
}
/* 加一个呼吸效果 */
#code{
animation: breath 0.5s infinite alternate-reverse;
}

/* 不玩了，我来介绍一下我自己吧 
 * 现在正是开始
 * 我需要一张白纸 */

#code-wrapper{
    width: 50%; left: 0; position: fixed; 
    height: 100%;}
#paper > .content{
    display: block;
    background:white;
}
`
var result2 = `
/*
*接下来把Markdown变成HTML marked.js     
*接下来给HTML加样式
*这就是我的会动的简历
*谢谢观看！
*/
`

var md = `
#自我介绍

我叫肖伊
武汉东湖学院计算机科学与技术专业2019届毕业生
希望应聘前端开发岗位

#技能介绍
熟悉HTML5+CSS3，Javascript等

#项目介绍
1.canvas画板
2.动态简历
3.轮播demo

#联系方式
Phone：15972218784
Wechat:1597718784
QQ:734732741
E-mail:xiaoyishikongde@163.com
`
// WriteCode(result)异步代码（不等结果直接进行下一步） 需要回调
WriteCode('', result, () => {
    createPaper(() => {
        WriteCode(result, result2,() => {
            writeMarkdown(md)
        })
    })
})
function WriteCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if (n >= code.length) {
            window.clearInterval(id)
            fn && fn.call()
        }
    }, 20)
}


function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn && fn.call()
}

function writeMarkdown(markdown, fn) {
    let domPaper = document.querySelector('#paper> .content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = markdown.substring(0, n)
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn && fn.call()
        }
    }, 20)

}

