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

const AnimatedSunflowers: React.FC = () => {
  const [sunflowers, setSunflowers] = useState<Sunflower[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setSunflowers((prevFlowers) => {
        const updatedFlowers = prevFlowers
          .map((flower) => ({
            ...flower,
            growthStage: flower.growthStage + 0.02,
            x: flower.x + Math.sin(flower.growthStage) * 2,
            y: flower.y + Math.cos(flower.growthStage) * 2,
          }))
          .filter((flower) => flower.growthStage < Math.PI * 2)

        if (Math.random() < 0.1 && updatedFlowers.length < 10) {
          updatedFlowers.push({
            id: Date.now(),
            x: Math.random() * 800,
            y: Math.random() * 300,
            size: 20 + Math.random() * 30,
            growthStage: 0,
            rotationSpeed: (Math.random() - 0.5) * 0.1,
            rotation: 0,
          })
        }

        return updatedFlowers
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-[300px] overflow-hidden">
      <svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
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
              {[...Array(6)].map((_, i) => (
                <path
                  key={i}
                  d={`M0,${flower.size * 0.3} C${flower.size * 0.1},${flower.size * 0.2} ${flower.size * 0.2},0 0,0 C-${flower.size * 0.2},0 -${flower.size * 0.1},${flower.size * 0.2} 0,${flower.size * 0.3}`}
                  fill="#FFD700"
                  transform={`rotate(${i * 30})`}
                />
              ))}
              {[...Array(6)].map((_, i) => (
                <path
                  key={i}
                  d={`M0,${flower.size * 0.3} C${flower.size * 0.1},${flower.size * 0.2} ${flower.size * 0.2},0 0,0 C-${flower.size * 0.2},0 -${flower.size * 0.1},${flower.size * 0.2} 0,${flower.size * 0.3}`}
                  fill="#FFD700"
                  transform={`rotate(${i * 30 + flower.rotation})`}
                  style={{
                    transformOrigin: "center",
                  }}
                />
              ))}
              <circle r={flower.size * 0.1} fill="#8B4513" />
            </g>
          </g>
        ))}
      </svg>
    </div>
  )
}

export default AnimatedSunflowers

