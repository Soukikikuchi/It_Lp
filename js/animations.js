document.addEventListener('DOMContentLoaded', function() {
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
}); 