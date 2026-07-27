# Claude Code Eğitim Merkezi

Türkçe, statik eğitim sitesi. Vibe coder'lara Claude Code öğretir.

## Stack

Vanilla HTML + CSS + JS. **Build yok, framework yok, npm yok.** GitHub Pages ile yayınlanır (`.nojekyll`).

## Dosyalar

| Dosya | Ne yapar | Boyut |
|---|---|---|
| `index.html` | Sayfa iskeleti, hero, akordiyon container | ~9 KB |
| `data.js` | **Tüm içerik burada** — `var topics = [...]` | ~70 KB, okumadan önce düşün |
| `app.js` | Terminal animasyonu, akordiyon, modal, scroll efektleri | ~15 KB |
| `style.css` | Tüm stiller, CSS değişkenleri en üstte | ~22 KB |

## data.js şeması

```js
{ id, icon, title, desc, tag: "beginner|intermediate|advanced", tagLabel,
  subs: [ { icon, title, desc, content: {
      summary,                         // zorunlu, 1-2 cümle
      analogy,                         // opsiyonel, günlük hayattan benzetme
      points: ["..."],                 // opsiyonel, madde listesi
      table: [{ col1, col2 }],         // opsiyonel, 2 sütun
      steps: ["..."],                  // opsiyonel, sıralı adım
      note                             // opsiyonel, alt not / ipucu
  } } ] }
```

`app.js:187` `openModal()` bu alanları render eder. **Yeni bir `content` alanı eklersen `openModal` içine de render kodu eklemen şart**, yoksa sessizce kaybolur.

## Kurallar

- İçerik dili Türkçe, sen-dili, kod bilmeyen okuyucuya göre. Jargon kullanacaksan parantez içinde açıkla.
- Yeni modül = `data.js` sonuna yeni obje + `id` sırayla artar. `index.html` veya `app.js` dokunmaya genelde gerek yok.
- `index.html` hero'daki istatistikler (14+ konu / 65+ alt konu) modül eklerken güncellenmeli.
- Renk/spacing değişikliği → `style.css` en üstteki CSS değişkenleri, tek tek selector değil.
- Bağımlılık ekleme. CDN script eklemek gerekiyorsa önce sor.

## Test

Build yok. `python3 -m http.server 8000` → tarayıcıda kontrol. Değişiklikten sonra konsol hatası var mı bakılır, otomatik test yok.

## Token notu

- `data.js` tamamını okuma. Belirli modülü düzenlerken `grep -n "başlık"` ile satırı bul, `Read offset/limit` ile o bölümü aç.
- İçerik ekleme işi tek dosyada biter — keşif turu yapma.

## Diğer projelerim

Steam oyunu / mobil uygulama / SaaS projelerime ait CLAUDE.md şablonları `claude-md/` klasöründe. Bu repoyla ilgisi yok, oradan kopyalanır.
