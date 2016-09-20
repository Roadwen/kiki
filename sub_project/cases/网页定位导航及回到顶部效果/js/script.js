$(document).ready(function() {
    //滚动条发生滚动
    $(window).scroll(function() {
        //获取页面相对于滚动条顶部的偏移
        let top = $(document).scrollTop();
        let menu = $('#menu');
        let items = $('#content').find('.item');
        let currentId = ''; 
        items.each(function() {
            let itemTop = $(this).offset().top;
            if (top > itemTop - 150) {
                currentId = '#' + $(this).attr('id');
            } else {
                return false;
            }
        });
        let currentLink = menu.find('.current');
        if (currentId && currentLink.attr('href') != currentId) {
            currentLink.removeClass('current');
            menu.find('[href="' + currentId + '"]').addClass('current');
        }
        //隐藏回到顶部按钮
        if ($(document).scrollTop() < $(window).height()) {
            $('#b2t').hide();
        }
        //显示回到顶部按钮
        if ($(document).scrollTop() > $(window).height()) {
            $('#b2t').show();
        }
    });
});

//回到顶部
$('#b2t').click(function () {
    //获取当前滚动条距离页面顶部的距离
    let currentScrollTop = $(document).scrollTop();
    let timer = setInterval(function () {
        //当页面高度大于0时减少滚动条和页面顶部的距离
        if ($(document).scrollTop() > 0) {
            //动态设置页面上移速度
            let speed = Math.floor(-$(document).scrollTop()/5);
            $(document).scrollTop(currentScrollTop += speed);
        } else {
            clearInterval(timer);
        }
    }, 10);
});