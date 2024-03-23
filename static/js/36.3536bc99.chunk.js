"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[36],{336:(t,e,n)=>{n.d(e,{Z:()=>r});const a="AddContactBtn_submitBtn__m1C+L";var s=n(184);const r=t=>{let{text:e}=t;return(0,s.jsx)("button",{className:a,type:"submit",children:e})}},291:(t,e,n)=>{n.d(e,{Z:()=>r});const a="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";var s=n(184);const r=t=>{let{type:e,name:n,pattern:r,title:o}=t;const c=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;)e+=a[63&n[t]];return e}();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("label",{htmlFor:c,children:n}),(0,s.jsx)("input",{type:e,name:n,id:c,pattern:r||null,title:o||null,autoComplete:"on",required:!0})]})}},36:(t,e,n)=>{n.r(e),n.d(e,{default:()=>B});var a=n(689),s=n(627),r=n(979),o=n(291),c=n(336),l=n(420),i=n(553);const d=t=>t.contacts.isLoading,p=t=>t.contacts.error,h=t=>t.contacts.filter,m=t=>t.contacts.items,u=(0,i.P1)([m,h],((t,e)=>t.filter((t=>t.name.toUpperCase().includes(e.toUpperCase()))))),x=()=>({isLoading:(0,l.v9)(d),error:(0,l.v9)(p),contacts:(0,l.v9)(m),filter:(0,l.v9)(h),filteredContacts:(0,l.v9)(u)});var j=n(634),_=n(840),b=n(184);const f=()=>{const t=(0,l.I0)(),{contacts:e}=x();return(0,b.jsxs)("div",{className:r.Z.phonebook,children:[(0,b.jsx)("h2",{children:"Phonebook"}),(0,b.jsxs)("form",{onSubmit:n=>{n.preventDefault();const a=n.target,s=a.elements.name.value.trim().split(" ").map((t=>t.charAt(0).toUpperCase()+t.slice(1,t.length).toLowerCase())).join(" ");const r=(t=>{const e=t.padEnd(10,"9").split("");return e.length>10&&e.splice(10,e.length),e.splice(3,0,"-"),e.splice(7,0,"-"),e.join("")})(a.elements.number.value.trim());(t=>e.find((e=>e.name.toUpperCase()===t.toUpperCase())))(s)?alert('"'.concat(s,'" is already in contacts')):t((0,j.uK)({name:s,number:r}))&&t((0,_.T)("")),a.reset()},children:[(0,b.jsx)(o.Z,{type:"text",name:"name",pattern:"^[a-zA-Z]+(([' \\-][a-zA-Z ])?[a-zA-Z]*)*",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,b.jsx)(o.Z,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,b.jsx)(c.Z,{text:"Add contact"})]})]})},g="ContactsPage_contacts__m3nnh",C="Contacts_contacts__Eg+6p",v=()=>{const t=(0,l.I0)(),{filter:e}=x();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("label",{htmlFor:"filterInputId",children:"Find contacts by name"}),(0,b.jsx)("input",{onChange:e=>{t((0,_.T)(e.target.value))},type:"text",name:"filter",value:e,id:"filterInputId",autoComplete:"off",pattern:"^[a-zA-Z]+(([' \\-][a-zA-Z ])?[a-zA-Z]*)*",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})]})},y="ContactsList_contactsList__7sAfD",A=t=>{let{contact:e}=t;const n=(0,l.I0)();return(0,b.jsxs)("li",{children:[(0,b.jsx)("span",{children:e.name}),": ",(0,b.jsx)("span",{children:e.number}),(0,b.jsx)("button",{onClick:()=>{window.confirm('Delete "'.concat(e.name,'" from yout list ?'))&&n((0,j.GK)(e.id))},type:"button",children:"X"})]})},Z="AbsentContactsNotification_notification__sX203",k=()=>{const t=(0,l.v9)(h);return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("p",{className:Z,children:""===t?"You haven't saved any contacts yet":' " '.concat(t,' " is not saved in your contacts list')})})},w=()=>{const{filteredContacts:t}=x();return 0===t.length?(0,b.jsx)(k,{}):(0,b.jsx)("ul",{className:y,children:t.map((t=>(0,b.jsx)(A,{contact:t},t.id)))})};var F=n(134);const L="Loader_loader__WEzse",N=()=>(0,b.jsx)(F.g4,{visible:!0,height:"80",width:"80",color:"#4fa94d",radius:"9",ariaLabel:"three-dots-loading",wrapperClass:L});var z=n(791);const I="ErrorAlert_Error__rwsaJ",P=t=>{let{error:e}=t;return(0,b.jsx)("p",{className:I,children:e})},U=()=>{const t=(0,l.I0)();(0,z.useEffect)((()=>{t((0,j.yF)())}),[t]);const{isLoading:e,error:n}=x(),a="The contact list cannot be loaded due to the following error: ".concat(n," ");return(0,b.jsxs)("div",{className:C,children:[(0,b.jsx)("h2",{children:"Contacts"}),(0,b.jsx)(v,{}),e&&(0,b.jsx)(N,{}),n&&(0,b.jsx)(P,{error:a}),!e&&!n&&(0,b.jsx)(w,{})]})},E=()=>(0,b.jsxs)("section",{className:g,children:[(0,b.jsx)(f,{}),(0,b.jsx)(U,{})]}),B=()=>{const{isLoggedIn:t}=(0,s.Z)();return t?(0,b.jsx)(E,{}):(0,b.jsx)(a.Fg,{to:"/login"})}},979:(t,e,n)=>{n.d(e,{Z:()=>a});const a={phonebook:"Phonebook_phonebook__A8MMG",authSection:"Phonebook_authSection__5PUBC"}}}]);
//# sourceMappingURL=36.3536bc99.chunk.js.map