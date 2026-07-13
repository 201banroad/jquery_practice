// 画面表示時のイベント
$(function (){
    toggleArea();

    plusUser();

    openForm();

    closeForm();

    formCheck();

    userGreen();

    userDisplay();

    autoFocus();

    hoverUser();

    emptyLoginForm();

    signupLimitLength()
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

// ダブルクリックしたユーザーの行の色を緑に変更
function userGreen(){
    $(".subBlk tbody").on("dblclick", "tr", function(){
        $(".subBlk tbody tr").removeClass("select-green");
        $(this).toggleClass("select-green");
    });
}

// ダブルクリックしたユーザーの情報を取得してログインフォームに表示
// パスワードは、何行目のユーザーかを取得してフォームに表示
function userDisplay(){
    $(".subBlk tbody").on("dblclick", "tr", function(){
        const loginId = $(this).find("td").eq(0).text();
        $("#login_id").val(loginId);
        const lineNumber = $(this).index() + 1;
        $("#password").val("password" + lineNumber);
    });
}

// ページ表示時に入力欄にフォーカス
function autoFocus() {
    $("#login_id").focus();
}

// マウスが乗った時に色変更
function hoverUser() {
    $(".subBlk tbody")
        .on("mouseenter", "tr",
        function() {
            $(this).addClass("hover-user")
        })
        .on("mouseleave", "tr",
        function() {
            $(this).removeClass("hover-user")
        })
}

// 未入力だった場合、フォームの背景を赤く変更
function emptyLoginForm() {

    // 初期表示時にそれぞれチェックしている
    $(".inpt").each(function() {
        $(this).toggleClass("empty-login-form",
        $(this).val().trim() === ""
    )});
    
    // 入力されるたびにフォームの空白チェック
    $(".inpt").on("input", function() {
        $(this).toggleClass("empty-login-form",
        $(this).val().trim() === ""
    )});
}

// ログインフォームの文字数制限
function signupLimitLength() {
    $(".inpt").on("input", function() {
        if($(this).val().length > 20) {
            $(this).val($(this).val().substring(0,20));
        }
    });
} 