<template>
<div class="container">
 <div class="header">5/8 外出確認表</div>
 <div class="content">
 <ol id="list1" class="shop-list">
 <li class="item">麵包</li>
 <li class="item">短袖衣服</li>
 <li class="item">飲用水</li>
 <li class="item">帳篷</li>
 </ol>
 <ul  id="list2" class="shop-list">
 <li class="item">暈車藥</li>
 <li class="item">感冒藥</li>
 <li class="item">丹木斯</li>
 <li class="item">咳嗽糖漿</li>
 </ul>
 </div>
 <div class="footer">以上僅共參考</div>
 </div>


</template>


<script setup>


</script>


<style scoped>
.container {
 font-size: 14px;
}
.container .header {
 font-size: 18px;
}
.container .shop-list {
 list-style: none;
 margin-left: -15px;
}
 .container .shop-list li.item {
 color: green;
}
 
.container ol.shop-list  li.item {
 /*  Q1. Explain why does this color not works, and how to fix make it work on 1st list */
 color: blue;
}
.container .shop-list li.item:nth-child(odd) {
  background-color: #e0e0e0;
}
 /* Q2. Write styling make every other line give background color to next one */

</style>