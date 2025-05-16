import { useEffect, useState } from 'react';

export default function About() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      padding: "2rem",
      fontFamily: "sans-serif",
      backgroundImage: "url('/nature-pixel-bg.gif')",
      backgroundSize: "cover",
      minHeight: "100vh",
      color: "white"
    }}>
      <h1>Tentang Saya</h1>
      <p>Namaku Yanz. Aku suka ngoding dan membuat website.</p>
      <p><strong>Tanggal Lahir:</strong> 14 Juli 2000</p>
      <p><strong>Zodiak:</strong> Cancer</p>
      <p><strong>Jam Sekarang:</strong> {time.toLocaleTimeString()}</p>

      <div style={{ marginTop: "1rem" }}>
        <a href="https://wa.me/6281234567890" target="_blank" style={{ marginRight: "1rem" }}>
          <img src="/icons/wa.png" alt="WhatsApp" width="30" />
        </a>
        <a href="https://instagram.com/username" target="_blank" style={{ marginRight: "1rem" }}>
          <img src="/icons/ig.png" alt="Instagram" width="30" />
        </a>
        <a href="/payment" target="_blank">
          <img src="/icons/payment.png" alt="Payment" width="30" />
        </a>
      </div>

      <br />
      <a href="/" style={{ color: "#ddd" }}>Kembali ke Beranda</a>
    </div>
  );
}