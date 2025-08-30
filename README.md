# React Context vs Zustand Demo

This repository demonstrates the difference between **React Context API** and **Zustand** in managing state in a React/Next.js application, focusing on **fine-grained re-renders** and performance.

---

## Repository Structure

The project is split into **two branches**:

1. **`context` branch**  
   - Uses **React Context API** to manage all state (products, cart, theme) in a single context.  
   - Components: `ProductCard`, `CartCard`, `ProductContainer`, `CartContainer`.  
   - Theme toggling is handled through the context.  

2. **`zustand` branch**  
   - Uses **Zustand** for state management with **per-slice subscriptions**.  
   - Shared components (`ProductCard`, `CartCard`) are reused.  
   - Each component subscribes only to the state slice it needs, minimizing re-renders.  
   - Theme toggle updates a separate slice.

---

## What this Demo Shows

### React Context

- **Problem:** All components consuming context **re-render on any update**, even if the change is unrelated.  
- `React.memo` **cannot prevent context-driven re-renders**.  
- Example: toggling the theme triggers **all ProductCards and CartCards** to re-render.  

### Zustand

- **Solution:** Components subscribe only to the slices they care about.  
- Combined with `React.memo`, this enables **fine-grained re-renders**:  
  - Only the product or cart item that changes will re-render.  
  - Unaffected items stay untouched, improving performance for large lists.  

---

## Visual Render Tracking

- Each `ProductCard` and `CartCard` shows a **small blue box** in the top-left corner indicating **render count/time**.  
- Interactions:  
  - **Add to Cart**  
  - **Remove from Cart**  
  - **Toggle Theme**  
- Observe how **Context** triggers full re-renders while **Zustand** only updates affected components.

---

## Key Takeaways

- **Context API** is simple but causes re-renders for all consuming components whenever any part of the context changes.  
- **Zustand** allows per-slice subscriptions, making it possible to update only the affected components.  
- `React.memo` alone cannot prevent re-renders caused by context updates.  

---

## How to Run

1. Clone the repository:

```bash
git clone <repo-url>
```

2. Switch to the branch you want to try:
```bash
git checkout context   # or
git checkout zustand
```

3. Install dependencies:
```bash
npm i
```

4. Run the app:
```bash
npm run dev
```
