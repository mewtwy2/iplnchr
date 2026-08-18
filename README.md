# iPhone 17 Pro Max • iOS 26 Browser Simulator

A high-fidelity, interactive browser-based simulator of the **iPhone 17 Pro Max** running **iOS 26 Liquid Glass**.

Everything runs directly in your web browser—complete with realistic titanium hardware, physics-based gestures, live Dynamic Island activities, real webcam camera capture, persistent browser storage, and 23+ working apps.

---

## ⚡ Quick Start

### Prerequisites
- Node.js (v18 or newer recommended)
- npm, pnpm, or yarn

### Installation & Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local dev server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` (or the port shown in your terminal) in any modern browser (Chrome, Edge, Safari, Firefox).

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview the production build:**
   ```bash
   npm run preview
   ```

---

## 🎮 Controls & Keyboard Shortcuts

You can operate the phone using your mouse, trackpad, touchscreen, or directly with your keyboard:

| Key | What it does |
|---|---|
| <kbd>Space</kbd> | **Home Button**: Closes any open app, closes overlays, or unlocks the phone and jumps straight to your Home Screen. |
| <kbd>L</kbd> | **Lock / Unlock**: Quickly lock or unlock the phone. |
| <kbd>→</kbd> *(Right Arrow)* | **Control Center**: Opens and closes the Liquid Glass Control Center. |
| <kbd>←</kbd> *(Left Arrow)* | **Back / Page Left**: Goes back in apps or slides to the previous Home Screen page. |
| <kbd>↑</kbd> *(Up Arrow)* | **Swipe Up**: Unlocks the lock screen or slides to the previous page / widgets. |
| <kbd>↓</kbd> *(Down Arrow)* | **Swipe Down**: Slides to the next page or opens Spotlight Search. |
| <kbd>Esc</kbd> | **Close / Home**: Closes open apps or dismisses modals. |
| <kbd>Cmd</kbd> / <kbd>Ctrl</kbd> + <kbd>K</kbd> | **Spotlight**: Universal search across apps, contacts, messages, and notes. |
| <kbd>Cmd</kbd> / <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd> | **Developer Suite**: Opens demo triggers (incoming calls, push notifications, charging toggle, instant unlock). |
| <kbd>Cmd</kbd> / <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> | **Screenshot**: Takes a screenshot of the phone screen that you can download. |

---

## 📱 Physical Phone Buttons & Hardware

The virtual iPhone 17 Pro Max chassis has clickable physical buttons:

- **Action Button** *(Left top)*: Toggles flashlight / silent mode.
- **Volume Up & Down** *(Left middle)*: Increases or decreases system volume.
- **Side Power Button** *(Right top)*:
  - *Click*: Wakes or locks the device.
  - *Long Press (Hold)*: Opens the Power Menu with **Slide to Power Off**, **Medical ID**, and **Emergency SOS**.
- **Camera Control** *(Right bottom)*: Pressure-sensitive haptic button that instantly launches the Camera.
- **3D Device Parallax**: Moving your mouse tilts the phone in 3D space with subtle ambient lighting and glass reflections.

---

## 👆 Gestures & System Navigation

- **Unlock**: Swipe upward from the bottom bar on the Lock Screen (or press <kbd>Space</kbd> / <kbd>L</kbd>).
- **Home Gesture**: Swipe upward from the bottom Home Indicator bar.
- **Multitasking (App Switcher)**: Swipe up from the bottom and hold for half a second. Swipe up on any card to close that app.
- **Control Center**: Click the top-right corner of the status bar (or press <kbd>→</kbd>).
- **Notification Center**: Click the top-left corner of the status bar.
- **Spotlight Search**: Click the "Search" pill on the Home Screen (or press <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>+<kbd>K</kbd>).
- **Jiggle / Edit Mode**: Long-press any app icon on the Home Screen to make them jiggle, remove apps with `-`, or add widgets with `+`.
- **Dynamic Island**: Tap the Dynamic Island pill at the top of the screen to expand it or jump directly into the active app (Music, Timer, Call, etc.).

---

## 📦 What's Inside (23+ Functional Apps)

