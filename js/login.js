// 画面表示時のイベント
$(function() {
    toggleUserArea();

    plusUser();

    openSignupForm();

    closeSignupForm();

    checkSignupForm();

    loadSelectedUser();
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
function openSignupForm() {
    $("#signup").click(function() {
        $(".modal-back").show();
        $(".dialogForm").show();
    });
}

// 新規登録フォームを非表示して入力値を初期化するメソッド
function hideSignupForm() {
    $(".modal-back").hide();
    $(".dialogForm").hide();
    $("#registForm")[0].reset();
}

// Xボタンクリックで新規登録フォームを非表示
function closeSignupForm() {
    $(".delete").click(function() {
        hideSignupForm();
    });
}

// フォームのsubmitボタンが押されたら、未入力チェック
function checkSignupForm() {
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

function loadSelectedUser() {
    $(".subBlk tbody").on("dblclick", "tr", function(){
        // ダブルクリックしたユーザーの行の色を緑に変更
        $(".subBlk tbody tr").removeClass("select-highlight");
        $(this).toggleClass("select-highlight");

        // ダブルクリックしたユーザーの情報を取得してログインフォームに表示
        // パスワードは、何行目のユーザーかを取得してフォームに表示
        const loginId = $(this).find("td").eq(0).text();
        $("#login_id").val(loginId);
        const lineNumber = $(this).index() + 1;
        $("#password").val("password" + lineNumber);
    });
}