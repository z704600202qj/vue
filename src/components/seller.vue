<template>
  <div>
    <mt-header title="购物车" style="background: #36B371">
      <!--<mt-button slot="right"@click="eidt3"v-show="!alledit">编辑</mt-button>-->
      <!--<mt-button slot="right"@click="eidt4"v-show="alledit">完成</mt-button>-->
    </mt-header>
    <div v-show="gogo">
      购物车是空的


    </div>
    <form v-show="!gogo" @submit="submit($event)">
      <ul>
        <li class="cart_list" v-for="(shop,index) in picked.shop":id=shop.id><!--商店名字-->
          <!--一共有的店铺-->
            <div class="shop_name">
              <input type="checkbox" id="first" value="first" v-model="picked1" @click="checkedAll" >
              <span class="shop_name_1">{{shop.tit}}</span>
              <label for="first" v-bind:class="{bg:bg}"></label>
              <span class="edit" v-show=shop.edit @click="edit1(index,shop.tit)">编辑</span>
              <span class="edit" v-show=!shop.edit @click="edit1(index)">完成</span>
            </div>
            <!--同一个店铺的商品-->
            <div class="shop_con">
              <div class="shop_con_1" v-for="(aa,index) in shop.items">
                <div class="shop_con_input">
                  <input type="checkbox" id="first_1" value="first_1" v-model="picked1">
                  <label for="first_1" v-bind:class="{bg:bg}"></label>
                </div>
                <div class="shop_con_tit">
                  <a href="" class="shop_con_img"><img :src="aa.img" alt=""></a>
                  <div v-show=shop.edit>
                    <p class="shop_con_tit-1">{{aa.name}}</p>
                    <span class="shop_con_price">{{aa.price}}</span>
                    <span class="shop_con_num">{{aa.num}}</span>
                  </div>
                  <div v-show=!shop.edit>
                    <div class="add-jj">
                      <span class="reduce" @click="reduce(aa)">-</span>
                      <span class="num"><input type="number" class="num" :value="aa.num" v-model="aa.num"></span>
                      <span class="add" @click="add1(aa)">+</span>
                    </div>
                    <p class="sub_tit">
                    <p class="sub_tit_1" style="float: left">50ml</p><span style="float: left">↓</span></p>
                    <div class="del_btn"@click="del(index,aa,shop.id)">删除</div>
                  </div>
                </div>
              </div>
            </div>
        </li>
      </ul>
      <div class=" balance ">
        <div style="background: salmon ">
          <span></span>
          <input type="submit" id="balace_btn" value="结算">
        </div>
      </div>
    </form>
    <foot></foot>
  </div>
</template>
<script>
  import {Toast} from 'mint-ui';
  export default{
    data(){
      return {
        gogo: false,
        num: 1,
        bg: false,
        bgg: 1,
        picked: [],
        picked1: []
      }
    },
    methods: {
      edit1: function (index,item) {
        this.picked.shop[index].edit = !this.picked.shop[index].edit
      },
      reduce: function (item) {
//        var reduce=e.currentTarget.parentNode.children[1].children;
        var minNum=item.num--
            if (minNum <= 1) {
              item.num = 1
              let instance = Toast({
                message: '没有办法再少了',
                position: 'bottom',
                duration: 5000
              });
              setTimeout(() => {
                instance.close();
              }, 1000);
            }

      },
      add1: function (item) {
        console.log(item.num);
        var num=item.num++
        if (num >= 150) {
          let instance = Toast({
            message: '已经是最多了',
            position: 'bottom',
            duration: 5000
          });
          setTimeout(() => {
            instance.close();
          }, 1000);
          item.num=150
        }
      },
      del:function (index,aa,id) {
        console.log("选中商品id"+aa.id);//选中商品id
        console.log("店铺id"+id);//店铺id
        console.log("多少店铺："+this.picked.shop.length);
        let arr0=[]
        for(var k=0;k<=this.picked.shop.length;k++){
//            arr0[k]=(this.picked.shop[k].iid)
          console.log("每个店铺id："+((this.picked.shop[k].id)));
//          console.log(arr0);
          arr0.push((this.picked.shop[k].id))
//          var aa=id.indexOf(arr0)
//          console.log(aa);
          console.log(arr0);

        }

//       var shop=this.picked.shop.splice(item,1)
//        var arr=[]
//        for(var i=0;i<this.picked.shop[0].items.length;i++){
//          arr.push(this.picked.shop[0].items[index].id)
//        }
//        console.log(arr);
//        var nn=this.picked.shop[index].items.length
      },
      checkedAll: function () {
        this.bgg = ++this.bgg
        let num = this.bgg % 2
        if (num == 0) {
          //显示
          this.bg = true
        } else {
          this.bg = false
        }
      }
    },
    created: function () {
      this.$http.post('http://localhost:3000/seller', []).then(function (res) {
        var jsonObj = eval('(' + res.data.title + ')')
        this.picked = jsonObj
        console.log(this.picked);
      })
    }
  }

