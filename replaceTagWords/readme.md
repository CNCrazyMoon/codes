# 字符串敏感词处理

## 应用场景
假设现有一篇文章，var content = "...大量文字"，
文章中触及到一些敏感词汇,如 ["习近平","周永康","中共","6.4"] 等内容。
如何在文章中发现这些敏感词，并将背景设置为红色或者改变字体颜色并标示出来。

## 分析
1. 敏感词替换
2. 样式处理

### css

```css
em {
    font-style: normal;
    color: red;
}
```

### javascript

这里仅列出核心思路,详细请看[replaceTagWords.js](replaceTagWords.js)

``` javascript
function replaceTagWords(content, words) {
    if (typeof(words) == 'string') {
        content = content.replaceAll(words, '<em>' + words + '</em>');
    }
    if (isArray(words)) {
        for (var i = 0; i < words.length; i++) {
            content = content.replaceAll(words[i], '<em>' + words[i] + '</em>');
        }
    }
    return content;
}
```

上面使用到了一个`replaceAll` 的函数,在原生没有的情况下,需要进行拓展  
代码如下:
```javascript
// 拓展一个replaceAll 语法
String.prototype.replaceAll = function(string, newString) {
    return this.replace(new RegExp(string, "ig"), newString);
};
```

### 如何使用
![使用示例](http://github.com/CNCrazyMoon/codes/raw/master/replaceTagWords/my_code_replaceTagWords.png)

## 结语

需求还是蛮简单的.
具体操作可以视情况而定.