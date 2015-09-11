define(["class", "base"], function ( $class, base ){

    var Scroll = new $class();

    var rAF = window.requestAnimationFrame	||
        window.webkitRequestAnimationFrame	||
        window.mozRequestAnimationFrame		||
        window.oRequestAnimationFrame		||
        window.msRequestAnimationFrame		||
        function (callback) { window.setTimeout(callback, 1000 / 60); };

    Scroll.include({
       init : function (options){
           var defaultOptions = {
               wrapper : null,
               scroller : null,
               distance : 100,
               timeout : 5000,
               pullCallback : false,
               pushCallback : false
           };

           this.opt = $.extend(defaultOptions, options);

           //�жϴ�������Щ�¼�
           this.isSwipeDown = false;
           this.isSwipeUp = false;

           //io��Ĭ�Ϲرգ�������pull/push�¼�������,��ֹ�ٴδ����¼���
           // ��Ĭ��5����û�лص��������أ��ر�������������pull/push�¼�
           this.IOLock = false;

           //������ʱ��
           this.animateTimer = null;

           this.wrapper = $(this.opt.wrapper);
           this.scroller = $(this.opt.scroller);

           //�ڲ�transform,����Ҳ��Ҫ��һ��transform������ס
           this.wrapper.addClass("cpWpTransform");
           //�ڲ���һ��class��������css3����
           this.scroller.addClass("cpWpSwipe");

           //�������document�ľ���λ��
           this.InitDATA();

           this.eventTrigger();

           this.update();
       },
       InitDATA : function (){
           var unWHeight = this.wrapper.height(),
               unWPadding = parseInt(this.wrapper.css("padding"),10),
               unWMargin = parseInt(this.wrapper.css("margin"),10),
               unSHeight =  this.scroller.height(),
               unSPadding = parseInt(this.wrapper.css("padding"),10),
               unSMargin = parseInt(this.wrapper.css("margin"),10);

           var wHeight = unWHeight + unWPadding + unWMargin;
           var sHeight = unSHeight + unSPadding + unSMargin;

           this.minTop = 0;
           this.maxTop = wHeight - sHeight;

           console.warn(
               "minTop:" + this.minTop,
               ",maxTop:" + this.maxTop
           );
       },
       scrollFix : function (elem){
           var startY, startTopScroll;
           elem = document.querySelector(elem);
           if(!elem) return;
           elem.addEventListener('touchstart', function(event){
               startY = event.touches[0].pageY;
               startTopScroll = elem.scrollTop;
               if(startTopScroll <= 0)
                   elem.scrollTop = 1;
               if(startTopScroll + elem.offsetHeight >= elem.scrollHeight)
                   elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 1;
           }, false);
       },
       eventTrigger : function () {
           var self = this,
               start,
               end;

           this.wrapper.on("touchstart", function (e){
               start = e.changedTouches[0].pageY;
           });

           //��ֹsafari��Ƥ��Ч��
           if(base.isIOS()){
               this.scrollFix( this.opt.wrapper );
           }

           this.wrapper.on("touchend", function (e){
               end = e.changedTouches[0].pageY;
               var dis = end - start;
               //����������
               if( dis > 0 ){
                   self.isSwipeDown = true;
               }
               //����������
               else if ( dis < 0 ){
                   self.isSwipeUp = true;
               }
               //���
               else{
                   console.log("click");
               }
           });
       },
       changeEffect : function ( effect, method  ){
           var b = method == "addClass";
           //��IOSʹ��css3Ч��ʵ�֣�
           //iosʹ���Լ�����Ƥ��Ч��
           //if( !base.isIOS() ){
               this.scroller[ method ]( "h5Swipe" + effect );
           //}
           this["isSwipe" + effect] = b;
       },
       checkAddAction : function ( obj ){
           var b = obj == "pull",
               //��ȡscoller��ǰλ��
               t = this.scroller.position().top;

           //�����pull,���ж���Сλ���Ƿ�����,�����push,���ж����λ���Ƿ�����
           if( b  ? t >= this.minTop : t <= this.maxTop ){

               var _callback = b ? "pull" : "push",
                   _getMethod = function ( cdt ){
                      return cdt ? "Down" : "Up";
                   };

               var _dir = _getMethod(b),
                   __dir = _getMethod(!b);

               this.changeEffect( _dir, "addClass" );

               if( !this.IOLock
                   && typeof this.opt[ _callback + "Callback" ] == "function"
                   && this[ "isSwipe" + _dir ]
               ){
                   this.IOLock = true;
                   //ִ��reCallback
                   //����ȥ��ǰ�¼����ͷǵ�ǰ�¼�
                   this[ _callback ]( _dir, __dir);
               }
           }
       },
       update : function (){
           var self = this;
           //���ϼ��������Ƿ񱻴���

           if( this.isSwipeDown ){
               this.isSwipeDown = false;
               this.checkAddAction("pull");
           }else if( this.isSwipeUp ){
               this.isSwipeUp = false;
               this.checkAddAction("push");
           }

           rAF(function (){
               self.update();
           });
       },
       resetBackScrollAnimate : function (c,o,callback){
           var self = this;
           //���ñ���
           self.IOLock = false;
           //���ö���
           //�������
           self.changeEffect( c, "removeClass");
           self.changeEffect( o, "addClass");
           //����ع�����
           this.animateTimer = null;
           this.animateTimer = setTimeout(function (){
               self.changeEffect( o, "removeClass" );
               return callback && callback();
           },500);
       },
       //fn����Ҫִ�еĻص�����
       //c : ��ǰ���¼����ƣ� pull/push ��
       //o : �ǵ�ǰ�¼����ƣ� pull/push ��
       reCallback : function (fn, c, o){
           var self = this;
           fn(
               function (callback){     //error
                   self.resetBackScrollAnimate(c,o,function () {
                       return callback && typeof callback == "function" && callback();
                   })
               },
               function ( callback ){   //success
                   self.resetBackScrollAnimate(c,o,function () {
                       //���¼���DOM ģ��
                       self.InitDATA();
                       //ִ�лص�����
                       return callback && typeof callback == "function" && callback();
                   })
               }
           );
       },
       pull : function (c, o) {
           return this.reCallback(this.opt.pullCallback, c, o);
       },
       push : function (c, o){
           return this.reCallback(this.opt.pushCallback, c, o);
       }
    });

    return Scroll;
});