import { useState, useEffect, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
name
// ─── Floating Petals ────────────────────────────────────────────────────────
function Petals() {
  const petals = Array.from({ length: 18 }, (_, i) => i);
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {petals.map(i => {
        const left = Math.random() * 100;
        const delay = Math.random() * 12;
        const duration = 10 + Math.random() * 8;
        const size = 6 + Math.random() * 10;
        const drift = (Math.random() - 0.5) * 80;
        const shapes = ['50% 50%', '60% 40% 40% 60%', '40% 60% 60% 40%', '70% 30% 30% 70%'];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              bottom: '-20px',
              left: `${left}%`,
              width: `${size}px`,
              height: `${size * 1.3}px`,
              background: `linear-gradient(135deg, #F2C4CE, #E8849A)`,
              borderRadius: shape,
              opacity: 0,
              '--drift': `${drift}px`,
              animation: `float-petal ${duration}s ${delay}s ease-in-out infinite`,
            }}
          />
        );
      })}
    </div>
  );
}

// ─── Animated Flame ─────────────────────────────────────────────────────────
function Candle({ blown }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
      {!blown && (
        <div style={{ position: 'relative', marginBottom: '-2px', zIndex: 2 }}>
          <div style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '28px', height: '36px',
            background: 'radial-gradient(ellipse at center, rgba(255,200,60,0.4), transparent 70%)',
            borderRadius: '50%',
            animation: 'flame-glow 1.2s ease-in-out infinite',
          }} />
          <div style={{
            width: '16px', height: '28px',
            background: 'linear-gradient(to top, #FF8C00, #FFB347, #FFDD57)',
            borderRadius: '50% 50% 40% 40% / 60% 60% 40% 40%',
            animation: 'flame-flicker 0.8s ease-in-out infinite',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              bottom: '3px', left: '50%',
              transform: 'translateX(-50%)',
              width: '8px', height: '16px',
              background: 'linear-gradient(to top, #FFF5CC, #FFE066)',
              borderRadius: '50% 50% 40% 40% / 60% 60% 40% 40%',
              opacity: 0.9,
            }} />
          </div>
        </div>
      )}

      {blown && (
        <div style={{ height: '30px', display: 'flex', gap: '4px', alignItems: 'flex-end', marginBottom: '-2px' }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width: '4px', height: '20px',
              background: 'linear-gradient(to top, rgba(150,120,130,0.6), transparent)',
              borderRadius: '50%',
              animation: `smoke-rise 1.5s ${i * 0.2}s ease-out forwards`,
            }} />
          ))}
        </div>
      )}

      <div style={{
        width: '18px', height: '56px',
        background: 'linear-gradient(to right, #F2C4CE, #FFF0F5 40%, #E8849A)',
        borderRadius: '3px 3px 2px 2px',
        position: 'relative',
        boxShadow: '0 2px 8px rgba(194,99,122,0.3)',
      }}>
        <div style={{ position: 'absolute', top: 0, left: '3px', width: '5px', height: '12px',
          background: '#FFF0F5', borderRadius: '0 0 50% 50%' }} />
        <div style={{ position: 'absolute', top: 0, right: '4px', width: '4px', height: '8px',
          background: '#F2C4CE', borderRadius: '0 0 50% 50%' }} />
        <div style={{ position: 'absolute', top: '-6px', left: '50%', transform: 'translateX(-50%)',
          width: '2px', height: '8px', background: '#4A1C2C', borderRadius: '1px' }} />
      </div>
    </div>
  );
}

