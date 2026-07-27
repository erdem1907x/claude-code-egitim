# Maksimum Verim, Minimum Token

Vibe coder için pratik kurallar. CLAUDE.md dosyaları bunları zaten içeriyor; bu sayfa **senin** ne yapman gerektiğini anlatır.

## 1. Bağlam pahalı, dosya ucuz

Claude her mesajda o ana kadarki tüm konuşmayı yeniden okur. 200 mesajlık bir sohbette basit bir düzeltme bile pahalıdır.

- **Bir görev = bir oturum.** İş bitti → `/clear`.
- Konu değiştiriyorsan (login'den ödeme sistemine) → `/clear`.
- `/compact` yerine `/clear` tercih et. Compact de token yakar; temiz başlangıç daha ucuz ve daha isabetli.
- Uzun oturumda Claude aptallaşıyorsa sebep model değil, dolu bağlam.

## 2. CLAUDE.md kısa olacak

Her oturumda baştan yüklenir. 500 satırlık CLAUDE.md = her mesajda ödediğin vergi.

- Hedef: **100-150 satır**, proje başına.
- İçine kod örneği, uzun açıklama, öğretici metin koyma.
- Kural eklerken eskisini sil. Çelişen kural = Claude'un kafası karışır, iki kat token.
- "Şunu yapma" listesi, "şunu yap" listesinden daha değerli.

## 3. Nokta atışı iste

| Kötü (pahalı) | İyi (ucuz) |
|---|---|
| "Projeyi incele ve iyileştir" | "`app/login/page.tsx` içindeki hata mesajını Türkçeleştir" |
| "Bir bug var, bul" | "Sepete ekle butonu ikinci tıklamada çöküyor, `Cart.tsx`'e bak" |
| "Test yaz" | "`lib/plans.ts` için limit kontrolü testi yaz" |

Hangi dosya olduğunu biliyorsan **söyle**. Aramak, okumaktan pahalıdır.

## 4. Plan modunu doğru yerde kullan

- Büyük/yeni özellik → `/plan`, onayla, sonra uygula. Yanlış yola girip 5 dosya yazmasından ucuz.
- Küçük düzeltme → doğrudan iste. Basit iş için plan modu israf.

## 5. Subagent / paralel ajan

Her ajan **sıfırdan** bağlam kurar. Aynı işi 3 kere okumak demek. Sen açıkça istemedikçe kullanılmasın — global CLAUDE.md'de bu kural var.

## 6. Hata çıktısı yapıştırırken

Tüm terminali değil, **ilk hata bloğunu** yapıştır (yaklaşık 20-30 satır). Stack trace'in geri kalanı çoğu zaman gürültü.

## 7. Model seçimi

- Mimari karar, karmaşık bug, ilk kurulum → güçlü model.
- "Bu metni değiştir", "renk değiştir", "buton ekle" → hızlı/küçük model yeter.
- `/model` ile geçiş yap. Basit işi güçlü modele yaptırmak paranın çöpe gitmesi.

## 8. Otomatikleştir, tekrarlama

Aynı cümleyi üçüncü kez yazıyorsan:

- Tekrarlayan iş → `.claude/commands/xxx.md` (slash komut).
- Kalıcı kural → CLAUDE.md.
- Sürekli izin soruyorsa → `.claude/settings.json` içine allowlist (`/fewer-permission-prompts` bunu senin için yazar).

## 9. Günlük ritim (masaüstü uygulaması)

```
1. Projenin klasörünü aç
2. Görevi Türkçe tarif et → büyük işse /plan yaz, planı onayla
3. Claude uygular, komut onayı isterse onayla
4. Uygulamayı dene → çalışıyorsa "commit et" de
5. /clear → sıradaki görev
Gün sonu: "push et"
```

Tek oturumda gün boyu çalışma. En sık yapılan ve en pahalı hata bu.

Komutları ben yazmıyorum — `/clear`, `/plan`, `/model` gibi eğik çizgili komutlar sohbet kutusuna yazılır; `npm`, `git`, `cp` gibi terminal komutlarını Claude çalıştırır, ben onaylarım.

## 10. Kırmızı çizgiler

Bunlar token değil, **para ve veri** meselesi:

- `.env` / API anahtarı / keystore asla commit edilmez.
- Prod veritabanına migration onaysız uygulanmaz.
- `git push --force` sorulmadan yapılmaz.
- Ödeme akışı canlıya çıkmadan test modunda uçtan uca denenir.
