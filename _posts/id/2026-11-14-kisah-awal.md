---
title: "Kisah Awal"
description: "Semuanya bermula di samping ranjang rumah sakit. Bagaimana proxy Product Owner, struktur pra-AI, dan kecepatan pengembangan AI melahirkan Scrum: AI Addendum."
ref: origin-story
authors: [ricky]
---
{%- assign t = site.data[page.lang] -%}

*Tulisan ini personal. 100% pendapat saya sendiri.*

Semuanya bermula di samping ranjang rumah sakit.

Tanggal 13 Oktober, saya menjenguk Product Owner saya di rumah sakit. Ia baru saja terkena stroke ringan.

Sakit kepalanya sudah ada sejak berbulan-bulan. Lalu, sore hari tanggal 12 Oktober, pipinya mulai terasa kebas, dan sakit kepalanya makin kuat.

> Saya sengaja tidak menyebut namanya. Cerita ini bukan tentang dia sebagai pribadi. Cerita ini tentang struktur tempat ia berdiri.

Ia pekerja keras. Selama tiga bulan, ia hampir setiap hari tidur larut, dan menghabiskan hari Minggu untuk merinci spesifikasi produk demi Sprint Planning mingguan kami.

Ia mengerjakannya sendirian. Untuk enam aplikasi besar yang saling terhubung.

Dalam perjalanan pulang, saya merasa bersalah. Alasannya akan saya ceritakan nanti, karena alasan itu juga mengejutkan saya.

Pertama, ini kesimpulan saya malam itu:

> PO saya adalah korban dari **struktur pra-AI** yang bertemu **kecepatan pengembangan AI**.

Mari kita urai satu per satu.

## Bagian 1: struktur pra-AI

PO saya, seperti kebanyakan PO yang saya kenal di Indonesia, bukan pemilik produknya.

Pemilik sebenarnya adalah atasannya. Atasannya mendelegasikan urusan taktis kepadanya, dan memercayainya untuk merangkum arahan dari dirinya dan para koleganya.

Atasannya dan para kolega atasannya juga merupakan pengguna sebagian aplikasi. Mereka juga memimpin tim-tim yang nantinya akan memakai aplikasi lainnya.

<figure class="fig">
<svg viewBox="0 0 440 306" role="img" aria-label="Product owner sebenarnya berbicara dengan proxy PO, yang berbicara dengan para developer. Tidak ada kontak langsung antara developer dan pemilik sebenarnya.">
<defs><marker id="f1a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="3.8" markerHeight="3.8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="f-head"/></marker></defs>
<rect class="f-box" x="16" y="14" width="270" height="66" rx="12"/>
<text class="f-t" x="151" y="42" text-anchor="middle">Product owner sebenarnya</text>
<text class="f-s" x="151" y="64" text-anchor="middle">atasan + manajemen puncak</text>
<line class="f-line" x1="151" y1="86" x2="151" y2="114" marker-start="url(#f1a)" marker-end="url(#f1a)"/>
<rect class="f-hot" x="16" y="120" width="270" height="70" rx="12"/>
<text class="f-t" x="151" y="150" text-anchor="middle">Proxy PO</text>
<text class="f-s" x="151" y="173" text-anchor="middle" style="fill:#0f2a20">6 aplikasi · begadang · hari Minggu</text>
<line class="f-line" x1="151" y1="196" x2="151" y2="224" marker-start="url(#f1a)" marker-end="url(#f1a)"/>
<rect class="f-box" x="16" y="230" width="270" height="62" rx="12"/>
<text class="f-t" x="151" y="267" text-anchor="middle">Developers</text>
<path class="f-dash" d="M290 261 C 370 261, 380 47, 290 47"/>
<path class="f-x" d="M344 144 L364 164 M364 144 L344 164"/>
<text class="f-s f-red" x="372" y="140">tak ada</text>
<text class="f-s f-red" x="372" y="158">kontak</text>
<text class="f-s f-red" x="372" y="176">langsung</text>
</svg>
<figcaption>Struktur pra-AI. Semua hal antara pemilik sebenarnya dan para developer melewati satu orang.</figcaption>
</figure>

Inilah **proxy PO**, atau scribe PO, yang klasik. Ini "Scrum-but", jelas.

Tapi mari adil. Dengan kecepatan pra-AI, struktur ini bisa berjalan cukup baik selama bertahun-tahun, bahkan puluhan tahun. Itulah sebabnya hampir semua tim yang saya dengar memakai proxy PO: PO tanpa kuasa yang sebenarnya.

