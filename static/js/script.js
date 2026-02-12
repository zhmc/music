// static/js/script.js

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 表单前端验证示例
    const songRequestForm = document.getElementById('songRequestForm'); // 给表单添加 id="songRequestForm"
    if (songRequestForm) {
        songRequestForm.addEventListener('submit', function(event) {
            let isValid = true;
            const songName = document.getElementById('song_name');
            const className = document.getElementById('class_name');
            const studentName = document.getElementById('student_name');

            // 简单的非空检查
            if (!songName.value.trim()) {
                alert('请输入歌曲名称');
                songName.focus();
                isValid = false;
            } else if (!className.value.trim()) {
                alert('请输入班级');
                className.focus();
                isValid = false;
            } else if (!studentName.value.trim()) {
                alert('请输入姓名');
                studentName.focus();
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault(); // 阻止表单提交
            }
        });
    }

    // 后台管理页面 - 删除按钮确认
    const deleteButtons = document.querySelectorAll('.btn-delete');
    deleteButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            if (!confirm('确定要删除这条点歌请求吗？此操作不可恢复。')) {
                event.preventDefault();
            }
        });
    });

    // 可以在这里添加更多交互功能，例如：
    // - 使用 Ajax 提交表单（提升用户体验）
    // - 动态加载内容
    // - 动画效果等
});