// ─── CSS Cake ────────────────────────────────────────────────────────────────
function Cake({ blown }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, position: 'relative' }}>
      <Candle blown={blown} />

      <div style={{
        width: '110px', height: '60px',
        background: 'linear-gradient(to bottom, #FFF0F5 0%, #F2C4CE 100%)',
        borderRadius: '8px 8px 4px 4px',
        position: 'relative',
        boxShadow: '0 4px 12px rgba(194,99,122,0.2)',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-6px', left: 0, right: 0, height: '14px',
          background: 'white',
          borderRadius: '40% 40% 0 0',
        }} />
        {[10, 22, 34, 48, 62, 76, 88].map((x, i) => (
          <div key={i} style={{
            position: 'absolute', top: 0, left: `${x}px`,
            width: '10px', height: '12px',
            background: 'white',
            borderRadius: '0 0 50% 50%',
          }} />
        ))}
        {[18, 45, 72, 90].map((x, i) => (
          <div key={i} style={{
            position: 'absolute', top: '28px', left: `${x}px`,
            fontSize: '10px', lineHeight: 1,
          }}>🤍</div>
        ))}
        {[28, 58, 82].map((x, i) => (
          <div key={i} style={{
            position: 'absolute', bottom: '10px', left: `${x}px`,
            width: '6px', height: '6px',
            background: '#E8849A', borderRadius: '50%',
          }} />
        ))}
      </div>

      <div style={{ width: '130px', height: '10px',
        background: 'linear-gradient(to right, #E8849A, #C2637A, #E8849A)',
        borderRadius: '2px' }} />

      <div style={{
        width: '160px', height: '75px',
        background: 'linear-gradient(to bottom, #FFF0F5 0%, #F2C4CE 100%)',
        borderRadius: '8px 8px 4px 4px',
        position: 'relative',
        boxShadow: '0 6px 20px rgba(194,99,122,0.25)',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-6px', left: 0, right: 0, height: '14px',
          background: 'white', borderRadius: '40% 40% 0 0',
        }} />
        {[8, 20, 32, 46, 58, 72, 86, 98, 112, 128, 142].map((x, i) => (
          <div key={i} style={{
            position: 'absolute', top: 0, left: `${x}px`,
            width: '12px', height: '14px',
            background: 'white', borderRadius: '0 0 50% 50%',
          }} />
        ))}
        {[20, 55, 90, 125].map((x, i) => (
          <div key={i} style={{
            position: 'absolute', top: '28px', left: `${x}px`,
            fontSize: '13px',
          }}>💕</div>
        ))}
        {[16, 32, 48, 64, 80, 96, 112, 128, 144].map((x, i) => (
          <div key={i} style={{
            position: 'absolute', bottom: '14px', left: `${x}px`,
            width: '5px', height: '5px',
            background: i % 2 === 0 ? '#C2637A' : '#F2C4CE',
            borderRadius: '50%',
          }} />
        ))}
      </div>

      <div style={{
        width: '185px', height: '12px',
        background: 'linear-gradient(to bottom, #E8849A, #C2637A)',
        borderRadius: '0 0 8px 8px',
        boxShadow: '0 8px 24px rgba(194,99,122,0.35)',
      }} />

      <div style={{
        width: '160px', height: '20px',
        background: 'radial-gradient(ellipse at center, rgba(232,132,154,0.4), transparent 70%)',
        borderRadius: '50%',
        marginTop: '4px',
      }} />
    </div>
  );
}

