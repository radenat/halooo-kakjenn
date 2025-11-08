  const giftBox = document.getElementById("giftBox");
    let step = 0;

    giftBox.addEventListener("click", () => {
      step++;
      if (step === 1) {
        giftBox.classList.add("open-lid");
      } else if (step === 2) {
        giftBox.classList.add("hide-box");
        setTimeout(() => {
          giftBox.classList.add("show-inner");
        }, 500);
      }
    });

    const loveContainer = document.getElementById("loveContainer");
    const popupBox = document.getElementById("popupBox");

    function createLove() {
      const loveCount = 5; // jumlah love per sekali panggil

      for (let i = 0; i < loveCount; i++) {
        const love = document.createElement("div");
        love.classList.add("love");

        // posisi random
        love.style.left = Math.random() * 100 + "vw";

        // ukuran random
        love.style.fontSize = Math.random() * 20 + 20 + "px";

        // durasi animasi random
        love.style.animationDuration = Math.random() * 2 + 3 + "s";

        love.innerText = "🩷"; 
        document.body.appendChild(love);

        // biar ilang setelah selesai animasi
        setTimeout(() => {
          love.remove();
        }, 5000);
      }
    }

    // Jalankan love + popup ketika lid terbuka (step 1)
    giftBox.addEventListener("click", () => {
      if (step === 1) {
        // semburan love interval
        setInterval(createLove, 300);

        // tampilkan popup setelah sedikit delay
        setTimeout(() => {
          popupBox.style.display = "flex";
        }, 3000);
      }
    });

    const bgMusic = document.getElementById("bgMusic");
    giftBox.addEventListener("click", () => {
      if (step === 1) {
        // mainin musik
        bgMusic.play();
      }
    });