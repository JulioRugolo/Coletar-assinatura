// Inicializa o Signature Pad
const canvas = document.getElementById('signature-pad');
const signaturePad = new SignaturePad(canvas);

// Botão para salvar a assinatura
document.getElementById('save').addEventListener('click', () => {
  if (signaturePad.isEmpty()) {
    alert("Por favor, desenhe sua assinatura primeiro.");
  } else {
    const dataURL = signaturePad.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'assinatura.png';
    link.click();
  }
});

// Botão para limpar a assinatura
document.getElementById('clear').addEventListener('click', () => {
  signaturePad.clear();
});

// Botão para enviar a assinatura por email
document.getElementById('send-email').addEventListener('click', () => {
  if (signaturePad.isEmpty()) {
    alert("Por favor, desenhe sua assinatura primeiro.");
  } else {
    const dataURL = signaturePad.toDataURL('image/png');
    const email = prompt("Por favor, insira o email para enviar a assinatura:");
    if (email) {
      window.location.href = `mailto:${email}?subject=Assinatura&body=Segue em anexo a assinatura.&attachment=${encodeURIComponent(dataURL)}`;
    }
  }
});
