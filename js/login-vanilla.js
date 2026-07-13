document.addEventListener('DOMContentLoaded', () => {

    // class属性値で要素を取得
    const a = document.querySelector('.subBlk tbody tr');
    console.log(a);

    // idで要素を取得  
    const b = document.getElementById('loginBtn');
    console.log(b);

    // 属性値で要素を取得
    const c = document.querySelector('input[type="text"]');
    console.log(c);

    // 要素の子要素を取得
    const children = a.children;
    console.log(children);

    // 要素をクリックしたら、エリアが開く
    document.getElementById('openBtn').addEventListener('click', function() {
        const area = document.getElementById('subArea');
        if(area.style.display ==='none') {
            area.style.display ='block';
        } else {
            area.style.display = 'none';
        }
    });

    // 要素をクリックしたら、ユーザーが追加される
    document.getElementById('addUser').addEventListener('click', function() {
        let userCount = document.querySelectorAll('.subBlk tbody tr').length +1;
        document.querySelector('.subBlk tbody').insertAdjacentHTML('beforeend',`
            <tr>
                <td>test_user_${userCount}</td>
                <td>テストユーザー${userCount}</td>
            </tr>    
        `) 
    });

    // マウスホバー時、対象ユーザーの色を緑に
    const userRows = document.querySelectorAll('.subBlk tbody tr');
    userRows.forEach(userRow => {
        userRow.addEventListener('mouseenter', () => {
            userRow.classList.add('select_user_row');
        });
        userRow.addEventListener('mouseleave', () => {
            userRow.classList.remove('select_user_row');
        });
    });
});
