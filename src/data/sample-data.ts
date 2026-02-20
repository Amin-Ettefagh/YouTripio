export type ParcelOffer = {
  id: string
  name: string
  origin: string
  destination: string
  departure: string
  dimensions: string
  weight: string
  vehicle: string
  prices: Array<{ key: "unbreakable" | "breakable" | "pet"; value: string }>
}

export type CompanionOffer = {
  id: string
  name: string
  origin: string
  destination: string
  departure: string
  seats: number
  vehicle: string
  price: string
}

export type ParcelRequest = {
  id: string
  name: string
  content: string
  dimension: string
  weight: string
}

export type CompanionRequest = {
  id: string
  name: string
  passengers: number
}

// Sample data mirrors the original HTML mockups and keeps the same flow.
export const parcelOffers: ParcelOffer[] = [
  {
    id: "parcel-001",
    name: "John Dao",
    origin: "New Zealand - Auckland",
    destination: "New Zealand - Wellington",
    departure: "2026-04-20 09:30",
    dimensions: "46 cm / 48 cm / 52 cm",
    weight: "98 kg",
    vehicle: "Airport - Emirates",
    prices: [
      { key: "unbreakable", value: "$50" },
      { key: "breakable", value: "$75" },
      { key: "pet", value: "$100" },
    ],
  },
  {
    id: "parcel-002",
    name: "Sara Miles",
    origin: "UAE - Dubai",
    destination: "Germany - Berlin",
    departure: "2026-03-06 16:10",
    dimensions: "40 cm / 45 cm / 50 cm",
    weight: "75 kg",
    vehicle: "Airport - Lufthansa",
    prices: [
      { key: "unbreakable", value: "$55" },
      { key: "breakable", value: "$85" },
      { key: "pet", value: "$120" },
    ],
  },
  {
    id: "parcel-003",
    name: "Leo Chen",
    origin: "Japan - Osaka",
    destination: "Australia - Sydney",
    departure: "2026-05-02 08:00",
    dimensions: "55 cm / 35 cm / 45 cm",
    weight: "62 kg",
    vehicle: "Airport - Qantas",
    prices: [
      { key: "unbreakable", value: "$60" },
      { key: "breakable", value: "$90" },
      { key: "pet", value: "$130" },
    ],
  },
]

export const companionOffers: CompanionOffer[] = [
  {
    id: "companion-001",
    name: "Ava Johnson",
    origin: "USA - New York",
    destination: "Canada - Toronto",
    departure: "2026-03-12 07:20",
    seats: 1,
    vehicle: "Airport - Air Canada",
    price: "$110",
  },
  {
    id: "companion-002",
    name: "Daniel Park",
    origin: "South Korea - Seoul",
    destination: "Thailand - Bangkok",
    departure: "2026-04-08 14:45",
    seats: 2,
    vehicle: "Airport - Korean Air",
    price: "$90",
  },
  {
    id: "companion-003",
    name: "Maya Rivera",
    origin: "Spain - Madrid",
    destination: "Italy - Rome",
    departure: "2026-04-28 11:15",
    seats: 1,
    vehicle: "Train - Eurostar",
    price: "$70",
  },
]

export const parcelRequests: ParcelRequest[] = [
  {
    id: "request-001",
    name: "John Doe",
    content: "Pet",
    dimension: "50-20-20",
    weight: "20",
  },
  {
    id: "request-002",
    name: "Lina Cruz",
    content: "Electronics",
    dimension: "40-20-20",
    weight: "8",
  },
  {
    id: "request-003",
    name: "Omar Hill",
    content: "Documents",
    dimension: "30-15-5",
    weight: "1",
  },
]

export const companionRequests: CompanionRequest[] = [
  {
    id: "companion-request-001",
    name: "John Doe",
    passengers: 1,
  },
  {
    id: "companion-request-002",
    name: "Mina Hart",
    passengers: 2,
  },
  {
    id: "companion-request-003",
    name: "Pablo Diaz",
    passengers: 1,
  },
]
