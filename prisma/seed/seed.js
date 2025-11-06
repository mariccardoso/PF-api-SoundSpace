// prisma/seed.js
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Limpando tabelas para evitar duplicação
  await prisma.music.deleteMany()
  await prisma.singer.deleteMany()

  // -------------------------
  //  TAYLOR SWIFT
  // -------------------------
  const taylor = await prisma.singer.create({
    data: {
      name: "Taylor Swift",
      genre: "Pop",
      biography:
        "Taylor Swift é uma cantora, compositora e produtora norte-americana reconhecida por sua narrativa emocional e evolução sonora ao longo dos anos.",
      photoUrl: "https://cdn.example.com/photos/taylor-swift.jpg",
      musics: {
        create: [
          {
            title: "Anti-Hero",
            description:
              "Um hit pop introspectivo que explora autocrítica e vulnerabilidade.",
            url: "https://cdn.example.com/music/taylor/anti-hero.mp3",
            rating: 4.9
          },
          {
            title: "Lover",
            description:
              "Uma balada romântica com estética suave e atmosfera nostálgica.",
            url: "https://cdn.example.com/music/taylor/lover.mp3",
            rating: 4.8
          },
          {
            title: "Blank Space",
            description:
              "Um pop afiado com crítica ao sensacionalismo midiático sobre sua vida pessoal.",
            url: "https://cdn.example.com/music/taylor/blank-space.mp3",
            rating: 4.7
          }
        ]
      }
    }
  })

  // -------------------------
  //  TRAVIS SCOTT
  // -------------------------
  const travis = await prisma.singer.create({
    data: {
      name: "Travis Scott",
      genre: "Hip-Hop / Trap",
      biography:
        "Travis Scott é um rapper, produtor e performer conhecido por sua estética futurista, beats atmosféricos e performances altamente visuais.",
      photoUrl: "https://cdn.example.com/photos/travis-scott.jpg",
      musics: {
        create: [
          {
            title: "SICKO MODE",
            description:
              "Faixa icônica de estrutura não linear e múltiplas mudanças de beat.",
            url: "https://cdn.example.com/music/travis/sicko-mode.mp3",
            rating: 4.9
          },
          {
            title: "HIGHEST IN THE ROOM",
            description:
              "Uma track com atmosfera densa e melodia marcante.",
            url: "https://cdn.example.com/music/travis/highest-in-the-room.mp3",
            rating: 4.8
          },
          {
            title: "Goosebumps",
            description:
              "Uma das músicas mais populares do artista, com vibe hipnótica e refrão memorável.",
            url: "https://cdn.example.com/music/travis/goosebumps.mp3",
            rating: 4.8
          }
        ]
      }
    }
  })

  // -------------------------
  //  BRUNO MARS
  // -------------------------
  const bruno = await prisma.singer.create({
    data: {
      name: "Bruno Mars",
      genre: "Pop / R&B / Funk",
      biography:
        "Bruno Mars é cantor, compositor e multi-instrumentista, famoso por sua presença de palco energética e musicalidade inspirada em soul, funk e R&B.",
      photoUrl: "https://cdn.example.com/photos/bruno-mars.jpg",
      musics: {
        create: [
          {
            title: "Treasure",
            description:
              "Um tributo vibrante ao funk e disco dos anos 70.",
            url: "https://cdn.example.com/music/bruno/treasure.mp3",
            rating: 4.7
          },
          {
            title: "Locked Out of Heaven",
            description:
              "Um híbrido entre pop e rock, com influência marcante de The Police.",
            url: "https://cdn.example.com/music/bruno/locked-out-of-heaven.mp3",
            rating: 4.8
          },
          {
            title: "When I Was Your Man",
            description:
              "Uma balada emocional sobre arrependimento e vulnerabilidade.",
            url: "https://cdn.example.com/music/bruno/when-i-was-your-man.mp3",
            rating: 4.9
          }
        ]
      }
    }
  })

  console.log("✅ Seed criada com sucesso!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
