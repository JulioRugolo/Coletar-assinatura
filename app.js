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
    link.download = 'Assinatura.png';
    link.click();
  }
});

// Botão para limpar a assinatura
document.getElementById('clear').addEventListener('click', () => {
  signaturePad.clear();
});
