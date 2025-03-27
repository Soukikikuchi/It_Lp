// メインJavaScriptファイル
// サポートOne ランディングページ

document.addEventListener('DOMContentLoaded', function() {
  // モバイルメニュートグル
  const menuToggle = document.getElementById('menu-toggle');
  const navList = document.querySelector('.nav__list');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navList.classList.toggle('active');
    });
  }
  
  // スクロールアニメーション要素を取得
  const scrollElements = document.querySelectorAll('.scroll-animation');
  const sectionTitles = document.querySelectorAll('.section-title');
  
  // 要素が画面内に入ったかどうかをチェックする関数
  const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= 
      (window.innerHeight || document.documentElement.clientHeight) * (1 - offset)
    );
  };
  
  // 要素をアニメーションさせる関数
  const displayScrollElement = (element) => {
    element.classList.add('animated');
  };
  
  // スクロール時のハンドラー
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 0.25)) {
        displayScrollElement(el);
      }
    });
    
    sectionTitles.forEach((el) => {
      if (elementInView(el, 0.25)) {
        el.classList.add('animated');
      }
    });
  };
  
  // スクロールイベントリスナーを追加
  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });
  
  // 初期表示時にもチェック
  handleScrollAnimation();
  
  // フォーム送信処理
  const contactForm = document.querySelector('.contact__form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // フォームデータの取得
      const formData = new FormData(this);
      const formValues = {};
      
      for (let [key, value] of formData.entries()) {
        formValues[key] = value;
      }
      
      // 実際のプロジェクトでは、ここでAPIにデータを送信する処理を実装
      console.log('フォームデータ:', formValues);
      
      // 送信成功メッセージ
      alert('お問い合わせありがとうございます。担当者より折り返しご連絡いたします。');
      
      // フォームをリセット
      this.reset();
    });
  }
  
  // スムーズスクロール
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  
  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // モバイルメニューが開いている場合は閉じる
        if (navList.classList.contains('active')) {
          menuToggle.classList.remove('active');
          navList.classList.remove('active');
        }
      }
    });
  });
});
