<template>
  <div class="mylist">
    <p>我的工单</p>
    <div class="list_nav" ref="work_list">
      <div>
        <p>0</p>
        <p>今日我处理的工单</p>
      </div>
      <div>
        <p>0</p>
        <p>我创建的工单</p>
      </div>
      <div>
        <p>0</p>
        <p>我未解决的工单</p>
      </div>
      <div>
        <p>0</p>
        <p>我客服组未分配的工单</p>
      </div>
      <div>
        <p>0</p>
        <p>我关注的工单</p>
      </div>
    </div>
    <div class="list_main">
      <div>
        <div>
          <ul>
            <li class="short">编号</li>
            <li class="title">标题</li>
            <li class="short">优先级</li>
            <li class="short">状态</li>
            <li class="short">分类</li>
            <li class="time">处理时效</li>
            <li class="service">创建人</li>
            <li class="service">受理客服组</li>
            <li class="service">受理客服</li>
            <li class="time">创建时间</li>
            <li class="time">更新时间</li>
          </ul>
          <div class="list_main_info">
            <ul>
              <li class="short">编号</li>
              <li class="title">标题</li>
              <li class="short">优先级</li>
              <li class="short">状态</li>
              <li class="short">分类</li>
              <li class="time">处理时效</li>
              <li class="service">创建人</li>
              <li class="service">受理客服组</li>
              <li class="service">受理客服</li>
              <li class="time">创建时间</li>
              <li class="time">更新时间</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.mylist {
  padding: 15px 20px 0;
  .list_nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    div:nth-of-type(3) {
      background-color: var(--default);
      p {
        color: #fff;
      }
    }
    div {
      width: 180px;
      background-color: #fff;
      p {
        height: 60px;
        line-height: 60px;
        text-align: center;
        color: var(--active);
        cursor: pointer;
      }
      p:nth-of-type(1) {
        font-size: 35px;
      }
      p:nth-of-type(2) {
        font-size: 16px;
      }
    }
  }
  @media screen and (min-height: 648px) {
    .list_main {
      min-height: 385px !important;
      .list_main_info {
        height: 325px !important;
      }
    }
  }
  .list_main {
    background-color: #fff;
    min-height: 337px;
    padding: 20px 20px 0;
    margin-top: 20px;
    overflow: auto;
    > div {
      overflow: auto;
      > div {
        width: 1510px;
        .list_main_info {
          height: 295px;
           ul {
          background-color: #fff;
          height: 50px;
          &:hover{
                background-color: var(--list_hover);
            }
          li {
            list-style: none;
            float: left;
            font-size: 12px;
            font-weight: 400;
            color: var(--active);
            text-align: left;
            line-height: 50px;
            border-bottom: 1px solid #EBEBEB;
          }
          li:nth-of-type(1){
           padding-left:15px;
          }
          li:nth-last-of-type(1){
           padding-right:15px;
          }
          .short {
            width: 128px;
          }
          .title {
            width: 188px;
          }
          .time {
            width: 135px;
          }
          .service {
            width: 125px;
          }
        }
        }
        >ul {
          background-color: var(--list_bg_active);
          height: 50px;
          padding: 0 15px;
          li {
            list-style: none;
            float: left;
            font-size: 14px;
            font-weight: 700;
            color: var(--active);
            text-align: left;
            line-height: 50px;
          }
          .short {
            width: 128px;
          }
          .title {
            width: 188px;
          }
          .time {
            width: 135px;
          }
          .service {
            width: 125px;
          }
        }
      }
    }
  }
  > p {
    font-size: 16px;
    color: var(--active);
    font-weight: 700;
    margin-bottom: 15px;
  }
}
</style>
<script>
export default {
  name: "MyList",
  mounted() {
    let work_list = this.$refs.work_list;
    work_list.addEventListener("click", (event) => {
      if (event.target.className != "list_nav") {
        for (let i = 0; i < work_list.children.length; i++) {
          work_list.children[i].style.background = "#fff";
          work_list.children[i].childNodes[0].style.color = "var(--active)";
          work_list.children[i].childNodes[1].style.color = "var(--active)";
        }
      }
      switch (event.target.localName) {
        case "p":
          event.target.parentElement.childNodes[0].style.color = "#fff";
          event.target.parentElement.childNodes[1].style.color = "#fff";
          event.target.parentElement.style.background = "var(--default)";
          break;
        case "div":
          // event.target.childNodes[0].style.color="#fff"
          // event.target.childNodes[1].style.color="#fff"
          // event.target.style.background="var(--default)"
          break;
      }
    });
  },
};
</script>