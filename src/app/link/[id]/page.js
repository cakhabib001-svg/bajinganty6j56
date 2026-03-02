import { notFound } from 'next/navigation';

// Menggunakan REST API Google agar Server Vercel tidak bentrok dengan Firebase Client
async function getProductData(id) {
    try {
        const res = await fetch(`https://firestore.googleapis.com/v1/projects/shopeeaff-e1257/databases/(default)/documents/links/${id}`, { 
            cache: 'no-store' 
        });
        
        if (!res.ok) return null;
        const json = await res.json();
        if (!json.fields) return null;

        return {
            title: json.fields.title?.stringValue || 'Tanpa Judul',
            image: json.fields.image?.stringValue || '',
            link: json.fields.link?.stringValue || '#'
        };
    } catch (error) {
        return null;
    }
}

export async function generateMetadata({ params }) {
    const data = await getProductData(params.id);

    if (!data) return { title: 'Produk Tidak Ditemukan' };

    return {
        title: data.title,
        description: 'Beli sekarang di Shopee',
        openGraph: {
            title: data.title,
            description: 'Klik gambar untuk melihat detail produk di Shopee.',
            images: [data.image],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: data.title,
            images: [data.image]
        }
    };
}

export default async function ProductPage({ params }) {
    const data = await getProductData(params.id);

    if (!data) return notFound();

    return (
        <div className="min-h-screen bg-[#121212] flex items-center justify-center p-4 font-sans">
            <div className="w-full max-w-sm bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                <div className="w-full aspect-square bg-gray-800">
                    <img className="w-full h-full object-cover" src={data.image} alt={data.title} />
                </div>
                <div className="p-6 flex flex-col items-center text-center">
                    <h1 className="text-xl font-bold mb-6 text-white leading-snug">{data.title}</h1>
                    <a href={data.link} className="w-full bg-[#ee4d2d] hover:bg-[#d73f22] text-white font-bold rounded-xl px-6 py-4 transition-colors flex items-center justify-center gap-2 text-lg shadow-lg shadow-orange-900/50">
                        Beli Sekarang di Shopee
                    </a>
                    <p className="text-xs text-gray-500 mt-4">Anda akan diarahkan ke halaman resmi Shopee.</p>
                </div>
            </div>
        </div>
    );
}