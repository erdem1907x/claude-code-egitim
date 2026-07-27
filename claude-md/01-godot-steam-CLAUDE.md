# CLAUDE.md — Godot 4 / Steam Oyunu

> Kopyala: `<oyun-projesi>/CLAUDE.md` — `[...]` yerlerini doldur.

## Oyun

**[Oyun adı]** — [tür, örn: 2D roguelite]. Hedef: Steam (Windows + Linux). Motor: **Godot 4.x**, dil **GDScript** (C# sadece ağır hesap gerekirse, sorarak).

## Klasör düzeni

```
scenes/     .tscn dosyaları (sahneler)
scripts/    .gd dosyaları — TÜM oyun mantığı burada
autoload/   singleton'lar: GameState, AudioManager, SteamManager, SaveManager
resources/  .tres — silah/düşman/item tanımları (Resource sınıfları)
assets/     sprite, ses, font — OKUMA, ARAMA
addons/     GodotSteam vb. — ELLEME
export/     build çıktısı — commit edilmez
```

## En önemli kural: sahne vs. script iş bölümü

- **`.tscn` ve `.tres` dosyalarını elle yazma/düzenleme.** Metin formatındalar ama `uid://`, `ext_resource id`, node path'leri kırılgan — bozarsan sahne sessizce açılmaz.
- Sahne/node ekleme gerekiyorsa: bana **Godot editöründe yapacağım adımları söyle** ("Player sahnesine `Area2D` ekle, adı `Hitbox`, `hitbox.gd` bağla"), sonra script'i sen yaz.
- İstisna: yeni ve boş bir `.tscn`'i sıfırdan oluşturmak serbest.
- `.tres` veri dosyası (yeni silah tanımı gibi) oluşturmak serbest — mevcut olanı düzenlerken önce oku.

## Kod kuralları

- `snake_case` dosya ve değişken, `PascalCase` sınıf/node adı.
- `class_name` ver, `@export` ile editörden ayarlanabilir yap — sabit sayıyı koda gömme.
- İletişim **signal** ile. `get_node("../../Player")` gibi zincir yol yasak; `@onready` + `%UniqueName` veya autoload kullan.
- `_process` içinde: allocation yok, `get_node` yok, `find_child` yok. Ağır iş `_physics_process` veya timer'a.
- Mermi/düşman/parçacık → **object pool**, `queue_free()` + `instantiate()` döngüsü yok.
- Kaydetme: `SaveManager` üzerinden JSON, `user://` altına. Sürüm alanı (`save_version`) tut, eski kayıt kırılmasın.
- `print()` bırakma; `Logger.debug()` kullan, release'de kapansın.

## Steam entegrasyonu

- GodotSteam addon, tüm çağrılar `autoload/SteamManager.gd` içinden geçer — oyun kodu doğrudan `Steam.` çağırmaz.
- `steam_appid.txt` **commit edilmez**, `.gitignore`'da.
- Steam yokken (editörde, itch build'inde) oyun **çökmemeli** — `SteamManager.available` kontrolü her çağrının başında.
- Achievement'lar tek yerde sabit listede; `SteamManager.unlock("ACH_FIRST_BOSS")`.
- Steam Cloud: sadece `user://save.json` ve `settings.cfg`.
- Steam Input: klavye/gamepad ayrımını elle yapma, Godot input map + Steam Input layer.

## Komutlar

```bash
godot --path . --headless --quit          # proje hatasız açılıyor mu (her değişiklikten sonra)
godot --path . --headless --script res://tests/run_tests.gd   # varsa testler
godot --headless --export-release "Windows Desktop" export/game.exe
```

Build alıp Steam'e yüklemeyi (`steamcmd`) **ben yaparım**, sen yapma.

## Yayın öncesi kontrol listesi

- [ ] Ayarlar menüsü: ses, çözünürlük, tam ekran, tuş atama
- [ ] Alt+F4 / pencere kapatma → kayıt yapıp çıkıyor
- [ ] Steam Deck: 1280x800 çalışıyor, metin okunabilir
- [ ] Achievement'lar Steamworks panelindekiyle birebir aynı ID
- [ ] `steam_appid.txt` build içinde yok
- [ ] Boş `user://` ile (ilk oynayış) hatasız açılıyor

## Token disiplini

- `assets/`, `.godot/`, `export/`, `addons/` → hiç okuma, hiç arama.
- Bug varken bütün `scripts/` klasörünü tarama. Bana "hangi sahne/script?" diye sor.
- Godot konsol çıktısını yapıştırdığımda ilk hata satırına odaklan, tamamını analiz etme.
- Büyük `.tscn` dosyalarını okuma — node yapısını sana ben tarif ederim.