// ─── Blow Detection ──────────────────────────────────────────────────────────
function useMicBlow(onBlow) {
  const [micState, setMicState] = useState('idle');
  const [blowProgress, setBlowProgress] = useState(0); // 0–100
  const audioCtxRef = useRef(null);
  const analyserRef = useRef(null);
  const rafRef = useRef(null);
  const loudCountRef = useRef(0);

  const startListening = useCallback(async () => {
    setMicState('requesting');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const ctx = new AudioContext();
      const source = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 512;
      source.connect(analyser);
      audioCtxRef.current = ctx;
      analyserRef.current = analyser;
      setMicState('listening');

      const data = new Uint8Array(analyser.frequencyBinCount);
      // High threshold — only a real sustained blow (not talking or ambient noise) will trigger
      const THRESHOLD = 90;
      const NEEDED_FRAMES = 11; // ~0.35s of sustained loud audio at 60fps

      const check = () => {
        analyser.getByteFrequencyData(data);
        // Focus on low-mid frequencies typical of a blow (roughly 80–600Hz)
        const blowBins = data.slice(2, 30);
        const avg = blowBins.reduce((a, b) => a + b, 0) / blowBins.length;

        if (avg > THRESHOLD) {
          loudCountRef.current = Math.min(loudCountRef.current + 1, NEEDED_FRAMES);
        } else {
          // Decay slowly so brief spikes don't accumulate
          loudCountRef.current = Math.max(0, loudCountRef.current - 2);
        }

        setBlowProgress(Math.round((loudCountRef.current / NEEDED_FRAMES) * 100));

        if (loudCountRef.current >= NEEDED_FRAMES) {
          stream.getTracks().forEach(t => t.stop());
          ctx.close();
          cancelAnimationFrame(rafRef.current);
          onBlow();
          return;
        }
        rafRef.current = requestAnimationFrame(check);
      };
      rafRef.current = requestAnimationFrame(check);
    } catch {
      setMicState('error');
    }
  }, [onBlow]);

  useEffect(() => () => {
    cancelAnimationFrame(rafRef.current);
    audioCtxRef.current?.close();
  }, []);

  return { micState, startListening, blowProgress };
}

