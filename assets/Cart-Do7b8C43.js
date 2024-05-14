import{f as i,g as p,b as r,c as a,e,t as n,u as o,F as h,d as u,h as b,w as _,v as x,i as w,j as m}from"./index-DJf25Wcr.js";const v={class:"text-xl mb-4"},y={key:0,class:"flex flex-col"},f={class:"overflow-x-auto sm:-mx-6 lg:-mx-8"},g={class:"inline-block min-w-full py-2 sm:px-6 lg:px-8"},V={class:"overflow-hidden"},k={class:"min-w-full border border-neutral-200 text-center text-sm font-light text-surface"},C=e("thead",{class:"border-b border-neutral-200 font-medium"},[e("tr",null,[e("th",{colspan:"2",scope:"col",class:"border-e border-neutral-200 px-6 py-4"},[e("span",{class:"font-bold"},"Produit")]),e("th",{scope:"col",class:"border-e border-neutral-200 px-6 py-4"},[e("span",{class:"font-bold"},"Prix unitaire")]),e("th",{scope:"col",class:"border-e border-neutral-200 px-6 py-4"},[e("span",{class:"font-bold"},"Quantité")]),e("th",{scope:"col",class:"border-e border-neutral-200 px-6 py-4"},[e("span",{class:"font-bold"},"Total")]),e("th",{scope:"col",class:"px-6 py-4"},[e("span",{class:"font-bold"},"Actions")])])],-1),P={class:"whitespace-nowrap border-e border-neutral-200 px-6 py-4"},M=["src","alt"],z={class:"whitespace-nowrap border-e border-neutral-200 px-6 py-4"},H={class:"whitespace-nowrap border-e border-neutral-200 px-6 py-4"},j={class:"whitespace-nowrap border-e border-neutral-200 px-6 py-4"},B=["onUpdate:modelValue","onChange"],F={class:"whitespace-nowrap border-e border-neutral-200 px-6 py-4"},T={class:"flex justify-center gap-2"},q=e("i",{class:"fa-solid fa-eye"},null,-1),A=["onClick"],L=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16"},[e("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"}),e("path",{d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"})],-1),N=[L],S={class:"border-b border-neutral-200"},D=e("td",{colspan:"4",class:"whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-bold"}," Total à payer ",-1),Q={class:"whitespace-nowrap border-e border-neutral-200 px-6 py-4"},U={class:"flex justify-center items-center"},$=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16"},[e("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"}),e("path",{d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"})],-1),E={key:1},G=e("p",null,"Votre panier est actuellement vide.",-1),I=[G],R={__name:"Cart",setup(J){const s=i();return(K,d)=>{const c=p("router-link");return r(),a("section",null,[e("h3",v," Votre panier ("+n(o(s).nbProducts<=1?o(s).nbProducts+" produit":o(s).nbProducts+" produits")+") ",1),o(s).nbProducts!==0?(r(),a("div",y,[e("div",f,[e("div",g,[e("div",V,[e("table",k,[C,e("tbody",null,[(r(!0),a(h,null,u(o(s).getProducts,t=>(r(),a("tr",{class:"border-b border-neutral-200",key:t.id},[e("td",P,[e("img",{src:t.product.image,class:"w-full h-10 object-cover",alt:t.product.title},null,8,M)]),e("td",z,n(t.product.title),1),e("td",H,n(t.product.price.toFixed(2).replace(".",","))+" € ",1),e("td",j,[_(e("input",{type:"number",min:"1","onUpdate:modelValue":l=>t.quantity=l,onChange:l=>o(s).changeQuantity(t.product,t.quantity),class:"w-16 text-center border border-neutral-300 rounded"},null,40,B),[[x,t.quantity,void 0,{number:!0}]])]),e("td",F,n((t.product.price*t.quantity).toFixed(2).replace(".",","))+" € ",1),e("td",null,[e("div",T,[w(c,{to:{name:"view_product",params:{id:t.product.id}},class:"bg-gray-200 text-black border-2 border-transparent px-4 py-2 rounded block text-center hover:bg-transparent hover:border-gray-200",target:"_blank"},{default:m(()=>[q]),_:2},1032,["to"]),e("button",{onClick:l=>o(s).deleteProduct(t.product),class:"bg-red-500 text-white px-4 py-2 rounded block text-center"},N,8,A)])])]))),128)),e("tr",S,[D,e("td",Q,n(o(s).getTotalProductPrice.toFixed(2).replace(".",","))+" € ",1),e("td",null,[e("div",U,[e("button",{onClick:d[0]||(d[0]=(...t)=>o(s).resetCart&&o(s).resetCart(...t)),class:"flex justify-center items-center gap-2 bg-red-500 text-white px-2 py-2 rounded text-center"},[$,b(" Vider le panier ")])])])])])])])])])])):(r(),a("div",E,I))])}}};export{R as default};
