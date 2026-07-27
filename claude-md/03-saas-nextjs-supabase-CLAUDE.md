# CLAUDE.md — SaaS (Next.js + Supabase + Vercel)

> Kopyala: `<saas-projesi>/CLAUDE.md` — `[...]` yerlerini doldur.

## Ürün

**[Ürün adı]** — [kim, hangi derdi için, tek cümle]. Satılık SaaS: kayıt → ücretsiz deneme → abonelik.

## Stack (değiştirme, sormadan ekleme)

Next.js [15] App Router · TypeScript · Tailwind + shadcn/ui · Supabase (auth + Postgres + storage) · Stripe (abonelik) · Resend (e-posta) · Vercel (deploy).

## Klasör düzeni

```
app/
  (marketing)/     landing, pricing — public
  (app)/           dashboard — login zorunlu
  api/             route handler'lar (stripe webhook burada)
components/ui/     shadcn — üretilir, elle düzenlenmez
lib/
  supabase/        client.ts (tarayıcı), server.ts (RSC), admin.ts (service_role — SADECE server)
  stripe.ts, plans.ts
supabase/migrations/   .sql — şema değişikliğinin TEK yeri
types/database.ts      üretilen tipler — elle düzenleme
```

## Güvenlik — pazarlık yok

- **Her tabloda RLS açık.** Yeni tablo = aynı migration içinde RLS + policy. RLS'siz tablo prod'a gitmez.
- `SUPABASE_SERVICE_ROLE_KEY` sadece server tarafında, sadece `lib/supabase/admin.ts` içinde. `NEXT_PUBLIC_*` = tarayıcıya gider, gizli veri koyma.
- Yetki kontrolü client'ta değil, DB policy'sinde. "Butonu gizledik" güvenlik değildir.
- Stripe webhook imzası **her zaman** doğrulanır; abonelik durumunun tek kaynağı webhook, client değil.
- Kullanıcı girdisi Zod ile doğrulanır — server action / route handler girişinde.
- Sırlar `.env.local` (git'te değil) + Vercel env panelinde. Anahtarı asla çıktıya yazma.

## Veritabanı akışı

1. Şema değişikliği → `supabase/migrations/` içine yeni `.sql` dosyası (asla eskisini düzenleme).
2. Migration RLS policy'sini de içerir.
3. Uygula → `types/database.ts` yeniden üret.
4. **Prod'a migration uygulamadan önce bana sor.** Supabase MCP ile okuma serbest, yazma onaya tabi.
5. `DROP`, `DELETE FROM`, kolon silme → önce yedek, sonra onay.

## Kod kuralları

- Varsayılan Server Component. `"use client"` sadece state/event gerekiyorsa, en yaprak bileşende.
- Veri yazma → Server Action; harici sistem (Stripe webhook, cron) → route handler.
- Her `await` bir `try/catch` ve kullanıcıya Türkçe hata mesajı. Sessiz `catch {}` yasak.
- Her async ekranda loading + error + empty hali (`loading.tsx`, `error.tsx`).
- Fiyat/plan/limit tek yerde: `lib/plans.ts`. Koda gömülü limit yok.
- Metinler Türkçe, kullanıcıya teknik hata gösterme ("500" değil, "Bir sorun oldu, tekrar dene").

## Komutlar

```bash
npm run dev
npx tsc --noEmit          # her değişiklikten sonra ÇALIŞTIR
npm run lint
npm run build             # deploy öncesi ZORUNLU
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

Deploy: `main`'e push → Vercel otomatik. **`main`'e merge, ben açıkça söylemeden yapılmaz.**

## Satışa hazır kontrol listesi

- [ ] Kayıt → e-posta doğrulama → onboarding akışı uçtan uca çalışıyor
- [ ] Stripe: satın alma, iptal, ödeme başarısız, plan yükseltme — dördü de test edildi (test mode)
- [ ] Ücretsiz plan limiti gerçekten uygulanıyor (client'ta değil, server'da)
- [ ] Gizlilik politikası, KVKK metni, kullanım şartları, mesafeli satış sözleşmesi
- [ ] Hesap silme + veri dışa aktarma
- [ ] Supabase advisor uyarıları temiz (RLS, index, güvenlik)
- [ ] Hata takibi (Sentry) ve temel analytics açık
- [ ] Landing: ne yaptığı, kime, fiyat, CTA — kaydırmadan görünüyor

## Token disiplini

- `node_modules/`, `.next/`, `components/ui/`, `types/database.ts` → okuma, arama.
- Supabase MCP `execute_sql` ile `select *` çekme; `limit 5` ve gerekli kolonlar.
- `list_tables` çıktısını her seferinde alma — şema bu dosyada özetli tut.
- Vercel build hatasında tüm log'u değil, hata satırını al.
- Yeni özellik = önce hangi dosyaları değiştireceğini 3 satırda söyle, sonra yaz.
