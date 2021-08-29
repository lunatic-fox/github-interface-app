(this["webpackJsonpgithub-interface-app"]=this["webpackJsonpgithub-interface-app"]||[]).push([[0],{61:function(e,n,t){"use strict";t.r(n);var r,i,c,a,o,l,s,u,b,j,d,g,h,f,p,x,O,m,A,v,S,k,w,B,E,y,T,C,U=t(1),Q=t(25),I=t.n(Q),P=t(4),Y=t(8),K=t(26),L=t.n(K).a.create({baseURL:"https://api.github.com/"}),z=t(0),J=Object(U.createContext)({loading:!1,user:{},repositories:[],starred:[]}),G=function(e){var n=e.children,t=Object(U.useState)({hasUser:!1,isValidUser:!0,loading:!1,user:{id:void 0,avatar:void 0,login:void 0,name:void 0,htmlUrl:void 0,blog:void 0,company:void 0,location:void 0,followers:0,following:0,publicGists:0,publicRepos:0},repositories:[],starred:[]}),r=Object(Y.a)(t,2),i=r[0],c=r[1],a={githubState:i,getUser:Object(U.useCallback)((function(e){return function(e){e?(c((function(e){return Object(P.a)(Object(P.a)({},e),{},{loading:!e.loading})})),L.get("users/".concat(e)).then((function(e){var n=e.data;c((function(e){return Object(P.a)(Object(P.a)({},e),{},{hasUser:!0,user:{id:n.id,avatar:n.avatar_url,login:n.login,name:n.name,htmlUrl:n.html_url,blog:n.blog,company:n.company,location:n.location,followers:n.followers,following:n.following,publicGists:n.public_gists,publicRepos:n.public_repos}})}))})).catch((function(){c((function(e){return Object(P.a)(Object(P.a)({},e),{},{isValidUser:!1})}))})).finally((function(){c((function(e){return Object(P.a)(Object(P.a)({},e),{},{loading:!e.loading})}))}))):c((function(e){return Object(P.a)(Object(P.a)({},e),{},{hasUser:!1,isValidUser:!0})}))}(e)}),[]),getUserRepos:Object(U.useCallback)((function(e){return function(e){L.get("users/".concat(e,"/repos")).then((function(e){var n=e.data;c((function(e){return Object(P.a)(Object(P.a)({},e),{},{repositories:n})}))}))}(e)}),[]),getUserStarred:Object(U.useCallback)((function(e){return function(e){L.get("users/".concat(e,"/starred")).then((function(e){var n=e.data;c((function(e){return Object(P.a)(Object(P.a)({},e),{},{starred:n})}))}))}(e)}),[])};return Object(z.jsx)(J.Provider,{value:a,children:n})},H=function(){var e=Object(U.useContext)(J);return{githubState:e.githubState,getUser:e.getUser,getUserRepos:e.getUserRepos,getUserStarred:e.getUserStarred}},q=t(3),X=t(2),R="@media only screen and (orientation:portrait)",N=X.c.div(r||(r=Object(q.a)(["\n    display: flex;\n"]))),Z=Object(X.c)(N)(i||(i=Object(q.a)(["\n    flex-direction: column;\n"]))),V=Object(X.c)(N)(c||(c=Object(q.a)(["\n    justify-content: flex-start;\n    flex-wrap: wrap;\n\n    "," {\n        & {\n            justify-content: center;\n        }\n    }\n"])),R),W=X.c.img(a||(a=Object(q.a)(["\n    width: 200px;\n    border-radius: 200px;\n    margin: 8px;\n    -webkit-user-drag: none;\n"]))),D=Object(X.c)(Z)(o||(o=Object(q.a)(["\n    margin-left: 8px;\n    justify-content: center;\n\n    h1, h3, span {\n        font-weight: bold;\n    }\n    h1 {\n        margin-left: 8px;\n        font-size: 2em;\n    }\n    h3 {\n        font-size: 1.2em;\n    }\n    "," {\n        h1 {\n            text-align: center;\n        }\n    }\n"])),R),M=Object(X.c)(N)(l||(l=Object(q.a)(["\n    align-items: center;\n    padding: 0 8px;\n\n    h3 {\n        margin-right: 6px;\n    }\n    "," {\n        & {\n            justify-content: center;\n        }\n    }\n"])),R),F=Object(X.c)(N)(s||(s=Object(q.a)(["\n    min-width: 250px;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    margin-left: 6px;\n\n    div {\n        margin: 8px 5px;\n        text-align: center;\n    }\n    "," {\n        & {\n            margin: 0;\n            justify-content: center;\n        }\n    }\n"])),R),_={inputPlaceholder:["e. g.: github","ex: github"],btnTitle:["Search","Buscar"],labels:{username:["Username","Nome de usu\xe1rio"],company:["Company","Companhia"],location:["Location","Localiza\xe7\xe3o"],followers:["Followers","Seguidores"],following:["Following","Seguindo"],repositories:["Repositories","Reposit\xf3rios"]}},$={repositoriesTab:["Repositories","Reposit\xf3rios"],starredTab:["Starred","Com estrela"]},ee={msgPart1:["Type a Github username on the search bar above and then click","Digite um nome de usu\xe1rio do Github na barra de pesquisa acima e em seguida clique em"],msgPart2:["or press","ou pressione"]},ne=["User not found. Try again.","Usu\xe1rio n\xe3o encontrado. Tente novamente."],te=function(e){var n=navigator.language;return e?"pt"===n||"pt-BR"===n?e[1]:e[0]:""},re=function(){var e=H().githubState,n=_.labels,t=function(e,t){if(e)return"Blog"===t?Object(z.jsxs)(M,{children:[Object(z.jsxs)("h3",{children:[t,":"]}),Object(z.jsx)("a",{href:e.match(/(https|http):\/{2}/)?e:"https://".concat(e),target:"_blank",rel:"noreferrer",children:e})]}):Object(z.jsxs)(M,{children:[Object(z.jsxs)("h3",{children:[te(n[t]),":"]}),Object(z.jsx)("span",{children:e})]})};return Object(z.jsxs)(V,{children:[Object(z.jsx)(W,{src:e.user.avatar,alt:"User avatar"}),Object(z.jsxs)(D,{children:[Object(z.jsx)("h1",{children:e.user.name}),Object(z.jsxs)(M,{children:[Object(z.jsxs)("h3",{children:[te(n.username),":"]}),Object(z.jsx)("a",{href:e.user.htmlUrl,target:"_blank",rel:"noreferrer",children:e.user.login})]}),t(e.user.blog,"Blog"),t(e.user.company,"company"),t(e.user.location,"location"),Object(z.jsxs)(F,{children:[Object(z.jsxs)("div",{children:[Object(z.jsx)("h3",{children:te(n.followers)}),Object(z.jsx)("span",{children:e.user.followers})]}),Object(z.jsxs)("div",{children:[Object(z.jsx)("h3",{children:te(n.following)}),Object(z.jsx)("span",{children:e.user.following})]}),Object(z.jsxs)("div",{children:[Object(z.jsx)("h3",{children:"Gists"}),Object(z.jsx)("span",{children:e.user.publicGists})]}),Object(z.jsxs)("div",{children:[Object(z.jsx)("h3",{children:te(n.repositories)}),Object(z.jsx)("span",{children:e.user.publicRepos})]})]})]})]})},ie=X.c.div(u||(u=Object(q.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 16px;\n    margin: -16px -16px 0 -16px;\n    font-family: 'Exo 2', sans-serif;\n    font-size: 2em;\n    height: 1.8em;\n"]))),ce=X.c.img(b||(b=Object(q.a)(["\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 1.8em;\n    cursor: pointer;\n"]))),ae=function(){return Object(z.jsxs)(ie,{children:["Github Interface",Object(z.jsx)("a",{href:"https://github.com/joseliojunior/github-interface-app",target:"_blank",rel:"noreferrer",children:Object(z.jsx)(ce,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAD2EAAA9hAag/p2kAABo5SURBVHhe7Z1pkBZFmsediJ2IPWJnPuzGHDoqihwCQiuHgqggIiqoiKAgoghyKAgq4oE4HogrnigiiigKCgoKiqBy2YLdCNgoOyuMsRE7X/bTftpxvm/V9v/lybb67afft+7Kqvr/In4xMHZlZVc9T5JZlZV50sGjPzqU0nJ6Emg+cvx/jdoPUUqLaaUBAGwAKC2fkv4nYANAabmU1P8Z7YcopcVU0r49ZjjAHgGlxVZSviNsACgtvpLuOmwAKC22kuqdox1EKS2Gkua1McMB9ggoLZaS4vVhA0Bp8ZT09gcbAEqLpaS2f7RCKKX5VNI6GGY4wB4BpflWUjo4bAAozb+SzuFgA0BpvpVUDo9WKKU0H0oaR8MMB9gjoDRfSgpHhw0ApflT0jce2ABQmi8ldeNDOwml1E4lbePFDAfYI6DUbiVl44cNAKX2K+maDGwAqG02HznmbN/T5Ow//Cf1v5dNSdXk0E5Kadoi8Tdu+cyZOfc+d+ilV7nzFi52G785qv5smZQ0TRYzHGCPgGbhJ1985cxdsMjt23+I+5tTzqx4+lm93bvue9j9+tv/UI8pi5KiycMGgKbtVwe/d5YtX+VcOGyU+/vTulUS/7d/6FoRf+7W+1x3ybLl6rFlUdIzHdgA0LT8dNd+Z9rsu90zu/dt+1ffJL+3ERg0dIS77oOP1TLKoKRmemiVoDRO12/e5lx6xbUd/tXXxH+/aeosF70FrayiK2mZLmY4wB4BjVM86Fv55nvOgMHDO/1Xv1r8DIYCL776plpm0ZWUTB82ADROv/n+z86K1euchoFDfSW+V/z82AlT3D3NLWrZRVbSMRvYANC4XLN+s3Pe+RcHTn6IY7r2bHBffu1ttewiK6mYHVqlKA3ipm07ncEXjwyV/EYcO/m22W5Tyw/qOYqqpGG2mOEAewQ0qDv3HXKuGT+5ksBRGwDME3jvw+3qeYqqpGD2sAGgQW068oOzYNHjzh/O6Bkp+aE5/oFHlqrnKqqSfnbABoAGce3GrU6f8wZHTn4jyrlq7I3u3uYj6vmKqKSePWiVpLRaTOGdeMuM2JIfoqyz+w4s1cQgSTu7MMMB9giosbnlmIPXdNt3f+1s/nS3s/S5V5zuvc+LvQH43alnuQ8/vkytQxGVlLMPNgDlFk/jt+3cV5nYc3/ruHzytDvcy68e755/0WVuvwEXul179Is1+Y0oc/zkaaX5SEjSzU7YAJRPzOF/7uXVzpTpc1y82kOim8Sstjp54xDlDhxyqfvxF1+p9Suakmr2olWaFkvM4tu8bZezYNETzsWXjXa7dOvdIdmr1ZI3DlE2PiBaueZdta5FU9LMbsxwgD2C4olv9e97+Aln0IWXuieffuLjHT9qyRuHKBvPARYuXqLWt2hKitkPG4Biia/vnn9ljTN81DWtid+jQ4LXU0veuET5N9x8eymeA0h65QM2AMUQD/dmzVvodj27oUNiB1FL3jhE2RiKfNH4jVr/IimplR+0X4Lmx/WbPnFGj53Y+q9+9w4JHUYtgaOKcvGJ8FPPryz84qGSVvnCDAfYI8iXq97a4OA1nkmyuKxO4DjEcwDMM7ht1nx3/eZP1d+nCEpK5Q82APnypVVvO+d4FuWMWy2Jo+gtF43WI08+6+zad1j93fKspFM+YQOQD1e8/o7T+9wL2iVsElYncRyask/t2sudMHma+/bGYk0TllTKL9ovRe0RM/nMBztpqSVyFL1lY5LQ408vd/YdKsaeApJG+cYMB9gjsMs31m9qW6WnSGJPgemz57sf7dir/t55UlIo/7ABsEssrHHRiNFqAhXFK6+Z4KKR037/vCjpUwzYANgh3vOPuf6mDt3nIoohwdMvvlqZzqxdC9uV1CkO2i9J03PP14cdvDqL6z1/Huzep39lJaE8PheQtCkWZjjAHkG6HvjuuLN4ybMOxshaohTZU888273z7gddrFGoXRtblZQpHmwA0veNdZtSf+Jvk+j1TJ15l4tFS7TrY6OSLsWEDUB6Ys99rKenJUaZxAxCbDWGrxy162SbkirFRfulabxiuS6szntKl+Bf9RXVG6fMyEUjIGlSbMxwgD2CZMTsOO/e+/SE2GgEPSPtmtmipEjxYQOQjI0Hvncm3TpTTYCyi+HA1FnzXJu/IZD0KAdsAOJ3xRvrnLN6Rfuuv8jiweCcex5y9x/6d/X6Za2kRnnQLgINJzbQuP6m29TApz+LV4QP/vEpKycLSVqUCzMcYI8gmq+t3eBgEgyCvNYHNFlZXaegamWGFddp2fJV6nXMUkmJ8sEGIJpYt3/a7LvbAlxLIKM3EZJWO38caucKKhY+te3bAUmHcsIGILwfbtvl9B8yrBLYWsJUW50MSaidN2618wYRHxBt+cyerwglFcqLdlFofZc883KoXXmrEyIOtfMkqVaHIOJTYlu+G5A0KDdmOMAegT+xXLb31Z+WJLX0JkNUtfLTUKuLX/GtxGP/9qJ6bdNWUoCUoQH4cPse5+XX3q5sxqH9d7/ic19s24Vg1pLDj9VJEUat3DTV6uRXfEaM7c2165umEv4EFLkBwEO72++8t/JKasiwUe6K1eucpiM/qD9bT3z0Y9b01xLDj9UJEUat3LTV6uVXbEKa9deDEvrEoF2kIoitta+4ekJb8GEf/BdWvqn+bD3RfTXbeGlJ4VdTlzBq5WWhVje/ojHGasPaNU5LCXvixQwHitQj+LL5O2f0dZPaBSDW63t/6+fqz9fyjvkPVI7XEiKI3roEUSsrS7U6+hVLjme574CEPKmmaA0AhgD4TLU6ALHvfpBpqhg2TLxlRuVYLRmCWl0fP2rlZKlWx3qa4/C/mE+R1T6EEu5Eo0gNAFzw0GMOPlDxBiBmqL357ofqz2vi9ZXpSZgEiCLKCapWTpZqdayn91jsQIRZgvhoKOxzmbBKqJPO0C5aXsWY3yzX5Q3c2fMXutrPa+JZwsjR49oFcRRNHYKolZO1Wj1r6T2usg1Za0OMnZLRS8P6gphmjbct6Llp9yEuJcxJLcxwIO89grfe+6jD3H38edjlV7s7vzqoHlMtFv0cceXYdmVEEeUEUSvDBrW61rLWsWgQuvZscC+4aGRlYZE/Ln3OwXMCfHqt3ZMoSoiTehShAcBa/b36DWoXgPhzr4bzfT+I2t30rXP51ePblRFVE/h+1I63Qa2utdTKMFb/LN644L5dPf4m9+EnnnE2bvkstqGChDfxQ94bgA1bdrTt0ecNti7dersvvurvlSD+FUIgesuIqgl0P2rH26BW11pqZXSm97jfn9bNbRg41L15+hz3lTXrK293tPvkVwlt4hftIuZFLN3V85yB7QIQfz759B6+p6ZiTGqmAXuDNIomuP2oHW+DWl1rqZXhR28Z3Xqf646beKu7fNXa0HsSSFiTIJjhQN56BPgX44zu57QLQPwZXcxFjz+tHqMZ1zwAowloP2rH26BW11pqZQTVlIWGAOsPrvsg+M7FEtIkKHlsALCrLf619wYg/hy0AXh06fOt5ZzY+ccbkGE1gexH7Xgb1OpaS62MsJoyBw0dUdm5eP/hP6n3TVPCmYQhbw3ArHkLOwQg/oxG4Yll/r9Oe33txrZ1AL2BGFZTJz9qx9ugVtdaamVEFeXivsy59yHX7xsDCWUSFu2i2ije31917Q0dgg9/79K9j4uvBLXjNPE1IaawxhXIKMev2vE2qNW1lloZcYiyT+va2527YJHrpycgYUyiYIYDNvcI3vtoh3OOrN1fHTB4M4D/rh2niWmrN0yeHlsgoxy/asfboFbXWmplxCXKHzr8Sl97EkgIk6jY3gDgKb+2gg/+PmzkmMCfpWJySlzPAVCGX7XjbVCray21MuIS5c+8a6HbfOSYeu+8SviSOLC1AcC74nGTpqrBh7/jnbKfYPGKrwjNbkDe8sJo6uVH7Xgb1OpaS62MOETZ/QZc6PsrTwldEhfaRc7ad97f2mECkAkW/C/mnmvH1RLDgAmTp8USzCjDr9rxNqjVtZZaGVFFuZgoNG/hYt8NuoQtiRMzHLChR4CNO/FAyPsVoDdgsCjFsy+9rh5bz+dWrG73cVFYcbxfteNtUKtrLbUyoopyLxx+hYuPiLT7pSkhS+LGlgYAT+yxBJgWdPj/MDFo5ZvvqcfWEx8Q4UOiKAGNY4OolWGDWl1rqZURRZTZtUc/95nlwRpzCVeSBDY0APgEGHP9taCrBM3ZDe7qdz5Qj/XjiUlB7ScXBRHHBVUrJ2u1etZSKyOsKA+TuabfcXfg5cYlVElSaBc9Tefeu6jTwMPf8a/Gq2+F6wFAvGq6aMToDmX71Vs3v2rlZKlWx3pq5YQV5WGNhk937VfvUS0lTEmSmOFA2j0CTAS57sZbOg08/B2TRp57ebV6vF8x/fTUrr06lO9Hb938qpWTpVod66mVE0aUhS3H3t28Xb039ZQQJUmTRQOAJaYuGXniX2ct8PB3PDW+f/GT6vF+xbMAs+Kwt/x6eusVVK28rNTq50etrCCijIZBF7mr3tqg3hc/SniSNEi7AUD3HB+IdBZ45u833Hx75EUp8aUh1rbzll9Pc/4wauVloVY3v2rl+dEcj1WdV7yxzjnw3XH1nvhRQpOkhXYTkhKvgwYMHt4u6GB1MOFnNm/bpZbhV6wsPGPOgkqPovocmt76hFUrN021OgVVK7eW5jgsF4YNWqIkP5SwJGlihgNJ9wh27G1u28KrWm9AndKlR2WpKa2MIH60Y68z5JLL25Wv6a1HVLXy01KrTxi1sjXxs5jOjRWZPvhkp3oPgiohSdImjQZg9/5v2xbw1DRBBUdcMdaNumcgxOSgWtuGmfPFpXaONNTqEkXtHEbzM5jNuWDR45VnLtq1D6OEI8mCpBsAjOvNJh6daQIMH/bc++Bjzjff/1kty69fHfy+su6A9qGQ97xx6z1P0mrnj8POzoVv/PH15doNW2LfN0BCkWSFdlPiFE/4zTTgevY5b7D70ir/6wJ0Jp49XD7m+rZyTSAnbXXyxK12zritPh9mai5ZtrzyjEW71lGVMCRZYoYDSfQI8KDIPJ33Iyb1BNkpqDOxAGn/Cy5Rz5G03iSKS+08aYg1HKI+oK2lhCDJmqQaAIwXzTr+fr101LWVJ8xaefXEsAPzD7Z8tteZc89DlYdW2jnSUktmP2plZSEm+QT5uCeoEn7EBpJoACAW/MSTfi3AOhNP85e99JqvMSe6p9hzAIuEYGsrPFDEayoMKcx3AjScmOKLzVi06x6HEnrEFrSbFNWtnzc6WCJKC7Ba9ugzwL3z7gddvN7TysWHJ/iQCAuKYBEKJnv8okFNcsNQCTtiE2Y4EFePAE/2H3ny2bavAoOIiT345BdLimFegSkT76GxrTUaCe04Gl0MRRYuXtLuXsathByxjTgbAIhx+dgJU9RA8yM+9sGcgocefary8Q9WBfb7doGG88zufSvbf2n3My4l3IiNxNkAwPWbPlG/DQgiuvlBnyfQcKKR/TiGyVm1lFAjtqLdtLBi3jge7PXqe2J/QGq3N0+7M/JHWvWUMCM2Y4YDcfQIsLkn5v0HmRtA0xfPa8Ku1RhECTFiO3E1ABALhWAs371PfzX4aPZiQlaYFX6CKuFF8kBcDQBEI4A3A70azlcDkGYn1vdbsOgJ9b7FrYQWyQvaTQwr3i/j6z2zzx+1Q8z+S3L6r1cJK5InzHAgjh4BHgzi7cCYcZMqewRoAUnTE29Z8O4/6leZfpWQInkjrgbA+HnjAeeeBx51evUb1C4gq+fI19N7rC1q9aylVkZaDh91TSzrMvhVwonkkTgbAIgpw2ajD6glR1C9wZ2WWj2iqJ0jCbGQCvZx0O5NUkookbyi3dQwYprv5Ntmt03y0RIhitXBnoTaeeNUO2dcYgGV2fMXulhQRbs/SSlhRPKMGQ6E7RHs+PJE8uPpM4JRC/44rA76ONXOl5Ta+aOIMvEMJo3XftVKCJG8E7YB+OzLAw5mnCWd/Mbq4I9D7TxJq9UjrFi4df3mber9SVoJH1IEgjYAePB3y+1zKt1PBKIW6ElYnQBR1MpPS60+Qe3bf4j7+tqN6v1JQwkdUhS0m6z5ReM3ztSZd6We/MbqRAijVm6aanUKIlb5XbF6nXp/0lLChhQJMxzorEeAZcLwLX9WyW+sToggauVloVY3P+Jffuzqo92fNJWQIUWjswZg575DDraRzjr5YXVS1BPrC3oXNdHKzEJvHf3Yf8iwSPv5xamECyki1Q0AFgXB9l1R9vOP2+rkqCU2wrz/kaXtdjvSykxbbx1riZ8dNnJMLKsux6WECikq5kbjgZ9tyQ+rk6SWQ4aNqrwqe3/r5861429uW3FYKzdNq+upibcs14yf7GLxVG8CZq2ECSkyjz71wl+Hjxr70z//y8k/IRi1IM7K6kSpJTYb2fP14Urg4vUlpi571yTUyk9Lbz2rPf2s3i6GXVm856+nhAgpOv/wq9/8BLXgzVItYTpzyvQ5LhY0McGLT5qxZh6mL9v6QBNLoz+69HlnT3NLu8SzRQkPUgYazr/kf7TgzVotcapFdx+LkWpBjI0z5i5Y5J7tWepMO0+SeusKMaV69NiJ7hvrN6X2ZV8YJTRIWdCCN2urk0fz3EEX19wSG2vnYTcjjLOzeFPgrSte8WFBj+17mtS62qSEBSkTv/rXU376x1//tqIWzGnrTZ7OxKQldPm1IPaKZwRPv/iqg92JvOsbaOeNQ28du/U+18U3Fe+8v9VpPnJMrZ9tSkiQspGnBgBd+zXvblYDuDPx1uPJZ1c4l111XWWHXW95Wh2C6C0LYm3F8ZOnuSvXvOs0Hkj3a76oSjiQMpKHBgCbj+AJetjtsXfv/9ZZvmqtM+nWmW7DwKFtr0G9anWqtvoY9C4GDB7uYkYl5vJ/2fyden7blVAgZUUL9rStTi6v2Mhk07bOx/5+xdsDrLOHB4k3TplR+QIPXXatQdDEe3ws2IFNU7FfH3oXmz/dXSlXO19elDAgZcYMB7LqEWgJB7v2bEhkbXwkLd4cYGNTNAjYABU9hDHX31SZa4At0DB0GH3dJHfiLTPcO+bfX9kbEQ8ZcVzSm3WkqYQAKTu2NQD4l3n+/Y+42IFYC9y4RaOA8Tu24saDRLy3x+o8Se7Ma4Ny+wnJ7plAx+Tv5mKdAny4pAUtjU+59YScQEvQpPUmP7YjR7d7h2crcpqcctsJ+RkzHEizR+BN/jxMoCmKcssJaU+aDYBJfjyIY/Knq9xuQjqSRgOA5MeYH8nPbn/6yq0mREdL2rg0yY/36kz+bJTbTEjnmOFAnD0Ck/yYO499CbTgpMkrt5iQ2sTZAJjkx34ETP5sldtLSH3iaADakn/6HCa/BcqtJcQfWlL71SQ/VvbBkl5aQNJ0ldtKiH/McCBIj8AkP2b44VNdLRhp+sotJSQYQRqAE8nf3b11xlwmv2XK7SQkOCd36flXLeG9muSfOmsek99C5VYSEo6RV437GxbtMGrJf9us+S72ItQCkGar3EZCwoOeQPWQwCQ/Vsxh8tur3EJCojHiirF/MQ2ASf7ps+e72IhUCzxqh3L7CInOmOsnHTuR/D0q//Lze377lVtHSDyMHD3ub6PH3ogHfv/XGmBQDTxqh3LbCImPp15Y+ZfOtiendim3jJB4aWo5vo8NgP3K7SIkfppbjh3Qgo7ao9wqQpKhNch+aNU8D+AzAcuU20RIcjQdOf7ffCZgp3KLCEmWpiPH9rIBsE+5PYQkT1PLsY+0IKTZKbeGkHQ4dPTH7a2Bx2cClii3hZD0aB0ObOEzATuUW0JIunzdcuwTNgDZK7eDkPRp7Qm8rQUlTU+5FYRkQ2sQNrbKZwIZKbeBkOxoajm2gc8EslFuASHZwmcC2SiXn5Ds4bcD6SuXnhA7aA1KPhNIUbnshNiDmTbMIUHyyiUnxC74TCAd5XITYh/8diB55VITYieHjv64oTVQ+UwgIeUyE2IvnCeQnHKJCbEb8wGRFsQ0vHJ5CbEfPhOIX7m0hOQDPhOIV7mshOQHPhOIT7mkhOQLfErMBiC6cjkJyR/fHf+vB7Wgpv6VS0lIPjnY8p8XmOEAewTBlctISH5BT4ANQDjlEhKSb0wjoAU57Vy5fITkn30Hj56hBTntXLl0hBQDNAJmOMAeQX3lshFSHBobG/+ODYA/5ZIRUizM2wEt6OnPyuUipHg0tRx7TQt6+rNyqQgpJpwnUFu5TIQUl8bGxr9nA6Arl4iQYtN4+GgfNgAdlctDSPF5vaXll1oSlFm5NISUA+8rQvYI2ACQEmKGA2wA2ACQkmJ6AlpSlEm5HISUkl9oSVEm5ToQUk527jz6T2Y4UMYegVwGQspLmZ8JyCUgpPT8gg0AISUGDwa1JCmy8qsTQoB32nAZegTyaxNCDGX6dkB+ZUJIFaV4JiC/KyFEQ0uaIim/JiFEo+jPBOTXJITUgg0AISWHDQAh5aZw3w7I70UI8YsZDhShRyC/EiEkCGwACCk5bAAIKTlaUuVJ+TUIIWExw4E89gjkVyCERIENACElhw0AISVHSzKblWoTQuLCDAfy0COQKhNC4oQNACElhw0AISVHSzqblGoSQpLCDAds7BFIFQkhScIGgJCSwwaAkJKjJWGWSrUIIWlhhgM29AikSoSQNGEDQEjJYQNASMnRkjJNpRqEkKwww4EsegRSBUJIlrABIKTksAEgpORoSZqkclpCiC2Y4UAaPQI5JSHEJtgAEFJy2AAQUnK0pI1TOQ0hxFbMcCCJHoGcghBiM2wACCk5bAAIKTlaEkdRiiWE5AUzHIijRyBFEkLyBBsAQkoOGwBCSo6W1EGUYgghecUMB8L0CKQIQkieYQNASMlhA0BIydGSvJZyGCGkKJjhgJ8egRxCCCkSbAAIKTlsAAgpOVrSe5UfI4QUFTMc0HoE8iOEkCLDBoCQksMGgJCSwwaAkJJjhgNQ/i9CSJlgA0BIyWEDQEipOemk/wcF0ceKdqEkPgAAAABJRU5ErkJggg==",alt:"",srcset:""})})]})},oe=t(62),le=X.c.div(j||(j=Object(q.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 80px;\n"]))),se=Object(X.c)(le)(d||(d=Object(q.a)(["\n    width: 70%;\n    max-width: 600px;\n    height: 50%;\n    border-radius: 40px;\n\n    &:hover {\n        box-shadow: 0 0 10px #06080a;\n    }\n\n    input {\n        width: 100%;\n        height: 100%;\n        padding-left: 16px;\n        border-radius: 40px 0 0 40px;\n        background: ",";\n        font-size: 1.3em;\n    }\n\n    input::placeholder {\n        color: ",";\n        font-style: oblique;\n    }\n\n    button {\n        height: 100%;\n        margin-left: -1px;\n        padding:  0 8px;\n        border-radius: 0 40px 40px 0;\n        background: ",";\n        cursor: pointer;\n    }\n\n    button[aria-label] {\n        position: relative;\n    }\n\n    button[aria-label]::after {\n        content: attr(aria-label);\n        opacity: 0;\n        position: absolute;\n        top: 110%;\n        right: 30%;\n        z-index: 999;\n        pointer-events: none;\n        padding: 8px 10px;\n        border-radius: 2em 4px 2em 2em;\n        font-size: 1.4em;\n        color: ",";\n        background: ",";\n        transition: all .4s ease .2s;\n    }\n    \n    button[aria-label]:hover::after {\n        transition: all .4s ease 1s;\n        opacity: 100;\n    }\n\n    "," {\n        & {\n            width: 95%;\n            height: 70%;\n            font-size: 1.35em;\n        }\n    }\n\n"])),(function(e){return e.theme.color.graffitiBlue2}),(function(e){return e.theme.color.graffitiBlue1}),(function(e){return e.theme.color.graffitiBlue2}),(function(e){return e.theme.color.graffitiBlue4}),(function(e){return e.theme.color.graffitiBlue2}),"@media only screen and (orientation:portrait)"),ue=Object(X.c)(oe.a)(g||(g=Object(q.a)(["\n    height: 80%;\n    padding: 0 8px;\n    stroke: ",";\n    stroke-width: 3;\n\n    &:hover {\n        fill: ",";\n        stroke: ",";\n    }  \n"])),(function(e){return e.theme.color.graffitiBlue4}),(function(e){return e.theme.color.pastelBlue}),(function(e){return e.theme.color.pastelBlue})),be=function(){var e=H().getUser,n=Object(U.useState)(),t=Object(Y.a)(n,2),r=t[0],i=t[1],c=function(){return e(r||null)};return Object(z.jsx)(le,{children:Object(z.jsxs)(se,{children:[Object(z.jsx)("input",{type:"text",placeholder:te(_.inputPlaceholder),onChange:function(e){var n,t=null===(n=e.target.value)||void 0===n?void 0:n.trim().replace(/\s+/g,"").toLowerCase();i(t)},onKeyDown:function(e){return"Enter"===e.key&&c()}}),Object(z.jsx)("button",{type:"submit",onClick:c,"aria-label":te(_.btnTitle),children:Object(z.jsx)(ue,{})})]})})},je=X.c.section(h||(h=Object(q.a)(["\n    display: flex;\n    flex-direction: column;\n    margin: 16px;\n    min-height: 95vh;\n"]))),de=function(e){var n=e.children;return Object(z.jsxs)(je,{children:[Object(z.jsx)(ae,{}),Object(z.jsx)(be,{}),n]})},ge=t(11),he=Object(X.c)(ge.d)(f||(f=Object(q.a)(["\n    width: 100%;\n"]))),fe=Object(X.c)(ge.b)(p||(p=Object(q.a)(["\n    display: flex;\n    list-style-type: none;\n    padding: 16px 4px 0 0;\n"]))),pe=Object(X.c)(ge.a)(x||(x=Object(q.a)(["\n    display: flex;\n    align-items: center;\n    background: ",";\n    padding: 4px 16px;\n    border-radius: 10px 10px 0 0;\n    font-size: 1em;\n    color: ",";\n    font-style: oblique;\n    cursor: pointer;\n    user-select: none;\n\n    &.is-selected {\n        margin-bottom: -1px;\n        background: ",";\n        color: inherit;\n        font-size: 1.4em;\n        font-style: normal;\n        font-weight: bold;\n        border-bottom: none;\n    }\n\n"])),(function(e){return e.theme.color.graffitiBlue0}),(function(e){return e.theme.color.graffitiBlue3}),(function(e){return e.theme.color.graffitiBlue2})),xe=Object(X.c)(ge.c)(O||(O=Object(q.a)(["\n    display: none;\n    padding: 8px;\n    background: ",";\n    border-radius: 0 8px 8px 8px;\n\n    &.is-selected {\n        display: block;\n    }\n"])),(function(e){return e.theme.color.graffitiBlue2})),Oe=X.c.div(m||(m=Object(q.a)(["\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    width:100%;\n"]))),me=X.c.div(A||(A=Object(q.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-grow: 1;\n    margin: 4px;\n    padding: 16px;\n    border-radius: 8px;\n    background: ",";\n"])),(function(e){return e.theme.color.graffitiBlue1})),Ae=function(e){var n=e.name,t=e.fullName,r=e.reposLink;return Object(z.jsxs)(me,{children:[Object(z.jsx)("h2",{children:n}),Object(z.jsx)("a",{href:"https://github.com/".concat(r),target:"_blank",rel:"noreferrer",children:t})]})},ve=function(){var e=H(),n=e.githubState,t=e.getUserRepos,r=e.getUserStarred,i=Object(U.useState)(!1),c=Object(Y.a)(i,2),a=c[0],o=c[1];return Object(U.useEffect)((function(){n.user.login&&(t(n.user.login),r(n.user.login)),o(n.repositories)}),[n.user.login]),Object(z.jsx)(z.Fragment,{children:a?Object(z.jsxs)(he,{selectedTabClassName:"is-selected",selectedTabPanelClassName:"is-selected",children:[Object(z.jsxs)(fe,{children:[Object(z.jsx)(pe,{children:te($.repositoriesTab)}),Object(z.jsx)(pe,{children:te($.starredTab)})]}),Object(z.jsx)(xe,{children:Object(z.jsx)(Oe,{children:n.repositories.map((function(e){return Object(z.jsx)(Ae,{name:e.name,fullName:e.full_name,reposLink:e.full_name},e.id)}))})}),Object(z.jsx)(xe,{children:Object(z.jsx)(Oe,{children:n.starred.map((function(e){return Object(z.jsx)(Ae,{name:e.name,fullName:e.full_name,reposLink:e.full_name},e.id)}))})})]}):Object(z.jsx)(z.Fragment,{})})},Se=t(63),ke=X.c.div(v||(v=Object(q.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 75vh;\n"]))),we=Object(X.c)(ke)(S||(S=Object(q.a)(["\n    height: auto;\n    flex-wrap: wrap;\n    text-align: center;\n    max-height: 100%;\n    max-width: 500px;\n"]))),Be=Object(X.c)(Se.a)(k||(k=Object(q.a)(["\n    height: 200px;\n"]))),Ee=X.c.span(w||(w=Object(q.a)(["\n    display: inline-flex;\n    width: fit-content;\n    padding: 4px 8px;\n    margin: 2px 0;\n    background: ",";\n    border-radius: 8px;\n"])),(function(e){return e.theme.color.graffitiBlue2})),ye=Object(X.c)(oe.a)(B||(B=Object(q.a)(["\n    width: 1em;\n    stroke: ",";\n    stroke-width: 3;\n"])),(function(e){return e.theme.color.graffitiBlue4})),Te=function(){return Object(z.jsx)(ke,{children:Object(z.jsxs)(we,{children:[Object(z.jsx)(Be,{}),Object(z.jsxs)("h1",{children:[te(ee.msgPart1)," ",Object(z.jsx)(Ee,{children:Object(z.jsx)(ye,{})})," ",te(ee.msgPart2)," ",Object(z.jsx)(Ee,{children:"Enter"})]})]})})},Ce=t(64),Ue=X.c.div(E||(E=Object(q.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 75vh;\n"]))),Qe=Object(X.c)(Ue)(y||(y=Object(q.a)(["\n    height: auto;\n    flex-wrap: wrap;\n    text-align: center;\n    max-height: 100%;\n    max-width: 500px;\n"]))),Ie=Object(X.c)(Ce.a)(T||(T=Object(q.a)(["\n    height: 200px;\n"]))),Pe=function(){return Object(z.jsx)(Ue,{children:Object(z.jsxs)(Qe,{children:[Object(z.jsx)(Ie,{}),Object(z.jsx)("h1",{children:te(ne)})]})})},Ye=function(){var e=H().githubState;return Object(z.jsx)(de,{children:e.hasUser?Object(z.jsx)(z.Fragment,{children:e.loading?Object(z.jsx)("p",{children:"Loading..."}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(re,{}),Object(z.jsx)(ve,{})]})}):e.isValidUser?Object(z.jsx)(Te,{}):Object(z.jsx)(Pe,{})})},Ke=Object(X.b)(C||(C=Object(q.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        text-decoration: none;\n        border: none;\n        outline: none;\n        font-family: 'Roboto', sans-serif;\n        color: ",";\n        -webkit-tap-highlight-color: transparent;\n    }\n\n    * ::-webkit-scrollbar {\n        width: 8px;\n        background: ",";\n    }\n\n    * ::-webkit-scrollbar-thumb {\n        background: ",";\n        border-radius: 4px;\n    }\n\n    body {\n        background: ",";\n    }\n\n    a {\n        color: ",";\n        font-weight: bold;\n        font-style: italic;\n    }\n    a:hover {\n        color: ",";\n    }\n\n"])),(function(e){return e.theme.color.graffitiBlue4}),(function(e){return e.theme.color.graffitiBlue0}),(function(e){return e.theme.color.graffitiBlue2}),(function(e){return e.theme.color.graffitiBlue1}),(function(e){return e.theme.color.pastelBlue}),(function(e){return e.theme.color.pastelOrange})),Le={color:{grey0:"#1a1a1a",graffitiBlue0:"#0d1117",graffitiBlue1:"#161b22",graffitiBlue2:"#343942",graffitiBlue3:"#777e84",graffitiBlue4:"#c9d1d9",pastelBlue:"#58a6ff",pastelOrange:"#ffcd58"}},ze=function(){return Object(z.jsx)("main",{children:Object(z.jsx)(G,{children:Object(z.jsxs)(X.a,{theme:Le,children:[Object(z.jsx)(Ke,{}),Object(z.jsx)(Ye,{})]})})})};I.a.render(Object(z.jsx)(ze,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.57fae99a.chunk.js.map