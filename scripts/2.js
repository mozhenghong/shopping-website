// 搜索框文字效果
$(function () {
    $('#inputSearch').focus(function () {
        $(this).addClass('focus')
        if ($(this).val() === this.defaultValue) {
            $(this).val('')
        }
    }).blur(function () {
        $(this).removeClass('focus')
        if ($(this).val() === '') {
            $(this).val(this.defaultValue)
        }
    }).keyup(function (e) {
        if (e.which === 13) {
            alert('回车提交表单')
        }
    })
})

// 网页换肤
$(function () {
    var $li = $('#skin>li')
    $li.click(function () {
        switchSkin(this.id)
    })
    var cookie_skin = $.cookie('MyCssSkin')
    if (cookie_skin) {
        switchSkin(cookie_skin)
    }
})
function switchSkin(skinName) {

    $('#' + skinName).addClass('selected')
        .siblings().removeClass('selected')
    $('#cssfile').attr('href', './styles/skin/' + skinName + '.css')
    $.cookie('MyCssSkin', skinName, { path: '/', expires: 10 })
}

//导航效果

$(function () {
    $('#nav li').hover(function () {
        $(this).find('.jnnav').show()

    }, function () {
        $(this).find('.jnnav').hide()
    })
})

// 左侧商品分类热销效果

$(function () {
    $('.promoted').append('<span class="hot"></span>')
})

//　单击产品小图片切换大图
$(function () {
    $("#proitem ul.imgList li a").click(function () {
        var imgSrc = $(this).find("img").attr("src");
        var i = imgSrc.lastIndexOf(".");
        var unit = imgSrc.substring(i);
        imgSrc = imgSrc.substring(0, i);
        var imgSrc_big = imgSrc + "_small" + unit;
        $(".zoomwrap a img").attr("src", imgSrc_big);
    });
});


//产品属性介绍选项卡

$(function () {
    $('.tab_menu li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected')
        var index = $('.tab_menu li').index(this)
        $('.tab_box div').eq(index).show().siblings().hide()
    })
})


//右侧产品颜色切换

$(function () {
    $('.color_change img').click(function () {
        $(this).addClass('selected').parent().siblings().find('img').removeClass('selected')
        var imgSrc = $(this).attr('src');
        var i = imgSrc.lastIndexOf('.');
        var unit = imgSrc.substring(i);
        imgSrc = imgSrc.substring(0, i);
        var imgSrc_small = imgSrc + '_one_small' + unit;
        var imgSrc_big = imgSrc + '_one_big' + unit;
        $('#bigimage').attr('src', imgSrc_small);
        $('.look a').attr('href', imgSrc_big);
        var alt = $(this).attr('alt');
        $('.color_change strong').text(alt);
        var newImgSrc = imgSrc.replace('images/pro_img/', '');
        $('.imgList li').hide();
        $('.imgList').find('.imgList_' + newImgSrc).show()
    })
})

//　右侧产品尺寸切换

$(function () {
    $('.size li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected')
        var alt = $(this).attr('alt')
        $('.pro_size strong').text(alt)
    })
})

// 右侧产品数量和价格联动
$(function () {
    $('#num_sort ').change(function () {
        var index = $(this).val();
        $('.pro_price strong').text(200 * index)
    })
})

//　右侧给产品评分的效果

$(function () {
    $('ul.rating li a').click(function () {
        var title = $(this).attr('title');
        alert('您给本商品的评分是：' + title);
        var cl = $(this).parent().attr('class')
        $('.pro_rating ul').removeClass().addClass('rating ' + cl + 'star');
        return false;
    })
})

//右侧放入购物车

$(function () {
    var $product = $('#details');
    $('#cart a').click(function () {
        var name = $product.find('h4:first').text();
        var size = $product.find('.pro_size strong').text();
        var color = $product.find('.color_change strong').text();
        var num = $product.find('#num_sort').val();
        var price = $product.find('.pro_price strong').text();
        var dialog = '感谢您的购买。\n您购买的\n' +
            '产品是：' + name + ';\n' +
            '尺寸是：' + size + ';\n' +
            '颜色是：' + color + ';\n' +
            '数量是：' + num + ';\n' +
            '总价是：' + price + '元';
        alert(dialog);
        return false;
    })
})