</script>
<style>
  .mint-header-button {
    margin-bottom: 0 !important;
  }
  .cart_list {
    height: auto;;
    width: 100%;
    background: red;;
    position: relative;
    border-bottom: 1px solid #ccc
  }

  #balace_btn {
    width: 1.8rem;
    height: 0.6rem;;
    position: absolute;
    right: 0.5rem;
    top: 0.2rem;
    line-height: 0.6rem;
    outline: none
  }

  .balance {
    height: 1rem;
    width: 100%;
    margin-bottom: 0.5rem;
    overflow: hidden;
  }

  .balance > div {
    height: 1rem;
    width: 100%;
    background: #ffffff;
    position: fixed;
    bottom: 0.8rem;
    z-index: 999
  }

  .shop_name {
    height: 0.8rem;
    width: 100%;
    background: #ffffff;
    font-size: 0.4rem;
    line-height: 0.8rem;
    position: relative;
  }

  .shop_name_1 {
    margin-left: 1rem
  }

  .shop_name input {
    width: 0;
    height: 0
  }

  .shop_name label {
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    top: 50%;
    margin-top: -0.2rem;
    left: 0.3rem;
    background: url("../../static/img/ic_cart_checkbox.png") no-repeat;
    border-radius: 50%;
    background-size: 100%;
  }

  .shop_con {
    background: #fdfdfd;
    overflow: hidden;
    position: relative
  }

  .shop_con_1 {
    position: relative;
    height: 2.2rem;
    background: #ebebeb;
    margin-bottom: 0.1rem
  }

  .shop_con_1 input {
    width: 0;
    height: 0
  }

  .shop_con_1 label {
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    top: 50%;
    margin-top: -0.2rem;
    left: 0.3rem;
    background: url("../../static/img/ic_cart_checkbox.png") no-repeat;
    border-radius: 50%;
    background-size: 100%;
  }

  .bg {
    background: url("../../static/img/ic_cart_checked.png") no-repeat center !important;
    background-size: 100% !important;
  }

  .shop_con_input {
    height: 2.2rem;
    width: 1rem;;
    float: left
  }

  .shop_con_tit {
    width: calc(100% - 1rem);
    height: 2.2rem;
    float: left
  }

  .shop_con_img {
    width: 1.7rem;
    height: 1.7rem;
    display: inline-block;;
    margin: 0.25rem 0.3rem 0.25rem 0.01rem;
    float: left;
    border: 1px solid #ccc
  }

  .shop_con_img img {
    height: 100%;
    width: 100%
  }

  .shop_con_tit > div {
    font-size: 0.3rem;
    width: 62%;
    height: 1.7rem;;
    float: left;
    margin-top: 0.3rem;
  }

  .shop_con_tit-1 {
    height: 0.9rem;
    overflow: hidden;
    display: -webkit-box;
    line-height: 0.45rem;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .shop_con_price {
    width: auto;
    height: 0.5rem;
    display: inline-block;;
    margin-top: 0.3rem
  }

  .shop_con_num {
    float: right;
    margin-top: 0.3rem
  }

  .edit {
    font-size: 0.2rem;
    float: right;
    padding: 0 0.3rem;
    border-left: 1px solid #cccccc;
    line-height: 0.5rem;
    margin-top: 0.15rem;
    text-align: center
  }

  .add-jj span {;
    width: 0.5rem;
    height: 0.5rem;
    display: block;
    border: 1px solid #ffffff;
    float: left;;
    line-height: 0.5rem;
    text-align: center;
    margin: 0 0.01rem;
    font-size: 0.5rem;
    overflow: hidden;
    position: relative;
    margin-top: 0.15rem
  }

  .num {
    width: 1.3rem !important;
  }

  .num input {
    height: 100% !important;
    width: 100% !important;
    border: none;;
    text-align: center;
    line-height: 0.5rem;
    position: absolute;
    top: 0px;
    left: 0px;
    outline: none;
    background: #ebebeb;
    font-size: 0.4rem
  }

  .del_btn {
    width: 1rem;
    height: 100%;
    background: red;
    float: right;
    line-height: 2.2rem;
    text-align: center;
    color: #fff;
    position: absolute;
    top: 0rem;
    right: 0rem;
  }

  .sub_tit {
    display: inline-block;
    width: 70%;
    font-size: 0.1rem
  }

  .sub_tit_1 {
    width: 2.5rem;;
    height: 0.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
