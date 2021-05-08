(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,function(e,t,n){e.exports=n(43)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),i=n.n(c),o=(n(32),n(20)),s=n(21),l=n(25),u=n(22),m=n(26),d=n(11),p=n(6),f=n(1),g=(n(33),function(){return r.a.createElement("div",{className:"NavBar"},r.a.createElement("a",{className:"nav home",href:"/"},"Home"),r.a.createElement("div",{className:"page-listing"},"Find recipes for:"),r.a.createElement("a",{className:"nav for",href:"/for-a-dish"},"a dish"),r.a.createElement("a",{className:"nav for",href:"/for-unique-dishes"},"unique dishes"),r.a.createElement("a",{className:"nav for",href:"/for-lazy-cooking"},"lazy cooking"),r.a.createElement("a",{className:"nav for",href:"/for-restrictions-and-needs"},"restrictions & needs"))}),h={title:"No. of recipes",options:[10,20,30]},E={title:"Sort by",rating:"Ratings",cookingTime:"Cooking time",ingredientsCount:"No. of ingredients",includedIngredientsCount:"No. of input ingredients"};E.options=Object.keys(E).map((function(e){return E[e]})),E.options=E.options.filter((function(e){return e!==E.title}));var v={title:"Sort by",rating:"Ratings",cookingTime:"Cooking time",ingredientsCount:"No. of ingredients"};v.options=Object.keys(v).map((function(e){return v[e]})),v.options=v.options.filter((function(e){return e!==v.title}));var N={title:"Restriction",nut:"Nut",meat:"Meat"};N.options=Object.keys(N).map((function(e){return N[e]})),N.options=N.options.filter((function(e){return e!==N.title}));var b=function(e){return e===v.title?"name":e===v.rating?"ratings":e===v.cookingTime?"minutes":e===v.ingredientsCount?"ingredientsCount":e===E.includedIngredientsCount?"includedIngredientsCount":e===N.nut?"nut":e===N.meat?"meat":void 0},j=function(e){return e.split(",").map((function(e){return e.trim()})).filter((function(e){return""!==e}))},O=function(e){return e.split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")},S=(n(34),function(){Object(p.f)();var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),o=Object(f.a)(i,2),s=o[0],l=o[1];return Object(a.useEffect)((function(){!function(){var e=JSON.parse(localStorage.getItem("topRecipes"));e&&(e.forEach((function(e){return console.log(e)})),c(e)),fetch("/top-recipes").then((function(e){return e.json()})).then((function(e){console.log(e),c(e),localStorage.setItem("topRecipes",JSON.stringify(e))})).catch((function(e){return console.log(e),alert("Something went wrong while fetching result")}))}(),fetch("/random-recipe").then((function(e){return e.json()})).then((function(e){console.log(e),l(e[0])})).catch((function(e){console.log(e),alert("Something went wrong when getting random recipe for 'Our picks'")}))}),[]),r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"title"},"Find me recipes"),r.a.createElement("div",{className:"recipes"},r.a.createElement("div",{className:"top-recipes container"},r.a.createElement("div",{className:"column-header"},"Top rated recipes"),n.map((function(e,t){return r.a.createElement("div",{className:"recipe",key:t},r.a.createElement("a",{href:"https://www.food.com/recipe/".concat(e.id)},O(e.name)))}))),r.a.createElement("div",{className:"random-recipe container"},r.a.createElement("div",{className:"column-header"},"Our pick"),r.a.createElement("div",{className:"recipe"},s?r.a.createElement("a",{href:"https://www.food.com/recipe/".concat(s.id)},O(s.name)):r.a.createElement(r.a.Fragment,null)))))}),w=(n(40),function(e){var t=e.name,n=e.onSelectionChange,a=e.title,c=e.options;return r.a.createElement("div",{className:"input-container ".concat(t)},r.a.createElement("div",{className:"input-title"},a),r.a.createElement("div",{className:"select"},r.a.createElement("select",{className:"input dropdown",onChange:function(e){return n(e.target.value)}},c.map((function(e,n){return r.a.createElement("option",{className:"dropdown-option",key:"".concat(t,"-").concat(n)},e)})))))}),C=(n(41),function(e){var t=e.name,n=e.onInputChange,a=e.title,c=e.placeholder;return r.a.createElement("div",{className:"input-container ".concat(t)},r.a.createElement("div",{className:"input-title"},a),r.a.createElement("input",{className:"input-text",type:"text",placeholder:c,onChange:function(e){return n(e.target.value)}}))}),k=(n(42),function(e){var t=e.recipe;return r.a.createElement("div",{className:"RecipeCard"},r.a.createElement("div",{className:"name"},r.a.createElement("a",{href:"https://www.food.com/recipe/".concat(t.id)},O(t.name))),t.minutes?r.a.createElement("div",{className:"cooking-time"},"Cooking time: ",t.minutes," min"):r.a.createElement(r.a.Fragment,null),t.ingredientsCount?r.a.createElement("div",{className:"ingredient-count"},"No. of ingredients: ",t.ingredientsCount):r.a.createElement(r.a.Fragment,null),t.includedIngredientsCount?r.a.createElement("div",{className:"ingredient-count"},"No. of input ingredients: ",t.includedIngredientsCount):r.a.createElement(r.a.Fragment,null),t.stepCount?r.a.createElement("div",{className:"step-count"},"Number of steps: ",t.stepCount):r.a.createElement(r.a.Fragment,null),t.ratings?r.a.createElement("div",{className:"rating"},"Ratings: ",String(t.ratings).substr(0,3),"/5"):r.a.createElement(r.a.Fragment,null),t.ratingsCount?r.a.createElement("div",{className:"rating-count"},"Number of ratings: ",t.ratingsCount," min"):r.a.createElement(r.a.Fragment,null),t.totalPDV?r.a.createElement("div",{className:"total-pdv"},"Total PDV: ",t.totalPDV):r.a.createElement(r.a.Fragment,null))}),y=(n(10),function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(h.options[0]),o=Object(f.a)(i,2),s=o[0],l=o[1],u=Object(a.useState)(v.options[0]),m=Object(f.a)(u,2),d=m[0],p=m[1],g=Object(a.useState)([]),E=Object(f.a)(g,2),N=E[0],j=E[1];return r.a.createElement("div",{className:"ForDish"},r.a.createElement("div",{className:"title"}," Recipes for a dish"),r.a.createElement("div",{className:"inputs"},r.a.createElement(C,{name:"dish-name",title:"Dish name",onInputChange:c,placeholder:"Enter the dish name here..."}),r.a.createElement(w,{name:"recipe-count",title:h.title,onSelectionChange:l,options:h.options}),r.a.createElement(w,{name:"sort-by",title:v.title,onSelectionChange:p,options:v.options}),r.a.createElement("div",{className:"button",onClick:function(e){fetch("/with-name?"+new URLSearchParams({recipeCount:s,sortBy:b(d),name:n})).then((function(e){return e.json()})).then((function(e){console.log(e),j(e)})).catch((function(e){return console.log(e),alert("Something went wrong while fetching result")}))}},"Find")),r.a.createElement("div",{className:"results-container"},N.map((function(e,t){return r.a.createElement("div",{key:"recipe-".concat(t)},r.a.createElement(k,{recipe:e}))}))))}),I=(n(16),function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(h.options[0]),o=Object(f.a)(i,2),s=o[0],l=o[1],u=Object(a.useState)(E.options[0]),m=Object(f.a)(u,2),d=m[0],p=m[1],g=Object(a.useState)([]),v=Object(f.a)(g,2),N=v[0],O=v[1];return r.a.createElement("div",{className:"ForLeftover"},r.a.createElement("div",{className:"inputs"},r.a.createElement(C,{name:"ingredients",title:"Ingredients",onInputChange:c,placeholder:"Input up to 3 ingredients and separate them by comma..."}),r.a.createElement(w,{name:"recipe-count",title:h.title,onSelectionChange:l,options:h.options}),r.a.createElement(w,{name:"sort-by",title:E.title,onSelectionChange:p,options:E.options}),r.a.createElement("div",{className:"button",onClick:function(e){return function(){var e=j(n),t=new URLSearchParams;e.forEach((function(e){return t.append("ingredients[]",e)})),t.append("recipeCount",s),t.append("sortBy",b(d)),console.log(d),fetch("/with-ingredients?"+t).then((function(e){return e.json()})).then((function(e){console.log(e),O(e)})).catch((function(e){return console.log(e),alert("Something went wrong while fetching result")}))}()}},"Find")),r.a.createElement("div",{className:"results-container"},N.map((function(e,t){return r.a.createElement("div",{key:"recipe-".concat(t)},r.a.createElement(k,{recipe:e}))}))))}),F=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("timePDV"));e?c(e):fetch("/lowest-time-pdv",{method:"GET"}).then((function(e){return e.json()})).then((function(e){c(e),localStorage.setItem("timePDV",JSON.stringify(e))})).catch((function(e){return console.log(e),alert("Something went wrong while fetching result")}))}),[]),r.a.createElement("div",{className:"ForTimePDV"},r.a.createElement("div",{className:"results-container"},n.map((function(e,t){return r.a.createElement("div",{key:"recipe-".concat(t)},r.a.createElement(k,{recipe:e}),r.a.createElement("br",null))}))))},R=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){fetch("/lowest-time-steps",{method:"GET"}).then((function(e){return e.json()})).then((function(e){c(e)})).catch((function(e){return console.log(e),alert("Something went wrong while fetching result")}))}),[]),r.a.createElement("div",{className:"ForTimeSteps"},r.a.createElement("div",{className:"results-container"},n.map((function(e,t){return r.a.createElement("div",{key:"recipe-".concat(t)},r.a.createElement(k,{name:e.name,cookingTime:e.time,ingredientCount:e.ingredientCount,stepCount:e.stepCount,rating:e.rating,ratingCount:e.ratingCount}),r.a.createElement("br",null))}))))},P=(n(17),function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("commonIngredients"));e?(console.log(e),c(e)):fetch("/common-ingredients").then((function(e){return e.json()})).then((function(e){localStorage.setItem("commonIngredients",JSON.stringify(e)),c(e),console.log(e)}))}),[]),r.a.createElement("div",{className:"results-container"},n.map((function(e,t){return r.a.createElement("div",{className:"ingredient-card",key:"common-ingredient-".concat(t)},r.a.createElement("div",{className:"name"},O(e.name)),r.a.createElement("div",{className:"recipe-count"},"No. of recipes using this: ",e.count))})))}),x=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(h.options[0]),o=Object(f.a)(i,2),s=o[0],l=o[1],u=Object(a.useState)(v.options[0]),m=Object(f.a)(u,2),d=m[0],p=m[1];return r.a.createElement("div",{className:"FewIngredients"},r.a.createElement("div",{className:"inputs"},r.a.createElement(w,{name:"recipe-count",title:h.title,onSelectionChange:l,options:h.options}),r.a.createElement(w,{name:"sort-by",title:v.title,onSelectionChange:p,options:v.options}),r.a.createElement("div",{className:"button",onClick:function(e){fetch("/with-few-ingredients?"+new URLSearchParams({recipeCount:s,sortBy:b(d)})).then((function(e){return e.json()})).then((function(e){c(e)}))}},"Find")),r.a.createElement("div",{className:"results-container"},n.map((function(e,t){return r.a.createElement(k,{key:"recipe-".concat(t),recipe:e})}))))},D=function(){var e=0,t=1,n=2,c=3,i=4,o=5,s=Object(a.useState)(e),l=Object(f.a)(s,2),u=l[0],m=l[1];return r.a.createElement("div",{className:"ForLazyCooking"},r.a.createElement("div",{className:"title"},"Recipes for lazy cooking"),r.a.createElement("div",{className:"options"},r.a.createElement("div",{className:"for leftover",onClick:function(e){return m(t)}},"Use leftover ingredients"),r.a.createElement("div",{className:"for time-pdf",onClick:function(e){return m(n)}},"10 recipes for lowest cooking time & PDV"),r.a.createElement("div",{className:"for common-ingredients",onClick:function(e){return m(i)}},"10 most common ingredients"),r.a.createElement("div",{className:"for few-ingredients",onClick:function(e){return m(o)}},"Use at most 5 ingredients")),function(){switch(u){default:case e:return r.a.createElement(r.a.Fragment,null);case t:return r.a.createElement(I,null);case n:return r.a.createElement(F,null);case c:return r.a.createElement(R,null);case i:return r.a.createElement(P,null);case o:return r.a.createElement(x,null)}}())},U=function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(h.options[0]),o=Object(f.a)(i,2),s=o[0],l=o[1],u=Object(a.useState)(v.options[0]),m=Object(f.a)(u,2),d=m[0],p=m[1],g=Object(a.useState)([]),E=Object(f.a)(g,2),N=E[0],j=E[1];return r.a.createElement("div",{className:"ExcludeIngredients"},r.a.createElement("div",{className:"inputs"},r.a.createElement(C,{name:"ingredients",title:"Ingredients to exclude",onInputChange:c,placeholder:"Input up to 3 ingredients and separate them by comma..."}),r.a.createElement(w,{name:"recipe-count",title:h.title,onSelectionChange:l,options:h.options}),r.a.createElement(w,{name:"sort-by",title:v.title,onSelectionChange:p,options:v.options}),r.a.createElement("div",{className:"button",onClick:function(e){return function(){var e=function(e){return e.split(",").map((function(e){return e.trim()})).filter((function(e){return""!==e}))}(n),t=new URLSearchParams;e.forEach((function(e){return t.append("ingredients[]",e)})),t.append("recipeCount",s),t.append("sortBy",b(d)),fetch("/without-ingredients?"+t).then((function(e){return e.json()})).then((function(e){j(e)})).catch((function(e){return console.log(e),alert("Something went wrong while fetching result")}))}()}},"Find")),r.a.createElement("div",{className:"results-container"},N.map((function(e,t){return r.a.createElement("div",{key:"recipe-".concat(t)},r.a.createElement(k,{recipe:e}))}))))},J=(n(18),function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(h.options[0]),o=Object(f.a)(i,2),s=o[0],l=o[1],u=Object(a.useState)(v.options[0]),m=Object(f.a)(u,2),d=m[0],p=m[1],g=Object(a.useState)([]),E=Object(f.a)(g,2),N=E[0],O=E[1];return r.a.createElement("div",{className:"NutritionalNeeds"},r.a.createElement("div",{className:"inputs"},r.a.createElement(C,{name:"nutritions",title:"Max amount of sugar, sodium, protein, saturated fat, and total fat to include",onInputChange:c,placeholder:"Ex: 20, 10, 40, 5, 10 for sugar, sodium, protein, saturated fat and total fat respectively..."}),r.a.createElement(w,{name:"recipe-count",title:h.title,onSelectionChange:l,options:h.options}),r.a.createElement(w,{name:"sort-by",title:v.title,onSelectionChange:p,options:v.options}),r.a.createElement("div",{className:"button",onClick:function(e){return function(){var e=j(n),t=new URLSearchParams;e.forEach((function(e){return t.append("nutritions[]",e)})),t.append("recipeCount",s),console.log(d),console.log(b(d)),t.append("sortBy",b(d)),fetch("/nutritions?"+t).then((function(e){return e.json()})).then((function(e){O(e)})).catch((function(e){return console.log(e),alert("Something went wrong while fetching result")}))}()}},"Find")),r.a.createElement("div",{className:"results-container"},N.map((function(e,t){return r.a.createElement("div",{key:"recipe-".concat(t)},r.a.createElement(k,{recipe:e}),r.a.createElement("br",null))}))))}),T=function(){var e=Object(a.useState)(N.options[0]),t=Object(f.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(h.options[0]),o=Object(f.a)(i,2),s=o[0],l=o[1],u=Object(a.useState)(v.options[0]),m=Object(f.a)(u,2),d=m[0],p=m[1],g=Object(a.useState)([]),E=Object(f.a)(g,2),j=E[0],O=E[1];return r.a.createElement("div",{className:"ExcludeIngredients"},r.a.createElement("div",{className:"inputs"},r.a.createElement(w,{name:"restriction",title:"Restriction (nut or meat)",onSelectionChange:c,options:N.options}),r.a.createElement(w,{name:"recipe-count",title:h.title,onSelectionChange:l,options:h.options}),r.a.createElement(w,{name:"sort-by",title:v.title,onSelectionChange:p,options:v.options}),r.a.createElement("div",{className:"button",onClick:function(e){return function(){var e=new URLSearchParams;e.append("restriction",b(n)),e.append("recipeCount",s),e.append("sortBy",b(d)),fetch("/restriction?"+e).then((function(e){return e.json()})).then((function(e){O(e)})).catch((function(e){return console.log(e),alert("Something went wrong while fetching result")}))}()}},"Find")),r.a.createElement("div",{className:"results-container"},j.map((function(e,t){return r.a.createElement("div",{key:"recipe-".concat(t)}," ",r.a.createElement(k,{recipe:e}))}))))},q=function(){var e=0,t=1,n=2,c=3,i=Object(a.useState)(e),o=Object(f.a)(i,2),s=o[0],l=o[1];return r.a.createElement("div",{className:"ForRestrictionsNeeds"},r.a.createElement("div",{className:"title"}," Recipes for restrictions & needs"),r.a.createElement("div",{className:"options"},r.a.createElement("div",{className:"for exclude-ingredients",onClick:function(e){return l(t)}},"Exclude ingredients"),r.a.createElement("div",{className:"for nutritional-needs",onClick:function(e){return l(n)}},"Nutritional needs"),r.a.createElement("div",{className:"for restriction-and-needs",onClick:function(e){return l(c)}},"Restriction & needs")),function(){switch(s){default:case e:return r.a.createElement(r.a.Fragment,null);case t:return r.a.createElement(U,null);case n:return r.a.createElement(J,null);case c:return r.a.createElement(T,null)}}())},B=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("uniqueRecipes"));e?c(e):fetch("/unique").then((function(e){return e.json()})).then((function(e){c(e),localStorage.setItem("uniqueRecipes",JSON.stringify(e))})).catch((function(e){return console.log(e),alert("Something went wrong while fetching result")}))}),[]),r.a.createElement("div",{className:"UniqueDishes"},r.a.createElement("div",{className:"title"},"Unique Dishes"),r.a.createElement("div",{className:"description"}," Recipes that have an above average number of ratings with at least 1 and at most 3 ingredients that recipe has that are not present in any other recipe in the database. For average number of ratings, we exclude ratings with less than 25 ratings in order to remove outliers and find unique recipes that have been reviewed by more users."),r.a.createElement("div",{className:"results-container"},n.map((function(e,t){return r.a.createElement("div",{key:"recipe-".concat(t)},r.a.createElement(k,{recipe:e}))}))))},L=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(d.a,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(){return r.a.createElement(S,null)}}),r.a.createElement(p.a,{path:"/home",render:function(){return r.a.createElement(S,null)}}),r.a.createElement(p.a,{path:"/for-a-dish",render:function(){return r.a.createElement(y,null)}}),r.a.createElement(p.a,{path:"/for-lazy-cooking",render:function(){return r.a.createElement(D,null)}}),r.a.createElement(p.a,{path:"/for-restrictions-and-needs",render:function(){return r.a.createElement(q,null)}}),r.a.createElement(p.a,{path:"/for-unique-dishes",render:function(){return r.a.createElement(B,null)}}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[27,1,2]]]);
//# sourceMappingURL=main.441d1555.chunk.js.map