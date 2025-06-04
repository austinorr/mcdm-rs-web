const f=`,name,weight,criteria_type,pref_function,q,p
0,cost,2,-1,linear,20000.0,100000
1,treated_area,2,1,linear,3.0,10
2,site_slope,1,-1,ushape,0.03,0
3,site_footprint,1,-1,ushape,500.0,0
4,tss_conc_pct_reduction,1,1,usual,0.0,0
5,site_inequity_factor,2,-1,usual,0.0,0
6,risk_factor,1,-1,usual,0.0,0`;function p(t,a=",",r=!1){return t.slice(r?t.indexOf(`
`)+1:0).split(`
`).map(e=>e.split(a))}const m=p(f,",",!1);function u(t){return t[0].map((a,r)=>t.map((e,o)=>t[o][r]))}function d(t){let a=[...Array(t).keys()].map(i=>i),r=Array.from({length:t},()=>Math.random()*(500-.2)+.2),e=Array.from({length:t},()=>Math.random()*(.2-.005)+.005),o=Array.from({length:t},()=>Math.random()*(5*43560-200)+200),s=[...Array(t).keys()].map(i=>o[i]*(7e5/43560)+(Math.random()*199800+200)),n=Array.from({length:t},()=>Math.random()*86+5),_=Array.from({length:t},()=>Math.random()*2-1),c=Array.from({length:t},()=>Math.floor(Math.random()*3));s[3]="test bad data";let l=[["ix",...a],["cost",...s],["treated_area",...r],["site_slope",...e],["site_footprint",...o],["tss_conc_pct_reduction",...n],["site_inequity_factor",..._],["risk_factor",...c]];return u(l)}export{m as criteria,d as data_long_builder,u as transpose};
