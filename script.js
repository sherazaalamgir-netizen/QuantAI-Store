// Function jo Payment/WhatsApp logic handle karega
function openPayment(botName, price) {
    
    // Aapka WhatsApp Number (Country code 92 ke saath)
    const myNumber = "923102580930";
    
    // Message jo user ke WhatsApp par likha hua aayega
    const message = "Assalam-o-Alaikum! 💀 QUANT AI STORE\n\n" + 
                    "I am interested in: *" + botName + "*\n" +
                    "Price: *" + price + "*\n\n" +
                    "Please provide Payment details for EasyPaisa/USDT/Bank. " +
                    "I want my License Key after payment.";

    // URL Encode taake symbols (like spaces/stars) link mein sahi chalein
    const encodedMsg = encodeURIComponent(message);
    
    // Final WhatsApp Link
    const waURL = "https://wa.me/" + myNumber + "?text=" + encodedMsg;

    // User ko alert dikhana (Optional)
    alert("Redirecting to WhatsApp for " + botName + " Purchase...");

    // WhatsApp par le jana
    window.open(waURL, '_blank');
}