Membangun itu lambat, jadi satu orang masih sempat mengubah keinginan pemilik sebenarnya menjadi tiket sebelum tim kehabisan pekerjaan.

## Bagian 2: kecepatan pengembangan AI

Lalu AI hadir di proyek kami.

Di bulan pertama atau kedua, sebagian besar dari kami menyaksikan pengembangan bertenaga AI dari dekat untuk pertama kalinya. Sebagian developer bahkan belum pernah menyentuh alat agentic seperti Claude Code.

Dan kami secara alami condong ke satu hal: menambah **jumlah pekerjaan**. Bukan menambah UAT. Bukan mendorong beta testing secepat mungkin.

Kenapa? Sederhana: anggaran terbatas dan ambisi besar.

Ada juga hal di luar kendali kami. Misalnya, kami mendapati bahwa kami tidak bisa mengandalkan vendor untuk aplikasi ERP kantor pusat, jadi kami harus memindahkan orang untuk membangunnya sendiri.

<figure class="fig">
<svg viewBox="0 0 440 272" role="img" aria-label="Sebelum AI, kecepatan membangun dan spek yang harus ditulis satu PO masih kecil dan di bawah batas satu orang. Dengan AI, keduanya tumbuh sekitar lima kali dan jauh melewati batas satu orang, sementara waktu bersama pengguna justru berkurang.">
<line class="f-limit" x1="234" y1="30" x2="234" y2="262"/>
<text class="f-s" x="234" y="20" text-anchor="middle">batas satu orang</text>
<text class="f-k" x="12" y="50">SEBELUM AI</text>
<text class="f-s" x="150" y="77" text-anchor="end">Kecepatan bangun</text>
<rect class="b-build" x="160" y="63" width="56" height="18" rx="4"/>
<text class="f-s" x="150" y="105" text-anchor="end">Spek yang ditulis</text>
<rect class="b-spec" x="160" y="91" width="56" height="18" rx="4"/>
<text class="f-s" x="150" y="133" text-anchor="end">Waktu dgn pengguna</text>
<rect class="b-users" x="160" y="119" width="56" height="18" rx="4"/>
<text class="f-k" x="12" y="176">DENGAN AI</text>
<text class="f-s" x="150" y="203" text-anchor="end">Kecepatan bangun</text>
<rect class="b-build" x="160" y="189" width="270" height="18" rx="4"/>
<text class="f-s" x="422" y="203" text-anchor="end" style="fill:#082419;font-weight:700">≈ 5×</text>
<text class="f-s" x="150" y="231" text-anchor="end">Spek yang ditulis</text>
<rect class="b-spec" x="160" y="217" width="74" height="18" rx="4"/>
<rect class="b-over" x="234" y="217" width="196" height="18" rx="4"/>
<text class="f-s" x="332" y="231" text-anchor="middle" style="fill:#082419;font-weight:700">zona burnout</text>
<text class="f-s" x="150" y="259" text-anchor="end">Waktu dgn pengguna</text>
<rect class="b-users" x="160" y="245" width="24" height="18" rx="4"/>
<text class="f-s f-red" x="250" y="259">lebih sedikit dari dulu</text>
</svg>
<figcaption>Struktur sama, kecepatan baru. Spek yang harus ditulis satu orang ikut membengkak bersama kecepatan membangun. Waktu bersama pengguna justru berkurang, karena perhatian kami tercurah untuk men-deliver lebih banyak. (Ilustrasi mekanismenya, bukan data hasil pengukuran.)</figcaption>
</figure>

Bayangkan sebuah pabrik mobil yang meng-upgrade jalur perakitannya sehingga lima kali lebih cepat.

Kabar baik, kan? Tapi setiap mobil di jalur itu tetap butuh gambar dari satu orang desainer. Dan tidak ada pelanggan yang mencoba mobilnya sampai akhir bulan.

Jalur perakitan bukan lagi hambatannya. **Desainer mobilnya yang jadi hambatan.** Maka sang desainer begadang, bekerja di hari Minggu, dan terus menyuapi jalur itu, sampai tubuhnya berkata cukup.

## Jadi, apakah ia cukup bekerja lebih sedikit?

Itu jawaban yang paling gampang.

Lebih banyak istirahat. Rekrut PO kedua. Atur waktu lebih baik.

Tapi tunggu, benarkah begitu?

Sebenarnya ada manfaatnya punya satu orang yang menghubungkan enam aplikasi yang saling terkait (delapan, kalau ERP dan HCMS dihitung). Memecah tugas itu ke dua PO justru akan membuka celah baru di antara aplikasi-aplikasi itu.

