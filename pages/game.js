import dynamic from 'next/dynamic'
const BlockGame = dynamic(() => import('../components/BlockGame'), { ssr: false });

export default function GamePage() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Game Block Blast</h1>
      <p>Susun blok supaya tidak penuh!</p>
      <BlockGame />
      <a href="/">Kembali ke Beranda</a>
    </div>
  );
}