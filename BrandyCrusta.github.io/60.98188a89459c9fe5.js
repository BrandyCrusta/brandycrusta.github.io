"use strict";(self.webpackChunkng_brandycrusta=self.webpackChunkng_brandycrusta||[]).push([[60],{3060:(h,a,n)=>{n.r(a),n.d(a,{RegisterModule:()=>f});var c=n(6814),d=n(3771),i=n(4532),l=n(5359),s=n(2595),u=n(9516),e=n(4946),g=n(5998);const p=[{path:"",component:(()=>{class t{constructor(r){this.authService=r}ngOnInit(){this.authService.authState.subscribe(r=>{this.user=r,this.loggedIn=null!=r}),this.form={fields:{brandycrustaAuth:[{colStyle:"col-12",validators:[{key:"required"},{key:"email"}],formState:"",type:"inputtext",props:{name:"username",label:$localize`:@@Username:Tên đăng nhập`}},{colStyle:"col-12",validators:[{key:"required"},{key:"min",args:[8]},{key:"max",args:[255]}],formState:"",type:"password",props:{name:"password",label:$localize`:@@Password:Mật khẩu`,feedback:!0}},{colStyle:"col-12",validators:[{key:"required"},{key:"min",args:[8]},{key:"max",args:[255]},{key:"match",args:["password","brandycrustaAuth"]}],formState:"",type:"password",props:{name:"passwordConfirmation",label:$localize`:@@passwordConfirmation:Xác nhận mật khẩu`}}]},submit:{button:{colStyle:"col-12 mt-2",props:{label:$localize`:@@Auth.Register:Đăng ký`,class:"w-full"}},api:"/v1/register"}}}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(s.xE))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-register"]],decls:14,vars:1,consts:function(){let o;return o=$localize`:@@App.BrandyCrusta:Brandy Crusta`,[[1,"flex","justify-content-center","align-items-center","h-screen"],[1,"w-30rem"],["header",o],[3,"form"],["align","center"],["i18-value","@@Auth.OrRegisterWith"],[1,"flex","justify-content-center"],["width","400","size","large","shape","square"],[1,"flex","justify-content-center","mt-3","gap-1"],[1,"me-2"],["href","/auth/browser/login",1,"no-underline","p-link","text-primary-700"]]},template:function(r,y){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p-card",2),e._UZ(3,"app-form",3),e.TgZ(4,"p-divider",4)(5,"span",5),e._uU(6,"Ho\u1eb7c \u0111\u0103ng k\xfd v\u1edbi"),e.qZA()(),e.TgZ(7,"div",6),e._UZ(8,"asl-google-signin-button",7),e.qZA(),e.TgZ(9,"div",8)(10,"a",9),e._uU(11,"\u0110\xe3 c\xf3 t\xe0i kho\u1ea3n?"),e.qZA(),e.TgZ(12,"a",10),e._uU(13,"\u0110\u0103ng nh\u1eadp"),e.qZA()()()()()),2&r&&(e.xp6(3),e.Q6J("form",y.form))},dependencies:[g.U,i.Z,l.i,s.TI]}),t})()}];let m=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(p),u.Bz]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,d.e,i.d,l.x,s.IL,m]}),t})()}}]);