# cosmoz-tooltip

Tooltip web component using modern CSS APIs (CSS Anchor Positioning, Popover API) built with [@pionjs/pion](https://github.com/nicolo-ribaudo/pion).

## Installation

```bash
npm install @neovici/cosmoz-tooltip
```

## Usage

### Wrapping mode

```html
<script type="module">
	import '@neovici/cosmoz-tooltip';
</script>

<cosmoz-tooltip heading="Help" description="Click to submit the form">
	<button>Submit</button>
</cosmoz-tooltip>
```

### For attribute mode

Target elements by their `name` attribute within the same document/shadow root:

```html
<input name="email" type="email" />
<cosmoz-tooltip
	for="email"
	heading="Email format"
	description="Enter a valid email like name@domain.com"
></cosmoz-tooltip>
```

### Rich content (wrapping mode only)

```html
<cosmoz-tooltip>
	<button>Info</button>
	<div slot="content">
		<strong>Custom HTML</strong>
		<ul>
			<li>First item</li>
			<li>Second item</li>
		</ul>
	</div>
</cosmoz-tooltip>
```

## API

| Attribute     | Type   | Default | Description                                                               |
| ------------- | ------ | ------- | ------------------------------------------------------------------------- |
| `heading`     | string | -       | Bold heading text                                                         |
| `description` | string | -       | Secondary description text                                                |
| `for`         | string | -       | Target element's `name` attribute                                         |
| `placement`   | string | `top`   | Position: `top`, `bottom`, `left`, `right`, `top center`, `bottom center` |
| `delay`       | number | `300`   | Delay before showing tooltip (ms)                                         |

### Slots

| Slot      | Description                                        |
| --------- | -------------------------------------------------- |
| (default) | Trigger element (wrapping mode)                    |
| `content` | Rich HTML content for tooltip (wrapping mode only) |

## Features

- **CSS Anchor Positioning** — tooltip automatically anchors to trigger element
- **Popover API** — proper layering without z-index hacks
- **Automatic flip** — repositions when constrained by viewport via `position-try-fallbacks`
- **Smooth animations** — uses `@starting-style` and `allow-discrete` transitions
- **Non-blocking** — `pointer-events: none` ensures tooltips never block interactions
- **Keyboard accessible** — shows on focus, hides on blur

## Design decisions

### No arrow/caret

CSS Anchor Positioning's `position-try-fallbacks` can flip the tooltip to the opposite side when constrained by the viewport. There is no pure CSS way to detect when a flip occurs, so an arrow's direction cannot reliably match the actual tooltip position.

### No rich content in `for=""` mode

The `for=""` mode creates the popover in the light DOM (required for CSS Anchor Positioning to work across elements). Since there's no shadow boundary, slot projection isn't available — content is limited to `heading` and `description` attributes.

## Browser support

This component uses [CSS Anchor Positioning](https://caniuse.com/css-anchor-positioning) and [Popover API](https://caniuse.com/mdn-api_htmlelement_popover), both Baseline 2026.

## Development

```bash
npm install
npm run storybook:start  # Start Storybook on port 8000
npm test                 # Run tests
npm run build            # Build for production
```

## License

Apache-2.0

---

Built with [@pionjs/pion](https://github.com/pionjs/pion)
