<template>
    <div class="home">
        <div class="about_header">

            <span class="about_header_content">
                <img alt height="65px" src="../../public/imgs/touxiang.jpg" style="border-radius: 5px;" width="65px"/>
            </span>
            <span style="margin-left:15px;  font-size:20px; "><b>阿克汉</b></span>
            <div class="about_span">
                <span style="margin-right:100px;margin-left:9px;color: rgba(23, 14, 14, 0.51);">微信号</span>
                <i class="iconfont icon-ico" style="margin-right:37px;"></i>
                <i class="iconfont icon-you"></i>
            </div>
        </div>
        <div style=" background-color: #dcdcdc70; height: 5px;"></div>
        <div class="tongxunlu_top">
            <mt-cell-swipe>
                <div class="content_item">
                    <span class="content_item_tongxunlu" style="display:block">
                        <svg aria-hidden="true" class="icon">
                            <use xlink:href="#icon-weixinzhifu"/>
                        </svg>
                    </span>
                    <span class="content_item_content">支付</span>
                    <i class="iconfont icon-you" style="float:right; "></i>
                </div>
            </mt-cell-swipe>
        </div>
        <div style=" background-color: #dcdcdc70; height: 5px;"></div>
        <div class="tongxunlu_top">
            <mt-cell-swipe
                    :key="item.id"
                    v-for="item in form"
            >
                <div class="content_item">
                    <span class="content_item_tongxunlu" style="display:block">
                        <svg aria-hidden="true" class="icon">
                            <use :xlink:href="item.icon"/>
                        </svg>
                    </span>
                    <span class="content_item_content">{{item.content}}</span>
                    <i class="iconfont icon-you" style="float:right; "></i>
                </div>
            </mt-cell-swipe>
        </div>
        <mt-tabbar>
            <mt-tab-item :id="item.id" :key="item.id" @click.native="jumpToNeed(item.link)" v-for="item in list">
                <span style="display:block">
                    <svg aria-hidden="true" class="icon">
                        <use :xlink:href="item.icon"/>
                    </svg>
                </span>
                <span style="display:block;text-align:center">{{item.name}}</span>
            </mt-tab-item>
        </mt-tabbar>
        <div style=" background-color: #dcdcdc70; height: 5px;"></div>
        <div class="tongxunlu_top">
            <mt-cell-swipe>
                <div class="content_item">
                    <span class="content_item_tongxunlu" style="display:block">
                        <svg aria-hidden="true" class="icon">
                            <use xlink:href="#icon-kejian"/>
                        </svg>
                    </span>
                    <span class="content_item_content">设置</span>
                    <i class="iconfont icon-you" style="float:right; "></i>
                </div>
            </mt-cell-swipe>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                form: [
                    {
                        content: "收藏",
                        icon: "#icon-wei-"
                    },
                    {
                        content: "相册",
                        icon: "#icon-xiangce"
                    },
                    {
                        content: "卡包",
                        icon: "#icon-qianbao"
                    },
                    {
                        content: "表情",
                        icon: "#icon-biaoqing"
                    },
                ],
                list: [
                    {id: "tab1", icon: "#icon-weixinxiaoxi", name: "微信", link: 'Home'},
                    {id: "tab2", icon: "#icon-tongxunlu-yigai", name: "通讯录", link: 'Mail'},
                    {id: "tab3", icon: "#icon-faxian3", name: "发现", link: 'Find'},
                    {id: "tab4", icon: "#icon-wo2", name: "我", link: 'About'}
                ]
            };
        },
        methods: {
            jumpToNeed(link) {
                this.$router.push({name: link});
            }
        }
    };
</script>

<style>
    @import "../../public/css/home.css";

    .tongxunlu_top {
        position: sticky;
    }

    .content_item_tongxunlu {
        padding-top: 10px;
        height: 7px;
        width: 50px;
    }

    .about_header {
        height: 95px;
        line-height: 50px;
        position: sticky;
        top: 0;
    }

    .about_header_content {
        display: inline-block;
        margin-top: 17px;
        margin-left: 17px;
    }

    .about_span {
        height: 10px;
        margin-top: -38px;
        margin-left: 87px;

    }
</style>