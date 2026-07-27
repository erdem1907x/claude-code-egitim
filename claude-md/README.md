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

```bash
# bir kere
mkdir -p ~/.claude && cp claude-md/00-global-CLAUDE.md ~/.claude/CLAUDE.md

# her yeni projede (örnek: SaaS)
cp claude-md/03-saas-nextjs-supabase-CLAUDE.md ~/projeler/yeni-saas/CLAUDE.md
```

Kopyaladıktan sonra `[köşeli parantez]` içindeki yerleri doldur. Ürün adı ve tek cümlelik tanım yazılmadan bırakılmaz — Claude'un en çok işine yarayan iki satır orası.

## Kullanım kuralları

- **Kısa tut.** Her dosya 100-150 satırı geçmesin; her oturumda token olarak ödenir.
- **Yeni kural eklerken eskisini sil.** Çelişen kural, kuralsızlıktan kötüdür.
- Bir hatayı ikinci kez yaşadıysan → o hatanın kuralını CLAUDE.md'ye ekle.
- Kural tek satır, emir kipinde, gerekçesiz olsun. Açıklama yazma.

## Sıradaki adım (istersen)

Slash komutları (`.claude/commands/*.md`) ile tekrarlayan işleri tek kelimeye indirebiliriz — örneğin `/yayina-hazir` ile mağaza kontrol listesini otomatik çalıştırmak. İstediğinde söyle.
