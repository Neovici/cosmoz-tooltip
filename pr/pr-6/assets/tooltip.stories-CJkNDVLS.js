import{r as vt,D as Y,b as a,A as k,w as J}from"./iframe-DbgPUxt9.js";import"./preload-helper-PPVm8Dsz.js";let D,ct=0;function tt(t){D=t}function et(){D=null,ct=0}function gt(){return ct++}const G=Symbol("haunted.phase"),N=Symbol("haunted.hook"),ot=Symbol("haunted.update"),nt=Symbol("haunted.commit"),f=Symbol("haunted.effects"),S=Symbol("haunted.layoutEffects"),V="haunted.context";class ft{update;host;virtual;[N];[f];[S];constructor(e,o){this.update=e,this.host=o,this[N]=new Map,this[f]=[],this[S]=[]}run(e){tt(this);let o=e();return et(),o}_runEffects(e){let o=this[e];tt(this);for(let n of o)n.call(this);et()}runEffects(){this._runEffects(f)}runLayoutEffects(){this._runEffects(S)}teardown(){this[N].forEach(o=>{typeof o.teardown=="function"&&o.teardown(!0)})}}const yt=Promise.resolve().then.bind(Promise.resolve());function lt(){let t=[],e;function o(){e=null;let n=t;t=[];for(var s=0,i=n.length;s<i;s++)n[s]()}return function(n){t.push(n),e==null&&(e=yt(o))}}const zt=lt(),st=lt();class wt{renderer;host;state;[G];_updateQueued;_active;constructor(e,o){this.renderer=e,this.host=o,this.state=new ft(this.update.bind(this),o),this[G]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(zt(()=>{let e=this.handlePhase(ot);st(()=>{this.handlePhase(nt,e),st(()=>{this.handlePhase(f)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,o){switch(this[G]=e,e){case nt:this.commit(o),this.runEffects(S);return;case ot:return this.render();case f:return this.runEffects(f)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const W=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},xt=t=>t?.map(e=>typeof e=="string"?W(e):e),$t=(t,...e)=>t.flatMap((o,n)=>[o,e[n]||""]).join(""),E=$t,St=(t="")=>t.replace(/-+([a-z])?/g,(e,o)=>o?o.toUpperCase():"");function _t(t){class e extends wt{frag;renderResult;constructor(s,i,p){super(s,p||i),this.frag=i}commit(s){this.renderResult=t(s,this.frag)}}function o(n,s,i){const p=(i||s||{}).baseElement||HTMLElement,{observedAttributes:$=[],useShadowDOM:T=!0,shadowRootInit:C={},styleSheets:c}=i||s||{},l=xt(n.styleSheets||c);class g extends p{_scheduler;static get observedAttributes(){return n.observedAttributes||$||[]}constructor(){if(super(),T===!1)this._scheduler=new e(n,this);else{const r=this.attachShadow({mode:"open",...C});l&&(r.adoptedStyleSheets=l),this._scheduler=new e(n,r,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(r,h,d){if(h===d)return;let u=d===""?!0:d;Reflect.set(this,St(r),u)}}function A(m){let r=m,h=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return r},set(d){h&&r===d||(h=!0,r=d,this._scheduler&&this._scheduler.update())}})}const y=new Proxy(p.prototype,{getPrototypeOf(m){return m},set(m,r,h,d){let u;return r in m?(u=Object.getOwnPropertyDescriptor(m,r),u&&u.set?(u.set.call(d,h),!0):(Reflect.set(m,r,h,d),!0)):(typeof r=="symbol"||r[0]==="_"?u={enumerable:!0,configurable:!0,writable:!0,value:h}:u=A(h),Object.defineProperty(d,r,u),u.set&&u.set.call(d,h),!0)}});return Object.setPrototypeOf(g.prototype,y),g}return o}class w{id;state;constructor(e,o){this.id=e,this.state=o}}function kt(t,...e){let o=gt(),n=D[N],s=n.get(o);return s||(s=new t(o,D,...e),n.set(o,s)),s.update(...e)}function x(t){return kt.bind(null,t)}function dt(t){return x(class extends w{callback;lastValues;values;_teardown;constructor(e,o,n,s){super(e,o),t(o,this)}update(e,o){this.callback=e,this.values=o}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,o)=>this.lastValues[o]!==e)}})}function ut(t,e){t[f].push(e)}const it=dt(ut),Et=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,Tt=x(class extends w{Context;value;_ranEffect;_unsubscribe;constructor(t,e,o){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,ut(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};Et(this.state.host).dispatchEvent(new CustomEvent(V,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:s}=e;this.value=n?s:t.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function Ct(t){return e=>{const o={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(V,this)}disconnectedCallback(){this.removeEventListener(V,this)}handleEvent(n){const{detail:s}=n;s.Context===o&&(s.value=this.value,s.unsubscribe=this.unsubscribe.bind(this,s.callback),this.listeners.add(s.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let s of this.listeners)s(n)}get value(){return this._value}},Consumer:t(function({render:n}){const s=Tt(o);return n(s)},{useShadowDOM:!1}),defaultValue:e};return o}}const ht=x(class extends w{value;values;constructor(t,e,o,n){super(t,e),this.value=o(),this.values=n}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,o)=>this.values[o]!==e)}}),rt=(t,e)=>ht(()=>t,e);function At(t,e){t[S].push(e)}dt(At);x(class extends w{args;constructor(t,e,o){super(t,e),this.updater=this.updater.bind(this),typeof o=="function"&&(o=o()),this.makeArgs(o)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});x(class extends w{reducer;currentState;constructor(t,e,o,n,s){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(n):n}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const Bt=/([A-Z])/gu;x(class extends w{property;eventName;constructor(t,e,o,n){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=o,this.eventName=o.replace(Bt,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updateProp(n))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}});function at(t){return ht(()=>({current:t}),[])}function Lt({render:t}){const e=_t(t),o=Ct(e);return{component:e,createContext:o}}const Mt={CHILD:2},Rt=t=>(...e)=>({_$litDirective$:t,values:e});class Pt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,n){this._$Ct=e,this._$AM=o,this._$Ci=n}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}}const _=(t,e)=>{const o=t._$AN;if(o===void 0)return!1;for(const n of o)n._$AO?.(e,!1),_(n,e);return!0},j=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while(o?.size===0)},pt=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),It(e)}};function Ht(t){this._$AN!==void 0?(j(this),this._$AM=t,pt(this)):this._$AM=t}function Ot(t,e=!1,o=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(n))for(let i=o;i<n.length;i++)_(n[i],!1),j(n[i]);else n!=null&&(_(n,!1),j(n));else _(this,t)}const It=t=>{t.type==Mt.CHILD&&(t._$AP??=Ot,t._$AQ??=Ht)};class Ft extends Pt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,n){super._$AT(e,o,n),pt(this),this.isConnected=e._$AU}_$AO(e,o=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),o&&(_(this,e),j(this))}setValue(e){if(vt(this._$Ct))this._$Ct._$AI(e,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const{component:mt}=Lt({render:Y}),bt=W(E`
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
`),Nt=E`
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
`,Dt=E`
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
		${Nt}
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
`,jt=["variant","size","disabled","full-width","type"],Gt=t=>{const e=t.hasAttribute("disabled"),o=t.getAttribute("type")||"button";return a`
		<button type=${o} class="button" ?disabled=${e} part="button">
			<slot name="prefix"></slot>
			<slot></slot>
			<slot name="suffix"></slot>
		</button>
	`};customElements.define("cosmoz-button",mt(Gt,{observedAttributes:jt,styleSheets:[bt,Dt],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const z=t=>t??k;function Z(t,e,o){return t?e(t):o?.(t)}const Ut=({slot:t,title:e,className:o,width:n="24",height:s="24",styles:i}={})=>a`
  <svg
    slot=${z(t)}
    class=${`delete-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${n}
    height=${s}
    style=${z(i)}
  >
    ${Z(e,()=>J`<title>${e}</title>`)}
    <path
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
    />
  </svg>
`,Qt=({slot:t,title:e,className:o,width:n="24",height:s="24",styles:i}={})=>a`
	<svg
		slot=${z(t)}
		class=${`edit-icon ${o??""}`}
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width=${n}
		height=${s}
		style=${z(i)}
	>
		${Z(e,()=>J`<title>${e}</title>`)}
		<path
			d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
		/>
	</svg>
`,Yt=({slot:t,title:e,className:o,width:n="24",height:s="24",styles:i}={})=>a`<svg
    slot=${z(t)}
    class=${`filter-icon ${o??""}`}
    width=${n}
    height=${s}
    viewBox="0 0 11 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${z(i)}
  >
    ${Z(e,()=>J`<title>${e}</title>`)}
    <path
      d="M9.5 10L9.5 7M9.5 7L8 7M9.5 7L11 7M5.5 4.5L5.5 10M1.5 10L1.5 6M1.5 6L3.49691e-07 6M1.5 6L3 6M5.5 -1.4345e-06L5.5 3M5.5 3L7 3M5.5 3L4 3M9.5 -2.03848e-06L9.5 5.5M1.5 -1.78419e-06L1.5 4.5"
      stroke="black"
      stroke-linejoin="round"
    />
  </svg> `,U=new WeakMap,Vt=Rt(class extends Ft{render(t){return k}update(t,[e]){const o=e!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),k}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let o=U.get(e);o===void 0&&(o=new WeakMap,U.set(e,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?U.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),q=W(E`
	.cosmoz-tooltip-popover {
		position: fixed;
		inset: unset;
		pointer-events: none;
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
		font-family: var(--cz-font-body);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
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

	.cosmoz-tooltip-popover .title {
		font-weight: var(--cz-font-weight-semibold);
		display: block;
	}

	.cosmoz-tooltip-popover .description {
		margin: 0;
		color: var(--cz-color-gray-300);
	}

	.cosmoz-tooltip-popover .title + .description {
		margin-top: var(--cz-spacing);
	}

	@media (prefers-reduced-motion: reduce) {
		.cosmoz-tooltip-popover {
			transition: none;
		}
	}
`),qt=E`
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
`,Q=(t,e)=>a`
	${t?a`<strong class="title">${t}</strong>`:k}
	${e?a`<p class="description">${e}</p>`:k}
`,Jt=t=>{const{heading:e,description:o,for:n,placement:s="top",delay:i=300}=t,p=at(),$=at(),T=rt(()=>{clearTimeout($.current),$.current=window.setTimeout(()=>{p.current?.showPopover()},i)},[i]),C=rt(()=>{clearTimeout($.current),p.current?.hidePopover()},[]);return it(()=>{if(!n)return;const c=t.getRootNode();c.adoptedStyleSheets.includes(q)||(c.adoptedStyleSheets=[...c.adoptedStyleSheets,q]);const l=document.createElement("div");l.setAttribute("popover","manual"),l.setAttribute("role","tooltip"),l.classList.add("cosmoz-tooltip-popover"),t.after(l),p.current=l,Y(Q(e,o),l);const g=`[name="${n}"]`,A=`--tooltip-anchor-${n}`;let y;const m=b=>{clearTimeout(y),b.style.anchorName=A,l.style.positionAnchor=A,l.style.positionArea=s,y=window.setTimeout(()=>l.showPopover(),i)},r=()=>{clearTimeout(y),l.hidePopover()},h=b=>{const v=b.target.closest?.(g);v&&m(v)},d=b=>{const v=b.target.closest?.(g);if(!v)return;const X=b.relatedTarget;X&&v.contains(X)||r()},u=b=>{const v=b.target.closest?.(g);v&&m(v)},K=b=>{b.target.closest?.(g)&&r()};return c.addEventListener("pointerover",h),c.addEventListener("pointerout",d),c.addEventListener("focusin",u),c.addEventListener("focusout",K),()=>{clearTimeout(y),c.removeEventListener("pointerover",h),c.removeEventListener("pointerout",d),c.removeEventListener("focusin",u),c.removeEventListener("focusout",K),l.hidePopover(),l.remove(),p.current=void 0}},[n,s,i]),it(()=>{!n||!p.current||Y(Q(e,o),p.current)},[e,o,n]),n?a``:a`
		<slot
			@pointerenter=${T}
			@pointerleave=${C}
			@focusin=${T}
			@focusout=${C}
		></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${s}"
			${Vt(c=>{p.current=c})}
		>
			${Q(e,o)}
			<slot name="content"></slot>
		</div>
	`};customElements.define("cosmoz-tooltip",mt(Jt,{styleSheets:[bt,q,qt],observedAttributes:["heading","description","for","placement","delay"]}));const{expect:Wt,waitFor:Zt}=__STORYBOOK_MODULE_TEST__,te={title:"CosmozTooltip",component:"cosmoz-tooltip",tags:["autodocs"],argTypes:{heading:{control:"text",description:"Tooltip heading (bold text)"},description:{control:"text",description:"Tooltip description (secondary text)"},placement:{control:"select",options:["top","bottom","left","right","top center","bottom center"],description:"Position relative to trigger"},delay:{control:"number",description:"Delay before showing tooltip (ms)"}},args:{heading:"Tooltip Heading",description:"This is helpful information about the element.",placement:"top",delay:300}},B={render:t=>a`
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
    `,play:async({canvas:t,step:e,userEvent:o})=>{await e("Shows tooltip on hover",async()=>{const n=t.getByShadowRole("button");await o.hover(n),await t.findByShadowText(/Tooltip Heading/u,{},{timeout:1e3})}),await e("Hides tooltip on mouse leave",async()=>{const n=t.getByShadowRole("button");await o.unhover(n),await Zt(async()=>{const s=t.queryAllByShadowText(/Tooltip Heading/u);s.length>0&&Wt(s[0]).not.toBeVisible()},{timeout:500})})}},L={args:{heading:"Quick tip",description:""},render:t=>a`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip heading=${t.heading} placement=${t.placement}>
                <cosmoz-button>Hover for heading only</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `,play:async({canvas:t,step:e,userEvent:o})=>{await e("Shows tooltip with heading only",async()=>{const n=t.getByShadowRole("button");await o.hover(n),await t.findByShadowText(/Quick tip/u,{},{timeout:1e3})})}},M={args:{heading:"",description:"Just a simple description without a heading"},render:t=>a`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                description=${t.description}
                placement=${t.placement}
            >
                <cosmoz-button>Hover for description only</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `},R={render:()=>a`
        <div style="padding: 4rem;">
            <div
                style="display: flex; flex-direction: column; gap: 1rem; max-width: 300px;"
            >
                <div>
                    <cosmoz-tooltip
                        for="hover-target"
                        heading="Hover tooltip"
                        description="This appears when you hover the text"
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
                    ></cosmoz-tooltip>
                </div>
            </div>
        </div>
    `,play:async({canvas:t,step:e,userEvent:o})=>{await e("Shows tooltip when hovering span",async()=>{const n=t.getByText("Hover over this text");await o.hover(n),await t.findByShadowText(/Hover tooltip/u,{},{timeout:1e3})}),await e("Shows tooltip when hovering input",async()=>{const n=t.getByPlaceholderText("you@example.com");await o.hover(n),await t.findByShadowText(/Email format/u,{},{timeout:1e3})})}},P={render:()=>a`
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
    `},H={args:{delay:0,heading:"Instant tooltip",description:"This appears immediately"},render:t=>a`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                heading=${t.heading}
                description=${t.description}
                delay=${t.delay}
            >
                <cosmoz-button>No delay (instant)</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `,play:async({canvas:t,step:e,userEvent:o})=>{await e("Shows tooltip immediately",async()=>{const n=t.getByShadowRole("button");await o.hover(n),await t.findByShadowText(/Instant tooltip/u,{},{timeout:200})})}},O={render:()=>a`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip>
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
    `},I={render:()=>a`
        <div style="padding: 4rem;">
            <p>
                Check out our
                <cosmoz-tooltip
                    heading="External link"
                    description="Opens in a new tab"
                    placement="top"
                >
                    <a href="https://example.com" target="_blank">documentation</a>
                </cosmoz-tooltip>
                for more information.
            </p>
        </div>
    `},F={render:()=>a`
        <div style="padding: 4rem; display: flex; gap: 1rem;">
            <cosmoz-tooltip heading="Edit" placement="bottom">
                <cosmoz-button variant="tertiary" aria-label="Edit">
                    ${Qt({width:"20",height:"20"})}
                </cosmoz-button>
            </cosmoz-tooltip>

            <cosmoz-tooltip
                heading="Delete"
                description="This action cannot be undone"
                placement="bottom"
            >
                <cosmoz-button variant="tertiary" aria-label="Delete">
                    ${Ut({width:"20",height:"20"})}
                </cosmoz-button>
            </cosmoz-tooltip>

            <cosmoz-tooltip heading="Filter" placement="bottom">
                <cosmoz-button variant="tertiary" aria-label="Filter">
                    ${Yt({width:"20",height:"20"})}
                </cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="padding: 4rem;">
            <div
                style="display: flex; flex-direction: column; gap: 1rem; max-width: 300px;"
            >
                <div>
                    <cosmoz-tooltip
                        for="hover-target"
                        heading="Hover tooltip"
                        description="This appears when you hover the text"
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
}`,...R.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip>
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
}`,...O.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="padding: 4rem;">
            <p>
                Check out our
                <cosmoz-tooltip
                    heading="External link"
                    description="Opens in a new tab"
                    placement="top"
                >
                    <a href="https://example.com" target="_blank">documentation</a>
                </cosmoz-tooltip>
                for more information.
            </p>
        </div>
    \`
}`,...I.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="padding: 4rem; display: flex; gap: 1rem;">
            <cosmoz-tooltip heading="Edit" placement="bottom">
                <cosmoz-button variant="tertiary" aria-label="Edit">
                    \${editIcon({
    width: '20',
    height: '20'
  })}
                </cosmoz-button>
            </cosmoz-tooltip>

            <cosmoz-tooltip
                heading="Delete"
                description="This action cannot be undone"
                placement="bottom"
            >
                <cosmoz-button variant="tertiary" aria-label="Delete">
                    \${deleteIcon({
    width: '20',
    height: '20'
  })}
                </cosmoz-button>
            </cosmoz-tooltip>

            <cosmoz-tooltip heading="Filter" placement="bottom">
                <cosmoz-button variant="tertiary" aria-label="Filter">
                    \${filterIcon({
    width: '20',
    height: '20'
  })}
                </cosmoz-button>
            </cosmoz-tooltip>
        </div>
    \`
}`,...F.parameters?.docs?.source}}};const ee=["Basic","HeadingOnly","DescriptionOnly","ForAttribute","Placements","CustomDelay","CustomContent","OnLinks","OnIcons"];export{B as Basic,O as CustomContent,H as CustomDelay,M as DescriptionOnly,R as ForAttribute,L as HeadingOnly,F as OnIcons,I as OnLinks,P as Placements,ee as __namedExportsOrder,te as default};
