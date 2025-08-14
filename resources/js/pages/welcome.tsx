import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="🏘️ Desa Digital - Membangun Desa Digital Masa Depan">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
                <meta name="description" content="Solusi inovatif untuk pemerintahan desa yang lebih baik. Platform digital terintegrasi untuk transformasi desa modern." />
            </Head>

            {/* Header Navigation */}
            <header className="bg-white shadow-sm sticky top-0 z-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                                <span className="text-white font-bold text-xl">🏘️</span>
                            </div>
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Desa Digital</h1>
                        </div>

                        {/* Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            <a href="#beranda" className="text-gray-700 hover:text-blue-600 font-medium dark:text-gray-300">Beranda</a>
                            <a href="#produk" className="text-gray-700 hover:text-blue-600 font-medium dark:text-gray-300">Produk</a>
                            <a href="#solusi" className="text-gray-700 hover:text-blue-600 font-medium dark:text-gray-300">Solusi</a>
                            <a href="#data-spasial" className="text-gray-700 hover:text-blue-600 font-medium dark:text-gray-300">Data Spasial</a>
                            <a href="#blog" className="text-gray-700 hover:text-blue-600 font-medium dark:text-gray-300">Blog</a>
                            <a href="#karir" className="text-gray-700 hover:text-blue-600 font-medium dark:text-gray-300">Karir</a>
                            <a href="#kontak" className="text-gray-700 hover:text-blue-600 font-medium dark:text-gray-300">Kontak</a>
                        </nav>

                        {/* Auth Buttons */}
                        <div className="flex items-center space-x-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <div className="flex space-x-3">
                                    <Link
                                        href={route('login')}
                                        className="text-gray-700 hover:text-blue-600 px-4 py-2 font-medium dark:text-gray-300"
                                    >
                                        Masuk
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                    >
                                        Daftar
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section id="beranda" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32 dark:from-gray-900 dark:to-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 dark:text-white">
                            Membangun Desa Digital
                            <span className="block text-blue-600">Masa Depan 🚀</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto dark:text-gray-300">
                            Solusi inovatif untuk pemerintahan desa yang lebih baik, efisien, dan transparan
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                                🔍 Jelajahi Solusi Kami
                            </button>
                            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                                📞 Konsultasi Gratis
                            </button>
                        </div>
                    </div>
                </div>
                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-10 -right-10 w-96 h-96 bg-blue-200 rounded-full opacity-20 dark:bg-blue-800"></div>
                    <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-indigo-200 rounded-full opacity-20 dark:bg-indigo-800"></div>
                </div>
            </section>

            {/* Mengapa Desa Digital Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
                            🌟 Mengapa Desa Digital?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
                            Transformasi digital membawa perubahan signifikan untuk kemajuan desa
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center p-6 rounded-xl bg-blue-50 dark:bg-gray-800">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Efisiensi Maksimal</h3>
                            <p className="text-gray-600 dark:text-gray-300">Automatisasi proses administrasi menghemat waktu dan tenaga</p>
                        </div>

                        <div className="text-center p-6 rounded-xl bg-green-50 dark:bg-gray-800">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🔍</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Transparansi Penuh</h3>
                            <p className="text-gray-600 dark:text-gray-300">Akses informasi yang mudah dan transparan untuk warga</p>
                        </div>

                        <div className="text-center p-6 rounded-xl bg-purple-50 dark:bg-gray-800">
                            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">📊</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Data Terintegrasi</h3>
                            <p className="text-gray-600 dark:text-gray-300">Pengelolaan data terpusat dan akurat untuk pengambilan keputusan</p>
                        </div>

                        <div className="text-center p-6 rounded-xl bg-yellow-50 dark:bg-gray-800">
                            <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🤝</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Pelayanan Prima</h3>
                            <p className="text-gray-600 dark:text-gray-300">Layanan publik 24/7 yang mudah diakses kapan saja</p>
                        </div>

                        <div className="text-center p-6 rounded-xl bg-red-50 dark:bg-gray-800">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">💰</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Hemat Biaya</h3>
                            <p className="text-gray-600 dark:text-gray-300">Mengurangi biaya operasional dan administratif secara signifikan</p>
                        </div>

                        <div className="text-center p-6 rounded-xl bg-indigo-50 dark:bg-gray-800">
                            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🌐</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Akses Global</h3>
                            <p className="text-gray-600 dark:text-gray-300">Membuka peluang kerjasama dan investasi dari luar daerah</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Produk & Solusi Section */}
            <section id="produk" className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
                            🛠️ Produk & Solusi Kami
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
                            Rangkaian lengkap solusi digital untuk transformasi desa modern
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-900">
                            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-2xl text-white">🏢</span>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Sistem Informasi Desa</h3>
                            <p className="text-gray-600 mb-6 dark:text-gray-300">Platform terintegrasi untuk mengelola seluruh kegiatan administrasi desa secara digital</p>
                            <ul className="text-sm text-gray-500 space-y-2 dark:text-gray-400">
                                <li>✓ Administrasi kependudukan</li>
                                <li>✓ Surat-menyurat online</li>
                                <li>✓ Laporan keuangan</li>
                                <li>✓ Inventaris aset desa</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-900">
                            <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-2xl text-white">👥</span>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Manajemen Data Penduduk</h3>
                            <p className="text-gray-600 mb-6 dark:text-gray-300">Sistem pengelolaan data penduduk yang akurat dan real-time untuk perencanaan pembangunan</p>
                            <ul className="text-sm text-gray-500 space-y-2 dark:text-gray-400">
                                <li>✓ Database penduduk terintegrasi</li>
                                <li>✓ Statistik demografis</li>
                                <li>✓ Pemetaan keluarga</li>
                                <li>✓ Monitoring program sosial</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-900">
                            <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-2xl text-white">💻</span>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Pelayanan Publik Online</h3>
                            <p className="text-gray-600 mb-6 dark:text-gray-300">Portal layanan publik yang memudahkan warga mengurus berbagai keperluan secara online</p>
                            <ul className="text-sm text-gray-500 space-y-2 dark:text-gray-400">
                                <li>✓ Pengajuan surat online</li>
                                <li>✓ Tracking status permohonan</li>
                                <li>✓ Pembayaran digital</li>
                                <li>✓ Chat customer service</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-900">
                            <div className="w-16 h-16 bg-yellow-600 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-2xl text-white">🗺️</span>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Pemetaan Digital</h3>
                            <p className="text-gray-600 mb-6 dark:text-gray-300">Sistem pemetaan wilayah desa dengan teknologi GIS untuk perencanaan tata ruang</p>
                            <ul className="text-sm text-gray-500 space-y-2 dark:text-gray-400">
                                <li>✓ Peta interaktif desa</li>
                                <li>✓ Zonasi wilayah</li>
                                <li>✓ Monitoring lahan</li>
                                <li>✓ Perencanaan infrastruktur</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-900">
                            <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-2xl text-white">💰</span>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Keuangan Desa Digital</h3>
                            <p className="text-gray-600 mb-6 dark:text-gray-300">Platform manajemen keuangan desa yang transparan dengan pelaporan otomatis</p>
                            <ul className="text-sm text-gray-500 space-y-2 dark:text-gray-400">
                                <li>✓ Anggaran dan realisasi</li>
                                <li>✓ Kas desa digital</li>
                                <li>✓ Laporan keuangan otomatis</li>
                                <li>✓ Audit trail lengkap</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-900">
                            <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-2xl text-white">📱</span>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Aplikasi Mobile Warga</h3>
                            <p className="text-gray-600 mb-6 dark:text-gray-300">Aplikasi mobile untuk warga mengakses layanan desa langsung dari smartphone</p>
                            <ul className="text-sm text-gray-500 space-y-2 dark:text-gray-400">
                                <li>✓ Notifikasi penting</li>
                                <li>✓ Pengaduan masyarakat</li>
                                <li>✓ Info kegiatan desa</li>
                                <li>✓ Marketplace UMKM</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Klien/Testimoni Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
                            🏆 Dipercaya Ribuan Desa
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
                            Bergabunglah dengan desa-desa yang telah merasakan manfaat transformasi digital
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">2,500+</div>
                            <div className="text-gray-600 dark:text-gray-300">Desa Terdaftar</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
                            <div className="text-gray-600 dark:text-gray-300">Tingkat Kepuasan</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                            <div className="text-gray-600 dark:text-gray-300">Layanan Support</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-yellow-600 mb-2">5 Tahun</div>
                            <div className="text-gray-600 dark:text-gray-300">Pengalaman</div>
                        </div>
                    </div>

                    {/* Testimonials */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-blue-50 p-8 rounded-xl dark:bg-gray-800">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-white font-semibold">PK</span>
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900 dark:text-white">Pak Kusnan</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">Kepala Desa Maju</div>
                                </div>
                            </div>
                            <p className="text-gray-700 italic dark:text-gray-300">
                                "Sejak menggunakan sistem digital, pelayanan di desa kami menjadi 80% lebih cepat. Warga sangat puas!"
                            </p>
                            <div className="flex text-yellow-400 mt-4">
                                ⭐⭐⭐⭐⭐
                            </div>
                        </div>

                        <div className="bg-green-50 p-8 rounded-xl dark:bg-gray-800">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-white font-semibold">SR</span>
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900 dark:text-white">Ibu Sari</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">Sekretaris Desa Harapan</div>
                                </div>
                            </div>
                            <p className="text-gray-700 italic dark:text-gray-300">
                                "Platform yang mudah digunakan dan sangat membantu dalam pengelolaan administrasi desa sehari-hari."
                            </p>
                            <div className="flex text-yellow-400 mt-4">
                                ⭐⭐⭐⭐⭐
                            </div>
                        </div>

                        <div className="bg-purple-50 p-8 rounded-xl dark:bg-gray-800">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-white font-semibold">AM</span>
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900 dark:text-white">Bapak Agus</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">Kepala Desa Sejahtera</div>
                                </div>
                            </div>
                            <p className="text-gray-700 italic dark:text-gray-300">
                                "Transparansi keuangan desa meningkat drastis. Warga bisa melihat penggunaan dana dengan jelas."
                            </p>
                            <div className="flex text-yellow-400 mt-4">
                                ⭐⭐⭐⭐⭐
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="kontak" className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                                    <span className="text-white font-bold text-xl">🏘️</span>
                                </div>
                                <h1 className="text-2xl font-bold">Desa Digital</h1>
                            </div>
                            <p className="text-gray-300 mb-6 max-w-md">
                                Membangun masa depan desa Indonesia melalui transformasi digital yang berkelanjutan dan inklusif.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                                    <span>📘</span>
                                </a>
                                <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                                    <span>🐦</span>
                                </a>
                                <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                                    <span>📷</span>
                                </a>
                                <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                                    <span>📺</span>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
                            <ul className="space-y-2">
                                <li><a href="#beranda" className="text-gray-300 hover:text-white transition-colors">Beranda</a></li>
                                <li><a href="#produk" className="text-gray-300 hover:text-white transition-colors">Produk</a></li>
                                <li><a href="#solusi" className="text-gray-300 hover:text-white transition-colors">Solusi</a></li>
                                <li><a href="#blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#karir" className="text-gray-300 hover:text-white transition-colors">Karir</a></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Kontak Kami</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <span className="mr-3">📍</span>
                                    <span className="text-gray-300">Jl. Digital Village No. 123<br />Jakarta, Indonesia</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-3">📞</span>
                                    <span className="text-gray-300">+62 21 1234 5678</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-3">📧</span>
                                    <span className="text-gray-300">info@desadigital.id</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-300 text-sm mb-4 md:mb-0">
                            © 2024 Desa Digital. Semua hak dilindungi undang-undang.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">Kebijakan Privasi</a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">Syarat & Ketentuan</a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">Bantuan</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}