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
document.addEventListener('DOMContentLoaded', function() {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const closeChatbot = document.getElementById('close-chatbot');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const quickReplies = document.querySelectorAll('.quick-btn');

    // Toggle chatbot
    chatbotToggle.addEventListener('click', () => {
        chatbotWindow.classList.toggle('active');
    });

    closeChatbot.addEventListener('click', () => {
        chatbotWindow.classList.remove('active');
    });

    // Quick replies
    quickReplies.forEach(btn => {
        btn.addEventListener('click', () => {
            const message = btn.dataset.reply;
            sendUserMessage(message);
        });
    });

    // Send message
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (message) {
            sendUserMessage(message);
            chatbotInput.value = '';
        }
    }

    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function sendUserMessage(message) {
        addMessage(message, 'user');
        setTypingIndicator(true);
        
        setTimeout(() => {
            setTypingIndicator(false);
            getBotResponse(message);
        }, 1000 + Math.random() * 1000);
    }

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        messageDiv.innerHTML = `
            <div class="avatar">
                ${sender === 'user' ? '<i class="fa-solid fa-user"></i>' : '<i class="fa-solid fa-robot"></i>'}
            </div>
            <div class="message-content">
                <p>${text}</p>
            </div>
        `;
        
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function setTypingIndicator(show) {
        const existingIndicator = chatbotMessages.querySelector('.typing-indicator');
        if (existingIndicator) existingIndicator.remove();
        
        if (show) {
            const indicator = document.createElement('div');
            indicator.className = 'message bot-message typing-indicator';
            indicator.innerHTML = `
                <div class="avatar"><i class="fa-solid fa-robot"></i></div>
                <div class="message-content">
                    <div class="typing-indicator">
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                    </div>
                </div>
            `;
            chatbotMessages.appendChild(indicator);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
    }

    function getBotResponse(message) {
        const lowerMessage = message.toLowerCase();
        let response = '';

        // Respons otomatis berdasarkan keyword
        if (lowerMessage.includes('wedding') || lowerMessage.includes('prewed')) {
            response = '💒 Untuk wedding/prewedding, kami punya 3 paket: Basic (Rp1,5jt), Premium (Rp3,5jt ⭐ Terfavorit), dan Exclusive (Rp6jt). Mau info detail paket mana?';
        } 
        else if (lowerMessage.includes('product') || lowerMessage.includes('produk')) {
            response = '📸 Product shoot mulai Rp500rb/sesi. Cocok untuk e-commerce, katalog, makanan. Hasil edit premium + background custom. Butuh contoh portofolio?';
        }
        else if (lowerMessage.includes('corporate') || lowerMessage.includes('company')) {
            response = '🏢 Company profile video 2-3 menit mulai Rp2,5jt. Termasuk drone shot, interview, dan musik epic. Timeline produksi 7 hari.';
        }
        else if (lowerMessage.includes('harga') || lowerMessage.includes('paket')) {
            response = '💰 Paket populer:\n• Basic: Rp1,5jt (3 jam, 50 foto)\n• Premium: Rp3,5jt (6 jam, foto+video)\n• Exclusive: Rp6jt (full day)\nKlik tombol quick reply atau ketik kebutuhanmu!';
        }
        else if (lowerMessage.includes('booking') || lowerMessage.includes('pesan')) {
            response = '📅 Cara booking mudah:\n1. Chat WA: wa.me/6281234567890\n2. Pilih paket & tanggal\n3. DP 50%\n4. Konfirmasi lokasi\nSekarang available untuk bulan ini!';
        }
        else if (lowerMessage.includes('halo') || lowerMessage.includes('hai')) {
            response = 'Hai! 😊 Senang bisa bantu. Mau tanya wedding, product shoot, atau company profile?';
        }
        else {
            response = 'Terima kasih pertanyaannya! Untuk info lengkap, langsung WA CS kami ya: <a href="https://wa.me/6281234567890" target="_blank" style="color:#25D366;font-weight:600;">Chat WhatsApp</a>';
        }

        addMessage(response, 'bot');
        
        // Update quick replies berdasarkan konteks
        updateQuickReplies(lowerMessage);
    }

    function updateQuickReplies(context) {
        const replies = [
            { text: 'Lihat Paket', reply: 'harga' },
            { text: 'Portofolio', reply: 'portfolio' },
            { text: 'Booking', reply: 'booking' },
            { text: 'WA CS', reply: 'whatsapp' }
        ];
        
        const quickContainer = document.getElementById('quick-replies');
        quickContainer.innerHTML = '';
        replies.forEach(r => {
            const btn = document.createElement('button');
            btn.className = 'quick-btn';
            btn.textContent = r.text;
            btn.dataset.reply = r.reply;
            btn.onclick = () => sendUserMessage(r.reply);
            quickContainer.appendChild(btn);
        });
    }
});
