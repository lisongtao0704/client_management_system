<template>
    <div class="page">
        <div>字节</div>
        <div>baba</div>
    </div>
</template>
<style lang="less" scoped>
    .page{
        width: 100%;
        height: 100%;
        >div:nth-of-type(1){
            background-color: #fff;
            width: 20%;
            height: 100%;
            float: left;
        }
        >div:nth-of-type(2){
            float: left;
            width: 80%;
            height: 100%;
        }
    }
</style>
<script>
export default {
    name:"Callpage"
}
</script>