// 搜索框文字效果
$(function(){
    $('#inputSearch').focus(function(){
        $(this).addClass('focus')
        if($(this).val()===this.defaultValue){
            $(this).val('')
        }
    }).blur(function(){
        $(this).removeClass('focus')
        if($(this).val()===''){
            $(this).val(this.defaultValue)
        }
    }).keyup(function(e){
        if(e.which===13){
            alert('回车提交表单')
        }
    })
})

// 网页换肤
$(function(){
    var $li =$('#skin>li')
    $li.click(function(){
        switchSkin(this.id)
    })
    var cookie_skin = $.cookie('MyCssSkin')
    if(cookie_skin){
        switchSkin(cookie_skin)
    }
})
function switchSkin(skinName){

    $('#'+skinName).addClass('selected')
    .siblings().removeClass('selected')
    $('#cssfile').attr('href','./styles/skin/'+skinName+'.css')
    $.cookie('MyCssSkin', skinName,{path:'/',expires:10})
}

//导航效果

$(function(){
    $('#nav li').hover(function(){
        $(this).find('.jnnav').show()
        
    },function(){
        $(this).find('.jnnav').hide()
    })
})

// 左侧商品分类热销效果

$(function(){
    $('.promoted').append('<span class="hot"></span>')
})

// 右侧上部产品广告效果

$(function(){
    var index = 0
    $('#adsnav a').mouseover(function(){
        index=$('#adsnav a').index(this)
        showImg(index)
    }).eq(0).mouseover()
    var $imgroll=$('#adsnav a')
    $imgroll.css('opacity','0.7')
    var len =$imgroll.length
    var adTimer = null
    $('#imageroll').hover(function(){
        if(adTimer){clearInterval(adTimer)}
    },function(){
        adTimer = setInterval(function(){
            showImg(index);
            index++;
            if(index===len){index=0}
        },3000)
    }).trigger('mouseleave')
})
function showImg(index){
    var $rollobj = $('#imageroll')
    var $rolllist =$rollobj.find('div a')
    $('#imgwrap').find('img').eq(index).stop(true,true).fadeIn().siblings().fadeOut();
    $rolllist.removeClass('chos').css('opacity','0.7').eq(index).addClass('chos').css('opacity','1')
}

//右侧最新动态模块内容添加超链接提示

$(function(){
    var x = 10;
    var y = 20;
    $('a.tooltip').mouseover(function(e){
        this.mytitle = this.title;
        this.title = '';
        var tooltip = '<div id="tooltip">'+this.mytitle+'</div>'
        $('body').append(tooltip);
        $('#tooltip').css({
            'top': (e.pageY+y)+'px',
            'left': (e.pageX+x)+'px'
        }).show('fast')
    }).mouseout(function(){
        this.title=this.mytitle;
        $('#tooltip').remove();
    }).mousemove(function(e){
        $('#tooltip').css({
            'top': (e.pageY+y)+'px',
            'left': (e.pageX+x)+'px'  
        })
    })
})

// 右侧下部品牌活动横向滚动效果

$(function(){
    $('#brandtab a').click(function(){
        $(this).parent().addClass('chos').siblings().removeClass('chos');
        var index=$('#brandtab a').index(this);
        showBrandList(index);
		return false;
    }) .eq(0).click() 
})
function showBrandList(index){
    var $roll = $("#brandcontent");
    var rollWidth = $roll.find("li").outerWidth();
	rollWidth = rollWidth * 4; //一个版面的宽度
	$roll.stop(true,false).animate({ left : -rollWidth*index},1000);

}

//右侧下部光标划过产品列表效果

$(function(){
    $('#brandcontent li').each(function(index){
        var $img = $(this).find('img');
        var img_w = $img.width();
        var img_h = $img.height();
        var span = '<span style="position: absolute;top:0;left: 5px;width:'+
        img_w+'px;height:'+img_h+'px;" class="imgMask"></span>'
        $(span).appendTo(this)
    })
    $('#brandcontent .imgMask').mouseover(function(){
		$(this).addClass("imageOver");
    }) .mouseout(function(){
		$(this).removeClass("imageOver");
    }) 
})
