(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-helper-detail"],{"0c35":function(t,e,a){"use strict";a.r(e);var i=a("7f05"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"2f83":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?t._e():a("v-uni-view",{staticClass:"helper-detail"},[t.helperDetail.title?a("v-uni-view",{staticClass:"detail"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(t.helperDetail.title))]),a("rf-parser",{attrs:{"lazy-load":!0,html:t.helperDetail.content||""}})],1):t._e(),t.helperDetail.title||t.loading?t._e():a("rf-empty",{attrs:{info:"暂无帮助内容"}}),a("rfLoading",{attrs:{isFullScreen:!0,active:t.loading}})],1)},r=[]},4583:function(t,e,a){"use strict";var i=a("7567"),n=a.n(i);n.a},6091:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-35d9e08d]{background-color:#f8f8f8}.helper-detail .detail[data-v-35d9e08d]{text-align:center;padding:%?20?% %?20?%}.helper-detail .detail .title[data-v-35d9e08d]{font-size:%?32?%;color:#303133;padding:%?20?% 0}body.?%PAGE?%[data-v-35d9e08d]{background-color:#f8f8f8}",""]),t.exports=e},7567:function(t,e,a){var i=a("6091");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("31794a97",i,!0,{sourceMap:!1,shadowMode:!1})},"7f05":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=i(a("1da1")),r=a("2b74"),l={data:function(){return{loading:!0,helperDetail:{},helperId:""}},onLoad:function(t){this.helperId=t.id,this.initData()},methods:{initData:function(){this.getHelperDetail()},getHelperDetail:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get(r.helperView,{id:this.helperId}).then((function(t){e.loading=!1,e.helperDetail=t.data,uni.setNavigationBarTitle({title:t.data.title})})).catch((function(){e.loading=!1}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}};e.default=l},e6c6:function(t,e,a){"use strict";a.r(e);var i=a("2f83"),n=a("0c35");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("4583");var l,d=a("f0c5"),o=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"35d9e08d",null,!1,i["a"],l);e["default"]=o.exports}}]);