Dan akar masalahnya bukan kompetensi. Bukan juga etos kerja. Malah, etos kerja yang terlalu tinggi juga jadi masalah: ia menyembunyikan struktur yang rusak lebih lama.

> Ketika kecepatan berubah, struktur harus ikut berubah. Kalau tidak, orang yang paling berdedikasi di dalam struktur itulah yang membayar harganya.

## Kenapa saya merasa bersalah

Sebagai Scrum Master, saya yakin saya bisa membuat hidupnya lebih ringan.

Saya bisa mendorong lebih keras agar refinement melibatkan developer yang berbicara langsung dengan pengguna. Dalam kasus kami, itu berarti para atasan dari calon pengguna.

Saya memang pernah menyinggungnya, sekali atau dua kali. Tapi hanya sampai di situ.

Sang PO sendiri tidak menerima idenya. Tampaknya ia lebih memilih "melindungi" tim dari manajemen puncak. Dan sebagai tenaga kontrak berbasis proyek, saya merasa tidak punya akses ke manajemen puncak juga.

Kalau dilihat lagi, saya gagal dalam dua hal:

1. Saya gagal melihat **perubahan sistemik** ini: struktur lama tidak akan bertahan dengan kecepatan baru.
2. Sebelum proyek dimulai, saya gagal memosisikan diri secara eksplisit sebagai **konsultan untuk seluruh proses dan organisasi**, bukan sekadar pembantu proxy PO.

Scrum Guide jelas soal yang kedua. Scrum Master juga melayani organisasi, termasuk dengan:

{% include quote.html key="sm_barriers" t=t %}

## Seorang kawan yang berani bertanya

Begitu saya sadar akar masalahnya ada di struktur, saya teringat sesuatu dari sebulan sebelumnya.

