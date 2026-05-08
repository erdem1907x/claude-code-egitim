// =====================================================
// CLAUDE CODE EĞİTİM SİTESİ — KONU VERİLERİ
// Kaynak: "Claude Code ile No-Code Uygulama Geliştirme Yol Haritası"
//         "Hiç Kod Bilmeyenler İçin Claude Code ile Uygulama Yapma Rehberi"
// =====================================================

var topics = [
  // ──────────────────────────────────────────────────────────────
  // 1. CLAUDE CODE NEDİR?
  // ──────────────────────────────────────────────────────────────
  {
    id: 1,
    icon: "🤖",
    title: "Claude Code Nedir?",
    desc: "Yapay zeka destekli terminal kodlama asistanı — yazılım bilmeden uygulama yapmak",
    tag: "beginner",
    tagLabel: "Başlangıç",
    subs: [
      {
        icon: "🏗️",
        title: "Mimar Arkadaş Benzetmesi",
        desc: "Claude Code'u anlamanın en kolay yolu",
        content: {
          summary: "Claude Code, senin 7/24 ulaşabildiğin yazılımcı arkadaşındır. Hiç sıkılmaz, her zaman sabırlıdır.",
          analogy: "Hayalindeki ev için bir mimar arkadaşın var. Ona 'iki katlı, 4 odalı, bahçeli, modern bir ev istiyorum' diyorsun. Mimar çizimleri kendisi yapıyor, inşaat malzemelerini biliyor, belediye işlerini hallediyor, beğenmediğin yerleri değiştiriyor. Claude Code da uygulamalar için tam bunu yapar — sen fikri anlatırsın, o 'çizimi' (kodu) yapar.",
          points: [
            "Sen patron / ürün sahibi gibisin",
            "Claude Code ise yazılımcı, teknik asistan ve proje yardımcısı",
            "İyi çalışması için ona net görev vermelisin",
            "Belirsiz komut = belirsiz sonuç"
          ]
        }
      },
      {
        icon: "✅",
        title: "Claude Code Neler Yapabilir?",
        desc: "Yapabileceklerinin tam listesi",
        content: {
          summary: "Claude Code proje klasörü içinde çalışır; kod tabanını okur, dosyaları düzenler, terminal komutları çalıştırır.",
          table: [
            { col1: "\"Bana giriş ekranı yap\"", col2: "Şifreli login, kayıt, şifre sıfırlama sayfaları kurar" },
            { col1: "\"Mavi tema istiyorum\"", col2: "Tüm sayfaların rengini değiştirir" },
            { col1: "\"Mobilde de güzel görünsün\"", col2: "Telefon, tablet, masaüstü uyumlu hale getirir" },
            { col1: "\"Veriler kaydedilsin\"", col2: "Veritabanı kurar, kayıt etme kodunu yazar" },
            { col1: "\"İnternete yayınla\"", col2: "Vercel'e yükler, yayına alır" },
            { col1: "\"Bu hata neden çıkıyor?\"", col2: "Hatayı analiz eder, düzeltir" },
            { col1: "\"Bu kısmı değiştir\"", col2: "Mevcut kodu bulur, ister gibi değiştirir" }
          ]
        }
      },
      {
        icon: "🚫",
        title: "Claude Code Neler YAPMAZ?",
        desc: "Sınırları bilmek seni hayal kırıklığından korur",
        content: {
          summary: "Ne kadar harika olsa da Claude Code'un sınırları var. Çok zeki bir stajyer gibi düşün — ne yapmasını açıkça söylemek senin işin.",
          table: [
            { col1: "Ne istediğini tahmin edemez", col2: "Sen ne istediğini açıkça söylemen gerekir" },
            { col1: "Senin için karar vermez", col2: "Hangi rengi sevdiğini bilemez, sorar" },
            { col1: "Müşteri bulamaz", col2: "Uygulamayı tanıtmak senin işin" },
            { col1: "Yasal işleri halledemez", col2: "KVKK, vergi vb. — bunlar senin sorumluluğun" },
            { col1: "Sınırsız değil", col2: "Çok karmaşık şeylerde sınıra dayanabilir" }
          ]
        }
      },
      {
        icon: "💰",
        title: "Fiyatlandırma",
        desc: "Claude Code'a ne kadar para vereceğim?",
        content: {
          summary: "Yeni başlayanlar için Claude Pro ($20/ay) tavsiye edilir. İlk birkaç ay rahat rahat yetiyor.",
          table: [
            { col1: "Claude Free", col2: "Ücretsiz — çok az, sadece denemek için" },
            { col1: "Claude Pro", col2: "$20/ay — günde 4-5 saat rahatça (önerilen)" },
            { col1: "Claude Max", col2: "$100-200/ay — tüm gün, hiç sınır yok" },
            { col1: "API Pay-As-You-Go", col2: "Kullandığın kadar — ortalama $10-30/ay" }
          ],
          note: "Ayda 1 fincan kahveden bile ucuz! ☕"
        }
      },
      {
        icon: "🎯",
        title: "Ne Tür Uygulamalar Yapılır?",
        desc: "Gerçek hayattan örnekler",
        content: {
          summary: "Yazılım bilmeyen insanların Claude Code ile yaptığı gerçek örnekler:",
          table: [
            { col1: "Diyetisyen", col2: "Hastalarının beslenme planlarını takip ettiği özel uygulama" },
            { col1: "Emlakçı", col2: "Müşterilere ev önerileri gönderen sistem" },
            { col1: "Öğretmen", col2: "Öğrencilere otomatik test gönderen platform" },
            { col1: "Kuaför", col2: "Online randevu alma sistemi" },
            { col1: "Yazar", col2: "Kişisel blog ve okuyucu mail listesi" },
            { col1: "Pazarlamacı", col2: "Sosyal medya içerik takvimi" },
            { col1: "Anne", col2: "Çocuğunun ödevlerini takip eden ToDo uygulaması" }
          ],
          note: "Bu insanların hiçbiri yazılım eğitimi almadı. Hepsi günde 1-2 saat ayırdı, 1-2 ayda uygulamalarını yayına aldı."
        }
      }
    ]
  },

  // ──────────────────────────────────────────────────────────────
  // 2. TEMEL KAVRAMLAR SÖZLÜĞÜ
  // ──────────────────────────────────────────────────────────────
  {
    id: 2,
    icon: "📖",
    title: "Temel Kavramlar Sözlüğü",
    desc: "Terminal, kod, veritabanı, API, GitHub — her kavramı günlük örneklerle anlıyoruz",
    tag: "beginner",
    tagLabel: "Başlangıç",
    subs: [
      {
        icon: "⬛",
        title: "Terminal (Komut Satırı)",
        desc: "Siyah ekran korkutucu değil!",
        content: {
          summary: "Bilgisayarına yazıyla komut verdiğin siyah ekran. Mac'te 'Terminal', Windows'ta 'PowerShell' denir.",
          analogy: "Bir askeri telsiz gibi düşün. Görsel arayüz yok, sadece yazı yazıp komut veriyorsun. 'Mutfağa git' yerine 'cd mutfak'. Önce yabancı gelir, sonra alışılır.",
          codes: [
            { cmd: "cd Belgeler", desc: "→ Belgeler klasörüne git" },
            { cmd: "ls", desc: "→ Bu klasörde ne var? listele" },
            { cmd: "mkdir projem", desc: "→ Yeni klasör oluştur" },
            { cmd: "claude", desc: "→ Claude Code'u başlat" }
          ]
        }
      },
      {
        icon: "💻",
        title: "Kod Nedir?",
        desc: "Bilgisayar için yemek tarifi",
        content: {
          summary: "Bilgisayara ne yapması gerektiğini söyleyen yazılı talimatlar. İngilizce ve matematik karışımı.",
          analogy: "Kod, bilgisayar için yemek tarifi. Sen 'sufle yap' demek istiyorsun ama bilgisayara her adımı söylemen gerekiyor: 'Yumurta kır, sarısını ayır, çırp...' Claude Code bu tarifi senin yerine yazıyor. Sen sadece 'sufle yap' diyorsun.",
          note: "Sen hiç kod yazmayacaksın! Sadece ne istediğini Türkçe söyleyeceksin."
        }
      },
      {
        icon: "🗄️",
        title: "Veritabanı Nedir?",
        desc: "Excel tablosu ama çok daha güçlü",
        content: {
          summary: "Veritabanı = çok büyük, akıllı bir Excel dosyası. Aynı anda binlerce kişi açıp kullanabilir, otomatik yedek alır, çok hızlı arar.",
          analogy: "Sayfalar = Tablolar (her tablo bir konu: kullanıcılar, ürünler, siparişler). Sütunlar = Alanlar (isim, e-posta, fiyat). Satırlar = Kayıtlar (her satır bir kullanıcı, bir ürün).",
          table: [
            { col1: "id", col2: "1" },
            { col1: "isim", col2: "Ayşe Yılmaz" },
            { col1: "email", col2: "ayse@gmail.com" },
            { col1: "kayit_tarihi", col2: "2026-05-08" }
          ],
          note: "Excel ile farkı: aynı anda binlerce kişi açıp kullanabilir, otomatik yedek alır."
        }
      },
      {
        icon: "🍽️",
        title: "API Nedir?",
        desc: "Sistemlerin birbirine konuşma dili",
        content: {
          summary: "API, uygulamanın başka uygulamalarla konuşmasını sağlar.",
          analogy: "Bir restorana gittin. Mutfağa girip yemeği kendin yapmıyorsun. Garsona söylüyorsun: 'Bana 1 kahve.' Garson mutfağa gidiyor, kahveyi getiriyor. API tam olarak bu garson. Sen bir uygulamadan başka bir uygulamaya bilgi istiyorsun, API o bilgiyi getiriyor.",
          table: [
            { col1: "Stripe API", col2: "Ödeme başlatır" },
            { col1: "Resend API", col2: "E-posta gönderir" },
            { col1: "OpenAI / Claude API", col2: "Yapay zeka cevabı üretir" },
            { col1: "Google Maps API", col2: "Harita ve konum bilgisi verir" },
            { col1: "WhatsApp API", col2: "Mesaj gönderir" },
            { col1: "Supabase API", col2: "Veritabanına kayıt ekler" }
          ]
        }
      },
      {
        icon: "🔑",
        title: "API Anahtarı (API Key)",
        desc: "Gizli anahtarını asla kimseye gösterme!",
        content: {
          summary: "API'leri kullanmak için kimlik kartı gibi bir şey. Genelde uzun, rastgele harflerden oluşur.",
          analogy: "Kredi kartını cüzdanına koyuyorsun, alnına yazmıyorsun. Aynı mantık. API anahtarlarını .env.local dosyasına koyuyorsun, koda yazmıyorsun. Bu dosya GitHub'a yüklenmiyor.",
          codes: [
            { cmd: "sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxx", desc: "Böyle görünür — kimseyle paylaşma!" }
          ],
          note: "⚠️ API anahtarlarını ASLA kimseye gösterme. Sosyal medyaya, ekran görüntüsüne, GitHub'a yapıştırma. Birinin eline geçerse senin hesabını kullanır, fatura gelir!"
        }
      },
      {
        icon: "🏢",
        title: "Frontend & Backend",
        desc: "Restoran analojisi ile açıklıyoruz",
        content: {
          summary: "Her uygulamanın görünen ve görünmeyen iki tarafı vardır.",
          table: [
            { col1: "Frontend (Ön Yüz)", col2: "Müşterinin gördüğü kısım: sayfalar, butonlar, formlar, renkler" },
            { col1: "Backend (Arka Yüz)", col2: "Müşterinin görmediği kısım: veritabanı, kullanıcı doğrulama, ödeme işlemi" }
          ],
          analogy: "Restoran olarak düşün. Frontend = salon, masalar, menü, dekor. Backend = mutfak, depo, kasiyer, muhasebe."
        }
      },
      {
        icon: "☁️",
        title: "GitHub & Repository",
        desc: "Kodun için bulut yedek sistemi",
        content: {
          summary: "Repository: Projenin tutulduğu klasör. GitHub: Repository'nin internet versiyonu — Google Drive gibi ama kod için.",
          analogy: "Telefonun fotoğraflarını iCloud'a yedekliyor musun? GitHub da aynı şey: kodun bulutta tutulur. Bilgisayarın bozulsa, GitHub'dan geri indirirsin. Hatta her değişiklikte 'fotoğraf çeker' — geçmişe dönüp '3 gün önceki haline dön' diyebilirsin.",
          note: "Ücretsiz. github.com adresinden hesap aç."
        }
      },
      {
        icon: "🚀",
        title: "Deploy (Yayına Alma)",
        desc: "Düğünü hazırladın, davetiye dağıt!",
        content: {
          summary: "Uygulamanın internette kullanılabilir hale gelmesidir.",
          analogy: "Düğün hazırladın — masalar dizilmiş, yemekler hazır, müzik kuruldu. Ama davetiye göndermediysen kimse bilmiyor. Deploy = davetiye dağıtmak. Uygulaman bilgisayarında çalışıyor (sadece sen görüyorsun). Deploy edersen internete açılıyor — herkes adresi yazıp girebiliyor.",
          note: "Vercel ile deploy etmek birkaç tık ve 2-3 dakika sürüyor!"
        }
      },
      {
        icon: "🔒",
        title: "Environment Variable (.env)",
        desc: "Gizli bilgileri sakladığın güvenli yer",
        content: {
          summary: "Gizli bilgileri sakladığın özel dosya. API anahtarları, şifreler buraya yazılır.",
          analogy: "Kredi kartını cüzdanına koyuyorsun, alnına yazmıyorsun. .env.local dosyası da bu cüzdan. Bu dosya GitHub'a yüklenmiyor, sadece senin bilgisayarında kalıyor.",
          codes: [
            { cmd: "NEXT_PUBLIC_SUPABASE_URL=https://...", desc: "Supabase proje URL'i" },
            { cmd: "NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...", desc: "Public API anahtarı" },
            { cmd: "SUPABASE_SERVICE_ROLE_KEY=eyJ...", desc: "Gizli servis anahtarı — frontend'de kullanılmaz!" }
          ]
        }
      }
    ]
  },

  // ──────────────────────────────────────────────────────────────
  // 3. KURULUM REHBERİ
  // ──────────────────────────────────────────────────────────────
  {
    id: 3,
    icon: "⚙️",
    title: "1 Saatlik Kurulum",
    desc: "Node.js, Git, Claude Code ve VS Code — adım adım kurulum",
    tag: "beginner",
    tagLabel: "Başlangıç",
    subs: [
      {
        icon: "1️⃣",
        title: "Node.js Kurulumu",
        desc: "Claude Code'un temel altyapısı",
        content: {
          summary: "Node.js, Claude Code'un çalışmasına imkan sağlayan altyapı. Bilmen gereken bir şey değil — sadece kuracaksın.",
          steps: [
            "nodejs.org aç → 'LTS' yazan büyük yeşil butonu indir (LTS = uzun vadeli destekli)",
            "İndirilen dosyaya çift tıkla → 'Next, Next, Install' — varsayılan ayarlarla devam et",
            "Terminal aç → 'node --version' yaz → 'v20.x.x' gibi bir şey görmeli"
          ],
          codes: [
            { cmd: "node --version", desc: "→ v20.x.x görmeli" }
          ],
          note: "Hata aldıysan: bilgisayarı kapat, aç. Windows'ta yönetici (administrator) olarak PowerShell aç."
        }
      },
      {
        icon: "2️⃣",
        title: "Git Kurulumu",
        desc: "Değişiklik geçmişini tutan araç",
        content: {
          summary: "Git, dosyalarının değişiklik geçmişini tutan araç. GitHub bunu kullanır.",
          steps: [
            "Terminalde 'git --version' yaz — sayı görüyorsan kurulu, sonraki adıma geç",
            "git-scm.com → işletim sistemine göre indir, kur",
            "Bilgilerini terminal'e gir:"
          ],
          codes: [
            { cmd: "git --version", desc: "→ kurulu mu kontrol et" },
            { cmd: "git config --global user.name \"Adın Soyadın\"", desc: "→ isim ayarla" },
            { cmd: "git config --global user.email \"sen@email.com\"", desc: "→ email ayarla" }
          ]
        }
      },
      {
        icon: "3️⃣",
        title: "Claude Code Kurulumu",
        desc: "Tek komutla yükle!",
        content: {
          summary: "Şimdi yıldız kuruluyor. Tek komut, hepsi bu.",
          steps: [
            "Terminalde aşağıdaki komutu yaz ve bekle (birkaç dakika sürer)",
            "Test et: claude --version",
            "Boş bir klasöre git, 'claude' yaz → tarayıcı açılır, giriş yapmanı ister"
          ],
          codes: [
            { cmd: "npm install -g @anthropic-ai/claude-code", desc: "→ Claude Code'u yükle" },
            { cmd: "claude --version", desc: "→ sürüm numarasını gör" },
            { cmd: "claude", desc: "→ Claude Code'u başlat" }
          ]
        }
      },
      {
        icon: "4️⃣",
        title: "VS Code (Önerilen)",
        desc: "Kodu görsel olarak izlemek için",
        content: {
          summary: "VS Code = Microsoft'un yaptığı kod editörü. Claude'un yazdığı kodu görsel görmek için. Şart değil ama hayatını kolaylaştırır.",
          steps: [
            "code.visualstudio.com → işletim sistemine göre indir, kur",
            "Açtıktan sonra Extensions sekmesi → 'Turkish Language Pack' ara, kur (isteğe bağlı)"
          ],
          note: "Tebrikler, kurulum tamamlandı! 🎉 Bilgisayarın artık uygulama yapmaya hazır."
        }
      },
      {
        icon: "🔑",
        title: "Gerekli Hesaplar",
        desc: "4 hesap, hepsi 5-10 dakikada açılıyor",
        content: {
          summary: "Tüm hesapları aynı e-posta ile aç. Hayatın kolaylaşır.",
          table: [
            { col1: "GitHub (github.com)", col2: "Ücretsiz — kodu saklamak için" },
            { col1: "Supabase (supabase.com)", col2: "Ücretsiz — veritabanı, auth, storage" },
            { col1: "Vercel (vercel.com)", col2: "Ücretsiz — yayına almak için" },
            { col1: "Claude (claude.ai)", col2: "$20/ay Pro — Claude Code için" }
          ],
          note: "Bu adımı tamamlayanların %95'i uygulamasını bitiriyor. En zor kısım geçti — psikolojik bariyer!"
        }
      }
    ]
  },

  // ──────────────────────────────────────────────────────────────
  // 4. CLAUDE.md & SLASH COMMANDS
  // ──────────────────────────────────────────────────────────────
  {
    id: 4,
    icon: "📋",
    title: "CLAUDE.md ve Slash Commands",
    desc: "Claude'u proje bağlamında eğitmek ve hızlı komutlarla çalışmak",
    tag: "beginner",
    tagLabel: "Başlangıç",
    subs: [
      {
        icon: "📝",
        title: "CLAUDE.md Nedir?",
        desc: "Claude'un hatırladığı proje kitapçığı",
        content: {
          summary: "Bu dosya, Claude Code'un proje içindeki çalışma kurallarıdır. Her projede kök dizinde bulunması çok faydalıdır.",
          analogy: "Yeni eve taşındın. Cumartesi temizlikçi geliyor. 'Mutfak dolaplarını silme, yatak odası perdeleri yıkanmaz, banyo ürünleri raflarda kalsın' diye bir not bırakırsın. Her geldiğinde tekrar anlatmazsın. CLAUDE.md tam olarak bu not. Claude her seferinde okuyor.",
          codes: [
            { cmd: "# Proje Adı\n\nBu projeyi yazılım bilmeyen bir kullanıcı yönetiyor.\n- Her değişiklikten önce plan sun.\n- Riskli işlem yapmadan önce uyar.\n- Kodları sade ve okunabilir yaz.\n- Her işlem sonunda ne yaptığını Türkçe açıkla.", desc: "Örnek CLAUDE.md içeriği" }
          ],
          note: "Senin için CLAUDE.md çok önemlidir çünkü her seferinde aynı şeyleri tekrar anlatmanı engeller."
        }
      },
      {
        icon: "⚡",
        title: "Slash Commands",
        desc: "Tek komutla büyük işler",
        content: {
          summary: "Eğik çizgi (/) ile başlayan kısa komutlar. Sürekli aynı şeyi yazmak yerine bir komutla yapıyorsun.",
          table: [
            { col1: "/clear", col2: "Konuşmayı sıfırla, yeni başla (kafası karıştığında)" },
            { col1: "/init", col2: "Yeni projeye başlarken otomatik CLAUDE.md oluşturur" },
            { col1: "/plan", col2: "'Kod yazma, önce ne yapacağını anlat' demek" },
            { col1: "/agents", col2: "Hangi agent'ların var, listele" },
            { col1: "/skills", col2: "Yüklü skill'leri göster" },
            { col1: "/mcp", col2: "Bağlı dış araçları göster" },
            { col1: "/help", col2: "Yardım menüsü" }
          ]
        }
      },
      {
        icon: "🎯",
        title: "Plan Mode Kullanımı",
        desc: "Kod yazmadan önce onay al",
        content: {
          summary: "Doğrudan koda atlamak yerine önce planlamak çok önemli. /plan komutu bunu sağlar.",
          analogy: "Plan modu = çizimi onaylamadan inşaata başlamayan akıllı müteahhit. Planı görmeden onay verme, iyice oku, beğenmediğin yerleri belirt.",
          steps: [
            "'/plan' komutunu yaz",
            "Ne yapmak istediğini anlat",
            "Claude detaylı plan çıkarır — kod yazmaz",
            "Planı incele, değişiklik iste",
            "'Onayla, başla' de — artık koda geçer"
          ],
          note: "Planı görmeden onay verme! İyi bir plan = az hata = az zaman kaybı."
        }
      },
      {
        icon: "📜",
        title: "CLAUDE.md Tam Şablon",
        desc: "Projenize kopyalayabileceğiniz hazır şablon",
        content: {
          summary: "Aşağıdaki şablonu kendi projenize göre düzenleyin ve CLAUDE.md dosyası olarak kaydedin.",
          codes: [
            {
              cmd: "# CLAUDE.md\n\nBu proje, yazılım uzmanı olmayan bir kullanıcı tarafından\nClaude Code desteğiyle geliştirilmektedir.\n\n## Genel Kurallar\n- Her büyük değişiklikten önce plan yap\n- Kullanıcı yazılım bilmediği için teknik açıklamaları sade Türkçe yap\n- MVP dışına çıkma\n- API key ve şifreleri asla koda yazma\n- Supabase RLS güvenlik kurallarını ihmal etme\n- Deploy öncesi npm run build çalıştır\n\n## Teknoloji Tercihleri\n- Frontend: Next.js\n- UI: Tailwind CSS\n- Database: Supabase\n- Hosting: Vercel\n\n## Çalışma Şekli\n1. Analiz → 2. Plan → 3. Dosya listesi\n4. Uygulama → 5. Test → 6. Türkçe özet",
              desc: "Hazır CLAUDE.md şablonu"
            }
          ]
        }
      }
    ]
  },

  // ──────────────────────────────────────────────────────────────
  // 5. SKİLLS, MCP, PLUGİNS, SUBAGENTS
  // ──────────────────────────────────────────────────────────────
  {
    id: 5,
    icon: "🧰",
    title: "Skills, MCP, Plugins ve Subagents",
    desc: "Claude'un süper güçleri — dış araçlara bağlanma ve uzmanlık paketleri",
    tag: "intermediate",
    tagLabel: "Orta Seviye",
    subs: [
      {
        icon: "📚",
        title: "Skills — Uzmanlık Paketleri",
        desc: "Claude'a özel yetenekler öğretmek",
        content: {
          summary: "Skill = Belirli bir konuda uzmanlık. Claude'a 'şu konuyu unutma' dediğin tarif kitabı.",
          analogy: "Annenden 50 yemek tarifi aldın. Hepsi ayrı ayrı kâğıtlarda. Bunları bir defter haline getirip mutfağa koyuyorsun. Skills = Claude için bu defter. 'Sufle yap' dediğinde defterden tarifi açıp uyguluyor.",
          table: [
            { col1: "app-planner", col2: "Fikri uygulama planına çevirir" },
            { col1: "database-designer", col2: "Veritabanı tablolarını çıkarır" },
            { col1: "ui-builder", col2: "Ekran tasarımı ve arayüz üretir" },
            { col1: "debugger", col2: "Hata analiz eder" },
            { col1: "deployment-checker", col2: "Yayına alma öncesi kontrol yapar" },
            { col1: "prd-writer", col2: "Uygulama şartnamesi oluşturur" },
            { col1: "pdf / docx / xlsx / pptx", col2: "Dosya oluşturma ve düzenleme" }
          ]
        }
      },
      {
        icon: "🔌",
        title: "MCP — Dış Araçlara Köprü",
        desc: "Claude'u GitHub, Supabase, Stripe'a bağla",
        content: {
          summary: "MCP, Claude Code'u senin diğer uygulamalarınla konuşturuyor. Model Context Protocol — tek standart, yüzlerce araç.",
          analogy: "USB-C adaptörü gibi düşün. Telefonun şarjı için USB-C kullanıyor. Aynı kabloyla bilgisayarına da, tablet'ine de, hatta kulaklığına da bağlayabiliyorsun. MCP de böyle — tek protokol, Claude'u yüzlerce farklı araca bağlıyor.",
          table: [
            { col1: "GitHub MCP", col2: "Kodları okuyabilir, issue açabilir, PR hazırlayabilir" },
            { col1: "Supabase MCP", col2: "Veritabanını inceleyebilir, tablo yapısını görebilir" },
            { col1: "Figma MCP", col2: "Tasarımı okuyup ekrana çevirebilir" },
            { col1: "Sentry MCP", col2: "Hataları okuyup çözüm önerebilir" },
            { col1: "Stripe MCP", col2: "Ödeme entegrasyonunu kontrol edebilir" },
            { col1: "Notion MCP", col2: "Proje dokümanlarını okuyabilir" }
          ],
          note: "Başlangıç öncelik sırası: 1. GitHub MCP → 2. Supabase MCP → 3. Figma MCP → 4. Sentry MCP"
        }
      },
      {
        icon: "🧩",
        title: "Plugins — Hazır Paket Çözümler",
        desc: "App Store gibi — yükle ve kullan",
        content: {
          summary: "Plugin = Bir veya birden fazla skill, agent, komutun bir arada paketi. Tek tıkla projene yükleniyor.",
          analogy: "App Store'dan oyun indiriyorsun. Tek tık, kuruluyor, oynuyorsun. Plugin Marketplace de Claude Code için aynı şey.",
          table: [
            { col1: "UI design plugin", col2: "Arayüz tasarım kalitesini artırır" },
            { col1: "Testing plugin", col2: "Testleri kolaylaştırır" },
            { col1: "GitHub plugin", col2: "GitHub işlemlerini kolaylaştırır" },
            { col1: "Database plugin", col2: "Veritabanı işlemlerini kolaylaştırır" },
            { col1: "Deployment plugin", col2: "Yayına alma sürecini düzenler" }
          ],
          note: "Yeni başlayan biri olarak plugin tarafına hemen girmen önerilmez. Önce temel akışı öğren."
        }
      },
      {
        icon: "🤝",
        title: "Subagents — Uzman Yardımcılar",
        desc: "Her konuda bir uzman",
        content: {
          summary: "Subagent, Claude Code içinde özel uzman yardımcı gibi çalışır. Biri veritabanı, biri güvenlik, biri yayınlama konusunda uzmanlaşabilir.",
          table: [
            { col1: "Product Manager Agent", col2: "Fikri ürün planına çevirir" },
            { col1: "UI Agent", col2: "Ekranları tasarlar" },
            { col1: "Database Agent", col2: "Veri yapısını kurar" },
            { col1: "Security Agent", col2: "Güvenliği kontrol eder" },
            { col1: "Deployment Agent", col2: "Yayına alma kontrolü yapar" },
            { col1: "Debug Agent", col2: "Hataları analiz eder" }
          ],
          note: "Başlangıçta hepsini kurmak zorunda değilsin. Önce Claude Code'u sade kullan, sonra bu yapıları eklersin."
        }
      },
      {
        icon: "⚙️",
        title: "Hooks — Otomatik Tetikleyiciler",
        desc: "Belirli anlarda otomatik çalışan kurallar",
        content: {
          summary: "Hook, belli bir işlemden önce veya sonra otomatik çalışan kuraldır.",
          table: [
            { col1: "Kod değişince", col2: "Otomatik test çalıştırır" },
            { col1: "Deploy öncesi", col2: "Build kontrolü yapar" },
            { col1: "Paket kurulunca", col2: "Güvenlik kontrolü yapar" },
            { col1: "Commit öncesi", col2: "Kod formatını düzeltir" },
            { col1: "Hata olunca", col2: "Log dosyası oluşturur" }
          ],
          note: "En faydalı hook'lar: Kod değişince npm run build çalıştır. Deploy öncesi güvenlik kontrolü yap."
        }
      },
      {
        icon: "🗺️",
        title: "Ne Zaman Ne Kullanılır?",
        desc: "API mı, MCP mi, Skill mi?",
        content: {
          summary: "Basit karar tablosu:",
          table: [
            { col1: "Başka sistemden bilgi almak", col2: "API" },
            { col1: "Başka sisteme işlem yaptırmak", col2: "API" },
            { col1: "Claude'un harici aracı düzenli kullanması", col2: "MCP" },
            { col1: "Claude'a özel görev öğretmek", col2: "Skill" },
            { col1: "Claude'a uzman yardımcı oluşturmak", col2: "Subagent" },
            { col1: "Otomatik kontrol çalıştırmak", col2: "Hook" },
            { col1: "Hazır entegrasyon eklemek", col2: "Plugin" },
            { col1: "Kodları saklamak", col2: "GitHub" },
            { col1: "Verileri saklamak", col2: "Supabase Database" },
            { col1: "Yayına almak", col2: "Vercel" }
          ]
        }
      }
    ]
  },

  // ──────────────────────────────────────────────────────────────
  // 6. FİKİRDEN UYGULAMAYA YOL HARİTASI
  // ──────────────────────────────────────────────────────────────
  {
    id: 6,
    icon: "🗺️",
    title: "Fikir → Uygulama Yol Haritası",
    desc: "Fikir aşamasından canlı yayına kadar 10 aşamalı eksiksiz süreç",
    tag: "intermediate",
    tagLabel: "Orta Seviye",
    subs: [
      {
        icon: "💡",
        title: "Aşama 1: Fikri Netleştir",
        desc: "Kod yazmadan önce ne yapacağını bil",
        content: {
          summary: "İlk hedef uygulama fikrini netleştirmektir. Bu aşamada hedef kod yazmak değil, fikri anlaşılır hale getirmektir.",
          codes: [
            { cmd: "Ben yazılım bilmiyorum. Aşağıdaki fikri analiz et:\n[Fikrimi buraya yazıyorum]\n\nBana şunları çıkar:\n1. Uygulamanın amacı\n2. Hangi problemi çözüyor?\n3. Kim kullanacak?\n4. İlk sürümde hangi özellikler olmalı?\n5. Web mi mobil mi olmalı?", desc: "Claude'a verilecek başlangıç komutu" }
          ]
        }
      },
      {
        icon: "🎯",
        title: "Aşama 2: MVP Belirle",
        desc: "Az ama çalışan — mükemmel değil, işlevsel",
        content: {
          summary: "MVP = Minimum Viable Product = İlk yayınlanabilir basit sürüm. Yeni başlayanların en büyük hatası her şeyi birden koymaktır.",
          analogy: "❌ Yanlış: 'CRM olsun, ödeme olsun, mobil olsun, yapay zeka olsun, WhatsApp olsun.' ✅ Doğru: 'İlk sürümde sadece müşteri talep formu, admin paneli ve durum takibi olsun.'",
          codes: [
            { cmd: "Bu uygulama fikrini MVP'ye indir.\nİlk sürümde kesin olması gerekenleri, sonraki sürüme\nbırakılacakları ve gereksiz olanları tablo halinde çıkar.\nBen yazılım bilmiyorum, sade anlat.", desc: "MVP belirleme komutu" }
          ]
        }
      },
      {
        icon: "📄",
        title: "Aşama 3: PRD Hazırla",
        desc: "Uygulamanın yazılı şartnamesi",
        content: {
          summary: "PRD = Product Requirements Document = Uygulama şartnamesi. PRD olmadan kod yazdırmak projeyi dağıtır.",
          steps: [
            "Uygulama özeti",
            "Hedef kullanıcılar",
            "Kullanıcı rolleri",
            "Ekranlar",
            "Özellikler",
            "Veritabanında saklanacak bilgiler",
            "Bildirim ihtiyaçları",
            "Admin paneli ihtiyaçları",
            "MVP kapsamı",
            "Sonraki sürüm özellikleri"
          ],
          note: "PRD bittikten sonra /docs/PRD.md dosyasına kaydet."
        }
      },
      {
        icon: "👥",
        title: "Aşama 4: Kullanıcı Rolleri",
        desc: "Kim ne yapabilir?",
        content: {
          summary: "Her uygulamada herkes aynı yetkiye sahip olmaz. Roller, kimin ne görebileceğini belirler.",
          table: [
            { col1: "Ziyaretçi", col2: "Form doldurabilir" },
            { col1: "Kullanıcı", col2: "Kendi kayıtlarını görebilir" },
            { col1: "Admin", col2: "Tüm kayıtları yönetebilir" },
            { col1: "Süper Admin", col2: "Kullanıcıları ve ayarları yönetebilir" },
            { col1: "Operasyon", col2: "Taleplerin durumunu güncelleyebilir" }
          ]
        }
      },
      {
        icon: "🖥️",
        title: "Aşama 5: Ekran Haritası",
        desc: "Hangi sayfalar olacak?",
        content: {
          summary: "Uygulamanın ekranlarını önceden planlamak geliştirme sürecini çok kolaylaştırır.",
          table: [
            { col1: "Ana sayfa", col2: "Herkes görür — uygulamayı tanıtır" },
            { col1: "Giriş ekranı", col2: "Kullanıcı — hesaba giriş" },
            { col1: "Kayıt ekranı", col2: "Yeni kullanıcı — hesap açma" },
            { col1: "Panel (Dashboard)", col2: "Kullanıcı — kendi verilerini görür" },
            { col1: "Admin paneli", col2: "Admin — tüm verileri yönetir" },
            { col1: "Detay sayfası", col2: "Kayıt detaylarını gösterir" },
            { col1: "Ayarlar", col2: "Admin — sistem ayarlarını düzenler" }
          ]
        }
      },
      {
        icon: "🗄️",
        title: "Aşama 6: Veri Yapısı Planla",
        desc: "Veritabanı tablolarını tasarla",
        content: {
          summary: "Veritabanını Excel tabloları gibi düşünebilirsin. Her tablo belirli bir veri türünü saklar.",
          table: [
            { col1: "users", col2: "Kullanıcı hesapları" },
            { col1: "profiles", col2: "Kullanıcı profil bilgileri" },
            { col1: "requests", col2: "Servis / talep kayıtları" },
            { col1: "request_files", col2: "Taleplere eklenen dosyalar" },
            { col1: "comments", col2: "Talep yorumları" },
            { col1: "notifications", col2: "Bildirimler" }
          ]
        }
      },
      {
        icon: "🏗️",
        title: "Aşama 7: Teknoloji Mimarisi",
        desc: "Yeni başlayan için önerilen stack",
        content: {
          summary: "Yeni başlayan biri için önerilen mimari: Next.js + Supabase + Vercel + GitHub",
          table: [
            { col1: "Next.js", col2: "Uygulamanın web tarafı" },
            { col1: "Supabase", col2: "Veritabanı, kullanıcı girişi, dosya saklama" },
            { col1: "Vercel", col2: "Uygulamayı internete yayınlama" },
            { col1: "GitHub", col2: "Kodları saklama ve versiyonlama" },
            { col1: "Tailwind CSS", col2: "Hızlı ve güzel tasarım" },
            { col1: "shadcn/ui", col2: "Hazır UI bileşenleri" }
          ],
          note: "İlk proje için: önce web uygulaması yap. Mobil uygulamaya sonra geç. App Store / Google Play onayı gerekmez."
        }
      },
      {
        icon: "📁",
        title: "Aşama 8: Klasör Yapısı",
        desc: "Projenin düzenli organizasyonu",
        content: {
          summary: "Bu yapı önemlidir çünkü Claude Code proje büyüdükçe dosyaları daha rahat bulur.",
          codes: [
            {
              cmd: "my-app/\n  app/\n    page.tsx\n    login/\n    dashboard/\n    admin/\n  components/\n    ui/\n    forms/\n    layout/\n  lib/\n    supabase/\n    utils/\n  docs/\n    PRD.md\n    DATABASE.md\n  public/\n  .env.local\n  CLAUDE.md\n  README.md",
              desc: "Önerilen klasör yapısı"
            }
          ]
        }
      },
      {
        icon: "🔨",
        title: "Aşama 9: Geliştirme Sırası",
        desc: "Küçük adımlarla ilerle",
        content: {
          summary: "Uygulamayı tek seferde yaptırma. Küçük ve kontrol edilebilir adımlarla ilerle.",
          steps: [
            "Önce statik arayüz — veritabanı bağlamadan ekranları yap",
            "Sonra Supabase bağlantısı — URL ve API key'i al",
            "Kullanıcı girişini kur — e-posta/şifre ile başla",
            "Veritabanı işlemlerini ekle — önce tek tabloyla başla",
            "Dosya yüklemeyi ekle — Supabase Storage ile",
            "Admin panelini geliştir — listeleme, filtreleme, durum değiştirme"
          ]
        }
      },
      {
        icon: "✅",
        title: "Aşama 10: Master Prompt",
        desc: "Claude'a ilk büyük komutu ver",
        content: {
          summary: "Projeye başlarken Claude'a verilecek başlangıç master prompt'u.",
          codes: [
            {
              cmd: "Ben yazılım, veritabanı ve deployment konularında\nuzman değilim. Claude Code ile no-code mantığında bir web\nuygulaması geliştirmek istiyorum.\n\nUygulama fikrim: [FİKRİNİ YAZ]\n\nSenden beklentim:\n1. Fikri analiz et\n2. MVP kapsamını çıkar\n3. PRD oluştur\n4. Ekran haritası çıkar\n5. Veritabanı tablolarını tasarla\n6. Next.js + Supabase + Vercel mimarisi öner\n7. Geliştirmeyi küçük adımlara böl\n8. Her adımda teknik olmayan dille açıkla\n\nÖnce sadece plan çıkar. Kod yazmaya başlama.",
              desc: "Başlangıç master prompt şablonu"
            }
          ]
        }
      }
    ]
  },

  // ──────────────────────────────────────────────────────────────
  // 7. VİBE CODING: İYİ PROMPT YAZMAK
  // ──────────────────────────────────────────────────────────────
  {
    id: 7,
    icon: "✍️",
    title: "Vibe Coding: İyi Prompt Yazma Sanatı",
    desc: "Claude'a doğru söyleme sanatı — iyi sonuç için net komutlar",
    tag: "beginner",
    tagLabel: "Başlangıç",
    subs: [
      {
        icon: "📐",
        title: "İdeal Fikir Anlatma Şablonu",
        desc: "8 adımda mükemmel brief",
        content: {
          summary: "Uygulama yapmak büyük ölçüde iyi açıklama yapmaktır. Gerisini Claude hallediyor.",
          steps: [
            "UYGULAMA ADI: Ne ad vereceksin?",
            "TEK CÜMLEYLE: Ne yapar bu uygulama?",
            "KİMİN İÇİN: Hedef kitle kim?",
            "NE SORUNU ÇÖZÜYOR: Hayatlarını nasıl kolaylaştırıyor?",
            "ANA ÖZELLİKLER: 3-5 tane sıralı liste",
            "KULLANICI YOLCULUĞU: Adım adım nasıl kullanılır?",
            "NE TUTACAK: Hangi veriler saklanacak?",
            "GÖRÜNÜM: Modern? Sade? Renkli? Profesyonel?"
          ]
        }
      },
      {
        icon: "✅",
        title: "İyi Prompt Örnekleri",
        desc: "Bunlar gibi yaz",
        content: {
          summary: "Detaylı olduğun her cümle, daha iyi sonuç demek. Claude bir arkadaşa ders anlatıyormuşsun gibi konuş.",
          codes: [
            { cmd: "Sayfanın üstüne bir menü ekle. Menüde 'Ana Sayfa', 'Hakkımda', 'İletişim' yazsın. Mobilde menü 3 çizgili (hamburger) ikona dönüşsün.", desc: "✅ İyi prompt — net ve detaylı" },
            { cmd: "Login sayfasında bu hatayı alıyorum: [hata mesajı]. Hangi sayfada olduğunu söyledim, ekran görüntüsü de ekliyorum.", desc: "✅ İyi prompt — bağlam var" },
            { cmd: "Login sayfasında butonun rengi koyu mor olsun, formun arkasında soft gradient olsun, logo da daha büyük 80x80px olsun.", desc: "✅ İyi prompt — ölçüler net" }
          ]
        }
      },
      {
        icon: "❌",
        title: "Kötü Prompt Örnekleri",
        desc: "Bunları yapma",
        content: {
          summary: "Belirsiz komutlar = belirsiz sonuç. Bu tuzaklara düşme.",
          codes: [
            { cmd: "Bana bir uygulama yap", desc: "❌ Çok belirsiz — hangi uygulama, ne için, kimin için?" },
            { cmd: "Daha güzel olsun", desc: "❌ 'Güzel' sübjektif — hangi açıdan? Renk mi? Boyut mu?" },
            { cmd: "Çalışmıyor", desc: "❌ Ne çalışmıyor? Hangi sayfa? Ne tıkladın? Hata mesajı var mı?" }
          ],
          note: "Altın kural: Claude'a bir arkadaşa ders anlatıyormuşsun gibi konuş. Bağlamı ver."
        }
      },
      {
        icon: "🍕",
        title: "Gerçek Örnek: Kuaför Randevu",
        desc: "Tam senaryo — baştan sona",
        content: {
          summary: "Şu şekilde bir brief ile profesyonel bir plan çıkarabilirsin:",
          codes: [
            {
              cmd: "Uygulama Adı: SaçRandevu\nTek Cümleyle: Kuaförler için online randevu yönetim sistemi.\nKimin İçin: Küçük-orta boy kuaför salonları (1-5 çalışanlı)\nHangi Sorunu Çözüyor: Telefonla randevu alıyorlar, defter tutuyorlar.\n\nAna Özellikler:\n- Kuaför girişi (kullanıcı adı + şifre)\n- Müşteri kendi telefonundan randevu alır\n- Randevudan 1 saat önce hatırlatma\n- Müşteri geçmişi\n- Günlük takvim görünümü\n\nGörünüm: Sade, modern. Pembe + altın renkler. Mobile-first.",
              desc: "Örnek brief — Claude bunu alır, detaylı plan çıkarır"
            }
          ]
        }
      },
      {
        icon: "📝",
        title: "Standart Çalışma Komutu",
        desc: "Her yeni özellikte kullan",
        content: {
          summary: "Her yeni özellikte bu akışı kullan:",
          steps: [
            "İsteği açıkla",
            "Claude'dan plan iste",
            "Değişecek dosyaları listelet",
            "Önce küçük parça yaptır",
            "Test ettir",
            "Hata varsa düzelttir",
            "Commit mesajı hazırlat",
            "GitHub'a gönder",
            "Deploy kontrolü yap"
          ],
          codes: [
            {
              cmd: "Ben yazılım bilmiyorum.\nBu özelliği önce analiz et.\nSonra basit bir plan çıkar.\nHangi dosyaları değiştireceğini yaz.\nKodlamaya başlamadan önce riskleri açıkla.\nİş bittikten sonra test komutlarını ver.",
              desc: "Standart çalışma komutu — her zaman kullan"
            }
          ]
        }
      }
    ]
  },

  // ──────────────────────────────────────────────────────────────
  // 8. VERİTABANI MANTIĞI
  // ──────────────────────────────────────────────────────────────
  {
    id: 8,
    icon: "🗄️",
    title: "Veritabanı Mantığı (Supabase)",
    desc: "Tablolar, ilişkiler ve RLS güvenliği — Excel mantığıyla anlıyoruz",
    tag: "intermediate",
    tagLabel: "Orta Seviye",
    subs: [
      {
        icon: "📊",
        title: "Tablo = Bir Konunun Defteri",
        desc: "Excel mantığıyla veritabanı",
        content: {
          summary: "Veritabanı = uygulamanın hafızası. Sen yazmasını bilmek zorunda değilsin, Claude yazıyor. Ama ne tutuğunu anlaman lazım.",
          analogy: "Öğretmensin diyelim. Bir not defterin var. Sütunlar: Numara | İsim | Soyisim | Sınıf | Telefon. Satırlar: Her öğrenci bir satır. Veritabanı tablosu da aynısı. Sadece dijital ve çok daha hızlı.",
          table: [
            { col1: "id", col2: "Her kaydın benzersiz numarası (otomatik)" },
            { col1: "customer_name", col2: "Müşteri adı" },
            { col1: "email", col2: "E-posta adresi" },
            { col1: "status", col2: "Durum (yeni/devam ediyor/tamamlandı)" },
            { col1: "created_at", col2: "Oluşturulma tarihi (otomatik)" }
          ]
        }
      },
      {
        icon: "🔗",
        title: "Tablo İlişkileri",
        desc: "Tablolar birbirine nasıl bağlanır?",
        content: {
          summary: "Bir görevin hangi kullanıcıya ait olduğunu 'kullanici_id' sütunuyla belirtiriz. Buna ilişki denir.",
          analogy: "Apartman daireleri gibi düşün. kullanicilar tablosu = apartman sakinleri listesi. gorevler tablosu = her dairedeki eşyalar. Bir lambanın hangi dairede olduğunu 'Daire 5' yazarak belirtirsin. Veritabanında 'kullanici_id: 1' yazarsın. Aynı mantık.",
          note: "Claude tablo ilişkilerini otomatik kurar. Sen sadece 'kullanıcı birden fazla görev yazabilsin' dersen Claude gerisini halleder."
        }
      },
      {
        icon: "🛡️",
        title: "RLS — Satır Güvenliği",
        desc: "Kim hangi veriyi görebilir?",
        content: {
          summary: "RLS = Row Level Security = Satır Seviyesinde Güvenlik. Bu sayede Ayşe sadece KENDİ verilerini görebilir.",
          analogy: "Bankanın veri sistemi tüm müşterilerin hesap bilgisini tutuyor. Ama sen ATM'ye girdiğinde sadece KENDİ hesabını görüyorsun. Komşunun parasını göremiyorsun. RLS = işte bu sistem.",
          note: "⚠️ RLS olmadan uygulamayı yayınlama! Aksi halde Ayşe, Mehmet'in tüm verilerini görebilir. Hatta dünyada herkes! Claude RLS'i otomatik kuruyor ama sen kontrol et.",
          codes: [
            { cmd: "Supabase RLS politikalarını kontrol et.\nKullanıcı sadece kendi verisini görebilsin.\nAdmin tüm verileri görebilsin.\nBana kuralları sade dille açıkla.", desc: "Claude'a verilecek RLS komutu" }
          ]
        }
      },
      {
        icon: "📁",
        title: "Dosya Saklama (Supabase Storage)",
        desc: "Fotoğraf, PDF, belge yükleme",
        content: {
          summary: "Kullanıcıların yüklediği fotoğraf, PDF, belge gibi dosyalar Supabase Storage'da saklanır.",
          table: [
            { col1: "Kod dosyaları", col2: "GitHub'da saklanır" },
            { col1: "Kullanıcı görselleri", col2: "Supabase Storage" },
            { col1: "PDF / belge", col2: "Supabase Storage veya S3" },
            { col1: "Ortam değişkenleri", col2: "Vercel environment variables" }
          ],
          codes: [
            { cmd: "/uploads\n  /users\n    /profile-images\n  /requests\n    /request-photos\n    /documents\n  /admin\n    /reports", desc: "Örnek storage klasör yapısı" }
          ]
        }
      },
      {
        icon: "🔐",
        title: "Dosya Güvenliği",
        desc: "Yükleme güvenliğini sağla",
        content: {
          summary: "Dosya yükleme sırasında dikkat edilmesi gerekenler:",
          table: [
            { col1: "Çok büyük dosya", col2: "Maksimum boyut koy (örn: 10 MB)" },
            { col1: "Zararlı dosya", col2: "Sadece PDF/JPG/PNG izin ver" },
            { col1: "Herkesin görmesi", col2: "Storage policy ayarla" },
            { col1: "Aynı dosya adı", col2: "Otomatik benzersiz dosya adı üret" }
          ]
        }
      }
    ]
  },

  // ──────────────────────────────────────────────────────────────
  // 9. YAYINA ALMA SÜRECİ
  // ──────────────────────────────────────────────────────────────
  {
    id: 9,
    icon: "🚀",
    title: "Yayına Alma Süreci",
    desc: "GitHub'dan Vercel'e — uygulamanı internete açmak için adım adım",
    tag: "intermediate",
    tagLabel: "Orta Seviye",
    subs: [
      {
        icon: "🧪",
        title: "Önce Lokal Test",
        desc: "Yayına almadan önce çalışıyor mu?",
        content: {
          summary: "Yayına almadan önce bilgisayarında test et.",
          codes: [
            { cmd: "npm install", desc: "→ bağımlılıkları yükle" },
            { cmd: "npm run dev", desc: "→ localhost:3000'de aç ve test et" },
            { cmd: "npm run build", desc: "→ yayın için hazırlık — hata varsa gör" }
          ],
          note: "npm run build başarılıysa yayına almaya hazırsın!"
        }
      },
      {
        icon: "📦",
        title: "GitHub'a Yükle",
        desc: "Kodu buluta yedekle",
        content: {
          summary: "GitHub, kodların yedekli ve düzenli tutulduğu yerdir.",
          steps: [
            "github.com → '+' → 'New repository'",
            "Repo adı ver (örn: benim-projem)",
            "Private veya Public seç",
            "'Create repository' tıkla — README EKLEME, boş bırak",
            "Claude'a repo URL'ini söyle, o push eder"
          ],
          codes: [
            { cmd: "git init", desc: "→ git başlat" },
            { cmd: "git add .", desc: "→ tüm dosyaları hazırla" },
            { cmd: "git commit -m \"İlk sürüm\"", desc: "→ kaydet" },
            { cmd: "git remote add origin GITHUB_URL", desc: "→ GitHub'a bağla" },
            { cmd: "git push -u origin main", desc: "→ yükle" }
          ]
        }
      },
      {
        icon: "▲",
        title: "Vercel'de Yayına Al",
        desc: "5-15 dakikada canlı!",
        content: {
          summary: "Vercel'de GitHub hesabını bağla, projeyi seç, environment variables ekle, deploy butonuna bas.",
          steps: [
            "vercel.com/dashboard → 'Add New' → 'Project'",
            "GitHub repo'sunu listeden seç → 'Import' tıkla",
            "Yapılandırmaya dokunma (Vercel Next.js'i otomatik tanır)",
            "Environment Variables bölümüne .env.local'deki değerleri kopyala",
            "'Deploy' butonuna bas → 2-3 dakika bekle",
            "URL'ini tarayıcıda aç — canlısın! 🎉"
          ],
          note: "⚠️ Environment Variables'ı eklemeyi unutma! En sık yapılan hata bu."
        }
      },
      {
        icon: "🌐",
        title: "Domain Bağla",
        desc: "Kendi alan adını kullan",
        content: {
          summary: "app.vercel.app yerine kendi domain'ini kullanmak istersen:",
          steps: [
            "Cloudflare Registrar veya Namecheap'ten domain al (yıllık ~$10-15)",
            "Vercel projen → Settings → Domains → domain'ini yaz, ekle",
            "Vercel sana bazı DNS kayıtları verir (A, CNAME)",
            "Domain panelinde bu kayıtları kopyala-yapıştır ekle",
            "5-30 dakika içinde aktif, HTTPS otomatik gelir"
          ]
        }
      },
      {
        icon: "🔄",
        title: "Otomatik Deploy",
        desc: "Kod push et, site güncellenir",
        content: {
          summary: "GitHub'a push ettiğin anda Vercel otomatik olarak yeni sürümü yayına alır.",
          steps: [
            "Claude'a yeni özellik söyle",
            "Claude yazar ve test eder",
            "Sen localhost:3000'de kontrol edersin",
            "Claude git push komutunu çalıştırır",
            "Vercel 1-2 dakika içinde otomatik canlıya alır"
          ],
          note: "Profesyonel yazılımcıların 'CI/CD pipeline' dediği şey budur — sen tek satır kod yazmadan bunu kurmuş oldun!"
        }
      },
      {
        icon: "✅",
        title: "Yayın Öncesi Kontrol Listesi",
        desc: "Bunları kontrol etmeden yayına çıkma",
        content: {
          summary: "Yayına almadan önce kontrol listesi:",
          table: [
            { col1: "Ana sayfa açılıyor mu?", col2: "Kontrol et" },
            { col1: "Giriş çalışıyor mu?", col2: "Kontrol et" },
            { col1: "Veriler Supabase'e kaydoluyor mu?", col2: "Kontrol et" },
            { col1: "Admin panel korunuyor mu?", col2: "Kontrol et" },
            { col1: "Mobil görünüm düzgün mü?", col2: "Kontrol et" },
            { col1: "API key'ler gizli mi?", col2: "Kontrol et" },
            { col1: "npm run build başarılı mı?", col2: "ZORUNLU" },
            { col1: "Supabase RLS açık mı?", col2: "ZORUNLU" },
            { col1: "Vercel env değişkenleri girildi mi?", col2: "ZORUNLU" }
          ]
        }
      }
    ]
  },

  // ──────────────────────────────────────────────────────────────
  // 10. GÜVENLİK
  // ──────────────────────────────────────────────────────────────
  {
    id: 10,
    icon: "🔐",
    title: "Güvenlik Temelleri",
    desc: "API key güvenliği, RLS, admin panel koruması ve dosya güvenliği",
    tag: "intermediate",
    tagLabel: "Orta Seviye",
    subs: [
      {
        icon: "🔑",
        title: "API Key Güvenliği",
        desc: "En kritik güvenlik konusu",
        content: {
          summary: "API key, sistemlere giriş anahtarı gibidir. Yanlış saklama = fatura veya veri sızıntısı.",
          codes: [
            { cmd: "// ❌ YANLIŞ — asla yapma\nconst key = \"sk_live_abc123...\"", desc: "Koda yazma!" },
            { cmd: "// ✅ DOĞRU\nconst key = process.env.STRIPE_KEY", desc: ".env.local'den oku" }
          ],
          note: "⚠️ Kazara GitHub'a yüklediysen: 1) Anahtarı HEMEN iptal et, 2) Yeni anahtar al, 3) GitHub tarihçesinden de sil."
        }
      },
      {
        icon: "🛡️",
        title: "Supabase RLS Kontrol",
        desc: "Veri erişim güvenliği",
        content: {
          summary: "RLS olmadan uygulamayı yayınlama! Her kullanıcı sadece kendi verisini görmeli.",
          steps: [
            "Supabase dashboard → Authentication → Policies'e git",
            "Her tablo için 'Enable RLS' açık olmalı",
            "En az 1 policy tanımlanmış olmalı",
            "Claude'a 'RLS politikalarını kontrol et' komutunu ver"
          ],
          codes: [
            { cmd: "Supabase RLS politikalarını kontrol et.\nKullanıcı sadece kendi verisini görebilsin.\nAdmin tüm verileri görebilsin.", desc: "Claude'a verilecek kontrol komutu" }
          ]
        }
      },
      {
        icon: "🚪",
        title: "Admin Panel Koruması",
        desc: "Yetkisiz erişimi engelle",
        content: {
          summary: "Admin panel sadece admin kullanıcıya açık olmalıdır.",
          steps: [
            "Admin olmayan kullanıcı /admin sayfasına girememeli",
            "Giriş yapmamış kullanıcı otomatik login sayfasına yönlendirilmeli",
            "Her admin sayfasında rol kontrolü yapılmalı"
          ],
          codes: [
            { cmd: "Admin panel güvenliğini kontrol et.\nAdmin olmayan kullanıcı /admin sayfasına giremesin.\nGiriş yapmamış kullanıcı otomatik login sayfasına yönlendirilsin.", desc: "Claude'a kontrol komutu" }
          ]
        }
      },
      {
        icon: "📎",
        title: "Dosya Yükleme Güvenliği",
        desc: "Zararlı dosyaları engelle",
        content: {
          summary: "Dosya yükleme özelliği güvenlik açığı oluşturabilir.",
          codes: [
            { cmd: "Dosya yükleme güvenliğini kontrol et.\nSadece jpg, png ve pdf kabul edilsin.\nMaksimum dosya boyutu 10 MB olsun.\nDosya adları otomatik benzersiz oluşturulsun.", desc: "Güvenlik komutu" }
          ],
          table: [
            { col1: "Çok büyük dosya", col2: "Maksimum boyut sınırı koy" },
            { col1: "Zararlı dosya tipi", col2: "Sadece PDF/JPG/PNG izin ver" },
            { col1: "Herkesin erişimi", col2: "Storage policy ayarla" },
            { col1: "Aynı dosya adı çakışması", col2: "Otomatik benzersiz isim üret" }
          ]
        }
      },
      {
        icon: "📊",
        title: "Yayın Sonrası İzleme",
        desc: "Hataları ve kullanımı takip et",
        content: {
          summary: "Uygulama yayına çıktıktan sonra iş bitmez. İzleme ve bakım devam eder.",
          table: [
            { col1: "Hata takibi", col2: "Sentry" },
            { col1: "Kullanıcı takibi", col2: "Google Analytics / Vercel Analytics" },
            { col1: "Veritabanı yedekleme", col2: "Supabase backup" },
            { col1: "Yeni özellik yönetimi", col2: "GitHub issues" },
            { col1: "Güvenlik kontrolü", col2: "RLS ve dependency audit" }
          ]
        }
      }
    ]
  },

  // ──────────────────────────────────────────────────────────────
  // 11. HATA YÖNETİMİ
  // ──────────────────────────────────────────────────────────────
  {
    id: 11,
    icon: "🐛",
    title: "Hata Yönetimi",
    desc: "Hata almak normal! Hataları okuma, çözme ve F12 kullanma rehberi",
    tag: "beginner",
    tagLabel: "Başlangıç",
    subs: [
      {
        icon: "😌",
        title: "Hata Almak Normaldir",
        desc: "Korkma, her hata bir öğretmendir",
        content: {
          summary: "Hata almak normal! Hatta gereklidir. Profesyonel yazılımcılar bile günlük 10-20 hatayla karşılaşır.",
          analogy: "Yemek yaparken tavayı yaktın. Felaket mi? Hayır, yeniden başlarsın. Programlama da aynı. Hata = 'şurada bir şey yanlış' diye seni uyarıyor. Hata mesajı senin düşmanın değil, arkadaşın.",
          note: "Çözüm her zaman vardır. İlk denemede çözülmezse 2-3 deneme daha yap. 'Başka bir yöntem deneyelim' de."
        }
      },
      {
        icon: "🔴",
        title: "Kırmızı Yazı (Console Error)",
        desc: "F12 aç, hatayı bul, Claude'a ver",
        content: {
          summary: "Tarayıcıda F12 → Console sekmesi → kırmızı yazılar. Bunları kopyala, Claude'a yapıştır.",
          steps: [
            "Sayfayı aç, hata çıktığında F12 tuşuna bas",
            "Console sekmesini tıkla",
            "Kırmızı hata yazısını tüm içeriğiyle kopyala",
            "Claude'a yapıştır + 'hangi sayfada, ne yaparken' bilgisini ekle"
          ],
          codes: [
            { cmd: "Claude'a şunu söyle:\n\"Login sayfasında şu hatayı alıyorum:\nTypeError: Cannot read property 'name' of undefined\nLogin butonuna tıklayınca çıkıyor.\"", desc: "Hata raporu örneği" }
          ]
        }
      },
      {
        icon: "🤔",
        title: "Beklenmedik Davranış",
        desc: "Hata yok ama bir şey yanlış",
        content: {
          summary: "Hata yazısı yok ama buton çalışmıyor, sayfa boş geliyor vb.",
          codes: [
            { cmd: "Claude'a şunu söyle:\n\"Sil butonuna basınca hiçbir şey olmuyor.\nHata da yok. Hangi sayfada: kitap detay sayfasında.\nConsole'da şu uyarı var: 'API endpoint not found'\"", desc: "Davranış raporu örneği" }
          ],
          note: "Ne kadar çok bağlam verirsen, Claude o kadar hızlı çözer."
        }
      },
      {
        icon: "☁️",
        title: "Vercel Deploy Hatası",
        desc: "Lokalde çalışıyor, yayında çalışmıyor",
        content: {
          summary: "En sık sebep: environment variables eksik veya yanlış.",
          steps: [
            "Vercel dashboard → Logs sekmesine git",
            "Kırmızı hata yazılarını bul ve kopyala",
            "Claude'a yapıştır",
            "Büyük ihtimalle Vercel Settings → Environment Variables'a bakacak"
          ],
          note: "Çözüm: .env.local'deki TÜM değişkenleri Vercel environment variables'a kopyala."
        }
      },
      {
        icon: "🛠️",
        title: "F12 Developer Tools",
        desc: "Senin en iyi debugging arkadaşın",
        content: {
          summary: "Tarayıcıda F12 tuşuna bastığında 'Developer Tools' açılır. Her uygulamayı test ederken açık tut.",
          table: [
            { col1: "Console", col2: "Hata mesajları burada" },
            { col1: "Network", col2: "İnternet trafiği — istekler başarılı mı?" },
            { col1: "Elements", col2: "HTML yapısı — hangi parça neresinde" },
            { col1: "Application", col2: "Tarayıcı hafızası, çerezler" },
            { col1: "Mobile ikonu", col2: "Mobil görünümü test et" }
          ]
        }
      },
      {
        icon: "📋",
        title: "Hata Çözmenin Altın Kuralları",
        desc: "Her zaman işe yarayan 4 kural",
        content: {
          summary: "Bu 4 kuralı uygularsan hata çözme süresi yarıya iner.",
          points: [
            "Kural 1: Hata yazısının TAMAMINI Claude'a ver — sadece 'hata aldım' deme",
            "Kural 2: Ekran görüntüsü gönder — görsel her zaman daha net",
            "Kural 3: Pes etme — çözüm her zaman var, 2-3 farklı yöntem dene",
            "Kural 4: Çalışan duruma geri dön — git checkout . ile son kayıtlı duruma dön"
          ]
        }
      }
    ]
  },

  // ──────────────────────────────────────────────────────────────
  // 12. YAYGIN HATALAR
  // ──────────────────────────────────────────────────────────────
  {
    id: 12,
    icon: "⚠️",
    title: "Yaygın Hatalar ve Tuzaklar",
    desc: "Senden önce 1000 kişi bunları yaptı — sen yapma, zamandan kazan",
    tag: "beginner",
    tagLabel: "Başlangıç",
    subs: [
      {
        icon: "🏔️",
        title: "Çok Büyük Başlamak",
        desc: "MVP düşün: 3 özellik, çalışan uygulama",
        content: {
          summary: "En yaygın hata: ilk sürüme her şeyi koymak.",
          analogy: "❌ Yanlış: 'CRM olsun, ödeme olsun, mobil olsun, yapay zeka olsun, WhatsApp olsun.' ✅ Doğru: 3 ana özellik seç, sadece onları yap. Yayınla, kullanmaya başla, geri bildirimle büyüt.",
          note: "Kitap listesi uygulamasında 'sosyal paylaşım, AI önerileri' özelliklerini ilk sürüme alma. Önce 'ekle, listele, sil' çalışsın."
        }
      },
      {
        icon: "💬",
        title: "Belirsiz Prompt Yazmak",
        desc: "'Güzel olsun' Claude'u yanıltır",
        content: {
          summary: "Belirsiz komutlar = belirsiz sonuç.",
          codes: [
            { cmd: "❌ 'Login sayfası daha güzel olsun'\n✅ 'Login sayfasında butonun rengi koyu mor olsun,\nformun arkasında soft gradient olsun,\nlogo da daha büyük 80x80px olsun'", desc: "Belirsiz vs. net prompt farkı" }
          ]
        }
      },
      {
        icon: "🏃",
        title: "Test Etmeden İlerlemek",
        desc: "Her özellikten sonra test et",
        content: {
          summary: "Bir özellik yaptırdın, test etmeden 2. özelliğe geçtin. 5 özellik birikince hangisinin bozuk olduğunu bulamazsın.",
          note: "Her özellikten sonra tarayıcıda dene. Çalışmıyorsa düzelt. Sonra ilerle. Kitap ekleme yaptın, ekleyebildin mi? Listede göründü mü? Hepsini test et."
        }
      },
      {
        icon: "🔐",
        title: "API Anahtarını Koda Yazmak",
        desc: "Bu hata çok pahalıya mal olabilir",
        content: {
          summary: "Anahtarı doğrudan koda yazarsan ve GitHub'a yüklersen, herkes görebilir. Birisi Stripe anahtarını alıp $1000 fatura yapabilir.",
          note: "Her zaman .env.local kullan. Claude bunu otomatik yapar ama sen kontrol et. .gitignore dosyasında .env.local olmalı."
        }
      },
      {
        icon: "📱",
        title: "Mobil Test Etmemek",
        desc: "Telefondan açan biri 'berbat' diyebilir",
        content: {
          summary: "Sadece bilgisayarda test etme. F12 → Mobile mode ile test et.",
          note: "Her sayfa için kontrol et: yazılar küçük geliyor mu? Buton tıklanabilir mi? Menü mobilde toplu mu?"
        }
      },
      {
        icon: "🎨",
        title: "Aşırı Estetikçilik",
        desc: "Önce işlev, sonra güzellik",
        content: {
          summary: "Renk, font, animasyon arayışında 1 ay geçirdin. Uygulama hâlâ ortada yok.",
          note: "İlk yayında her şey 'basit ve sade' olsun. Claude'a 'Tailwind default temasıyla başla, sonra özelleştiririz' de. Önce tüm özellikleri çalıştır."
        }
      },
      {
        icon: "💸",
        title: "Maliyetleri Takip Etmemek",
        desc: "Billing alert kur, sürpriz fatura gelmesin",
        content: {
          summary: "Uygulaman popüler oldu. 10 bin kullanıcı geldi. Bir gün uyandın, $500 fatura.",
          table: [
            { col1: "Vercel", col2: "75GB bandwidth alarm kur" },
            { col1: "Supabase", col2: "%80 storage alarm kur" },
            { col1: "Anthropic", col2: "$50 limit belirle" },
            { col1: "Stripe", col2: "Anomali alerti kur" }
          ]
        }
      }
    ]
  },

  // ──────────────────────────────────────────────────────────────
  // 13. İLK 30 GÜN PLANI
  // ──────────────────────────────────────────────────────────────
  {
    id: 13,
    icon: "📅",
    title: "İlk 30 Günlük Yol Haritası",
    desc: "Hafta hafta ne yapacaksın? 30 günde çalışan uygulamana kavuş",
    tag: "beginner",
    tagLabel: "Başlangıç",
    subs: [
      {
        icon: "1️⃣",
        title: "Hafta 1: Temel ve Hazırlık",
        desc: "Hesaplar, kurulum ve ilk hello world",
        content: {
          summary: "İlk hafta kurulum ve hazırlık aşaması. Her gün için belirli hedefler var.",
          table: [
            { col1: "Gün 1", col2: "Bu rehberi tamamen oku, notlar al, soruları işaretle" },
            { col1: "Gün 2", col2: "Hesapları aç (GitHub, Supabase, Vercel, Anthropic)" },
            { col1: "Gün 3", col2: "Bilgisayara kurulum (Node, Git, VS Code, Claude Code)" },
            { col1: "Gün 4", col2: "İlk 'hello world' — basit bir HTML sayfası yap" },
            { col1: "Gün 5", col2: "Uygulama fikrini netleştir — şablonu doldur" },
            { col1: "Gün 6", col2: "Plan modu ile detaylı plan çıkar, Claude ile tartış" },
            { col1: "Gün 7", col2: "Hafta sonu — eğlenceli bir küçük proje yap (kişisel sayfa)" }
          ]
        }
      },
      {
        icon: "2️⃣",
        title: "Hafta 2: İlk Gerçek Uygulama",
        desc: "Veritabanı, auth ve temel özellikler",
        content: {
          summary: "İkinci hafta gerçek uygulama geliştirme başlıyor.",
          table: [
            { col1: "Gün 8", col2: "Proje iskeletini kur (Next.js + Supabase + Tailwind)" },
            { col1: "Gün 9", col2: "Veritabanı tablolarını oluştur, RLS kur" },
            { col1: "Gün 10", col2: "Login/Auth sistemi kur" },
            { col1: "Gün 11", col2: "Ana özellik 1 (örn: kayıt ekleme)" },
            { col1: "Gün 12", col2: "Ana özellik 2 (örn: kayıt listeleme)" },
            { col1: "Gün 13", col2: "Ana özellik 3 (örn: kayıt düzenleme/silme)" },
            { col1: "Gün 14", col2: "Ne yaptığını arkadaşlarına göster, geri bildirim al" }
          ]
        }
      },
      {
        icon: "3️⃣",
        title: "Hafta 3: İyileştirme ve İlk Yayın",
        desc: "Tasarım, mobil ve canlıya alış",
        content: {
          summary: "Üçüncü hafta iyileştirme ve yayın.",
          table: [
            { col1: "Gün 15", col2: "Tasarımı düzelt — renkler, fontlar, boşluklar" },
            { col1: "Gün 16", col2: "Mobil uyumluluk — F12 ile her sayfayı dene" },
            { col1: "Gün 17", col2: "Hata mesajlarını kullanıcı dostu yap" },
            { col1: "Gün 18", col2: "Boş durumlar (kayıt yokken ne göstereceksin?)" },
            { col1: "Gün 19", col2: "GitHub'a yükle" },
            { col1: "Gün 20", col2: "Vercel'de yayına al — TEBRİKLER, canlısın! 🎉" },
            { col1: "Gün 21", col2: "Sosyal medyada paylaş, ilk kullanıcıları topla" }
          ]
        }
      },
      {
        icon: "4️⃣",
        title: "Hafta 4: Geri Bildirim ve Büyüme",
        desc: "Kullanıcı, domain ve izleme araçları",
        content: {
          summary: "Dördüncü hafta büyüme ve geliştirme.",
          table: [
            { col1: "Gün 22", col2: "İlk 5 kullanıcıdan geri bildirim al" },
            { col1: "Gün 23-24", col2: "Geri bildirimlere göre düzeltmeler yap" },
            { col1: "Gün 25", col2: "Domain al, kendi alanına bağla" },
            { col1: "Gün 26", col2: "Sentry kur — hata izleme" },
            { col1: "Gün 27", col2: "Vercel Analytics kur — kim ne yapıyor öğren" },
            { col1: "Gün 28", col2: "Yeni özellikler için yol haritası çıkar" },
            { col1: "Gün 29", col2: "MCP veya Skill ile yeteneklerini genişlet" },
            { col1: "Gün 30", col2: "🎉 Bir aylık başarını kutla! Bir ödül al, hak ettin." }
          ],
          note: "30 gün sonunda: Yayında çalışan bir uygulamanız, kendi domain'inizde, ilk kullanıcılarınızla. Sen artık uygulama yapan birisin! 🚀"
        }
      },
      {
        icon: "🎯",
        title: "İdeal Öğrenme Sırası",
        desc: "Adım adım ne öğrenmeli?",
        content: {
          summary: "Net tavsiye: ilk hedefin mükemmel uygulama yapmak değil, çalışan küçük bir uygulamayı canlıya almak olsun.",
          steps: [
            "Claude Code temel kullanım",
            "GitHub temel mantığı",
            "Next.js proje yapısı",
            "Supabase veritabanı mantığı",
            "Auth — kullanıcı girişi",
            "Storage — dosya saklama",
            "API mantığı",
            "Vercel deploy",
            "Güvenlik kontrolleri",
            "MCP bağlantıları",
            "Skills ve Subagents",
            "Hooks ve otomasyon",
            "Mobil uygulama (ilerleyen dönem)"
          ],
          note: "Bu süreci bir kez tamamladığında, ikinci uygulamada çok daha rahat ilerlersin."
        }
      }
    ]
  }
];
