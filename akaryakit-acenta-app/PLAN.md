# Akaryakıt Taşıt Tanıma Acentası — Saha Satış & Firma Keşif Uygulaması

> Proje planı / yol haritası — v1 (taslak)
> Bu belge kod yazılmadan önce kapsamı netleştirmek için hazırlanmıştır.

---

## 1. Amaç ve Bağlam

Bir akaryakıt **taşıt tanıma acentası** için saha satış uygulaması. Acenta, Petrol
Ofisi ile anlaşmalı çalışıyor ve sisteme **müşteri kazandırdıkça satış primi**
alıyor. Bu uygulamanın görevi, akaryakıtı yoğun kullanan ve **iskontolu yakıta
sıcak bakan** küçük-orta ölçekli işletmeleri bulmak, onlara ulaşmak, kendini
tanıtmak ve müşteriye dönüştürmektir.

**Hedef kitle (öncelikli sektörler):**
- Nakliye firmaları (kısa/uzun mesafe)
- Hafriyat firmaları
- Minibüs / otobüs işletmeleri
- Tur / turizm firmaları (yolcu taşıyan minibüs-otobüs)
- Genel olarak filosu olan, yakıtı yoğun kullanan KOBİ'ler

**Hedef DEĞİL:** Büyük kurumsal firmalar (zaten kendi anlaşmaları var, fiyat
kıramayız, satış döngüsü uzun).

---

## 2. Temel Kararlar (netleşti)

| Konu | Karar |
|---|---|
| Kullanıcı | **Tek kullanıcı** (acenta sahibi). İleride ekip eklenebilir şekilde tasarlanacak. |
| Platform | **Telefon öncelikli web uygulaması (PWA)** — sahada telefon, ofiste bilgisayar; app store gerekmez. |
| MVP önceliği | **Firma bulma / keşif** |
| Veri kaynağı | **OpenStreetMap (ücretsiz) + manuel ekleme + Excel içe aktarma**. Google Places API sonraki faza. |

---

## 3. İş Akışı (kullanıcının günlük kullanımı)

```
1. KEŞFET    → Bölge + sektör seç → firmaları haritada/listede gör
2. EKLE      → İlgilendiklerini "Hedef listeme" ekle
3. İKNA ET   → Ziyarette tasarruf hesaplayıcı ile "yıllık şu kadar kazanırsınız" göster
4. TAKİP ET  → Firmayı aşamaya al (Aranacak → Görüşüldü → Teklif → Müşteri / Ret), not + hatırlatma
5. ÖLÇ       → Kaç firma keşfedildi, kaç müşteri oldu — basit özet
```

---

## 4. MVP Kapsamı (İlk Sürüm)

### 4.1 Keşif Ekranı (ana ekran)
- **Bölge seçimi:** il/ilçe veya "haritada şu an gördüğüm alan".
- **Sektör seçimi:** nakliye, hafriyat, otobüs/minibüs, tur/turizm (çoklu seçim).
- **Sonuç:** firma kartları listesi + harita üzerinde işaretler.
  - Firma kartı: isim, adres, telefon (varsa), sektör, mesafe.
- **Aksiyon:** her firmada **"Hedefe Ekle"** ve **"Ara"** (telefonu tıklayınca arama) butonu.
- **Veri kaynağı:** OpenStreetMap Overpass API üzerinden ilgili kategorilerdeki
  işletmeler (ör. `office`, `shop`, `amenity`, `industrial` + isimde anahtar kelime).
- **Eksik veriyi tamamlama:** OSM'de telefon yoksa kullanıcı elle ekleyebilir.

### 4.2 İskonto / Tasarruf Hesaplayıcı (satışın kalbi)
- Girdiler: aylık yakıt tüketimi (litre **veya** TL), litre başına iskonto (kr/TL).
- Çıktı: **aylık tasarruf**, **yıllık tasarruf** — büyük puntoyla, ziyarette gösterilecek.
- Bonus: sonucu firma kaydına "teklif" olarak iliştirme.

### 4.3 Hedef Listem (Basit CRM)
- Keşiften eklenen + manuel + Excel'den gelen firmalar tek listede.
- **Durum etiketleri:** `Aranacak → Görüşüldü → Teklif Verildi → Müşteri Oldu → İlgilenmiyor`.
- Her firma için: notlar, sonraki hatırlatma tarihi, iletişim bilgileri.
- Filtre: duruma / sektöre / bölgeye göre.

