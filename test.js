 $(document).ready(function() { 
    $('h6').each(function(_,item){
        let newEl = document.createElement("pre");
        let codeEl =document.createElement('code')
        newEl.appendChild(codeEl);
        codeEl.innerHTML = item.innerHTML.replace(/<br>/g, '\n');
        item.parentNode.replaceChild(newEl, item);
    });
  $('pre').addClass('language-base');
  $('code').addClass('language-base');  
  let _snips = $('code:contains("class=")');
  _snips.toArray().forEach(el =>{
    const txt =el.innerHTML;
    const classStr  =txt.match(/(?:class|className)=(?:["']\W+\s*(?:\w+)\()?["']([^'"]+)['"]/)
    el.setAttribute("class",classStr[1]);
    el.parentNode.setAttribute("class",classStr[1]);
    el.innerHTML =el.innerHTML.replace(/(?:class|className)=(?:["']\W+\s*(?:\w+)\()?["']([^'"]+)['"]/g, '');
    el.innerHTML =el.innerHTML.replace(/<br>/g, '\n');
  });
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://s3-us-west-2.amazonaws.com/daily-web/prism.js";
  document.body.appendChild(script);
 })
