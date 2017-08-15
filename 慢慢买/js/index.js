/**
 * Created by 小小王 on 2017/8/15.
 */
$(function(){
    $("#menu").on("click",".item:nth-child(8)",function(){

        $("#menu .item:nth-last-child(-n+4)").toggle();
    })
    menuProduct();
    cuProduct();
})
//ajax请求
function  menuProduct(){
    $.ajax({
        url:"http://182.254.146.100:3000/api/getindexmenu",
        success:function(data){

            var html =template("menu-Product",data);
            $("#menu").html(html);

        }
    })
}

function  cuProduct(){
    $.ajax({
        url:"http://182.254.146.100:3000/api/getmoneyctrl",
        success:function(data){
            var  html =template("cu-Product",data);
            $("ul").html(html);
        }
    })
}