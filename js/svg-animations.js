// SVGアニメーション用のJavaScript
document.addEventListener('DOMContentLoaded', function() {
  // ヒーローセクションのメガホンアニメーション
  const heroIllustration = document.getElementById('hero-illustration');
  if (heroIllustration) {
    // SVGをロード
    heroIllustration.innerHTML = '<object type="image/svg+xml" data="images/isometric/hero-megaphone.svg" class="hero-svg"></object>';
    
    // アニメーションクラスを追加
    setTimeout(() => {
      heroIllustration.classList.add('animated');
    }, 500);
  }
  
  // セキュリティ対策のアニメーション
  const securityIllustration = document.getElementById('security-illustration');
  if (securityIllustration) {
    securityIllustration.innerHTML = '<object type="image/svg+xml" data="images/isometric/security-protection.svg" class="security-svg"></object>';
  }
  
  // サポート内容のアニメーション
  const supportIllustration = document.getElementById('support-illustration');
  if (supportIllustration) {
    supportIllustration.innerHTML = '<object type="image/svg+xml" data="images/isometric/support-service.svg" class="support-svg"></object>';
  }
  
  // 料金プランのアニメーション
  const priceIllustration = document.getElementById('price-illustration');
  if (priceIllustration) {
    priceIllustration.innerHTML = '<object type="image/svg+xml" data="images/isometric/price-plans.svg" class="price-svg"></object>';
  }
  
  // スクロールアニメーション
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.scroll-animation');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight * 0.8) {
        element.classList.add('animated');
      }
    });
  };
  
  // 初期チェック
  animateOnScroll();
  
  // スクロールイベントリスナー
  window.addEventListener('scroll', animateOnScroll);
  
  // SVG要素のアニメーション（SVGがロードされた後に実行）
  const animateSVGElements = function() {
    // メガホンのアニメーション
    const megaphoneSVG = document.querySelector('.hero-svg');
    if (megaphoneSVG && megaphoneSVG.contentDocument) {
      const flyingMessages = megaphoneSVG.contentDocument.getElementById('flying-messages');
      if (flyingMessages) {
        flyingMessages.classList.add('float');
      }
      
      const megaphone = megaphoneSVG.contentDocument.getElementById('megaphone');
      if (megaphone) {
        megaphone.classList.add('pulse');
      }
    }
    
    // セキュリティのアニメーション
    const securitySVG = document.querySelector('.security-svg');
    if (securitySVG && securitySVG.contentDocument) {
      const shield = securitySVG.contentDocument.getElementById('shield');
      if (shield) {
        shield.classList.add('pulse');
      }
      
      const dataPackets = securitySVG.contentDocument.getElementById('data-packets');
      if (dataPackets) {
        dataPackets.classList.add('float');
      }
    }
  };
  
  // SVGがロードされるのを待ってからアニメーション適用
  setTimeout(animateSVGElements, 1000);
});
