import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{a as t,c as n,i as r,l as i,n as a,r as o,s}from"./iframe-e1ZXTkFT.js";function c(e){d=e}function l(){d=null,f=0}function u(){return f++}var d,f;function p(){return(p=e((()=>{f=0})))()}var m,h,g,ee,_,v,te;function y(){return(y=e((()=>{m=Symbol(`haunted.phase`),h=Symbol(`haunted.hook`),g=Symbol(`haunted.update`),ee=Symbol(`haunted.commit`),_=Symbol(`haunted.effects`),v=Symbol(`haunted.layoutEffects`),te=`haunted.context`})))()}var ne;function re(){return(re=e((()=>{p(),y(),ne=class{update;host;virtual;[h];[_];[v];constructor(e,t){this.update=e,this.host=t,this[h]=new Map,this[_]=[],this[v]=[]}run(e){c(this);let t=e();return l(),t}_runEffects(e){let t=this[e];c(this);for(let e of t)e.call(this);l()}runEffects(){this._runEffects(_)}runLayoutEffects(){this._runEffects(v)}teardown(){this[h].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})))()}var ie;function ae(){return(ae=e((()=>{ie=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}})))()}function oe(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=ce(n)}}var se,ce,le,ue,de;function fe(){return(fe=e((()=>{re(),y(),ae(),se=100,ce=Promise.resolve().then.bind(Promise.resolve()),le=oe(),ue=oe(),de=class e{renderer;host;state;[m];_updateQueued;_active;_updateCount;_processing;static maxUpdates=se;constructor(e,t){this.renderer=e,this.host=t,this.state=new ne(this.update.bind(this),t),this[m]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new ie(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,le(()=>{let e=this.handlePhase(g);ue(()=>{this.handlePhase(ee,e),ue(()=>{this.handlePhase(_),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[m]=e,e){case ee:this.commit(t),this.runEffects(v);return;case g:return this.render();case _:return this.runEffects(_)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})))()}var b,pe,me,x;function he(){return(he=e((()=>{b=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},pe=e=>e?.map(e=>typeof e==`string`?b(e):e),me=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),x=me})))()}function ge(e){class t extends de{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=pe(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``||n;Reflect.set(this,_e(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var _e;function ve(){return(ve=e((()=>{fe(),he(),_e=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)})))()}function ye(e,...t){let n=u(),r=d[h],i=r.get(n);return i||(i=new e(n,d,...t),r.set(n,i)),i.update(...t)}function S(e){return ye.bind(null,e)}var C;function w(){return(w=e((()=>{p(),y(),C=class{id;state;constructor(e,t){this.id=e,this.state=t}}})))()}function be(e){return S(class extends C{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}function xe(){return(xe=e((()=>{w()})))()}function Se(e,t){e[_].push(t)}var T;function Ce(){return(Ce=e((()=>{y(),xe(),T=be(Se)})))()}var we,Te;function Ee(){return(Ee=e((()=>{w(),y(),Ce(),we=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,Te=S(class extends C{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Se(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};we(this.state.host).dispatchEvent(new CustomEvent(te,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})})))()}function De(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(te,this)}disconnectedCallback(){this.removeEventListener(te,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(Te(n))},{useShadowDOM:!1}),defaultValue:t};return n}}function Oe(){return(Oe=e((()=>{y(),Ee()})))()}var ke;function Ae(){return(Ae=e((()=>{w(),ke=S(class extends C{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})))()}function je(){return(je=e((()=>{Ae()})))()}function Me(e,t){e[v].push(t)}function Ne(){return(Ne=e((()=>{y(),xe(),be(Me)})))()}var Pe;function Fe(){return(Fe=e((()=>{w(),Pe=S(class extends C{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})))()}function Ie(){return(Ie=e((()=>{w(),S(class extends C{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})))()}var Le;function Re(){return(Re=e((()=>{w(),Le=/([A-Z])/gu,S(class extends C{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Le,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);(t||!a.defaultPrevented)&&(Object.is(n,r)||(this.state.host[this.property]=r))}})})))()}function ze(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function Be(e){return ke(()=>ze(e),[])}function Ve(){return(Ve=e((()=>{Ae()})))()}function He(){return(He=e((()=>{w(),S(class extends C{update(){return this.state.host}})})))()}function Ue({render:e}){let t=ge(e);return{component:t,createContext:De(t)}}function We(){return(We=e((()=>{ve(),Oe(),je(),Ce(),Ne(),Fe(),Ie(),Ae(),Ee(),Re(),Ve(),He(),fe()})))()}var Ge,Ke,qe;function Je(){return(Je=e((()=>{Ge={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ke=e=>(...t)=>({_$litDirective$:e,values:t}),qe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}})))()}function Ye(e){this._$AN===void 0?this._$AM=e:(D(this),this._$AM=e,Ze(this))}function Xe(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)E(r[e],!1),D(r[e]);else r!=null&&(E(r,!1),D(r))}else E(this,e)}}var E,D,Ze,Qe,$e;function et(){return(et=e((()=>{a(),Je(),E=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),E(e,t);return!0},D=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Ze=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Qe(t)}},Qe=e=>{e.type==Ge.CHILD&&(e._$AP??=Xe,e._$AQ??=Ye)},$e=class extends qe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Ze(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(E(this,e),D(this))}setValue(e){if(o(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}})))()}function tt(){return(tt=e((()=>{Je(),n(),et(),fe(),Array.prototype.includes})))()}var nt,rt;function it(){return(it=e((()=>{n(),We(),tt(),{component:nt,createContext:rt}=Ue({render:t})})))()}function O(){return(O=e((()=>{it(),We(),he()})))()}var at;function ot(){return(ot=e((()=>{O(),at=b(x`
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
`)})))()}var k;function A(){return(A=e((()=>{n(),k=e=>e??r})))()}var st;function ct(){return(ct=e((()=>{O(),st=x`
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
`})))()}var lt;function ut(){return(ut=e((()=>{ct(),O(),lt=x`
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
		white-space: nowrap;
		border: none;
		background: none;
		text-align: center;

		/* Medium (md) - default size */
		height: 40px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);

		/* Primary - default variant */
		${st}
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
`})))()}var dt,ft;function pt(){return(pt=e((()=>{ot(),O(),n(),A(),ut(),dt=[`variant`,`size`,`disabled`,`full-width`,`type`,`value`,`href`,`target`,`rel`,`download`],ft=e=>{let t=e.hasAttribute(`disabled`),n=e.getAttribute(`type`)||`button`,i=e.getAttribute(`href`);T(()=>{let t=t=>{e.hasAttribute(`disabled`)&&t.stopImmediatePropagation()};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[]);let a=s`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`;if(i!=null){let n=e.getAttribute(`target`),o=e.getAttribute(`rel`),c=e.getAttribute(`download`);return s`
			<a
				href=${i}
				class="button"
				part="button"
				aria-disabled=${t?`true`:r}
				target=${k(n)}
				rel=${k(o)}
				download=${k(c)}
				>${a}</a
			>
		`}return s`
		<button type=${n} class="button" ?disabled=${t} part="button">
			${a}
		</button>
	`},customElements.define(`cosmoz-button`,nt(ft,{observedAttributes:dt,styleSheets:[at,lt],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}function mt(){return(mt=e((()=>{pt()})))()}function j(e,t,n){return e?t(e):n?.(e)}function ht(){return(ht=e((()=>{n(),A()})))()}function gt(){return(gt=e((()=>{n(),A()})))()}function _t(){return(_t=e((()=>{n(),A()})))()}function vt(){return(vt=e((()=>{n(),A()})))()}function yt(){return(yt=e((()=>{n(),A()})))()}function bt(){return(bt=e((()=>{n(),A()})))()}function xt(){return(xt=e((()=>{n(),A()})))()}function St(){return(St=e((()=>{n(),A()})))()}function Ct(){return(Ct=e((()=>{n(),A()})))()}function wt(){return(wt=e((()=>{n(),A()})))()}function Tt(){return(Tt=e((()=>{n(),A()})))()}function Et(){return(Et=e((()=>{n(),A()})))()}function Dt(){return(Dt=e((()=>{n(),A()})))()}function Ot(){return(Ot=e((()=>{n(),A()})))()}function kt(){return(kt=e((()=>{n(),A()})))()}function At(){return(At=e((()=>{n(),A()})))()}function jt(){return(jt=e((()=>{n(),A()})))()}function Mt(){return(Mt=e((()=>{n(),A()})))()}function Nt(){return(Nt=e((()=>{n(),A()})))()}function Pt(){return(Pt=e((()=>{n(),A()})))()}function Ft(){return(Ft=e((()=>{n(),A()})))()}function It(){return(It=e((()=>{n(),A()})))()}function Lt(){return(Lt=e((()=>{n(),A()})))()}function Rt(){return(Rt=e((()=>{n(),A()})))()}function zt(){return(zt=e((()=>{n(),A()})))()}function Bt(){return(Bt=e((()=>{n(),A()})))()}function Vt(){return(Vt=e((()=>{n(),A()})))()}function Ht(){return(Ht=e((()=>{n(),A()})))()}function Ut(){return(Ut=e((()=>{n(),A()})))()}function Wt(){return(Wt=e((()=>{n(),A()})))()}function Gt(){return(Gt=e((()=>{n(),A()})))()}function Kt(){return(Kt=e((()=>{n(),A()})))()}function qt(){return(qt=e((()=>{n(),A()})))()}function Jt(){return(Jt=e((()=>{n(),A()})))()}function Yt(){return(Yt=e((()=>{n(),A()})))()}function Xt(){return(Xt=e((()=>{n(),A()})))()}function Zt(){return(Zt=e((()=>{n(),A()})))()}function Qt(){return(Qt=e((()=>{n(),A()})))()}function $t(){return($t=e((()=>{n(),A()})))()}function en(){return(en=e((()=>{n(),A()})))()}function tn(){return(tn=e((()=>{n(),A()})))()}function nn(){return(nn=e((()=>{n(),A()})))()}function rn(){return(rn=e((()=>{n(),A()})))()}function an(){return(an=e((()=>{n(),A()})))()}function on(){return(on=e((()=>{n(),A()})))()}function sn(){return(sn=e((()=>{n(),A()})))()}function cn(){return(cn=e((()=>{n(),A()})))()}function ln(){return(ln=e((()=>{n(),A()})))()}function un(){return(un=e((()=>{n(),A()})))()}function dn(){return(dn=e((()=>{n(),A()})))()}function fn(){return(fn=e((()=>{n(),A()})))()}function pn(){return(pn=e((()=>{n(),A()})))()}function mn(){return(mn=e((()=>{n(),A()})))()}function hn(){return(hn=e((()=>{n(),A()})))()}function gn(){return(gn=e((()=>{n(),A()})))()}function _n(){return(_n=e((()=>{n(),A()})))()}function vn(){return(vn=e((()=>{n(),A()})))()}function yn(){return(yn=e((()=>{n(),A()})))()}function bn(){return(bn=e((()=>{n(),A()})))()}function xn(){return(xn=e((()=>{n(),A()})))()}function Sn(){return(Sn=e((()=>{n(),A()})))()}function Cn(){return(Cn=e((()=>{n(),A()})))()}function wn(){return(wn=e((()=>{n(),A()})))()}function Tn(){return(Tn=e((()=>{n(),A()})))()}function En(){return(En=e((()=>{n(),A()})))()}function Dn(){return(Dn=e((()=>{n(),A()})))()}function On(){return(On=e((()=>{n(),A()})))()}function kn(){return(kn=e((()=>{n(),A()})))()}function An(){return(An=e((()=>{n(),A()})))()}function jn(){return(jn=e((()=>{n(),A()})))()}function Mn(){return(Mn=e((()=>{n(),A()})))()}function Nn(){return(Nn=e((()=>{n(),A()})))()}function Pn(){return(Pn=e((()=>{n(),A()})))()}function Fn(){return(Fn=e((()=>{n(),A()})))()}function In(){return(In=e((()=>{n(),A()})))()}function Ln(){return(Ln=e((()=>{n(),A()})))()}function Rn(){return(Rn=e((()=>{n(),A()})))()}function zn(){return(zn=e((()=>{n(),A()})))()}function Bn(){return(Bn=e((()=>{n(),A()})))()}function Vn(){return(Vn=e((()=>{n(),A()})))()}function Hn(){return(Hn=e((()=>{n(),A()})))()}function Un(){return(Un=e((()=>{n(),A()})))()}function Wn(){return(Wn=e((()=>{n(),A()})))()}function Gn(){return(Gn=e((()=>{n(),A()})))()}function Kn(){return(Kn=e((()=>{n(),A()})))()}function qn(){return(qn=e((()=>{n(),A()})))()}function Jn(){return(Jn=e((()=>{n(),A()})))()}function Yn(){return(Yn=e((()=>{n(),A()})))()}function Xn(){return(Xn=e((()=>{n(),A()})))()}function Zn(){return(Zn=e((()=>{n(),A()})))()}function Qn(){return(Qn=e((()=>{n(),A()})))()}function $n(){return($n=e((()=>{n(),A()})))()}function er(){return(er=e((()=>{n(),A()})))()}function tr(){return(tr=e((()=>{n(),A()})))()}function nr(){return(nr=e((()=>{n(),A()})))()}function rr(){return(rr=e((()=>{n(),A()})))()}function ir(){return(ir=e((()=>{n(),A()})))()}function ar(){return(ar=e((()=>{n(),A()})))()}function or(){return(or=e((()=>{n(),A()})))()}function sr(){return(sr=e((()=>{n(),A()})))()}function cr(){return(cr=e((()=>{n(),A()})))()}function lr(){return(lr=e((()=>{n(),A()})))()}function ur(){return(ur=e((()=>{n(),A()})))()}function dr(){return(dr=e((()=>{n(),A()})))()}function fr(){return(fr=e((()=>{n(),A()})))()}function pr(){return(pr=e((()=>{n(),A()})))()}function mr(){return(mr=e((()=>{n(),A()})))()}function hr(){return(hr=e((()=>{n(),A()})))()}function gr(){return(gr=e((()=>{n(),A()})))()}function _r(){return(_r=e((()=>{n(),A()})))()}function vr(){return(vr=e((()=>{n(),A()})))()}function yr(){return(yr=e((()=>{n(),A()})))()}function br(){return(br=e((()=>{n(),A()})))()}function xr(){return(xr=e((()=>{n(),A()})))()}function Sr(){return(Sr=e((()=>{n(),A()})))()}function Cr(){return(Cr=e((()=>{n(),A()})))()}function wr(){return(wr=e((()=>{n(),A()})))()}function Tr(){return(Tr=e((()=>{n(),A()})))()}function Er(){return(Er=e((()=>{n(),A()})))()}function Dr(){return(Dr=e((()=>{n(),A()})))()}function Or(){return(Or=e((()=>{n(),A()})))()}function kr(){return(kr=e((()=>{n(),A()})))()}function Ar(){return(Ar=e((()=>{n(),A()})))()}function jr(){return(jr=e((()=>{n(),A()})))()}function Mr(){return(Mr=e((()=>{n(),A()})))()}function Nr(){return(Nr=e((()=>{n(),A()})))()}function Pr(){return(Pr=e((()=>{n(),A()})))()}function Fr(){return(Fr=e((()=>{n(),A()})))()}function Ir(){return(Ir=e((()=>{n(),A()})))()}function Lr(){return(Lr=e((()=>{n(),A()})))()}function Rr(){return(Rr=e((()=>{n(),A()})))()}function zr(){return(zr=e((()=>{n(),A()})))()}function Br(){return(Br=e((()=>{n(),A()})))()}function Vr(){return(Vr=e((()=>{n(),A()})))()}function Hr(){return(Hr=e((()=>{n(),A()})))()}function Ur(){return(Ur=e((()=>{n(),A()})))()}function Wr(){return(Wr=e((()=>{n(),A()})))()}function Gr(){return(Gr=e((()=>{n(),A()})))()}function Kr(){return(Kr=e((()=>{n(),A()})))()}function qr(){return(qr=e((()=>{n(),A()})))()}function Jr(){return(Jr=e((()=>{n(),A()})))()}function Yr(){return(Yr=e((()=>{n(),A()})))()}function Xr(){return(Xr=e((()=>{n(),A()})))()}function Zr(){return(Zr=e((()=>{n(),A()})))()}function Qr(){return(Qr=e((()=>{n(),A()})))()}function $r(){return($r=e((()=>{n(),A()})))()}function ei(){return(ei=e((()=>{n(),A()})))()}function ti(){return(ti=e((()=>{n(),A()})))()}function ni(){return(ni=e((()=>{n(),A()})))()}function ri(){return(ri=e((()=>{n(),A()})))()}function ii(){return(ii=e((()=>{n(),A()})))()}function ai(){return(ai=e((()=>{n(),A()})))()}function oi(){return(oi=e((()=>{n(),A()})))()}function si(){return(si=e((()=>{n(),A()})))()}function ci(){return(ci=e((()=>{n(),A()})))()}function li(){return(li=e((()=>{n(),A()})))()}function ui(){return(ui=e((()=>{n(),A()})))()}function di(){return(di=e((()=>{n(),A()})))()}function fi(){return(fi=e((()=>{n(),A()})))()}function pi(){return(pi=e((()=>{n(),A()})))()}function mi(){return(mi=e((()=>{n(),A()})))()}function hi(){return(hi=e((()=>{n(),A()})))()}function gi(){return(gi=e((()=>{n(),A()})))()}function _i(){return(_i=e((()=>{n(),A()})))()}function vi(){return(vi=e((()=>{n(),A()})))()}function yi(){return(yi=e((()=>{n(),A()})))()}function bi(){return(bi=e((()=>{n(),A()})))()}function xi(){return(xi=e((()=>{n(),A()})))()}function Si(){return(Si=e((()=>{n(),A()})))()}function Ci(){return(Ci=e((()=>{n(),A()})))()}function wi(){return(wi=e((()=>{n(),A()})))()}function Ti(){return(Ti=e((()=>{n(),A()})))()}function Ei(){return(Ei=e((()=>{n(),A()})))()}function Di(){return(Di=e((()=>{n(),A()})))()}function Oi(){return(Oi=e((()=>{n(),A()})))()}function ki(){return(ki=e((()=>{n(),A()})))()}function Ai(){return(Ai=e((()=>{n(),A()})))()}function ji(){return(ji=e((()=>{n(),A()})))()}function Mi(){return(Mi=e((()=>{n(),A()})))()}function Ni(){return(Ni=e((()=>{n(),A()})))()}function Pi(){return(Pi=e((()=>{n(),A()})))()}function Fi(){return(Fi=e((()=>{n(),A()})))()}function Ii(){return(Ii=e((()=>{n(),A()})))()}function Li(){return(Li=e((()=>{n(),A()})))()}function Ri(){return(Ri=e((()=>{n(),A()})))()}function zi(){return(zi=e((()=>{n(),A()})))()}function Bi(){return(Bi=e((()=>{n(),A()})))()}function Vi(){return(Vi=e((()=>{n(),A()})))()}function Hi(){return(Hi=e((()=>{n(),A()})))()}function Ui(){return(Ui=e((()=>{n(),A()})))()}function Wi(){return(Wi=e((()=>{n(),A()})))()}function Gi(){return(Gi=e((()=>{n(),A()})))()}function Ki(){return(Ki=e((()=>{n(),A()})))()}function qi(){return(qi=e((()=>{n(),A()})))()}function Ji(){return(Ji=e((()=>{n(),A()})))()}function Yi(){return(Yi=e((()=>{n(),A()})))()}function Xi(){return(Xi=e((()=>{n(),A()})))()}function Zi(){return(Zi=e((()=>{n(),A()})))()}function Qi(){return(Qi=e((()=>{n(),A()})))()}function $i(){return($i=e((()=>{n(),A()})))()}function ea(){return(ea=e((()=>{n(),A()})))()}function ta(){return(ta=e((()=>{n(),A()})))()}function na(){return(na=e((()=>{n(),A()})))()}function ra(){return(ra=e((()=>{n(),A()})))()}function ia(){return(ia=e((()=>{n(),A()})))()}function aa(){return(aa=e((()=>{n(),A()})))()}function oa(){return(oa=e((()=>{n(),A()})))()}function sa(){return(sa=e((()=>{n(),A()})))()}function ca(){return(ca=e((()=>{n(),A()})))()}function la(){return(la=e((()=>{n(),A()})))()}function ua(){return(ua=e((()=>{n(),A()})))()}function da(){return(da=e((()=>{n(),A()})))()}function fa(){return(fa=e((()=>{n(),A()})))()}function pa(){return(pa=e((()=>{n(),A()})))()}function ma(){return(ma=e((()=>{n(),A()})))()}function ha(){return(ha=e((()=>{n(),A()})))()}function ga(){return(ga=e((()=>{n(),A()})))()}function _a(){return(_a=e((()=>{n(),A()})))()}function va(){return(va=e((()=>{n(),A()})))()}function ya(){return(ya=e((()=>{n(),A()})))()}function ba(){return(ba=e((()=>{n(),A()})))()}function xa(){return(xa=e((()=>{n(),A()})))()}function Sa(){return(Sa=e((()=>{n(),A()})))()}function Ca(){return(Ca=e((()=>{n(),A()})))()}function wa(){return(wa=e((()=>{n(),A()})))()}function Ta(){return(Ta=e((()=>{n(),A()})))()}function Ea(){return(Ea=e((()=>{n(),A()})))()}function Da(){return(Da=e((()=>{n(),A()})))()}function Oa(){return(Oa=e((()=>{n(),A()})))()}function ka(){return(ka=e((()=>{n(),A()})))()}function Aa(){return(Aa=e((()=>{n(),A()})))()}function ja(){return(ja=e((()=>{n(),A()})))()}function Ma(){return(Ma=e((()=>{n(),A()})))()}function Na(){return(Na=e((()=>{n(),A()})))()}function Pa(){return(Pa=e((()=>{n(),A()})))()}function Fa(){return(Fa=e((()=>{n(),A()})))()}function Ia(){return(Ia=e((()=>{n(),A()})))()}function La(){return(La=e((()=>{n(),A()})))()}function Ra(){return(Ra=e((()=>{n(),A()})))()}function za(){return(za=e((()=>{n(),A()})))()}function Ba(){return(Ba=e((()=>{n(),A()})))()}function Va(){return(Va=e((()=>{n(),A()})))()}function Ha(){return(Ha=e((()=>{n(),A()})))()}function Ua(){return(Ua=e((()=>{n(),A()})))()}function Wa(){return(Wa=e((()=>{n(),A()})))()}function Ga(){return(Ga=e((()=>{n(),A()})))()}function Ka(){return(Ka=e((()=>{n(),A()})))()}function qa(){return(qa=e((()=>{n(),A()})))()}function Ja(){return(Ja=e((()=>{n(),A()})))()}function Ya(){return(Ya=e((()=>{n(),A()})))()}function Xa(){return(Xa=e((()=>{n(),A()})))()}function Za(){return(Za=e((()=>{n(),A()})))()}function Qa(){return(Qa=e((()=>{n(),A()})))()}function $a(){return($a=e((()=>{n(),A()})))()}function eo(){return(eo=e((()=>{n(),A()})))()}function to(){return(to=e((()=>{n(),A()})))()}function no(){return(no=e((()=>{n(),A()})))()}function ro(){return(ro=e((()=>{n(),A()})))()}function io(){return(io=e((()=>{n(),A()})))()}function ao(){return(ao=e((()=>{n(),A()})))()}function oo(){return(oo=e((()=>{n(),A()})))()}function so(){return(so=e((()=>{n(),A()})))()}function co(){return(co=e((()=>{n(),A()})))()}function lo(){return(lo=e((()=>{n(),A()})))()}function uo(){return(uo=e((()=>{n(),A()})))()}function fo(){return(fo=e((()=>{n(),A()})))()}function po(){return(po=e((()=>{n(),A()})))()}function mo(){return(mo=e((()=>{n(),A()})))()}function ho(){return(ho=e((()=>{n(),A()})))()}function go(){return(go=e((()=>{n(),A()})))()}function _o(){return(_o=e((()=>{n(),A()})))()}function vo(){return(vo=e((()=>{n(),A()})))()}function yo(){return(yo=e((()=>{n(),A()})))()}function bo(){return(bo=e((()=>{n(),A()})))()}function xo(){return(xo=e((()=>{n(),A()})))()}function So(){return(So=e((()=>{n(),A()})))()}function Co(){return(Co=e((()=>{n(),A()})))()}function wo(){return(wo=e((()=>{n(),A()})))()}function To(){return(To=e((()=>{n(),A()})))()}function Eo(){return(Eo=e((()=>{n(),A()})))()}function Do(){return(Do=e((()=>{n(),A()})))()}function Oo(){return(Oo=e((()=>{n(),A()})))()}function ko(){return(ko=e((()=>{n(),A()})))()}function Ao(){return(Ao=e((()=>{n(),A()})))()}function jo(){return(jo=e((()=>{n(),A()})))()}function Mo(){return(Mo=e((()=>{n(),A()})))()}function No(){return(No=e((()=>{n(),A()})))()}function Po(){return(Po=e((()=>{n(),A()})))()}function Fo(){return(Fo=e((()=>{n(),A()})))()}function Io(){return(Io=e((()=>{n(),A()})))()}function Lo(){return(Lo=e((()=>{n(),A()})))()}function Ro(){return(Ro=e((()=>{n(),A()})))()}function zo(){return(zo=e((()=>{n(),A()})))()}function Bo(){return(Bo=e((()=>{n(),A()})))()}function Vo(){return(Vo=e((()=>{n(),A()})))()}function Ho(){return(Ho=e((()=>{n(),A()})))()}function Uo(){return(Uo=e((()=>{n(),A()})))()}function Wo(){return(Wo=e((()=>{n(),A()})))()}function Go(){return(Go=e((()=>{n(),A()})))()}function Ko(){return(Ko=e((()=>{n(),A()})))()}function qo(){return(qo=e((()=>{n(),A()})))()}function Jo(){return(Jo=e((()=>{n(),A()})))()}function Yo(){return(Yo=e((()=>{n(),A()})))()}function Xo(){return(Xo=e((()=>{n(),A()})))()}function Zo(){return(Zo=e((()=>{n(),A()})))()}function Qo(){return(Qo=e((()=>{n(),A()})))()}function $o(){return($o=e((()=>{n(),A()})))()}function es(){return(es=e((()=>{n(),A()})))()}function ts(){return(ts=e((()=>{n(),A()})))()}function ns(){return(ns=e((()=>{n(),A()})))()}function rs(){return(rs=e((()=>{n(),A()})))()}function is(){return(is=e((()=>{n(),A()})))()}function as(){return(as=e((()=>{n(),A()})))()}function os(){return(os=e((()=>{n(),A()})))()}function ss(){return(ss=e((()=>{n(),A()})))()}function cs(){return(cs=e((()=>{n(),A()})))()}function ls(){return(ls=e((()=>{n(),A()})))()}function us(){return(us=e((()=>{n(),A()})))()}function ds(){return(ds=e((()=>{n(),A()})))()}function fs(){return(fs=e((()=>{n(),A()})))()}function ps(){return(ps=e((()=>{n(),A()})))()}function ms(){return(ms=e((()=>{n(),A()})))()}function hs(){return(hs=e((()=>{n(),A()})))()}function gs(){return(gs=e((()=>{n(),A()})))()}function _s(){return(_s=e((()=>{n(),A()})))()}function vs(){return(vs=e((()=>{n(),A()})))()}function ys(){return(ys=e((()=>{n(),A()})))()}function bs(){return(bs=e((()=>{n(),A()})))()}function xs(){return(xs=e((()=>{n(),A()})))()}function Ss(){return(Ss=e((()=>{n(),A()})))()}function Cs(){return(Cs=e((()=>{n(),A()})))()}function ws(){return(ws=e((()=>{n(),A()})))()}function Ts(){return(Ts=e((()=>{n(),A()})))()}function Es(){return(Es=e((()=>{n(),A()})))()}function Ds(){return(Ds=e((()=>{n(),A()})))()}function Os(){return(Os=e((()=>{n(),A()})))()}function ks(){return(ks=e((()=>{n(),A()})))()}function As(){return(As=e((()=>{n(),A()})))()}function js(){return(js=e((()=>{n(),A()})))()}function Ms(){return(Ms=e((()=>{n(),A()})))()}function Ns(){return(Ns=e((()=>{n(),A()})))()}function Ps(){return(Ps=e((()=>{n(),A()})))()}function Fs(){return(Fs=e((()=>{n(),A()})))()}function Is(){return(Is=e((()=>{n(),A()})))()}function Ls(){return(Ls=e((()=>{n(),A()})))()}function Rs(){return(Rs=e((()=>{n(),A()})))()}function zs(){return(zs=e((()=>{n(),A()})))()}function Bs(){return(Bs=e((()=>{n(),A()})))()}function Vs(){return(Vs=e((()=>{n(),A()})))()}function Hs(){return(Hs=e((()=>{n(),A()})))()}function Us(){return(Us=e((()=>{n(),A()})))()}function Ws(){return(Ws=e((()=>{n(),A()})))()}function Gs(){return(Gs=e((()=>{n(),A()})))()}function Ks(){return(Ks=e((()=>{n(),A()})))()}function qs(){return(qs=e((()=>{n(),A()})))()}function Js(){return(Js=e((()=>{n(),A()})))()}function Ys(){return(Ys=e((()=>{n(),A()})))()}function Xs(){return(Xs=e((()=>{n(),A()})))()}function Zs(){return(Zs=e((()=>{n(),A()})))()}function Qs(){return(Qs=e((()=>{n(),A()})))()}function $s(){return($s=e((()=>{n(),A()})))()}function ec(){return(ec=e((()=>{n(),A()})))()}function tc(){return(tc=e((()=>{n(),A()})))()}function nc(){return(nc=e((()=>{n(),A()})))()}function rc(){return(rc=e((()=>{n(),A()})))()}function ic(){return(ic=e((()=>{n(),A()})))()}function ac(){return(ac=e((()=>{n(),A()})))()}function oc(){return(oc=e((()=>{n(),A()})))()}function sc(){return(sc=e((()=>{n(),A()})))()}function cc(){return(cc=e((()=>{n(),A()})))()}function lc(){return(lc=e((()=>{n(),A()})))()}function uc(){return(uc=e((()=>{n(),A()})))()}function dc(){return(dc=e((()=>{n(),A()})))()}function fc(){return(fc=e((()=>{n(),A()})))()}function pc(){return(pc=e((()=>{n(),A()})))()}function mc(){return(mc=e((()=>{n(),A()})))()}function hc(){return(hc=e((()=>{n(),A()})))()}function gc(){return(gc=e((()=>{n(),A()})))()}function _c(){return(_c=e((()=>{n(),A()})))()}function vc(){return(vc=e((()=>{n(),A()})))()}function yc(){return(yc=e((()=>{n(),A()})))()}function bc(){return(bc=e((()=>{n(),A()})))()}function xc(){return(xc=e((()=>{n(),A()})))()}function Sc(){return(Sc=e((()=>{n(),A()})))()}function Cc(){return(Cc=e((()=>{n(),A()})))()}function wc(){return(wc=e((()=>{n(),A()})))()}function Tc(){return(Tc=e((()=>{n(),A()})))()}function Ec(){return(Ec=e((()=>{n(),A()})))()}function Dc(){return(Dc=e((()=>{n(),A()})))()}function Oc(){return(Oc=e((()=>{n(),A()})))()}function kc(){return(kc=e((()=>{n(),A()})))()}function Ac(){return(Ac=e((()=>{n(),A()})))()}function jc(){return(jc=e((()=>{n(),A()})))()}function Mc(){return(Mc=e((()=>{n(),A()})))()}function Nc(){return(Nc=e((()=>{n(),A()})))()}function Pc(){return(Pc=e((()=>{n(),A()})))()}function Fc(){return(Fc=e((()=>{n(),A()})))()}function Ic(){return(Ic=e((()=>{n(),A()})))()}function Lc(){return(Lc=e((()=>{n(),A()})))()}function Rc(){return(Rc=e((()=>{n(),A()})))()}function zc(){return(zc=e((()=>{n(),A()})))()}function Bc(){return(Bc=e((()=>{n(),A()})))()}function Vc(){return(Vc=e((()=>{n(),A()})))()}function Hc(){return(Hc=e((()=>{n(),A()})))()}function Uc(){return(Uc=e((()=>{n(),A()})))()}function Wc(){return(Wc=e((()=>{n(),A()})))()}function Gc(){return(Gc=e((()=>{n(),A()})))()}function Kc(){return(Kc=e((()=>{n(),A()})))()}function qc(){return(qc=e((()=>{n(),A()})))()}function Jc(){return(Jc=e((()=>{n(),A()})))()}function Yc(){return(Yc=e((()=>{n(),A()})))()}function Xc(){return(Xc=e((()=>{n(),A()})))()}function Zc(){return(Zc=e((()=>{n(),A()})))()}function Qc(){return(Qc=e((()=>{n(),A()})))()}function $c(){return($c=e((()=>{n(),A()})))()}function el(){return(el=e((()=>{n(),A()})))()}function tl(){return(tl=e((()=>{n(),A()})))()}function nl(){return(nl=e((()=>{n(),A()})))()}function rl(){return(rl=e((()=>{n(),A()})))()}function il(){return(il=e((()=>{n(),A()})))()}function al(){return(al=e((()=>{n(),A()})))()}function ol(){return(ol=e((()=>{n(),A()})))()}function sl(){return(sl=e((()=>{n(),A()})))()}var cl;function ll(){return(ll=e((()=>{n(),A(),cl=({slot:e,title:t,className:n,width:r=`24`,height:a=`24`,styles:o}={})=>s`
  <svg
    slot=${k(e)}
    class=${`edit-04-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${a}
    style=${k(o)}
  >
    ${j(t,()=>i`<title>${t}</title>`)}
    <path
      d="m21 18-1 1.094A2.71 2.71 0 0 1 18 20c-.75 0-1.47-.326-2-.906a2.716 2.716 0 0 0-2-.904c-.75 0-1.469.325-2 .904M3 20h1.675c.489 0 .733 0 .964-.055.204-.05.399-.13.578-.24.201-.123.374-.296.72-.642L19.5 6.5a2.121 2.121 0 0 0-3-3L3.937 16.063c-.346.346-.519.519-.642.72a2 2 0 0 0-.24.578c-.055.23-.055.475-.055.965V20Z"
    />
  </svg>
`})))()}function ul(){return(ul=e((()=>{n(),A()})))()}function dl(){return(dl=e((()=>{n(),A()})))()}function fl(){return(fl=e((()=>{n(),A()})))()}function pl(){return(pl=e((()=>{n(),A()})))()}function ml(){return(ml=e((()=>{n(),A()})))()}function hl(){return(hl=e((()=>{n(),A()})))()}function gl(){return(gl=e((()=>{n(),A()})))()}function _l(){return(_l=e((()=>{n(),A()})))()}function vl(){return(vl=e((()=>{n(),A()})))()}function yl(){return(yl=e((()=>{n(),A()})))()}function bl(){return(bl=e((()=>{n(),A()})))()}function xl(){return(xl=e((()=>{n(),A()})))()}function Sl(){return(Sl=e((()=>{n(),A()})))()}function Cl(){return(Cl=e((()=>{n(),A()})))()}function wl(){return(wl=e((()=>{n(),A()})))()}function Tl(){return(Tl=e((()=>{n(),A()})))()}function El(){return(El=e((()=>{n(),A()})))()}function Dl(){return(Dl=e((()=>{n(),A()})))()}function Ol(){return(Ol=e((()=>{n(),A()})))()}function kl(){return(kl=e((()=>{n(),A()})))()}function Al(){return(Al=e((()=>{n(),A()})))()}function jl(){return(jl=e((()=>{n(),A()})))()}function Ml(){return(Ml=e((()=>{n(),A()})))()}function Nl(){return(Nl=e((()=>{n(),A()})))()}function Pl(){return(Pl=e((()=>{n(),A()})))()}function Fl(){return(Fl=e((()=>{n(),A()})))()}function Il(){return(Il=e((()=>{n(),A()})))()}function Ll(){return(Ll=e((()=>{n(),A()})))()}function Rl(){return(Rl=e((()=>{n(),A()})))()}function zl(){return(zl=e((()=>{n(),A()})))()}function Bl(){return(Bl=e((()=>{n(),A()})))()}function Vl(){return(Vl=e((()=>{n(),A()})))()}function Hl(){return(Hl=e((()=>{n(),A()})))()}function Ul(){return(Ul=e((()=>{n(),A()})))()}function Wl(){return(Wl=e((()=>{n(),A()})))()}function Gl(){return(Gl=e((()=>{n(),A()})))()}function Kl(){return(Kl=e((()=>{n(),A()})))()}function ql(){return(ql=e((()=>{n(),A()})))()}function Jl(){return(Jl=e((()=>{n(),A()})))()}function Yl(){return(Yl=e((()=>{n(),A()})))()}function Xl(){return(Xl=e((()=>{n(),A()})))()}function Zl(){return(Zl=e((()=>{n(),A()})))()}function Ql(){return(Ql=e((()=>{n(),A()})))()}function $l(){return($l=e((()=>{n(),A()})))()}function eu(){return(eu=e((()=>{n(),A()})))()}function tu(){return(tu=e((()=>{n(),A()})))()}function nu(){return(nu=e((()=>{n(),A()})))()}function ru(){return(ru=e((()=>{n(),A()})))()}function iu(){return(iu=e((()=>{n(),A()})))()}function au(){return(au=e((()=>{n(),A()})))()}function ou(){return(ou=e((()=>{n(),A()})))()}function su(){return(su=e((()=>{n(),A()})))()}function cu(){return(cu=e((()=>{n(),A()})))()}function lu(){return(lu=e((()=>{n(),A()})))()}function uu(){return(uu=e((()=>{n(),A()})))()}function du(){return(du=e((()=>{n(),A()})))()}function fu(){return(fu=e((()=>{n(),A()})))()}function pu(){return(pu=e((()=>{n(),A()})))()}function mu(){return(mu=e((()=>{n(),A()})))()}function hu(){return(hu=e((()=>{n(),A()})))()}function gu(){return(gu=e((()=>{n(),A()})))()}function _u(){return(_u=e((()=>{n(),A()})))()}function vu(){return(vu=e((()=>{n(),A()})))()}function yu(){return(yu=e((()=>{n(),A()})))()}function bu(){return(bu=e((()=>{n(),A()})))()}function xu(){return(xu=e((()=>{n(),A()})))()}function Su(){return(Su=e((()=>{n(),A()})))()}function Cu(){return(Cu=e((()=>{n(),A()})))()}function wu(){return(wu=e((()=>{n(),A()})))()}function Tu(){return(Tu=e((()=>{n(),A()})))()}function Eu(){return(Eu=e((()=>{n(),A()})))()}function Du(){return(Du=e((()=>{n(),A()})))()}function Ou(){return(Ou=e((()=>{n(),A()})))()}function ku(){return(ku=e((()=>{n(),A()})))()}var Au;function ju(){return(ju=e((()=>{n(),A(),Au=({slot:e,title:t,className:n,width:r=`24`,height:a=`24`,styles:o}={})=>s`
  <svg
    slot=${k(e)}
    class=${`filter-lines-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${a}
    style=${k(o)}
  >
    ${j(t,()=>i`<title>${t}</title>`)}
    <path d="M6 12h12M3 6h18M9 18h6" />
  </svg>
`})))()}function Mu(){return(Mu=e((()=>{n(),A()})))()}function Nu(){return(Nu=e((()=>{n(),A()})))()}function Pu(){return(Pu=e((()=>{n(),A()})))()}function Fu(){return(Fu=e((()=>{n(),A()})))()}function Iu(){return(Iu=e((()=>{n(),A()})))()}function Lu(){return(Lu=e((()=>{n(),A()})))()}function Ru(){return(Ru=e((()=>{n(),A()})))()}function zu(){return(zu=e((()=>{n(),A()})))()}function Bu(){return(Bu=e((()=>{n(),A()})))()}function Vu(){return(Vu=e((()=>{n(),A()})))()}function Hu(){return(Hu=e((()=>{n(),A()})))()}function Uu(){return(Uu=e((()=>{n(),A()})))()}function Wu(){return(Wu=e((()=>{n(),A()})))()}function Gu(){return(Gu=e((()=>{n(),A()})))()}function Ku(){return(Ku=e((()=>{n(),A()})))()}function qu(){return(qu=e((()=>{n(),A()})))()}function Ju(){return(Ju=e((()=>{n(),A()})))()}function Yu(){return(Yu=e((()=>{n(),A()})))()}function Xu(){return(Xu=e((()=>{n(),A()})))()}function Zu(){return(Zu=e((()=>{n(),A()})))()}function Qu(){return(Qu=e((()=>{n(),A()})))()}function $u(){return($u=e((()=>{n(),A()})))()}function ed(){return(ed=e((()=>{n(),A()})))()}function td(){return(td=e((()=>{n(),A()})))()}function nd(){return(nd=e((()=>{n(),A()})))()}function rd(){return(rd=e((()=>{n(),A()})))()}function id(){return(id=e((()=>{n(),A()})))()}function ad(){return(ad=e((()=>{n(),A()})))()}function od(){return(od=e((()=>{n(),A()})))()}function sd(){return(sd=e((()=>{n(),A()})))()}function cd(){return(cd=e((()=>{n(),A()})))()}function ld(){return(ld=e((()=>{n(),A()})))()}function ud(){return(ud=e((()=>{n(),A()})))()}function dd(){return(dd=e((()=>{n(),A()})))()}function fd(){return(fd=e((()=>{n(),A()})))()}function pd(){return(pd=e((()=>{n(),A()})))()}function md(){return(md=e((()=>{n(),A()})))()}function hd(){return(hd=e((()=>{n(),A()})))()}function gd(){return(gd=e((()=>{n(),A()})))()}function _d(){return(_d=e((()=>{n(),A()})))()}function vd(){return(vd=e((()=>{n(),A()})))()}function yd(){return(yd=e((()=>{n(),A()})))()}function bd(){return(bd=e((()=>{n(),A()})))()}function xd(){return(xd=e((()=>{n(),A()})))()}function Sd(){return(Sd=e((()=>{n(),A()})))()}function Cd(){return(Cd=e((()=>{n(),A()})))()}function wd(){return(wd=e((()=>{n(),A()})))()}function Td(){return(Td=e((()=>{n(),A()})))()}function Ed(){return(Ed=e((()=>{n(),A()})))()}function Dd(){return(Dd=e((()=>{n(),A()})))()}function Od(){return(Od=e((()=>{n(),A()})))()}function kd(){return(kd=e((()=>{n(),A()})))()}function Ad(){return(Ad=e((()=>{n(),A()})))()}function jd(){return(jd=e((()=>{n(),A()})))()}function Md(){return(Md=e((()=>{n(),A()})))()}function Nd(){return(Nd=e((()=>{n(),A()})))()}function Pd(){return(Pd=e((()=>{n(),A()})))()}function Fd(){return(Fd=e((()=>{n(),A()})))()}function Id(){return(Id=e((()=>{n(),A()})))()}function Ld(){return(Ld=e((()=>{n(),A()})))()}function Rd(){return(Rd=e((()=>{n(),A()})))()}function zd(){return(zd=e((()=>{n(),A()})))()}function Bd(){return(Bd=e((()=>{n(),A()})))()}function Vd(){return(Vd=e((()=>{n(),A()})))()}function Hd(){return(Hd=e((()=>{n(),A()})))()}function Ud(){return(Ud=e((()=>{n(),A()})))()}function Wd(){return(Wd=e((()=>{n(),A()})))()}function Gd(){return(Gd=e((()=>{n(),A()})))()}function Kd(){return(Kd=e((()=>{n(),A()})))()}function qd(){return(qd=e((()=>{n(),A()})))()}function Jd(){return(Jd=e((()=>{n(),A()})))()}function Yd(){return(Yd=e((()=>{n(),A()})))()}function Xd(){return(Xd=e((()=>{n(),A()})))()}function Zd(){return(Zd=e((()=>{n(),A()})))()}function Qd(){return(Qd=e((()=>{n(),A()})))()}function $d(){return($d=e((()=>{n(),A()})))()}function ef(){return(ef=e((()=>{n(),A()})))()}function tf(){return(tf=e((()=>{n(),A()})))()}function nf(){return(nf=e((()=>{n(),A()})))()}function rf(){return(rf=e((()=>{n(),A()})))()}function af(){return(af=e((()=>{n(),A()})))()}function of(){return(of=e((()=>{n(),A()})))()}function sf(){return(sf=e((()=>{n(),A()})))()}function cf(){return(cf=e((()=>{n(),A()})))()}function lf(){return(lf=e((()=>{n(),A()})))()}function uf(){return(uf=e((()=>{n(),A()})))()}function df(){return(df=e((()=>{n(),A()})))()}function ff(){return(ff=e((()=>{n(),A()})))()}function pf(){return(pf=e((()=>{n(),A()})))()}function mf(){return(mf=e((()=>{n(),A()})))()}function hf(){return(hf=e((()=>{n(),A()})))()}function gf(){return(gf=e((()=>{n(),A()})))()}function _f(){return(_f=e((()=>{n(),A()})))()}function vf(){return(vf=e((()=>{n(),A()})))()}function yf(){return(yf=e((()=>{n(),A()})))()}function bf(){return(bf=e((()=>{n(),A()})))()}function xf(){return(xf=e((()=>{n(),A()})))()}function Sf(){return(Sf=e((()=>{n(),A()})))()}function Cf(){return(Cf=e((()=>{n(),A()})))()}function wf(){return(wf=e((()=>{n(),A()})))()}function Tf(){return(Tf=e((()=>{n(),A()})))()}function Ef(){return(Ef=e((()=>{n(),A()})))()}function Df(){return(Df=e((()=>{n(),A()})))()}function Of(){return(Of=e((()=>{n(),A()})))()}function kf(){return(kf=e((()=>{n(),A()})))()}function Af(){return(Af=e((()=>{n(),A()})))()}function jf(){return(jf=e((()=>{n(),A()})))()}function Mf(){return(Mf=e((()=>{n(),A()})))()}function Nf(){return(Nf=e((()=>{n(),A()})))()}function Pf(){return(Pf=e((()=>{n(),A()})))()}function Ff(){return(Ff=e((()=>{n(),A()})))()}function If(){return(If=e((()=>{n(),A()})))()}function Lf(){return(Lf=e((()=>{n(),A()})))()}function Rf(){return(Rf=e((()=>{n(),A()})))()}function zf(){return(zf=e((()=>{n(),A()})))()}function Bf(){return(Bf=e((()=>{n(),A()})))()}function Vf(){return(Vf=e((()=>{n(),A()})))()}function Hf(){return(Hf=e((()=>{n(),A()})))()}function Uf(){return(Uf=e((()=>{n(),A()})))()}function Wf(){return(Wf=e((()=>{n(),A()})))()}function Gf(){return(Gf=e((()=>{n(),A()})))()}function Kf(){return(Kf=e((()=>{n(),A()})))()}function qf(){return(qf=e((()=>{n(),A()})))()}function Jf(){return(Jf=e((()=>{n(),A()})))()}function Yf(){return(Yf=e((()=>{n(),A()})))()}function Xf(){return(Xf=e((()=>{n(),A()})))()}function Zf(){return(Zf=e((()=>{n(),A()})))()}function Qf(){return(Qf=e((()=>{n(),A()})))()}function $f(){return($f=e((()=>{n(),A()})))()}function ep(){return(ep=e((()=>{n(),A()})))()}function tp(){return(tp=e((()=>{n(),A()})))()}function np(){return(np=e((()=>{n(),A()})))()}function rp(){return(rp=e((()=>{n(),A()})))()}function ip(){return(ip=e((()=>{n(),A()})))()}function ap(){return(ap=e((()=>{n(),A()})))()}function op(){return(op=e((()=>{n(),A()})))()}function sp(){return(sp=e((()=>{n(),A()})))()}function cp(){return(cp=e((()=>{n(),A()})))()}function lp(){return(lp=e((()=>{n(),A()})))()}function up(){return(up=e((()=>{n(),A()})))()}function dp(){return(dp=e((()=>{n(),A()})))()}function fp(){return(fp=e((()=>{n(),A()})))()}function pp(){return(pp=e((()=>{n(),A()})))()}function mp(){return(mp=e((()=>{n(),A()})))()}function hp(){return(hp=e((()=>{n(),A()})))()}function gp(){return(gp=e((()=>{n(),A()})))()}function _p(){return(_p=e((()=>{n(),A()})))()}function vp(){return(vp=e((()=>{n(),A()})))()}function yp(){return(yp=e((()=>{n(),A()})))()}function bp(){return(bp=e((()=>{n(),A()})))()}function xp(){return(xp=e((()=>{n(),A()})))()}function Sp(){return(Sp=e((()=>{n(),A()})))()}function Cp(){return(Cp=e((()=>{n(),A()})))()}function wp(){return(wp=e((()=>{n(),A()})))()}function Tp(){return(Tp=e((()=>{n(),A()})))()}function Ep(){return(Ep=e((()=>{n(),A()})))()}function Dp(){return(Dp=e((()=>{n(),A()})))()}function Op(){return(Op=e((()=>{n(),A()})))()}function kp(){return(kp=e((()=>{n(),A()})))()}function Ap(){return(Ap=e((()=>{n(),A()})))()}function jp(){return(jp=e((()=>{n(),A()})))()}function Mp(){return(Mp=e((()=>{n(),A()})))()}function Np(){return(Np=e((()=>{n(),A()})))()}function Pp(){return(Pp=e((()=>{n(),A()})))()}function Fp(){return(Fp=e((()=>{n(),A()})))()}function Ip(){return(Ip=e((()=>{n(),A()})))()}function Lp(){return(Lp=e((()=>{n(),A()})))()}function Rp(){return(Rp=e((()=>{n(),A()})))()}function zp(){return(zp=e((()=>{n(),A()})))()}function Bp(){return(Bp=e((()=>{n(),A()})))()}function Vp(){return(Vp=e((()=>{n(),A()})))()}function Hp(){return(Hp=e((()=>{n(),A()})))()}function Up(){return(Up=e((()=>{n(),A()})))()}function Wp(){return(Wp=e((()=>{n(),A()})))()}function Gp(){return(Gp=e((()=>{n(),A()})))()}function Kp(){return(Kp=e((()=>{n(),A()})))()}function qp(){return(qp=e((()=>{n(),A()})))()}function Jp(){return(Jp=e((()=>{n(),A()})))()}function Yp(){return(Yp=e((()=>{n(),A()})))()}function Xp(){return(Xp=e((()=>{n(),A()})))()}function Zp(){return(Zp=e((()=>{n(),A()})))()}function Qp(){return(Qp=e((()=>{n(),A()})))()}function $p(){return($p=e((()=>{n(),A()})))()}function em(){return(em=e((()=>{n(),A()})))()}function tm(){return(tm=e((()=>{n(),A()})))()}function nm(){return(nm=e((()=>{n(),A()})))()}function rm(){return(rm=e((()=>{n(),A()})))()}function im(){return(im=e((()=>{n(),A()})))()}function am(){return(am=e((()=>{n(),A()})))()}function om(){return(om=e((()=>{n(),A()})))()}function sm(){return(sm=e((()=>{n(),A()})))()}function cm(){return(cm=e((()=>{n(),A()})))()}function lm(){return(lm=e((()=>{n(),A()})))()}function um(){return(um=e((()=>{n(),A()})))()}function dm(){return(dm=e((()=>{n(),A()})))()}function fm(){return(fm=e((()=>{n(),A()})))()}function pm(){return(pm=e((()=>{n(),A()})))()}function mm(){return(mm=e((()=>{n(),A()})))()}function hm(){return(hm=e((()=>{n(),A()})))()}function gm(){return(gm=e((()=>{n(),A()})))()}function _m(){return(_m=e((()=>{n(),A()})))()}function vm(){return(vm=e((()=>{n(),A()})))()}function ym(){return(ym=e((()=>{n(),A()})))()}function bm(){return(bm=e((()=>{n(),A()})))()}function xm(){return(xm=e((()=>{n(),A()})))()}function Sm(){return(Sm=e((()=>{n(),A()})))()}function Cm(){return(Cm=e((()=>{n(),A()})))()}function wm(){return(wm=e((()=>{n(),A()})))()}function Tm(){return(Tm=e((()=>{n(),A()})))()}function Em(){return(Em=e((()=>{n(),A()})))()}function Dm(){return(Dm=e((()=>{n(),A()})))()}function Om(){return(Om=e((()=>{n(),A()})))()}function km(){return(km=e((()=>{n(),A()})))()}function Am(){return(Am=e((()=>{n(),A()})))()}function jm(){return(jm=e((()=>{n(),A()})))()}function Mm(){return(Mm=e((()=>{n(),A()})))()}function Nm(){return(Nm=e((()=>{n(),A()})))()}function Pm(){return(Pm=e((()=>{n(),A()})))()}function Fm(){return(Fm=e((()=>{n(),A()})))()}function Im(){return(Im=e((()=>{n(),A()})))()}function Lm(){return(Lm=e((()=>{n(),A()})))()}function Rm(){return(Rm=e((()=>{n(),A()})))()}function zm(){return(zm=e((()=>{n(),A()})))()}function Bm(){return(Bm=e((()=>{n(),A()})))()}function Vm(){return(Vm=e((()=>{n(),A()})))()}function Hm(){return(Hm=e((()=>{n(),A()})))()}function Um(){return(Um=e((()=>{n(),A()})))()}function Wm(){return(Wm=e((()=>{n(),A()})))()}function Gm(){return(Gm=e((()=>{n(),A()})))()}function Km(){return(Km=e((()=>{n(),A()})))()}function qm(){return(qm=e((()=>{n(),A()})))()}function Jm(){return(Jm=e((()=>{n(),A()})))()}function Ym(){return(Ym=e((()=>{n(),A()})))()}function Xm(){return(Xm=e((()=>{n(),A()})))()}function Zm(){return(Zm=e((()=>{n(),A()})))()}function Qm(){return(Qm=e((()=>{n(),A()})))()}function $m(){return($m=e((()=>{n(),A()})))()}function eh(){return(eh=e((()=>{n(),A()})))()}function th(){return(th=e((()=>{n(),A()})))()}function nh(){return(nh=e((()=>{n(),A()})))()}function rh(){return(rh=e((()=>{n(),A()})))()}function ih(){return(ih=e((()=>{n(),A()})))()}function ah(){return(ah=e((()=>{n(),A()})))()}function oh(){return(oh=e((()=>{n(),A()})))()}function sh(){return(sh=e((()=>{n(),A()})))()}function ch(){return(ch=e((()=>{n(),A()})))()}function lh(){return(lh=e((()=>{n(),A()})))()}function uh(){return(uh=e((()=>{n(),A()})))()}function dh(){return(dh=e((()=>{n(),A()})))()}function fh(){return(fh=e((()=>{n(),A()})))()}function ph(){return(ph=e((()=>{n(),A()})))()}function mh(){return(mh=e((()=>{n(),A()})))()}function hh(){return(hh=e((()=>{n(),A()})))()}function gh(){return(gh=e((()=>{n(),A()})))()}function _h(){return(_h=e((()=>{n(),A()})))()}function vh(){return(vh=e((()=>{n(),A()})))()}function yh(){return(yh=e((()=>{n(),A()})))()}function bh(){return(bh=e((()=>{n(),A()})))()}function xh(){return(xh=e((()=>{n(),A()})))()}function Sh(){return(Sh=e((()=>{n(),A()})))()}function Ch(){return(Ch=e((()=>{n(),A()})))()}function wh(){return(wh=e((()=>{n(),A()})))()}function Th(){return(Th=e((()=>{n(),A()})))()}function Eh(){return(Eh=e((()=>{n(),A()})))()}function Dh(){return(Dh=e((()=>{n(),A()})))()}function Oh(){return(Oh=e((()=>{n(),A()})))()}function kh(){return(kh=e((()=>{n(),A()})))()}function Ah(){return(Ah=e((()=>{n(),A()})))()}function jh(){return(jh=e((()=>{n(),A()})))()}function Mh(){return(Mh=e((()=>{n(),A()})))()}function Nh(){return(Nh=e((()=>{n(),A()})))()}function Ph(){return(Ph=e((()=>{n(),A()})))()}function Fh(){return(Fh=e((()=>{n(),A()})))()}function Ih(){return(Ih=e((()=>{n(),A()})))()}function Lh(){return(Lh=e((()=>{n(),A()})))()}function Rh(){return(Rh=e((()=>{n(),A()})))()}function zh(){return(zh=e((()=>{n(),A()})))()}function Bh(){return(Bh=e((()=>{n(),A()})))()}function Vh(){return(Vh=e((()=>{n(),A()})))()}function Hh(){return(Hh=e((()=>{n(),A()})))()}function Uh(){return(Uh=e((()=>{n(),A()})))()}function Wh(){return(Wh=e((()=>{n(),A()})))()}function Gh(){return(Gh=e((()=>{n(),A()})))()}function Kh(){return(Kh=e((()=>{n(),A()})))()}function qh(){return(qh=e((()=>{n(),A()})))()}function Jh(){return(Jh=e((()=>{n(),A()})))()}function Yh(){return(Yh=e((()=>{n(),A()})))()}function Xh(){return(Xh=e((()=>{n(),A()})))()}function Zh(){return(Zh=e((()=>{n(),A()})))()}function Qh(){return(Qh=e((()=>{n(),A()})))()}function $h(){return($h=e((()=>{n(),A()})))()}function eg(){return(eg=e((()=>{n(),A()})))()}function tg(){return(tg=e((()=>{n(),A()})))()}function ng(){return(ng=e((()=>{n(),A()})))()}function rg(){return(rg=e((()=>{n(),A()})))()}function ig(){return(ig=e((()=>{n(),A()})))()}function ag(){return(ag=e((()=>{n(),A()})))()}function og(){return(og=e((()=>{n(),A()})))()}function sg(){return(sg=e((()=>{n(),A()})))()}function cg(){return(cg=e((()=>{n(),A()})))()}function lg(){return(lg=e((()=>{n(),A()})))()}function ug(){return(ug=e((()=>{n(),A()})))()}function dg(){return(dg=e((()=>{n(),A()})))()}function fg(){return(fg=e((()=>{n(),A()})))()}function pg(){return(pg=e((()=>{n(),A()})))()}function mg(){return(mg=e((()=>{n(),A()})))()}function hg(){return(hg=e((()=>{n(),A()})))()}function gg(){return(gg=e((()=>{n(),A()})))()}function _g(){return(_g=e((()=>{n(),A()})))()}function vg(){return(vg=e((()=>{n(),A()})))()}function yg(){return(yg=e((()=>{n(),A()})))()}function bg(){return(bg=e((()=>{n(),A()})))()}function xg(){return(xg=e((()=>{n(),A()})))()}function Sg(){return(Sg=e((()=>{n(),A()})))()}function Cg(){return(Cg=e((()=>{n(),A()})))()}function wg(){return(wg=e((()=>{n(),A()})))()}function Tg(){return(Tg=e((()=>{n(),A()})))()}function Eg(){return(Eg=e((()=>{n(),A()})))()}function Dg(){return(Dg=e((()=>{n(),A()})))()}function Og(){return(Og=e((()=>{n(),A()})))()}function kg(){return(kg=e((()=>{n(),A()})))()}function Ag(){return(Ag=e((()=>{n(),A()})))()}function jg(){return(jg=e((()=>{n(),A()})))()}function Mg(){return(Mg=e((()=>{n(),A()})))()}function Ng(){return(Ng=e((()=>{n(),A()})))()}function Pg(){return(Pg=e((()=>{n(),A()})))()}function Fg(){return(Fg=e((()=>{n(),A()})))()}function Ig(){return(Ig=e((()=>{n(),A()})))()}function Lg(){return(Lg=e((()=>{n(),A()})))()}function Rg(){return(Rg=e((()=>{n(),A()})))()}function zg(){return(zg=e((()=>{n(),A()})))()}function Bg(){return(Bg=e((()=>{n(),A()})))()}function Vg(){return(Vg=e((()=>{n(),A()})))()}function Hg(){return(Hg=e((()=>{n(),A()})))()}function Ug(){return(Ug=e((()=>{n(),A()})))()}function Wg(){return(Wg=e((()=>{n(),A()})))()}function Gg(){return(Gg=e((()=>{n(),A()})))()}function Kg(){return(Kg=e((()=>{n(),A()})))()}function qg(){return(qg=e((()=>{n(),A()})))()}function Jg(){return(Jg=e((()=>{n(),A()})))()}function Yg(){return(Yg=e((()=>{n(),A()})))()}function Xg(){return(Xg=e((()=>{n(),A()})))()}function Zg(){return(Zg=e((()=>{n(),A()})))()}function Qg(){return(Qg=e((()=>{n(),A()})))()}function $g(){return($g=e((()=>{n(),A()})))()}function e_(){return(e_=e((()=>{n(),A()})))()}function t_(){return(t_=e((()=>{n(),A()})))()}function n_(){return(n_=e((()=>{n(),A()})))()}function r_(){return(r_=e((()=>{n(),A()})))()}function i_(){return(i_=e((()=>{n(),A()})))()}function a_(){return(a_=e((()=>{n(),A()})))()}function o_(){return(o_=e((()=>{n(),A()})))()}function s_(){return(s_=e((()=>{n(),A()})))()}function c_(){return(c_=e((()=>{n(),A()})))()}function l_(){return(l_=e((()=>{n(),A()})))()}function u_(){return(u_=e((()=>{n(),A()})))()}function d_(){return(d_=e((()=>{n(),A()})))()}function f_(){return(f_=e((()=>{n(),A()})))()}function p_(){return(p_=e((()=>{n(),A()})))()}function m_(){return(m_=e((()=>{n(),A()})))()}function h_(){return(h_=e((()=>{n(),A()})))()}function g_(){return(g_=e((()=>{n(),A()})))()}function __(){return(__=e((()=>{n(),A()})))()}function v_(){return(v_=e((()=>{n(),A()})))()}function y_(){return(y_=e((()=>{n(),A()})))()}function b_(){return(b_=e((()=>{n(),A()})))()}function x_(){return(x_=e((()=>{n(),A()})))()}function S_(){return(S_=e((()=>{n(),A()})))()}function C_(){return(C_=e((()=>{n(),A()})))()}function w_(){return(w_=e((()=>{n(),A()})))()}function T_(){return(T_=e((()=>{n(),A()})))()}function E_(){return(E_=e((()=>{n(),A()})))()}function D_(){return(D_=e((()=>{n(),A()})))()}function O_(){return(O_=e((()=>{n(),A()})))()}function k_(){return(k_=e((()=>{n(),A()})))()}function A_(){return(A_=e((()=>{n(),A()})))()}function j_(){return(j_=e((()=>{n(),A()})))()}function M_(){return(M_=e((()=>{n(),A()})))()}function N_(){return(N_=e((()=>{n(),A()})))()}function P_(){return(P_=e((()=>{n(),A()})))()}function F_(){return(F_=e((()=>{n(),A()})))()}function I_(){return(I_=e((()=>{n(),A()})))()}function L_(){return(L_=e((()=>{n(),A()})))()}function R_(){return(R_=e((()=>{n(),A()})))()}function z_(){return(z_=e((()=>{n(),A()})))()}function B_(){return(B_=e((()=>{n(),A()})))()}function V_(){return(V_=e((()=>{n(),A()})))()}function H_(){return(H_=e((()=>{n(),A()})))()}function U_(){return(U_=e((()=>{n(),A()})))()}function W_(){return(W_=e((()=>{n(),A()})))()}function G_(){return(G_=e((()=>{n(),A()})))()}function K_(){return(K_=e((()=>{n(),A()})))()}function q_(){return(q_=e((()=>{n(),A()})))()}function J_(){return(J_=e((()=>{n(),A()})))()}function Y_(){return(Y_=e((()=>{n(),A()})))()}function X_(){return(X_=e((()=>{n(),A()})))()}function Z_(){return(Z_=e((()=>{n(),A()})))()}function Q_(){return(Q_=e((()=>{n(),A()})))()}function $_(){return($_=e((()=>{n(),A()})))()}function ev(){return(ev=e((()=>{n(),A()})))()}function tv(){return(tv=e((()=>{n(),A()})))()}function nv(){return(nv=e((()=>{n(),A()})))()}function rv(){return(rv=e((()=>{n(),A()})))()}function iv(){return(iv=e((()=>{n(),A()})))()}function av(){return(av=e((()=>{n(),A()})))()}function ov(){return(ov=e((()=>{n(),A()})))()}function sv(){return(sv=e((()=>{n(),A()})))()}function cv(){return(cv=e((()=>{n(),A()})))()}function lv(){return(lv=e((()=>{n(),A()})))()}function uv(){return(uv=e((()=>{n(),A()})))()}function dv(){return(dv=e((()=>{n(),A()})))()}function fv(){return(fv=e((()=>{n(),A()})))()}function pv(){return(pv=e((()=>{n(),A()})))()}function mv(){return(mv=e((()=>{n(),A()})))()}function hv(){return(hv=e((()=>{n(),A()})))()}function gv(){return(gv=e((()=>{n(),A()})))()}function _v(){return(_v=e((()=>{n(),A()})))()}function vv(){return(vv=e((()=>{n(),A()})))()}function yv(){return(yv=e((()=>{n(),A()})))()}function bv(){return(bv=e((()=>{n(),A()})))()}function xv(){return(xv=e((()=>{n(),A()})))()}function Sv(){return(Sv=e((()=>{n(),A()})))()}function Cv(){return(Cv=e((()=>{n(),A()})))()}function wv(){return(wv=e((()=>{n(),A()})))()}function Tv(){return(Tv=e((()=>{n(),A()})))()}function Ev(){return(Ev=e((()=>{n(),A()})))()}function Dv(){return(Dv=e((()=>{n(),A()})))()}function Ov(){return(Ov=e((()=>{n(),A()})))()}function kv(){return(kv=e((()=>{n(),A()})))()}function Av(){return(Av=e((()=>{n(),A()})))()}function jv(){return(jv=e((()=>{n(),A()})))()}function Mv(){return(Mv=e((()=>{n(),A()})))()}function Nv(){return(Nv=e((()=>{n(),A()})))()}function Pv(){return(Pv=e((()=>{n(),A()})))()}function Fv(){return(Fv=e((()=>{n(),A()})))()}function Iv(){return(Iv=e((()=>{n(),A()})))()}function Lv(){return(Lv=e((()=>{n(),A()})))()}function Rv(){return(Rv=e((()=>{n(),A()})))()}function zv(){return(zv=e((()=>{n(),A()})))()}function Bv(){return(Bv=e((()=>{n(),A()})))()}function Vv(){return(Vv=e((()=>{n(),A()})))()}function Hv(){return(Hv=e((()=>{n(),A()})))()}function Uv(){return(Uv=e((()=>{n(),A()})))()}function Wv(){return(Wv=e((()=>{n(),A()})))()}function Gv(){return(Gv=e((()=>{n(),A()})))()}function Kv(){return(Kv=e((()=>{n(),A()})))()}function qv(){return(qv=e((()=>{n(),A()})))()}function Jv(){return(Jv=e((()=>{n(),A()})))()}function Yv(){return(Yv=e((()=>{n(),A()})))()}function Xv(){return(Xv=e((()=>{n(),A()})))()}function Zv(){return(Zv=e((()=>{n(),A()})))()}function Qv(){return(Qv=e((()=>{n(),A()})))()}function $v(){return($v=e((()=>{n(),A()})))()}function ey(){return(ey=e((()=>{n(),A()})))()}function ty(){return(ty=e((()=>{n(),A()})))()}function ny(){return(ny=e((()=>{n(),A()})))()}function ry(){return(ry=e((()=>{n(),A()})))()}function iy(){return(iy=e((()=>{n(),A()})))()}function ay(){return(ay=e((()=>{n(),A()})))()}function oy(){return(oy=e((()=>{n(),A()})))()}function sy(){return(sy=e((()=>{n(),A()})))()}function cy(){return(cy=e((()=>{n(),A()})))()}function ly(){return(ly=e((()=>{n(),A()})))()}function uy(){return(uy=e((()=>{n(),A()})))()}function dy(){return(dy=e((()=>{n(),A()})))()}function fy(){return(fy=e((()=>{n(),A()})))()}function py(){return(py=e((()=>{n(),A()})))()}function my(){return(my=e((()=>{n(),A()})))()}function hy(){return(hy=e((()=>{n(),A()})))()}function gy(){return(gy=e((()=>{n(),A()})))()}function _y(){return(_y=e((()=>{n(),A()})))()}function vy(){return(vy=e((()=>{n(),A()})))()}function yy(){return(yy=e((()=>{n(),A()})))()}function by(){return(by=e((()=>{n(),A()})))()}function xy(){return(xy=e((()=>{n(),A()})))()}function Sy(){return(Sy=e((()=>{n(),A()})))()}function Cy(){return(Cy=e((()=>{n(),A()})))()}function wy(){return(wy=e((()=>{n(),A()})))()}function Ty(){return(Ty=e((()=>{n(),A()})))()}function Ey(){return(Ey=e((()=>{n(),A()})))()}function Dy(){return(Dy=e((()=>{n(),A()})))()}function Oy(){return(Oy=e((()=>{n(),A()})))()}function ky(){return(ky=e((()=>{n(),A()})))()}function Ay(){return(Ay=e((()=>{n(),A()})))()}function jy(){return(jy=e((()=>{n(),A()})))()}function My(){return(My=e((()=>{n(),A()})))()}function Ny(){return(Ny=e((()=>{n(),A()})))()}function Py(){return(Py=e((()=>{n(),A()})))()}function Fy(){return(Fy=e((()=>{n(),A()})))()}function Iy(){return(Iy=e((()=>{n(),A()})))()}function Ly(){return(Ly=e((()=>{n(),A()})))()}function Ry(){return(Ry=e((()=>{n(),A()})))()}function zy(){return(zy=e((()=>{n(),A()})))()}function By(){return(By=e((()=>{n(),A()})))()}function Vy(){return(Vy=e((()=>{n(),A()})))()}function Hy(){return(Hy=e((()=>{n(),A()})))()}function Uy(){return(Uy=e((()=>{n(),A()})))()}function Wy(){return(Wy=e((()=>{n(),A()})))()}function Gy(){return(Gy=e((()=>{n(),A()})))()}function Ky(){return(Ky=e((()=>{n(),A()})))()}function qy(){return(qy=e((()=>{n(),A()})))()}function Jy(){return(Jy=e((()=>{n(),A()})))()}function Yy(){return(Yy=e((()=>{n(),A()})))()}function Xy(){return(Xy=e((()=>{n(),A()})))()}function Zy(){return(Zy=e((()=>{n(),A()})))()}function Qy(){return(Qy=e((()=>{n(),A()})))()}function $y(){return($y=e((()=>{n(),A()})))()}function eb(){return(eb=e((()=>{n(),A()})))()}function tb(){return(tb=e((()=>{n(),A()})))()}function nb(){return(nb=e((()=>{n(),A()})))()}function rb(){return(rb=e((()=>{n(),A()})))()}function ib(){return(ib=e((()=>{n(),A()})))()}function ab(){return(ab=e((()=>{n(),A()})))()}function ob(){return(ob=e((()=>{n(),A()})))()}function sb(){return(sb=e((()=>{n(),A()})))()}function cb(){return(cb=e((()=>{n(),A()})))()}function lb(){return(lb=e((()=>{n(),A()})))()}function ub(){return(ub=e((()=>{n(),A()})))()}function db(){return(db=e((()=>{n(),A()})))()}function fb(){return(fb=e((()=>{n(),A()})))()}function pb(){return(pb=e((()=>{n(),A()})))()}function mb(){return(mb=e((()=>{n(),A()})))()}function hb(){return(hb=e((()=>{n(),A()})))()}function gb(){return(gb=e((()=>{n(),A()})))()}function _b(){return(_b=e((()=>{n(),A()})))()}function vb(){return(vb=e((()=>{n(),A()})))()}function yb(){return(yb=e((()=>{n(),A()})))()}function bb(){return(bb=e((()=>{n(),A()})))()}function xb(){return(xb=e((()=>{n(),A()})))()}function Sb(){return(Sb=e((()=>{n(),A()})))()}function Cb(){return(Cb=e((()=>{n(),A()})))()}function wb(){return(wb=e((()=>{n(),A()})))()}function Tb(){return(Tb=e((()=>{n(),A()})))()}function Eb(){return(Eb=e((()=>{n(),A()})))()}function Db(){return(Db=e((()=>{n(),A()})))()}function Ob(){return(Ob=e((()=>{n(),A()})))()}function kb(){return(kb=e((()=>{n(),A()})))()}function Ab(){return(Ab=e((()=>{n(),A()})))()}function jb(){return(jb=e((()=>{n(),A()})))()}function Mb(){return(Mb=e((()=>{n(),A()})))()}function Nb(){return(Nb=e((()=>{n(),A()})))()}function Pb(){return(Pb=e((()=>{n(),A()})))()}function Fb(){return(Fb=e((()=>{n(),A()})))()}function Ib(){return(Ib=e((()=>{n(),A()})))()}function Lb(){return(Lb=e((()=>{n(),A()})))()}function Rb(){return(Rb=e((()=>{n(),A()})))()}function zb(){return(zb=e((()=>{n(),A()})))()}function Bb(){return(Bb=e((()=>{n(),A()})))()}function Vb(){return(Vb=e((()=>{n(),A()})))()}function Hb(){return(Hb=e((()=>{n(),A()})))()}function Ub(){return(Ub=e((()=>{n(),A()})))()}function Wb(){return(Wb=e((()=>{n(),A()})))()}function Gb(){return(Gb=e((()=>{n(),A()})))()}function Kb(){return(Kb=e((()=>{n(),A()})))()}function qb(){return(qb=e((()=>{n(),A()})))()}function Jb(){return(Jb=e((()=>{n(),A()})))()}function Yb(){return(Yb=e((()=>{n(),A()})))()}function Xb(){return(Xb=e((()=>{n(),A()})))()}function Zb(){return(Zb=e((()=>{n(),A()})))()}function Qb(){return(Qb=e((()=>{n(),A()})))()}function $b(){return($b=e((()=>{n(),A()})))()}function ex(){return(ex=e((()=>{n(),A()})))()}function tx(){return(tx=e((()=>{n(),A()})))()}function nx(){return(nx=e((()=>{n(),A()})))()}function rx(){return(rx=e((()=>{n(),A()})))()}function ix(){return(ix=e((()=>{n(),A()})))()}function ax(){return(ax=e((()=>{n(),A()})))()}function ox(){return(ox=e((()=>{n(),A()})))()}function sx(){return(sx=e((()=>{n(),A()})))()}var cx;function lx(){return(lx=e((()=>{n(),A(),cx=({slot:e,title:t,className:n,width:r=`24`,height:a=`24`,styles:o}={})=>s`
  <svg
    slot=${k(e)}
    class=${`trash-01-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${a}
    style=${k(o)}
  >
    ${j(t,()=>i`<title>${t}</title>`)}
    <path
      d="M16 6v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.48 2 13.92 2 12.8 2h-1.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C8 3.52 8 4.08 8 5.2V6m2 5.5v5m4-5v5M3 6h18m-2 0v11.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C16.72 22 15.88 22 14.2 22H9.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C5 19.72 5 18.88 5 17.2V6"
    />
  </svg>
`})))()}function ux(){return(ux=e((()=>{n(),A()})))()}function dx(){return(dx=e((()=>{n(),A()})))()}function fx(){return(fx=e((()=>{n(),A()})))()}function px(){return(px=e((()=>{n(),A()})))()}function mx(){return(mx=e((()=>{n(),A()})))()}function hx(){return(hx=e((()=>{n(),A()})))()}function gx(){return(gx=e((()=>{n(),A()})))()}function _x(){return(_x=e((()=>{n(),A()})))()}function vx(){return(vx=e((()=>{n(),A()})))()}function yx(){return(yx=e((()=>{n(),A()})))()}function bx(){return(bx=e((()=>{n(),A()})))()}function xx(){return(xx=e((()=>{n(),A()})))()}function Sx(){return(Sx=e((()=>{n(),A()})))()}function Cx(){return(Cx=e((()=>{n(),A()})))()}function wx(){return(wx=e((()=>{n(),A()})))()}function Tx(){return(Tx=e((()=>{n(),A()})))()}function Ex(){return(Ex=e((()=>{n(),A()})))()}function Dx(){return(Dx=e((()=>{n(),A()})))()}function Ox(){return(Ox=e((()=>{n(),A()})))()}function kx(){return(kx=e((()=>{n(),A()})))()}function Ax(){return(Ax=e((()=>{n(),A()})))()}function jx(){return(jx=e((()=>{n(),A()})))()}function Mx(){return(Mx=e((()=>{n(),A()})))()}function Nx(){return(Nx=e((()=>{n(),A()})))()}function Px(){return(Px=e((()=>{n(),A()})))()}function Fx(){return(Fx=e((()=>{n(),A()})))()}function Ix(){return(Ix=e((()=>{n(),A()})))()}function Lx(){return(Lx=e((()=>{n(),A()})))()}function Rx(){return(Rx=e((()=>{n(),A()})))()}function zx(){return(zx=e((()=>{n(),A()})))()}function Bx(){return(Bx=e((()=>{n(),A()})))()}function Vx(){return(Vx=e((()=>{n(),A()})))()}function Hx(){return(Hx=e((()=>{n(),A()})))()}function Ux(){return(Ux=e((()=>{n(),A()})))()}function Wx(){return(Wx=e((()=>{n(),A()})))()}function Gx(){return(Gx=e((()=>{n(),A()})))()}function Kx(){return(Kx=e((()=>{n(),A()})))()}function qx(){return(qx=e((()=>{n(),A()})))()}function Jx(){return(Jx=e((()=>{n(),A()})))()}function Yx(){return(Yx=e((()=>{n(),A()})))()}function Xx(){return(Xx=e((()=>{n(),A()})))()}function Zx(){return(Zx=e((()=>{n(),A()})))()}function Qx(){return(Qx=e((()=>{n(),A()})))()}function $x(){return($x=e((()=>{n(),A()})))()}function eS(){return(eS=e((()=>{n(),A()})))()}function tS(){return(tS=e((()=>{n(),A()})))()}function nS(){return(nS=e((()=>{n(),A()})))()}function rS(){return(rS=e((()=>{n(),A()})))()}function iS(){return(iS=e((()=>{n(),A()})))()}function aS(){return(aS=e((()=>{n(),A()})))()}function oS(){return(oS=e((()=>{n(),A()})))()}function sS(){return(sS=e((()=>{n(),A()})))()}function cS(){return(cS=e((()=>{n(),A()})))()}function lS(){return(lS=e((()=>{n(),A()})))()}function uS(){return(uS=e((()=>{n(),A()})))()}function dS(){return(dS=e((()=>{n(),A()})))()}function fS(){return(fS=e((()=>{n(),A()})))()}function pS(){return(pS=e((()=>{n(),A()})))()}function mS(){return(mS=e((()=>{n(),A()})))()}function hS(){return(hS=e((()=>{n(),A()})))()}function gS(){return(gS=e((()=>{n(),A()})))()}function _S(){return(_S=e((()=>{n(),A()})))()}function vS(){return(vS=e((()=>{n(),A()})))()}function yS(){return(yS=e((()=>{n(),A()})))()}function bS(){return(bS=e((()=>{n(),A()})))()}function xS(){return(xS=e((()=>{n(),A()})))()}function SS(){return(SS=e((()=>{n(),A()})))()}function CS(){return(CS=e((()=>{n(),A()})))()}function wS(){return(wS=e((()=>{n(),A()})))()}function TS(){return(TS=e((()=>{n(),A()})))()}function ES(){return(ES=e((()=>{n(),A()})))()}function DS(){return(DS=e((()=>{n(),A()})))()}function OS(){return(OS=e((()=>{n(),A()})))()}function kS(){return(kS=e((()=>{n(),A()})))()}function AS(){return(AS=e((()=>{n(),A()})))()}function jS(){return(jS=e((()=>{n(),A()})))()}function MS(){return(MS=e((()=>{n(),A()})))()}function NS(){return(NS=e((()=>{n(),A()})))()}function PS(){return(PS=e((()=>{n(),A()})))()}function FS(){return(FS=e((()=>{n(),A()})))()}function IS(){return(IS=e((()=>{n(),A()})))()}function LS(){return(LS=e((()=>{n(),A()})))()}function RS(){return(RS=e((()=>{n(),A()})))()}function zS(){return(zS=e((()=>{n(),A()})))()}function BS(){return(BS=e((()=>{n(),A()})))()}function VS(){return(VS=e((()=>{n(),A()})))()}function HS(){return(HS=e((()=>{n(),A()})))()}function US(){return(US=e((()=>{n(),A()})))()}function WS(){return(WS=e((()=>{n(),A()})))()}function GS(){return(GS=e((()=>{n(),A()})))()}function KS(){return(KS=e((()=>{n(),A()})))()}function qS(){return(qS=e((()=>{n(),A()})))()}function JS(){return(JS=e((()=>{n(),A()})))()}function YS(){return(YS=e((()=>{n(),A()})))()}function XS(){return(XS=e((()=>{n(),A()})))()}function ZS(){return(ZS=e((()=>{n(),A()})))()}function QS(){return(QS=e((()=>{n(),A()})))()}function $S(){return($S=e((()=>{n(),A()})))()}function eC(){return(eC=e((()=>{n(),A()})))()}function tC(){return(tC=e((()=>{n(),A()})))()}function nC(){return(nC=e((()=>{n(),A()})))()}function rC(){return(rC=e((()=>{n(),A()})))()}function iC(){return(iC=e((()=>{n(),A()})))()}function aC(){return(aC=e((()=>{n(),A()})))()}function oC(){return(oC=e((()=>{ht(),gt(),_t(),vt(),yt(),bt(),xt(),St(),Ct(),wt(),Tt(),Et(),Dt(),Ot(),kt(),At(),jt(),Mt(),Nt(),Pt(),Ft(),It(),Lt(),Rt(),zt(),Bt(),Vt(),Ht(),Ut(),Wt(),Gt(),Kt(),qt(),Jt(),Yt(),Xt(),Zt(),Qt(),$t(),en(),tn(),nn(),rn(),an(),on(),sn(),cn(),ln(),un(),dn(),fn(),pn(),mn(),hn(),gn(),_n(),vn(),yn(),bn(),xn(),Sn(),Cn(),wn(),Tn(),En(),Dn(),On(),kn(),An(),jn(),Mn(),Nn(),Pn(),Fn(),In(),Ln(),Rn(),zn(),Bn(),Vn(),Hn(),Un(),Wn(),Gn(),Kn(),qn(),Jn(),Yn(),Xn(),Zn(),Qn(),$n(),er(),tr(),nr(),rr(),ir(),ar(),or(),sr(),cr(),lr(),ur(),dr(),fr(),pr(),mr(),hr(),gr(),_r(),vr(),yr(),br(),xr(),Sr(),Cr(),wr(),Tr(),Er(),Dr(),Or(),kr(),Ar(),jr(),Mr(),Nr(),Pr(),Fr(),Ir(),Lr(),Rr(),zr(),Br(),Vr(),Hr(),Ur(),Wr(),Gr(),Kr(),qr(),Jr(),Yr(),Xr(),Zr(),Qr(),$r(),ei(),ti(),ni(),ri(),ii(),ai(),oi(),si(),ci(),li(),ui(),di(),fi(),pi(),mi(),hi(),gi(),_i(),vi(),yi(),bi(),xi(),Si(),Ci(),wi(),Ti(),Ei(),Di(),Oi(),ki(),Ai(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Li(),Ri(),zi(),Bi(),Vi(),Hi(),Ui(),Wi(),Gi(),Ki(),qi(),Ji(),Yi(),Xi(),Zi(),Qi(),$i(),ea(),ta(),na(),ra(),ia(),aa(),oa(),sa(),ca(),la(),ua(),da(),fa(),pa(),ma(),ha(),ga(),_a(),va(),ya(),ba(),xa(),Sa(),Ca(),wa(),Ta(),Ea(),Da(),Oa(),ka(),Aa(),ja(),Ma(),Na(),Pa(),Fa(),Ia(),La(),Ra(),za(),Ba(),Va(),Ha(),Ua(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Za(),Qa(),$a(),eo(),to(),no(),ro(),io(),ao(),oo(),so(),co(),lo(),uo(),fo(),po(),mo(),ho(),go(),_o(),vo(),yo(),bo(),xo(),So(),Co(),wo(),To(),Eo(),Do(),Oo(),ko(),Ao(),jo(),Mo(),No(),Po(),Fo(),Io(),Lo(),Ro(),zo(),Bo(),Vo(),Ho(),Uo(),Wo(),Go(),Ko(),qo(),Jo(),Yo(),Xo(),Zo(),Qo(),$o(),es(),ts(),ns(),rs(),is(),as(),os(),ss(),cs(),ls(),us(),ds(),fs(),ps(),ms(),hs(),gs(),_s(),vs(),ys(),bs(),xs(),Ss(),Cs(),ws(),Ts(),Es(),Ds(),Os(),ks(),As(),js(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec(),Dc(),Oc(),kc(),Ac(),jc(),Mc(),Nc(),Pc(),Fc(),Ic(),Lc(),Rc(),zc(),Bc(),Vc(),Hc(),Uc(),Wc(),Gc(),Kc(),qc(),Jc(),Yc(),Xc(),Zc(),Qc(),$c(),el(),tl(),nl(),rl(),il(),al(),ol(),sl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),Rl(),zl(),Bl(),Vl(),Hl(),Ul(),Wl(),Gl(),Kl(),ql(),Jl(),Yl(),Xl(),Zl(),Ql(),$l(),eu(),tu(),nu(),ru(),iu(),au(),ou(),su(),cu(),lu(),uu(),du(),fu(),pu(),mu(),hu(),gu(),_u(),vu(),yu(),bu(),xu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),ku(),ju(),Mu(),Nu(),Pu(),Fu(),Iu(),Lu(),Ru(),zu(),Bu(),Vu(),Hu(),Uu(),Wu(),Gu(),Ku(),qu(),Ju(),Yu(),Xu(),Zu(),Qu(),$u(),ed(),td(),nd(),rd(),id(),ad(),od(),sd(),cd(),ld(),ud(),dd(),fd(),pd(),md(),hd(),gd(),_d(),vd(),yd(),bd(),xd(),Sd(),Cd(),wd(),Td(),Ed(),Dd(),Od(),kd(),Ad(),jd(),Md(),Nd(),Pd(),Fd(),Id(),Ld(),Rd(),zd(),Bd(),Vd(),Hd(),Ud(),Wd(),Gd(),Kd(),qd(),Jd(),Yd(),Xd(),Zd(),Qd(),$d(),ef(),tf(),nf(),rf(),af(),of(),sf(),cf(),lf(),uf(),df(),ff(),pf(),mf(),hf(),gf(),_f(),vf(),yf(),bf(),xf(),Sf(),Cf(),wf(),Tf(),Ef(),Df(),Of(),kf(),Af(),jf(),Mf(),Nf(),Pf(),Ff(),If(),Lf(),Rf(),zf(),Bf(),Vf(),Hf(),Uf(),Wf(),Gf(),Kf(),qf(),Jf(),Yf(),Xf(),Zf(),Qf(),$f(),ep(),tp(),np(),rp(),ip(),ap(),op(),sp(),cp(),lp(),up(),dp(),fp(),pp(),mp(),hp(),gp(),_p(),vp(),yp(),bp(),xp(),Sp(),Cp(),wp(),Tp(),Ep(),Dp(),Op(),kp(),Ap(),jp(),Mp(),Np(),Pp(),Fp(),Ip(),Lp(),Rp(),zp(),Bp(),Vp(),Hp(),Up(),Wp(),Gp(),Kp(),qp(),Jp(),Yp(),Xp(),Zp(),Qp(),$p(),em(),tm(),nm(),rm(),im(),am(),om(),sm(),cm(),lm(),um(),dm(),fm(),pm(),mm(),hm(),gm(),_m(),vm(),ym(),bm(),xm(),Sm(),Cm(),wm(),Tm(),Em(),Dm(),Om(),km(),Am(),jm(),Mm(),Nm(),Pm(),Fm(),Im(),Lm(),Rm(),zm(),Bm(),Vm(),Hm(),Um(),Wm(),Gm(),Km(),qm(),Jm(),Ym(),Xm(),Zm(),Qm(),$m(),eh(),th(),nh(),rh(),ih(),ah(),oh(),sh(),ch(),lh(),uh(),dh(),fh(),ph(),mh(),hh(),gh(),_h(),vh(),yh(),bh(),xh(),Sh(),Ch(),wh(),Th(),Eh(),Dh(),Oh(),kh(),Ah(),jh(),Mh(),Nh(),Ph(),Fh(),Ih(),Lh(),Rh(),zh(),Bh(),Vh(),Hh(),Uh(),Wh(),Gh(),Kh(),qh(),Jh(),Yh(),Xh(),Zh(),Qh(),$h(),eg(),tg(),ng(),rg(),ig(),ag(),og(),sg(),cg(),lg(),ug(),dg(),fg(),pg(),mg(),hg(),gg(),_g(),vg(),yg(),bg(),xg(),Sg(),Cg(),wg(),Tg(),Eg(),Dg(),Og(),kg(),Ag(),jg(),Mg(),Ng(),Pg(),Fg(),Ig(),Lg(),Rg(),zg(),Bg(),Vg(),Hg(),Ug(),Wg(),Gg(),Kg(),qg(),Jg(),Yg(),Xg(),Zg(),Qg(),$g(),e_(),t_(),n_(),r_(),i_(),a_(),o_(),s_(),c_(),l_(),u_(),d_(),f_(),p_(),m_(),h_(),g_(),__(),v_(),y_(),b_(),x_(),S_(),C_(),w_(),T_(),E_(),D_(),O_(),k_(),A_(),j_(),M_(),N_(),P_(),F_(),I_(),L_(),R_(),z_(),B_(),V_(),H_(),U_(),W_(),G_(),K_(),q_(),J_(),Y_(),X_(),Z_(),Q_(),$_(),ev(),tv(),nv(),rv(),iv(),av(),ov(),sv(),cv(),lv(),uv(),dv(),fv(),pv(),mv(),hv(),gv(),_v(),vv(),yv(),bv(),xv(),Sv(),Cv(),wv(),Tv(),Ev(),Dv(),Ov(),kv(),Av(),jv(),Mv(),Nv(),Pv(),Fv(),Iv(),Lv(),Rv(),zv(),Bv(),Vv(),Hv(),Uv(),Wv(),Gv(),Kv(),qv(),Jv(),Yv(),Xv(),Zv(),Qv(),$v(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),sy(),cy(),ly(),uy(),dy(),fy(),py(),my(),hy(),gy(),_y(),vy(),yy(),by(),xy(),Sy(),Cy(),wy(),Ty(),Ey(),Dy(),Oy(),ky(),Ay(),jy(),My(),Ny(),Py(),Fy(),Iy(),Ly(),Ry(),zy(),By(),Vy(),Hy(),Uy(),Wy(),Gy(),Ky(),qy(),Jy(),Yy(),Xy(),Zy(),Qy(),$y(),eb(),tb(),nb(),rb(),ib(),ab(),ob(),sb(),cb(),lb(),ub(),db(),fb(),pb(),mb(),hb(),gb(),_b(),vb(),yb(),bb(),xb(),Sb(),Cb(),wb(),Tb(),Eb(),Db(),Ob(),kb(),Ab(),jb(),Mb(),Nb(),Pb(),Fb(),Ib(),Lb(),Rb(),zb(),Bb(),Vb(),Hb(),Ub(),Wb(),Gb(),Kb(),qb(),Jb(),Yb(),Xb(),Zb(),Qb(),$b(),ex(),tx(),nx(),rx(),ix(),ax(),ox(),sx(),lx(),ux(),dx(),fx(),px(),mx(),hx(),gx(),_x(),vx(),yx(),bx(),xx(),Sx(),Cx(),wx(),Tx(),Ex(),Dx(),Ox(),kx(),Ax(),jx(),Mx(),Nx(),Px(),Fx(),Ix(),Lx(),Rx(),zx(),Bx(),Vx(),Hx(),Ux(),Wx(),Gx(),Kx(),qx(),Jx(),Yx(),Xx(),Zx(),Qx(),$x(),eS(),tS(),nS(),rS(),iS(),aS(),oS(),sS(),cS(),lS(),uS(),dS(),fS(),pS(),mS(),hS(),gS(),_S(),vS(),yS(),bS(),xS(),SS(),CS(),wS(),TS(),ES(),DS(),OS(),kS(),AS(),jS(),MS(),NS(),PS(),FS(),IS(),LS(),RS(),zS(),BS(),VS(),HS(),US(),WS(),GS(),KS(),qS(),JS(),YS(),XS(),ZS(),QS(),$S(),eC(),tC(),nC(),rC(),iC(),aC()})))()}var sC;function cC(){return(cC=e((()=>{O(),sC=b(x`
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
`)})))()}var lC,uC;function dC(){return(dC=e((()=>{n(),et(),Je(),lC=new WeakMap,uC=Ke(class extends $e{render(e){return r}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),r}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=lC.get(t);n===void 0&&(n=new WeakMap,lC.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?lC.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})))()}var fC;function pC(){return(pC=e((()=>{cC(),O(),n(),fC=x`
	:host {
		display: flex;
		flex-direction: column;
		gap: var(--cosmoz-tooltip-gap, var(--cz-spacing));
		font-family: var(--cz-font-body);
	}

	::slotted([slot='heading']) {
		display: block;
	}

	::slotted([slot='description']) {
		margin: 0;
	}
`,customElements.define(`cosmoz-tooltip-content`,nt(()=>s`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[sC,fC]}))})))()}var M;function mC(){return(mC=e((()=>{O(),M=b(x`
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
		white-space: normal;
		padding: var(--cosmoz-tooltip-padding, calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3));
		border-radius: var(--cosmoz-tooltip-border-radius, var(--cz-radius-sm));
		max-width: var(--cosmoz-tooltip-max-width, 20rem);
		box-shadow: var(--cosmoz-tooltip-box-shadow, var(--cz-shadow-lg));
		background: var(--cosmoz-tooltip-bg-color, var(--cz-color-gray-900));
		font-size: var(--cosmoz-tooltip-font-size, var(--cz-text-xs));
		font-weight: var(--cosmoz-tooltip-font-weight, 400);
		line-height: var(--cosmoz-tooltip-line-height, var(--cz-text-xs-line-height));
		color: var(--cosmoz-tooltip-text-color, var(--cz-color-white));

		cosmoz-tooltip-content strong {
			font-weight: var(
	 			--cosmoz-tooltip-heading-font-weight,
	 			var(--cz-font-weight-semibold)
	 		);

			color: var(--cosmoz-tooltip-heading-color);
		}

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
`)})))()}var hC;function gC(){return(gC=e((()=>{hC=({root:e,delay:t,matchTarget:n,show:r,hide:i})=>{let a,o=!1,s=!1,c=()=>{clearTimeout(a),a=void 0},l=e=>{o||(c(),a=window.setTimeout(()=>{a=void 0,r(e)},t))},u=e=>{if(e.pointerType===`touch`)return;s=!1;let t=n(e);t&&l(t)},d=e=>{n(e)&&(s=e.pointerType!==`mouse`,o=!0,c(),i())},f=()=>{o=!1},p=e=>{let t=n(e);t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(c(),i()))},m=()=>{s=!1},h=e=>{let t=n(e);if(t){if(s){s=!1;return}l(t)}},g=e=>{n(e)&&(c(),i())};return e.addEventListener(`pointerover`,u),e.addEventListener(`pointerdown`,d),e.addEventListener(`pointerup`,f),e.addEventListener(`pointerout`,p),e.addEventListener(`keydown`,m),e.addEventListener(`focusin`,h),e.addEventListener(`focusout`,g),{dispose(){c(),e.removeEventListener(`pointerover`,u),e.removeEventListener(`pointerdown`,d),e.removeEventListener(`pointerup`,f),e.removeEventListener(`pointerout`,p),e.removeEventListener(`keydown`,m),e.removeEventListener(`focusin`,h),e.removeEventListener(`focusout`,g)}}}})))()}var _C,vC;function yC(){return(yC=e((()=>{O(),n(),pC(),mC(),gC(),_C=(e,n,r)=>t(s`<cosmoz-tooltip-content>
			${j(n,()=>s`<strong slot="heading">${n}</strong>`)}
			${j(r,()=>s`<p slot="description">${r}</p>`)}
		</cosmoz-tooltip-content>`,e),vC=(e,t)=>{let{for:n,heading:r,description:i,placement:a=`top`,delay:o=300,disabled:s=!1}=t,c=!!(r||i)&&!s;T(()=>{if(!n||!c)return;let t=e.getRootNode(),s=t.adoptedStyleSheets??[];s.includes(M)||(t.adoptedStyleSheets=[...s,M]);let l=document.createElement(`div`);l.setAttribute(`popover`,`manual`),l.setAttribute(`role`,`tooltip`),l.classList.add(`cosmoz-tooltip-popover`),l.setAttribute(`data-for`,n),e.after(l),_C(l,r,i);let u=`--tooltip-anchor-${n}`,d=hC({root:t,delay:o,matchTarget:e=>e.target.closest?.(`[name="${n}"]`)??void 0,show:e=>{e.style.anchorName=u,l.style.positionAnchor=u,l.style.positionArea=a,l.showPopover()},hide:()=>l.hidePopover()});return()=>{d.dispose(),l.hidePopover(),l.remove()}},[n,r,i,a,o,c])}})))()}var bC;function xC(){return(xC=e((()=>{O(),bC=e=>{let[t,n]=Pe(!1);return T(()=>{let t=e.current;if(!t)return;let r=()=>{n(t.assignedElements().length>0)};return r(),t.addEventListener(`slotchange`,r),()=>t.removeEventListener(`slotchange`,r)},[e.current]),t}})))()}var SC,CC;function wC(){return(wC=e((()=>{cC(),O(),n(),dC(),pC(),mC(),gC(),yC(),xC(),SC=x`
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
`,CC=e=>{let{heading:t,description:n,for:i,placement:a=`top`,delay:o=300,disabled:c=!1}=e,l=Be(),u=bC(l),d=!!(t||n||u)&&!c;return T(()=>{if(i||!d)return;let t=e.getRootNode(),n=e.shadowRoot?.querySelector(`.cosmoz-tooltip-popover`);if(!n)return;let r=hC({root:t,delay:o,matchTarget:t=>{let n=t.target;return n===e||e.contains(n)?e:void 0},show:()=>n.showPopover(),hide:()=>n.hidePopover()});return()=>{r.dispose(),n.hidePopover()}},[i,d,o]),vC(e,{for:i,heading:t,description:n,placement:a,delay:o,disabled:c}),i?r:d?s`
		<slot></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${a}"
		>
			<cosmoz-tooltip-content>
				${j(t,()=>s`<strong slot="heading">${t}</strong>`)}
				${j(n,()=>s`<p slot="description">${n}</p>`)}
				<slot name="content" ${uC(l)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:s`
			<slot></slot>
			<slot name="content" ${uC(l)} hidden></slot>
		`},customElements.define(`cosmoz-tooltip`,nt(CC,{styleSheets:[sC,M,SC],observedAttributes:[`heading`,`description`,`for`,`placement`,`delay`,`disabled`]}))})))()}var N,P,TC,EC,DC,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,OC;function kC(){return(kC=e((()=>{mt(),oC(),O(),wC(),{expect:N,waitFor:P}=__STORYBOOK_MODULE_TEST__,TC={title:`CosmozTooltip`,component:`cosmoz-tooltip`,tags:[`autodocs`],argTypes:{heading:{control:`text`,description:`Tooltip heading (bold text)`},description:{control:`text`,description:`Tooltip description (secondary text)`},placement:{control:`select`,options:[`top`,`bottom`,`left`,`right`,`top center`,`bottom center`],description:`Position relative to trigger`},delay:{control:`number`,description:`Delay before showing tooltip (ms)`}},args:{heading:`Tooltip Heading`,description:`This is helpful information.`,placement:`top`,delay:300}},EC=e=>null.commands.realTap(e),DC=e=>{let t=e.getRootNode(),n=t.host?.closest?.(`cosmoz-tooltip`)??e.closest?.(`cosmoz-tooltip`);if(n?.shadowRoot)return n.shadowRoot.querySelector(`.cosmoz-tooltip-popover`);let r=e.getAttribute(`name`);return r?t.querySelector(`.cosmoz-tooltip-popover[data-for="${r}"]`):null},F=e=>DC(e)?.matches(`:popover-open`)??!1,I={render:e=>s`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                heading=${e.heading}
                description=${e.description}
                placement=${e.placement}
                delay=${e.delay}
            >
                <cosmoz-button>Hover me</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `,play:async({canvas:e,step:t})=>{await t(`Shows tooltip on hover`,async()=>{let t=e.getByShadowRole(`button`);await null.hover(t),await P(()=>N(F(t)).toBe(!0),{timeout:1e3})}),await t(`Hides tooltip on mouse leave`,async()=>{let t=e.getByShadowRole(`button`);await null.unhover(t),await P(()=>N(F(t)).toBe(!1),{timeout:500})})}},L={args:{heading:`Quick tip`,description:``},render:e=>s`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip heading=${e.heading} placement=${e.placement}>
                <cosmoz-button>Hover for heading only</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `,play:async({canvas:e,step:t})=>{await t(`Shows tooltip with heading only`,async()=>{let t=e.getByShadowRole(`button`);await null.hover(t),await P(()=>N(F(t)).toBe(!0),{timeout:1e3})})}},R={args:{heading:``,description:`Just a simple description without a heading`},render:e=>s`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                description=${e.description}
                placement=${e.placement}
            >
                <cosmoz-button>Hover for description only</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `},z={render:e=>s`
        <div style="padding: 4rem;">
            <div
                style="display: flex; flex-direction: column; gap: 1rem; max-width: 300px;"
            >
                <div>
                    <cosmoz-tooltip
                        for="hover-target"
                        heading="Hover tooltip"
                        description="This appears when you hover the text"
                        placement=${e.placement}
                        delay=${e.delay}
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
                        placement=${e.placement}
                        delay=${e.delay}
                    ></cosmoz-tooltip>
                </div>
            </div>
        </div>
    `,play:async({canvas:e,step:t})=>{await t(`Shows tooltip when hovering span`,async()=>{let t=e.getByText(`Hover over this text`);await null.hover(t),await P(()=>N(F(t)).toBe(!0),{timeout:1e3})}),await t(`Shows tooltip when hovering input`,async()=>{let t=e.getByPlaceholderText(`you@example.com`);await null.hover(t),await P(()=>N(F(t)).toBe(!0),{timeout:1e3})})}},B={render:()=>s`
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
    `},V={args:{delay:0,heading:`Instant tooltip`,description:`This appears immediately`},render:e=>s`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                heading=${e.heading}
                description=${e.description}
                delay=${e.delay}
            >
                <cosmoz-button>No delay (instant)</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `,play:async({canvas:e,step:t})=>{await t(`Shows tooltip immediately`,async()=>{let t=e.getByShadowRole(`button`);await null.hover(t),await P(()=>N(F(t)).toBe(!0),{timeout:1e3})})}},H={render:e=>s`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip placement=${e.placement} delay=${e.delay}>
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
    `},U={render:e=>s`
        <div style="padding: 4rem;">
            <p>
                Check out our
                <cosmoz-tooltip
                    heading="External link"
                    description="Opens in a new tab"
                    placement=${e.placement}
                    delay=${e.delay}
                >
                    <a href="https://example.com" target="_blank">documentation</a>
                </cosmoz-tooltip>
                for more information.
            </p>
        </div>
    `},W={args:{delay:0,heading:`Focus test tooltip`,description:`Should not appear on focus alone`},render:e=>s`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                heading=${e.heading}
                description=${e.description}
                delay=${e.delay}
            >
                <cosmoz-button>Focus me</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `,play:async({canvas:e,step:t})=>{await t(`Should NOT show tooltip after hover out even with focus`,async()=>{let t=e.getByShadowRole(`button`);await null.hover(t),await null.click(t),await null.unhover(t),await new Promise(e=>setTimeout(e,200)),N(F(t)).toBe(!1)})}},G={args:{delay:0,heading:`For focus test tooltip`,description:`Should not appear on focus alone`},render:e=>s`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                for="focus-test-input"
                heading=${e.heading}
                description=${e.description}
                placement=${e.placement}
                delay=${e.delay}
            ></cosmoz-tooltip>
            <input name="focus-test-input" placeholder="Focus test input" />
        </div>
    `,play:async({canvas:e,step:t})=>{await t(`Should NOT show tooltip after hover out even with focus`,async()=>{let t=e.getByPlaceholderText(`Focus test input`);await null.hover(t),await null.click(t),await null.unhover(t),await new Promise(e=>setTimeout(e,200)),N(F(t)).toBe(!1)})}},K={render:e=>s`
        <div style="padding: 4rem; display: flex; gap: 1rem;">
            <cosmoz-tooltip
                heading="Edit"
                placement=${e.placement}
                delay=${e.delay}
            >
                <cosmoz-button variant="tertiary" aria-label="Edit">
                    ${cl({width:`20`,height:`20`})}
                </cosmoz-button>
            </cosmoz-tooltip>

            <cosmoz-tooltip
                heading="Delete"
                description="This action cannot be undone"
                placement=${e.placement}
                delay=${e.delay}
            >
                <cosmoz-button variant="tertiary" aria-label="Delete">
                    ${cx({width:`20`,height:`20`})}
                </cosmoz-button>
            </cosmoz-tooltip>

            <cosmoz-tooltip
                heading="Filter"
                placement=${e.placement}
                delay=${e.delay}
            >
                <cosmoz-button variant="tertiary" aria-label="Filter">
                    ${Au({width:`20`,height:`20`})}
                </cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `},q={args:{delay:0,heading:`Disabled tooltip`,description:`This should not appear`},render:e=>s`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                heading=${e.heading}
                description=${e.description}
                delay=${e.delay}
                disabled
            >
                <cosmoz-button>Hover me (disabled tooltip)</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `,play:async({canvas:e,step:t})=>{await t(`Should NOT show tooltip on hover when disabled`,async()=>{let t=e.getByShadowRole(`button`);await null.hover(t),await new Promise(e=>setTimeout(e,200)),N(F(t)).toBe(!1)})}},J={args:{delay:0,heading:`Disabled for tooltip`,description:`This should not appear`},render:e=>s`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                for="disabled-target"
                heading=${e.heading}
                description=${e.description}
                placement=${e.placement}
                delay=${e.delay}
                disabled
            ></cosmoz-tooltip>
            <input
                name="disabled-target"
                placeholder="Hover me (disabled for tooltip)"
            />
        </div>
    `,play:async({canvas:e,step:t})=>{await t(`Should NOT show tooltip on hover when disabled (for mode)`,async()=>{let t=e.getByPlaceholderText(`Hover me (disabled for tooltip)`);await null.hover(t),await new Promise(e=>setTimeout(e,200)),N(F(t)).toBe(!1)})}},Y={args:{delay:300,heading:`Press to dismiss`,description:`Hidden while pressing`},render:e=>s`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                for="press-target"
                heading=${e.heading}
                description=${e.description}
                placement=${e.placement}
                delay=${e.delay}
            ></cosmoz-tooltip>
            <input name="press-target" placeholder="Hover then press me" />
        </div>
    `,play:async({canvas:e,step:t})=>{let n=e=>e.getRootNode().querySelector(`.cosmoz-tooltip-popover`)?.matches(`:popover-open`)??!1;await t(`Shows tooltip on hover`,async()=>{let t=e.getByPlaceholderText(`Hover then press me`);await null.hover(t),await P(()=>N(n(t)).toBe(!0),{timeout:1e3})}),await t(`Hides tooltip on press while visible`,async()=>{let t=e.getByPlaceholderText(`Hover then press me`);await null.click(t),await P(()=>N(n(t)).toBe(!1),{timeout:500})}),await t(`Does not reappear while the pointer stays on the target`,async()=>{let t=e.getByPlaceholderText(`Hover then press me`);await new Promise(e=>setTimeout(e,500)),N(n(t)).toBe(!1)})}},X={args:{delay:0,heading:`Touch tooltip`,description:`Never shows for touch pointers`},render:e=>s`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                for="touch-target"
                heading=${e.heading}
                description=${e.description}
                placement=${e.placement}
                delay=${e.delay}
            ></cosmoz-tooltip>
            <input name="touch-target" placeholder="Tap me" data-testid="tap-input" />
        </div>
    `,play:async({canvas:e,step:t})=>{let n=e=>e.getRootNode().querySelector(`.cosmoz-tooltip-popover`)?.matches(`:popover-open`)??!1;await t(`Shows tooltip for a mouse pointer`,async()=>{let t=e.getByPlaceholderText(`Tap me`);await null.hover(t),await P(()=>N(n(t)).toBe(!0),{timeout:1e3}),await null.unhover(t),await P(()=>N(n(t)).toBe(!1),{timeout:500})}),await t(`Does not show tooltip for a real tap`,async()=>{let t=e.getByPlaceholderText(`Tap me`);await EC(`[data-testid="tap-input"]`),await new Promise(e=>setTimeout(e,300)),N(n(t)).toBe(!1)})}},Z={args:{delay:300,heading:`Press to dismiss`,description:`Hidden while pressing`},render:e=>s`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                heading=${e.heading}
                description=${e.description}
                placement=${e.placement}
                delay=${e.delay}
            >
                <cosmoz-button>Hover then press me</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `,play:async({canvas:e,step:t})=>{let n=e=>(e.getRootNode().host?.closest?.(`cosmoz-tooltip`))?.shadowRoot?.querySelector(`.cosmoz-tooltip-popover`)?.matches(`:popover-open`)??!1;await t(`Shows tooltip on hover`,async()=>{let t=e.getByShadowRole(`button`);await null.hover(t),await P(async()=>N(n(t)).toBe(!0),{timeout:1e3})}),await t(`Hides tooltip on press while visible`,async()=>{let t=e.getByShadowRole(`button`);await null.click(t),await P(async()=>N(n(t)).toBe(!1),{timeout:500})}),await t(`Does not reappear while the trigger keeps focus`,async()=>{let t=e.getByShadowRole(`button`);await new Promise(e=>setTimeout(e,500)),N(n(t)).toBe(!1)})}},Q={args:{delay:0,heading:`Touch tooltip`,description:`Never shows for touch pointers`},render:e=>s`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                heading=${e.heading}
                description=${e.description}
                placement=${e.placement}
                delay=${e.delay}
            >
                <cosmoz-button data-testid="tap-button">Tap me</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `,play:async({canvas:e,step:t})=>{let n=e=>(e.getRootNode().host?.closest?.(`cosmoz-tooltip`))?.shadowRoot?.querySelector(`.cosmoz-tooltip-popover`)?.matches(`:popover-open`)??!1;await t(`Shows tooltip for a mouse pointer`,async()=>{let t=e.getByShadowRole(`button`);await null.hover(t),await P(async()=>N(n(t)).toBe(!0),{timeout:1e3}),await null.unhover(t),await P(async()=>N(n(t)).toBe(!1),{timeout:500})}),await t(`Does not show tooltip for a real tap`,async()=>{let t=e.getByShadowRole(`button`);await EC(`[data-testid="tap-button"]`),await new Promise(e=>setTimeout(e,300)),N(n(t)).toBe(!1)})}},$={render:()=>s`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip>
                <cosmoz-button>No heading/description/slot content</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `,play:async({canvas:e,step:t})=>{await t(`Renders as pass-through without popover`,async()=>{let t=e.getByShadowRole(`button`);N(t).toBeVisible()})}},OC=[`Basic`,`HeadingOnly`,`DescriptionOnly`,`ForAttribute`,`Placements`,`CustomDelay`,`CustomContent`,`OnLinks`,`FocusWithoutHover`,`ForAttributeFocusWithoutHover`,`OnIcons`,`Disabled`,`DisabledForAttribute`,`ForAttributePointerDown`,`ForAttributeTouch`,`WrappingPointerDown`,`WrappingTouch`,`EmptyPassthrough`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
    step
  }) => {
    await step('Shows tooltip on hover', async () => {
      const button = canvas.getByShadowRole('button');
      await userEvent.hover(button);
      await waitFor(() => expect(isOpen(button)).toBe(true), {
        timeout: 1000
      });
    });
    await step('Hides tooltip on mouse leave', async () => {
      const button = canvas.getByShadowRole('button');
      await userEvent.unhover(button);
      await waitFor(() => expect(isOpen(button)).toBe(false), {
        timeout: 500
      });
    });
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
    step
  }) => {
    await step('Shows tooltip with heading only', async () => {
      const button = canvas.getByShadowRole('button');
      await userEvent.hover(button);
      await waitFor(() => expect(isOpen(button)).toBe(true), {
        timeout: 1000
      });
    });
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
    step
  }) => {
    await step('Shows tooltip when hovering span', async () => {
      const span = canvas.getByText('Hover over this text');
      await userEvent.hover(span);
      await waitFor(() => expect(isOpen(span)).toBe(true), {
        timeout: 1000
      });
    });
    await step('Shows tooltip when hovering input', async () => {
      const input = canvas.getByPlaceholderText('you@example.com');
      await userEvent.hover(input);
      await waitFor(() => expect(isOpen(input)).toBe(true), {
        timeout: 1000
      });
    });
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
    step
  }) => {
    await step('Shows tooltip immediately', async () => {
      const button = canvas.getByShadowRole('button');
      await userEvent.hover(button);
      await waitFor(() => expect(isOpen(button)).toBe(true), {
        timeout: 1000
      });
    });
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
    step
  }) => {
    await step('Should NOT show tooltip after hover out even with focus', async () => {
      const button = canvas.getByShadowRole('button');

      // Hover then click (focus), then move away
      await userEvent.hover(button);
      await userEvent.click(button);
      await userEvent.unhover(button);

      // Wait beyond the delay
      await new Promise(resolve => setTimeout(resolve, 200));
      expect(isOpen(button)).toBe(false);
    });
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
    step
  }) => {
    await step('Should NOT show tooltip after hover out even with focus', async () => {
      const input = canvas.getByPlaceholderText('Focus test input');

      // Hover then click (focus), then move away
      await userEvent.hover(input);
      await userEvent.click(input);
      await userEvent.unhover(input);

      // Wait beyond the delay
      await new Promise(resolve => setTimeout(resolve, 200));
      expect(isOpen(input)).toBe(false);
    });
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
    step
  }) => {
    await step('Should NOT show tooltip on hover when disabled', async () => {
      const button = canvas.getByShadowRole('button');
      await userEvent.hover(button);

      // Wait beyond the delay
      await new Promise(resolve => setTimeout(resolve, 200));
      expect(isOpen(button)).toBe(false);
    });
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
    step
  }) => {
    await step('Should NOT show tooltip on hover when disabled (for mode)', async () => {
      const input = canvas.getByPlaceholderText('Hover me (disabled for tooltip)');
      await userEvent.hover(input);

      // Wait beyond the delay
      await new Promise(resolve => setTimeout(resolve, 200));
      expect(isOpen(input)).toBe(false);
    });
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    delay: 300,
    heading: 'Press to dismiss',
    description: 'Hidden while pressing'
  },
  render: args => html\`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                for="press-target"
                heading=\${args.heading}
                description=\${args.description}
                placement=\${args.placement}
                delay=\${args.delay}
            ></cosmoz-tooltip>
            <input name="press-target" placeholder="Hover then press me" />
        </div>
    \`,
  play: async ({
    canvas,
    step
  }) => {
    // The for-mode popover is a light-DOM sibling of <cosmoz-tooltip>.
    const isOpen = (input: Element) => input.getRootNode().querySelector('.cosmoz-tooltip-popover')?.matches(':popover-open') ?? false;
    await step('Shows tooltip on hover', async () => {
      const input = canvas.getByPlaceholderText('Hover then press me');
      await userEvent.hover(input);
      await waitFor(() => expect(isOpen(input)).toBe(true), {
        timeout: 1000
      });
    });
    await step('Hides tooltip on press while visible', async () => {
      const input = canvas.getByPlaceholderText('Hover then press me');
      await userEvent.click(input);
      await waitFor(() => expect(isOpen(input)).toBe(false), {
        timeout: 500
      });
    });

    // The press left the pointer on the target; the input keeps focus.
    // A tooltip that re-arms (focus or pointer) would be open within
    // the 300ms delay, so close the window and assert once.
    await step('Does not reappear while the pointer stays on the target', async () => {
      const input = canvas.getByPlaceholderText('Hover then press me');
      await new Promise(resolve => setTimeout(resolve, 500));
      expect(isOpen(input)).toBe(false);
    });
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    delay: 0,
    heading: 'Touch tooltip',
    description: 'Never shows for touch pointers'
  },
  render: args => html\`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                for="touch-target"
                heading=\${args.heading}
                description=\${args.description}
                placement=\${args.placement}
                delay=\${args.delay}
            ></cosmoz-tooltip>
            <input name="touch-target" placeholder="Tap me" data-testid="tap-input" />
        </div>
    \`,
  play: async ({
    canvas,
    step
  }) => {
    // The for-mode popover is a light-DOM sibling of <cosmoz-tooltip>.
    const isOpen = (input: Element) => input.getRootNode().querySelector('.cosmoz-tooltip-popover')?.matches(':popover-open') ?? false;
    await step('Shows tooltip for a mouse pointer', async () => {
      const input = canvas.getByPlaceholderText('Tap me');
      await userEvent.hover(input);
      await waitFor(() => expect(isOpen(input)).toBe(true), {
        timeout: 1000
      });
      await userEvent.unhover(input);
      await waitFor(() => expect(isOpen(input)).toBe(false), {
        timeout: 500
      });
    });

    // A real tap exercises the whole touch path at once: the touch-pointer
    // exclusion (no hover) and the focus a tap dispatches after pointerup,
    // which lands outside the press-suppression window.
    await step('Does not show tooltip for a real tap', async () => {
      const input = canvas.getByPlaceholderText('Tap me');
      await tap('[data-testid="tap-input"]');
      await new Promise(resolve => setTimeout(resolve, 300));
      expect(isOpen(input)).toBe(false);
    });
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    delay: 300,
    heading: 'Press to dismiss',
    description: 'Hidden while pressing'
  },
  render: args => html\`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                heading=\${args.heading}
                description=\${args.description}
                placement=\${args.placement}
                delay=\${args.delay}
            >
                <cosmoz-button>Hover then press me</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    \`,
  play: async ({
    canvas,
    step
  }) => {
    // The wrapping-mode popover lives in the tooltip's shadow root.
    const isOpen = (trigger: Element) => {
      const button = (trigger.getRootNode() as ShadowRoot).host as Element;
      const tooltip = button?.closest?.('cosmoz-tooltip');
      return tooltip?.shadowRoot?.querySelector('.cosmoz-tooltip-popover')?.matches(':popover-open') ?? false;
    };
    await step('Shows tooltip on hover', async () => {
      const button = canvas.getByShadowRole('button');
      await userEvent.hover(button);
      await waitFor(async () => expect(isOpen(button)).toBe(true), {
        timeout: 1000
      });
    });
    await step('Hides tooltip on press while visible', async () => {
      const button = canvas.getByShadowRole('button');
      await userEvent.click(button);
      await waitFor(async () => expect(isOpen(button)).toBe(false), {
        timeout: 500
      });
    });
    await step('Does not reappear while the trigger keeps focus', async () => {
      const button = canvas.getByShadowRole('button');
      // The press left focus on the trigger; a tooltip that re-arms would
      // be open within the 300ms delay, so close the window and assert once.
      await new Promise(resolve => setTimeout(resolve, 500));
      expect(isOpen(button)).toBe(false);
    });
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    delay: 0,
    heading: 'Touch tooltip',
    description: 'Never shows for touch pointers'
  },
  render: args => html\`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                heading=\${args.heading}
                description=\${args.description}
                placement=\${args.placement}
                delay=\${args.delay}
            >
                <cosmoz-button data-testid="tap-button">Tap me</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    \`,
  play: async ({
    canvas,
    step
  }) => {
    // The wrapping-mode popover lives in the tooltip's shadow root.
    const isOpen = (trigger: Element) => {
      const button = (trigger.getRootNode() as ShadowRoot).host as Element;
      const tooltip = button?.closest?.('cosmoz-tooltip');
      return tooltip?.shadowRoot?.querySelector('.cosmoz-tooltip-popover')?.matches(':popover-open') ?? false;
    };
    await step('Shows tooltip for a mouse pointer', async () => {
      const button = canvas.getByShadowRole('button');
      await userEvent.hover(button);
      await waitFor(async () => expect(isOpen(button)).toBe(true), {
        timeout: 1000
      });
      await userEvent.unhover(button);
      await waitFor(async () => expect(isOpen(button)).toBe(false), {
        timeout: 500
      });
    });

    // A real tap exercises the whole touch path at once: the touch-pointer
    // exclusion (no hover) and the focus a tap dispatches after pointerup,
    // which lands outside the press-suppression window.
    await step('Does not show tooltip for a real tap', async () => {
      const button = canvas.getByShadowRole('button');
      await tap('[data-testid="tap-button"]');
      await new Promise(resolve => setTimeout(resolve, 300));
      expect(isOpen(button)).toBe(false);
    });
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip>
                <cosmoz-button>No heading/description/slot content</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    \`,
  play: async ({
    canvas,
    step
  }) => {
    await step('Renders as pass-through without popover', async () => {
      const button = canvas.getByShadowRole('button');
      expect(button).toBeVisible();
    });
  }
}`,...$.parameters?.docs?.source}}}})))()}kC();export{I as Basic,H as CustomContent,V as CustomDelay,R as DescriptionOnly,q as Disabled,J as DisabledForAttribute,$ as EmptyPassthrough,W as FocusWithoutHover,z as ForAttribute,G as ForAttributeFocusWithoutHover,Y as ForAttributePointerDown,X as ForAttributeTouch,L as HeadingOnly,K as OnIcons,U as OnLinks,B as Placements,Z as WrappingPointerDown,Q as WrappingTouch,OC as __namedExportsOrder,TC as default};