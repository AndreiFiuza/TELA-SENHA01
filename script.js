document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email");
    const button = document.querySelector("button");
  
    button.addEventListener("click", async () => {
      const email = emailInput.value.trim();
  
      if (!email) {
        alert("O campo de e-mail é obrigatório.");
        return;
      }
  
      try {
        const response = await fetch("https://back-spider.vercel.app/user/RememberPassword", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email })  // apenas email!
        });
  
        const data = await response.json();
  
        if (response.ok) {
          // redirecionar para próxima página
          window.location.href = "palavra-chave.html";
        } else {
          alert(data.message || "Erro: Email não encontrado.");
        }
  
      } catch (error) {
        console.error("Erro na requisição:", error);
        alert("Erro ao se conectar com o servidor.");
      }
    });
  });
  