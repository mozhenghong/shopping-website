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

//　单击产品小图片切换大图
$(function(){
	$("#proitem ul.imgList li a").click(function(){
          var imgSrc = $(this).find("img").attr("src");
          var i = imgSrc.lastIndexOf(".");
          var unit = imgSrc.substring(i);
          imgSrc = imgSrc.substring(0,i);
          var imgSrc_big = imgSrc + "_small"+ unit;
          $(".zoomwrap a img").attr("src" , imgSrc_big);
	});
});


//