1. **Camera**: Requests browser webcam permission using `navigator.mediaDevices.getUserMedia()`, captures live high-res frames, simulates flash, zoom (0.5x, 1x, 2x, 5x), front/rear flip, and saves captured photos directly into your Photos app and browser database.
2. **Photos**: View your camera captures and sample photos, toggle favorites, swipe in full-screen view, and delete images.
3. **Messages (iMessage)**: Chat with contacts (Alex, Sarah, Mom), send messages, watch realistic simulated typing indicators, and receive auto-replies.
4. **WhatsApp**: WhatsApp interface with chat threads, status updates, voice memo waveforms, delivery checkmarks, and auto-responses.
5. **Phone**: Dialpad with real DTMF audio tones, Contacts list, Recents, and full-screen incoming/outgoing call simulation with mute, keypad, speaker, and call timer.
6. **FaceTime**: Video call simulator with live selfie camera feed.
7. **Apple Music**: Play, pause, scrub through tracks, skip songs, view animated album artwork, and see live sound wave bars in the Dynamic Island and Control Center.
8. **Safari**: Browse pre-built websites (Apple iPhone 17 launch, Wikipedia, TechCrunch, Google search).
9. **Calculator**: Fully functional iOS calculator with arithmetic, decimals, percentages, and sign changes.
10. **Clock**: World Clock across timezones, Alarms with toggles, working Stopwatch with lap recording, and a live Timer that counts down in the Dynamic Island and triggers notifications upon completion.
11. **Calendar**: Monthly calendar view, daily agenda, and interactive event creator.
12. **Notes**: Rich notes editor, searchable notes list, and interactive checklists.
13. **Weather**: Live animated forecasts for Cupertino, New York, Tokyo, and London with hourly temperatures, wind, and humidity.
14. **Maps**: Vector map canvas, destination search, route directions, and simulated turn-by-turn navigation.
15. **Settings**: Customize Dark/Light mode, adjust brightness and volume sliders, upload your own custom wallpapers, toggle 3D spatial depth effect or wallpaper blur, check battery health, and perform factory resets.
16. **App Store**: Discover featured apps and click **GET** to install new apps (like Stocks or Fitness) directly onto your Home Screen.
17. **Mail**: Email inbox with interactive mail threads.
18. **Reminders**: Tasks with completion checkboxes across Today, Scheduled, and All lists.
19. **Voice Memos**: Audio recorder with animated recording waveforms and audio playback.
20. **Files**: iCloud Drive and On My iPhone file manager.
21. **Health**: Activity rings (Move, Exercise, Stand), step counter, resting heart rate, and sleep tracker.
22. **Wallet**: Apple Card Titanium with balance, boarding passes, and transit cards.
23. **Contacts**: Address book with search and direct call/message buttons.

---

## 💾 Local Persistence

Everything you do is saved locally in your browser:
- **IndexedDB**: Captured camera photos, uploaded custom wallpapers, notes, alarms, and chat conversations.
- **LocalStorage**: System settings (Dark/Light mode, volume, brightness, battery preferences, layout).
- Use **Settings → Transfer or Reset** (or the Reset button in the top-left toolbar) to clear data and restore factory defaults at any time.

---

## 🛠️ Project Structure

```text
src/
├── apps/                # 23+ standalone simulated iOS apps
│   ├── Camera/
│   ├── Photos/
│   ├── Messages/
│   ├── WhatsApp/
│   ├── Phone/
│   ├── FaceTime/
│   ├── Safari/
│   ├── Music/
│   ├── Calculator/
│   ├── Clock/
│   ├── Calendar/
│   ├── Notes/
│   ├── Weather/
│   ├── Maps/
│   ├── Settings/
│   ├── AppStore/
│   ├── Mail/
│   ├── Reminders/
│   ├── VoiceMemos/
│   ├── Files/
│   ├── Health/
│   ├── Wallet/
│   └── Contacts/
├── components/
│   ├── shell/           # Phone frame, 3D tilt, AOD, Boot screen, Desktop controls
│   └── system/          # Dynamic Island, Status Bar, Lock Screen, Home Screen,
│                        # Control Center, Notification Center, Spotlight, Siri,
│                        # App Switcher, Share Sheet, Keyboard
├── context/
│   └── SimulatorContext.tsx # Central simulator state provider
├── data/
│   └── defaultData.ts   # Wallpapers, sample contacts, chats, songs, events
├── services/
│   ├── audioService.ts  # Web Audio API synthesizer for shutter, dial tones, lock sounds
│   ├── cameraService.ts # getUserMedia webcam video streaming & frame capture
│   └── storageService.ts# IndexedDB + localStorage persistence layer
├── types/
│   └── simulator.ts     # TypeScript interfaces for all system state
├── App.tsx              # Main entry point and keyboard shortcuts listener
├── index.css            # iOS 26 Liquid Glass styling tokens & tailwind
└── main.tsx
```

---

Enjoy testing and playing with the iPhone 17 Pro Max / iOS 26 Simulator!
