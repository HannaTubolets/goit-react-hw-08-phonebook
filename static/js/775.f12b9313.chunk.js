"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[775],{6775:function(t,e,n){n.r(e),n.d(e,{default:function(){return q}});var r=n(9439),a=n(2791),o=n(9434),c="NOT_FOUND";var u=function(t,e){return t===e};function i(t,e){var n="object"===typeof e?e:{equalityCheck:e},r=n.equalityCheck,a=void 0===r?u:r,o=n.maxSize,i=void 0===o?1:o,s=n.resultEqualityCheck,l=function(t){return function(e,n){if(null===e||null===n||e.length!==n.length)return!1;for(var r=e.length,a=0;a<r;a++)if(!t(e[a],n[a]))return!1;return!0}}(a),f=1===i?function(t){var e;return{get:function(n){return e&&t(e.key,n)?e.value:c},put:function(t,n){e={key:t,value:n}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(t,e){var n=[];function r(t){var r=n.findIndex((function(n){return e(t,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return c}return{get:r,put:function(e,a){r(e)===c&&(n.unshift({key:e,value:a}),n.length>t&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(i,l);function m(){var e=f.get(arguments);if(e===c){if(e=t.apply(null,arguments),s){var n=f.getEntries(),r=n.find((function(t){return s(t.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return m.clearCache=function(){return f.clear()},m}function s(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"===typeof t}))){var n=e.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return e}function l(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var o,c=0,u={memoizeOptions:void 0},i=r.pop();if("object"===typeof i&&(u=i,i=r.pop()),"function"!==typeof i)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof i+"]");var l=u,f=l.memoizeOptions,m=void 0===f?n:f,p=Array.isArray(m)?m:[m],d=s(r),h=t.apply(void 0,[function(){return c++,i.apply(null,arguments)}].concat(p)),v=t((function(){for(var t=[],e=d.length,n=0;n<e;n++)t.push(d[n].apply(null,arguments));return o=h.apply(null,t)}));return Object.assign(v,{resultFunc:i,memoizedResultFunc:h,dependencies:d,lastResult:function(){return o},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),v};return a}var f=l(i),m=function(t){return t.contacts.items},p=f([m,function(t){return t.filter.value}],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),d=function(t){return t.contacts.isLoading},h=n(208),v="ContactForm_form__dhl+T",_="ContactForm_formName__9bHzl",y="ContactForm_formNumber__UMrmC",b="ContactForm_formLable__p2unz",x="ContactForm_formBtn__qZGY3",g=n(184),j=function(){var t=(0,o.v9)(m),e=(0,o.I0)(),n=(0,a.useState)(""),c=(0,r.Z)(n,2),u=c[0],i=c[1],s=(0,a.useState)(""),l=(0,r.Z)(s,2),f=l[0],p=l[1],d=function(t){var e=t.target,n=e.name,r=e.value;"name"!==n?"number"!==n||p(r):i(r)},j=function(){i(""),p("")};return(0,g.jsxs)("form",{className:v,onSubmit:function(n){if(n.preventDefault(),t.some((function(t){return t.name.toLowerCase().trim()===u.toLowerCase().trim()})))return alert("".concat(u," is already in contacts!")),void j();e((0,h.uK)({name:u,number:f})),j()},children:[(0,g.jsx)("label",{className:b,children:"Name "}),(0,g.jsx)("input",{className:_,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name",value:u,onChange:d,autoFocus:"on"}),(0,g.jsx)("label",{className:b,children:"Number "}),(0,g.jsx)("input",{className:y,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter phone number",value:f,onChange:d}),(0,g.jsx)("button",{className:x,type:"submit",children:"Add contact"})]})},C=n(9782),N={contactItem:"ContactList_contactItem__ppNQ5",btnItemDel:"ContactList_btnItemDel__Ud7TP",contactInfo:"ContactList_contactInfo__Sgq6p",contactList:"ContactList_contactList__UFVCg"},w=function(){var t=(0,o.v9)(d),e=(0,o.v9)(p),n=(0,o.I0)();(0,a.useEffect)((function(){n((0,h.K2)())}),[n]);return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:N.contactListWrapper,children:[t&&(0,g.jsx)(C.a,{}),(0,g.jsx)("ul",{className:N.contactList,children:e.map((function(t){return(0,g.jsxs)("li",{className:N.contactItem,children:[(0,g.jsxs)("span",{className:N.contactInfo,children:[t.name,":"]}),(0,g.jsx)("span",{className:N.contactInfo,children:t.number}),(0,g.jsx)("button",{type:"button",className:N.btnItemDel,onClick:function(){return e=t.id,void n((0,h.GK)(e));var e},children:"Delete"})]},t.id)}))})]})})},F=n(6895),L="Filter_filterName__Y2kKA",k="Filter_filterLabel__+pnW-",I=function(){var t=(0,o.I0)();return(0,g.jsxs)("div",{children:[(0,g.jsx)("label",{className:k,children:"Find contacts by Name"}),(0,g.jsx)("input",{className:L,type:"text",name:"filter",placeholder:"Enter filter",onChange:function(e){return t((0,F.K)(e.target.value))}})]})},A=n(9652),z="ContactPage_contactPageWrapper__7-WhL",E="ContactPage_contactsWrapper__t4Xvt";function q(){return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:z,children:[(0,g.jsx)(A.h,{}),(0,g.jsx)("h1",{children:" Contacts"}),(0,g.jsxs)("div",{className:E,children:[(0,g.jsx)(j,{}),(0,g.jsxs)("div",{children:[(0,g.jsx)(I,{}),(0,g.jsx)(w,{})]})]})]})})}}}]);
//# sourceMappingURL=775.f12b9313.chunk.js.map