import { Language } from '../types';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      products: 'Products',
      aiPlanner: 'AI Planner',
      about: 'About Us',
      contact: 'Contact',
      startProject: 'Start Project',
    },
    hero: {
      badge: 'Leading Software Innovation in Thrace & Beyond',
      titleLine1: 'Building the',
      titleLine2: 'Digital Future',
      description: 'Thracian Soft transforms complex business challenges into elegant, scalable software solutions. From AI integration to enterprise web platforms, we engineer success.',
      planBtn: 'Plan Your Project with AI',
      servicesBtn: 'Explore Services',
      satisfaction: 'Client Satisfaction',
      delivered: 'Projects Delivered',
    },
    services: {
      title: 'Our Expertise',
      subtitle: 'We combine technical excellence with business acumen to deliver software that drives growth.',
      items: {
        web: { title: 'Web Development', desc: 'High-performance web applications built with React, Next.js, and modern frameworks tailored to your business logic.' },
        mobile: { title: 'Mobile Solutions', desc: 'Native and cross-platform mobile apps for iOS and Android that provide seamless user experiences.' },
        ai: { title: 'AI Integration', desc: 'Leverage the power of LLMs and machine learning to automate processes and gain intelligent insights.' },
        cloud: { title: 'Cloud Infrastructure', desc: 'Scalable AWS and Azure solutions ensuring your software remains available, secure, and fast globally.' },
        data: { title: 'Data Engineering', desc: 'Robust database architecture and data pipelines to handle high-volume information securely.' },
        security: { title: 'Cybersecurity', desc: 'Proactive security measures and code audits to protect your digital assets from emerging threats.' },
      }
    },
    products: {
      badge: 'Proprietary Solutions',
      titlePrefix: 'Software That',
      titleHighlight: 'Empowers',
      description: 'Beyond agency services, we build and maintain enterprise-grade SaaS products designed to solve specific industry challenges.',
      viewDetails: 'View Details',
      viewDocs: 'API Docs',
      comingSoon: 'Coming Soon',
      items: {
        nurvakti: { category: 'Mobile App', desc: 'A prayer times application that provides accurate adhan times, qibla direction, and daily prayers with a clean and intuitive interface.', features: ['Accurate Prayer Times', 'Qibla Compass', 'Prayer Reminders', 'Clean Interface'] },
        opinion: { category: 'Social App', desc: 'A fun and interactive social voting app where you swipe to share your thoughts on trending questions. Vote, compare, create polls, and discover what the world thinks!', features: ['Swipe to Vote', 'Compare Mode', 'Custom Polls', 'Global Community'] },
        bunual: { category: 'Comparison Platform', desc: 'A comprehensive smartphone comparison and rating platform. Browse 2000+ phone models across 76 brands, compare detailed specs across 7 key metrics, check bunuAl scores, and make informed decisions based on independent and unbiased data.', features: ['2000+ Phone Models', 'Smart Rating System', 'Detailed Comparisons', 'Independent & Unbiased'] },
      }
    },
    ai: {
      badge: 'Thracian AI Planner',
      title: 'Validate Your Software Idea',
      description: 'Not sure where to start? Describe your project idea below, and our AI Solution Architect will provide an instant preliminary technical breakdown and estimate.',
      placeholder: 'E.g., I want to build a mobile app for local farmers to sell produce directly to consumers...',
      analyzeBtn: 'Generate Project Plan',
      analyzing: 'Analyzing Architecture...',
      error: "We couldn't analyze your request right now. Please try again later.",
      summary: 'Executive Summary',
      stack: 'Recommended Stack',
      timeline: 'Estimated Timeline',
      features: 'Key Features',
      emptyTitle: 'Ready to Analyze',
      emptyDesc: 'Your personalized project roadmap will appear here after analysis.',
    },
    about: {
      titleLine1: 'Heritage of Strength',
      titleLine2: 'Future of Tech',
      p1: 'Founded on the principles of resilience and craftsmanship inspired by our Thracian roots, Thracian Soft has evolved into a premier software consultancy.',
      p2: 'We believe code is modern-day architecture. We don\'t just write scripts; we build digital infrastructures that stand the test of time.',
      stat1: 'Industry Excellence',
      stat2: 'Support & Maintenance',
    },
    contact: {
      title: "Let's Build Something Great",
      subtitle: "Whether you have a fully drafted specification or just a rough idea, we're ready to listen.",
      email: 'Email Us',
      call: 'Call Us',
      visit: 'Visit HQ',
      form: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
      }
    },
    footer: {
      rights: 'All rights reserved.',
    }
  },
  tr: {
    nav: {
      home: 'Ana Sayfa',
      services: 'Hizmetler',
      products: 'Ürünler',
      aiPlanner: 'YZ Planlayıcı',
      about: 'Hakkımızda',
      contact: 'İletişim',
      startProject: 'Projeye Başla',
    },
    hero: {
      badge: 'Trakya ve Ötesinde Yazılım İnovasyonuna Öncülük Ediyoruz',
      titleLine1: 'Dijital Geleceği',
      titleLine2: 'İnşa Ediyoruz',
      description: 'Thracian Soft, karmaşık iş zorluklarını şık ve ölçeklenebilir yazılım çözümlerine dönüştürür. Yapay zeka entegrasyonundan kurumsal web platformlarına kadar başarıyı mühendislik hassasiyetiyle tasarlıyoruz.',
      planBtn: 'YZ ile Projenizi Planlayın',
      servicesBtn: 'Hizmetleri Keşfet',
      satisfaction: 'Müşteri Memnuniyeti',
      delivered: 'Tamamlanan Proje',
    },
    services: {
      title: 'Uzmanlık Alanlarımız',
      subtitle: 'Büyümeyi sağlayan yazılımlar sunmak için teknik mükemmelliği iş zekasıyla birleştiriyoruz.',
      items: {
        web: { title: 'Web Geliştirme', desc: 'İş mantığınıza özel React, Next.js ve modern çerçevelerle oluşturulmuş yüksek performanslı web uygulamaları.' },
        mobile: { title: 'Mobil Çözümler', desc: 'iOS ve Android için sorunsuz kullanıcı deneyimleri sağlayan yerel ve çapraz platform mobil uygulamalar.' },
        ai: { title: 'Yapay Zeka Entegrasyonu', desc: 'Süreçleri otomatikleştirmek ve akıllı öngörüler elde etmek için LLM ve makine öğreniminin gücünden yararlanın.' },
        cloud: { title: 'Bulut Altyapısı', desc: 'Yazılımınızın küresel olarak erişilebilir, güvenli ve hızlı kalmasını sağlayan ölçeklenebilir AWS ve Azure çözümleri.' },
        data: { title: 'Veri Mühendisliği', desc: 'Yüksek hacimli bilgileri güvenli bir şekilde işlemek için sağlam veritabanı mimarisi ve veri hatları.' },
        security: { title: 'Siber Güvenlik', desc: 'Dijital varlıklarınızı ortaya çıkan tehditlerden korumak için proaktif güvenlik önlemleri ve kod denetimleri.' },
      }
    },
    products: {
      badge: 'Özel Çözümler',
      titlePrefix: '',
      titleHighlight: 'Güç Veren Yazılımlar',
      description: 'Ajans hizmetlerinin ötesinde, belirli endüstri zorluklarını çözmek için tasarlanmış kurumsal düzeyde SaaS ürünleri geliştiriyor ve sürdürüyoruz.',
      viewDetails: 'Detayları Gör',
      viewDocs: 'API Doküman',
      comingSoon: 'Yakında',
      items: {
        nurvakti: { category: 'Mobil Uygulama', desc: 'Doğru ezan vakitlerini, kıble yönünü ve günlük duaları temiz ve sezgisel bir arayüzle sunan namaz vakitleri uygulaması.', features: ['Doğru Namaz Vakitleri', 'Kıble Pusulası', 'Namaz Hatırlatıcıları', 'Sade Arayüz'] },
        opinion: { category: 'Sosyal Uygulama', desc: 'Trend sorularda kaydırarak oyunu paylaştığın eğlenceli ve interaktif bir sosyal oylama uygulaması. Oy ver, karşılaştır, anket oluştur ve dünyanın ne düşündüğünü keşfet!', features: ['Kaydır & Oyla', 'Karşılaştırma Modu', 'Özel Anketler', 'Global Topluluk'] },
        bunual: { category: 'Karşılaştırma Platformu', desc: 'Kapsamlı bir akıllı telefon karşılaştırma ve puanlama platformu. 76 marka arasında 2000+ telefon modeline göz at, 7 temel metrikte detaylı spesifikasyonları karşılaştır, bunuAl puanlarını incele ve bağımsız veriler üzerinden bilinçli kararlar al.', features: ['2000+ Telefon Modeli', 'Akıllı Puanlama Sistemi', 'Detaylı Karşılaştırmalar', 'Bağımsız & Tarafsız'] },
      }
    },
    ai: {
      badge: 'Thracian YZ Planlayıcı',
      title: 'Yazılım Fikrinizi Doğrulayın',
      description: 'Nereden başlayacağınızdan emin değil misiniz? Proje fikrinizi aşağıda açıklayın, YZ Çözüm Mimarımız anında bir ön teknik döküm ve tahmin sunsun.',
      placeholder: 'Örn: Yerel çiftçilerin ürünlerini doğrudan tüketicilere satması için bir mobil uygulama yapmak istiyorum...',
      analyzeBtn: 'Proje Planı Oluştur',
      analyzing: 'Mimari Analiz Ediliyor...',
      error: "İsteğinizi şu anda analiz edemedik. Lütfen daha sonra tekrar deneyin.",
      summary: 'Yönetici Özeti',
      stack: 'Önerilen Teknoloji Yığını',
      timeline: 'Tahmini Süre',
      features: 'Temel Özellikler',
      emptyTitle: 'Analiz İçin Hazır',
      emptyDesc: 'Kişiselleştirilmiş proje yol haritanız analizden sonra burada görünecektir.',
    },
    about: {
      titleLine1: 'Güçlü Miras,',
      titleLine2: 'Teknolojik Gelecek',
      p1: 'Trakya köklerimizden ilham alan dayanıklılık ve ustalık ilkeleri üzerine kurulan Thracian Soft, önde gelen bir yazılım danışmanlığına dönüştü.',
      p2: 'Kodun modern mimari olduğuna inanıyoruz. Sadece senaryo yazmıyoruz; zamana meydan okuyan dijital altyapılar inşa ediyoruz.',
      stat1: 'Sektör Mükemmelliği',
      stat2: 'Destek & Bakım',
    },
    contact: {
      title: "Harika Bir Şeyler İnşa Edelim",
      subtitle: "İster tam taslağınız olsun, ister sadece kabataslak bir fikriniz, sizi dinlemeye hazırız.",
      email: 'Bize Yazın',
      call: 'Bizi Arayın',
      visit: 'Merkezi Ziyaret Edin',
      form: {
        firstName: 'Ad',
        lastName: 'Soyad',
        email: 'E-posta',
        message: 'Mesaj',
        submit: 'Mesaj Gönder',
      }
    },
    footer: {
      rights: 'Tüm hakları saklıdır.',
    }
  }
};