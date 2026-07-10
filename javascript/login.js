// 画面表示時のイベント
$(function (){
    toggleArea();

    plusUser();

    openForm();

    closeForm();

    formCheck();
});

//エリア開閉
function toggleArea(){
    $("#openBtn").click(function(){
        $("#subArea").slideToggle();
    });
}

//行数を取得してユーザーの追加 
function plusUser(){
    let userCount = $(".subBlk tbody tr").length +1;
    $("#addUser").click(function(){
        $(".subBlk tbody").append(`
            <tr>
                <td>test_user_${userCount}</td>
                <td>テストユーザー${userCount}</td>
            </tr>
        `);
        userCount++;
    });
}

// 新規登録ボタンクリックで新規登録フォームを表示
function openForm(){
    $("#signup").click(function(){
        $(".modal-back").show();
        $(".dialogForm").show();
    });
}

// Xボタンクリックで新規登録フォームを非表示
function closeForm(){
    $(".delete").click(function(){
        $(".modal-back").hide();
        $(".dialogForm").hide();
    });
}

// フォームのsubmitボタンが押されたら、未入力チェック
function formCheck(){
    $("form").submit(function(e){
        e.preventDefault();
        const registId = $("#registId").val()
        const registPassword = $("#registPassword").val()
        const registConfirm = $("#registConfirm").val()
        if(registId.trim() === "" 
        || registPassword.trim() === "" 
        || registConfirm.trim() === "" ){
            alert("未入力の項目があります");
        } else if(registPassword != registConfirm){
            alert("パスワードと確認用パスワードの値が違います");
        } else{
            alert("新規登録しました");
        }
    });
}





    
