$(function(){function e(e){C&&(t(C),n(C)),document.getElementById(e).play(),C=e}function t(e){document.getElementById(e).pause()}function n(e){document.getElementById(e).currentTime=0}function a(e,t){var n=e.split("(")[1];n=n.split(")")[0],n=n.split(",");var a=n[0],i=n[1],o=(n[2],n[3],Math.sqrt(a*a+i*i)),s=Math.atan2(i,a);0>s&&(s+=2*Math.PI);var r=Math.round(s*(180/Math.PI));return"scale"===t?o:"rotate"===t?r:void 0}function i(e){var t=".detail_"+e;$(".showbox img").css("display","none"),$(t).css("display","block")}function o(e,t){var t=Math.max(e,t),e=Math.min(e,t);return Math.floor(Math.random()*(t-e+1)+e)}function s(){function a(){D.animate({rotate:360+q+"deg"},1e3,"linear",function(){D.animate({rotate:q+"deg"},0,"linear",function(){if(F)a();else{T=o(1,11);var s=32.7*(T-1)+q;D.animate({rotate:s+"deg"},s===q?100:2e3,"linear",function(){D.find(".single").eq(T-1).animate({padding:"0px"},100,"linear",function(){e(T+""),i(T+""),Z=!0,_&&(_=!1,k.removeClass(X),$(".moon").removeClass("active"),t("light"),n("light"))})})}})})}Z=!1,a()}var r=[0,141],l=r[1]-r[0]+1,d=document.getElementById("container"),c=document.getElementById("loading"),m=(document.getElementById("audios"),{length:0});wx.config({debug:!1,appId:"",timestamp:1,nonceStr:"",signature:"",jsApiList:[]}),wx.ready(function(){for(var e=document.getElementsByTagName("audio"),t=e.length-1;t>=0;t--)e[t].play(),e[t].pause();document.getElementById("main2").load()});for(var u=r[0];u<=r[1];u++)!function(e){var t=new Image;t.onload=function(){m.length++,m[e]=this,y()},t.onerror=function(){m.length++,y()};var n,a=e+"";1===a.length&&(n="LZL_0000"),2===a.length&&(n="LZL_000"),3===a.length&&(n="LZL_00"),t.src="./movie/LZL/"+n+e+".png"}(u);var g,p,f=1e4,h=parseInt(f/l,10).toFixed(2),v=c.getElementsByClassName("loading-inner")[0],y=function(){var e=Math.round(100*m.length/l);if(c.setAttribute("data-percent",e),v.style.width=e+"%",100==e){var t=r[0];d.innerHTML="";var n=function(){m[t-1]&&d.removeChild(m[t-1]),d.append?d.append(m[t]):d.appendChild(m[t]),t++,t<=r[1]?setTimeout(n,h):(document.getElementById("main2").pause(),wx.ready(function(){$(".container").css("display","none"),document.getElementById("ring").play()}))};wx.ready(function(){document.getElementById("main2").play(),setTimeout(n,100)})}},I=!1,x=(parseFloat($("html").css("font-size")),parseFloat($(".slider").css("left"))),B=parseFloat($(".slide-box").css("width")),E=parseFloat($(".slider").css("width")),w=B-E-x,b=x;$(".h5container").on("touchstart",".slider",function(e){I=!0,g=e.changedTouches[0].screenX}),$(".h5container").on("touchmove",function(e){if(I===!0){var t=e.changedTouches[0].screenX-g;b+=t,x>b&&(b=x),b>w&&(b=w),$(".slider").css("left",b+"px"),g=e.changedTouches[0].screenX}}),$(".h5container").on("touchend",function(){I===!0&&(p=b-x,p>(B-E)/2&&(b=w,$(".slider").animate({left:b+"px"},100,"ease-out"),$(".cover-slide").animate({opacity:0},100,function(){$(".cover-slide").css("display","none"),$(".word").animate({opacity:1},100,"ease-in"),document.getElementById("ring").setAttribute("loop","none"),document.getElementById("ring").pause(),document.getElementById("enter").play(),setTimeout(function(){$(".back1").css("display","none"),$(".word").css("display","block")},6e3)})),(B-E)/2>p&&(b=x,$(".slider").animate({left:b+"px"},100,"ease-out")),I=!1)});for(var C,M="",L=1;12>L;L++)M+='<div class="single"><img src="./img/static/'+L+'.png" alt=""></div>'.trim();$(".gifts").html(M);var T,F=!1,Z=!0,_=!1,k=$(".lightme"),A=$(".touchme"),X="active",q=a($(".gifts").css("transform"),"rotate"),D=$(".gifts");A.on("tap",function(e){e.preventDefault(),_&&(_=!1,k.removeClass(X),$(".moon").removeClass("active"),t("light"),n("light")),!F&&Z&&(F=!0,A.addClass(X),$(".showbox img").css("display","none"),D.find(".single").animate({padding:"0.6667rem 0.6667rem 0px 0.6667rem"},100),"number"==typeof T&&t(T+""),s(),setTimeout(function(){F=!1},2e3))}),k.on("tap",function(t){t.preventDefault(),k.addClass(X),$(".moon").addClass("active"),A.removeClass(X),$(".showbox img").css("display","none"),D.find(".single").animate({padding:"0.6667rem 0.6667rem 0px 0.6667rem"},100),_||(_=!0,e("light"))})});