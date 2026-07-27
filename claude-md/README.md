# CLAUDE.md Şablonlarım

Kendi projelerim için hazırlanmış kural dosyaları. Bu klasör bir "kütüphane" — dosyalar buradan **kopyalanır**, burada çalışmaz.

## Dosyalar

| Dosya | Nereye kopyalanır |
|---|---|
| `00-global-CLAUDE.md` | `~/.claude/CLAUDE.md` — tüm projelerde geçerli, kişisel çalışma tarzım |
| `01-godot-steam-CLAUDE.md` | Steam oyunu projesinin köküne, adı `CLAUDE.md` |
| `02-expo-mobil-CLAUDE.md` | iOS/Android uygulama projesinin köküne, adı `CLAUDE.md` |
| `03-saas-nextjs-supabase-CLAUDE.md` | SaaS projesinin köküne, adı `CLAUDE.md` |
| `token-verimliligi.md` | Kopyalanmaz — okunur. Benim ne yapmam gerektiği. |

Nasıl çalışır: global dosya her oturumda yüklenir, proje kökündeki `CLAUDE.md` onun üstüne biner ve çelişen kuralları ezer.

## Kurulum

Masaüstü uygulamasından çalışıyorum, komut yazmıyorum. Claude'a söylüyorum, o yapıyor.

**Bir kere** — yeni bir sohbette:

> `claude-md/00-global-CLAUDE.md` dosyasını `~/.claude/CLAUDE.md` olarak kopyala. Klasör yoksa oluştur.

**Her yeni projede** — projenin klasörünü açıp:

> `~/projeler/claude-code-egitim/claude-md/03-saas-nextjs-supabase-CLAUDE.md` dosyasını bu projeye `CLAUDE.md` olarak kopyala. Ürün adı [X], [ne yaptığı]. Köşeli parantezli yerleri doldur.

Godot oyunu için `01-...`, mobil uygulama için `02-...` dosyasını iste.

`[Ürün adı]` ve tek cümlelik tanım boş bırakılmaz — Claude'un en çok işine yarayan iki satır orası.

Şablonların içindeki komut blokları (`npm run dev`, `godot --headless` vb.) **Claude'un** çalıştıracağı komutlar, benim değil. Onay kutusu çıkınca onaylıyorum.

## Kullanım kuralları

- **Kısa tut.** Her dosya 100-150 satırı geçmesin; her oturumda token olarak ödenir.
- **Yeni kural eklerken eskisini sil.** Çelişen kural, kuralsızlıktan kötüdür.
- Bir hatayı ikinci kez yaşadıysan → o hatanın kuralını CLAUDE.md'ye ekle.
- Kural tek satır, emir kipinde, gerekçesiz olsun. Açıklama yazma.

## Sıradaki adım (istersen)

Slash komutları (`.claude/commands/*.md`) ile tekrarlayan işleri tek kelimeye indirebiliriz — örneğin `/yayina-hazir` ile mağaza kontrol listesini otomatik çalıştırmak. İstediğinde söyle.
