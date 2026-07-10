// 画面表示時のイベント
$(function () {
    
    const openBtn = $("#openBtn");
    const area = $("#subArea");

    //エリア開閉
    openBtn.click(function(){
        area.slideToggle();
    });


    //ユーザー追加
    const addUser = $("#addUser");
    let userCount = $(".subBlk tbody tr").length +1;

    addUser.click(function(){

        $(".subBlk tbody").append(`
            <tr>
				<td>test_user_${userCount}</td>
				<td>テストユーザー${userCount}</td>
    		</tr>
        `);
        userCount++;
       
    });

    $("#signup").click(function(){
        $(".modal-back").show();
        $(".dialogForm").show();
    });

    $(".delete").click(function(){
        $(".modal-back").hide   ();
        $(".dialogForm").hide();
    });

    $("form").submit(function(e){
        e.preventDefault();

    })


});




    
