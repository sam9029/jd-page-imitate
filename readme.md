## 目标
- 先用静态写
- 后换成vue 
- 上传 gitee

## 前言
- 引入了swiper 插件,cdn的方式
    - 一个页面中引用多个Swiper，可以给每个容器加上ID或Class区分，要保留默认的类名.swiper

## 总结
### line-height 的继承问题
### input 的 outline
    - 同行的 input 和 button 高度不对齐问题-- vertical-align: middle;
### img 的 底部留白
    - 使用 vertical-align 或  display:block 

### 一行文字不换行 多出来 隐藏 为 ...
- 记得设置width ,超出width的就会隐藏 为 ...
~~~css
el{
    
/* 强制一行显示 */
white-space:nowrap;
/* 溢出隐藏 */
overflow:hidden;
/* 超出部分 显示 省略号 */
text-overflow:ellipsis;

}
~~~


## 问题
### .nvaItem .superAd 在 .middleNav > .w 之中 (容器定位相关)
但是
~~~css
/* .w 为 relative  */
/* nvaItem superAd 使用absolute; 的 bottom 会出错 */
/* nvaItem superAd 使用absolute; 的 top 却可以 */

/* 这样写会出错 */
.nvaItem{
    position: absolute;
    bottom: 0px;
    left: 200px;
}
.superAd{
    position: absolute;
    bottom: 10px;
    right: 12px;
}


/* 这样写会ok */
.nvaItem{
    position: absolute;
    top: 100px;
    left: 200px;
}
.superAd{
    position: absolute;
    top: 10px;
    right: 12px;
}
~~~


### 路径引用相关---gitee page 无法正确读取文件路径
- 所有路径前 一定要 写 前缀（之前没写-gitee图片就无法显示）
- 如 './'  '../'



### ⭐ a 标签问题 css 样式 问题（同理其他元素）
#### 以元素名重复声明css，之前的:hover会失效
~~~css
/* 基础样式 */
a:hover{color:blue}

el > a { ... } /* 这样写 a:hover 会失效 */

/* 假设 a 的class 为 .a1 */
.al{ ... } /* 这样写 a:hover 就不会失效 */
~~~

### ⭐(未知正误) css 选择器问题 
- 这样写 只能作用于 .reg 
```css
.loginImgInfo > .log , .reg{
    color: #111;
}
```
- 这样写 能作用于.log 和 .reg 
```css
.log , .reg {
    color: #111;
}

```


### ⭐多个 a 标签在盒子内排布， display 设置 inline-block 后 每个a 之间会有大概10px 的空隙 
- 设置 float 就可以解决


### ⭐/* 父子 元素 的 margin （上下） 塌陷 */
~~~html
<div class="fa">
  <div class="son"></div>
</div>
~~~

~~~css
.fa{
  width: 300px;
  height: 300px;
  background:#999;
  overflow:hidden;
}
.son{
  margin:100px;
  width: 100px;
  height: 100px;
  background:#111;
}
~~~