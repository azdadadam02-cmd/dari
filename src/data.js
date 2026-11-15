// Kolchi hna: les données dyal site (bla base de données)
import { useState, useEffect } from 'react'

// Les catégories li kayban f la barre li katched f lfo9 (sticky)
export const CATEGORIES = [
  'tous',
  'appartements',
  'villas',
  'maisons',
  'terrains',
]

// tsswira mn Unsplash b l'id dyalha
const img = (id) => `https://images.unsplash.com/photo-${id}?w=1200`

// Les annonces de départ. type = "vente" (Acheter) ola "location" (Location)
// images[0] hiya tsswira l kbira li katban f la carte
export const PROPERTIES = [
  {
    id: 1, titre: 'Appartement moderne', ville: 'Casablanca', quartier: 'Maârif', prix: 1200000, type: 'vente', categorie: 'appartements', chambres: 3, sdb: 2, surface: 110,
    description: "Bel appartement lumineux au 3ème étage d'une résidence récente, à deux pas des commerces et des écoles. Salon spacieux, cuisine équipée et grand balcon.",
    caracteristiques: ['Ascenseur', 'Balcon', 'Cuisine équipée', 'Parking', 'Sécurisé', 'Ensoleillé'],
    images: [img('1502672260266-1c1ef2d93688'), img('1484154218962-a197022b5858'), img('1505691938895-1758d7feb511')],
  },
  {
    id: 2, titre: 'Villa avec piscine', ville: 'Marrakech', quartier: 'Palmeraie', prix: 4500000, type: 'vente', categorie: 'villas', chambres: 5, sdb: 4, surface: 400,
    description: "Villa de standing au cœur de la Palmeraie, entourée d'un grand jardin avec piscine privée. Idéale pour une famille ou un projet de maison d'hôtes.",
    caracteristiques: ['Piscine', 'Jardin', 'Garage', 'Climatisation', 'Sécurisé', 'Terrasse'],
    images: [img('1613490493576-7fde63acd811'), img('1600607687939-ce8a6c25118c'), img('1600566753190-17f0baa2a6c3')],
  },
  {
    id: 3, titre: 'Maison familiale', ville: 'Rabat', quartier: 'Souissi', prix: 2100000, type: 'vente', categorie: 'maisons', chambres: 4, sdb: 3, surface: 220,
    description: "Maison familiale dans un quartier calme et verdoyant, proche des écoles. Grand séjour, cuisine ouverte et jardin privatif.",
    caracteristiques: ['Jardin', 'Garage', 'Cuisine équipée', 'Chauffage', 'Calme'],
    images: [img('1568605114967-8130f3a36994'), img('1600210492486-724fe5c67fb0'), img('1556911220-bff31c812dba')],
  },
  {
    id: 4, titre: 'Riad dans la médina', ville: 'Fès', quartier: 'Médina', prix: 3200000, type: 'vente', categorie: 'maisons', chambres: 6, sdb: 5, surface: 300,
    description: "Riad traditionnel restauré avec patio central, fontaine et zellige d'origine. Terrasse avec vue sur la médina.",
    caracteristiques: ['Patio', 'Terrasse', 'Fontaine', 'Décor traditionnel', 'Climatisation'],
    images: [img('1539020140153-e479b8c22e70'), img('1586023492125-27b2c045efd7'), img('1540518614846-7eded433c457')],
  },
  {
    id: 5, titre: 'Terrain constructible', ville: 'Tanger', quartier: 'Malabata', prix: 900000, type: 'vente', categorie: 'terrains', chambres: 0, sdb: 0, surface: 500,
    description: "Terrain plat et titré, prêt à construire, dans une zone en plein développement proche de la corniche.",
    caracteristiques: ['Titré', 'Terrain plat', 'Accès route', 'Eau et électricité'],
    images: [img('1500382017468-9049fed747ef'), img('1500076656116-558758c991c1'), img('1541123437800-1bb1317badc2')],
  },
  {
    id: 6, titre: 'Maison traditionnelle', ville: 'Chefchaouen', quartier: 'Centre', prix: 1500000, type: 'vente', categorie: 'maisons', chambres: 3, sdb: 2, surface: 150,
    description: "Maison typique aux murs bleus, rénovée avec goût. Terrasse avec vue sur les montagnes du Rif.",
    caracteristiques: ['Terrasse', 'Vue montagne', 'Rénovée', 'Cheminée'],
    images: [img('1560518883-ce09059eeffa'), img('1615874959474-d609969a20ed'), img('1595526114035-0d45ed16cfbf')],
  },
  {
    id: 7, titre: 'Studio meublé', ville: 'Casablanca', quartier: 'Gauthier', prix: 4500, type: 'location', categorie: 'appartements', chambres: 1, sdb: 1, surface: 45,
    description: "Studio entièrement meublé en plein centre-ville, idéal pour un étudiant ou un jeune actif. Proche du tramway.",
    caracteristiques: ['Meublé', 'Ascenseur', 'Internet', 'Cuisine équipée'],
    images: [img('1522708323590-d24dbb6b0267'), img('1560448204-e02f11c3d0e2'), img('1552321554-5fefe8c9ef14')],
  },
  {
    id: 8, titre: 'Villa vue mer', ville: 'Agadir', quartier: 'Founty', prix: 15000, type: 'location', categorie: 'villas', chambres: 4, sdb: 3, surface: 300,
    description: "Villa moderne avec vue imprenable sur l'océan, à quelques minutes de la plage. Grande terrasse et piscine.",
    caracteristiques: ['Vue mer', 'Piscine', 'Terrasse', 'Garage', 'Meublée'],
    images: [img('1580587771525-78b9dba3b914'), img('1600585154340-be6161a56a0c'), img('1600573472550-8090b5e0745e')],
  },
  {
    id: 9, titre: 'Maison avec jardin', ville: 'Kénitra', quartier: 'Bir Rami', prix: 7000, type: 'location', categorie: 'maisons', chambres: 3, sdb: 2, surface: 180,
    description: "Maison spacieuse avec un beau jardin, dans un quartier résidentiel calme. Parfaite pour une famille.",
    caracteristiques: ['Jardin', 'Garage', 'Calme', 'Cuisine équipée'],
    images: [img('1570129477492-45c003edd2be'), img('1576941089067-2de3c901e126'), img('1493809842364-78817add7ffb')],
  },
  {
    id: 10, titre: 'Riad de charme', ville: 'Marrakech', quartier: 'Médina', prix: 12000, type: 'location', categorie: 'maisons', chambres: 5, sdb: 4, surface: 250,
    description: "Riad de charme avec patio, petite piscine et terrasse, à quelques pas de la place Jemaa el-Fna.",
    caracteristiques: ['Patio', 'Piscine', 'Terrasse', 'Meublé', 'Climatisation'],
    images: [img('1590073242678-70ee3fc28e8e'), img('1618221195710-dd6b41faaea6'), img('1600047509807-ba8f99d2cdde')],
  },
]

export const AGENCES = [
  { nom: 'Atlas Immo', ville: 'Casablanca', tel: '05 22 00 00 01' },
  { nom: 'Médina Habitat', ville: 'Fès', tel: '05 35 00 00 02' },
  { nom: 'Ocean Properties', ville: 'Agadir', tel: '05 28 00 00 03' },
  { nom: 'Red City Homes', ville: 'Marrakech', tel: '05 24 00 00 04' },
]

// useState li kaykhbi l9ima f localStorage (bach matmchich ila dirti refresh)
export function useStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key)
      return saved ? JSON.parse(saved) : initial
    } catch {
      return initial
    }
  })
  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(value)) } catch { /* storage bloqué: n9ado bla bih */ }
  }, [key, value])
  return [value, setValue]
}
