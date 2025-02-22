- [ ] want to read tailwind code
flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3

```
flex          → display: flex
h-[48px]      → height: 48px (custom value)
grow          → flex-grow: 1 (element will grow to fill available space)
items-center  → align-items: center (vertical alignment)
justify-center → justify-content: center (horizontal alignment)
gap-2         → gap: 0.5rem (spacing between flex items)
rounded-md    → border-radius: 0.375rem
bg-gray-50    → light gray background color
p-3          → padding: 0.75rem
text-sm      → font-size: 0.875rem
font-medium  → font-weight: 500

hover:bg-sky-100   → light blue background on hover
hover:text-blue-600 → blue text color on hover

// Medium screen (md) breakpoint styles (768px and above):
md:flex-none      → flex-grow: 0 (won't grow on larger screens)
md:justify-start  → justify-content: flex-start
md:p-2           → padding: 0.5rem
md:px-3          → padding-left & padding-right: 0.75rem
```