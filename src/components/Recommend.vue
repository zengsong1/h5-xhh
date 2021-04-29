<template>
    <div id="message_tj"> 
			<van-tabs @change="changeType" :swipeable="true" :animated="true">
                <van-tab v-for="(item,index) in filmTypes" :key="index" :name="item.id" :title="item.name">
                    <div class="message_tj_bottom">
                        <div class="message_tj_bottom_01" v-for="(item,index) in list" :key="index" @click="goDetail(item)">
                        <img v-lazy="item.INDEX_PICTURE" style="width: .65rem;">
                        <P>{{item.GOODS_NAME}}</P>
                        <p>¥ {{item.CURRENT_PRICE |numFilter}}</p>
                        </div> 
                        
			    </div>
            </van-tab>
            </van-tabs>
		</div>
</template>
<script>
import { Tab, Tabs  } from 'vant';
export default {
    props:{
        typeid:{
            type:Number,
        },
        goodsdetail :{
            type:String,
        },
    },
    data(){
        return{
            filmTypes:[
                { id: 'recommended', name: '为你推荐'},
                { id: 'top', name: '排行榜'}, 

                ],
            list:'',
            GOODSTYPEID:''
        }
    },
    watch:{
        typeid: function(newVal,oldVal){
            this.getlistDetailTop('recommended',newVal)
            this.GOODSTYPEID=newVal
        },
        
    },
    created () {
        this.filmTypes[0].content = this.goodsdetail 
    },
    methods:{
        getlistDetailTop(type,id){
            let url ='group/Api/listDetailTop.do';
           		let params = new URLSearchParams();
                params.append('DetailTop', type);
                params.append('GOODS_TYPE_ID',id);
                params.append('token', window.userInfo.token);
                params.append('TOP_ID',window.userInfo.TOP_ID);
				this.$axios({
				method: 'post',
                url:url,
                data:params
				}).then((res)=>{
					if(res.data.status==0) {
						this.list=res.data.content.listDetailTop
					}
				})
        },
        changeType(id){
            this.getlistDetailTop(id,this.GOODSTYPEID)
        },
        goDetail(item){
            if(this.$route.query.id==item.GROUP_GOODS_ID){
                 window.pageYOffset = 0;
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            }
            if(window.userInfo.role=='4'){
				this.$router.push({
				path: '/detail',
				query: {
					id: item.GROUP_GOODS_ID,
					isDirect:true
					}
				})
			}else if(item.GOODS_POSITION==0){
				this.$router.push({
                path: '/detail',
                
				query: {
					id: item.GROUP_GOODS_ID
					}
                })           
			}else if(item.GOODS_POSITION==1){
				this.$router.push({
				path: '/detail',
				query: {
					id: item.GROUP_GOODS_ID
					}
                })
			}
            else {
                this.$router.push({
				path: '/detail',
				query: {
					id: item.GROUP_GOODS_ID
					}
                })
            }
            // else if(item.GOODS_POSITION==2){
			// 	this.$router.push({
			// 	path: '/custom_detail',
			// 	query: {
			// 		id: item.GROUP_GOODS_ID
			// 		}
            //     })
			// }
        }
    },
    components:{
		[Tab.name]: Tab,
		[Tabs.name]: Tabs,
    },
     filters: {
        numFilter (value) {
            // 截取当前数据到小数点后两位
            let realVal = value.toFixed(2)
            return realVal
        }
    }
    }
</script>
<style scoped>

</style>