function orderProduct(productName) {
    const phoneNumber = '1234567890'; // Ganti dengan nomor WhatsApp Anda
    const message = `Halo, saya ingin memesan ${productName}.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}