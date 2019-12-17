(this["webpackJsonpgoit-react-hw-05-budget-planner"]=this["webpackJsonpgoit-react-hw-05-budget-planner"]||[]).push([[0],{28:function(e,n,t){e.exports=t(48)},38:function(e,n,t){},48:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(6),o=t.n(u),l=t(3),i=t(8),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SAVE_BUDGET":return n.payload.budget;default:return e}},p=t(26),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_EXPENSE":return[].concat(Object(p.a)(e),[n.payload.expense]);case"REMOVE_EXPENSE":return e.filter((function(e){return e.id!==n.payload.id}));default:return e}},d=Object(i.b)({budget:c,expenses:s}),m=Object(i.c)(d,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),b=(t(38),function(e){return e.expenses}),f=function(e){return b(e).reduce((function(e,n){return e+Number(n.amount)}),0)},v=t(1),x=t(2),E=t(10),g=t(11),h=t(14),y=t(12),O=t(15);function j(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  width: 100%;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]);return j=function(){return e},e}var S=x.a.form(j()),w=function(e){var n=e.onSubmit,t=void 0===n?function(){return null}:n,a=e.children;return r.a.createElement(S,{onSubmit:t},a)};function _(){var e=Object(v.a)(["\n  display: inline-block;\n  font-size: 20px;\n  color: #171718;\n  cursor: pointer;\n  ","\n"]);return _=function(){return e},e}var C=x.a.label(_(),(function(e){return e.customStyles})),D=function(e){var n=e.children,t=e.customStyles;return r.a.createElement(C,{customStyles:t},n)};function k(){var e=Object(v.a)(["\n  color: #171718;\n  font: inherit;\n  font-size: 1.2rem;\n  padding: 16px;\n  border-radius: 4px;\n  border: 1px solid #bdbdbd;\n  width: 100%;\n  outline: 0;\n\n  &:focus {\n    border: 1px solid #2b32b2;\n  }\n"]);return k=function(){return e},e}var P=x.a.input(k()),N=function(e){var n=e.type,t=void 0===n?" text":n,a=e.value,u=void 0===a?"":a,o=e.onChange,l=void 0===o?function(){return null}:o,i=e.name,c=void 0===i?"":i;return r.a.createElement(P,{type:t,value:u,onChange:l,name:c})};N.defaultProps={type:" text",value:"",name:""};var X=N;function A(){var e=Object(v.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background-color: #3f51b5;\n  border: 0;\n  outline: 0;\n  padding: 8px 24px;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);\n  font: inherit;\n  text-transform: uppercase;\n  user-select: none;\n\n  transition: background-color 200ms ease-in-out;\n\n  &:hover {\n    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);\n    background-color: #303f9f;\n  }\n"]);return A=function(){return e},e}var B=x.a.button(A()),T=function(e){var n=e.type,t=void 0===n?"button":n,a=e.label,u=void 0===a?"":a,o=e.onClick,l=void 0===o?function(){return null}:o;return r.a.createElement(B,{type:t,onClick:l},u)};T.defaultProps={type:" button",onClick:function(){return null}};var V=T,z=function(e){function n(){var e,t;Object(E.a)(this,n);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(t=Object(h.a)(this,(e=Object(y.a)(n)).call.apply(e,[this].concat(r)))).state={budget:0},t.handleChange=function(e){t.setState({budget:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.saveBudget(t.state.budget),t.setState({budget:0})},t}return Object(O.a)(n,e),Object(g.a)(n,[{key:"render",value:function(){var e=this.state.budget;return r.a.createElement(w,{onSubmit:this.handleSubmit},r.a.createElement(D,{customStyles:"\n  margin-bottom: 16px;  \n"},"Enter your total budget",r.a.createElement(X,{type:"number",value:e,onChange:this.handleChange})),r.a.createElement(V,{label:"Save",type:"submit"}))}}]),n}(a.Component),R=Object(l.b)(null,(function(e){return{saveBudget:function(n){return e(function(e){return{type:"SAVE_BUDGET",payload:{budget:e}}}(n))}}}))(z),U=t(24),I=t(13),F=t(25),G=t.n(F),J=function(e){function n(){var e,t;Object(E.a)(this,n);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(t=Object(h.a)(this,(e=Object(y.a)(n)).call.apply(e,[this].concat(r)))).state={name:"",amount:0},t.handleChange=function(e){t.setState(Object(I.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.addExpense(Object(U.a)({},t.state)),t.setState({name:"",amount:0})},t}return Object(O.a)(n,e),Object(g.a)(n,[{key:"render",value:function(){var e=this.state,n=e.name,t=e.amount;return r.a.createElement(w,{onSubmit:this.handleSubmit},r.a.createElement(D,{customStyles:"\n  margin-bottom: 16px;  \n"},"Enter expense name",r.a.createElement(X,{type:"text",name:"name",value:n,onChange:this.handleChange})),r.a.createElement(D,{customStyles:"\n  margin-bottom: 16px;  \n"},"Enter expense amount",r.a.createElement(X,{type:"number",name:"amount",value:t,onChange:this.handleChange})),r.a.createElement(V,{label:"Add",type:"submit"}))}}]),n}(a.Component),L=Object(l.b)(null,(function(e){return{addExpense:function(n){return e(function(e){var n=e.name,t=e.amount;return{type:"ADD_EXPENSE",payload:{expense:{id:G.a.generate(),name:n,amount:Number(t)}}}}(n))}}}))(J);function M(){var e=Object(v.a)(["\n  border-collapse: collapse;\n  text-align: center;\n  width: 100%;\n\n  tr {\n    border-bottom: 1px solid #212121;\n  }\n\n  td,\n  th {\n    padding-top: 8px;\n    padding-bottom: 8px;\n  }\n"]);return M=function(){return e},e}var $=x.a.table(M()),q=function(e){var n=e.expenses,t=void 0===n?[]:n,a=e.removeExpense;return r.a.createElement($,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Expense name"),r.a.createElement("th",null,"Expense amount"),r.a.createElement("th",null))),r.a.createElement("tbody",null,t.map((function(e){var n=e.id,t=e.name,u=e.amount;return r.a.createElement("tr",{key:n},r.a.createElement("td",null,t),r.a.createElement("td",null,u),r.a.createElement("td",null,r.a.createElement(V,{label:"Delete",onClick:function(){return a(n)}})))}))))},H=Object(l.b)((function(e){return{expenses:b(e)}}),(function(e){return{removeExpense:function(n){return e(function(e){return{type:"REMOVE_EXPENSE",payload:{id:e}}}(n))}}}))(q),K=function(e){return e.budget},Q=K,W=function(e){return Number(K(e))-Number(f(e))};function Y(){var e=Object(v.a)(["\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 48px;\n"]);return Y=function(){return e},e}function Z(){var e=Object(v.a)(["\n  margin-top: 0;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 24px;\n"]);return Z=function(){return e},e}function ee(){var e=Object(v.a)(["\n  text-align: center;\n  padding: 8px 24px;\n  color: ",";\n  user-select: none;\n"]);return ee=function(){return e},e}var ne=x.a.div(ee(),(function(e){return e.isPositive?"#388E3C":"#D32F2F"})),te=x.a.p(Z()),ae=x.a.p(Y()),re=function(e){var n=e.label,t=e.value,a=e.isPositive;return r.a.createElement(ne,{isPositive:a},r.a.createElement(te,null,n),r.a.createElement(ae,null,t,"\xa0$"))};re.defaultProps={isPositive:!0};var ue=re;function oe(){var e=Object(v.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return oe=function(){return e},e}var le=x.a.section(oe()),ie=function(e){var n=e.budget,t=e.totalExpenses,a=e.balance;return r.a.createElement(le,null,r.a.createElement(ue,{label:"Budget",value:n,isPositive:!0}),r.a.createElement(ue,{label:"Expenses",value:t}),r.a.createElement(ue,{label:"Balance",value:a,isPositive:a>=0}))},ce=Object(l.b)((function(e){return{budget:Q(e),totalExpenses:f(e),balance:W(e)}}))(ie);function pe(){var e=Object(v.a)(["\n  display: grid;\n  grid-template-columns: 340px 1fr;\n  align-items: flex-start;\n  grid-gap: 24px;\n  max-width: 960px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return pe=function(){return e},e}var se=x.a.div(pe()),de=function(e){var n=e.expenses;return r.a.createElement(se,null,r.a.createElement(R,null),r.a.createElement(ce,null),r.a.createElement(L,null),n.length>0&&r.a.createElement(H,null))},me=Object(l.b)((function(e){return{expenses:b(e)}}))(de);o.a.render(r.a.createElement(l.a,{store:m},r.a.createElement(me,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.30eea073.chunk.js.map