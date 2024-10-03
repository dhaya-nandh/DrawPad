function sendWhatsApp(productName, quantityId)
 {
    // WhatsApp number
    const yourWhatsAppNumber = "+918122223530"; 
    // Get the quantity value
    const quantity = document.getElementById(quantityId).value;
    // Create a message with the product name and quantity
    const message = `You have ordered ${quantity} pieces of ${productName}.`;
    // Build WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${yourWhatsAppNumber}&text=${encodeURIComponent(message)}`;
    // Open WhatsApp with the message
    window.open(whatsappUrl, '_blank');
}