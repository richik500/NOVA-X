
import { PartType } from "../context/CartContext";

export const pcParts: PartType[] = [
  // CPUs
  {
    id: "cpu-1",
    name: "Quantum Core i9-12900K",
    type: "cpu",
    price: 9999.99,
    image: "/placeholder.svg",
    description: "12 cores, 24 threads, up to 5.2GHz"
  },
  {
    id: "cpu-2",
    name: "Nexus Ryzen 9 7950X",
    type: "cpu",
    price: 6999.99,
    image: "/placeholder.svg",
    description: "16 cores, 32 threads, up to 5.7GHz"
  },
  
  // GPUs
  {
    id: "gpu-1",
    name: "RayForce RTX 4080 Ti",
    type: "gpu",
    price: 12999.99,
    image: "/placeholder.svg",
    description: "16GB GDDR6X, Ray Tracing, DLSS 3.0"
  },
  {
    id: "gpu-2",
    name: "Radiant RX 7900 XTX",
    type: "gpu",
    price: 9999.99,
    image: "/placeholder.svg",
    description: "24GB GDDR6, FSR 3.0, Ray Accelerator"
  },
  
  // RAM
  {
    id: "ram-1",
    name: "HyperX DDR5-6000",
    type: "ram",
    price: 1999.99,
    image: "/placeholder.svg",
    description: "32GB (2x16GB) RGB Gaming Memory"
  },
  {
    id: "ram-2",
    name: "Corsair Vengeance DDR5-5600",
    type: "ram",
    price: 2999.99,
    image: "/placeholder.svg",
    description: "32GB (4x8GB) Low Profile Memory"
  },
  
  // Storage
  {
    id: "storage-1",
    name: "NVMe Pro Gen5 SSD",
    type: "storage",
    price: 3999.99,
    image: "/placeholder.svg",
    description: "2TB, 10,000MB/s Read, 9,500MB/s Write"
  },
  {
    id: "storage-2",
    name: "SonicSSD Plus",
    type: "storage",
    price: 3599.99,
    image: "/placeholder.svg",
    description: "2TB, 7,000MB/s Read, 6,500MB/s Write"
  },
  
  // Cases
  {
    id: "case-1",
    name: "PhantomTech Specter",
    type: "case",
    price: 1999.99,
    image: "/placeholder.svg",
    description: "Mid-Tower, Tempered Glass, ARGB, USB-C"
  },
  {
    id: "case-2",
    name: "NZXT H9 Flow",
    type: "case",
    price: 1799.99,
    image: "/placeholder.svg",
    description: "Mid-Tower, High Airflow, RGB Controller"
  },
  
  // Motherboards
  {
    id: "motherboard-1",
    name: "ROG Maximus Z790",
    type: "motherboard",
    price: 4299.99,
    image: "/placeholder.svg",
    description: "ATX, PCIe 5.0, WiFi 6E, Thunderbolt 4"
  },
  {
    id: "motherboard-2",
    name: "Aorus X670E Master",
    type: "motherboard",
    price: 4999.99,
    image: "/placeholder.svg",
    description: "ATX, PCIe 5.0, WiFi 6E, 10Gb Ethernet"
  },
  
  // Power Supplies
  {
    id: "powersupply-1",
    name: "Corsair HX1200i",
    type: "powersupply",
    price: 1299.99,
    image: "/placeholder.svg",
    description: "1200W, 80+ Platinum, Fully Modular"
  },
  {
    id: "powersupply-2",
    name: "EVGA SuperNOVA 1000 G+",
    type: "powersupply",
    price: 999.99,
    image: "/placeholder.svg",
    description: "1000W, 80+ Gold, Fully Modular"
  },
  
  // Cooling
  {
    id: "cooling-1",
    name: "Arctic Liquid Freezer III",
    type: "cooling",
    price: 899.99,
    image: "/placeholder.svg",
    description: "360mm AIO, ARGB, High Performance"
  },
  {
    id: "cooling-2",
    name: "Noctua NH-D15 Chromax",
    type: "cooling",
    price: 999.99,
    image: "/placeholder.svg",
    description: "Dual Tower Air Cooler, Black Finish"
  }
];

export const getPartsByType = (type: PartType['type']) => {
  return pcParts.filter(part => part.type === type);
};

export const getPartById = (id: string) => {
  return pcParts.find(part => part.id === id);
};

export const partCategories = [
  { id: "cpu", name: "Processors", icon: "cpu" },
  { id: "gpu", name: "Graphics Cards", icon: "gpu" },
  { id: "ram", name: "Memory (RAM)", icon: "ram" },
  { id: "storage", name: "Storage", icon: "storage" },
  { id: "case", name: "Cases", icon: "case" },
  { id: "motherboard", name: "Motherboards", icon: "motherboard" },
  { id: "powersupply", name: "Power Supplies", icon: "powersupply" },
  { id: "cooling", name: "Cooling", icon: "cooling" },
];
