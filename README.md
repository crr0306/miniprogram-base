# miniprogram-base
微信小程序基本问题
1、自定义switch问题
  （1）内外两个圆的高度要相同
  （2）文字根据高度自适应
  （3）组件大小可调节
  (4)如何实现叠加效果：
使用两个view;
第一个view:是外面的椭圆；
属性：
overflow 属性规定当内容溢出元素框时发生的事情。
border-radius
第二个view：是里面小的圆
 border-radius
（5）如何使用小圆左右移动:transform: translateX(-100%)
2、箭头隐藏和展开
(1)箭头变化
方案1（一张图片旋转）:通过class 不同，进行旋转transform: rotate(90deg);
方案2（多张图片）:根据是否选中来使用不同的图片
（2）内容隐藏问题：不同class 对应不同的display:none 和display;block
3、小程序  模态下拉框
触发属性：
显示属性：hiddens
动画：position，z-index,animation
从哪里弹出来：
left: 0; right:0; bottom: 0;
和
-webkit-transform: translateY(-100%);
  transform: translateY(-100%);
4、居中：
justify-content: space-around;
align-items: center;
text-align:center