Tanggal 14 September, salah satu kontributor di komunitas Agile kami membagikan artikel dengan pertanyaan yang berani: kalau AI bisa menyelesaikan pekerjaan dalam dua hari, [kenapa kita masih pakai Sprint dua minggu?](https://daus95.com/2026/09/14/ai-bisa-selesai-dalam-2-hari-kenapa-kita-masih-pakai-sprint-2-minggu/)

Poinnya dekat dengan cerita saya. AI memadatkan berhari-hari pekerjaan membangun menjadi hitungan jam, tapi delivery tidak ikut cepat, karena review, approval, testing, dan feedback masih berjalan dengan jam lama. **Hambatannya sudah pindah, dari menulis kode ke manusia yang mengambil keputusan.**

Ia juga tahu sebagian dari kami mungkin tidak suka. Begini ia membagikannya di grup komunitas kami:

<figure class="fig fig-img"><img src="{{ '/assets/images/ahmad-whatsapp-sep14.jpg' | relative_url }}" alt="Pesan WhatsApp dari Ahmad Firdaus, 14 September, membagikan artikelnya dan menulis: Saya siap dimarahin sama suhu-suhu di sini karena mempertanyakan kembali manfaat sprint." width="1144" height="582" loading="lazy"><figcaption>Pesan Pak Ahmad di grup komunitas kami, 14 September.</figcaption></figure>

Para agilis juga manusia. Kita merangkul perubahan pada produk. Menerima perubahan pada konsep Agile itu sendiri jauh lebih sulit.

Kontributor itu adalah [Ahmad Firdaus](https://daus95.com).

## Orang sibuk, dan framework yang tidak ingin saya sebut agile

Saya berkata pada diri sendiri: saya harus segera bicara dengan Pak Ahmad.

Beliau juga satu almamater dengan saya. Pertama kali saya bertemu beliau, saya masih mahasiswa yang sedang pitching di sebuah kompetisi, dan beliau salah satu jurinya, mewakili praktisi.

Dan beliau bukan sekadar praktisi. Perusahaannya, eComindo, lahir tahun 1999, di gelombang awal software house Indonesia, dan masih berdiri sampai hari ini.

Beliau orang sibuk, jadi saya ingin ringkas dan menghargai waktunya. Sebelum bertemu, saya mencoba mengkristalkan pemikiran saya dulu.

Ujungnya, saya membuat sebuah framework baru. (Saya menghindari menyebutnya "agile".)

## Kejutannya

Tanggapan beliau mengejutkan saya.

Framework ramah AI yang saya usulkan ternyata masih selaras dengan Scrum Guide. Lebih dari itu: inilah versi Scrum Guide yang sebenarnya, versi idealnya.

Beliau mendorong saya mempertimbangkan untuk mengajarkannya ke dunia sebagai **tambahan untuk Scrum**, bukan penggantinya.

Saya bilang ke beliau apa yang saya suka dari saran itu: kita mungkin akan mudah menemukan sekutu di komunitas Agile yang sudah ada. Tidak ada yang perlu membuang apa yang sudah mereka pelajari. Dan ini bisa menghidupkan kembali meetup Agile bulanan kita.

<figure class="fig">
<svg viewBox="0 0 440 330" role="img" aria-label="Product Owner sebenarnya menetapkan business outcome. Developer, termasuk mantan proxy PO, bertemu pengguna dalam putaran sebanyak yang dibutuhkan di dalam satu Sprint. Scrum Master melayani seluruh organisasi.">
<defs>
<marker id="f3a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="3.8" markerHeight="3.8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="f-head"/></marker>
<marker id="f3h" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="3.2" markerHeight="3.2" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="f-head-hot"/></marker>
</defs>
<rect class="f-org" x="8" y="8" width="424" height="314" rx="18"/>
<text class="f-k" x="26" y="34">ORGANISASI</text>
<text class="f-s" x="26" y="53">Scrum Master melayani seluruhnya</text>
<rect class="f-box" x="100" y="66" width="240" height="64" rx="12"/>
<text class="f-t" x="220" y="94" text-anchor="middle">Product Owner</text>
<text class="f-s" x="220" y="116" text-anchor="middle">pemilik asli, pegang P&amp;L</text>
<line class="f-line" x1="175" y1="134" x2="110" y2="208" marker-end="url(#f3a)"/>
<line class="f-line" x1="265" y1="134" x2="330" y2="208" marker-end="url(#f3a)"/>
<text class="f-s" x="220" y="176" text-anchor="middle">business outcome</text>
<text class="f-s" x="230" y="208" text-anchor="middle" style="fill:#0f2a20;font-weight:700">putaran sesuai kebutuhan</text>
<rect class="f-box" x="18" y="220" width="180" height="84" rx="12"/>
<text class="f-t" x="108" y="254" text-anchor="middle">Developers</text>
<text class="f-s" x="108" y="277" text-anchor="middle">termasuk eks proxy PO</text>
<rect class="f-dark" x="262" y="220" width="160" height="84" rx="12"/>
<text class="f-t f-on-dark" x="342" y="254" text-anchor="middle">Pengguna</text>
<text class="f-s f-on-dark" x="342" y="277" text-anchor="middle">yang nyata</text>
<line class="f-thick" x1="208" y1="262" x2="252" y2="262" marker-start="url(#f3h)" marker-end="url(#f3h)"/>
</svg>
<figcaption>Yang kami tuju. Pemilik sebenarnya menetapkan business outcome, developer bertemu pengguna dalam putaran sebanyak yang dibutuhkan di dalam satu Sprint, dan Scrum Master melayani seluruh organisasi, karena Product Owner yang sebenarnya (yang memegang tanggung jawab P&amp;L) kini ikut hadir.</figcaption>
</figure>

## Selebihnya adalah sejarah

Percakapan itu menjadi [Scrum: AI Addendum]({{ '/id/' | relative_url }}): empat tambahan untuk Scrum, tidak ada yang dibuang, masing-masing dicek kata demi kata terhadap Scrum Guide.

Kalau Anda seorang PO yang bekerja di hari Minggu demi mengimbangi tim yang tiba-tiba membangun lima kali lebih cepat, tulisan ini mungkin menyelamatkan kesehatan Anda di masa depan. Kalau Anda Scrum Master yang merasa ada yang janggal tapi belum bisa menamainya, tulisan ini juga untuk Anda.

Perubahan itu tidak mudah, dan perubahan sistemik jauh lebih sulit lagi. Anda perlu mempelajari hal-hal baru: cara berbicara dengan pengguna, agentic engineering, dan praktik engineering kelas atas sebagai jaring pengaman.

Jabatan Anda mungkin juga berubah. Memang tidak mudah. Inilah yang saya yakini:

> Pada akhirnya, bisnis Anda hanyalah sekelompok orang yang sedang memecahkan masalah. Ketika kecepatan berubah, lindungi orangnya dengan mengubah strukturnya.

Saya masih belajar menjadi Scrum Master yang seharusnya saya jalankan di proyek itu. Kita semua masih berproses.

Jadi, Anda tidak perlu memikirkannya sendirian. Datanglah ke meetup Agile bulanan yang gratis, bagikan kegelisahan Anda, dan belajar dari satu sama lain. Salah satunya adalah [Padepokan Agile](https://www.instagram.com/padepokanagile/).

Apakah cerita ini terdengar akrab bagi Anda? Bawa ceritanya ke sana.
