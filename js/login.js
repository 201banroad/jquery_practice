// 画面表示時のイベント
$(function() {
    toggleUserArea();

    plusUser();

    openRegist();

    closeRegist();

    checkRegist();
});

//エリア開閉
function toggleUserArea() {
    $("#openBtn").click(function() {
        $("#subArea").slideToggle();
    });
}

//行数を取得してユーザーの追加 
function plusUser() {
    let userCount = $(".subBlk tbody tr").length +1;
    $("#addUser").click(function() {
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
function openRegist() {
    $("#signup").click(function() {
        $(".modal-back").show();
        $(".dialogForm").show();
    });
}

// 新規登録フォームを非表示して入力値を初期化するメソッド
function hideRegist() {
    $(".modal-back").hide();
    $(".dialogForm").hide();
    $("#registForm")[0].reset();
}

// Xボタンクリックで新規登録フォームを非表示
function closeRegist() {
    $(".delete").click(function() {
        hideRegist();
    });
}

// フォームのsubmitボタンが押されたら、未入力チェック
function checkRegist() {
    $("#registForm").submit(function(e){
        e.preventDefault();
        const registId = $("#registId").val()
        const registPassword = $("#registPassword").val()
        const registConfirm = $("#registConfirm").val()
        if (
            registId.trim() === "" ||
            registPassword.trim() === "" ||
            registConfirm.trim() === ""
        ){
            alert("未入力の項目があります");
        } else if (registPassword != registConfirm){
            alert("パスワードと確認用パスワードの値が違います");
        } else {
            alert("新規登録しました");
            hideRegist();
        }
    });
}