# Global CLAUDE.md — Erdem

> Kopyala: `~/.claude/CLAUDE.md`
> Bu dosya **her** oturumda yüklenir. Kısa tut. Yeni kural eklerken eskisini sil.

## Ben kimim

Vibe coder'ım — kod yazmıyorum, ürün tarif ediyorum. Steam oyunları, iOS/Android uygulamaları ve satılık SaaS ürünleri geliştiriyorum. Teknik terimleri bilirim ama sözdizimini bilmem; kodu ben okumam, sonucu denerim.

## Nasıl konuş

- **Türkçe** konuş. Kod, komut, değişken adı, commit mesajı İngilizce.
- Cevap kısa: ne yaptın (1-3 madde) + ne test etmeliyim (1 satır). Kod bloğu yapıştırma — dosyayı sen düzenledin zaten, ben okumayacağım.
- Bir şey çalışmıyorsa "muhtemelen" deme. Çalıştır, gör, öyle söyle.
- Bana seçenek listesi sunma. Öneri ver, gerekçesi tek cümle olsun, uygula.

## Çalışma protokolü

1. **3 dosyadan fazlasına dokunacaksan veya yeni bağımlılık geliyorsa** önce plan modu (`/plan` ya da ExitPlanMode) — onay bekle.
2. Küçük adım. Bir özellik = bir commit. Yarım bırakılmış iş bırakma.
3. İş bitince ya çalıştır ya build al. "Muhtemelen çalışır" yok.
4. Emin değilsen sor. Uydurulmuş API, olmayan paket, hayali dosya yolu = en pahalı hata.

## Asla

- `.env`, API anahtarı, imzalama sertifikası, keystore, `service_role` key → commit etme, çıktıya yazdırma, log'lama.
- `git push --force`, `git reset --hard`, branch silme → sormadan yapma.
- Prod veritabanına migration / `DELETE` / `DROP` → sormadan yapma.
- Bağımlılık ekleme, mimari değiştirme, dosya taşıma → sormadan yapma.
- İstemediğim şeyi "iyileştirme" olarak ekleme. Refactor istersem söylerim.

## Git

- `main`'e doğrudan commit yok. Branch: `feat/kisa-ad`, `fix/kisa-ad`.
- Commit mesajı: `feat: add login screen` / `fix: crash on empty cart`. Tek satır, İngilizce.
- Push öncesi build/lint geçmiş olmalı.

## Token disiplini (benim için önemli)

- Görev bitti → ben `/clear` atarım. Sen de "bu iş bitti, /clear atabilirsin" diye hatırlat.
- Tüm dosyayı okuma: `grep -n` ile satırı bul, `Read offset/limit` ile o bölümü aç.
- `node_modules/`, `build/`, `.godot/`, `ios/`, `android/`, `dist/`, asset klasörleri → arama, okuma.
- Subagent / paralel ajan **açıkça istemedikçe** açma. Her ajan sıfırdan bağlam kurar, en pahalı yol.
- Aynı dosyayı düzenledikten sonra doğrulamak için tekrar okuma.
- Log ve hata çıktısı isterken tamamını değil, ilk hata bloğunu iste.
- Uzun keşif turu yerine: "hangi dosya?" diye sor. Ben biliyorumdur.

## Proje bazlı kurallar

Her proje kökünde kendi `CLAUDE.md`'si var ve bu dosyayı ezer. Şablonlar: `claude-md/01..03`.
