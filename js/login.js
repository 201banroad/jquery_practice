// 画面表示時のイベント
$(function() {
    toggleUserArea();

    plusUser();

    openSignupForm();

    closeSignupForm();

    checkSignupForm();

    loadSelectedUser();

    loginFormAutoFocus();

    hoverUser();

    emptyLoginForm();

    loginLimitLength();

    setLoginButtonEvent();
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

// ページ表示時に入力欄にフォーカス
function loginFormAutoFocus() {
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
function loginLimitLength() {
    $(".inpt").on("input", function() {
        if($(this).val().length > 20) {
            $(this).val($(this).val().substring(0,20));
        }
    });
}

// ログインフォーム入力時はボタンを活性化（普段はHTML側でボタン非活性）
function updateLoginButton() {
    // 全部が空白じゃなければtrue
    const isFilled = $(".inpt").toArray().every(input =>
        $(input).val().trim() !== ""
    );

    // isFilledがtrueならdisabledがfalseになり、ボタンが有効になる
    $("#loginBtn").prop("disabled", !isFilled);;
}

// 入力時にボタン状態更新処理を実行する
function setLoginButtonEvent() {
    $(".inpt").on("input", function() {
        updateLoginButton();
    });
}