webpackJsonp([3],{"+xR3":function(o,e){},Cdx3:function(o,e,t){var n=t("sB3e"),r=t("lktj");t("uqUo")("keys",function(){return function(o){return r(n(o))}})},fZjL:function(o,e,t){o.exports={default:t("jFbC"),__esModule:!0}},jFbC:function(o,e,t){t("Cdx3"),o.exports=t("FeBl").Object.keys},uqUo:function(o,e,t){var n=t("kM2E"),r=t("FeBl"),a=t("S82l");o.exports=function(o,e){var t=(r.Object||{})[o]||Object[o],i={};i[o]=e(t),n(n.S+n.F*a(function(){t(1)}),"Object",i)}},wHgX:function(o,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t("Xxa5"),r=t.n(n),a=t("fZjL"),i=t.n(a),u=t("exGp"),c=t.n(u),s=t("UeVD"),b=t("gyMJ"),f={data:function(){return{book:{}}},watch:{$route:function(){this.finOneBook()}},created:function(){this.finOneBook()},methods:{finOneBook:function(){var o=this;return c()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.b)(o.bid);case 2:o.book=e.sent,i()(o.book).length>0||o.$router.push("/list");case 4:case"end":return e.stop()}},e,o)}))()},change:function(){var o=this;return c()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.i)(o.bid,o.book);case 2:o.$router.push("/list");case 3:case"end":return e.stop()}},e,o)}))()}},computed:{bid:function(){return this.$route.params.bid}},components:{MHeader:s.a}},l={render:function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",{staticClass:"detail"},[t("MHeader",{attrs:{back:!0}},[o._v("详情")]),o._v(" "),t("div",{staticClass:"content"},[t("ul",[t("li",[t("label",{attrs:{for:"bookName"}},[o._v("书名")]),o._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:o.book.bookName,expression:"book.bookName"}],attrs:{type:"text",id:"bookName"},domProps:{value:o.book.bookName},on:{input:function(e){e.target.composing||o.$set(o.book,"bookName",e.target.value)}}})]),o._v(" "),t("li",[t("label",{attrs:{for:"bookInfo"}},[o._v("书的信息")]),o._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:o.book.bookInfo,expression:"book.bookInfo"}],attrs:{type:"text",id:"bookInfo"},domProps:{value:o.book.bookInfo},on:{input:function(e){e.target.composing||o.$set(o.book,"bookInfo",e.target.value)}}})]),o._v(" "),t("li",[t("label",{attrs:{for:"bookPrice"}},[o._v("书的价格")]),o._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.number",value:o.book.bookPrice,expression:"book.bookPrice",modifiers:{number:!0}}],attrs:{type:"text",id:"bookPrice"},domProps:{value:o.book.bookPrice},on:{input:function(e){e.target.composing||o.$set(o.book,"bookPrice",o._n(e.target.value))},blur:function(e){return o.$forceUpdate()}}})]),o._v(" "),t("li",[t("button",{on:{click:o.change}},[o._v("修改")])])])])],1)},staticRenderFns:[]};var k=t("VU/8")(f,l,!1,function(o){t("+xR3")},"data-v-722a6db0",null);e.default=k.exports}});
//# sourceMappingURL=3.05cc9bac1da272d26a22.js.map