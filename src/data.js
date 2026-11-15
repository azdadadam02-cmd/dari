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

// Les annonces de départ. type = "vente" (Acheter) ola "location" (Location)
export const PROPERTIES = [
  { id: 1, titre: 'Appartement moderne', ville: 'Casablanca', prix: 1200000, type: 'vente', categorie: 'appartements', chambres: 3, surface: 110, image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800' },
  { id: 2, titre: 'Villa avec piscine', ville: 'Marrakech', prix: 4500000, type: 'vente', categorie: 'villas', chambres: 5, surface: 400, image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800' },
  { id: 3, titre: 'Maison familiale', ville: 'Rabat', prix: 2100000, type: 'vente', categorie: 'maisons', chambres: 4, surface: 220, image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800' },
  { id: 4, titre: 'Riad dans la médina', ville: 'Fès', prix: 3200000, type: 'vente', categorie: 'maisons', chambres: 6, surface: 300, image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800' },
  { id: 5, titre: 'Terrain constructible', ville: 'Tanger', prix: 900000, type: 'vente', categorie: 'terrains', chambres: 0, surface: 500, image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800' },
  { id: 6, titre: 'Maison traditionnelle', ville: 'Chefchaouen', prix: 1500000, type: 'vente', categorie: 'maisons', chambres: 3, surface: 150, image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800' },
  { id: 7, titre: 'Studio meublé', ville: 'Casablanca', prix: 4500, type: 'location', categorie: 'appartements', chambres: 1, surface: 45, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800' },
  { id: 8, titre: 'Villa vue mer', ville: 'Agadir', prix: 15000, type: 'location', categorie: 'villas', chambres: 4, surface: 300, image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800' },
  { id: 9, titre: 'Maison avec jardin', ville: 'Kénitra', prix: 7000, type: 'location', categorie: 'maisons', chambres: 3, surface: 180, image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800' },
  { id: 10, titre: 'Riad de charme', ville: 'Marrakech', prix: 12000, type: 'location', categorie: 'maisons', chambres: 5, surface: 250, image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800' },
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
