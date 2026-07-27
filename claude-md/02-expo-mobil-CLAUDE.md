# CLAUDE.md — React Native / Expo (iOS + Android)

> Kopyala: `<mobil-projesi>/CLAUDE.md` — `[...]` yerlerini doldur.

## Uygulama

**[Uygulama adı]** — [ne işe yarar, tek cümle]. Expo SDK [sürüm], TypeScript, expo-router. Hedef: App Store + Google Play.

## Stack (değiştirme, sormadan ekleme)

| Katman | Seçim |
|---|---|
| Navigasyon | expo-router (dosya tabanlı) |
| Stil | NativeWind (Tailwind sınıfları) |
| Sunucu verisi | TanStack Query |
| Yerel state | Zustand |
| Backend | Supabase (`@supabase/supabase-js`) |
| Depolama | expo-secure-store (token), AsyncStorage (tercih) |
| Ödeme | RevenueCat (IAP) |
| Build | EAS Build + EAS Submit |

## Klasör düzeni

```
app/          ekranlar — dosya adı = route. (tabs)/ ve (auth)/ grupları
components/   paylaşılan UI
lib/          supabase.ts, api.ts, analytics.ts
hooks/        useX.ts
constants/    theme.ts, config.ts
assets/       ikon, splash, font — OKUMA
ios/ android/ prebuild çıktısı — ELLE DÜZENLEME (app.config.ts'ten yönet)
```

## Kod kuralları

- TypeScript strict. `any` yok — tip bilmiyorsan Supabase'den üret (`supabase gen types typescript`).
- Ekran dosyasında iş mantığı yok: veri çekme → hook, sunucu çağrısı → `lib/`.
- Her liste `FlatList`/`FlashList`, `ScrollView` + `.map()` yok.
- Her async ekranın **3 hali** olacak: loading, error, empty. Sadece happy path yazma.
- Boyutlar `Dimensions` ile sabitlenmez; safe area için `react-native-safe-area-context`.
- Platform farkı gerekiyorsa `Platform.select`, ayrı dosya değil.
- Native modül eklemek gerekirse **önce sor** — prebuild/rebuild gerektirir, benim iş akışımı kırar.
- Gizli anahtar telefonda tutulmaz. `EXPO_PUBLIC_*` = herkese açık demektir; gizli iş Supabase Edge Function'da.

## Komutlar

```bash
npx expo start -c                  # geliştirme (cache temiz)
npx tsc --noEmit                   # tip kontrolü — her değişiklikten sonra ÇALIŞTIR
npx expo-doctor                    # sürüm uyuşmazlığı
eas build -p android --profile preview   # test apk
eas build -p ios --profile preview       # TestFlight öncesi
eas submit -p ios                        # mağazaya gönderim — ben "gönder" demeden ÇALIŞTIRMA
```

Bir şey "çalıştı" demeden önce en az `npx tsc --noEmit` geçmiş olacak.

## app.config.ts / eas.json

- Sürüm ve build numarası tek yerde: `app.config.ts`. Elle `ios/` `android/` içine dokunma.
- İzin metinleri (kamera, konum, foto) **Türkçe ve gerekçeli** olacak — App Store bunu boş bırakınca reddediyor.
- Yeni izin eklendiğinde: `app.config.ts` + gerekçe metni + store notu, üçü birden.

## Mağaza kontrol listesi

- [ ] iOS: gizlilik politikası linki, ATT metni (takip varsa), hesap silme akışı (zorunlu)
- [ ] Android: Data Safety formu, hedef SDK güncel
- [ ] IAP RevenueCat üzerinden, sandbox'ta test edildi
- [ ] Uygulama offline açılıyor, çökmüyor
- [ ] Karanlık mod ve küçük ekran (SE) kontrolü
- [ ] İkon + splash + store görselleri hazır

## Token disiplini

- `node_modules/`, `ios/`, `android/`, `.expo/`, `assets/` → okuma, arama.
- Metro/EAS build log'unun tamamını yapıştırmayacağım; sen de tamamını isteme — ilk `error` bloğu yeter.
- "Şu ekranda şu buton bozuk" dediğimde ilgili `app/...` dosyasını aç, proje taraması yapma.
- Paket sürüm hatasında önce `npx expo-doctor`, kod okuma değil.
