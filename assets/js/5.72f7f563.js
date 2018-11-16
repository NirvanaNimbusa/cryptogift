(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{132:function(e,t,r){"use strict";r(69);t.a={methods:{getParam:function(e){var t={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,function(e,r,a){t[r]=void 0!==a?a:""}),e?t[e]?t[e]:null:t},print:function(){window.print()}}}},196:function(e,t,r){"use strict";r.r(t);r(45),r(123);var a=r(124),i=r(132),s=r(128),n=r(131),o=r(172),l=r.n(o),c=r(126),d={name:"GiftSender",mixins:[i.a,s.a,n.a],components:{GiftBox:c.default},data:function(){return{loading:!0,currentNetwork:null,price:1e-4,trxHash:"",trxLink:"",tokenLink:"",qrcode:"",makingTransaction:!1,encryptionKey:this.randomKey(),gift:{beneficiary:"",content:{sender:"",receiver:"",message:""},date:"",style:0,amount:"",privacyAndTerms:!1},styles:[{value:0,text:"Default"},{value:1,text:"Happy Birthday"},{value:2,text:"Merry Christmas"}]}},computed:{totalPrice:function(){var e=new this.web3.BigNumber(this.price),t=new this.web3.BigNumber(this.gift.amount||0);return e.add(t).valueOf()}},mounted:function(){this.currentNetwork=this.getParam("network")||this.network.default,this.initDapp()},methods:{initDapp:function(){var e=Object(a.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.network.current=this.network.list[this.currentNetwork],e.prev=1,e.next=4,this.initWeb3(this.currentNetwork,!0);case 4:this.initContracts(),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),alert(e.t0),document.location.href=this.$withBase("/");case 11:case"end":return e.stop()}},e,this,[[1,7]])}));return function(){return e.apply(this,arguments)}}(),ready:function(){var e=this;this.$validator.extend("eth_address",{getMessage:function(e){return"Insert a valid Ethereum wallet address."},validate:function(t){return e.web3.isAddress(t)}}),this.loading=!1},createGift:function(){var e=this;this.metamask.installed?this.metamask.netId===this.network.current.id?this.$validator.validateAll().then(function(){var t=Object(a.a)(regeneratorRuntime.mark(function t(r){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=16;break}if(t.prev=1,e.trxHash="",e.trxLink="",e.tokenLink="",e.makingTransaction=!0,e.legacy){t.next=9;break}return t.next=9,e.web3Provider.enable();case 9:setTimeout(function(){var t=e.encrypt(JSON.stringify(e.gift.content),e.encryptionKey),r=e.gift.beneficiary||e.web3.eth.coinbase;e.instances.market.buyToken(r,t,new Date(e.gift.date).getTime()/1e3,e.gift.style,{value:e.web3.toWei(e.totalPrice,"ether"),from:e.web3.eth.coinbase},function(t,a){t?(e.makingTransaction=!1,alert("Some error occurred. Maybe you rejected the transaction or you have MetaMask locked!")):(e.trxHash=a,e.trxLink=e.network.current.etherscanLink+"/tx/"+e.trxHash,e.instances.market.TokenPurchase({purchaser:e.web3.eth.coinbase,beneficiary:r},function(t,r){t?(e.makingTransaction=!1,alert("Some error occurred. Maybe transaction failed for some reasons. Check your transaction id.")):(e.tokenLink=window.location.origin+e.$withBase("/view.html?id=".concat(r.args.tokenId.valueOf())),e.generateQRCode())}))})},500),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),e.makingTransaction=!1,alert("Some error occurred. Maybe you rejected the transaction or you have MetaMask locked!");case 16:case"end":return t.stop()}},t,this,[[1,12]])}));return function(e){return t.apply(this,arguments)}}()):alert("Your MetaMask in on the wrong network. Please switch on ".concat(this.network.current.name," and try again!")):alert("To create a CryptoGift please install MetaMask!")},preview:function(){var e=this;this.$validator.validateAll().then(function(){var t=Object(a.a)(regeneratorRuntime.mark(function t(r){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r&&e.$refs.giftPreview.show();case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())},generateQRCode:function(){var e=this;this.tokenLink&&l.a.toDataURL(this.tokenLink).then(function(t){e.qrcode=t}).catch(function(e){console.error(e)})}}},v=r(4),f=Object(v.a)(d,function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?e._e():r("div",[e.makingTransaction?[r("b-row",[r("b-col",{attrs:{lg:"8","offset-lg":"2"}},[e.tokenLink?r("b-card",{staticClass:"shadow-lg mb-3 border-0 rounded-0",attrs:{"img-src":e.$withBase("assets/images/cryptogift-header.jpg"),title:"View your unique CryptoGift on the Blockchain.","bg-variant":"light"}},[r("b-row",[r("b-col",{staticClass:"mb-2",attrs:{md:"9"}},[r("p",{staticClass:"card-text"},[r("b-button",{attrs:{variant:"outline-success",target:"_blank",href:e.tokenLink}},[e._v(e._s(e.tokenLink))])],1),e._v(" "),r("p",{staticClass:"card-text"},[e._v("\n                                Visit the link above or scan the QR Code."),r("br"),e._v("\n                                Find out who sent it to you and what he wants to say."),r("br"),r("br"),e._v("\n                                Your encryption key: "),r("b-badge",{staticClass:"p-2",attrs:{variant:"info"}},[e._v(e._s(e.encryptionKey))])],1)]),e._v(" "),r("b-col",{staticClass:"mb-2",attrs:{md:"3"}},[e.qrcode?r("b-img",{attrs:{src:e.qrcode,"fluid-grow":""}}):e._e(),e._v(" "),r("b-button",{staticClass:"d-print-none mt-3",attrs:{variant:"link"},on:{click:e.print}},[e._v("Print your Gift")])],1)],1)],1):e._e(),e._v(" "),r("b-alert",{staticClass:"d-print-none",attrs:{show:"",variant:"warning"}},[r("h6",[e._v("Your encryption key is "),r("b",[e._v(e._s(e.encryptionKey))])]),e._v(" "),r("b",[e._v("Do not lose it!")]),e._v(" It cannot be recovered if you lose it. It allows receiver to decrypt your message. You "),r("b",[e._v("must")]),e._v(" copy and share it with receiver.\n                ")]),e._v(" "),e.trxHash?[r("b-alert",{staticClass:"d-print-none",attrs:{show:"",variant:"success"}},[r("h4",{staticClass:"alert-heading"},[e._v("Well! Transaction done!")]),e._v(" "),r("div",{staticClass:"text-truncate"},[e._v("\n                            TxHash "),r("b-link",{attrs:{href:e.trxLink,target:"_blank"}},[e._v(e._s(e.trxHash))])],1)]),e._v(" "),e.tokenLink?e._e():r("b-alert",{attrs:{show:"",variant:"light"}},[r("h4",{staticClass:"alert-heading"},[e._v("Retrieving CryptoGift. Do not refresh the page.")]),e._v(" "),r("ui--loader",{attrs:{loading:!0}})],1)]:r("b-alert",{attrs:{show:"",variant:"light"}},[r("h4",{staticClass:"alert-heading"},[e._v("Making transaction. Do not refresh the page.")]),e._v(" "),r("ui--loader",{attrs:{loading:!0}})],1)],2)],1)]:[r("b-form",{on:{submit:function(t){return t.preventDefault(),e.createGift(t)}}},[r("fieldset",{attrs:{disabled:!e.metamask.installed}},[r("b-row",[r("b-col",{staticClass:"mb-4",attrs:{lg:"7"}},[r("b-card",{staticClass:"shadow-lg",attrs:{title:"Start building your CryptoGift","bg-variant":"light"}},[r("b-form-group",{attrs:{id:"gift-sender-group",label:"Sender Name:","label-for":"gift-sender",description:"The name of your gift sender"}},[r("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.errors.has("gift-sender")},attrs:{id:"gift-sender",name:"gift-sender",type:"text","data-vv-as":"Sender",placeholder:"Enter sender name"},model:{value:e.gift.content.sender,callback:function(t){e.$set(e.gift.content,"sender",t)},expression:"gift.content.sender"}}),e._v(" "),r("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("gift-sender"),expression:"errors.has('gift-sender')"}],staticClass:"text-danger"},[e._v("\n                                    "+e._s(e.errors.first("gift-sender"))+"\n                                ")])],1),e._v(" "),r("b-form-group",{attrs:{id:"gift-receiver-group",label:"Receiver Name:","label-for":"gift-receiver",description:"The name of your gift receiver"}},[r("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.errors.has("gift-receiver")},attrs:{id:"gift-receiver",name:"gift-receiver",type:"text","data-vv-as":"Receiver",placeholder:"Enter receiver name"},model:{value:e.gift.content.receiver,callback:function(t){e.$set(e.gift.content,"receiver",t)},expression:"gift.content.receiver"}}),e._v(" "),r("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("gift-receiver"),expression:"errors.has('gift-receiver')"}],staticClass:"text-danger"},[e._v("\n                                    "+e._s(e.errors.first("gift-receiver"))+"\n                                ")])],1),e._v(" "),r("b-form-group",{attrs:{id:"gift-date-group",label:"Date:","label-for":"gift-date",description:"The date of your gift"}},[r("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.errors.has("gift-date")},attrs:{id:"gift-date",name:"gift-date",type:"datetime-local","data-vv-as":"Date"},model:{value:e.gift.date,callback:function(t){e.$set(e.gift,"date",t)},expression:"gift.date"}}),e._v(" "),r("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("gift-date"),expression:"errors.has('gift-date')"}],staticClass:"text-danger"},[e._v("\n                                    "+e._s(e.errors.first("gift-date"))+"\n                                ")])],1),e._v(" "),r("b-form-group",{attrs:{id:"gift-message-group",label:"Message:","label-for":"gift-message",description:"The message you want to send"}},[r("b-form-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.errors.has("gift-message")},attrs:{id:"gift-message",name:"gift-message","data-vv-as":"Message",placeholder:"Enter your message",rows:7,"no-resize":!0},model:{value:e.gift.content.message,callback:function(t){e.$set(e.gift.content,"message",t)},expression:"gift.content.message"}}),e._v(" "),r("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("gift-message"),expression:"errors.has('gift-message')"}],staticClass:"text-danger"},[e._v("\n                                    "+e._s(e.errors.first("gift-message"))+"\n                                ")])],1),e._v(" "),r("b-form-group",[r("div",{staticClass:"form-check"},[r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.gift.privacyAndTerms,expression:"gift.privacyAndTerms"}],staticClass:"form-check-input",class:{"is-invalid":e.errors.has("gift-privacy-and-terms")},attrs:{type:"checkbox",id:"gift-privacy-and-terms",name:"gift-privacy-and-terms",value:"1"},domProps:{checked:Array.isArray(e.gift.privacyAndTerms)?e._i(e.gift.privacyAndTerms,"1")>-1:e.gift.privacyAndTerms},on:{change:function(t){var r=e.gift.privacyAndTerms,a=t.target,i=!!a.checked;if(Array.isArray(r)){var s=e._i(r,"1");a.checked?s<0&&e.$set(e.gift,"privacyAndTerms",r.concat(["1"])):s>-1&&e.$set(e.gift,"privacyAndTerms",r.slice(0,s).concat(r.slice(s+1)))}else e.$set(e.gift,"privacyAndTerms",i)}}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"gift-privacy-and-terms"}},[e._v("\n                                        I've read and agreed the CryptoGift "),r("b-link",{attrs:{target:"_blank",href:e.$withBase("/terms-of-use.html")}},[e._v("Terms of use")]),e._v(" and "),r("b-link",{attrs:{target:"_blank",href:e.$withBase("/privacy-policy.html")}},[e._v("Privacy policy")]),e._v(".\n                                    ")],1)])])],1)],1),e._v(" "),r("b-col",{staticClass:"mb-4",attrs:{lg:"5"}},[r("b-card",{staticClass:"shadow-lg",attrs:{"bg-variant":"light"}},[e.metamask.installed?e.metamask.netId!==e.network.current.id?r("b-alert",{attrs:{show:"",variant:"warning"}},[e._v("\n                                You are on the wrong Network."),r("br"),e._v("Please switch your MetaMask on "),r("b",[e._v(e._s(e.network.current.name))]),e._v(".\n                            ")]):e._e():r("b-alert",{attrs:{show:"",variant:"warning"}},[e._v("\n                                You need "),r("b-link",{attrs:{href:"https://metamask.io/",target:"_blank"}},[e._v("MetaMask")]),e._v(" extension.\n                            ")],1),e._v(" "),r("b-form-group",{attrs:{id:"gift-beneficiary-group",label:"Receiver Ethereum Address:","label-for":"gift-beneficiary",description:"The Ethereum address of your receiver"}},[r("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|eth_address",expression:"'required|eth_address'"}],class:{"is-invalid":e.errors.has("gift-beneficiary")},attrs:{id:"gift-beneficiary",name:"gift-beneficiary",type:"text","data-vv-as":"Wallet Address",placeholder:"0x12312312..."},model:{value:e.gift.beneficiary,callback:function(t){e.$set(e.gift,"beneficiary",t)},expression:"gift.beneficiary"}}),e._v(" "),r("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("gift-beneficiary"),expression:"errors.has('gift-beneficiary')"}],staticClass:"text-danger"},[e._v("\n                                    "+e._s(e.errors.first("gift-beneficiary"))+"\n                                ")])],1),e._v(" "),r("b-form-group",{attrs:{id:"gift-value-group",label:"Gift Value:","label-for":"gift-value",description:"The value of your gift"}},[r("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,decimal:4},expression:"{ required: true, decimal: 4 }"}],class:{"is-invalid":e.errors.has("gift-value")},attrs:{id:"gift-value",name:"gift-value",step:"any",type:"number",min:"0","data-vv-as":"Value",placeholder:"Enter gift value"},model:{value:e.gift.amount,callback:function(t){e.$set(e.gift,"amount",t)},expression:"gift.amount"}}),e._v(" "),r("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("gift-value"),expression:"errors.has('gift-value')"}],staticClass:"text-danger"},[e._v("\n                                    "+e._s(e.errors.first("gift-value"))+"\n                                ")])],1),e._v(" "),r("b-form-group",{attrs:{id:"gift-encryption-key-group",label:"Encryption Key:","label-for":"gift-encryption-key",description:"Insert the Encryption Key"}},[r("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha_dash",expression:"'required|alpha_dash'"}],class:{"is-invalid":e.errors.has("gift-encryption-key")},attrs:{id:"gift-encryption-key",name:"gift-encryption-key",type:"text","data-vv-as":"Encryption Key"},model:{value:e.encryptionKey,callback:function(t){e.encryptionKey=t},expression:"encryptionKey"}}),e._v(" "),r("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("gift-encryption-key"),expression:"errors.has('gift-encryption-key')"}],staticClass:"text-danger"},[e._v("\n                                    "+e._s(e.errors.first("gift-encryption-key"))+"\n                                ")])],1),e._v(" "),r("b-form-group",{attrs:{id:"gift-style-group",label:"Style:","label-for":"gift-style",description:"The style of your gift"}},[r("b-form-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.errors.has("gift-style")},attrs:{id:"gift-style",name:"gift-style",options:e.styles,"data-vv-as":"Style"},model:{value:e.gift.style,callback:function(t){e.$set(e.gift,"style",t)},expression:"gift.style"}}),e._v(" "),r("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("gift-style"),expression:"errors.has('gift-style')"}],staticClass:"text-danger"},[e._v("\n                                    "+e._s(e.errors.first("gift-style"))+"\n                                ")])],1),e._v(" "),r("b-list-group",{staticClass:"mb-4"},[r("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center",attrs:{variant:"light"}},[e._v("\n                                    CryptoGift Value "),r("b-badge",{attrs:{variant:"light",pill:""}},[e._v(e._s(e.gift.amount||0)+" ETH")])],1),e._v(" "),r("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center",attrs:{variant:"light"}},[e._v("\n                                    CryptoGift Cost "),r("b-badge",{attrs:{variant:"light",pill:""}},[e._v(e._s(e.price)+" ETH")])],1),e._v(" "),r("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                                    Total "),r("b-badge",{attrs:{variant:"light",pill:""}},[e._v(e._s(e.totalPrice)+" ETH")])],1)],1),e._v(" "),r("b-button",{attrs:{type:"submit",variant:"outline-success",size:"lg"}},[e._v("Send your CryptoGift")]),e._v(" "),r("b-button",{attrs:{variant:"outline-info",size:"lg"},on:{click:e.preview}},[e._v("Preview")])],1)],1)],1)],1)])],e._v(" "),r("b-modal",{ref:"giftPreview",attrs:{"hide-footer":"","body-bg-variant":"warning",size:"lg",title:"CryptoGift Preview"}},[r("gift-box",{attrs:{gift:e.gift,network:e.network.current}})],1)],2)},[],!1,null,null,null);f.options.__file="GiftSender.vue";t.default=f.exports}}]);