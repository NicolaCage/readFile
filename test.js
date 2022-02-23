const fs = require('fs');
const showdown  = require('showdown')
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

const getValue=(str, key)=>{
    const [,value] = str.split(`${key}:`)
    if(key === 'tags'){
        return value
    }
    let reg = new RegExp('"',"g");
    const target = value.replace(reg, "");
    return target 
 }

const download=()=>{
    const files = fs.readdirSync('./posts');
    const csvItems = []
    const tags = new Set([])
    files.forEach(filename =>{
        if(filename !=='.DS_Store'){
            let readMe = fs.readFileSync(`./posts/${filename}/index.md`, 'utf8');
            const [,head,mdConent] = readMe.split('---');
            //获取md文件头部字段信息
            const heads = head.split(/\r?\n/);
            //获取md文件的正文
            const converter = new showdown.Converter()
            const html = converter.makeHtml(mdConent);
            //定义每行的列数
            let csvItem = Array(8).fill("");
            csvItem[1] = filename;
            csvItem[3] = html;
            csvItem[5] = getAHref(html)[0];
            heads.map(item =>{
                switch (true) {
                    case item.includes("title:"):
                        csvItem[0] =  getValue(item, 'title')
                        break;
                    case item.includes("date:"):
                        csvItem[2] =  getValue(item, 'date')
                        break;        
                    case item.includes("description:"):
                        csvItem[4] =  getValue(item, 'description')
                        break;               
                    case item.includes("author:"):
                        csvItem[6] =  getValue(item, 'author')
                        break;        
                    case item.includes("tags:"):
                        let _tags = JSON.parse(getValue(item, 'tags'));
                        _tags.map(_tag => tags.add(_tag))
                        csvItem[7] =  _tags.join(';')
                        break;        
                    default:
                        break;
                }
                return []
            })
            csvItems.push(csvItem)
        }
    })
    console.log("tags",tags) //总tag 发给运营同学
    csvWriter.writeRecords(csvItems).then(() => console.log('Done~'));
}
download();