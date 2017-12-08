// index.js


$(function(){

//五、轮播图-------------------------------------------------------------------------------------

    var len=$(".main_banner li").length;
    var index_2=0;
    var timer=800;
    var intervaltimer=0;
    var isMoving=false;

    function slide(slideMode){//轮播方法
        if (isMoving==false){
            isMoving=true;
            var prev; var next; var hidden;
            var curr=$("#imgCard"+index_2);//当前正中显示

            if(index_2==0){								//当前正中显示的是第0张时 prev为最后一张
                prev=$("#imgCard"+(len-1));
            }else{												//否则  序列号-1
                prev=$("#imgCard"+(index_2-1));
            }
            if(index_2==(len-1)){					//当前正中显示的是最后一张时 next为第0张
                next=$("#imgCard0");
            }else{											//否则  序列号+1
                next=$("#imgCard"+(index_2+1));
            }

            if(slideMode){			//slideMode为1(true)，执行slide(1)，上一张
                if(index_2-2>=0){									//index_2						2		3		4
                    hidden=$("#imgCard"+(index_2-2));//									0		1		2
                }else{													//index_2		0		1
                    hidden=$("#imgCard"+(len+index_2-2));//			3		4
                }
                prev.css("z-index","5");			//点击prev按钮  让prev位置上的这张图片 层级最高 显示
                next.css("z-index","1");
                curr.css("z-index","2");
                hidden.css("z-index","1");
                //当index_2自减，各图片往右运动效果
                hidden.css({width:"4.5rem",height:"1.8rem",top:"0.6rem","left":"0","opacity":0});
                hidden.stop(true,true).animate({width:"5.8rem",height:"3rem",top:"0.2rem",left:"0",opacity:1},timer);
                curr.stop(true,true).animate({width:"5.8rem",height:"3rem",top:"0.2rem",left:"6rem",opacity:1},timer);
                next.stop(true,true).animate({width:"6rem",height:"3rem",top:"0.6rem","left":"6rem","opacity":0},timer,function(){next.find("span").css("opacity",0); isMoving = false;});
                //prev  -->  curr     prev中的图片li轮换到curr的位置      其他一次轮换
                prev.find("span").css("opacity",0);
                $(".main_banner_box li").find("p").css({"bottom":"-0.4rem"});//所有标题隐藏
                prev.stop(true,true).animate({width:"6.6rem",height:"3rem",left:"2rem",top:0,opacity:1},timer,function(){
                    $(this).find("p").animate({"bottom":"0"});	//当前这张图片的标题运动出来
                });
                index_2--;
            }else{			//执行next 操作
                if(index_2+2>=len){								//index_2								3		4
                    hidden=$("#imgCard"+(index_2+2-len));//										0		1
                }else{													//index_2		0		1		2
                    hidden=$("#imgCard"+(index_2+2));//						2		3		4
                }
                prev.css("z-index","1");
                next.css("z-index","5");			//点击next按钮  让next位置上的这张图片 层级最高 显示
                curr.css("z-index","2");
                hidden.css("z-index","1");
                //当index_2自增，各图片往左运动效果
                hidden.css({width:"6rem",height:"3rem",top:"0.6rem","left":"7rem","opacity":0});
                hidden.stop(true,true).animate({width:"5.8rem",height:"2.4rem",top:"0.2rem",left:"6rem",opacity:1},timer);
                curr.stop(true,true).animate({width:"5.8rem",height:"2.4rem",top:"0.2rem",left:"0rem",opacity:1},timer);
                //next  -->  curr     next中的图片li轮换到curr的位置      其他一次轮换
                next.find("span").css("opacity",0);
                $(".main_banner_box li").find("p").css({"bottom":"-0.4rem"});//所有标题隐藏
                next.stop(true,true).animate({width:"6.6rem",height:"3rem",left:"0.45rem",top:0,opacity:1},timer,function(){
                    $(this).find("p").animate({"bottom":"0"});	//当前这张图片的标题运动出来
                });
                prev.stop(true,true).animate({width:"6rem",height:"3rem",left:"0",top:"0.6rem",opacity:0},timer,function(){
                    isMoving = false;
                });
                index_2++;
            }//if else

            hidden.find("span").css("opacity",0.5);
            curr.find("span").css("opacity",0.5);

            if(index_2==len) index_2=0;
            if(index_2<0) index_2=len+index_2;			//限制index_2的范围
            $(".btn_list span").removeClass('curr').eq(index_2).addClass('curr');//给序列号按钮添加、移除样式
        }
    }//slide()
    function infoslide() {

    }
    
    $("#m_box").on("touchmove"," li",function(event){
        slide();
    })

    if(len>3){
        $(".main_banner_box li").on("touchmove",function(){
            if($(this).css("width")=="6rem"){//鼠标移入为当前正中显示的图片li，则清除定时器
                clearInterval(intervaltimer);
                intervaltimer=null;
            }
        }).on("mouseout",function(){//鼠标移除重新滚动
            clearInterval(intervaltimer);
            intervaltimer=null;
            intervaltimer=setInterval(slide,3000);
        });

        intervaltimer=setInterval(slide,3000);

    }



});