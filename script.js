const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 获取模态框元素
const modal = document.getElementById('qrModal');
const modalImg = document.getElementById('modalQrImage');
const closeBtn = document.querySelector('.close-modal');

// 为所有查看二维码按钮添加点击事件
document.querySelectorAll('.view-qr-btn').forEach(button => {
    button.addEventListener('click', function() {
        const qrImage = this.previousElementSibling;
        modal.style.display = 'flex';
        modalImg.src = qrImage.src;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        console.log('Opening modal with image:', qrImage.src);
    });
});

// 关闭模态框
function closeModal() {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // 恢复背景滚动
    }, 300);
}

closeBtn.addEventListener('click', closeModal);

// 点击模态框外部也可以关闭
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

// ESC键关闭模态框
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});