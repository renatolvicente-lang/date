
const form = document.getElementById('form-encontro');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "4b227bf9-9f25-42c1-a24a-a9eba8179d23");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Encontro marcado com sucesso! ❤️");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Algo deu errado, Tenta denovo ai hehe.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});