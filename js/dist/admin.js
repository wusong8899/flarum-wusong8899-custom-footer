(function(e,y,v,N,f){"use strict";const u={supportLinks:[{title:"关于我们",url:"https://d5539.com"},{title:"联盟计划",url:"https://d5539.com"},{title:"应用下载",url:"https://d5539.com"},{title:"品牌赞助",url:"https://d5539.com"},{title:"隐私政策",url:"https://d5539.com"},{title:"帮助中心",url:"https://d5539.com"},{title:"服务条款",url:"http://ag5250.com"},{title:"在线客服",url:"http://j6839.com"}],platformIcons:[{title:"Binance",url:"https://d5539.com",iconUrl:"https://i.mji.rip/2025/08/20/bc82c16e3f215ef28a20a981aaf5aa67.png"},{title:"OKX",url:"https://d5539.com",iconUrl:"https://i.mji.rip/2025/08/20/c2f7b108bbf2f1c344c8977ffdc02332.png"},{title:"Gate.io",url:"https://d5539.com",iconUrl:"https://i.mji.rip/2025/08/20/2e56e2e2237333a6b9f4c37f4b05bb25.png"},{title:"Huobi",url:"https://d5539.com",iconUrl:"https://i.mji.rip/2025/08/20/5f3d141c4f69a8791fb7ef49c70e7ef6.png"},{title:"TokenPocket",url:"https://d5539.com",iconUrl:"https://i.mji.rip/2025/08/20/60ba5473fc2545073200409afda7023d.png"},{title:"imToken",url:"https://d5539.com",iconUrl:"https://i.mji.rip/2025/08/20/f801439aca2d04e3078742d1707b978e.png"},{title:"MetaMask",url:"https://d5539.com",iconUrl:"https://i.mji.rip/2025/08/20/9a0882ed90e9b47e28cd86735ef11543.png"}],platformLinks:[{title:"平台链接1",url:"https://d5539.com",iconUrl:"https://i.mji.rip/2025/08/20/d7944ace52978a86f8b611f5efb2ca98.png"},{title:"平台链接2",url:"https://d5539.com",iconUrl:"https://i.mji.rip/2025/08/20/be8816f29700c722183b516f5cb21b6a.png"}],brandAmbassador:{imageUrl:"https://i.mji.rip/2025/08/26/c877ff6f33df4671ccc174c1225f43eb.png",socialLinks:[{title:"QQ群组",url:"https://qun.qq.com/universal-share/share?ac=1&authKey=9LPFGIDPqHgLiIMu58PLdHO6nPdKX7oSk8BgE7WIsHVZM44Dg%2F1KfltkT8if955Q&busi_data=eyJncm91cENvZGUiOiI3NDU1MDg3OTkiLCJ0b2tlbiI6Ilo0ZnVOWnNKa3NuenBORkNtN2s2bkZycUtHMjJPWWhPcFJTNXhpdkhBWEtjRURGaTN0K1h0SndFdGpnNGJRNi8iLCJ1aW4iOiIxOTA1OTA3NDkyIn0%3D&data=Hgu98jBrCyb2RfXNlM_QBLB70eMTvFFBXU2A2hMUZMTW9GSH8u3FGo2eyN3KkGEHP-uN-CCNm0cZFLLq679b0Q&svctype=4&tempid=h5_group_info",iconUrl:"https://i.mji.rip/2025/08/15/d5f593ff6091c997d3ac6e0e254d9ffa.png"},{title:"Telegram",url:"https://t.me/+YByvSKkQoxRmY2I1",iconUrl:"https://i.mji.rip/2025/08/13/5cb04bf5d20510736bcef536d889b0c8.png"},{title:"群组",url:"https://www.sfw.vc/lgcom",iconUrl:"https://i.mji.rip/2025/08/22/794625485c43dbb2bce4a97b648ed35e.png"},{title:"Telegram群组",url:"https://t.me/+rTq_yeCUtKEzYTI1",iconUrl:"https://i.mji.rip/2025/08/14/9340984e588c0560c352d42292114ec8.png"}]},footerLogo:{imageUrl:"https://i.mji.rip/2025/08/26/dc3737efefa7d88b104909d5b4c13d02.png",altText:"集团 Logo"},copyrightText:"©2025 老哥.com | 版权所有 网站由老哥流媒体股份集团公司运营，社区运营非盈利机构 请您满足18+ 后进行访问并确保 你所在的当地区支持相关的内容管理 制造、及指引服务等事宜， 根据内容条例，请注意本站规范。"},_=class _{static loadConfig(){try{const t=e.data.settings[this.SETTING_KEY];if(!t)return this.getDefaultConfig();const o=JSON.parse(t);return this.validateAndNormalize(o)}catch(t){return console.error("Failed to load footer config:",t),this.getDefaultConfig()}}static saveConfig(t){try{const o=this.validateAndNormalize(t),r=JSON.stringify(o);return e.data.settings[this.SETTING_KEY]=r,e.request({method:"POST",url:e.forum.attribute("apiUrl")+"/settings",body:{[this.SETTING_KEY]:r}})}catch(o){throw console.error("Failed to save footer config:",o),o}}static getDefaultConfig(){return JSON.parse(JSON.stringify(u))}static validateAndNormalize(t){return{supportLinks:this.validateSupportLinks(t.supportLinks),platformIcons:this.validatePlatformIcons(t.platformIcons),platformLinks:this.validatePlatformIcons(t.platformLinks),brandAmbassador:this.validateBrandAmbassador(t.brandAmbassador),footerLogo:this.validateFooterLogo(t.footerLogo),copyrightText:this.validateCopyrightText(t.copyrightText)}}static validateSupportLinks(t){return Array.isArray(t)?t.map(o=>({title:this.validateString(o?.title,""),url:this.validateUrl(o?.url,"#")})).filter(o=>o.title||o.url!=="#"):u.supportLinks}static validatePlatformIcons(t){return Array.isArray(t)?t.map(o=>({title:this.validateString(o?.title,""),url:this.validateUrl(o?.url,"#"),iconUrl:this.validateUrl(o?.iconUrl,"")})).filter(o=>o.title&&o.iconUrl):[]}static validateBrandAmbassador(t){return!t||typeof t!="object"?u.brandAmbassador:{imageUrl:this.validateUrl(t.imageUrl,u.brandAmbassador.imageUrl),socialLinks:this.validateSocialLinks(t.socialLinks)}}static validateSocialLinks(t){return Array.isArray(t)?t.map(o=>({title:this.validateString(o?.title,""),url:this.validateUrl(o?.url,"#"),iconUrl:this.validateUrl(o?.iconUrl,"")})).filter(o=>o.title&&o.iconUrl):u.brandAmbassador.socialLinks}static validateFooterLogo(t){return!t||typeof t!="object"?u.footerLogo:{imageUrl:this.validateUrl(t.imageUrl,u.footerLogo.imageUrl),altText:this.validateString(t.altText,u.footerLogo.altText)}}static validateCopyrightText(t){return this.validateString(t,u.copyrightText)}static validateString(t,o){return typeof t=="string"?t.trim():o}static validateUrl(t,o){if(typeof t!="string")return o;const r=t.trim();if(r===""&&o==="")return"";try{return new URL(r),r}catch{return r.startsWith("/")||r.startsWith("#")?r:o}}static generateFooterHtml(t){return`
<footer id="customFooter" class="custom-footer">
  <section class="footer-section">
    <div class="footer-layout-row">
      <div class="footer-layout-col">
        <div>
          <h3 class="footer-title">支持</h3>
          <ul class="link-grid-2col">
            ${t.supportLinks.map(o=>`<li><a href="${this.escapeHtml(o.url)}" target="_blank">${this.escapeHtml(o.title)}</a></li>`).join(`
            `)}
          </ul>
        </div>
        <div class="platform-section">
          <h3 class="footer-title">社群入口</h3>
          <ul class="platform-grid">
            ${t.platformIcons.map((o,r)=>`<li><a href="${this.escapeHtml(o.url)}" target="_blank" title="${this.escapeHtml(o.title)}"><i class="u-sprites platform-icon-${r+1}" style="background-image: url(${this.escapeHtml(o.iconUrl)})"></i></a></li>`).join(`
            `)}
          </ul>
          <div class="platform-links">
            ${t.platformLinks.map((o,r)=>`<a href="${this.escapeHtml(o.url)}" target="_blank" class="platform-link-${r+1}" title="${this.escapeHtml(o.title)}" style="background-image: url(${this.escapeHtml(o.iconUrl)})"></a>`).join(`
            `)}
          </div>
        </div>
      </div>
      <div class="footer-layout-col">
        <div>
          <h3 class="footer-title">老哥品牌代言人</h3>
          <div class="brand-ambassador">
            <div class="brand-names">
              <p>· 雅帝</p>
              <p>· 林帝</p>
              <p>· 文少</p>
            </div>
            <img class="brand-image" src="${this.escapeHtml(t.brandAmbassador.imageUrl)}" alt="品牌代言人">
            <ul class="brand-socials">
              ${t.brandAmbassador.socialLinks.map(o=>`<li><a href="${this.escapeHtml(o.url)}" target="_blank"><img src="${this.escapeHtml(o.iconUrl)}" alt="${this.escapeHtml(o.title)}"><span>群组</span></a></li>`).join(`
              `)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="footer-divider"></div>
  <section class="footer-section footer-section-bottom">
    <img class="footer-logo" src="${this.escapeHtml(t.footerLogo.imageUrl)}" alt="${this.escapeHtml(t.footerLogo.altText)}">
    <div class="footer-text">
      <p>${this.escapeHtml(t.copyrightText)}</p>
    </div>
  </section>
</footer>`}static escapeHtml(t){const o=document.createElement("div");return o.textContent=t,o.innerHTML}};_.SETTING_KEY="custom_footer_config";let h=_;class b extends f{constructor(){super(...arguments),this.draggedIndex=null}view(){const{items:t,renderItem:o,title:r,addButtonText:n,allowReorder:a=!0,maxItems:i}=this.attrs,s=!i||t.length<i;return m("div",{className:"FooterConfig-listManager"},r&&m("h3",null,r),m("div",{className:"FooterConfig-listItems"},t.map((c,l)=>m("div",{key:l,className:`FooterConfig-listItem ${a?"FooterConfig-listItem--draggable":""}`,draggable:a,ondragstart:a?d=>this.handleDragStart(d,l):void 0,ondragover:a?d=>this.handleDragOver(d):void 0,ondrop:a?d=>this.handleDrop(d,l):void 0,ondragend:a?()=>this.handleDragEnd():void 0},a&&m("div",{className:"FooterConfig-dragHandle"},m("i",{className:"fas fa-grip-vertical"})),m("div",{className:"FooterConfig-itemContent"},o(c,l,d=>this.updateItem(l,d),()=>this.removeItem(l)))))),s&&m("button",{type:"button",className:"Button FooterConfig-addButton",onclick:()=>this.addItem()},m("i",{className:"fas fa-plus"}),n||e.translator.trans("wusong8899-custom-footer.admin.edit_footer.add_item")))}addItem(){const{items:t,onUpdate:o,createItem:r}=this.attrs,n=r();o([...t,n])}updateItem(t,o){const{items:r,onUpdate:n}=this.attrs,a=[...r];a[t]=o,n(a)}removeItem(t){const{items:o,onUpdate:r}=this.attrs,n=o.filter((a,i)=>i!==t);r(n)}handleDragStart(t,o){this.draggedIndex=o,t.dataTransfer&&(t.dataTransfer.effectAllowed="move")}handleDragOver(t){t.preventDefault(),t.dataTransfer&&(t.dataTransfer.dropEffect="move")}handleDrop(t,o){if(t.preventDefault(),this.draggedIndex===null||this.draggedIndex===o)return;const{items:r,onUpdate:n}=this.attrs,a=[...r],i=a[this.draggedIndex];a.splice(this.draggedIndex,1);const s=this.draggedIndex<o?o-1:o;a.splice(s,0,i),n(a)}handleDragEnd(){this.draggedIndex=null}}class x extends f{view(){const{link:t,onUpdate:o,onRemove:r,showRemove:n=!0}=this.attrs,a=this.attrs.titleLabel||e.translator.trans("wusong8899-custom-footer.admin.edit_footer.link_title"),i=this.attrs.urlLabel||e.translator.trans("wusong8899-custom-footer.admin.edit_footer.link_url");return m("div",{className:"FooterConfig-linkEditor"},m("div",{className:"Form-group"},m("label",null,a),m("input",{className:"FormControl",type:"text",value:t.title,placeholder:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.link_title_placeholder"),onchange:s=>{const c=s.target;o({...t,title:c.value})}})),m("div",{className:"Form-group"},m("label",null,i),m("div",{className:"FooterConfig-urlInput"},m("input",{className:"FormControl",type:"url",value:t.url,placeholder:"https://example.com",onchange:s=>{const c=s.target;o({...t,url:c.value})}}),n&&r&&m("button",{type:"button",className:"Button Button--danger FooterConfig-removeBtn",onclick:r,title:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.remove_link")},m("i",{className:"fas fa-times"})))))}}class U extends f{view(){const{links:t,onUpdate:o}=this.attrs;return m("div",{className:"FooterConfig-section FooterConfig-supportLinks"},m(b,{items:t,onUpdate:o,createItem:()=>({title:"",url:""}),renderItem:(r,n,a,i)=>m(x,{link:r,onUpdate:a,onRemove:i,titleLabel:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.support_link_title"),urlLabel:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.support_link_url")}),title:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.support_links"),addButtonText:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.add_support_link"),allowReorder:!0}),m("div",{className:"Form-group"},m("small",{className:"help-block"},e.translator.trans("wusong8899-custom-footer.admin.edit_footer.support_links_help"))))}}class p extends f{view(){const{image:t,onUpdate:o,showPreview:r=!0}=this.attrs,n=this.attrs.urlLabel||e.translator.trans("wusong8899-custom-footer.admin.edit_footer.image_url"),a=this.attrs.altLabel||e.translator.trans("wusong8899-custom-footer.admin.edit_footer.image_alt");return m("div",{className:"FooterConfig-imageEditor"},m("div",{className:"Form-group"},m("label",null,n),m("input",{className:"FormControl",type:"url",value:t.imageUrl,placeholder:"https://example.com/image.png",onchange:i=>{const s=i.target;o({...t,imageUrl:s.value})}})),m("div",{className:"Form-group"},m("label",null,a),m("input",{className:"FormControl",type:"text",value:t.altText,placeholder:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.image_alt_placeholder"),onchange:i=>{const s=i.target;o({...t,altText:s.value})}})),r&&t.imageUrl&&m("div",{className:"Form-group"},m("label",null,e.translator.trans("wusong8899-custom-footer.admin.edit_footer.preview")),m("div",{className:"FooterConfig-imagePreview"},m("img",{src:t.imageUrl,alt:t.altText,style:{maxWidth:"200px",maxHeight:"100px",objectFit:"contain"},onload:i=>{const s=i.target;s.style.opacity="1"},onerror:i=>{const s=i.target;s.style.display="none",s.parentElement.innerHTML+=`<div class="FooterConfig-imageError">${e.translator.trans("wusong8899-custom-footer.admin.edit_footer.image_load_error")}</div>`},style:{opacity:"0",transition:"opacity 0.3s"}}))))}}class w extends f{view(){const{icons:t,onUpdate:o,sectionTitle:r,helpText:n}=this.attrs;return m("div",{className:"FooterConfig-section FooterConfig-platformIcons"},m(b,{items:t,onUpdate:o,createItem:()=>({title:"",url:"",iconUrl:""}),renderItem:(a,i,s,c)=>m("div",{className:"FooterConfig-platformIcon"},m("div",{className:"Form-group"},m("label",null,e.translator.trans("wusong8899-custom-footer.admin.edit_footer.platform_title")),m("input",{className:"FormControl",type:"text",value:a.title,placeholder:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.platform_title_placeholder"),onchange:l=>{const d=l.target;s({...a,title:d.value})}})),m("div",{className:"Form-group"},m("label",null,e.translator.trans("wusong8899-custom-footer.admin.edit_footer.platform_url")),m("input",{className:"FormControl",type:"url",value:a.url,placeholder:"https://example.com",onchange:l=>{const d=l.target;s({...a,url:d.value})}})),m(p,{image:{imageUrl:a.iconUrl,altText:a.title},onUpdate:l=>s({...a,iconUrl:l.imageUrl}),urlLabel:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.platform_icon_url"),altLabel:"",showPreview:!0}),m("div",{className:"FooterConfig-itemActions"},m("button",{type:"button",className:"Button Button--danger",onclick:c,title:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.remove_platform")},m("i",{className:"fas fa-trash"}),e.translator.trans("wusong8899-custom-footer.admin.edit_footer.remove")))),title:r||e.translator.trans("wusong8899-custom-footer.admin.edit_footer.platform_icons"),addButtonText:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.add_platform_icon"),allowReorder:!0}),n&&m("div",{className:"Form-group"},m("small",{className:"help-block"},n)))}}class F extends f{view(){const{brandAmbassador:t,onUpdate:o}=this.attrs;return m("div",{className:"FooterConfig-section FooterConfig-brandAmbassador"},m("h3",null,e.translator.trans("wusong8899-custom-footer.admin.edit_footer.brand_ambassador")),m("div",{className:"Form-group"},m("label",null,e.translator.trans("wusong8899-custom-footer.admin.edit_footer.ambassador_image")),m(p,{image:{imageUrl:t.imageUrl,altText:"品牌代言人"},onUpdate:r=>o({...t,imageUrl:r.imageUrl}),urlLabel:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.ambassador_image_url"),altLabel:"",showPreview:!0})),m("div",{className:"FooterConfig-socialLinks"},m(b,{items:t.socialLinks,onUpdate:r=>o({...t,socialLinks:r}),createItem:()=>({title:"",url:"",iconUrl:""}),renderItem:(r,n,a,i)=>m("div",{className:"FooterConfig-socialLink"},m("div",{className:"FooterConfig-socialLinkInputs"},m("div",{className:"Form-group"},m("label",null,e.translator.trans("wusong8899-custom-footer.admin.edit_footer.social_title")),m("input",{className:"FormControl",type:"text",value:r.title,placeholder:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.social_title_placeholder"),onchange:s=>{const c=s.target;a({...r,title:c.value})}})),m("div",{className:"Form-group"},m("label",null,e.translator.trans("wusong8899-custom-footer.admin.edit_footer.social_url")),m("input",{className:"FormControl",type:"url",value:r.url,placeholder:"https://example.com",onchange:s=>{const c=s.target;a({...r,url:c.value})}})),m(p,{image:{imageUrl:r.iconUrl,altText:r.title},onUpdate:s=>a({...r,iconUrl:s.imageUrl}),urlLabel:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.social_icon_url"),altLabel:"",showPreview:!0})),m("div",{className:"FooterConfig-itemActions"},m("button",{type:"button",className:"Button Button--danger",onclick:i,title:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.remove_social_link")},m("i",{className:"fas fa-trash"}),e.translator.trans("wusong8899-custom-footer.admin.edit_footer.remove")))),title:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.social_links"),addButtonText:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.add_social_link"),allowReorder:!0})),m("div",{className:"Form-group"},m("small",{className:"help-block"},e.translator.trans("wusong8899-custom-footer.admin.edit_footer.brand_ambassador_help"))))}}class k extends f{view(){const{footerLogo:t,onUpdate:o}=this.attrs;return m("div",{className:"FooterConfig-section FooterConfig-footerLogo"},m("h3",null,e.translator.trans("wusong8899-custom-footer.admin.edit_footer.footer_logo")),m(p,{image:t,onUpdate:o,urlLabel:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.logo_url"),altLabel:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.logo_alt"),showPreview:!0}),m("div",{className:"Form-group"},m("small",{className:"help-block"},e.translator.trans("wusong8899-custom-footer.admin.edit_footer.footer_logo_help"))))}}class L extends f{view(){const{copyrightText:t,onUpdate:o}=this.attrs;return m("div",{className:"FooterConfig-section FooterConfig-copyright"},m("h3",null,e.translator.trans("wusong8899-custom-footer.admin.edit_footer.copyright")),m("div",{className:"Form-group"},m("label",null,e.translator.trans("wusong8899-custom-footer.admin.edit_footer.copyright_text")),m("textarea",{className:"FormControl",rows:"4",value:t,placeholder:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.copyright_placeholder"),onchange:r=>{const n=r.target;o(n.value)}})),m("div",{className:"Form-group"},m("small",{className:"help-block"},e.translator.trans("wusong8899-custom-footer.admin.edit_footer.copyright_help"))))}}class C extends y{constructor(){super(...arguments),this.config=h.getDefaultConfig(),this.activeTab="support-links",this.loading=!0,this.saving=!1}className(){return"EditCustomFooterConfigModal Modal--large"}title(){return e.translator.trans("wusong8899-custom-footer.admin.edit_footer.config_title")}oninit(t){super.oninit(t),this.loadConfig()}async loadConfig(){try{this.loading=!0,this.config=h.loadConfig()}catch(t){console.error("Failed to load footer config:",t),e.alerts.show({type:"error"},e.translator.trans("wusong8899-custom-footer.admin.edit_footer.load_error"))}finally{this.loading=!1,m.redraw()}}form(){return this.loading?[m(N,null)]:[m("div",{className:"FooterConfig-container"},m("div",{className:"FooterConfig-tabs"},m("nav",{className:"FooterConfig-tabNav"},this.getTabs().map(t=>m("button",{key:t.id,type:"button",className:`FooterConfig-tabBtn ${this.activeTab===t.id?"FooterConfig-tabBtn--active":""}`,onclick:()=>this.setActiveTab(t.id)},m("i",{className:`fas ${t.icon}`}),t.title)))),m("div",{className:"FooterConfig-tabContent"},this.renderTabContent()),m("div",{className:"FooterConfig-actions"},m(v,{type:"button",className:"Button Button--danger",onclick:()=>this.resetToDefaults()},m("i",{className:"fas fa-undo"}),e.translator.trans("wusong8899-custom-footer.admin.edit_footer.reset_defaults")),m(v,{type:"button",className:"Button",onclick:()=>this.previewFooter()},m("i",{className:"fas fa-eye"}),e.translator.trans("wusong8899-custom-footer.admin.edit_footer.preview"))))]}getTabs(){return[{id:"support-links",title:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.tab_support_links"),icon:"fa-link"},{id:"platform-icons",title:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.tab_platform_icons"),icon:"fa-icons"},{id:"platform-links",title:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.tab_platform_links"),icon:"fa-external-link-alt"},{id:"brand-ambassador",title:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.tab_brand_ambassador"),icon:"fa-user-tie"},{id:"footer-logo",title:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.tab_footer_logo"),icon:"fa-image"},{id:"copyright",title:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.tab_copyright"),icon:"fa-copyright"}]}setActiveTab(t){this.activeTab=t}renderTabContent(){switch(this.activeTab){case"support-links":return m(U,{links:this.config.supportLinks,onUpdate:t=>this.updateConfig({supportLinks:t})});case"platform-icons":return m(w,{icons:this.config.platformIcons,onUpdate:t=>this.updateConfig({platformIcons:t}),sectionTitle:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.platform_icons"),helpText:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.platform_icons_help")});case"platform-links":return m(w,{icons:this.config.platformLinks,onUpdate:t=>this.updateConfig({platformLinks:t}),sectionTitle:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.platform_links"),helpText:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.platform_links_help")});case"brand-ambassador":return m(F,{brandAmbassador:this.config.brandAmbassador,onUpdate:t=>this.updateConfig({brandAmbassador:t})});case"footer-logo":return m(k,{footerLogo:this.config.footerLogo,onUpdate:t=>this.updateConfig({footerLogo:t})});case"copyright":return m(L,{copyrightText:this.config.copyrightText,onUpdate:t=>this.updateConfig({copyrightText:t})});default:return m("div",null,"Unknown tab")}}updateConfig(t){this.config={...this.config,...t}}resetToDefaults(){confirm(e.translator.trans("wusong8899-custom-footer.admin.edit_footer.reset_confirm"))&&(this.config=h.getDefaultConfig(),m.redraw())}previewFooter(){const t=h.generateFooterHtml(this.config),o=window.open("","_blank","width=800,height=600");o&&(o.document.write(`
        <html>
          <head>
            <title>${e.translator.trans("wusong8899-custom-footer.admin.edit_footer.preview_title")}</title>
            <style>
              body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
              ${this.getPreviewStyles()}
            </style>
          </head>
          <body>
            ${t}
          </body>
        </html>
      `),o.document.close())}getPreviewStyles(){return`
      .custom-footer {
        background: #1b2132;
        color: #fff;
        padding: 20px;
      }
      .footer-section {
        padding: 15px 40px 0;
      }
      .footer-layout-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0 -10px;
      }
      .footer-layout-col {
        flex: 1 1 300px;
        margin-top: 20px;
      }
      .footer-title {
        margin-bottom: 16px;
        font-size: 13px;
        font-weight: 600;
        color: #7d8fd8;
      }
      .link-grid-2col {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px 15px;
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .platform-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .platform-grid a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: #2a3244;
        border-radius: 50%;
      }
      .brand-ambassador {
        display: flex;
        align-items: center;
        gap: 15px;
      }
      .brand-image {
        width: 50%;
      }
      .footer-logo {
        width: 330px;
        margin: 20px 0 17px;
      }
      .footer-text {
        max-width: 700px;
        margin: 0 auto;
        font-size: 12px;
        color: #5d6782;
      }
    `}async onsubmit(t){if(t.preventDefault(),!this.saving){this.saving=!0;try{await h.saveConfig(this.config),e.alerts.show({type:"success"},e.translator.trans("wusong8899-custom-footer.admin.edit_footer.save_success")),this.hide()}catch(o){console.error("Failed to save footer config:",o),e.alerts.show({type:"error"},e.translator.trans("wusong8899-custom-footer.admin.edit_footer.save_error"))}finally{this.saving=!1,m.redraw()}}}submitButton(){return m(v,{type:"submit",className:"Button Button--primary",loading:this.saving,disabled:this.saving},e.translator.trans("core.admin.save_changes"))}}e.initializers.add("wusong8899-custom-footer",()=>{console.log("[wusong8899/flarum-custom-footer] Hello, admin!"),e.extensionData.for("wusong8899-custom-footer").registerSetting({setting:"wusong8899-custom-footer.config_button",type:"button",label:e.translator.trans("wusong8899-custom-footer.admin.edit_footer.config_button"),className:"Button Button--primary",onclick:()=>e.modal.show(C)})})})(flarum.core.compat["admin/app"],flarum.core.compat["admin/components/SettingsModal"],flarum.core.compat["common/components/Button"],flarum.core.compat["common/components/LoadingIndicator"],flarum.core.compat["common/Component"]);
//# sourceMappingURL=admin.js.map

module.exports={};