### 4.4 Manuel Ekleme & Excel İçe Aktarma
- Tek tek firma ekleme formu.
- Excel/CSV ile toplu içe aktarma (isim, telefon, adres, sektör sütunları).

### 4.5 Basit Özet (Dashboard)
- Toplam keşfedilen firma, hedefe eklenen, müşteri olan, bekleyen hatırlatmalar.

### 4.6 KVKK / Veri Hijyeni
- "İlgilenmiyor / iletişim istemiyor" işareti → tekrar önerilmez.
- Firma kayıtlarını silme / dışa aktarma imkânı.

---

## 5. Veri Modeli (taslak)

**firma**
- id, ad, sektör, telefon, adres, il, ilçe, enlem/boylam
- kaynak (osm | manuel | excel)
- durum (aranacak | gorusuldu | teklif | musteri | ilgilenmiyor)
- aylik_tuketim_litre (opsiyonel), teklif_iskonto (opsiyonel)
- olusturma_tarihi, guncelleme_tarihi

**not** (firmaya bağlı)
- id, firma_id, metin, tarih

**hatirlatma**
- id, firma_id, tarih, açıklama, tamamlandi_mi

> Tek kullanıcı olduğu için şimdilik `kullanici_id` alanı eklenmeyecek; ama tablolar
> ileride bu alan eklenebilecek şekilde tutulacak (ekip fazı için).

---

## 6. Teknik Mimari

- **Önyüz:** Next.js (React) — PWA olarak (telefona "ana ekrana ekle").
- **Veritabanı + kimlik:** Supabase (PostgreSQL). Tek kullanıcı için basit giriş.
- **Harita:** Leaflet + OpenStreetMap döşemeleri (ücretsiz).
- **Firma keşfi:** OpenStreetMap **Overpass API** (anahtar gerektirmez, ücretsiz).
- **Yayın:** Vercel (ücretsiz katman tek kullanıcı için yeterli).
- **Maliyet:** Başlangıçta **0 TL** hedefleniyor (tüm katmanlar ücretsiz).

---

## 7. Yol Haritası (Fazlar)

### Faz 1 — MVP (öncelik)
- [ ] Proje iskeleti (Next.js + Supabase + Vercel)
- [ ] Veri modeli ve veritabanı tabloları
- [ ] Keşif ekranı: OSM Overpass ile bölge+sektör firma listeleme + harita
- [ ] "Hedefe ekle" akışı
- [ ] İskonto/tasarruf hesaplayıcı
- [ ] Hedef listem (CRM) + durum etiketleri + not/hatırlatma
- [ ] Manuel ekleme + Excel içe aktarma
- [ ] Basit özet ekranı
- [ ] PWA ayarları (telefonda ana ekrana ekleme)

### Faz 2 — Zenginleştirme
- [ ] Google Places API entegrasyonu (daha dolu firma verisi — opsiyonel, anahtar girilince aktif)
- [ ] Prim / kazanç takibi (kazandırılan müşteri başına prim, raporlama)
- [ ] Gelişmiş raporlar / grafikler

### Faz 3 — Ekip
- [ ] Çoklu kullanıcı + roller (yönetici / saha satışçısı)
- [ ] Firma atama (kim hangi firmayı takip ediyor)
- [ ] Ekip performans raporları

---

## 8. Riskler ve Notlar

- **OSM kapsamı:** Türkiye'de tüm firmalar OSM'de kayıtlı değil; telefon bilgisi
  eksik olabilir. Bu yüzden manuel/Excel ekleme MVP'de **şart**. Faz 2'de Google
  Places ile kapsam ciddi artar.
- **KVKK:** B2B ticari iletişim verisi toplanıyor; "istemiyorum" diyeni listeden
  çıkarma ve veriyi silebilme baştan konulacak.
- **Overpass API kullanım limiti:** Ücretsiz ortak sunucularda hız limiti var;
  yoğun kullanımda sorgular önbelleğe alınacak / kısılacak.

---

## 9. Sıradaki Adım

Bu plan onaylanırsa **Faz 1 / Proje iskeleti** ile başlanacak:
Next.js + Supabase kurulumu, veri modeli ve keşif ekranının ilk hali.
