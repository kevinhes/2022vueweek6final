(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c909a19"],{"0b42":function(t,e,n){var a=n("da84"),c=n("e8b5"),i=n("68ee"),o=n("861d"),r=n("b622"),s=r("species"),u=a.Array;t.exports=function(t){var e;return c(t)&&(e=t.constructor,i(e)&&(e===u||c(e.prototype))?e=void 0:o(e)&&(e=e[s],null===e&&(e=void 0))),void 0===e?u:e}},"1dde":function(t,e,n){var a=n("d039"),c=n("b622"),i=n("2d00"),o=c("species");t.exports=function(t){return i>=51||!a((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,n){var a=n("0b42");t.exports=function(t,e){return new(a(t))(0===e?0:e)}},8418:function(t,e,n){"use strict";var a=n("a04b"),c=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var o=a(e);o in t?c.f(t,o,i(0,n)):t[o]=n}},"99af":function(t,e,n){"use strict";var a=n("23e7"),c=n("da84"),i=n("d039"),o=n("e8b5"),r=n("861d"),s=n("7b0b"),u=n("07fa"),l=n("8418"),b=n("65f0"),p=n("1dde"),f=n("b622"),d=n("2d00"),g=f("isConcatSpreadable"),O=9007199254740991,j="Maximum allowed index exceeded",h=c.TypeError,v=d>=51||!i((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),k=p("concat"),w=function(t){if(!r(t))return!1;var e=t[g];return void 0!==e?!!e:o(t)},m=!v||!k;a({target:"Array",proto:!0,forced:m},{concat:function(t){var e,n,a,c,i,o=s(this),r=b(o,0),p=0;for(e=-1,a=arguments.length;e<a;e++)if(i=-1===e?o:arguments[e],w(i)){if(c=u(i),p+c>O)throw h(j);for(n=0;n<c;n++,p++)n in i&&l(r,p,i[n])}else{if(p>=O)throw h(j);l(r,p++,i)}return r.length=p,r}})},e8b5:function(t,e,n){var a=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}},fd15:function(t,e,n){"use strict";n.r(e);var a=n("7a23"),c={class:"container"},i=Object(a["f"])("h1",null,"產品列表",-1),o={class:"mt-4"},r={class:"table align-middle"},s=Object(a["f"])("thead",null,[Object(a["f"])("tr",null,[Object(a["f"])("th",null,"圖片"),Object(a["f"])("th",null,"商品名稱"),Object(a["f"])("th",null,"價格"),Object(a["f"])("th")])],-1),u={style:{width:"200px"}},l={key:0,class:"h5"},b={key:1},p={class:"h6"},f={class:"h5"},d={class:"btn-group btn-group-sm"},g=Object(a["f"])("i",{class:"fas fa-spinner fa-pulse"},null,-1),O=Object(a["g"])(" 查看更多 "),j=["onClick"],h=Object(a["f"])("i",{class:"fas fa-spinner fa-pulse"},null,-1),v=Object(a["g"])(" 加到購物車 "),k=[h,v];function w(t,e,n,h,v,w){var m=Object(a["E"])("router-link"),y=Object(a["E"])("Pagination");return Object(a["w"])(),Object(a["e"])("div",c,[i,Object(a["f"])("div",o,[Object(a["f"])("table",r,[s,Object(a["f"])("tbody",null,[(Object(a["w"])(!0),Object(a["e"])(a["a"],null,Object(a["D"])(v.productsData,(function(t){return Object(a["w"])(),Object(a["e"])("tr",{key:t.id},[Object(a["f"])("td",u,[Object(a["f"])("div",{style:Object(a["q"])([{height:"100px","background-size":"cover","background-position":"center",width:"100px"},{backgroundImage:"url(".concat(t.imageUrl,")")}])},null,4)]),Object(a["f"])("td",null,Object(a["H"])(t.title),1),Object(a["f"])("td",null,[t.origin_price===t.price?(Object(a["w"])(),Object(a["e"])("div",l,Object(a["H"])(t.origin_price)+" 元",1)):(Object(a["w"])(),Object(a["e"])("div",b,[Object(a["f"])("del",p,"原價 "+Object(a["H"])(t.origin_price)+" 元",1),Object(a["f"])("div",f,"現在只要 "+Object(a["H"])(t.price)+" 元",1)]))]),Object(a["f"])("td",null,[Object(a["f"])("div",d,[Object(a["h"])(m,{type:"button",class:"btn btn-outline-secondary",to:"/product/".concat(t.id)},{default:Object(a["O"])((function(){return[g,O]})),_:2},1032,["to"]),Object(a["f"])("button",{type:"button",class:Object(a["p"])(["btn btn-outline-danger",{disabled:!0===v.isLoaging}]),onClick:function(e){return w.addToCart(t.id)}},k,10,j)])])])})),128))])]),Object(a["h"])(y,{pagination:v.pagination,onPageChange:w.getProductsData},null,8,["pagination","onPageChange"])])])}n("99af");var m={"aria-label":"Page navigation example"},y={class:"pagination"},C=Object(a["f"])("span",{"aria-hidden":"true"},"«",-1),x=[C],_=["onClick"],P={class:"page-item"},D=Object(a["f"])("span",{"aria-hidden":"true"},"»",-1),A=[D];function H(t,e,n,c,i,o){return Object(a["w"])(),Object(a["e"])("nav",m,[Object(a["f"])("ul",y,[Object(a["f"])("li",{class:Object(a["p"])(["page-item",{disabled:!1===n.pagination.has_pre}])},[Object(a["f"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=Object(a["Q"])((function(t){return o.pageChage(n.pagination.current_page-1)}),["prevent"]))},x)],2),(Object(a["w"])(!0),Object(a["e"])(a["a"],null,Object(a["D"])(n.pagination.total_pages,(function(t,e){return Object(a["w"])(),Object(a["e"])("li",{class:Object(a["p"])(["page-item",{active:t===n.pagination.current_page}]),key:"".concat(t,"+").concat(e)},[Object(a["f"])("a",{class:"page-link",href:"#",onClick:Object(a["Q"])((function(e){return o.pageChage(t)}),["prevent"])},Object(a["H"])(t),9,_)],2)})),128)),Object(a["f"])("li",P,[Object(a["f"])("a",{class:"page-link",href:"#",onClick:e[1]||(e[1]=Object(a["Q"])((function(t){return o.pageChage(n.pagination.total_pages)}),["prevent"]))},"last")]),Object(a["f"])("li",{class:Object(a["p"])(["page-item",{disabled:!1===n.pagination.has_next}])},[Object(a["f"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[2]||(e[2]=Object(a["Q"])((function(t){return o.pageChage(n.pagination.current_page+1)}),["prevent"]))},A)],2)])])}var L={props:["pagination"],methods:{pageChage:function(t){this.$emit("page-change",t)}}},Q=n("6b0d"),E=n.n(Q);const T=E()(L,[["render",H]]);var $=T,q={data:function(){return{productsData:[],pagination:{},isLoaging:!1}},components:{Pagination:$},methods:{getProductsData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$http.get("".concat("https://vue3-course-api.hexschool.io","/v2/api/").concat("kevinhesapi","/products?page=").concat(e)).then((function(e){t.productsData=e.data.products,t.pagination=e.data.pagination})).catch((function(t){console.log(t)}))},addToCart:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoaging=!0;var a={data:{product_id:t,qty:n}};this.$http.post("".concat("https://vue3-course-api.hexschool.io","/v2/api/").concat("kevinhesapi","/cart"),a).then((function(t){alert(t.data.message),e.isLoaging=!1})).catch((function(t){console.log(t)}))}},mounted:function(){this.getProductsData()}};const J=E()(q,[["render",w]]);e["default"]=J}}]);
//# sourceMappingURL=chunk-3c909a19.592df77a.js.map