<template>
    <div class="modal" v-show="showModal">
        <div class="mask">
            <div class="modal-dialog">
                <div class="modal-header">
                    <span>{{title}}</span>
                    <a href="javascript:;" class="icon-close"></a>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div class="modal-footer">
                    <div class="btn-group">
                        <a href="javascript:;" class="btn">{{sureText}}</a>
                        <a href="javascript:;" class="btn btn-default" v-show="cancelText.show">{{cancelText.text}}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Modal",
        props: {
            // 弹框类型：小small、中middle、大large、表单form
            modalType: {
                type: String,
                default: 'form'
            },
            //标题
            title: {
                type: String
            },
            btnType: {
                type: String,
                default: '提示框'
            },
            sureText: {
                type: String,
                default: '确认'
            },
            cancelText: {
                type: Object,
                default() {
                    return {
                        text: '取消',
                        show: true
                    }

                }
            },
            showModal: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            // eslint-disable-next-line no-console
            console.log(this.cancelText)
        }
    }
</script>

<style scoped>


</style>