// ─── Main App ────────────────────────────────────────────────────────────────
export default function App() {
  const [pageVisible, setPageVisible] = useState(false);
  const [blown, setBlown] = useState(false);

  const NAME = 'bb Hazel';

  useEffect(() => {
    const t = setTimeout(() => setPageVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fireConfetti = useCallback(() => {
    const colors = ['#E8849A', '#F2C4CE', '#C2637A', '#FFD6E0', '#FFD700', '#FFFFFF'];
    confetti({ particleCount: 80, angle: 60, spread: 70, origin: { x: 0, y: 1 }, colors, shapes: ['circle', 'star'] });
    confetti({ particleCount: 80, angle: 120, spread: 70, origin: { x: 1, y: 1 }, colors, shapes: ['circle', 'star'] });
    setTimeout(() => {
      confetti({ particleCount: 50, angle: 90, spread: 90, origin: { x: 0.5, y: 0.8 }, colors });
    }, 400);
  }, []);

  const handleBlow = useCallback(() => {
    setBlown(true);
    setTimeout(() => {
      fireConfetti();
    }, 1200);
  }, [fireConfetti]);

  const { micState, startListening, blowProgress } = useMicBlow(handleBlow);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', position: 'relative' }}>
      <Petals />

      {/* ── Section 1: Hero ── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '40px 24px',
        position: 'relative', zIndex: 1,
        opacity: pageVisible ? 1 : 0,
        transition: 'opacity 1.2s ease',
      }}>
        <div style={{
          textAlign: 'center',
          animation: pageVisible ? 'fade-up 1s 0.3s ease both' : 'none',
        }}>
          <p style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '22px',
            color: 'var(--deep)',
            marginBottom: '16px',
            opacity: 0.85,
          }}>
            today is your day ✨
          </p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontWeight: 600,
            fontSize: 'clamp(38px, 10vw, 52px)',
            color: 'var(--text)',
            lineHeight: 1.15,
            animation: 'pulse-glow 3s ease-in-out infinite',
            letterSpacing: '-0.5px',
          }}>
            Happy Birthday,<br />
            <span style={{ color: 'var(--deep)' }}>{NAME}</span> 🎂
          </h1>
          <p style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '26px',
            color: 'var(--primary)',
            marginTop: '20px',
            opacity: 0.9,
          }}>
            Make a wish...
          </p>
        </div>

        <div style={{
          position: 'absolute', bottom: '32px',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: '6px', opacity: 0.5,
          animation: 'fade-up 1s 1.5s ease both',
        }}>
          <p style={{ fontFamily: "'DM Sans'", fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>scroll down</p>
          <div style={{ width: '1px', height: '32px', background: 'var(--primary)', borderRadius: '1px' }} />
        </div>
      </section>

      {/* ── Section 2: Cake ── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '60px 24px',
        position: 'relative', zIndex: 1,
        gap: '40px',
      }}>
        <div style={{ animation: 'scale-pulse 4s ease-in-out infinite' }}>
          <Cake blown={blown} />
        </div>

        {!blown && (
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>

            {micState === 'idle' && (
              <>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: 'italic',
                  fontSize: '20px',
                  color: 'var(--text)',
                  maxWidth: '280px',
                  lineHeight: 1.6,
                  opacity: 0.85,
                }}>
                  Close your eyes, make a wish,<br />then blow out the candle 🕯️
                </p>
                <button
                  onClick={startListening}
                  style={{
                    minHeight: '52px', padding: '14px 32px',
                    background: 'linear-gradient(135deg, var(--primary), var(--deep))',
                    color: 'white', border: 'none', borderRadius: '50px',
                    fontFamily: "'DM Sans', sans-serif", fontSize: '15px', fontWeight: 500,
                    cursor: 'pointer', letterSpacing: '0.3px',
                    boxShadow: '0 4px 20px rgba(194,99,122,0.4)',
                    transition: 'transform 0.15s, box-shadow 0.15s',
                  }}
                  onMouseDown={e => e.currentTarget.style.transform = 'scale(0.97)'}
                  onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  🎤 Open Microphone
                </button>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '12px',
                  color: 'var(--primary)',
                  opacity: 0.65,
                  maxWidth: '240px',
                  lineHeight: 1.6,
                }}>
                  Allow mic access, then blow steadily toward your phone to extinguish the flame
                </p>
              </>
            )}

            {micState === 'requesting' && (
              <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: '20px', color: 'var(--primary)' }}>
                Waiting for mic permission...
              </p>
            )}

            {micState === 'listening' && (
              <>
                <p style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: '24px', color: 'var(--deep)',
                  animation: 'pulse-glow 1s ease-in-out infinite',
                }}>
                  🎤 Ready — blow now!
                </p>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '12px', color: 'var(--primary)', opacity: 0.7,
                  maxWidth: '220px', textAlign: 'center', lineHeight: 1.5,
                }}>
                  Blow steadily and firmly toward the mic
                </p>
                {/* Progress ring */}
                <div style={{ position: 'relative', width: '64px', height: '64px' }}>
                  <svg width="64" height="64" style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)' }}>
                    <circle cx="32" cy="32" r="26" fill="none" stroke="var(--accent)" strokeWidth="5" />
                    <circle
                      cx="32" cy="32" r="26" fill="none"
                      stroke="var(--primary)" strokeWidth="5"
                      strokeDasharray={`${2 * Math.PI * 26}`}
                      strokeDashoffset={`${2 * Math.PI * 26 * (1 - blowProgress / 100)}`}
                      strokeLinecap="round"
                      style={{ transition: 'stroke-dashoffset 0.1s' }}
                    />
                  </svg>
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '13px', fontWeight: 600,
                    color: 'var(--deep)',
                  }}>
                    {blowProgress}%
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-end', height: '32px' }}>
                  {[1,2,3,4,5].map(i => (
                    <div key={i} style={{
                      width: '6px',
                      height: `${8 + i * 5}px`,
                      background: 'var(--primary)',
                      borderRadius: '3px',
                      animation: `scale-pulse ${0.4 + i * 0.1}s ease-in-out infinite`,
                    }} />
                  ))}
                </div>
              </>
            )}

            {micState === 'error' && (
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: "'DM Sans'", fontSize: '14px', color: 'var(--deep)', marginBottom: '4px' }}>
                  Mic couldn't be accessed.
                </p>
                <p style={{ fontFamily: "'DM Sans'", fontSize: '12px', color: 'var(--primary)', opacity: 0.7 }}>
                  Please allow microphone access in your browser settings and reload the page.
                </p>
              </div>
            )}
          </div>
        )}

        {blown && (
          <p style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '22px', color: 'var(--deep)',
            animation: 'fade-up 0.5s ease both',
          }}>
            ✨ Your wish is on its way...
          </p>
        )}
      </section>

    </div>
  );
}