webpackJsonp([13,12],{"+nnO":function(t,o,a){var i=a("G1Qg");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("e1e21940",i,!1,{sourceMap:!1})},"66Mn":function(t,o,a){"use strict";var i=a("jK42"),e=a("ekdE");o.a={components:{lazyImage:i.default,tile:e.a},props:{projects:{type:Array,default:function(){return[]}},categories:{tpye:Array,default:function(){return[]}}},data:function(){return{filter:""}},methods:{setFilter:function(t){this.filter=t}},computed:{filteredProjects:function(){var t=this;return this.projects.filter(function(o){return!t.filter||o.categories.map(function(t){return t.slug}).includes(t.filter)})}}}},"7Wd0":function(t,o,a){var i=a("x4+n");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("d5d5fea4",i,!1,{sourceMap:!1})},"9Fnu":function(t,o,a){"use strict";o.a={name:"LazyImage",props:{handle:{type:String,default:""},baseUrl:{type:String,default:"https://media.graphcms.com"},align:{type:String,default:"top"},aspectRatio:{type:Number,default:0},previewColor:{type:String,default:"black"}},computed:{size:function(){if(!this.mounted)return null;var t=this.$el;return t?{width:t.clientWidth,height:Math.round(this.aspectRatio*t.clientWidth)}:null},src:function(){return this.handle&&this.size?this.size.height?this.baseUrl+"/resize=fit:crop,align:"+this.align+",w:"+this.size.width+",h:"+this.size.height+"/"+this.handle:this.baseUrl+"/resize=w:"+this.size.width+"/"+this.handle:""},placerholderStyle:function(){return this.mounted?"":"\n\t\t\t\tbackground-color: "+this.previewColor+";\n\t\t\t\tpadding-top:"+100*this.aspectRatio+"%;"}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=!0}}},"9vnl":function(t,o,a){"use strict";var i=a("jK42");o.a={components:{lazyImage:i.default},props:{project:{type:Object,required:!0}},methods:{slug:function(t,o){return""+t+o}}}},EeZC:function(t,o,a){"use strict";var i=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"portfolio-item"},[a("div",{staticClass:"portfolio-wrapper"},[a("div",{staticClass:"portfolio-thumb"},[a("lazy-image",{attrs:{handle:t.project.media[0].handle}})],1),a("div",{staticClass:"portfolio-caption"},[a("h4",[a("nuxt-link",{attrs:{to:t.slug("/",t.project.slug)}},[t._v(t._s(t.project.title))])],1),a("div",{staticClass:"work-tag"},t._l(t.project.categories,function(o,i){return a("span",{key:o.slug},[i>0?a("span",[t._v(", ")]):t._e(),a("nuxt-link",{attrs:{to:t.slug("/portfolio/",o.slug)}},[t._v(t._s(o.displayName))])],1)}))])])])};i._withStripped=!0;var e={render:i,staticRenderFns:[]};o.a=e},G1Qg:function(t,o,a){(t.exports=a("FZ+f")(!1)).push([t.i,'.row-portfolio[data-v-02da8969]{margin:0 -10px}.row-portfolio .portfolio-item[data-v-02da8969]{padding:0 10px}.portfolio-wrapper[data-v-02da8969]{position:relative}.portfolio-item[data-v-02da8969]{width:33.33%;margin-bottom:20px}.portfolio-thumb img[data-v-02da8969]{width:100%}.portfolio-thumb[data-v-02da8969]{position:relative}.portfolio-thumb[data-v-02da8969]:before{background:#fff none repeat scroll 0 0;content:"";height:100%;left:0;opacity:0;position:absolute;top:0;-webkit-transition:all .3s ease 0s;transition:all .3s ease 0s;width:100%}.portfolio-wrapper:hover .portfolio-thumb[data-v-02da8969]:before{opacity:.8}.view-icon[data-v-02da8969]{left:0;position:absolute;right:0;text-align:center;top:50%;opacity:0;visibility:hidden;z-index:9;-webkit-transition:.3s;transition:.3s}.portfolio-wrapper:hover .view-icon[data-v-02da8969]{-webkit-transform:translateY(-50%);transform:translateY(-50%);opacity:1;visibility:visible}.view-icon>a[data-v-02da8969]{background:#222 none repeat scroll 0 0;border-radius:50%;color:#fff;display:inline-block;height:40px;line-height:41px;width:40px}.view-icon>a[data-v-02da8969]:hover{background:#666}.portfolio-caption>h4[data-v-02da8969]{font-size:18px;font-weight:500;letter-spacing:1px;margin-bottom:5px;padding-bottom:9px;position:relative}.portfolio-caption>h4[data-v-02da8969]:before{background:#444 none repeat scroll 0 0;bottom:-1px;content:"";height:1px;left:0;margin:auto;position:absolute;right:0;width:26px}.work-tag>a[data-v-02da8969]{color:#555;font-size:13px;letter-spacing:1px}.portfolio-caption[data-v-02da8969]{padding:15px}.caption-border[data-v-02da8969]{border:1px solid #f6f6f6}.portfolio-style-2 .portfolio-caption>h4[data-v-02da8969]:before{display:none}.portfolio-style-4 .portfolio-caption>h4[data-v-02da8969]:before{display:block}.portfolio-style-2 .portfolio-caption[data-v-02da8969]{left:0;opacity:0;padding:25px;position:absolute;right:0;top:10px;-webkit-transition:all .3s ease 0s;transition:all .3s ease 0s;visibility:hidden}.portfolio-wrapper:hover .portfolio-caption[data-v-02da8969]{opacity:1;visibility:visible;top:0}.call-to-action>h3[data-v-02da8969]{font-weight:500;letter-spacing:1.5px}.call-to-action>p[data-v-02da8969]{margin:0}.call-to-action a[data-v-02da8969]{margin-top:12px}.portfolio-style-3 .portfolio-caption[data-v-02da8969]{bottom:20px;top:inherit}.portfolio-style-3 .portfolio-wrapper:hover .portfolio-caption[data-v-02da8969]{bottom:0;top:inherit}.row-portfolio.m-0[data-v-02da8969]{margin:0}.portfolio-style-4 .portfolio-thumb[data-v-02da8969]:before{background:#000 none repeat scroll 0 0;bottom:15px;left:15px;right:15px;top:15px;height:inherit;width:inherit}.portfolio-style-4 .portfolio-caption>h4[data-v-02da8969]:before{background:#fff none repeat scroll 0 0;bottom:-1px;content:"";height:1px;left:0;margin:auto;position:absolute;right:0;width:26px}.portfolio-style-4 .portfolio-wrapper:hover .portfolio-thumb[data-v-02da8969]:before{opacity:.9}.portfolio-style-4 .portfolio-caption>h4[data-v-02da8969],.portfolio-style-4 .work-tag>a[data-v-02da8969]{color:#fff}.portfolio-style-4 .portfolio-caption[data-v-02da8969]{bottom:50%;top:inherit;-webkit-transform:translateY(40%);transform:translateY(40%)}.portfolio-style-4 .portfolio-wrapper:hover .portfolio-caption[data-v-02da8969]{-webkit-transform:translateY(50%);transform:translateY(50%);bottom:50%}.portfolio-grid-2 .portfolio-item[data-v-02da8969]{width:50%}.portfolio-grid-4 .portfolio-item[data-v-02da8969]{width:25%}.no-space .portfolio-item[data-v-02da8969]{margin-bottom:0}.width-8[data-v-02da8969]{width:66.6667%}#related-active .portfolio-item[data-v-02da8969]{width:100%;padding:0 10px;margin-bottom:0}.basic-separator[data-v-02da8969]{border-top:1px solid #ddd}.view-more[data-v-02da8969]{margin-top:20px;text-align:center}',""])},ekdE:function(t,o,a){"use strict";var i=a("9vnl"),e=a("EeZC"),r=!1;var n=function(t){r||a("+nnO")},l=a("VU/8")(i.a,e.a,!1,n,"data-v-02da8969",null);l.options.__file="components/tile.vue",o.a=l.exports},jK42:function(t,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i=a("9Fnu"),e=a("thA7"),r=a("VU/8")(i.a,e.a,!1,null,null,null);r.options.__file="components/lazy-image.vue",o.default=r.exports},myEa:function(t,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i=a("66Mn"),e=a("zc4j"),r=!1;var n=function(t){r||a("7Wd0")},l=a("VU/8")(i.a,e.a,!1,n,"data-v-5c2244da",null);l.options.__file="components/tiles.vue",o.default=l.exports},thA7:function(t,o,a){"use strict";var i=function(){var t=this.$createElement,o=this._self._c||t;return o("no-ssr",{style:this.placerholderStyle},[this.handle?o("img",{attrs:{src:this.src}}):this._e()])};i._withStripped=!0;var e={render:i,staticRenderFns:[]};o.a=e},"x4+n":function(t,o,a){(t.exports=a("FZ+f")(!1)).push([t.i,'.row-portfolio[data-v-5c2244da]{position:relative}.tiles-container[data-v-5c2244da]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.portfolio-item[data-v-5c2244da]{-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.tiles-enter[data-v-5c2244da],.tiles-leave-to[data-v-5c2244da]{-webkit-transform:scale3D(0,0,0);transform:scale3D(0,0,0)}.tiles-leave-active[data-v-5c2244da]{position:absolute}.basic-portfolio-area[data-v-5c2244da]{padding:90px 0}.filter-menu[data-v-5c2244da]{text-align:center;margin-bottom:40px}.filter-menu button[data-v-5c2244da]{background:transparent none repeat scroll 0 0;border:0 none;color:#444;font-family:dosis;font-weight:700;letter-spacing:2px;margin:0 15px;padding:6px 0;position:relative;text-transform:uppercase}.filter-menu button[data-v-5c2244da]:after{background:#777 none repeat scroll 0 0;bottom:-2px;content:"";height:1px;left:0;opacity:0;position:absolute;right:0;-webkit-transition:all .3s ease 0s;transition:all .3s ease 0s;width:20px}.filter-menu button.active[data-v-5c2244da]:after,.filter-menu button[data-v-5c2244da]:hover:after{opacity:1}',""])},zc4j:function(t,o,a){"use strict";var i=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"basic-portfolio-area"},[a("div",{staticClass:"container"},[t.categories.length>0?a("div",{staticClass:"filter-menu"},[a("button",{class:{active:!t.filter},on:{click:function(o){t.setFilter("")}}},[t._v("All")]),t._l(t.categories,function(o){return a("button",{class:{active:t.filter==o.slug},on:{click:function(a){t.setFilter(o.slug)}}},[t._v(t._s(o.displayName))])})],2):t._e(),a("div",{staticClass:"row-portfolio portfolio-style-2 portfolio-style-3"},[a("transition-group",{staticClass:"tiles-container",attrs:{name:"tiles",tag:"div"}},t._l(t.filteredProjects,function(t){return a("tile",{key:t.slug,attrs:{project:t}})}))],1)])])};i._withStripped=!0;var e={render:i,staticRenderFns:[]};o.a=e}});