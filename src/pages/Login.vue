<template>
    <div class="login">
        <div class="container">
            <a href="/#/index"><img src="/imgs/login-logo.png" alt=""></a>
        </div>
        <div class="wrapper">
            <div class="container">
                <div class="login-form">
                    <h3>
                        <span class="checked">帐号登录</span><span class="sep-line">|</span><span>扫码登录</span>
                    </h3>
                    <div class="input">
                        <input type="text" placeholder="请输入帐号" v-model="username">
                    </div>
                    <div class="input">
                        <input type="password" placeholder="请输入密码" v-model="password">
                    </div>
                    <div class="btn-box">
                        <a href="javascript:" class="btn" @click="login">登录</a>
                    </div>
                    <div class="tips">
                        <div class="sms" @click="register">手机短信登录/注册</div>
                        <div class="reg">立即注册<span>|</span>忘记密码？</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footer-logo">
                <img src="/imgs/logo-footer.png" alt="">
                <p>小米商城</p>
            </div>
            <div class="footer-link">
                <a href="http://zhuanghaixin.cn" target="_blank">个人主页</a><span>|</span>
                <a href="https://zhuanghaixin.cn/" target="_blank">个人简历</a><span>|</span>
                <a href="https://github.com/" target="_blank">GitHub</a><span>|</span>
                <a href="https://www.yuque.com/zhuanghaixin/utccb7" target="_blank">语雀</a>
            </div>
            <div class="copyright">Copyright ©2020 <span class="domain">mi.js101.fun</span> All Rights Reserved.</div>
        </div>
    </div>

</template>

<script>

    export default {
        name: "Login",
        data() {
            return {
                username: '',
                password: '',
                userId: '',
                email:'',
                // res: {}

            }
        },
        methods: {
            login() {
                // eslint-disable-next-line no-unused-vars  //解构
                let {username, password} = this
                this.axios.post('/user/login',
                    {
                        username,
                        password
                    }).then((res) => {
                        // this.res=res
                    this.$cookie.set('userId', res.id, {expires: 'Session'});
                    //TODO 保存用户名
                    this.$store.dispatch('saveUserName',res.username)
                    this.$router.push({
                        name:'index',
                        params:{
                            from:'login'
                        }

                    })
                }).catch((err)=>{
                    // eslint-disable-next-line no-console
                    console.log('login_err')
                    // eslint-disable-next-line no-console
                    console.log(err)
                })
            },
            register(){
                // eslint-disable-next-line no-unused-vars  //解构
                this.axios.post('/user/register',
                    {
                        username:'zhuanghaixin',
                        password:'zhuanghaixin',
                        email:'zhuanghaixin@163.com'
                    }).then((res)=>{
                    // eslint-disable-next-line no-console
                    console.log('register_res')
                    // eslint-disable-next-line no-console
                    console.log(res)
                    // alert('注册成功');
                    this.$message.success('注册成功')
                }).catch((err) => {
                    // eslint-disable-next-line no-console
                    console.log('register_err')
                    // eslint-disable-next-line no-console
                    console.log(err)
                })

            }

        }

    };
</script>

<style lang="scss" scoped>
    @import "../assets/scss/base.scss";
    @import "../assets/scss/mixin.scss";

    .login {
        & > .container {
            height: 113px;

            img {
                width: auto;
                height: 100%;
            }
        }

        .wrapper {
            background: url('/imgs/login-bg.jpg') no-repeat center;

            .container {
                height: 576px;

                .login-form {
                    box-sizing: border-box;
                    padding-left: 31px;
                    padding-right: 31px;
                    width: 410px;
                    height: 510px;
                    background-color: #ffffff;
                    position: absolute;
                    bottom: 29px;
                    right: 0;

                    h3 {
                        line-height: 23px;
                        font-size: 24px;
                        text-align: center;
                        margin: 40px auto 49px;

                        .checked {
                            color: #FF6600;
                        }

                        .sep-line {
                            margin: 0 32px;
                        }
                    }

                    .input {
                        display: inline-block;
                        width: 348px;
                        height: 50px;
                        border: 1px solid #E5E5E5;
                        margin-bottom: 20px;

                        input {
                            width: 100%;
                            height: 100%;
                            border: none;
                            padding: 18px;
                        }
                    }

                    .btn {
                        width: 100%;
                        line-height: 50px;
                        margin-top: 10px;
                        font-size: 16px;
                    }

                    .tips {
                        margin-top: 14px;
                        display: flex;
                        justify-content: space-between;
                        font-size: 14px;
                        cursor: pointer;

                        .sms {
                            color: #FF6600;
                        }

                        .reg {
                            color: #999999;

                            span {
                                margin: 0 7px;
                            }
                        }
                    }
                }
            }
        }

        //footer
        .footer {

            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            height: 234px;
            /*    border-top:4px solid $colorA;
                background-color:$colorB;*/
            color: $colorD;
            font-size: $fontI;
            text-align: center;

            .footer-logo {
                margin-top: 46px;
                margin-bottom: 31px;

                img {
                    width: 53px;
                    height: 36px;
                    margin-bottom: 13px;
                }
            }

            .footer-link {
                a {
                    color: inherit;
                    display: inline-block;
                }

                span {
                    margin: 0 10px;
                }

                margin-bottom: 13px;
            }

            .copyright {
                .domain {
                    color: $colorA;
                }
            }
        }
    }


</style>
