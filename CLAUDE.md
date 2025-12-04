# Paso Rápido - Development Guide

## Project Overview

Paso Rápido is a React Native/Expo mobile application for toll and balance management in the Dominican Republic. The app uses RD$ (Dominican Peso) currency and Spanish language UI.

## Tech Stack

- **Expo SDK 52** with new React Native architecture enabled
- **React Native 0.76** / React 18
- **Expo Router 4** - File-based navigation with typed routes
- **NativeWind 4** + Tailwind CSS - Utility-first styling
- **TypeScript** - Strict mode enabled
- **react-native-reanimated** - Animations

## Project Structure

```
app/                    # Expo Router screens (file-based routing)
├── _layout.tsx         # Root layout with SafeAreaProvider
├── menu.tsx            # Settings modal screen
└── (tabs)/             # Tab group
    ├── _layout.tsx     # Tab navigator config (5 tabs)
    ├── index.tsx       # Home screen (Inicio)
    ├── peajes.tsx      # Tolls
    ├── vehiculos.tsx   # Vehicles
    ├── ayuda.tsx       # Help
    └── asistencia.tsx  # Roadside assistance
components/             # Reusable components with barrel export
constants/colors.ts     # Design tokens (colors, spacing, border radius)
assets/                 # Images and icons
```

## Development Commands

```bash
npm start       # Start Expo dev server
npm run ios     # Run on iOS simulator
npm run android # Run on Android emulator
npm run web     # Run in browser
```

**Note:** The dev server will be managed externally - do not start it.

## Code Conventions

### Styling
- Use NativeWind/Tailwind classes: `className="flex-1 items-center"`
- Use `Colors` from `@/constants/colors` for theme colors
- Platform-specific styles via `Platform.select()`
- Always handle safe areas with `useSafeAreaInsets()`

### Components
- Export all components from `components/index.ts`
- Use typed props interfaces
- Handle platform differences (iOS shadow vs Android elevation vs web box-shadow)

### Navigation
- Use `router.push()`, `router.back()` from `expo-router`
- Link component for declarative navigation
- Modal screens use `presentation: 'modal'` in layout

### Path Aliases
- `@/*` maps to project root (e.g., `import { Colors } from '@/constants/colors'`)

## Design Tokens

```typescript
Colors.primary.DEFAULT  // #22C55E (green)
Colors.primary.dark     // #16A34A
Colors.danger           // #EF4444 (red)
Colors.background       // #F9FAFB
Colors.card             // #FFFFFF
Colors.text.dark        // #111827
Colors.text.gray        // #6B7280
```

## Icons

Use `@expo/vector-icons`:
- `Ionicons` - General icons (home, car, notifications)
- `MaterialCommunityIcons` - Specialized icons (road-variant, car-wrench)

## Key Patterns

- Currency formatting: `RD$X,XXX.XX`
- Tab bar height: 56px + bottom safe area (70px on web)
- Button border radius: 50px (pill shape)
- Card border radius: 12px
