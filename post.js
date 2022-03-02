const fs = require('fs');
const showdown  = require('showdown');
const matter = require('gray-matter');
const createCsvWriter = require('csv-writer').createArrayCsvWriter;

const csvWriter = createCsvWriter({
    header: ['Title','Slug','Published on','Post Body','Description','Thumbnail image','Author','tags'],
    path: './post.csv'
});

var getAHref = function(htmlstr){
    var reg = /<img [^>]*src=['"]([^'"]+)[^>]*>/gi
    var arr = [];
    while(tem=reg.exec(htmlstr)){
        arr.push(tem[1]);
    }
    return arr;
}

const rtfToMarkdown =(txt)=> {
    // txt = txt.replace(/<p>/g, '');
    // txt = txt.replace(/<\/p>/g, '\n\n');
    txt = txt.replace(/\n/g, '<br/>');
    
    txt = txt.replace(/&amp;nbsp;/g, ' ');
    
    // console.log(txt);
    return txt;
  }

const download=()=>{
    const files = fs.readdirSync('./posts');
    const csvItems = []
    const tags = new Set([])
    files.forEach(filename =>{
        if(filename !=='.DS_Store'){
            let readMe = fs.readFileSync(`./posts/${filename}/index.md`, 'utf8');
            //获取md文件头部字段信息
            const _data = matter(readMe);
            const { data, content} = _data
            // console.log("_data", rtfToMarkdown(content))

            //获取md文件的正文
            const converter = new showdown.Converter({
                noHeaderId: true,
                headerLevelStart: 2,
                literalMidWordUnderscores: true
            })
            let html = converter.makeHtml(content);
            // html = html.replace(/<pre><code>/g, '<h6>');
            html = html.replace(/&amp;nbsp;/g, ' ');
            html = html.replace(/<pre(([\s\S])*?)<\/pre>/g, item=>{
                item= item.replace(/\s+(?:class|className)=(?:["']\W+\s*(?:\w+)\()?["']([^'"]+)['"]+>/g, calss=>{
                    const _calss = calss.substring(1,calss.length-1)
                    return `>${_calss}`
                })
                item = item.replace(/<pre><code>/g, '<pre><code><h6>');
                item = item.replace(/<\/code><\/pre>/g, '</h6></code></pre>');
                return item 
            });
            data.tags.map(_tag => tags.add(_tag))
            //定义每行的列数
            let csvItem = [
                data.title,
                filename,
                data.date,
                html,
                data.description,
                getAHref(html)[0],
                data.author,
                data.tags.join(';')
            ]
            
            csvItems.push(csvItem)
        }
    })
    console.log("tags",tags) //总tag 发给运营同学
    csvWriter.writeRecords(csvItems).then(() => console.log('Done~'));
}
download();     