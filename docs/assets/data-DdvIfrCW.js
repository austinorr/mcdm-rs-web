var e=`,name,weight,criteria_type,pref_function,q,p
0,cost,2,-1,linear,20000.0,100000
1,treated_area,2,1,linear,3.0,10
2,site_slope,1,-1,ushape,0.03,0
3,site_footprint,1,-1,ushape,500.0,0
4,tss_conc_pct_reduction,1,1,usual,0.0,0
5,site_inequity_factor,2,-1,usual,0.0,0
6,risk_factor,1,-1,usual,0.0,0`;function t(e,t=`,`,n=!1){return e.slice(n?e.indexOf(`
`)+1:0).split(`
`).map(e=>e.split(t))}var n=t(e,`,`,!1);function r(e){return e[0].map((t,n)=>e.map((t,r)=>e[r][n]))}function i(e){let t=[...Array(e).keys()].map(e=>e),n=Array.from({length:e},()=>Math.random()*499.8+.2),i=Array.from({length:e},()=>Math.random()*.195+.005),a=Array.from({length:e},()=>Math.random()*(5*43560-200)+200),o=[...Array(e).keys()].map(e=>a[e]*(7e5/43560)+(Math.random()*199800+200)),s=Array.from({length:e},()=>Math.random()*86+5),c=Array.from({length:e},()=>Math.random()*2-1),l=Array.from({length:e},()=>Math.floor(Math.random()*3));return o[3]=`test bad data`,r([[`ix`,...t],[`cost`,...o],[`treated_area`,...n],[`site_slope`,...i],[`site_footprint`,...a],[`tss_conc_pct_reduction`,...s],[`site_inequity_factor`,...c],[`risk_factor`,...l]])}var a=i(5e4);export{n as criteria,a as data_long,r as transpose};