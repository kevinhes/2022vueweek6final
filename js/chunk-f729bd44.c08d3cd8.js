(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f729bd44"],{"0b42":function(t,e,a){var n=a("da84"),c=a("e8b5"),o=a("68ee"),s=a("861d"),l=a("b622"),r=l("species"),i=n.Array;t.exports=function(t){var e;return c(t)&&(e=t.constructor,o(e)&&(e===i||c(e.prototype))?e=void 0:s(e)&&(e=e[r],null===e&&(e=void 0))),void 0===e?i:e}},1961:function(t,e,a){"use strict";a.r(e);a("b0c0");var n=a("7a23"),c={class:"container"},o=Object(n["f"])("h1",null,"購物車",-1),s={class:"text-end"},l={class:"table align-middle"},r=Object(n["f"])("thead",null,[Object(n["f"])("tr",null,[Object(n["f"])("th"),Object(n["f"])("th",null,"品名"),Object(n["f"])("th",{style:{width:"150px"}},"數量/單位"),Object(n["f"])("th",null,"單價")])],-1),i=["onClick"],u=Object(n["f"])("i",{class:"fas fa-spinner fa-pulse"},null,-1),d=Object(n["g"])(" x "),f=[u,d],b={class:"input-group input-group-sm"},m={class:"input-group mb-3"},p=["onUpdate:modelValue","onChange"],h={class:"input-group-text",id:"basic-addon2"},j={class:"text-end"},O={key:1},v=Object(n["f"])("h1",null,"請加入商品",-1),g=[v],y=Object(n["f"])("td",{colspan:"3",class:"text-end"},"總計",-1),x={class:"text-end"},I={class:"my-5 row justify-content-center"},k={class:"mb-3"},w=Object(n["f"])("label",{for:"email",class:"form-label"},"Email",-1),C={class:"mb-3"},V=Object(n["f"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),D={class:"mb-3"},S=Object(n["f"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),A={class:"mb-3"},q=Object(n["f"])("label",{for:"address",class:"form-label"},"收件人地址",-1),E={class:"mb-3"},L=Object(n["f"])("label",{for:"message",class:"form-label"},"留言",-1),U=Object(n["f"])("div",{class:"text-end"},[Object(n["f"])("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1);function $(t,e,a,u,d,v){var $,H=Object(n["E"])("Field"),_=Object(n["E"])("error-message"),F=Object(n["E"])("Form");return Object(n["w"])(),Object(n["e"])(n["a"],null,[Object(n["f"])("div",c,[o,Object(n["f"])("div",s,[Object(n["f"])("button",{class:Object(n["p"])(["btn btn-outline-danger",{disabled:!0===d.isLoaging}]),type:"button",onClick:e[0]||(e[0]=function(){return v.delAllItem&&v.delAllItem.apply(v,arguments)})},"清空購物車",2)]),Object(n["f"])("table",l,[r,Object(n["f"])("tbody",null,[null!==($=d.cartsData.carts)&&void 0!==$&&$.length?(Object(n["w"])(!0),Object(n["e"])(n["a"],{key:0},Object(n["D"])(d.cartsData.carts,(function(t){return Object(n["w"])(),Object(n["e"])("tr",{key:t.id},[Object(n["f"])("td",null,[Object(n["f"])("button",{type:"button",class:Object(n["p"])(["btn btn-outline-danger btn-sm",{disabled:!0===d.isLoaging}]),onClick:function(e){return v.delCartItem(t.id)}},f,10,i)]),Object(n["f"])("td",null,Object(n["H"])(t.product.title),1),Object(n["f"])("td",null,[Object(n["f"])("div",b,[Object(n["f"])("div",m,[Object(n["P"])(Object(n["f"])("input",{min:"1",type:"number",class:"form-control","onUpdate:modelValue":function(e){return t.qty=e},onChange:function(e){return v.updateCartNum(t.id,t.product.id,t.qty)}},null,40,p),[[n["K"],t.qty]]),Object(n["f"])("span",h,Object(n["H"])(t.product.unit),1)])])]),Object(n["f"])("td",j,Object(n["H"])(t.final_total),1)])})),128)):(Object(n["w"])(),Object(n["e"])("div",O,g))]),Object(n["f"])("tfoot",null,[Object(n["f"])("tr",null,[y,Object(n["f"])("td",x,Object(n["H"])(d.cartsData.final_total),1)])])])]),Object(n["f"])("div",I,[Object(n["h"])(F,{ref:"form",class:"col-md-6",onSubmit:v.onSubmit},{default:Object(n["O"])((function(t){var a=t.errors;return[Object(n["f"])("div",k,[w,Object(n["h"])(H,{id:"email",name:"email",type:"email",class:Object(n["p"])(["form-control",{"is-invalid":a["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:d.userInfo.data.user.email,"onUpdate:modelValue":e[1]||(e[1]=function(t){return d.userInfo.data.user.email=t})},null,8,["class","modelValue"]),Object(n["h"])(_,{name:"email",class:"invalid-feedback"})]),Object(n["f"])("div",C,[V,Object(n["h"])(H,{id:"name",name:"姓名",type:"text",class:Object(n["p"])(["form-control",{"is-invalid":a["姓名"]}]),modelValue:d.userInfo.data.user.name,"onUpdate:modelValue":e[2]||(e[2]=function(t){return d.userInfo.data.user.name=t}),placeholder:"請輸入姓名",rules:"required"},null,8,["class","modelValue"]),Object(n["h"])(_,{name:"姓名",class:"invalid-feedback"})]),Object(n["f"])("div",D,[S,Object(n["h"])(H,{id:"tel",name:"電話",type:"text",class:Object(n["p"])(["form-control",{"is-invalid":a["電話"]}]),modelValue:d.userInfo.data.user.tel,"onUpdate:modelValue":e[3]||(e[3]=function(t){return d.userInfo.data.user.tel=t}),placeholder:"請輸入電話"},null,8,["class","modelValue"]),Object(n["h"])(_,{name:"電話",class:"invalid-feedback"})]),Object(n["f"])("div",A,[q,Object(n["h"])(H,{id:"address",name:"地址",type:"text",class:Object(n["p"])(["form-control",{"is-invalid":a["地址"]}]),modelValue:d.userInfo.data.user.address,"onUpdate:modelValue":e[4]||(e[4]=function(t){return d.userInfo.data.user.address=t}),placeholder:"請輸入地址",rules:"required"},null,8,["class","modelValue"]),Object(n["h"])(_,{name:"地址",class:"invalid-feedback"})]),Object(n["f"])("div",E,[L,Object(n["P"])(Object(n["f"])("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":e[5]||(e[5]=function(t){return d.userInfo.data.message=t})},null,512),[[n["K"],d.userInfo.data.message]])]),U]})),_:1},8,["onSubmit"])])],64)}a("99af");var H={data:function(){return{cartsData:{},isLoaging:!1,userInfo:{data:{user:{name:"",email:"",tel:"",address:""},message:""}}}},methods:{getCartsData:function(){var t=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io","/v2/api/").concat("kevinhesapi","/cart")).then((function(e){t.cartsData=e.data.data})).catch((function(t){console.log(t)}))},delAllItem:function(){var t=this;this.isLoaging=!0,this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/v2/api/").concat("kevinhesapi","/carts")).then((function(){t.getCartsData(),t.isLoaging=!1})).catch((function(t){console.log(t)}))},delCartItem:function(t){var e=this;this.isLoaging=!0,this.$http.delete("".concat("https://vue3-course-api.hexschool.io","/v2/api/").concat("kevinhesapi","/cart/").concat(t)).then((function(){e.getCartsData(),e.isLoaging=!1})).catch((function(t){console.log(t)}))},updateCartNum:function(t,e,a){var n=this,c={data:{product_id:e,qty:a}};this.$http.put("".concat("https://vue3-course-api.hexschool.io","/v2/api/").concat("kevinhesapi","/cart/").concat(t),c).then((function(){n.getCartsData()})).catch((function(t){console.log(t)}))},onSubmit:function(){var t=this;this.$http.post("".concat("https://vue3-course-api.hexschool.io","/v2/api/").concat("kevinhesapi","/order"),this.userInfo).then((function(e){t.userInfo={data:{user:{name:"",email:"",tel:"",address:""},message:""}},alert(e.data.message),t.getCartsData()})).catch((function(t){console.log(t)}))}},mounted:function(){this.getCartsData()}},_=a("6b0d"),F=a.n(_);const J=F()(H,[["render",$]]);e["default"]=J},"1dde":function(t,e,a){var n=a("d039"),c=a("b622"),o=a("2d00"),s=c("species");t.exports=function(t){return o>=51||!n((function(){var e=[],a=e.constructor={};return a[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,a){var n=a("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},8418:function(t,e,a){"use strict";var n=a("a04b"),c=a("9bf2"),o=a("5c6c");t.exports=function(t,e,a){var s=n(e);s in t?c.f(t,s,o(0,a)):t[s]=a}},"99af":function(t,e,a){"use strict";var n=a("23e7"),c=a("da84"),o=a("d039"),s=a("e8b5"),l=a("861d"),r=a("7b0b"),i=a("07fa"),u=a("8418"),d=a("65f0"),f=a("1dde"),b=a("b622"),m=a("2d00"),p=b("isConcatSpreadable"),h=9007199254740991,j="Maximum allowed index exceeded",O=c.TypeError,v=m>=51||!o((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),g=f("concat"),y=function(t){if(!l(t))return!1;var e=t[p];return void 0!==e?!!e:s(t)},x=!v||!g;n({target:"Array",proto:!0,forced:x},{concat:function(t){var e,a,n,c,o,s=r(this),l=d(s,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?s:arguments[e],y(o)){if(c=i(o),f+c>h)throw O(j);for(a=0;a<c;a++,f++)a in o&&u(l,f,o[a])}else{if(f>=h)throw O(j);u(l,f++,o)}return l.length=f,l}})},b0c0:function(t,e,a){var n=a("83ab"),c=a("5e77").EXISTS,o=a("e330"),s=a("9bf2").f,l=Function.prototype,r=o(l.toString),i=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,u=o(i.exec),d="name";n&&!c&&s(l,d,{configurable:!0,get:function(){try{return u(i,r(this))[1]}catch(t){return""}}})},e8b5:function(t,e,a){var n=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-f729bd44.c08d3cd8.js.map