<template>
    <transition name="slide">
        <div class="modal" v-show="showModal">
            <div class="mask"></div>
            <div class="modal-dialog">
                <div class="modal-header">
                    <span>{{title}}</span>
                    <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div class="modal-footer">
                    <a href="javascript:;" class="btn" v-if="btnType==1" @click="$emit('submit')">{{sureText}}</a>
                    <a href="javascript:;" class="btn btn-default" v-if="btnType==2" @click="$emit('cancel')">{{cancelText}}</a>
                    <div class="btn-group" v-if="btnType==3">
                        <a href="javascript:;" class="btn"  @click="$emit('submit')">{{sureText}}</a>
                        <a href="javascript:;" class="btn btn-default" @click="$emit('cancel')">{{cancelText}}</a>
                    </div>
                </div>
            </div>
        </div>
    </transition>
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
                default: '1'
            },
            sureText: {
                type: String,
                default: '确认'
            },
            cancelText: {
                // type: Object,
                // default() {
                //     return {
                //         text: '取消',
                //         show: true
                //     }
                // }
                type:String,
                default:'取消'
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
