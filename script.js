// 点击按钮弹出提示
function showMessage() {
    alert("已为您呼叫主理人的绿泡泡--😊");
}
function showMessageAndFloat(e) {
    e.stopPropagation(); // 保留阻止冒泡的逻辑
    showMessage(); // 第一步：执行提示框（alert会阻塞代码，关闭后才执行下一步）
    showFloatImage(e); // 第二步：关闭提示框后，显示悬浮窗
}


// 表单提交处理
document.getElementById('contactForm').addEventListener('submit', function(e) {
    // 阻止表单默认提交行为
    e.preventDefault();
    
    // 获取表单数据
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    
    // 简单验证（前端）
    if (!name || !phone || !email) {
        alert("请填写所有必填项！");
        return;
    }
    
    // 模拟表单提交成功
    alert(`感谢 ${name}！你的留言已提交，我们会尽快通过 ${phone} 联系你。`);
    
    // 重置表单
    this.reset();
});

// 平滑滚动（点击导航栏链接跳转到对应区域）
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// 原有JS代码（showMessage、表单提交、平滑滚动等）保留

// 新增：悬浮小窗逻辑
// 主理人-13585644471
function showFloatImage(e) {
  e.stopPropagation(); // 阻止事件冒泡（避免点击按钮就触发空白处关闭）
  const floatImg = document.getElementById("floatImage");
  floatImg.classList.add("show");
}

// 点击页面空白处隐藏悬浮窗
document.addEventListener("click", function() {
  const floatImg = document.getElementById("floatImage");
  floatImg.classList.remove("show");
});

// 点击悬浮窗本身，不隐藏（避免点图片就消失）
document.getElementById("floatImage").addEventListener("click", function(e) {
  e.stopPropagation();
});