webpackJsonp([5],{"3e0L":function(t,e,n){"use strict";function i(t){n("RowZ")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("YUye"),r=n("P9l9"),s=(o.a,{data:function(){return{rankingList:[]}},beforeCreate:function(){},created:function(){this._getRank()},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{_getRank:function(){var t=this;this.$vux.loading.show({text:"Loading"}),Object(r.e)().then(function(e){t.rankingList=e.list.map(function(t){return{title:t.name,desc:t.description,src:t.coverImgUrl,id:t.id}}),t.$vux.loading.hide()})},handleListClick:function(t){this.$router.push({path:"/recommend/"+t.id})}},computed:{},components:{Panel:o.a}}),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rank"},[n("panel",{attrs:{header:"排行榜",list:t.rankingList},on:{"on-click-item":t.handleListClick}})],1)},c=[],u={render:a,staticRenderFns:c},d=u,f=n("C7Lr"),l=i,p=f(s,d,!1,l,"data-v-0f31fb1f",null);e.default=p.exports},RowZ:function(t,e,n){var i=n("YJ94");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("FIqI")("694d363c",i,!0,{})},YJ94:function(t,e,n){e=t.exports=n("UTlt")(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"rank.vue",sourceRoot:""}])}});
//# sourceMappingURL=5.7ce2575bec7ba9ed438b.js.map