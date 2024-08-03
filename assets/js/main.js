/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*============= MENU SHOW =============*/ 
// Kiểm tra xem biến `navToggle` có giá trị (không phải `null` hoặc `undefined`) trước khi thêm sự kiện
if (navToggle) {
    // Thêm sự kiện 'click' vào phần tử `navToggle`
    navToggle.addEventListener('click', () => {
        // Khi phần tử `navToggle` được nhấp, thêm lớp 'show-menu' vào phần tử `navMenu`
        navMenu.classList.add('show-menu');
    });
}

/*============= MENU HIDDEN =============*/ 
// Kiểm tra xem phần tử có id 'nav-close' có tồn tại không
if (navClose) {
    // Nếu phần tử tồn tại, thêm một sự kiện 'click' vào phần tử này
    navClose.addEventListener('click', () => {
        // Khi người dùng nhấp vào phần tử 'navClose', loại bỏ lớp 'show-menu' khỏi phần tử 'navMenu'
        navMenu.classList.remove('show-menu');
    });
}


/*=============== REMOVE MENU MOBILE ===============*/
// được sử dụng để chọn và lưu trữ tất cả các phần tử HTML có lớp nav__link trong một biến. Dưới đây là giải thích chi tiết về từng phần của câu lệnh này:
const navLink = document.querySelectorAll('.nav__link');
// Định nghĩa hàm linkAction để thực hiện hành động khi nhấp vào các liên kết
const linkAction = () => {
    // Lấy phần tử có id 'nav-menu'
    const navMenu = document.getElementById('nav-menu');
    // Khi nhấp vào bất kỳ liên kết nào, loại bỏ lớp 'show-menu' khỏi phần tử 'navMenu'
    navMenu.classList.remove('show-menu');
};
// Lặp qua từng phần tử trong NodeList navLink
navLink.forEach(n => {
    // Thêm sự kiện 'click' cho từng phần tử, gọi hàm linkAction khi sự kiện xảy ra
    n.addEventListener('click', linkAction);
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
// Định nghĩa hàm scrollHeader để thay đổi lớp của phần tử header dựa trên vị trí cuộn của trang
const scrollHeader = () => {
    // Lấy phần tử có id 'header'
    const header = document.getElementById('header');

    // Khi vị trí cuộn của trang (scrollY) lớn hơn hoặc bằng 50 viewport height,
    // thêm lớp 'bg-header' vào phần tử header
    // Nếu không, xóa lớp 'bg-header' khỏi phần tử header
    window.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
}

// Thêm sự kiện 'scroll' cho đối tượng window, gọi hàm scrollHeader khi người dùng cuộn trang
window.addEventListener('scroll', scrollHeader);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUpButton = document.getElementById('scroll-up'); // Lấy phần tử với id 'scroll-up'
    // Khi vị trí cuộn của trang (scrollY) lớn hơn hoặc bằng 350px, thêm lớp 'show-scroll' vào phần tử
    // Nếu không, xóa lớp 'show-scroll' khỏi phần tử
    this.scrollY >= 350 ? scrollUpButton.classList.add('show-scroll') : scrollUpButton.classList.remove('show-scroll'); 
}

// Thêm sự kiện lắng nghe sự kiện cuộn của cửa sổ
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// Lấy tất cả các phần tử 'section' có thuộc tính 'id'
const sections = document.querySelectorAll('section[id]');

// Hàm kiểm tra và cập nhật liên kết điều hướng hoạt động dựa trên vị trí cuộn của trang
const scrollActive = () => {
    const scrollY = window.pageYOffset; // Lấy vị trí cuộn hiện tại của trang

    // Duyệt qua từng phần tử 'section'
    sections.forEach(current => {
        // Lấy chiều cao của phần tử 'section' hiện tại
        const sectionHeight = current.offsetHeight;
        // Lấy vị trí từ đầu trang đến đầu phần tử 'section', cộng thêm 58px (có thể là chiều cao của thanh điều hướng)
        const sectionTop = current.offsetTop - 58;
        // Lấy id của phần tử 'section' hiện tại
        const sectionId = current.getAttribute('id');
        // Tìm liên kết điều hướng tương ứng với id của phần tử 'section'
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        // Kiểm tra nếu vị trí cuộn hiện tại nằm trong khoảng của phần tử 'section'
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link'); // Thêm lớp 'active-link' cho liên kết điều hướng
        } else {
            sectionsClass.classList.remove('active-link'); // Xóa lớp 'active-link' khỏi liên kết điều hướng
        }
    });
};

// Thêm sự kiện lắng nghe sự kiện cuộn của cửa sổ để gọi hàm scrollActive
window.addEventListener('scroll', scrollActive);


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
