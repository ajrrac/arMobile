# Paso Rápido

A React Native mobile app for toll/balance management built with Expo SDK 52+, Expo Router, NativeWind, and TypeScript.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app on your device (iOS/Android)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npx expo start
```

3. Scan the QR code with Expo Go (Android) or Camera app (iOS)

## Project Structure

```
├── app/
│   ├── _layout.tsx          # Root layout with SafeAreaProvider
│   └── (tabs)/
│       ├── _layout.tsx      # Tab navigator
│       ├── index.tsx        # Home screen (Inicio)
│       ├── peajes.tsx       # Tolls screen
│       ├── vehiculos.tsx    # Vehicles screen
│       ├── ayuda.tsx        # Help screen
│       └── asistencia.tsx   # Roadside assistance screen
├── components/
│   ├── Header.tsx           # App header with logo
│   ├── BalanceCard.tsx      # Balance display section
│   ├── PrimaryButton.tsx    # Green CTA button
│   ├── FeatureCard.tsx      # Feature card component
│   └── FeatureGrid.tsx      # 2x2 feature grid
├── constants/
│   └── colors.ts            # Design tokens
└── assets/                  # Images and icons
```

## Tech Stack

- **Expo SDK 52+** - React Native framework
- **Expo Router** - File-based navigation
- **NativeWind** - Tailwind CSS for React Native
- **TypeScript** - Type safety
- **@expo/vector-icons** - Icon library

## Features

- ✅ Home screen with balance display
- ✅ Bottom tab navigation (5 tabs)
- ✅ Responsive design with safe area handling
- ✅ Feature cards grid
- 🚧 Peajes screen (placeholder)
- 🚧 Mis Vehículos screen (placeholder)
- 🚧 Ayuda screen (placeholder)
- 🚧 Asistencia Vial screen (placeholder)

