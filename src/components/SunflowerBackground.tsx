import type React from "react"
import { useState, useEffect } from "react"

interface Sunflower {
  id: number
  x: number
  y: number
  size: number
  growthStage: number
  rotationSpeed: number
  rotation: number
}

const SunflowerBackground: React.FC<{isDark?: boolean}> = ({isDark = false}) => {
  const [sunflowers, setSunflowers] = useState<Sunflower[]>([])
  const [_frame, setFrame] = useState<number | null>(null)

  useEffect(() => {
    let listener: Parameters<typeof window.requestAnimationFrame>[0] | null = null;
    listener = _timestamp => {
        setSunflowers((prevFlowers) => {
          const updatedFlowers = prevFlowers
            .map((flower) => ({
              ...flower,
              growthStage: flower.growthStage + 0.01,
              x: flower.x + Math.sin(flower.growthStage) * 0.1,
              y: flower.y + Math.cos(flower.growthStage) * 0.1,
            }))
            .filter((flower) => flower.growthStage < Math.PI * 2)
  
          if (Math.random() < 0.01 && updatedFlowers.length < 10) {
            updatedFlowers.push({
              id: Date.now(),
              x: Math.random() * 800,
              y: Math.random() * 500,
              size: 20 + Math.random() * 30,
              growthStage: 0,
              rotationSpeed: (Math.random() - 0.5) * 0.01,
              rotation: 0,
            })
          }
  
          return updatedFlowers
        })

        setFrame(window.requestAnimationFrame(listener!));
      };

    const frame = window.requestAnimationFrame(listener);

    setFrame(frame)
  }, [])

  return (
    <div className="w-full h-full overflow-hidden">
      <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {sunflowers.map((flower) => (
          <g
            key={flower.id}
            transform={`translate(${flower.x}, ${flower.y}) rotate(${flower.growthStage * flower.rotationSpeed * 360})`}
          >
            <g
              style={{
                transform: `scale(${Math.sin(flower.growthStage * 0.5) * 0.5 + 0.5})`,
                transformOrigin: "center",
                opacity: Math.sin(flower.growthStage * 0.5),
              }}
            >
              {[...Array(12)].map((_, i) => (
                <path
                  key={i}
                  d={`M0,${flower.size * 0.3} C${flower.size * 0.1},${flower.size * 0.2} ${flower.size * 0.2},0 0,0 C-${flower.size * 0.2},0 -${flower.size * 0.1},${flower.size * 0.2} 0,${flower.size * 0.3}`}
                  fill={isDark ? "#99ccff" : "#FFD700"}
                  transform={`rotate(${i * 30})`}
                />
              ))}
              {[...Array(6)].map((_, i) => (
                <path
                  key={i}
                  d={`M0,${flower.size * 0.3} C${flower.size * 0.1},${flower.size * 0.2} ${flower.size * 0.2},0 0,0 C-${flower.size * 0.2},0 -${flower.size * 0.1},${flower.size * 0.2} 0,${flower.size * 0.3}`}
                  fill={isDark ? "#99ccff" : "#FFD700"}
                  transform={`rotate(${i * 30 + flower.rotation})`}
                  style={{
                    transformOrigin: "center",
                  }}
                />
              ))}
              <circle r={flower.size * 0.1} fill={isDark ? "#ffccff" : "#8B4513"} />
            </g>
          </g>
        ))}
      </svg>
    </div>
  )
}

export default SunflowerBackground

