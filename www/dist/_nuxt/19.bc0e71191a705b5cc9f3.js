webpackJsonp([19],{"06sp":function(e,t,i){"use strict";var n=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"basic-slider",style:this.imageStyle},[t("div",{staticClass:"container"},[t("div",{staticClass:"slider-content"},[t("span",{domProps:{innerHTML:this._s(this.header.text)}}),this.header.callToAction?t("call-to-action",{attrs:{cta:this.header.callToAction}}):this._e()],1)])])};n._withStripped=!0;var o={render:n,staticRenderFns:[]};t.a=o},"1Z0S":function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,'.basic-slider{background-position:50%;background-size:cover;padding:300px 0}.slider-content h2{font-weight:500;letter-spacing:5px}.dot{background:#444 none repeat scroll 0 0;display:inline-block;height:5px;width:5px}.slider-content.text-white h2{color:#fff}.slider-content.text-white p{color:#ddd}.slider-content.black-bg-opacity{background:rgba(0,0,0,.7) none repeat scroll 0 0;display:inline-block;padding:70px 50px;text-align:center;outline:1px solid rgba(0,0,0,.2);outline-offset:-15px;position:relative}.slider-content.black-bg-opacity>h2{font-size:30px;line-height:40px;position:relative}.slider-content.text-white.black-bg-opacity:before{border:1px solid #888;bottom:15px;content:"";left:15px;position:absolute;right:15px;top:10px}.slider-white{border-bottom:1px solid #f5f5f5;border-top:1px solid #f5f5f5;padding:250px 0}.basic-slider.slider-white{background-position:50%;background-size:cover}.slider-white .slider-content h3{font-weight:500;letter-spacing:3px;line-height:50px;margin:0}.single-slider{background:transparent none repeat scroll 100%/cover;padding:300px 0}.border-t-b{border-top:1px solid #f5f5f5;border-bottom:1px solid #f5f5f5}.slider-screen{background-position:50%;background-size:cover;height:100vh;padding:0;position:relative}.slider-screen .slider-content{left:0;position:absolute;right:0;text-align:center;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:99}.hero-social{margin-top:20px}.hero-social>a{font-size:20px;margin:0 20px}.slider-content{padding:0 15px;width:92.5vw;margin:0 auto}.slider-content h1,.slider-content h2,.slider-content h3,.slider-content h4,.slider-content h5,.slider-content h6,.slider-content p{color:#fff;margin-bottom:0}',""])},A246:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("GSE9"),o=i("06sp"),r=!1;var s=function(e){r||i("yAMl")},a=i("VU/8")(n.a,o.a,!1,s,null,null);a.options.__file="components/header-slide.vue",t.default=a.exports},GSE9:function(e,t,i){"use strict";t.a={components:{callToAction:function(){return i.e(11).then(i.bind(null,"u1sz"))}},data:function(){return{traits:["Developer","Mathematician","Musician","Freelancer"],mounted:!1}},props:{header:{type:Object,required:!0}},computed:{trait:function(){return this.traits[0]},imageStyle:function(){if(this.mounted){var e=this.$el.clientWidth,t=Math.round(.75*e);return this.header.image?"background-image: url(https://media.graphcms.com/resize=w:"+e+",fit:crop,align:top,h:"+t+"/"+this.header.image.handle+");":""}return"background-color: "+this.previewColor+";"},previewColor:function(){var e={r:246,g:246,b:246,a:1};return this.header.image&&this.header.image.previewColor&&(e=JSON.parse(this.header.image.previewColor)),"rgba("+e.r+", "+e.g+", "+e.b+", "+e.a+")"}},mounted:function(){this.mounted=!0}}},yAMl:function(e,t,i){var n=i("1Z0S");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("dbe9e172",n,!1,{sourceMap:!1})}});