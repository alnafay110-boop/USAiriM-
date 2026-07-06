# USAiriM Publishing — Next Steps

## اپلوڈ کرنے کا طریقہ
1. یہ تمام فائلیں اپنے GitHub ریپو (USAiriM-) میں پرانی فائلوں کی جگہ اپلوڈ/کاپی کر دیں (index.html, books.html, وغیرہ سب کچھ overwrite ہو جائے گا)۔
2. Cloudflare Pages خود بخود نئی ڈیپلائے کر دے گا۔

## ضروری کام (لازمی)
- **کتاب کا کور امیج**: `images/books/` میں ابھی کوئی اصل تصویر موجود نہیں تھی، اس لیے میں نے خوبصورت CSS بک کور استعمال کیا ہے۔ اگر آپ کے پاس اصل کور امیج ہے تو `images/books/30-islamic-habits.jpg` کے نام سے اپلوڈ کریں اور مجھے بتائیں، میں HTML میں img ٹیگ لگا دوں گا۔
- **Payhip لنک چیک کریں**: میں نے `https://payhip.com/USAiriM` استعمال کیا ہے — براہِ کرم خود چیک کر لیں کہ یہی صحیح لنک ہے۔
- **Contact/Newsletter فارم فعال کریں**: فارم `formsubmit.co/support@usairim.com` پر جاتے ہیں — پہلی بار فارم سبمٹ ہونے پر FormSubmit آپ کو اس ای میل پر ایک تصدیقی ای میل بھیجے گا، اسے کنفرم کرنا ضروری ہے ورنہ پیغامات نہیں پہنچیں گے۔
- **کسٹم ڈومین**: امریکی خریداروں کے اعتماد اور SEO رینکنگ کے لیے `.pages.dev` کی بجائے اپنا ڈومین (مثلاً usairim.com) خریدیں اور Cloudflare Pages سے جوڑیں۔

## Google Search Console
- `sitemap.xml` اور `robots.txt` شامل کر دیے گئے ہیں — ڈومین سیٹ ہونے کے بعد Search Console میں sitemap.xml سبمٹ کر دیں۔

## میں نے کیا درست کیا (خلاصہ)
- Home page پر 4-5 بار دہرائے گئے سیکشنز (Featured Books, Hero, Footer) ختم کیے، ٹوٹے ہوئے HTML ٹیگز درست کیے
- Books page پر غلط CSS لنک (`css/style.css` کی بجائے `style.css`) درست کیا
- "Coming Soon" اور "Buy Now" کا تضاد ختم کیا
- کام نہ کرنے والے Blog اور Subscribe لنکس ختم/فعال کیے
- Contact page سے نظر آنے والا اندرونی اردو نوٹ ہٹایا
- ہر صفحے پر meta description, Open Graph tags, canonical URL, اور Schema.org (Book/Organization) ڈیٹا شامل کیا
- Privacy Policy, Refund Policy, Terms of Service صفحات بنائے (امریکی مارکیٹ میں ڈیجیٹل سیل کے لیے ضروری)
- Books کیٹلاگ صفحہ بنایا جس میں سرچ/فلٹر کام کرتا ہے
- ہر کتاب کے لیے علیحدہ پروڈکٹ صفحہ (SEO کے لیے بہتر) بنایا
- پورا ڈیزائن دوبارہ بنایا — parchment/ink/gold تھیم، موبائل مینو، sitemap.xml، robots.txt، favicon شامل کیا
