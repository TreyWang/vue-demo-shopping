<template>
  <div>
    <my-dialog :is-show="isShowCheckDialog" @on-close="checkStatus">
      请检查你的支付状态！
      <div class="button" @click="checkStatus">
        支付成功
      </div>
      <div class="button" @click="checkStatus">
        支付失败
      </div>
    </my-dialog>
    <my-dialog :is-show="isShowSuccessDialog" @on-close="toOrderList">
      购买成功！
    </my-dialog>
    <my-dialog :is-show="isShowFailDialog" @on-close="toOrderList">
      购买失败！
    </my-dialog>
  </div>
</template>

<script>
  import MyDialog from './base/dialog.vue'
  export default{
    props: {
      isShowCheckDialog: {
        type: Boolean,
        default: false
      },
      orderId: {
        type: [String, Number]
      }
    },
    data(){
      return{
        isShowSuccessDialog: false,
        isShowFailDialog: false
      }
    },
    components: {
      MyDialog
    },
    methods: {
      checkStatus () {
        this.axios.post('checkOrder'
        ).then( res => {
          this.isShowSuccessDialog = true
          this.$emit('on-close-check-dialog')
        }).catch(err => {
          this.isShowFailDialog = true
          this.$emit('on-close-check-dialog')
        })
      },
      toOrderList () {
        this.$router.push({path: '/orderList'})
      }
    }
  }
</script>

<style>

</style>
