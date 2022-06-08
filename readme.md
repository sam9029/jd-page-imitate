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
### .nvaItem .superAd 在 .middleNav > .w 之中
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
