import{r as wt,D as mt,b as a,A as Q,w as et}from"./iframe-CVkFf3Z5.js";import"./preload-helper-PPVm8Dsz.js";let W,vt=0;function rt(t){W=t}function ct(){W=null,vt=0}function xt(){return vt++}const Z=Symbol("haunted.phase"),q=Symbol("haunted.hook"),lt=Symbol("haunted.update"),dt=Symbol("haunted.commit"),x=Symbol("haunted.effects"),A=Symbol("haunted.layoutEffects"),K="haunted.context";class $t{update;host;virtual;[q];[x];[A];constructor(e,o){this.update=e,this.host=o,this[q]=new Map,this[x]=[],this[A]=[]}run(e){rt(this);let o=e();return ct(),o}_runEffects(e){let o=this[e];rt(this);for(let n of o)n.call(this);ct()}runEffects(){this._runEffects(x)}runLayoutEffects(){this._runEffects(A)}teardown(){this[q].forEach(o=>{typeof o.teardown=="function"&&o.teardown(!0)})}}const St=Promise.resolve().then.bind(Promise.resolve());function gt(){let t=[],e;function o(){e=null;let n=t;t=[];for(var s=0,i=n.length;s<i;s++)n[s]()}return function(n){t.push(n),e==null&&(e=St(o))}}const Tt=gt(),pt=gt();class kt{renderer;host;state;[Z];_updateQueued;_active;constructor(e,o){this.renderer=e,this.host=o,this.state=new $t(this.update.bind(this),o),this[Z]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(Tt(()=>{let e=this.handlePhase(lt);pt(()=>{this.handlePhase(dt,e),pt(()=>{this.handlePhase(x)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,o){switch(this[Z]=e,e){case dt:this.commit(o),this.runEffects(A);return;case lt:return this.render();case x:return this.runEffects(x)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const ot=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},_t=t=>t?.map(e=>typeof e=="string"?ot(e):e),Et=(t,...e)=>t.flatMap((o,n)=>[o,e[n]||""]).join(""),k=Et,At=(t="")=>t.replace(/-+([a-z])?/g,(e,o)=>o?o.toUpperCase():"");function Ct(t){class e extends kt{frag;renderResult;constructor(s,i,u){super(s,u||i),this.frag=i}commit(s){this.renderResult=t(s,this.frag)}}function o(n,s,i){const u=(i||s||{}).baseElement||HTMLElement,{observedAttributes:v=[],useShadowDOM:h=!0,shadowRootInit:l={},styleSheets:z}=i||s||{},r=_t(n.styleSheets||z);class f extends u{_scheduler;static get observedAttributes(){return n.observedAttributes||v||[]}constructor(){if(super(),h===!1)this._scheduler=new e(n,this);else{const c=this.attachShadow({mode:"open",...l});r&&(c.adoptedStyleSheets=r),this._scheduler=new e(n,c,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(c,m,d){if(m===d)return;let p=d===""?!0:d;Reflect.set(this,At(c),p)}}function w(g){let c=g,m=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return c},set(d){m&&c===d||(m=!0,c=d,this._scheduler&&this._scheduler.update())}})}const S=new Proxy(u.prototype,{getPrototypeOf(g){return g},set(g,c,m,d){let p;return c in g?(p=Object.getOwnPropertyDescriptor(g,c),p&&p.set?(p.set.call(d,m),!0):(Reflect.set(g,c,m,d),!0)):(typeof c=="symbol"||c[0]==="_"?p={enumerable:!0,configurable:!0,writable:!0,value:m}:p=w(m),Object.defineProperty(d,c,p),p.set&&p.set.call(d,m),!0)}});return Object.setPrototypeOf(f.prototype,S),f}return o}class _{id;state;constructor(e,o){this.id=e,this.state=o}}function Bt(t,...e){let o=xt(),n=W[q],s=n.get(o);return s||(s=new t(o,W,...e),n.set(o,s)),s.update(...e)}function E(t){return Bt.bind(null,t)}function bt(t){return E(class extends _{callback;lastValues;values;_teardown;constructor(e,o,n,s){super(e,o),t(o,this)}update(e,o){this.callback=e,this.values=o}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,o)=>this.lastValues[o]!==e)}})}function ft(t,e){t[x].push(e)}const C=bt(ft),Pt=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,Ft=E(class extends _{Context;value;_ranEffect;_unsubscribe;constructor(t,e,o){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,ft(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};Pt(this.state.host).dispatchEvent(new CustomEvent(K,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:s}=e;this.value=n?s:t.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function Ht(t){return e=>{const o={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(K,this)}disconnectedCallback(){this.removeEventListener(K,this)}handleEvent(n){const{detail:s}=n;s.Context===o&&(s.value=this.value,s.unsubscribe=this.unsubscribe.bind(this,s.callback),this.listeners.add(s.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let s of this.listeners)s(n)}get value(){return this._value}},Consumer:t(function({render:n}){const s=Ft(o);return n(s)},{useShadowDOM:!1}),defaultValue:e};return o}}const yt=E(class extends _{value;values;constructor(t,e,o,n){super(t,e),this.value=o(),this.values=n}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,o)=>this.values[o]!==e)}}),ut=(t,e)=>yt(()=>t,e);function Rt(t,e){t[A].push(e)}bt(Rt);E(class extends _{args;constructor(t,e,o){super(t,e),this.updater=this.updater.bind(this),typeof o=="function"&&(o=o()),this.makeArgs(o)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});E(class extends _{reducer;currentState;constructor(t,e,o,n,s){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(n):n}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const Ot=/([A-Z])/gu;E(class extends _{property;eventName;constructor(t,e,o,n){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=o,this.eventName=o.replace(Ot,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updateProp(n))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}});function X(t){return yt(()=>({current:t}),[])}function Lt({render:t}){const e=Ct(t),o=Ht(e);return{component:e,createContext:o}}const Mt={CHILD:2},Dt=t=>(...e)=>({_$litDirective$:t,values:e});class Nt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,n){this._$Ct=e,this._$AM=o,this._$Ci=n}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}}const B=(t,e)=>{const o=t._$AN;if(o===void 0)return!1;for(const n of o)n._$AO?.(e,!1),B(n,e);return!0},Y=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while(o?.size===0)},zt=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),Vt(e)}};function It(t){this._$AN!==void 0?(Y(this),this._$AM=t,zt(this)):this._$AM=t}function jt(t,e=!1,o=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(n))for(let i=o;i<n.length;i++)B(n[i],!1),Y(n[i]);else n!=null&&(B(n,!1),Y(n));else B(this,t)}const Vt=t=>{t.type==Mt.CHILD&&(t._$AP??=jt,t._$AQ??=It)};class Gt extends Nt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,n){super._$AT(e,o,n),zt(this),this.isConnected=e._$AU}_$AO(e,o=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),o&&(B(this,e),Y(this))}setValue(e){if(wt(this._$Ct))this._$Ct._$AI(e,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const{component:nt}=Lt({render:mt}),st=ot(k`
	/*
	 * Use border-box sizing for all elements.
	 * This is safe and doesn't conflict with child component styles.
	 */
	*,
	::before,
	::after,
	::backdrop,
	::file-selector-button {
		box-sizing: border-box;
	}

	/*
	 * Reset margins and padding on elements that typically have browser defaults.
	 * This is more targeted than using * to avoid affecting custom elements.
	 */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	figure,
	figcaption,
	fieldset,
	legend,
	form,
	hr,
	table,
	th,
	td {
		margin: 0;
		padding: 0;
	}

	/*
	 * Reset borders on elements that typically have them.
	 */
	fieldset,
	hr,
	iframe {
		border: 0 solid;
	}

	/*
	 * 1. Use a consistent sensible line-height in all browsers.
	 * 2. Prevent adjustments of font size after orientation changes in iOS.
	 * 3. Use a more readable tab size.
	 * 4. Use the configured font-family.
	 * 5. Disable tap highlights on iOS.
	 */
	:host {
		line-height: 1.5;
		-webkit-text-size-adjust: 100%;
		tab-size: 4;
		font-family: var(--cz-font-body);
		-webkit-tap-highlight-color: transparent;
	}

	/*
	 * Reset links to optimize for opt-in styling.
	 */
	a {
		color: inherit;
		text-decoration: inherit;
	}

	/*
	 * Add the correct font weight in Edge and Safari.
	 */
	b,
	strong {
		font-weight: bolder;
	}

	/*
	 * 1. Use the configured mono font-family.
	 * 2. Correct the odd em font sizing in all browsers.
	 */
	code,
	kbd,
	samp,
	pre {
		font-family: var(--cz-font-mono);
		font-size: 1em;
	}

	/*
	 * Add the correct font size in all browsers.
	 */
	small {
		font-size: 80%;
	}

	/*
	 * Prevent sub and sup from affecting line height.
	 */
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	/*
	 * 1. Make replaced elements display: block by default.
	 * 2. Add vertical-align: middle for better alignment.
	 */
	img,
	svg,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
		display: block;
		vertical-align: middle;
	}

	/*
	 * Constrain images and videos to parent width.
	 */
	img,
	video {
		max-width: 100%;
		height: auto;
	}

	/*
	 * Reset form controls:
	 * 1. Inherit font styles in all browsers.
	 * 2. Remove default margins, padding, and borders.
	 * 3. Remove border radius.
	 * 4. Remove background color.
	 */
	button,
	input,
	select,
	optgroup,
	textarea,
	::file-selector-button {
		margin: 0;
		padding: 0;
		border: 0 solid;
		font: inherit;
		font-feature-settings: inherit;
		font-variation-settings: inherit;
		letter-spacing: inherit;
		color: inherit;
		border-radius: 0;
		background-color: transparent;
	}

	/*
	 * Reset placeholder opacity in Firefox.
	 */
	::placeholder {
		opacity: 1;
		color: var(--cz-color-text-placeholder, currentcolor);
	}

	/*
	 * Prevent horizontal textarea resize.
	 */
	textarea {
		resize: vertical;
	}

	/*
	 * Remove the inner padding in Chrome and Safari on macOS.
	 */
	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	/*
	 * Correct the inability to style the border radius in iOS Safari.
	 */
	button,
	input:where([type='button'], [type='reset'], [type='submit']),
	::file-selector-button {
		appearance: button;
	}

	/*
	 * Make elements with hidden attribute stay hidden.
	 */
	[hidden]:where(:not([hidden='until-found'])) {
		display: none !important;
	}
`),Ut=k`
	position: relative;

	&::before {
		content: '';
		position: absolute;
		inset: 1px;
		border: 1px solid var(--skeumorphic-color, rgba(255, 255, 255, 0.12));
		border-radius: var(--skeumorphic-radius, calc(var(--cz-radius-md) - 1px));
		pointer-events: none;
		mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
		-webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
	}
`,qt=k`
	:host {
		display: inline-flex;
	}

	:host([full-width]) {
		display: flex;
		width: 100%;
	}

	:host([hidden]) {
		display: none;
	}

	/* ========================================
	 * SIZE VARIANTS
	 * ======================================== */

	:host([size='sm']) .button {
		height: 36px;
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3.5);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([size='sm']) ::slotted(svg) {
		width: 16px;
		height: 16px;
	}

	:host([size='lg']) .button {
		height: 44px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4.5);
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([size='xl']) .button {
		height: 48px;
		padding: calc(var(--cz-spacing) * 3) calc(var(--cz-spacing) * 5);
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		border-radius: var(--cz-radius-md);
	}

	/* ========================================
	 * BUTTON BASE STYLES (Primary - default)
	 * ======================================== */

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		cursor: pointer;
		font-family: var(--cz-font-body);
		font-weight: var(--cz-font-weight-semibold);
		text-decoration: none;
		transition:
			background-color 0.15s ease,
			box-shadow 0.15s ease;
		width: 100%;

		/* Medium (md) - default size */
		height: 40px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);

		/* Primary - default variant */
		${Ut}
		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs-skeumorphic);

		&:hover {
			background-color: var(--cz-color-bg-brand-solid-hover);
		}

		&:active {
			background-color: var(--cz-color-brand-800);
		}

		&:focus-visible {
			outline: none;
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring);
		}
	}

	/* ========================================
	 * STYLE VARIANTS
	 * ======================================== */

	:host([variant='secondary']) .button {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-secondary);

		&:hover {
			background-color: var(--cz-color-bg-primary-hover);
			color: var(--cz-color-text-secondary-hover);
		}

		&:active {
			background-color: var(--cz-color-bg-tertiary);
		}

		&:focus-visible {
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring);
		}
	}

	:host([variant='tertiary']) .button {
		background-color: transparent;
		color: var(--cz-color-text-secondary);
		box-shadow: none;

		&::before {
			display: none;
		}

		&:hover {
			background-color: var(--cz-color-bg-primary-hover);
			color: var(--cz-color-text-secondary-hover);
		}

		&:active {
			background-color: var(--cz-color-bg-secondary);
		}

		&:focus-visible {
			box-shadow: var(--cz-focus-ring);
		}
	}

	:host([variant='destructive']) .button {
		background-color: var(--cz-color-bg-error-solid);

		&:hover {
			background-color: var(--cz-color-bg-error-solid-hover);
		}

		&:active {
			background-color: var(--cz-color-error-800);
		}

		&:focus-visible {
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring-error);
		}
	}

	:host([variant='link']) .button {
		background-color: transparent;
		color: var(--cz-color-text-brand);
		box-shadow: none;
		padding: 0;
		height: auto;

		&::before {
			display: none;
		}

		&:hover {
			text-decoration: underline;
			color: var(--cz-color-text-brand-hover);
		}

		&:active {
			color: var(--cz-color-brand-800);
		}

		&:focus-visible {
			text-decoration: underline;
			box-shadow: var(--cz-focus-ring);
			border-radius: var(--cz-radius-xs);
		}
	}

	/* ========================================
	 * DISABLED STATE
	 * ======================================== */

	:host([disabled]) .button {
		cursor: not-allowed;
		pointer-events: none;

		&::before {
			display: none;
		}
	}

	:host([disabled]) .button,
	:host([disabled][variant='primary']) .button {
		background-color: var(--cz-color-bg-disabled);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='secondary']) .button {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='tertiary']) .button {
		background-color: transparent;
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='destructive']) .button {
		background-color: var(--cz-color-bg-disabled);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='link']) .button {
		background-color: transparent;
		color: var(--cz-color-text-disabled);
	}

	/* ========================================
	 * ICON SLOTS
	 * ======================================== */

	::slotted(svg) {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
	}
`,Qt=["variant","size","disabled","full-width","type"],Wt=t=>{const e=t.hasAttribute("disabled"),o=t.getAttribute("type")||"button";return a`
		<button type=${o} class="button" ?disabled=${e} part="button">
			<slot name="prefix"></slot>
			<slot></slot>
			<slot name="suffix"></slot>
		</button>
	`};customElements.define("cosmoz-button",nt(Wt,{observedAttributes:Qt,styleSheets:[st,qt],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const T=t=>t??Q;function $(t,e,o){return t?e(t):o?.(t)}const Yt=({slot:t,title:e,className:o,width:n="24",height:s="24",styles:i}={})=>a`
  <svg
    slot=${T(t)}
    class=${`edit-04-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${s}
    style=${T(i)}
  >
    ${$(e,()=>et`<title>${e}</title>`)}
    <path
      d="m21 18-1 1.094A2.71 2.71 0 0 1 18 20c-.75 0-1.47-.326-2-.906a2.716 2.716 0 0 0-2-.904c-.75 0-1.469.325-2 .904M3 20h1.675c.489 0 .733 0 .964-.055.204-.05.399-.13.578-.24.201-.123.374-.296.72-.642L19.5 6.5a2.121 2.121 0 0 0-3-3L3.937 16.063c-.346.346-.519.519-.642.72a2 2 0 0 0-.24.578c-.055.23-.055.475-.055.965V20Z"
    />
  </svg>
`,Zt=({slot:t,title:e,className:o,width:n="24",height:s="24",styles:i}={})=>a`
  <svg
    slot=${T(t)}
    class=${`filter-lines-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${s}
    style=${T(i)}
  >
    ${$(e,()=>et`<title>${e}</title>`)}
    <path d="M6 12h12M3 6h18M9 18h6" />
  </svg>
`,Jt=({slot:t,title:e,className:o,width:n="24",height:s="24",styles:i}={})=>a`
  <svg
    slot=${T(t)}
    class=${`trash-01-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${s}
    style=${T(i)}
  >
    ${$(e,()=>et`<title>${e}</title>`)}
    <path
      d="M16 6v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.48 2 13.92 2 12.8 2h-1.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C8 3.52 8 4.08 8 5.2V6m2 5.5v5m4-5v5M3 6h18m-2 0v11.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C16.72 22 15.88 22 14.2 22H9.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C5 19.72 5 18.88 5 17.2V6"
    />
  </svg>
`,J=new WeakMap,Kt=Dt(class extends Gt{render(t){return Q}update(t,[e]){const o=e!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),Q}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let o=J.get(e);o===void 0&&(o=new WeakMap,J.set(e,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?J.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Xt=k`
	:host {
		display: flex;
		flex-direction: column;
		gap: var(--cz-spacing);
		font-family: var(--cz-font-body);
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
	}

	::slotted([slot='heading']) {
		font-weight: var(--cz-font-weight-semibold);
		display: block;
	}

	::slotted([slot='description']) {
		margin: 0;
		color: var(--cz-color-gray-300);
	}
`;customElements.define("cosmoz-tooltip-content",nt(()=>a`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[st,Xt]}));const tt=ot(k`
	.cosmoz-tooltip-popover {
		position: fixed;
		inset: unset;
		pointer-events: none;
		text-align: left;
		margin: calc(var(--cz-spacing) * 2);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		/* Reset popover defaults */
		border: none;
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3);
		background: var(--cz-color-gray-900);
		color: var(--cz-color-white);
		border-radius: var(--cz-radius-sm);
		max-width: 20rem;
		box-shadow: var(--cz-shadow-lg);

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	@starting-style {
		.cosmoz-tooltip-popover:popover-open {
			opacity: 0;
			transform: translateY(4px) scale(0.96);
		}
	}

	.cosmoz-tooltip-popover:not(:popover-open) {
		opacity: 0;
		transform: translateY(4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		.cosmoz-tooltip-popover {
			transition: none;
		}
	}
`),ht=(t,e,o)=>mt(a`<cosmoz-tooltip-content>
			${$(e,()=>a`<strong slot="heading">${e}</strong>`)}
			${$(o,()=>a`<p slot="description">${o}</p>`)}
		</cosmoz-tooltip-content>`,t),te=(t,e)=>{const{for:o,heading:n,description:s,placement:i="top",delay:u=300,disabled:v=!1}=e,h=X();C(()=>{if(!o)return;const l=t.getRootNode(),z=l.adoptedStyleSheets??[];z.includes(tt)||(l.adoptedStyleSheets=[...z,tt]);const r=document.createElement("div");r.setAttribute("popover","manual"),r.setAttribute("role","tooltip"),r.classList.add("cosmoz-tooltip-popover"),t.after(r),h.current=r,ht(r,n,s);const f=`[name="${o}"]`,w=`--tooltip-anchor-${o}`;let S;const g=b=>{v||(clearTimeout(S),b.style.anchorName=w,r.style.positionAnchor=w,r.style.positionArea=i,S=window.setTimeout(()=>r.showPopover(),u))},c=()=>{clearTimeout(S),r.hidePopover()},m=b=>{const y=b.target.closest?.(f);y&&g(y)},d=b=>{const y=b.target.closest?.(f);if(!y)return;const at=b.relatedTarget;at&&y.contains(at)||c()},p=b=>{const y=b.target.closest?.(f);y&&g(y)},it=b=>{b.target.closest?.(f)&&c()};return l.addEventListener("pointerover",m),l.addEventListener("pointerout",d),l.addEventListener("focusin",p),l.addEventListener("focusout",it),()=>{clearTimeout(S),l.removeEventListener("pointerover",m),l.removeEventListener("pointerout",d),l.removeEventListener("focusin",p),l.removeEventListener("focusout",it),r.hidePopover(),r.remove(),h.current=void 0}},[o,i,u,v]),C(()=>{!o||!h.current||ht(h.current,n,s)},[n,s,o]),C(()=>{v&&h.current&&h.current.hidePopover()},[v])},ee=k`
	:host {
		display: inline-block;
		anchor-name: --tooltip-anchor;
	}

	:host([for]) {
		display: contents;
		anchor-name: unset;
	}

	.cosmoz-tooltip-popover {
		position-anchor: --tooltip-anchor;
	}
`,oe=t=>{const{heading:e,description:o,for:n,placement:s="top",delay:i=300,disabled:u=!1}=t,v=X(),h=X(),l=ut(()=>{u||(clearTimeout(h.current),h.current=window.setTimeout(()=>{v.current?.showPopover()},i))},[i,u]);C(()=>{u&&(clearTimeout(h.current),v.current?.hidePopover())},[u]);const z=ut(()=>{clearTimeout(h.current),v.current?.hidePopover()},[]);return C(()=>{if(n)return;const r=f=>{const w=f.relatedTarget;w&&t.contains(w)||z()};return t.addEventListener("pointerover",l),t.addEventListener("pointerout",r),()=>{t.removeEventListener("pointerover",l),t.removeEventListener("pointerout",r)}},[n,l,z]),te(t,{for:n,heading:e,description:o,placement:s,delay:i,disabled:u}),n?Q:a`
		<slot @focusin=${l} @focusout=${z}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${s}"
			${Kt(r=>{v.current=r})}
		>
			<cosmoz-tooltip-content>
				${$(e,()=>a`<strong slot="heading">${e}</strong>`)}
				${$(o,()=>a`<p slot="description">${o}</p>`)}
				<slot name="content"></slot>
			</cosmoz-tooltip-content>
		</div>
	`};customElements.define("cosmoz-tooltip",nt(oe,{styleSheets:[st,tt,ee],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const{expect:P,waitFor:ne}=__STORYBOOK_MODULE_TEST__,ae={title:"CosmozTooltip",component:"cosmoz-tooltip",tags:["autodocs"],argTypes:{heading:{control:"text",description:"Tooltip heading (bold text)"},description:{control:"text",description:"Tooltip description (secondary text)"},placement:{control:"select",options:["top","bottom","left","right","top center","bottom center"],description:"Position relative to trigger"},delay:{control:"number",description:"Delay before showing tooltip (ms)"}},args:{heading:"Tooltip Heading",description:"This is helpful information.",placement:"top",delay:300}},F={render:t=>a`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                heading=${t.heading}
                description=${t.description}
                placement=${t.placement}
                delay=${t.delay}
            >
                <cosmoz-button>Hover me</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `,play:async({canvas:t,step:e,userEvent:o})=>{await e("Shows tooltip on hover",async()=>{const n=t.getByShadowRole("button");await o.hover(n),await t.findByShadowText(/Tooltip Heading/u,{},{timeout:1e3})}),await e("Hides tooltip on mouse leave",async()=>{const n=t.getByShadowRole("button");await o.unhover(n),await ne(async()=>{const s=t.queryAllByShadowText(/Tooltip Heading/u);s.length>0&&P(s[0]).not.toBeVisible()},{timeout:500})})}},H={args:{heading:"Quick tip",description:""},render:t=>a`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip heading=${t.heading} placement=${t.placement}>
                <cosmoz-button>Hover for heading only</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `,play:async({canvas:t,step:e,userEvent:o})=>{await e("Shows tooltip with heading only",async()=>{const n=t.getByShadowRole("button");await o.hover(n),await t.findByShadowText(/Quick tip/u,{},{timeout:1e3})})}},R={args:{heading:"",description:"Just a simple description without a heading"},render:t=>a`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                description=${t.description}
                placement=${t.placement}
            >
                <cosmoz-button>Hover for description only</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `},O={render:t=>a`
        <div style="padding: 4rem;">
            <div
                style="display: flex; flex-direction: column; gap: 1rem; max-width: 300px;"
            >
                <div>
                    <cosmoz-tooltip
                        for="hover-target"
                        heading="Hover tooltip"
                        description="This appears when you hover the text"
                        placement=${t.placement}
                        delay=${t.delay}
                    ></cosmoz-tooltip>
                    <span
                        name="hover-target"
                        style="cursor: help; text-decoration: underline dotted;"
                    >
                        Hover over this text
                    </span>
                </div>

                <div>
                    <label>Email address</label>
                    <input
                        name="email-input"
                        type="email"
                        placeholder="you@example.com"
                    />
                    <cosmoz-tooltip
                        for="email-input"
                        heading="Email format"
                        description="Enter a valid email address like name@domain.com"
                        placement=${t.placement}
                        delay=${t.delay}
                    ></cosmoz-tooltip>
                </div>
            </div>
        </div>
    `,play:async({canvas:t,step:e,userEvent:o})=>{await e("Shows tooltip when hovering span",async()=>{const n=t.getByText("Hover over this text");await o.hover(n),await t.findByShadowText(/Hover tooltip/u,{},{timeout:1e3})}),await e("Shows tooltip when hovering input",async()=>{const n=t.getByPlaceholderText("you@example.com");await o.hover(n),await t.findByShadowText(/Email format/u,{},{timeout:1e3})})}},L={render:()=>a`
        <div
            style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4rem; padding: 6rem; place-items: center;"
        >
            <cosmoz-tooltip heading="Top placement" placement="top">
                <cosmoz-button>Top</cosmoz-button>
            </cosmoz-tooltip>
            <cosmoz-tooltip heading="Top Center" placement="top center">
                <cosmoz-button>Top Center</cosmoz-button>
            </cosmoz-tooltip>
            <div></div>

            <cosmoz-tooltip heading="Left placement" placement="left">
                <cosmoz-button>Left</cosmoz-button>
            </cosmoz-tooltip>
            <div></div>
            <cosmoz-tooltip heading="Right placement" placement="right">
                <cosmoz-button>Right</cosmoz-button>
            </cosmoz-tooltip>

            <div></div>
            <cosmoz-tooltip heading="Bottom placement" placement="bottom">
                <cosmoz-button>Bottom</cosmoz-button>
            </cosmoz-tooltip>
            <cosmoz-tooltip heading="Bottom Center" placement="bottom center">
                <cosmoz-button>Bottom Center</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `},M={args:{delay:0,heading:"Instant tooltip",description:"This appears immediately"},render:t=>a`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                heading=${t.heading}
                description=${t.description}
                delay=${t.delay}
            >
                <cosmoz-button>No delay (instant)</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `,play:async({canvas:t,step:e,userEvent:o})=>{await e("Shows tooltip immediately",async()=>{const n=t.getByShadowRole("button");await o.hover(n),await t.findByShadowText(/Instant tooltip/u,{},{timeout:200})})}},D={render:t=>a`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip placement=${t.placement} delay=${t.delay}>
                <cosmoz-button>Rich content tooltip</cosmoz-button>
                <div slot="content">
                    <strong>Custom HTML</strong>
                    <ul style="margin: 0.5rem 0 0; padding-left: 1.25rem;">
                        <li>First item</li>
                        <li>Second item</li>
                        <li>Third item</li>
                    </ul>
                </div>
            </cosmoz-tooltip>
        </div>
    `},N={render:t=>a`
        <div style="padding: 4rem;">
            <p>
                Check out our
                <cosmoz-tooltip
                    heading="External link"
                    description="Opens in a new tab"
                    placement=${t.placement}
                    delay=${t.delay}
                >
                    <a href="https://example.com" target="_blank">documentation</a>
                </cosmoz-tooltip>
                for more information.
            </p>
        </div>
    `},I={args:{delay:0,heading:"Focus test tooltip",description:"Should not appear on focus alone"},render:t=>a`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                heading=${t.heading}
                description=${t.description}
                delay=${t.delay}
            >
                <cosmoz-button>Focus me</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `,play:async({canvas:t,step:e,userEvent:o})=>{await e("Should NOT show tooltip after hover out even with focus",async()=>{const n=t.getByShadowRole("button");await o.hover(n),await o.click(n),await o.unhover(n),await new Promise(i=>setTimeout(i,200));const s=t.queryAllByShadowText(/Focus test tooltip/u);s.length>0&&P(s[0]).not.toBeVisible()})}},j={args:{delay:0,heading:"For focus test tooltip",description:"Should not appear on focus alone"},render:t=>a`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                for="focus-test-input"
                heading=${t.heading}
                description=${t.description}
                placement=${t.placement}
                delay=${t.delay}
            ></cosmoz-tooltip>
            <input name="focus-test-input" placeholder="Focus test input" />
        </div>
    `,play:async({canvas:t,step:e,userEvent:o})=>{await e("Should NOT show tooltip after hover out even with focus",async()=>{const n=t.getByPlaceholderText("Focus test input");await o.hover(n),await o.click(n),await o.unhover(n),await new Promise(i=>setTimeout(i,200));const s=t.queryAllByShadowText(/For focus test tooltip/u);s.length>0&&P(s[0]).not.toBeVisible()})}},V={render:t=>a`
        <div style="padding: 4rem; display: flex; gap: 1rem;">
            <cosmoz-tooltip
                heading="Edit"
                placement=${t.placement}
                delay=${t.delay}
            >
                <cosmoz-button variant="tertiary" aria-label="Edit">
                    ${Yt({width:"20",height:"20"})}
                </cosmoz-button>
            </cosmoz-tooltip>

            <cosmoz-tooltip
                heading="Delete"
                description="This action cannot be undone"
                placement=${t.placement}
                delay=${t.delay}
            >
                <cosmoz-button variant="tertiary" aria-label="Delete">
                    ${Jt({width:"20",height:"20"})}
                </cosmoz-button>
            </cosmoz-tooltip>

            <cosmoz-tooltip
                heading="Filter"
                placement=${t.placement}
                delay=${t.delay}
            >
                <cosmoz-button variant="tertiary" aria-label="Filter">
                    ${Zt({width:"20",height:"20"})}
                </cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `},G={args:{delay:0,heading:"Disabled tooltip",description:"This should not appear"},render:t=>a`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                heading=${t.heading}
                description=${t.description}
                delay=${t.delay}
                disabled
            >
                <cosmoz-button>Hover me (disabled tooltip)</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `,play:async({canvas:t,step:e,userEvent:o})=>{await e("Should NOT show tooltip on hover when disabled",async()=>{const n=t.getByShadowRole("button");await o.hover(n),await new Promise(i=>setTimeout(i,200));const s=t.queryAllByShadowText(/Disabled tooltip/u);s.length>0&&P(s[0]).not.toBeVisible()})}},U={args:{delay:0,heading:"Disabled for tooltip",description:"This should not appear"},render:t=>a`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                for="disabled-target"
                heading=${t.heading}
                description=${t.description}
                placement=${t.placement}
                delay=${t.delay}
                disabled
            ></cosmoz-tooltip>
            <input
                name="disabled-target"
                placeholder="Hover me (disabled for tooltip)"
            />
        </div>
    `,play:async({canvas:t,step:e,userEvent:o})=>{await e("Should NOT show tooltip on hover when disabled (for mode)",async()=>{const n=t.getByPlaceholderText("Hover me (disabled for tooltip)");await o.hover(n),await new Promise(i=>setTimeout(i,200));const s=t.queryAllByShadowText(/Disabled for tooltip/u);s.length>0&&P(s[0]).not.toBeVisible()})}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                heading=\${args.heading}
                description=\${args.description}
                placement=\${args.placement}
                delay=\${args.delay}
            >
                <cosmoz-button>Hover me</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    \`,
  play: async ({
    canvas,
    step,
    userEvent
  }) => {
    await step('Shows tooltip on hover', async () => {
      const button = canvas.getByShadowRole('button');
      await userEvent.hover(button);
      await canvas.findByShadowText(/Tooltip Heading/u, {}, {
        timeout: 1000
      });
    });
    await step('Hides tooltip on mouse leave', async () => {
      const button = canvas.getByShadowRole('button');
      await userEvent.unhover(button);
      await waitFor(async () => {
        const elements = canvas.queryAllByShadowText(/Tooltip Heading/u);
        if (elements.length > 0) {
          expect(elements[0]).not.toBeVisible();
        }
      }, {
        timeout: 500
      });
    });
  }
}`,...F.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'Quick tip',
    description: ''
  },
  render: args => html\`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip heading=\${args.heading} placement=\${args.placement}>
                <cosmoz-button>Hover for heading only</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    \`,
  play: async ({
    canvas,
    step,
    userEvent
  }) => {
    await step('Shows tooltip with heading only', async () => {
      const button = canvas.getByShadowRole('button');
      await userEvent.hover(button);
      await canvas.findByShadowText(/Quick tip/u, {}, {
        timeout: 1000
      });
    });
  }
}`,...H.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    heading: '',
    description: 'Just a simple description without a heading'
  },
  render: args => html\`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                description=\${args.description}
                placement=\${args.placement}
            >
                <cosmoz-button>Hover for description only</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    \`
}`,...R.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div style="padding: 4rem;">
            <div
                style="display: flex; flex-direction: column; gap: 1rem; max-width: 300px;"
            >
                <div>
                    <cosmoz-tooltip
                        for="hover-target"
                        heading="Hover tooltip"
                        description="This appears when you hover the text"
                        placement=\${args.placement}
                        delay=\${args.delay}
                    ></cosmoz-tooltip>
                    <span
                        name="hover-target"
                        style="cursor: help; text-decoration: underline dotted;"
                    >
                        Hover over this text
                    </span>
                </div>

                <div>
                    <label>Email address</label>
                    <input
                        name="email-input"
                        type="email"
                        placeholder="you@example.com"
                    />
                    <cosmoz-tooltip
                        for="email-input"
                        heading="Email format"
                        description="Enter a valid email address like name@domain.com"
                        placement=\${args.placement}
                        delay=\${args.delay}
                    ></cosmoz-tooltip>
                </div>
            </div>
        </div>
    \`,
  play: async ({
    canvas,
    step,
    userEvent
  }) => {
    await step('Shows tooltip when hovering span', async () => {
      const span = canvas.getByText('Hover over this text');
      await userEvent.hover(span);
      await canvas.findByShadowText(/Hover tooltip/u, {}, {
        timeout: 1000
      });
    });
    await step('Shows tooltip when hovering input', async () => {
      const input = canvas.getByPlaceholderText('you@example.com');
      await userEvent.hover(input);
      await canvas.findByShadowText(/Email format/u, {}, {
        timeout: 1000
      });
    });
  }
}`,...O.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div
            style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4rem; padding: 6rem; place-items: center;"
        >
            <cosmoz-tooltip heading="Top placement" placement="top">
                <cosmoz-button>Top</cosmoz-button>
            </cosmoz-tooltip>
            <cosmoz-tooltip heading="Top Center" placement="top center">
                <cosmoz-button>Top Center</cosmoz-button>
            </cosmoz-tooltip>
            <div></div>

            <cosmoz-tooltip heading="Left placement" placement="left">
                <cosmoz-button>Left</cosmoz-button>
            </cosmoz-tooltip>
            <div></div>
            <cosmoz-tooltip heading="Right placement" placement="right">
                <cosmoz-button>Right</cosmoz-button>
            </cosmoz-tooltip>

            <div></div>
            <cosmoz-tooltip heading="Bottom placement" placement="bottom">
                <cosmoz-button>Bottom</cosmoz-button>
            </cosmoz-tooltip>
            <cosmoz-tooltip heading="Bottom Center" placement="bottom center">
                <cosmoz-button>Bottom Center</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    \`
}`,...L.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    delay: 0,
    heading: 'Instant tooltip',
    description: 'This appears immediately'
  },
  render: args => html\`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                heading=\${args.heading}
                description=\${args.description}
                delay=\${args.delay}
            >
                <cosmoz-button>No delay (instant)</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    \`,
  play: async ({
    canvas,
    step,
    userEvent
  }) => {
    await step('Shows tooltip immediately', async () => {
      const button = canvas.getByShadowRole('button');
      await userEvent.hover(button);
      await canvas.findByShadowText(/Instant tooltip/u, {}, {
        timeout: 200
      });
    });
  }
}`,...M.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip placement=\${args.placement} delay=\${args.delay}>
                <cosmoz-button>Rich content tooltip</cosmoz-button>
                <div slot="content">
                    <strong>Custom HTML</strong>
                    <ul style="margin: 0.5rem 0 0; padding-left: 1.25rem;">
                        <li>First item</li>
                        <li>Second item</li>
                        <li>Third item</li>
                    </ul>
                </div>
            </cosmoz-tooltip>
        </div>
    \`
}`,...D.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div style="padding: 4rem;">
            <p>
                Check out our
                <cosmoz-tooltip
                    heading="External link"
                    description="Opens in a new tab"
                    placement=\${args.placement}
                    delay=\${args.delay}
                >
                    <a href="https://example.com" target="_blank">documentation</a>
                </cosmoz-tooltip>
                for more information.
            </p>
        </div>
    \`
}`,...N.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    delay: 0,
    heading: 'Focus test tooltip',
    description: 'Should not appear on focus alone'
  },
  render: args => html\`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                heading=\${args.heading}
                description=\${args.description}
                delay=\${args.delay}
            >
                <cosmoz-button>Focus me</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    \`,
  play: async ({
    canvas,
    step,
    userEvent
  }) => {
    await step('Should NOT show tooltip after hover out even with focus', async () => {
      const button = canvas.getByShadowRole('button');

      // Hover then click (focus), then move away
      await userEvent.hover(button);
      await userEvent.click(button);
      await userEvent.unhover(button);

      // Wait beyond the delay
      await new Promise(resolve => setTimeout(resolve, 200));
      const tooltipTexts = canvas.queryAllByShadowText(/Focus test tooltip/u);
      if (tooltipTexts.length > 0) {
        expect(tooltipTexts[0]).not.toBeVisible();
      }
    });
  }
}`,...I.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    delay: 0,
    heading: 'For focus test tooltip',
    description: 'Should not appear on focus alone'
  },
  render: args => html\`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                for="focus-test-input"
                heading=\${args.heading}
                description=\${args.description}
                placement=\${args.placement}
                delay=\${args.delay}
            ></cosmoz-tooltip>
            <input name="focus-test-input" placeholder="Focus test input" />
        </div>
    \`,
  play: async ({
    canvas,
    step,
    userEvent
  }) => {
    await step('Should NOT show tooltip after hover out even with focus', async () => {
      const input = canvas.getByPlaceholderText('Focus test input');

      // Hover then click (focus), then move away
      await userEvent.hover(input);
      await userEvent.click(input);
      await userEvent.unhover(input);

      // Wait beyond the delay
      await new Promise(resolve => setTimeout(resolve, 200));
      const tooltipTexts = canvas.queryAllByShadowText(/For focus test tooltip/u);
      if (tooltipTexts.length > 0) {
        expect(tooltipTexts[0]).not.toBeVisible();
      }
    });
  }
}`,...j.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div style="padding: 4rem; display: flex; gap: 1rem;">
            <cosmoz-tooltip
                heading="Edit"
                placement=\${args.placement}
                delay=\${args.delay}
            >
                <cosmoz-button variant="tertiary" aria-label="Edit">
                    \${edit04Icon({
    width: '20',
    height: '20'
  })}
                </cosmoz-button>
            </cosmoz-tooltip>

            <cosmoz-tooltip
                heading="Delete"
                description="This action cannot be undone"
                placement=\${args.placement}
                delay=\${args.delay}
            >
                <cosmoz-button variant="tertiary" aria-label="Delete">
                    \${trash01Icon({
    width: '20',
    height: '20'
  })}
                </cosmoz-button>
            </cosmoz-tooltip>

            <cosmoz-tooltip
                heading="Filter"
                placement=\${args.placement}
                delay=\${args.delay}
            >
                <cosmoz-button variant="tertiary" aria-label="Filter">
                    \${filterLinesIcon({
    width: '20',
    height: '20'
  })}
                </cosmoz-button>
            </cosmoz-tooltip>
        </div>
    \`
}`,...V.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    delay: 0,
    heading: 'Disabled tooltip',
    description: 'This should not appear'
  },
  render: args => html\`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                heading=\${args.heading}
                description=\${args.description}
                delay=\${args.delay}
                disabled
            >
                <cosmoz-button>Hover me (disabled tooltip)</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    \`,
  play: async ({
    canvas,
    step,
    userEvent
  }) => {
    await step('Should NOT show tooltip on hover when disabled', async () => {
      const button = canvas.getByShadowRole('button');
      await userEvent.hover(button);

      // Wait beyond the delay
      await new Promise(resolve => setTimeout(resolve, 200));
      const tooltipTexts = canvas.queryAllByShadowText(/Disabled tooltip/u);
      if (tooltipTexts.length > 0) {
        expect(tooltipTexts[0]).not.toBeVisible();
      }
    });
  }
}`,...G.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    delay: 0,
    heading: 'Disabled for tooltip',
    description: 'This should not appear'
  },
  render: args => html\`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                for="disabled-target"
                heading=\${args.heading}
                description=\${args.description}
                placement=\${args.placement}
                delay=\${args.delay}
                disabled
            ></cosmoz-tooltip>
            <input
                name="disabled-target"
                placeholder="Hover me (disabled for tooltip)"
            />
        </div>
    \`,
  play: async ({
    canvas,
    step,
    userEvent
  }) => {
    await step('Should NOT show tooltip on hover when disabled (for mode)', async () => {
      const input = canvas.getByPlaceholderText('Hover me (disabled for tooltip)');
      await userEvent.hover(input);

      // Wait beyond the delay
      await new Promise(resolve => setTimeout(resolve, 200));
      const tooltipTexts = canvas.queryAllByShadowText(/Disabled for tooltip/u);
      if (tooltipTexts.length > 0) {
        expect(tooltipTexts[0]).not.toBeVisible();
      }
    });
  }
}`,...U.parameters?.docs?.source}}};const re=["Basic","HeadingOnly","DescriptionOnly","ForAttribute","Placements","CustomDelay","CustomContent","OnLinks","FocusWithoutHover","ForAttributeFocusWithoutHover","OnIcons","Disabled","DisabledForAttribute"];export{F as Basic,D as CustomContent,M as CustomDelay,R as DescriptionOnly,G as Disabled,U as DisabledForAttribute,I as FocusWithoutHover,O as ForAttribute,j as ForAttributeFocusWithoutHover,H as HeadingOnly,V as OnIcons,N as OnLinks,L as Placements,re as __namedExportsOrder,ae as default};
