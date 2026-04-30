const portfolioData = {
    wedding: {
        title: 'Wedding Moment',
        images: [
            'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80'
        ]
    },
    prewedding: {
        title: 'Prewedding Outdoor',
        images: [
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80'
        ]
    },
    company: {
        title: 'Company Profile',
        images: [
            'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80'
        ]
    },
    brand: {
        title: 'Brand Content',
        images: [
            'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80'
        ]
    },
    product: {
        title: 'Product Shoot',
        images: [
            'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1585386959984-a41552231658?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=900&q=80'
        ]
    },
    event: {
        title: 'Event Documentation',
        images: [
            'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=900&q=80'
        ]
    }
};

function openPortfolio(category) {
    const data = portfolioData[category];

    if (!data) return;

    document.getElementById("portfolioModalTitle").innerText = data.title;

    document.getElementById("portfolioGallery").innerHTML = data.images.map((img, index) => `
        <div class="col-md-4 col-sm-6">
            <img 
                src="${img}" 
                class="img-fluid rounded-4 gallery-img" 
                alt="${data.title}"
                loading="lazy"
                onerror="this.onerror=null; this.src='https://picsum.photos/900/700?random=${category}${index}'">
        </div>
    `).join("");

    const modal = new bootstrap.Modal(document.getElementById("portfolioModal"));
    modal.show();
}

function sendWhatsApp(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value.trim();
    const layanan = document.getElementById('layanan').value.trim();
    const tanggal = document.getElementById('tanggal').value;
    const pesan = document.getElementById('pesan').value.trim();

    if (!nama || !layanan || !tanggal || !pesan) {
        alert('Lengkapi semua data terlebih dahulu.');
        return;
    }

    const nomorWA = '6281234567890';
    const text = encodeURIComponent(`Halo Lensora Studio,\n\nNama: ${nama}\nLayanan: ${layanan}\nTanggal Acara: ${tanggal}\nPesan: ${pesan}`);
    window.open(`https://wa.me/${nomorWA}?text=${text}`, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', () => openPortfolio(item.dataset.category));
    });

    const whatsappForm = document.getElementById('whatsappForm');
    if (whatsappForm) whatsappForm.addEventListener('submit', sendWhatsApp);

    const navbarCollapse = document.getElementById('navbarNav');
    document.querySelectorAll('.navbar .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
            }
        });
    });
});
