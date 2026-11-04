import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{a as t,c as n,i as r,l as i,n as a,r as o,s}from"./iframe-D8ALbRLY.js";function c(e){d=e}function l(){d=null,f=0}function u(){return f++}var d,f;function p(){return(p=e((()=>{f=0})))()}var m,h,g,_,v,y,b;function x(){return(x=e((()=>{m=Symbol(`haunted.phase`),h=Symbol(`haunted.hook`),g=Symbol(`haunted.update`),_=Symbol(`haunted.commit`),v=Symbol(`haunted.effects`),y=Symbol(`haunted.layoutEffects`),b=`haunted.context`})))()}var S;function ee(){return(ee=e((()=>{p(),x(),S=class{update;host;virtual;[h];[v];[y];constructor(e,t){this.update=e,this.host=t,this[h]=new Map,this[v]=[],this[y]=[]}run(e){c(this);let t=e();return l(),t}_runEffects(e){let t=this[e];c(this);for(let e of t)e.call(this);l()}runEffects(){this._runEffects(v)}runLayoutEffects(){this._runEffects(y)}teardown(){this[h].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})))()}var te;function ne(){return(ne=e((()=>{te=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}})))()}function re(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=ae(n)}}var ie,ae,oe,se,ce;function le(){return(le=e((()=>{ee(),x(),ne(),ie=100,ae=Promise.resolve().then.bind(Promise.resolve()),oe=re(),se=re(),ce=class e{renderer;host;state;[m];_updateQueued;_active;_updateCount;_processing;static maxUpdates=ie;constructor(e,t){this.renderer=e,this.host=t,this.state=new S(this.update.bind(this),t),this[m]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new te(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,oe(()=>{let e=this.handlePhase(g);se(()=>{this.handlePhase(_,e),se(()=>{this.handlePhase(v),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[m]=e,e){case _:this.commit(t),this.runEffects(y);return;case g:return this.render();case v:return this.runEffects(v)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})))()}var C,ue,de,w;function fe(){return(fe=e((()=>{C=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},ue=e=>e?.map(e=>typeof e==`string`?C(e):e),de=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),w=de})))()}function pe(e){class t extends ce{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=ue(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``||n;Reflect.set(this,me(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var me;function he(){return(he=e((()=>{le(),fe(),me=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)})))()}function ge(e,...t){let n=u(),r=d[h],i=r.get(n);return i||(i=new e(n,d,...t),r.set(n,i)),i.update(...t)}function T(e){return ge.bind(null,e)}var E;function D(){return(D=e((()=>{p(),x(),E=class{id;state;constructor(e,t){this.id=e,this.state=t}}})))()}function _e(e){return T(class extends E{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}function ve(){return(ve=e((()=>{D()})))()}function ye(e,t){e[v].push(t)}var O;function be(){return(be=e((()=>{x(),ve(),O=_e(ye)})))()}var xe,Se;function Ce(){return(Ce=e((()=>{D(),x(),be(),xe=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,Se=T(class extends E{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,ye(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};xe(this.state.host).dispatchEvent(new CustomEvent(b,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})})))()}function we(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(b,this)}disconnectedCallback(){this.removeEventListener(b,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(Se(n))},{useShadowDOM:!1}),defaultValue:t};return n}}function Te(){return(Te=e((()=>{x(),Ce()})))()}var Ee;function De(){return(De=e((()=>{D(),Ee=T(class extends E{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})))()}var Oe;function ke(){return(ke=e((()=>{De(),Oe=(e,t)=>Ee(()=>e,t)})))()}function Ae(e,t){e[y].push(t)}function je(){return(je=e((()=>{x(),ve(),_e(Ae)})))()}var Me;function Ne(){return(Ne=e((()=>{D(),Me=T(class extends E{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})))()}function Pe(){return(Pe=e((()=>{D(),T(class extends E{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})))()}var Fe;function Ie(){return(Ie=e((()=>{D(),Fe=/([A-Z])/gu,T(class extends E{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Fe,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);(t||!a.defaultPrevented)&&(Object.is(n,r)||(this.state.host[this.property]=r))}})})))()}function Le(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function Re(e){return Ee(()=>Le(e),[])}function ze(){return(ze=e((()=>{De()})))()}function Be(){return(Be=e((()=>{D(),T(class extends E{update(){return this.state.host}})})))()}function Ve({render:e}){let t=pe(e);return{component:t,createContext:we(t)}}function He(){return(He=e((()=>{he(),Te(),ke(),be(),je(),Ne(),Pe(),De(),Ce(),Ie(),ze(),Be(),le()})))()}var Ue,We,Ge;function Ke(){return(Ke=e((()=>{Ue={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},We=e=>(...t)=>({_$litDirective$:e,values:t}),Ge=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}})))()}function qe(e){this._$AN===void 0?this._$AM=e:(A(this),this._$AM=e,Ye(this))}function Je(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)k(r[e],!1),A(r[e]);else r!=null&&(k(r,!1),A(r))}else k(this,e)}}var k,A,Ye,Xe,Ze;function Qe(){return(Qe=e((()=>{a(),Ke(),k=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),k(e,t);return!0},A=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Ye=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Xe(t)}},Xe=e=>{e.type==Ue.CHILD&&(e._$AP??=Je,e._$AQ??=qe)},Ze=class extends Ge{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Ye(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(k(this,e),A(this))}setValue(e){if(o(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}})))()}function $e(){return($e=e((()=>{Ke(),n(),Qe(),le(),Array.prototype.includes})))()}var et,tt;function nt(){return(nt=e((()=>{n(),He(),$e(),{component:et,createContext:tt}=Ve({render:t})})))()}function j(){return(j=e((()=>{nt(),He(),fe()})))()}var rt;function it(){return(it=e((()=>{j(),rt=C(w`
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
`)})))()}var M;function N(){return(N=e((()=>{n(),M=e=>e??r})))()}var at;function ot(){return(ot=e((()=>{j(),at=w`
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
`})))()}var st;function ct(){return(ct=e((()=>{ot(),j(),st=w`
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
		${at}
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
`})))()}var lt,ut;function dt(){return(dt=e((()=>{it(),j(),n(),N(),ct(),lt=[`variant`,`size`,`disabled`,`full-width`,`type`,`value`,`href`,`target`,`rel`,`download`],ut=e=>{let t=e.hasAttribute(`disabled`),n=e.getAttribute(`type`)||`button`,i=e.getAttribute(`href`);O(()=>{let t=t=>{e.hasAttribute(`disabled`)&&t.stopImmediatePropagation()};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[]);let a=s`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`;if(i!=null){let n=e.getAttribute(`target`),o=e.getAttribute(`rel`),c=e.getAttribute(`download`);return s`
			<a
				href=${i}
				class="button"
				part="button"
				aria-disabled=${t?`true`:r}
				target=${M(n)}
				rel=${M(o)}
				download=${M(c)}
				>${a}</a
			>
		`}return s`
		<button type=${n} class="button" ?disabled=${t} part="button">
			${a}
		</button>
	`},customElements.define(`cosmoz-button`,et(ut,{observedAttributes:lt,styleSheets:[rt,st],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}function ft(){return(ft=e((()=>{dt()})))()}function P(e,t,n){return e?t(e):n?.(e)}function pt(){return(pt=e((()=>{n(),N()})))()}function mt(){return(mt=e((()=>{n(),N()})))()}function ht(){return(ht=e((()=>{n(),N()})))()}function gt(){return(gt=e((()=>{n(),N()})))()}function _t(){return(_t=e((()=>{n(),N()})))()}function vt(){return(vt=e((()=>{n(),N()})))()}function yt(){return(yt=e((()=>{n(),N()})))()}function bt(){return(bt=e((()=>{n(),N()})))()}function xt(){return(xt=e((()=>{n(),N()})))()}function St(){return(St=e((()=>{n(),N()})))()}function Ct(){return(Ct=e((()=>{n(),N()})))()}function wt(){return(wt=e((()=>{n(),N()})))()}function Tt(){return(Tt=e((()=>{n(),N()})))()}function Et(){return(Et=e((()=>{n(),N()})))()}function Dt(){return(Dt=e((()=>{n(),N()})))()}function Ot(){return(Ot=e((()=>{n(),N()})))()}function kt(){return(kt=e((()=>{n(),N()})))()}function At(){return(At=e((()=>{n(),N()})))()}function jt(){return(jt=e((()=>{n(),N()})))()}function Mt(){return(Mt=e((()=>{n(),N()})))()}function Nt(){return(Nt=e((()=>{n(),N()})))()}function Pt(){return(Pt=e((()=>{n(),N()})))()}function Ft(){return(Ft=e((()=>{n(),N()})))()}function It(){return(It=e((()=>{n(),N()})))()}function Lt(){return(Lt=e((()=>{n(),N()})))()}function Rt(){return(Rt=e((()=>{n(),N()})))()}function zt(){return(zt=e((()=>{n(),N()})))()}function Bt(){return(Bt=e((()=>{n(),N()})))()}function Vt(){return(Vt=e((()=>{n(),N()})))()}function Ht(){return(Ht=e((()=>{n(),N()})))()}function Ut(){return(Ut=e((()=>{n(),N()})))()}function Wt(){return(Wt=e((()=>{n(),N()})))()}function Gt(){return(Gt=e((()=>{n(),N()})))()}function Kt(){return(Kt=e((()=>{n(),N()})))()}function qt(){return(qt=e((()=>{n(),N()})))()}function Jt(){return(Jt=e((()=>{n(),N()})))()}function Yt(){return(Yt=e((()=>{n(),N()})))()}function Xt(){return(Xt=e((()=>{n(),N()})))()}function Zt(){return(Zt=e((()=>{n(),N()})))()}function Qt(){return(Qt=e((()=>{n(),N()})))()}function $t(){return($t=e((()=>{n(),N()})))()}function en(){return(en=e((()=>{n(),N()})))()}function tn(){return(tn=e((()=>{n(),N()})))()}function nn(){return(nn=e((()=>{n(),N()})))()}function rn(){return(rn=e((()=>{n(),N()})))()}function an(){return(an=e((()=>{n(),N()})))()}function on(){return(on=e((()=>{n(),N()})))()}function sn(){return(sn=e((()=>{n(),N()})))()}function cn(){return(cn=e((()=>{n(),N()})))()}function ln(){return(ln=e((()=>{n(),N()})))()}function un(){return(un=e((()=>{n(),N()})))()}function dn(){return(dn=e((()=>{n(),N()})))()}function fn(){return(fn=e((()=>{n(),N()})))()}function pn(){return(pn=e((()=>{n(),N()})))()}function mn(){return(mn=e((()=>{n(),N()})))()}function hn(){return(hn=e((()=>{n(),N()})))()}function gn(){return(gn=e((()=>{n(),N()})))()}function _n(){return(_n=e((()=>{n(),N()})))()}function vn(){return(vn=e((()=>{n(),N()})))()}function yn(){return(yn=e((()=>{n(),N()})))()}function bn(){return(bn=e((()=>{n(),N()})))()}function xn(){return(xn=e((()=>{n(),N()})))()}function Sn(){return(Sn=e((()=>{n(),N()})))()}function Cn(){return(Cn=e((()=>{n(),N()})))()}function wn(){return(wn=e((()=>{n(),N()})))()}function Tn(){return(Tn=e((()=>{n(),N()})))()}function En(){return(En=e((()=>{n(),N()})))()}function Dn(){return(Dn=e((()=>{n(),N()})))()}function On(){return(On=e((()=>{n(),N()})))()}function kn(){return(kn=e((()=>{n(),N()})))()}function An(){return(An=e((()=>{n(),N()})))()}function jn(){return(jn=e((()=>{n(),N()})))()}function Mn(){return(Mn=e((()=>{n(),N()})))()}function Nn(){return(Nn=e((()=>{n(),N()})))()}function Pn(){return(Pn=e((()=>{n(),N()})))()}function Fn(){return(Fn=e((()=>{n(),N()})))()}function In(){return(In=e((()=>{n(),N()})))()}function Ln(){return(Ln=e((()=>{n(),N()})))()}function Rn(){return(Rn=e((()=>{n(),N()})))()}function zn(){return(zn=e((()=>{n(),N()})))()}function Bn(){return(Bn=e((()=>{n(),N()})))()}function Vn(){return(Vn=e((()=>{n(),N()})))()}function Hn(){return(Hn=e((()=>{n(),N()})))()}function Un(){return(Un=e((()=>{n(),N()})))()}function Wn(){return(Wn=e((()=>{n(),N()})))()}function Gn(){return(Gn=e((()=>{n(),N()})))()}function Kn(){return(Kn=e((()=>{n(),N()})))()}function qn(){return(qn=e((()=>{n(),N()})))()}function Jn(){return(Jn=e((()=>{n(),N()})))()}function Yn(){return(Yn=e((()=>{n(),N()})))()}function Xn(){return(Xn=e((()=>{n(),N()})))()}function Zn(){return(Zn=e((()=>{n(),N()})))()}function Qn(){return(Qn=e((()=>{n(),N()})))()}function $n(){return($n=e((()=>{n(),N()})))()}function er(){return(er=e((()=>{n(),N()})))()}function tr(){return(tr=e((()=>{n(),N()})))()}function nr(){return(nr=e((()=>{n(),N()})))()}function rr(){return(rr=e((()=>{n(),N()})))()}function ir(){return(ir=e((()=>{n(),N()})))()}function ar(){return(ar=e((()=>{n(),N()})))()}function or(){return(or=e((()=>{n(),N()})))()}function sr(){return(sr=e((()=>{n(),N()})))()}function cr(){return(cr=e((()=>{n(),N()})))()}function lr(){return(lr=e((()=>{n(),N()})))()}function ur(){return(ur=e((()=>{n(),N()})))()}function dr(){return(dr=e((()=>{n(),N()})))()}function fr(){return(fr=e((()=>{n(),N()})))()}function pr(){return(pr=e((()=>{n(),N()})))()}function mr(){return(mr=e((()=>{n(),N()})))()}function hr(){return(hr=e((()=>{n(),N()})))()}function gr(){return(gr=e((()=>{n(),N()})))()}function _r(){return(_r=e((()=>{n(),N()})))()}function vr(){return(vr=e((()=>{n(),N()})))()}function yr(){return(yr=e((()=>{n(),N()})))()}function br(){return(br=e((()=>{n(),N()})))()}function xr(){return(xr=e((()=>{n(),N()})))()}function Sr(){return(Sr=e((()=>{n(),N()})))()}function Cr(){return(Cr=e((()=>{n(),N()})))()}function wr(){return(wr=e((()=>{n(),N()})))()}function Tr(){return(Tr=e((()=>{n(),N()})))()}function Er(){return(Er=e((()=>{n(),N()})))()}function Dr(){return(Dr=e((()=>{n(),N()})))()}function Or(){return(Or=e((()=>{n(),N()})))()}function kr(){return(kr=e((()=>{n(),N()})))()}function Ar(){return(Ar=e((()=>{n(),N()})))()}function jr(){return(jr=e((()=>{n(),N()})))()}function Mr(){return(Mr=e((()=>{n(),N()})))()}function Nr(){return(Nr=e((()=>{n(),N()})))()}function Pr(){return(Pr=e((()=>{n(),N()})))()}function Fr(){return(Fr=e((()=>{n(),N()})))()}function Ir(){return(Ir=e((()=>{n(),N()})))()}function Lr(){return(Lr=e((()=>{n(),N()})))()}function Rr(){return(Rr=e((()=>{n(),N()})))()}function zr(){return(zr=e((()=>{n(),N()})))()}function Br(){return(Br=e((()=>{n(),N()})))()}function Vr(){return(Vr=e((()=>{n(),N()})))()}function Hr(){return(Hr=e((()=>{n(),N()})))()}function Ur(){return(Ur=e((()=>{n(),N()})))()}function Wr(){return(Wr=e((()=>{n(),N()})))()}function Gr(){return(Gr=e((()=>{n(),N()})))()}function Kr(){return(Kr=e((()=>{n(),N()})))()}function qr(){return(qr=e((()=>{n(),N()})))()}function Jr(){return(Jr=e((()=>{n(),N()})))()}function Yr(){return(Yr=e((()=>{n(),N()})))()}function Xr(){return(Xr=e((()=>{n(),N()})))()}function Zr(){return(Zr=e((()=>{n(),N()})))()}function Qr(){return(Qr=e((()=>{n(),N()})))()}function $r(){return($r=e((()=>{n(),N()})))()}function ei(){return(ei=e((()=>{n(),N()})))()}function ti(){return(ti=e((()=>{n(),N()})))()}function ni(){return(ni=e((()=>{n(),N()})))()}function ri(){return(ri=e((()=>{n(),N()})))()}function ii(){return(ii=e((()=>{n(),N()})))()}function ai(){return(ai=e((()=>{n(),N()})))()}function oi(){return(oi=e((()=>{n(),N()})))()}function si(){return(si=e((()=>{n(),N()})))()}function ci(){return(ci=e((()=>{n(),N()})))()}function li(){return(li=e((()=>{n(),N()})))()}function ui(){return(ui=e((()=>{n(),N()})))()}function di(){return(di=e((()=>{n(),N()})))()}function fi(){return(fi=e((()=>{n(),N()})))()}function pi(){return(pi=e((()=>{n(),N()})))()}function mi(){return(mi=e((()=>{n(),N()})))()}function hi(){return(hi=e((()=>{n(),N()})))()}function gi(){return(gi=e((()=>{n(),N()})))()}function _i(){return(_i=e((()=>{n(),N()})))()}function vi(){return(vi=e((()=>{n(),N()})))()}function yi(){return(yi=e((()=>{n(),N()})))()}function bi(){return(bi=e((()=>{n(),N()})))()}function xi(){return(xi=e((()=>{n(),N()})))()}function Si(){return(Si=e((()=>{n(),N()})))()}function Ci(){return(Ci=e((()=>{n(),N()})))()}function wi(){return(wi=e((()=>{n(),N()})))()}function Ti(){return(Ti=e((()=>{n(),N()})))()}function Ei(){return(Ei=e((()=>{n(),N()})))()}function Di(){return(Di=e((()=>{n(),N()})))()}function Oi(){return(Oi=e((()=>{n(),N()})))()}function ki(){return(ki=e((()=>{n(),N()})))()}function Ai(){return(Ai=e((()=>{n(),N()})))()}function ji(){return(ji=e((()=>{n(),N()})))()}function Mi(){return(Mi=e((()=>{n(),N()})))()}function Ni(){return(Ni=e((()=>{n(),N()})))()}function Pi(){return(Pi=e((()=>{n(),N()})))()}function Fi(){return(Fi=e((()=>{n(),N()})))()}function Ii(){return(Ii=e((()=>{n(),N()})))()}function Li(){return(Li=e((()=>{n(),N()})))()}function Ri(){return(Ri=e((()=>{n(),N()})))()}function zi(){return(zi=e((()=>{n(),N()})))()}function Bi(){return(Bi=e((()=>{n(),N()})))()}function Vi(){return(Vi=e((()=>{n(),N()})))()}function Hi(){return(Hi=e((()=>{n(),N()})))()}function Ui(){return(Ui=e((()=>{n(),N()})))()}function Wi(){return(Wi=e((()=>{n(),N()})))()}function Gi(){return(Gi=e((()=>{n(),N()})))()}function Ki(){return(Ki=e((()=>{n(),N()})))()}function qi(){return(qi=e((()=>{n(),N()})))()}function Ji(){return(Ji=e((()=>{n(),N()})))()}function Yi(){return(Yi=e((()=>{n(),N()})))()}function Xi(){return(Xi=e((()=>{n(),N()})))()}function Zi(){return(Zi=e((()=>{n(),N()})))()}function Qi(){return(Qi=e((()=>{n(),N()})))()}function $i(){return($i=e((()=>{n(),N()})))()}function ea(){return(ea=e((()=>{n(),N()})))()}function ta(){return(ta=e((()=>{n(),N()})))()}function na(){return(na=e((()=>{n(),N()})))()}function ra(){return(ra=e((()=>{n(),N()})))()}function ia(){return(ia=e((()=>{n(),N()})))()}function aa(){return(aa=e((()=>{n(),N()})))()}function oa(){return(oa=e((()=>{n(),N()})))()}function sa(){return(sa=e((()=>{n(),N()})))()}function ca(){return(ca=e((()=>{n(),N()})))()}function la(){return(la=e((()=>{n(),N()})))()}function ua(){return(ua=e((()=>{n(),N()})))()}function da(){return(da=e((()=>{n(),N()})))()}function fa(){return(fa=e((()=>{n(),N()})))()}function pa(){return(pa=e((()=>{n(),N()})))()}function ma(){return(ma=e((()=>{n(),N()})))()}function ha(){return(ha=e((()=>{n(),N()})))()}function ga(){return(ga=e((()=>{n(),N()})))()}function _a(){return(_a=e((()=>{n(),N()})))()}function va(){return(va=e((()=>{n(),N()})))()}function ya(){return(ya=e((()=>{n(),N()})))()}function ba(){return(ba=e((()=>{n(),N()})))()}function xa(){return(xa=e((()=>{n(),N()})))()}function Sa(){return(Sa=e((()=>{n(),N()})))()}function Ca(){return(Ca=e((()=>{n(),N()})))()}function wa(){return(wa=e((()=>{n(),N()})))()}function Ta(){return(Ta=e((()=>{n(),N()})))()}function Ea(){return(Ea=e((()=>{n(),N()})))()}function Da(){return(Da=e((()=>{n(),N()})))()}function Oa(){return(Oa=e((()=>{n(),N()})))()}function ka(){return(ka=e((()=>{n(),N()})))()}function Aa(){return(Aa=e((()=>{n(),N()})))()}function ja(){return(ja=e((()=>{n(),N()})))()}function Ma(){return(Ma=e((()=>{n(),N()})))()}function Na(){return(Na=e((()=>{n(),N()})))()}function Pa(){return(Pa=e((()=>{n(),N()})))()}function Fa(){return(Fa=e((()=>{n(),N()})))()}function Ia(){return(Ia=e((()=>{n(),N()})))()}function La(){return(La=e((()=>{n(),N()})))()}function Ra(){return(Ra=e((()=>{n(),N()})))()}function za(){return(za=e((()=>{n(),N()})))()}function Ba(){return(Ba=e((()=>{n(),N()})))()}function Va(){return(Va=e((()=>{n(),N()})))()}function Ha(){return(Ha=e((()=>{n(),N()})))()}function Ua(){return(Ua=e((()=>{n(),N()})))()}function Wa(){return(Wa=e((()=>{n(),N()})))()}function Ga(){return(Ga=e((()=>{n(),N()})))()}function Ka(){return(Ka=e((()=>{n(),N()})))()}function qa(){return(qa=e((()=>{n(),N()})))()}function Ja(){return(Ja=e((()=>{n(),N()})))()}function Ya(){return(Ya=e((()=>{n(),N()})))()}function Xa(){return(Xa=e((()=>{n(),N()})))()}function Za(){return(Za=e((()=>{n(),N()})))()}function Qa(){return(Qa=e((()=>{n(),N()})))()}function $a(){return($a=e((()=>{n(),N()})))()}function eo(){return(eo=e((()=>{n(),N()})))()}function to(){return(to=e((()=>{n(),N()})))()}function no(){return(no=e((()=>{n(),N()})))()}function ro(){return(ro=e((()=>{n(),N()})))()}function io(){return(io=e((()=>{n(),N()})))()}function ao(){return(ao=e((()=>{n(),N()})))()}function oo(){return(oo=e((()=>{n(),N()})))()}function so(){return(so=e((()=>{n(),N()})))()}function co(){return(co=e((()=>{n(),N()})))()}function lo(){return(lo=e((()=>{n(),N()})))()}function uo(){return(uo=e((()=>{n(),N()})))()}function fo(){return(fo=e((()=>{n(),N()})))()}function po(){return(po=e((()=>{n(),N()})))()}function mo(){return(mo=e((()=>{n(),N()})))()}function ho(){return(ho=e((()=>{n(),N()})))()}function go(){return(go=e((()=>{n(),N()})))()}function _o(){return(_o=e((()=>{n(),N()})))()}function vo(){return(vo=e((()=>{n(),N()})))()}function yo(){return(yo=e((()=>{n(),N()})))()}function bo(){return(bo=e((()=>{n(),N()})))()}function xo(){return(xo=e((()=>{n(),N()})))()}function So(){return(So=e((()=>{n(),N()})))()}function Co(){return(Co=e((()=>{n(),N()})))()}function wo(){return(wo=e((()=>{n(),N()})))()}function To(){return(To=e((()=>{n(),N()})))()}function Eo(){return(Eo=e((()=>{n(),N()})))()}function Do(){return(Do=e((()=>{n(),N()})))()}function Oo(){return(Oo=e((()=>{n(),N()})))()}function ko(){return(ko=e((()=>{n(),N()})))()}function Ao(){return(Ao=e((()=>{n(),N()})))()}function jo(){return(jo=e((()=>{n(),N()})))()}function Mo(){return(Mo=e((()=>{n(),N()})))()}function No(){return(No=e((()=>{n(),N()})))()}function Po(){return(Po=e((()=>{n(),N()})))()}function Fo(){return(Fo=e((()=>{n(),N()})))()}function Io(){return(Io=e((()=>{n(),N()})))()}function Lo(){return(Lo=e((()=>{n(),N()})))()}function Ro(){return(Ro=e((()=>{n(),N()})))()}function zo(){return(zo=e((()=>{n(),N()})))()}function Bo(){return(Bo=e((()=>{n(),N()})))()}function Vo(){return(Vo=e((()=>{n(),N()})))()}function Ho(){return(Ho=e((()=>{n(),N()})))()}function Uo(){return(Uo=e((()=>{n(),N()})))()}function Wo(){return(Wo=e((()=>{n(),N()})))()}function Go(){return(Go=e((()=>{n(),N()})))()}function Ko(){return(Ko=e((()=>{n(),N()})))()}function qo(){return(qo=e((()=>{n(),N()})))()}function Jo(){return(Jo=e((()=>{n(),N()})))()}function Yo(){return(Yo=e((()=>{n(),N()})))()}function Xo(){return(Xo=e((()=>{n(),N()})))()}function Zo(){return(Zo=e((()=>{n(),N()})))()}function Qo(){return(Qo=e((()=>{n(),N()})))()}function $o(){return($o=e((()=>{n(),N()})))()}function es(){return(es=e((()=>{n(),N()})))()}function ts(){return(ts=e((()=>{n(),N()})))()}function ns(){return(ns=e((()=>{n(),N()})))()}function rs(){return(rs=e((()=>{n(),N()})))()}function is(){return(is=e((()=>{n(),N()})))()}function as(){return(as=e((()=>{n(),N()})))()}function os(){return(os=e((()=>{n(),N()})))()}function ss(){return(ss=e((()=>{n(),N()})))()}function cs(){return(cs=e((()=>{n(),N()})))()}function ls(){return(ls=e((()=>{n(),N()})))()}function us(){return(us=e((()=>{n(),N()})))()}function ds(){return(ds=e((()=>{n(),N()})))()}function fs(){return(fs=e((()=>{n(),N()})))()}function ps(){return(ps=e((()=>{n(),N()})))()}function ms(){return(ms=e((()=>{n(),N()})))()}function hs(){return(hs=e((()=>{n(),N()})))()}function gs(){return(gs=e((()=>{n(),N()})))()}function _s(){return(_s=e((()=>{n(),N()})))()}function vs(){return(vs=e((()=>{n(),N()})))()}function ys(){return(ys=e((()=>{n(),N()})))()}function bs(){return(bs=e((()=>{n(),N()})))()}function xs(){return(xs=e((()=>{n(),N()})))()}function Ss(){return(Ss=e((()=>{n(),N()})))()}function Cs(){return(Cs=e((()=>{n(),N()})))()}function ws(){return(ws=e((()=>{n(),N()})))()}function Ts(){return(Ts=e((()=>{n(),N()})))()}function Es(){return(Es=e((()=>{n(),N()})))()}function Ds(){return(Ds=e((()=>{n(),N()})))()}function Os(){return(Os=e((()=>{n(),N()})))()}function ks(){return(ks=e((()=>{n(),N()})))()}function As(){return(As=e((()=>{n(),N()})))()}function js(){return(js=e((()=>{n(),N()})))()}function Ms(){return(Ms=e((()=>{n(),N()})))()}function Ns(){return(Ns=e((()=>{n(),N()})))()}function Ps(){return(Ps=e((()=>{n(),N()})))()}function Fs(){return(Fs=e((()=>{n(),N()})))()}function Is(){return(Is=e((()=>{n(),N()})))()}function Ls(){return(Ls=e((()=>{n(),N()})))()}function Rs(){return(Rs=e((()=>{n(),N()})))()}function zs(){return(zs=e((()=>{n(),N()})))()}function Bs(){return(Bs=e((()=>{n(),N()})))()}function Vs(){return(Vs=e((()=>{n(),N()})))()}function Hs(){return(Hs=e((()=>{n(),N()})))()}function Us(){return(Us=e((()=>{n(),N()})))()}function Ws(){return(Ws=e((()=>{n(),N()})))()}function Gs(){return(Gs=e((()=>{n(),N()})))()}function Ks(){return(Ks=e((()=>{n(),N()})))()}function qs(){return(qs=e((()=>{n(),N()})))()}function Js(){return(Js=e((()=>{n(),N()})))()}function Ys(){return(Ys=e((()=>{n(),N()})))()}function Xs(){return(Xs=e((()=>{n(),N()})))()}function Zs(){return(Zs=e((()=>{n(),N()})))()}function Qs(){return(Qs=e((()=>{n(),N()})))()}function $s(){return($s=e((()=>{n(),N()})))()}function ec(){return(ec=e((()=>{n(),N()})))()}function tc(){return(tc=e((()=>{n(),N()})))()}function nc(){return(nc=e((()=>{n(),N()})))()}function rc(){return(rc=e((()=>{n(),N()})))()}function ic(){return(ic=e((()=>{n(),N()})))()}function ac(){return(ac=e((()=>{n(),N()})))()}function oc(){return(oc=e((()=>{n(),N()})))()}function sc(){return(sc=e((()=>{n(),N()})))()}function cc(){return(cc=e((()=>{n(),N()})))()}function lc(){return(lc=e((()=>{n(),N()})))()}function uc(){return(uc=e((()=>{n(),N()})))()}function dc(){return(dc=e((()=>{n(),N()})))()}function fc(){return(fc=e((()=>{n(),N()})))()}function pc(){return(pc=e((()=>{n(),N()})))()}function mc(){return(mc=e((()=>{n(),N()})))()}function hc(){return(hc=e((()=>{n(),N()})))()}function gc(){return(gc=e((()=>{n(),N()})))()}function _c(){return(_c=e((()=>{n(),N()})))()}function vc(){return(vc=e((()=>{n(),N()})))()}function yc(){return(yc=e((()=>{n(),N()})))()}function bc(){return(bc=e((()=>{n(),N()})))()}function xc(){return(xc=e((()=>{n(),N()})))()}function Sc(){return(Sc=e((()=>{n(),N()})))()}function Cc(){return(Cc=e((()=>{n(),N()})))()}function wc(){return(wc=e((()=>{n(),N()})))()}function Tc(){return(Tc=e((()=>{n(),N()})))()}function Ec(){return(Ec=e((()=>{n(),N()})))()}function Dc(){return(Dc=e((()=>{n(),N()})))()}function Oc(){return(Oc=e((()=>{n(),N()})))()}function kc(){return(kc=e((()=>{n(),N()})))()}function Ac(){return(Ac=e((()=>{n(),N()})))()}function jc(){return(jc=e((()=>{n(),N()})))()}function Mc(){return(Mc=e((()=>{n(),N()})))()}function Nc(){return(Nc=e((()=>{n(),N()})))()}function Pc(){return(Pc=e((()=>{n(),N()})))()}function Fc(){return(Fc=e((()=>{n(),N()})))()}function Ic(){return(Ic=e((()=>{n(),N()})))()}function Lc(){return(Lc=e((()=>{n(),N()})))()}function Rc(){return(Rc=e((()=>{n(),N()})))()}function zc(){return(zc=e((()=>{n(),N()})))()}function Bc(){return(Bc=e((()=>{n(),N()})))()}function Vc(){return(Vc=e((()=>{n(),N()})))()}function Hc(){return(Hc=e((()=>{n(),N()})))()}function Uc(){return(Uc=e((()=>{n(),N()})))()}function Wc(){return(Wc=e((()=>{n(),N()})))()}function Gc(){return(Gc=e((()=>{n(),N()})))()}function Kc(){return(Kc=e((()=>{n(),N()})))()}function qc(){return(qc=e((()=>{n(),N()})))()}function Jc(){return(Jc=e((()=>{n(),N()})))()}function Yc(){return(Yc=e((()=>{n(),N()})))()}function Xc(){return(Xc=e((()=>{n(),N()})))()}function Zc(){return(Zc=e((()=>{n(),N()})))()}function Qc(){return(Qc=e((()=>{n(),N()})))()}function $c(){return($c=e((()=>{n(),N()})))()}function el(){return(el=e((()=>{n(),N()})))()}function tl(){return(tl=e((()=>{n(),N()})))()}function nl(){return(nl=e((()=>{n(),N()})))()}function rl(){return(rl=e((()=>{n(),N()})))()}function il(){return(il=e((()=>{n(),N()})))()}function al(){return(al=e((()=>{n(),N()})))()}var ol;function sl(){return(sl=e((()=>{n(),N(),ol=({slot:e,title:t,className:n,width:r=`24`,height:a=`24`,styles:o}={})=>s`
  <svg
    slot=${M(e)}
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
    style=${M(o)}
  >
    ${P(t,()=>i`<title>${t}</title>`)}
    <path
      d="m21 18-1 1.094A2.71 2.71 0 0 1 18 20c-.75 0-1.47-.326-2-.906a2.716 2.716 0 0 0-2-.904c-.75 0-1.469.325-2 .904M3 20h1.675c.489 0 .733 0 .964-.055.204-.05.399-.13.578-.24.201-.123.374-.296.72-.642L19.5 6.5a2.121 2.121 0 0 0-3-3L3.937 16.063c-.346.346-.519.519-.642.72a2 2 0 0 0-.24.578c-.055.23-.055.475-.055.965V20Z"
    />
  </svg>
`})))()}function cl(){return(cl=e((()=>{n(),N()})))()}function ll(){return(ll=e((()=>{n(),N()})))()}function ul(){return(ul=e((()=>{n(),N()})))()}function dl(){return(dl=e((()=>{n(),N()})))()}function fl(){return(fl=e((()=>{n(),N()})))()}function pl(){return(pl=e((()=>{n(),N()})))()}function ml(){return(ml=e((()=>{n(),N()})))()}function hl(){return(hl=e((()=>{n(),N()})))()}function gl(){return(gl=e((()=>{n(),N()})))()}function _l(){return(_l=e((()=>{n(),N()})))()}function vl(){return(vl=e((()=>{n(),N()})))()}function yl(){return(yl=e((()=>{n(),N()})))()}function bl(){return(bl=e((()=>{n(),N()})))()}function xl(){return(xl=e((()=>{n(),N()})))()}function Sl(){return(Sl=e((()=>{n(),N()})))()}function Cl(){return(Cl=e((()=>{n(),N()})))()}function wl(){return(wl=e((()=>{n(),N()})))()}function Tl(){return(Tl=e((()=>{n(),N()})))()}function El(){return(El=e((()=>{n(),N()})))()}function Dl(){return(Dl=e((()=>{n(),N()})))()}function Ol(){return(Ol=e((()=>{n(),N()})))()}function kl(){return(kl=e((()=>{n(),N()})))()}function Al(){return(Al=e((()=>{n(),N()})))()}function jl(){return(jl=e((()=>{n(),N()})))()}function Ml(){return(Ml=e((()=>{n(),N()})))()}function Nl(){return(Nl=e((()=>{n(),N()})))()}function Pl(){return(Pl=e((()=>{n(),N()})))()}function Fl(){return(Fl=e((()=>{n(),N()})))()}function Il(){return(Il=e((()=>{n(),N()})))()}function Ll(){return(Ll=e((()=>{n(),N()})))()}function Rl(){return(Rl=e((()=>{n(),N()})))()}function zl(){return(zl=e((()=>{n(),N()})))()}function Bl(){return(Bl=e((()=>{n(),N()})))()}function Vl(){return(Vl=e((()=>{n(),N()})))()}function Hl(){return(Hl=e((()=>{n(),N()})))()}function Ul(){return(Ul=e((()=>{n(),N()})))()}function Wl(){return(Wl=e((()=>{n(),N()})))()}function Gl(){return(Gl=e((()=>{n(),N()})))()}function Kl(){return(Kl=e((()=>{n(),N()})))()}function ql(){return(ql=e((()=>{n(),N()})))()}function Jl(){return(Jl=e((()=>{n(),N()})))()}function Yl(){return(Yl=e((()=>{n(),N()})))()}function Xl(){return(Xl=e((()=>{n(),N()})))()}function Zl(){return(Zl=e((()=>{n(),N()})))()}function Ql(){return(Ql=e((()=>{n(),N()})))()}function $l(){return($l=e((()=>{n(),N()})))()}function eu(){return(eu=e((()=>{n(),N()})))()}function tu(){return(tu=e((()=>{n(),N()})))()}function nu(){return(nu=e((()=>{n(),N()})))()}function ru(){return(ru=e((()=>{n(),N()})))()}function iu(){return(iu=e((()=>{n(),N()})))()}function au(){return(au=e((()=>{n(),N()})))()}function ou(){return(ou=e((()=>{n(),N()})))()}function su(){return(su=e((()=>{n(),N()})))()}function cu(){return(cu=e((()=>{n(),N()})))()}function lu(){return(lu=e((()=>{n(),N()})))()}function uu(){return(uu=e((()=>{n(),N()})))()}function du(){return(du=e((()=>{n(),N()})))()}function fu(){return(fu=e((()=>{n(),N()})))()}function pu(){return(pu=e((()=>{n(),N()})))()}function mu(){return(mu=e((()=>{n(),N()})))()}function hu(){return(hu=e((()=>{n(),N()})))()}function gu(){return(gu=e((()=>{n(),N()})))()}function _u(){return(_u=e((()=>{n(),N()})))()}function vu(){return(vu=e((()=>{n(),N()})))()}function yu(){return(yu=e((()=>{n(),N()})))()}function bu(){return(bu=e((()=>{n(),N()})))()}function xu(){return(xu=e((()=>{n(),N()})))()}function Su(){return(Su=e((()=>{n(),N()})))()}function Cu(){return(Cu=e((()=>{n(),N()})))()}function wu(){return(wu=e((()=>{n(),N()})))()}function Tu(){return(Tu=e((()=>{n(),N()})))()}function Eu(){return(Eu=e((()=>{n(),N()})))()}function Du(){return(Du=e((()=>{n(),N()})))()}var Ou;function ku(){return(ku=e((()=>{n(),N(),Ou=({slot:e,title:t,className:n,width:r=`24`,height:a=`24`,styles:o}={})=>s`
  <svg
    slot=${M(e)}
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
    style=${M(o)}
  >
    ${P(t,()=>i`<title>${t}</title>`)}
    <path d="M6 12h12M3 6h18M9 18h6" />
  </svg>
`})))()}function Au(){return(Au=e((()=>{n(),N()})))()}function ju(){return(ju=e((()=>{n(),N()})))()}function Mu(){return(Mu=e((()=>{n(),N()})))()}function Nu(){return(Nu=e((()=>{n(),N()})))()}function Pu(){return(Pu=e((()=>{n(),N()})))()}function Fu(){return(Fu=e((()=>{n(),N()})))()}function Iu(){return(Iu=e((()=>{n(),N()})))()}function Lu(){return(Lu=e((()=>{n(),N()})))()}function Ru(){return(Ru=e((()=>{n(),N()})))()}function zu(){return(zu=e((()=>{n(),N()})))()}function Bu(){return(Bu=e((()=>{n(),N()})))()}function Vu(){return(Vu=e((()=>{n(),N()})))()}function Hu(){return(Hu=e((()=>{n(),N()})))()}function Uu(){return(Uu=e((()=>{n(),N()})))()}function Wu(){return(Wu=e((()=>{n(),N()})))()}function Gu(){return(Gu=e((()=>{n(),N()})))()}function Ku(){return(Ku=e((()=>{n(),N()})))()}function qu(){return(qu=e((()=>{n(),N()})))()}function Ju(){return(Ju=e((()=>{n(),N()})))()}function Yu(){return(Yu=e((()=>{n(),N()})))()}function Xu(){return(Xu=e((()=>{n(),N()})))()}function Zu(){return(Zu=e((()=>{n(),N()})))()}function Qu(){return(Qu=e((()=>{n(),N()})))()}function $u(){return($u=e((()=>{n(),N()})))()}function ed(){return(ed=e((()=>{n(),N()})))()}function td(){return(td=e((()=>{n(),N()})))()}function nd(){return(nd=e((()=>{n(),N()})))()}function rd(){return(rd=e((()=>{n(),N()})))()}function id(){return(id=e((()=>{n(),N()})))()}function ad(){return(ad=e((()=>{n(),N()})))()}function od(){return(od=e((()=>{n(),N()})))()}function sd(){return(sd=e((()=>{n(),N()})))()}function cd(){return(cd=e((()=>{n(),N()})))()}function ld(){return(ld=e((()=>{n(),N()})))()}function ud(){return(ud=e((()=>{n(),N()})))()}function dd(){return(dd=e((()=>{n(),N()})))()}function fd(){return(fd=e((()=>{n(),N()})))()}function pd(){return(pd=e((()=>{n(),N()})))()}function md(){return(md=e((()=>{n(),N()})))()}function hd(){return(hd=e((()=>{n(),N()})))()}function gd(){return(gd=e((()=>{n(),N()})))()}function _d(){return(_d=e((()=>{n(),N()})))()}function vd(){return(vd=e((()=>{n(),N()})))()}function yd(){return(yd=e((()=>{n(),N()})))()}function bd(){return(bd=e((()=>{n(),N()})))()}function xd(){return(xd=e((()=>{n(),N()})))()}function Sd(){return(Sd=e((()=>{n(),N()})))()}function Cd(){return(Cd=e((()=>{n(),N()})))()}function wd(){return(wd=e((()=>{n(),N()})))()}function Td(){return(Td=e((()=>{n(),N()})))()}function Ed(){return(Ed=e((()=>{n(),N()})))()}function Dd(){return(Dd=e((()=>{n(),N()})))()}function Od(){return(Od=e((()=>{n(),N()})))()}function kd(){return(kd=e((()=>{n(),N()})))()}function Ad(){return(Ad=e((()=>{n(),N()})))()}function jd(){return(jd=e((()=>{n(),N()})))()}function Md(){return(Md=e((()=>{n(),N()})))()}function Nd(){return(Nd=e((()=>{n(),N()})))()}function Pd(){return(Pd=e((()=>{n(),N()})))()}function Fd(){return(Fd=e((()=>{n(),N()})))()}function Id(){return(Id=e((()=>{n(),N()})))()}function Ld(){return(Ld=e((()=>{n(),N()})))()}function Rd(){return(Rd=e((()=>{n(),N()})))()}function zd(){return(zd=e((()=>{n(),N()})))()}function Bd(){return(Bd=e((()=>{n(),N()})))()}function Vd(){return(Vd=e((()=>{n(),N()})))()}function Hd(){return(Hd=e((()=>{n(),N()})))()}function Ud(){return(Ud=e((()=>{n(),N()})))()}function Wd(){return(Wd=e((()=>{n(),N()})))()}function Gd(){return(Gd=e((()=>{n(),N()})))()}function Kd(){return(Kd=e((()=>{n(),N()})))()}function qd(){return(qd=e((()=>{n(),N()})))()}function Jd(){return(Jd=e((()=>{n(),N()})))()}function Yd(){return(Yd=e((()=>{n(),N()})))()}function Xd(){return(Xd=e((()=>{n(),N()})))()}function Zd(){return(Zd=e((()=>{n(),N()})))()}function Qd(){return(Qd=e((()=>{n(),N()})))()}function $d(){return($d=e((()=>{n(),N()})))()}function ef(){return(ef=e((()=>{n(),N()})))()}function tf(){return(tf=e((()=>{n(),N()})))()}function nf(){return(nf=e((()=>{n(),N()})))()}function rf(){return(rf=e((()=>{n(),N()})))()}function af(){return(af=e((()=>{n(),N()})))()}function of(){return(of=e((()=>{n(),N()})))()}function sf(){return(sf=e((()=>{n(),N()})))()}function cf(){return(cf=e((()=>{n(),N()})))()}function lf(){return(lf=e((()=>{n(),N()})))()}function uf(){return(uf=e((()=>{n(),N()})))()}function df(){return(df=e((()=>{n(),N()})))()}function ff(){return(ff=e((()=>{n(),N()})))()}function pf(){return(pf=e((()=>{n(),N()})))()}function mf(){return(mf=e((()=>{n(),N()})))()}function hf(){return(hf=e((()=>{n(),N()})))()}function gf(){return(gf=e((()=>{n(),N()})))()}function _f(){return(_f=e((()=>{n(),N()})))()}function vf(){return(vf=e((()=>{n(),N()})))()}function yf(){return(yf=e((()=>{n(),N()})))()}function bf(){return(bf=e((()=>{n(),N()})))()}function xf(){return(xf=e((()=>{n(),N()})))()}function Sf(){return(Sf=e((()=>{n(),N()})))()}function Cf(){return(Cf=e((()=>{n(),N()})))()}function wf(){return(wf=e((()=>{n(),N()})))()}function Tf(){return(Tf=e((()=>{n(),N()})))()}function Ef(){return(Ef=e((()=>{n(),N()})))()}function Df(){return(Df=e((()=>{n(),N()})))()}function Of(){return(Of=e((()=>{n(),N()})))()}function kf(){return(kf=e((()=>{n(),N()})))()}function Af(){return(Af=e((()=>{n(),N()})))()}function jf(){return(jf=e((()=>{n(),N()})))()}function Mf(){return(Mf=e((()=>{n(),N()})))()}function Nf(){return(Nf=e((()=>{n(),N()})))()}function Pf(){return(Pf=e((()=>{n(),N()})))()}function Ff(){return(Ff=e((()=>{n(),N()})))()}function If(){return(If=e((()=>{n(),N()})))()}function Lf(){return(Lf=e((()=>{n(),N()})))()}function Rf(){return(Rf=e((()=>{n(),N()})))()}function zf(){return(zf=e((()=>{n(),N()})))()}function Bf(){return(Bf=e((()=>{n(),N()})))()}function Vf(){return(Vf=e((()=>{n(),N()})))()}function Hf(){return(Hf=e((()=>{n(),N()})))()}function Uf(){return(Uf=e((()=>{n(),N()})))()}function Wf(){return(Wf=e((()=>{n(),N()})))()}function Gf(){return(Gf=e((()=>{n(),N()})))()}function Kf(){return(Kf=e((()=>{n(),N()})))()}function qf(){return(qf=e((()=>{n(),N()})))()}function Jf(){return(Jf=e((()=>{n(),N()})))()}function Yf(){return(Yf=e((()=>{n(),N()})))()}function Xf(){return(Xf=e((()=>{n(),N()})))()}function Zf(){return(Zf=e((()=>{n(),N()})))()}function Qf(){return(Qf=e((()=>{n(),N()})))()}function $f(){return($f=e((()=>{n(),N()})))()}function ep(){return(ep=e((()=>{n(),N()})))()}function tp(){return(tp=e((()=>{n(),N()})))()}function np(){return(np=e((()=>{n(),N()})))()}function rp(){return(rp=e((()=>{n(),N()})))()}function ip(){return(ip=e((()=>{n(),N()})))()}function ap(){return(ap=e((()=>{n(),N()})))()}function op(){return(op=e((()=>{n(),N()})))()}function sp(){return(sp=e((()=>{n(),N()})))()}function cp(){return(cp=e((()=>{n(),N()})))()}function lp(){return(lp=e((()=>{n(),N()})))()}function up(){return(up=e((()=>{n(),N()})))()}function dp(){return(dp=e((()=>{n(),N()})))()}function fp(){return(fp=e((()=>{n(),N()})))()}function pp(){return(pp=e((()=>{n(),N()})))()}function mp(){return(mp=e((()=>{n(),N()})))()}function hp(){return(hp=e((()=>{n(),N()})))()}function gp(){return(gp=e((()=>{n(),N()})))()}function _p(){return(_p=e((()=>{n(),N()})))()}function vp(){return(vp=e((()=>{n(),N()})))()}function yp(){return(yp=e((()=>{n(),N()})))()}function bp(){return(bp=e((()=>{n(),N()})))()}function xp(){return(xp=e((()=>{n(),N()})))()}function Sp(){return(Sp=e((()=>{n(),N()})))()}function Cp(){return(Cp=e((()=>{n(),N()})))()}function wp(){return(wp=e((()=>{n(),N()})))()}function Tp(){return(Tp=e((()=>{n(),N()})))()}function Ep(){return(Ep=e((()=>{n(),N()})))()}function Dp(){return(Dp=e((()=>{n(),N()})))()}function Op(){return(Op=e((()=>{n(),N()})))()}function kp(){return(kp=e((()=>{n(),N()})))()}function Ap(){return(Ap=e((()=>{n(),N()})))()}function jp(){return(jp=e((()=>{n(),N()})))()}function Mp(){return(Mp=e((()=>{n(),N()})))()}function Np(){return(Np=e((()=>{n(),N()})))()}function Pp(){return(Pp=e((()=>{n(),N()})))()}function Fp(){return(Fp=e((()=>{n(),N()})))()}function Ip(){return(Ip=e((()=>{n(),N()})))()}function Lp(){return(Lp=e((()=>{n(),N()})))()}function Rp(){return(Rp=e((()=>{n(),N()})))()}function zp(){return(zp=e((()=>{n(),N()})))()}function Bp(){return(Bp=e((()=>{n(),N()})))()}function Vp(){return(Vp=e((()=>{n(),N()})))()}function Hp(){return(Hp=e((()=>{n(),N()})))()}function Up(){return(Up=e((()=>{n(),N()})))()}function Wp(){return(Wp=e((()=>{n(),N()})))()}function Gp(){return(Gp=e((()=>{n(),N()})))()}function Kp(){return(Kp=e((()=>{n(),N()})))()}function qp(){return(qp=e((()=>{n(),N()})))()}function Jp(){return(Jp=e((()=>{n(),N()})))()}function Yp(){return(Yp=e((()=>{n(),N()})))()}function Xp(){return(Xp=e((()=>{n(),N()})))()}function Zp(){return(Zp=e((()=>{n(),N()})))()}function Qp(){return(Qp=e((()=>{n(),N()})))()}function $p(){return($p=e((()=>{n(),N()})))()}function em(){return(em=e((()=>{n(),N()})))()}function tm(){return(tm=e((()=>{n(),N()})))()}function nm(){return(nm=e((()=>{n(),N()})))()}function rm(){return(rm=e((()=>{n(),N()})))()}function im(){return(im=e((()=>{n(),N()})))()}function am(){return(am=e((()=>{n(),N()})))()}function om(){return(om=e((()=>{n(),N()})))()}function sm(){return(sm=e((()=>{n(),N()})))()}function cm(){return(cm=e((()=>{n(),N()})))()}function lm(){return(lm=e((()=>{n(),N()})))()}function um(){return(um=e((()=>{n(),N()})))()}function dm(){return(dm=e((()=>{n(),N()})))()}function fm(){return(fm=e((()=>{n(),N()})))()}function pm(){return(pm=e((()=>{n(),N()})))()}function mm(){return(mm=e((()=>{n(),N()})))()}function hm(){return(hm=e((()=>{n(),N()})))()}function gm(){return(gm=e((()=>{n(),N()})))()}function _m(){return(_m=e((()=>{n(),N()})))()}function vm(){return(vm=e((()=>{n(),N()})))()}function ym(){return(ym=e((()=>{n(),N()})))()}function bm(){return(bm=e((()=>{n(),N()})))()}function xm(){return(xm=e((()=>{n(),N()})))()}function Sm(){return(Sm=e((()=>{n(),N()})))()}function Cm(){return(Cm=e((()=>{n(),N()})))()}function wm(){return(wm=e((()=>{n(),N()})))()}function Tm(){return(Tm=e((()=>{n(),N()})))()}function Em(){return(Em=e((()=>{n(),N()})))()}function Dm(){return(Dm=e((()=>{n(),N()})))()}function Om(){return(Om=e((()=>{n(),N()})))()}function km(){return(km=e((()=>{n(),N()})))()}function Am(){return(Am=e((()=>{n(),N()})))()}function jm(){return(jm=e((()=>{n(),N()})))()}function Mm(){return(Mm=e((()=>{n(),N()})))()}function Nm(){return(Nm=e((()=>{n(),N()})))()}function Pm(){return(Pm=e((()=>{n(),N()})))()}function Fm(){return(Fm=e((()=>{n(),N()})))()}function Im(){return(Im=e((()=>{n(),N()})))()}function Lm(){return(Lm=e((()=>{n(),N()})))()}function Rm(){return(Rm=e((()=>{n(),N()})))()}function zm(){return(zm=e((()=>{n(),N()})))()}function Bm(){return(Bm=e((()=>{n(),N()})))()}function Vm(){return(Vm=e((()=>{n(),N()})))()}function Hm(){return(Hm=e((()=>{n(),N()})))()}function Um(){return(Um=e((()=>{n(),N()})))()}function Wm(){return(Wm=e((()=>{n(),N()})))()}function Gm(){return(Gm=e((()=>{n(),N()})))()}function Km(){return(Km=e((()=>{n(),N()})))()}function qm(){return(qm=e((()=>{n(),N()})))()}function Jm(){return(Jm=e((()=>{n(),N()})))()}function Ym(){return(Ym=e((()=>{n(),N()})))()}function Xm(){return(Xm=e((()=>{n(),N()})))()}function Zm(){return(Zm=e((()=>{n(),N()})))()}function Qm(){return(Qm=e((()=>{n(),N()})))()}function $m(){return($m=e((()=>{n(),N()})))()}function eh(){return(eh=e((()=>{n(),N()})))()}function th(){return(th=e((()=>{n(),N()})))()}function nh(){return(nh=e((()=>{n(),N()})))()}function rh(){return(rh=e((()=>{n(),N()})))()}function ih(){return(ih=e((()=>{n(),N()})))()}function ah(){return(ah=e((()=>{n(),N()})))()}function oh(){return(oh=e((()=>{n(),N()})))()}function sh(){return(sh=e((()=>{n(),N()})))()}function ch(){return(ch=e((()=>{n(),N()})))()}function lh(){return(lh=e((()=>{n(),N()})))()}function uh(){return(uh=e((()=>{n(),N()})))()}function dh(){return(dh=e((()=>{n(),N()})))()}function fh(){return(fh=e((()=>{n(),N()})))()}function ph(){return(ph=e((()=>{n(),N()})))()}function mh(){return(mh=e((()=>{n(),N()})))()}function hh(){return(hh=e((()=>{n(),N()})))()}function gh(){return(gh=e((()=>{n(),N()})))()}function _h(){return(_h=e((()=>{n(),N()})))()}function vh(){return(vh=e((()=>{n(),N()})))()}function yh(){return(yh=e((()=>{n(),N()})))()}function bh(){return(bh=e((()=>{n(),N()})))()}function xh(){return(xh=e((()=>{n(),N()})))()}function Sh(){return(Sh=e((()=>{n(),N()})))()}function Ch(){return(Ch=e((()=>{n(),N()})))()}function wh(){return(wh=e((()=>{n(),N()})))()}function Th(){return(Th=e((()=>{n(),N()})))()}function Eh(){return(Eh=e((()=>{n(),N()})))()}function Dh(){return(Dh=e((()=>{n(),N()})))()}function Oh(){return(Oh=e((()=>{n(),N()})))()}function kh(){return(kh=e((()=>{n(),N()})))()}function Ah(){return(Ah=e((()=>{n(),N()})))()}function jh(){return(jh=e((()=>{n(),N()})))()}function Mh(){return(Mh=e((()=>{n(),N()})))()}function Nh(){return(Nh=e((()=>{n(),N()})))()}function Ph(){return(Ph=e((()=>{n(),N()})))()}function Fh(){return(Fh=e((()=>{n(),N()})))()}function Ih(){return(Ih=e((()=>{n(),N()})))()}function Lh(){return(Lh=e((()=>{n(),N()})))()}function Rh(){return(Rh=e((()=>{n(),N()})))()}function zh(){return(zh=e((()=>{n(),N()})))()}function Bh(){return(Bh=e((()=>{n(),N()})))()}function Vh(){return(Vh=e((()=>{n(),N()})))()}function Hh(){return(Hh=e((()=>{n(),N()})))()}function Uh(){return(Uh=e((()=>{n(),N()})))()}function Wh(){return(Wh=e((()=>{n(),N()})))()}function Gh(){return(Gh=e((()=>{n(),N()})))()}function Kh(){return(Kh=e((()=>{n(),N()})))()}function qh(){return(qh=e((()=>{n(),N()})))()}function Jh(){return(Jh=e((()=>{n(),N()})))()}function Yh(){return(Yh=e((()=>{n(),N()})))()}function Xh(){return(Xh=e((()=>{n(),N()})))()}function Zh(){return(Zh=e((()=>{n(),N()})))()}function Qh(){return(Qh=e((()=>{n(),N()})))()}function $h(){return($h=e((()=>{n(),N()})))()}function eg(){return(eg=e((()=>{n(),N()})))()}function tg(){return(tg=e((()=>{n(),N()})))()}function ng(){return(ng=e((()=>{n(),N()})))()}function rg(){return(rg=e((()=>{n(),N()})))()}function ig(){return(ig=e((()=>{n(),N()})))()}function ag(){return(ag=e((()=>{n(),N()})))()}function og(){return(og=e((()=>{n(),N()})))()}function sg(){return(sg=e((()=>{n(),N()})))()}function cg(){return(cg=e((()=>{n(),N()})))()}function lg(){return(lg=e((()=>{n(),N()})))()}function ug(){return(ug=e((()=>{n(),N()})))()}function dg(){return(dg=e((()=>{n(),N()})))()}function fg(){return(fg=e((()=>{n(),N()})))()}function pg(){return(pg=e((()=>{n(),N()})))()}function mg(){return(mg=e((()=>{n(),N()})))()}function hg(){return(hg=e((()=>{n(),N()})))()}function gg(){return(gg=e((()=>{n(),N()})))()}function _g(){return(_g=e((()=>{n(),N()})))()}function vg(){return(vg=e((()=>{n(),N()})))()}function yg(){return(yg=e((()=>{n(),N()})))()}function bg(){return(bg=e((()=>{n(),N()})))()}function xg(){return(xg=e((()=>{n(),N()})))()}function Sg(){return(Sg=e((()=>{n(),N()})))()}function Cg(){return(Cg=e((()=>{n(),N()})))()}function wg(){return(wg=e((()=>{n(),N()})))()}function Tg(){return(Tg=e((()=>{n(),N()})))()}function Eg(){return(Eg=e((()=>{n(),N()})))()}function Dg(){return(Dg=e((()=>{n(),N()})))()}function Og(){return(Og=e((()=>{n(),N()})))()}function kg(){return(kg=e((()=>{n(),N()})))()}function Ag(){return(Ag=e((()=>{n(),N()})))()}function jg(){return(jg=e((()=>{n(),N()})))()}function Mg(){return(Mg=e((()=>{n(),N()})))()}function Ng(){return(Ng=e((()=>{n(),N()})))()}function Pg(){return(Pg=e((()=>{n(),N()})))()}function Fg(){return(Fg=e((()=>{n(),N()})))()}function Ig(){return(Ig=e((()=>{n(),N()})))()}function Lg(){return(Lg=e((()=>{n(),N()})))()}function Rg(){return(Rg=e((()=>{n(),N()})))()}function zg(){return(zg=e((()=>{n(),N()})))()}function Bg(){return(Bg=e((()=>{n(),N()})))()}function Vg(){return(Vg=e((()=>{n(),N()})))()}function Hg(){return(Hg=e((()=>{n(),N()})))()}function Ug(){return(Ug=e((()=>{n(),N()})))()}function Wg(){return(Wg=e((()=>{n(),N()})))()}function Gg(){return(Gg=e((()=>{n(),N()})))()}function Kg(){return(Kg=e((()=>{n(),N()})))()}function qg(){return(qg=e((()=>{n(),N()})))()}function Jg(){return(Jg=e((()=>{n(),N()})))()}function Yg(){return(Yg=e((()=>{n(),N()})))()}function Xg(){return(Xg=e((()=>{n(),N()})))()}function Zg(){return(Zg=e((()=>{n(),N()})))()}function Qg(){return(Qg=e((()=>{n(),N()})))()}function $g(){return($g=e((()=>{n(),N()})))()}function e_(){return(e_=e((()=>{n(),N()})))()}function t_(){return(t_=e((()=>{n(),N()})))()}function n_(){return(n_=e((()=>{n(),N()})))()}function r_(){return(r_=e((()=>{n(),N()})))()}function i_(){return(i_=e((()=>{n(),N()})))()}function a_(){return(a_=e((()=>{n(),N()})))()}function o_(){return(o_=e((()=>{n(),N()})))()}function s_(){return(s_=e((()=>{n(),N()})))()}function c_(){return(c_=e((()=>{n(),N()})))()}function l_(){return(l_=e((()=>{n(),N()})))()}function u_(){return(u_=e((()=>{n(),N()})))()}function d_(){return(d_=e((()=>{n(),N()})))()}function f_(){return(f_=e((()=>{n(),N()})))()}function p_(){return(p_=e((()=>{n(),N()})))()}function m_(){return(m_=e((()=>{n(),N()})))()}function h_(){return(h_=e((()=>{n(),N()})))()}function g_(){return(g_=e((()=>{n(),N()})))()}function __(){return(__=e((()=>{n(),N()})))()}function v_(){return(v_=e((()=>{n(),N()})))()}function y_(){return(y_=e((()=>{n(),N()})))()}function b_(){return(b_=e((()=>{n(),N()})))()}function x_(){return(x_=e((()=>{n(),N()})))()}function S_(){return(S_=e((()=>{n(),N()})))()}function C_(){return(C_=e((()=>{n(),N()})))()}function w_(){return(w_=e((()=>{n(),N()})))()}function T_(){return(T_=e((()=>{n(),N()})))()}function E_(){return(E_=e((()=>{n(),N()})))()}function D_(){return(D_=e((()=>{n(),N()})))()}function O_(){return(O_=e((()=>{n(),N()})))()}function k_(){return(k_=e((()=>{n(),N()})))()}function A_(){return(A_=e((()=>{n(),N()})))()}function j_(){return(j_=e((()=>{n(),N()})))()}function M_(){return(M_=e((()=>{n(),N()})))()}function N_(){return(N_=e((()=>{n(),N()})))()}function P_(){return(P_=e((()=>{n(),N()})))()}function F_(){return(F_=e((()=>{n(),N()})))()}function I_(){return(I_=e((()=>{n(),N()})))()}function L_(){return(L_=e((()=>{n(),N()})))()}function R_(){return(R_=e((()=>{n(),N()})))()}function z_(){return(z_=e((()=>{n(),N()})))()}function B_(){return(B_=e((()=>{n(),N()})))()}function V_(){return(V_=e((()=>{n(),N()})))()}function H_(){return(H_=e((()=>{n(),N()})))()}function U_(){return(U_=e((()=>{n(),N()})))()}function W_(){return(W_=e((()=>{n(),N()})))()}function G_(){return(G_=e((()=>{n(),N()})))()}function K_(){return(K_=e((()=>{n(),N()})))()}function q_(){return(q_=e((()=>{n(),N()})))()}function J_(){return(J_=e((()=>{n(),N()})))()}function Y_(){return(Y_=e((()=>{n(),N()})))()}function X_(){return(X_=e((()=>{n(),N()})))()}function Z_(){return(Z_=e((()=>{n(),N()})))()}function Q_(){return(Q_=e((()=>{n(),N()})))()}function $_(){return($_=e((()=>{n(),N()})))()}function ev(){return(ev=e((()=>{n(),N()})))()}function tv(){return(tv=e((()=>{n(),N()})))()}function nv(){return(nv=e((()=>{n(),N()})))()}function rv(){return(rv=e((()=>{n(),N()})))()}function iv(){return(iv=e((()=>{n(),N()})))()}function av(){return(av=e((()=>{n(),N()})))()}function ov(){return(ov=e((()=>{n(),N()})))()}function sv(){return(sv=e((()=>{n(),N()})))()}function cv(){return(cv=e((()=>{n(),N()})))()}function lv(){return(lv=e((()=>{n(),N()})))()}function uv(){return(uv=e((()=>{n(),N()})))()}function dv(){return(dv=e((()=>{n(),N()})))()}function fv(){return(fv=e((()=>{n(),N()})))()}function pv(){return(pv=e((()=>{n(),N()})))()}function mv(){return(mv=e((()=>{n(),N()})))()}function hv(){return(hv=e((()=>{n(),N()})))()}function gv(){return(gv=e((()=>{n(),N()})))()}function _v(){return(_v=e((()=>{n(),N()})))()}function vv(){return(vv=e((()=>{n(),N()})))()}function yv(){return(yv=e((()=>{n(),N()})))()}function bv(){return(bv=e((()=>{n(),N()})))()}function xv(){return(xv=e((()=>{n(),N()})))()}function Sv(){return(Sv=e((()=>{n(),N()})))()}function Cv(){return(Cv=e((()=>{n(),N()})))()}function wv(){return(wv=e((()=>{n(),N()})))()}function Tv(){return(Tv=e((()=>{n(),N()})))()}function Ev(){return(Ev=e((()=>{n(),N()})))()}function Dv(){return(Dv=e((()=>{n(),N()})))()}function Ov(){return(Ov=e((()=>{n(),N()})))()}function kv(){return(kv=e((()=>{n(),N()})))()}function Av(){return(Av=e((()=>{n(),N()})))()}function jv(){return(jv=e((()=>{n(),N()})))()}function Mv(){return(Mv=e((()=>{n(),N()})))()}function Nv(){return(Nv=e((()=>{n(),N()})))()}function Pv(){return(Pv=e((()=>{n(),N()})))()}function Fv(){return(Fv=e((()=>{n(),N()})))()}function Iv(){return(Iv=e((()=>{n(),N()})))()}function Lv(){return(Lv=e((()=>{n(),N()})))()}function Rv(){return(Rv=e((()=>{n(),N()})))()}function zv(){return(zv=e((()=>{n(),N()})))()}function Bv(){return(Bv=e((()=>{n(),N()})))()}function Vv(){return(Vv=e((()=>{n(),N()})))()}function Hv(){return(Hv=e((()=>{n(),N()})))()}function Uv(){return(Uv=e((()=>{n(),N()})))()}function Wv(){return(Wv=e((()=>{n(),N()})))()}function Gv(){return(Gv=e((()=>{n(),N()})))()}function Kv(){return(Kv=e((()=>{n(),N()})))()}function qv(){return(qv=e((()=>{n(),N()})))()}function Jv(){return(Jv=e((()=>{n(),N()})))()}function Yv(){return(Yv=e((()=>{n(),N()})))()}function Xv(){return(Xv=e((()=>{n(),N()})))()}function Zv(){return(Zv=e((()=>{n(),N()})))()}function Qv(){return(Qv=e((()=>{n(),N()})))()}function $v(){return($v=e((()=>{n(),N()})))()}function ey(){return(ey=e((()=>{n(),N()})))()}function ty(){return(ty=e((()=>{n(),N()})))()}function ny(){return(ny=e((()=>{n(),N()})))()}function ry(){return(ry=e((()=>{n(),N()})))()}function iy(){return(iy=e((()=>{n(),N()})))()}function ay(){return(ay=e((()=>{n(),N()})))()}function oy(){return(oy=e((()=>{n(),N()})))()}function sy(){return(sy=e((()=>{n(),N()})))()}function cy(){return(cy=e((()=>{n(),N()})))()}function ly(){return(ly=e((()=>{n(),N()})))()}function uy(){return(uy=e((()=>{n(),N()})))()}function dy(){return(dy=e((()=>{n(),N()})))()}function fy(){return(fy=e((()=>{n(),N()})))()}function py(){return(py=e((()=>{n(),N()})))()}function my(){return(my=e((()=>{n(),N()})))()}function hy(){return(hy=e((()=>{n(),N()})))()}function gy(){return(gy=e((()=>{n(),N()})))()}function _y(){return(_y=e((()=>{n(),N()})))()}function vy(){return(vy=e((()=>{n(),N()})))()}function yy(){return(yy=e((()=>{n(),N()})))()}function by(){return(by=e((()=>{n(),N()})))()}function xy(){return(xy=e((()=>{n(),N()})))()}function Sy(){return(Sy=e((()=>{n(),N()})))()}function Cy(){return(Cy=e((()=>{n(),N()})))()}function wy(){return(wy=e((()=>{n(),N()})))()}function Ty(){return(Ty=e((()=>{n(),N()})))()}function Ey(){return(Ey=e((()=>{n(),N()})))()}function Dy(){return(Dy=e((()=>{n(),N()})))()}function Oy(){return(Oy=e((()=>{n(),N()})))()}function ky(){return(ky=e((()=>{n(),N()})))()}function Ay(){return(Ay=e((()=>{n(),N()})))()}function jy(){return(jy=e((()=>{n(),N()})))()}function My(){return(My=e((()=>{n(),N()})))()}function Ny(){return(Ny=e((()=>{n(),N()})))()}function Py(){return(Py=e((()=>{n(),N()})))()}function Fy(){return(Fy=e((()=>{n(),N()})))()}function Iy(){return(Iy=e((()=>{n(),N()})))()}function Ly(){return(Ly=e((()=>{n(),N()})))()}function Ry(){return(Ry=e((()=>{n(),N()})))()}function zy(){return(zy=e((()=>{n(),N()})))()}function By(){return(By=e((()=>{n(),N()})))()}function Vy(){return(Vy=e((()=>{n(),N()})))()}function Hy(){return(Hy=e((()=>{n(),N()})))()}function Uy(){return(Uy=e((()=>{n(),N()})))()}function Wy(){return(Wy=e((()=>{n(),N()})))()}function Gy(){return(Gy=e((()=>{n(),N()})))()}function Ky(){return(Ky=e((()=>{n(),N()})))()}function qy(){return(qy=e((()=>{n(),N()})))()}function Jy(){return(Jy=e((()=>{n(),N()})))()}function Yy(){return(Yy=e((()=>{n(),N()})))()}function Xy(){return(Xy=e((()=>{n(),N()})))()}function Zy(){return(Zy=e((()=>{n(),N()})))()}function Qy(){return(Qy=e((()=>{n(),N()})))()}function $y(){return($y=e((()=>{n(),N()})))()}function eb(){return(eb=e((()=>{n(),N()})))()}function tb(){return(tb=e((()=>{n(),N()})))()}function nb(){return(nb=e((()=>{n(),N()})))()}function rb(){return(rb=e((()=>{n(),N()})))()}function ib(){return(ib=e((()=>{n(),N()})))()}function ab(){return(ab=e((()=>{n(),N()})))()}function ob(){return(ob=e((()=>{n(),N()})))()}function sb(){return(sb=e((()=>{n(),N()})))()}function cb(){return(cb=e((()=>{n(),N()})))()}function lb(){return(lb=e((()=>{n(),N()})))()}function ub(){return(ub=e((()=>{n(),N()})))()}function db(){return(db=e((()=>{n(),N()})))()}function fb(){return(fb=e((()=>{n(),N()})))()}function pb(){return(pb=e((()=>{n(),N()})))()}function mb(){return(mb=e((()=>{n(),N()})))()}function hb(){return(hb=e((()=>{n(),N()})))()}function gb(){return(gb=e((()=>{n(),N()})))()}function _b(){return(_b=e((()=>{n(),N()})))()}function vb(){return(vb=e((()=>{n(),N()})))()}function yb(){return(yb=e((()=>{n(),N()})))()}function bb(){return(bb=e((()=>{n(),N()})))()}function xb(){return(xb=e((()=>{n(),N()})))()}function Sb(){return(Sb=e((()=>{n(),N()})))()}function Cb(){return(Cb=e((()=>{n(),N()})))()}function wb(){return(wb=e((()=>{n(),N()})))()}function Tb(){return(Tb=e((()=>{n(),N()})))()}function Eb(){return(Eb=e((()=>{n(),N()})))()}function Db(){return(Db=e((()=>{n(),N()})))()}function Ob(){return(Ob=e((()=>{n(),N()})))()}function kb(){return(kb=e((()=>{n(),N()})))()}function Ab(){return(Ab=e((()=>{n(),N()})))()}function jb(){return(jb=e((()=>{n(),N()})))()}function Mb(){return(Mb=e((()=>{n(),N()})))()}function Nb(){return(Nb=e((()=>{n(),N()})))()}function Pb(){return(Pb=e((()=>{n(),N()})))()}function Fb(){return(Fb=e((()=>{n(),N()})))()}function Ib(){return(Ib=e((()=>{n(),N()})))()}function Lb(){return(Lb=e((()=>{n(),N()})))()}function Rb(){return(Rb=e((()=>{n(),N()})))()}function zb(){return(zb=e((()=>{n(),N()})))()}function Bb(){return(Bb=e((()=>{n(),N()})))()}function Vb(){return(Vb=e((()=>{n(),N()})))()}function Hb(){return(Hb=e((()=>{n(),N()})))()}function Ub(){return(Ub=e((()=>{n(),N()})))()}function Wb(){return(Wb=e((()=>{n(),N()})))()}function Gb(){return(Gb=e((()=>{n(),N()})))()}function Kb(){return(Kb=e((()=>{n(),N()})))()}function qb(){return(qb=e((()=>{n(),N()})))()}function Jb(){return(Jb=e((()=>{n(),N()})))()}function Yb(){return(Yb=e((()=>{n(),N()})))()}function Xb(){return(Xb=e((()=>{n(),N()})))()}function Zb(){return(Zb=e((()=>{n(),N()})))()}function Qb(){return(Qb=e((()=>{n(),N()})))()}function $b(){return($b=e((()=>{n(),N()})))()}function ex(){return(ex=e((()=>{n(),N()})))()}function tx(){return(tx=e((()=>{n(),N()})))()}function nx(){return(nx=e((()=>{n(),N()})))()}function rx(){return(rx=e((()=>{n(),N()})))()}function ix(){return(ix=e((()=>{n(),N()})))()}function ax(){return(ax=e((()=>{n(),N()})))()}var ox;function sx(){return(sx=e((()=>{n(),N(),ox=({slot:e,title:t,className:n,width:r=`24`,height:a=`24`,styles:o}={})=>s`
  <svg
    slot=${M(e)}
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
    style=${M(o)}
  >
    ${P(t,()=>i`<title>${t}</title>`)}
    <path
      d="M16 6v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.48 2 13.92 2 12.8 2h-1.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C8 3.52 8 4.08 8 5.2V6m2 5.5v5m4-5v5M3 6h18m-2 0v11.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C16.72 22 15.88 22 14.2 22H9.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C5 19.72 5 18.88 5 17.2V6"
    />
  </svg>
`})))()}function cx(){return(cx=e((()=>{n(),N()})))()}function lx(){return(lx=e((()=>{n(),N()})))()}function ux(){return(ux=e((()=>{n(),N()})))()}function dx(){return(dx=e((()=>{n(),N()})))()}function fx(){return(fx=e((()=>{n(),N()})))()}function px(){return(px=e((()=>{n(),N()})))()}function mx(){return(mx=e((()=>{n(),N()})))()}function hx(){return(hx=e((()=>{n(),N()})))()}function gx(){return(gx=e((()=>{n(),N()})))()}function _x(){return(_x=e((()=>{n(),N()})))()}function vx(){return(vx=e((()=>{n(),N()})))()}function yx(){return(yx=e((()=>{n(),N()})))()}function bx(){return(bx=e((()=>{n(),N()})))()}function xx(){return(xx=e((()=>{n(),N()})))()}function Sx(){return(Sx=e((()=>{n(),N()})))()}function Cx(){return(Cx=e((()=>{n(),N()})))()}function wx(){return(wx=e((()=>{n(),N()})))()}function Tx(){return(Tx=e((()=>{n(),N()})))()}function Ex(){return(Ex=e((()=>{n(),N()})))()}function Dx(){return(Dx=e((()=>{n(),N()})))()}function Ox(){return(Ox=e((()=>{n(),N()})))()}function kx(){return(kx=e((()=>{n(),N()})))()}function Ax(){return(Ax=e((()=>{n(),N()})))()}function jx(){return(jx=e((()=>{n(),N()})))()}function Mx(){return(Mx=e((()=>{n(),N()})))()}function Nx(){return(Nx=e((()=>{n(),N()})))()}function Px(){return(Px=e((()=>{n(),N()})))()}function Fx(){return(Fx=e((()=>{n(),N()})))()}function Ix(){return(Ix=e((()=>{n(),N()})))()}function Lx(){return(Lx=e((()=>{n(),N()})))()}function Rx(){return(Rx=e((()=>{n(),N()})))()}function zx(){return(zx=e((()=>{n(),N()})))()}function Bx(){return(Bx=e((()=>{n(),N()})))()}function Vx(){return(Vx=e((()=>{n(),N()})))()}function Hx(){return(Hx=e((()=>{n(),N()})))()}function Ux(){return(Ux=e((()=>{n(),N()})))()}function Wx(){return(Wx=e((()=>{n(),N()})))()}function Gx(){return(Gx=e((()=>{n(),N()})))()}function Kx(){return(Kx=e((()=>{n(),N()})))()}function qx(){return(qx=e((()=>{n(),N()})))()}function Jx(){return(Jx=e((()=>{n(),N()})))()}function Yx(){return(Yx=e((()=>{n(),N()})))()}function Xx(){return(Xx=e((()=>{n(),N()})))()}function Zx(){return(Zx=e((()=>{n(),N()})))()}function Qx(){return(Qx=e((()=>{n(),N()})))()}function $x(){return($x=e((()=>{n(),N()})))()}function eS(){return(eS=e((()=>{n(),N()})))()}function tS(){return(tS=e((()=>{n(),N()})))()}function nS(){return(nS=e((()=>{n(),N()})))()}function rS(){return(rS=e((()=>{n(),N()})))()}function iS(){return(iS=e((()=>{n(),N()})))()}function aS(){return(aS=e((()=>{n(),N()})))()}function oS(){return(oS=e((()=>{n(),N()})))()}function sS(){return(sS=e((()=>{n(),N()})))()}function cS(){return(cS=e((()=>{n(),N()})))()}function lS(){return(lS=e((()=>{n(),N()})))()}function uS(){return(uS=e((()=>{n(),N()})))()}function dS(){return(dS=e((()=>{n(),N()})))()}function fS(){return(fS=e((()=>{n(),N()})))()}function pS(){return(pS=e((()=>{n(),N()})))()}function mS(){return(mS=e((()=>{n(),N()})))()}function hS(){return(hS=e((()=>{n(),N()})))()}function gS(){return(gS=e((()=>{n(),N()})))()}function _S(){return(_S=e((()=>{n(),N()})))()}function vS(){return(vS=e((()=>{n(),N()})))()}function yS(){return(yS=e((()=>{n(),N()})))()}function bS(){return(bS=e((()=>{n(),N()})))()}function xS(){return(xS=e((()=>{n(),N()})))()}function SS(){return(SS=e((()=>{n(),N()})))()}function CS(){return(CS=e((()=>{n(),N()})))()}function wS(){return(wS=e((()=>{n(),N()})))()}function TS(){return(TS=e((()=>{n(),N()})))()}function ES(){return(ES=e((()=>{n(),N()})))()}function DS(){return(DS=e((()=>{n(),N()})))()}function OS(){return(OS=e((()=>{n(),N()})))()}function kS(){return(kS=e((()=>{n(),N()})))()}function AS(){return(AS=e((()=>{n(),N()})))()}function jS(){return(jS=e((()=>{n(),N()})))()}function MS(){return(MS=e((()=>{n(),N()})))()}function NS(){return(NS=e((()=>{n(),N()})))()}function PS(){return(PS=e((()=>{n(),N()})))()}function FS(){return(FS=e((()=>{n(),N()})))()}function IS(){return(IS=e((()=>{n(),N()})))()}function LS(){return(LS=e((()=>{n(),N()})))()}function RS(){return(RS=e((()=>{n(),N()})))()}function zS(){return(zS=e((()=>{n(),N()})))()}function BS(){return(BS=e((()=>{n(),N()})))()}function VS(){return(VS=e((()=>{n(),N()})))()}function HS(){return(HS=e((()=>{n(),N()})))()}function US(){return(US=e((()=>{n(),N()})))()}function WS(){return(WS=e((()=>{n(),N()})))()}function GS(){return(GS=e((()=>{n(),N()})))()}function KS(){return(KS=e((()=>{n(),N()})))()}function qS(){return(qS=e((()=>{n(),N()})))()}function JS(){return(JS=e((()=>{n(),N()})))()}function YS(){return(YS=e((()=>{n(),N()})))()}function XS(){return(XS=e((()=>{n(),N()})))()}function ZS(){return(ZS=e((()=>{n(),N()})))()}function QS(){return(QS=e((()=>{n(),N()})))()}function $S(){return($S=e((()=>{n(),N()})))()}function eC(){return(eC=e((()=>{n(),N()})))()}function tC(){return(tC=e((()=>{n(),N()})))()}function nC(){return(nC=e((()=>{n(),N()})))()}function rC(){return(rC=e((()=>{n(),N()})))()}function iC(){return(iC=e((()=>{pt(),mt(),ht(),gt(),_t(),vt(),yt(),bt(),xt(),St(),Ct(),wt(),Tt(),Et(),Dt(),Ot(),kt(),At(),jt(),Mt(),Nt(),Pt(),Ft(),It(),Lt(),Rt(),zt(),Bt(),Vt(),Ht(),Ut(),Wt(),Gt(),Kt(),qt(),Jt(),Yt(),Xt(),Zt(),Qt(),$t(),en(),tn(),nn(),rn(),an(),on(),sn(),cn(),ln(),un(),dn(),fn(),pn(),mn(),hn(),gn(),_n(),vn(),yn(),bn(),xn(),Sn(),Cn(),wn(),Tn(),En(),Dn(),On(),kn(),An(),jn(),Mn(),Nn(),Pn(),Fn(),In(),Ln(),Rn(),zn(),Bn(),Vn(),Hn(),Un(),Wn(),Gn(),Kn(),qn(),Jn(),Yn(),Xn(),Zn(),Qn(),$n(),er(),tr(),nr(),rr(),ir(),ar(),or(),sr(),cr(),lr(),ur(),dr(),fr(),pr(),mr(),hr(),gr(),_r(),vr(),yr(),br(),xr(),Sr(),Cr(),wr(),Tr(),Er(),Dr(),Or(),kr(),Ar(),jr(),Mr(),Nr(),Pr(),Fr(),Ir(),Lr(),Rr(),zr(),Br(),Vr(),Hr(),Ur(),Wr(),Gr(),Kr(),qr(),Jr(),Yr(),Xr(),Zr(),Qr(),$r(),ei(),ti(),ni(),ri(),ii(),ai(),oi(),si(),ci(),li(),ui(),di(),fi(),pi(),mi(),hi(),gi(),_i(),vi(),yi(),bi(),xi(),Si(),Ci(),wi(),Ti(),Ei(),Di(),Oi(),ki(),Ai(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Li(),Ri(),zi(),Bi(),Vi(),Hi(),Ui(),Wi(),Gi(),Ki(),qi(),Ji(),Yi(),Xi(),Zi(),Qi(),$i(),ea(),ta(),na(),ra(),ia(),aa(),oa(),sa(),ca(),la(),ua(),da(),fa(),pa(),ma(),ha(),ga(),_a(),va(),ya(),ba(),xa(),Sa(),Ca(),wa(),Ta(),Ea(),Da(),Oa(),ka(),Aa(),ja(),Ma(),Na(),Pa(),Fa(),Ia(),La(),Ra(),za(),Ba(),Va(),Ha(),Ua(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Za(),Qa(),$a(),eo(),to(),no(),ro(),io(),ao(),oo(),so(),co(),lo(),uo(),fo(),po(),mo(),ho(),go(),_o(),vo(),yo(),bo(),xo(),So(),Co(),wo(),To(),Eo(),Do(),Oo(),ko(),Ao(),jo(),Mo(),No(),Po(),Fo(),Io(),Lo(),Ro(),zo(),Bo(),Vo(),Ho(),Uo(),Wo(),Go(),Ko(),qo(),Jo(),Yo(),Xo(),Zo(),Qo(),$o(),es(),ts(),ns(),rs(),is(),as(),os(),ss(),cs(),ls(),us(),ds(),fs(),ps(),ms(),hs(),gs(),_s(),vs(),ys(),bs(),xs(),Ss(),Cs(),ws(),Ts(),Es(),Ds(),Os(),ks(),As(),js(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec(),Dc(),Oc(),kc(),Ac(),jc(),Mc(),Nc(),Pc(),Fc(),Ic(),Lc(),Rc(),zc(),Bc(),Vc(),Hc(),Uc(),Wc(),Gc(),Kc(),qc(),Jc(),Yc(),Xc(),Zc(),Qc(),$c(),el(),tl(),nl(),rl(),il(),al(),sl(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),Rl(),zl(),Bl(),Vl(),Hl(),Ul(),Wl(),Gl(),Kl(),ql(),Jl(),Yl(),Xl(),Zl(),Ql(),$l(),eu(),tu(),nu(),ru(),iu(),au(),ou(),su(),cu(),lu(),uu(),du(),fu(),pu(),mu(),hu(),gu(),_u(),vu(),yu(),bu(),xu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),ku(),Au(),ju(),Mu(),Nu(),Pu(),Fu(),Iu(),Lu(),Ru(),zu(),Bu(),Vu(),Hu(),Uu(),Wu(),Gu(),Ku(),qu(),Ju(),Yu(),Xu(),Zu(),Qu(),$u(),ed(),td(),nd(),rd(),id(),ad(),od(),sd(),cd(),ld(),ud(),dd(),fd(),pd(),md(),hd(),gd(),_d(),vd(),yd(),bd(),xd(),Sd(),Cd(),wd(),Td(),Ed(),Dd(),Od(),kd(),Ad(),jd(),Md(),Nd(),Pd(),Fd(),Id(),Ld(),Rd(),zd(),Bd(),Vd(),Hd(),Ud(),Wd(),Gd(),Kd(),qd(),Jd(),Yd(),Xd(),Zd(),Qd(),$d(),ef(),tf(),nf(),rf(),af(),of(),sf(),cf(),lf(),uf(),df(),ff(),pf(),mf(),hf(),gf(),_f(),vf(),yf(),bf(),xf(),Sf(),Cf(),wf(),Tf(),Ef(),Df(),Of(),kf(),Af(),jf(),Mf(),Nf(),Pf(),Ff(),If(),Lf(),Rf(),zf(),Bf(),Vf(),Hf(),Uf(),Wf(),Gf(),Kf(),qf(),Jf(),Yf(),Xf(),Zf(),Qf(),$f(),ep(),tp(),np(),rp(),ip(),ap(),op(),sp(),cp(),lp(),up(),dp(),fp(),pp(),mp(),hp(),gp(),_p(),vp(),yp(),bp(),xp(),Sp(),Cp(),wp(),Tp(),Ep(),Dp(),Op(),kp(),Ap(),jp(),Mp(),Np(),Pp(),Fp(),Ip(),Lp(),Rp(),zp(),Bp(),Vp(),Hp(),Up(),Wp(),Gp(),Kp(),qp(),Jp(),Yp(),Xp(),Zp(),Qp(),$p(),em(),tm(),nm(),rm(),im(),am(),om(),sm(),cm(),lm(),um(),dm(),fm(),pm(),mm(),hm(),gm(),_m(),vm(),ym(),bm(),xm(),Sm(),Cm(),wm(),Tm(),Em(),Dm(),Om(),km(),Am(),jm(),Mm(),Nm(),Pm(),Fm(),Im(),Lm(),Rm(),zm(),Bm(),Vm(),Hm(),Um(),Wm(),Gm(),Km(),qm(),Jm(),Ym(),Xm(),Zm(),Qm(),$m(),eh(),th(),nh(),rh(),ih(),ah(),oh(),sh(),ch(),lh(),uh(),dh(),fh(),ph(),mh(),hh(),gh(),_h(),vh(),yh(),bh(),xh(),Sh(),Ch(),wh(),Th(),Eh(),Dh(),Oh(),kh(),Ah(),jh(),Mh(),Nh(),Ph(),Fh(),Ih(),Lh(),Rh(),zh(),Bh(),Vh(),Hh(),Uh(),Wh(),Gh(),Kh(),qh(),Jh(),Yh(),Xh(),Zh(),Qh(),$h(),eg(),tg(),ng(),rg(),ig(),ag(),og(),sg(),cg(),lg(),ug(),dg(),fg(),pg(),mg(),hg(),gg(),_g(),vg(),yg(),bg(),xg(),Sg(),Cg(),wg(),Tg(),Eg(),Dg(),Og(),kg(),Ag(),jg(),Mg(),Ng(),Pg(),Fg(),Ig(),Lg(),Rg(),zg(),Bg(),Vg(),Hg(),Ug(),Wg(),Gg(),Kg(),qg(),Jg(),Yg(),Xg(),Zg(),Qg(),$g(),e_(),t_(),n_(),r_(),i_(),a_(),o_(),s_(),c_(),l_(),u_(),d_(),f_(),p_(),m_(),h_(),g_(),__(),v_(),y_(),b_(),x_(),S_(),C_(),w_(),T_(),E_(),D_(),O_(),k_(),A_(),j_(),M_(),N_(),P_(),F_(),I_(),L_(),R_(),z_(),B_(),V_(),H_(),U_(),W_(),G_(),K_(),q_(),J_(),Y_(),X_(),Z_(),Q_(),$_(),ev(),tv(),nv(),rv(),iv(),av(),ov(),sv(),cv(),lv(),uv(),dv(),fv(),pv(),mv(),hv(),gv(),_v(),vv(),yv(),bv(),xv(),Sv(),Cv(),wv(),Tv(),Ev(),Dv(),Ov(),kv(),Av(),jv(),Mv(),Nv(),Pv(),Fv(),Iv(),Lv(),Rv(),zv(),Bv(),Vv(),Hv(),Uv(),Wv(),Gv(),Kv(),qv(),Jv(),Yv(),Xv(),Zv(),Qv(),$v(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),sy(),cy(),ly(),uy(),dy(),fy(),py(),my(),hy(),gy(),_y(),vy(),yy(),by(),xy(),Sy(),Cy(),wy(),Ty(),Ey(),Dy(),Oy(),ky(),Ay(),jy(),My(),Ny(),Py(),Fy(),Iy(),Ly(),Ry(),zy(),By(),Vy(),Hy(),Uy(),Wy(),Gy(),Ky(),qy(),Jy(),Yy(),Xy(),Zy(),Qy(),$y(),eb(),tb(),nb(),rb(),ib(),ab(),ob(),sb(),cb(),lb(),ub(),db(),fb(),pb(),mb(),hb(),gb(),_b(),vb(),yb(),bb(),xb(),Sb(),Cb(),wb(),Tb(),Eb(),Db(),Ob(),kb(),Ab(),jb(),Mb(),Nb(),Pb(),Fb(),Ib(),Lb(),Rb(),zb(),Bb(),Vb(),Hb(),Ub(),Wb(),Gb(),Kb(),qb(),Jb(),Yb(),Xb(),Zb(),Qb(),$b(),ex(),tx(),nx(),rx(),ix(),ax(),sx(),cx(),lx(),ux(),dx(),fx(),px(),mx(),hx(),gx(),_x(),vx(),yx(),bx(),xx(),Sx(),Cx(),wx(),Tx(),Ex(),Dx(),Ox(),kx(),Ax(),jx(),Mx(),Nx(),Px(),Fx(),Ix(),Lx(),Rx(),zx(),Bx(),Vx(),Hx(),Ux(),Wx(),Gx(),Kx(),qx(),Jx(),Yx(),Xx(),Zx(),Qx(),$x(),eS(),tS(),nS(),rS(),iS(),aS(),oS(),sS(),cS(),lS(),uS(),dS(),fS(),pS(),mS(),hS(),gS(),_S(),vS(),yS(),bS(),xS(),SS(),CS(),wS(),TS(),ES(),DS(),OS(),kS(),AS(),jS(),MS(),NS(),PS(),FS(),IS(),LS(),RS(),zS(),BS(),VS(),HS(),US(),WS(),GS(),KS(),qS(),JS(),YS(),XS(),ZS(),QS(),$S(),eC(),tC(),nC(),rC()})))()}var aC;function oC(){return(oC=e((()=>{j(),aC=C(w`
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
`)})))()}var sC,F;function cC(){return(cC=e((()=>{n(),Qe(),Ke(),sC=new WeakMap,F=We(class extends Ze{render(e){return r}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),r}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=sC.get(t);n===void 0&&(n=new WeakMap,sC.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?sC.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})))()}var lC;function uC(){return(uC=e((()=>{oC(),j(),n(),lC=w`
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
`,customElements.define(`cosmoz-tooltip-content`,et(()=>s`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[aC,lC]}))})))()}var dC;function fC(){return(fC=e((()=>{j(),dC=C(w`
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
`)})))()}var pC,mC;function hC(){return(hC=e((()=>{j(),n(),uC(),fC(),pC=(e,n,r)=>t(s`<cosmoz-tooltip-content>
			${P(n,()=>s`<strong slot="heading">${n}</strong>`)}
			${P(r,()=>s`<p slot="description">${r}</p>`)}
		</cosmoz-tooltip-content>`,e),mC=(e,t)=>{let{for:n,heading:r,description:i,placement:a=`top`,delay:o=300,disabled:s=!1}=t,c=Re(),l=!!(r||i)&&!s;O(()=>{if(!n||!l)return;let t=e.getRootNode(),u=t.adoptedStyleSheets??[];u.includes(dC)||(t.adoptedStyleSheets=[...u,dC]);let d=document.createElement(`div`);d.setAttribute(`popover`,`manual`),d.setAttribute(`role`,`tooltip`),d.classList.add(`cosmoz-tooltip-popover`),e.after(d),c.current=d,pC(d,r,i);let f=`[name="${n}"]`,p=`--tooltip-anchor-${n}`,m,h=!1,g=e=>{h||s||(clearTimeout(m),e.style.anchorName=p,d.style.positionAnchor=p,d.style.positionArea=a,m=window.setTimeout(()=>d.showPopover(),o))},_=()=>{clearTimeout(m),d.hidePopover()},v=e=>{let t=e.target.closest?.(f);t&&e.pointerType!==`touch`&&g(t)},y=e=>{let t=e.target.closest?.(f);if(!t)return;let n=e.relatedTarget;n&&t.contains(n)||_()},b=e=>{let t=e.target.closest?.(f);t&&g(t)},x=e=>{e.target.closest?.(f)&&_()},S=e=>{e.target.closest?.(f)&&(h=!0,_())},ee=()=>{h=!1};return t.addEventListener(`pointerover`,v),t.addEventListener(`pointerout`,y),t.addEventListener(`focusin`,b),t.addEventListener(`focusout`,x),t.addEventListener(`pointerdown`,S),t.addEventListener(`pointerup`,ee),()=>{clearTimeout(m),t.removeEventListener(`pointerover`,v),t.removeEventListener(`pointerout`,y),t.removeEventListener(`focusin`,b),t.removeEventListener(`focusout`,x),t.removeEventListener(`pointerdown`,S),t.removeEventListener(`pointerup`,ee),d.hidePopover(),d.remove(),c.current=void 0}},[n,a,o,l]),O(()=>{n&&c.current&&pC(c.current,r,i)},[r,i,n]),O(()=>{s&&c.current&&c.current.hidePopover()},[s])}})))()}var gC;function _C(){return(_C=e((()=>{j(),gC=e=>{let[t,n]=Me(!1);return O(()=>{let t=e.current;if(!t)return;let r=()=>{n(t.assignedElements().length>0)};return r(),t.addEventListener(`slotchange`,r),()=>t.removeEventListener(`slotchange`,r)},[e.current]),t}})))()}var vC,yC;function bC(){return(bC=e((()=>{oC(),j(),n(),cC(),uC(),fC(),hC(),_C(),vC=w`
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
`,yC=e=>{let{heading:t,description:n,for:i,placement:a=`top`,delay:o=300,disabled:c=!1}=e,l=Re(),u=Re(),d=Re(),f=gC(d),p=!!(t||n||f)&&!c,m=Oe(()=>{p&&(clearTimeout(u.current),u.current=window.setTimeout(()=>{l.current?.showPopover()},o))},[o,p]);O(()=>{c&&(clearTimeout(u.current),l.current?.hidePopover())},[c]);let h=Oe(()=>{clearTimeout(u.current),l.current?.hidePopover()},[]);return O(()=>{if(i)return;let t=t=>{let n=t.relatedTarget;n&&e.contains(n)||h()};return e.addEventListener(`pointerover`,m),e.addEventListener(`pointerout`,t),()=>{e.removeEventListener(`pointerover`,m),e.removeEventListener(`pointerout`,t)}},[i,m,h]),mC(e,{for:i,heading:t,description:n,placement:a,delay:o,disabled:c}),i?r:p?s`
		<slot @focusin=${m} @focusout=${h}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${a}"
			${F(l)}
		>
			<cosmoz-tooltip-content>
				${P(t,()=>s`<strong slot="heading">${t}</strong>`)}
				${P(n,()=>s`<p slot="description">${n}</p>`)}
				<slot name="content" ${F(d)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:s`
			<slot></slot>
			<slot name="content" ${F(d)} hidden></slot>
		`},customElements.define(`cosmoz-tooltip`,et(yC,{styleSheets:[aC,dC,vC],observedAttributes:[`heading`,`description`,`for`,`placement`,`delay`,`disabled`]}))})))()}var I,L,xC,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,SC;function CC(){return(CC=e((()=>{ft(),iC(),j(),bC(),{expect:I,waitFor:L}=__STORYBOOK_MODULE_TEST__,xC={title:`CosmozTooltip`,component:`cosmoz-tooltip`,tags:[`autodocs`],argTypes:{heading:{control:`text`,description:`Tooltip heading (bold text)`},description:{control:`text`,description:`Tooltip description (secondary text)`},placement:{control:`select`,options:[`top`,`bottom`,`left`,`right`,`top center`,`bottom center`],description:`Position relative to trigger`},delay:{control:`number`,description:`Delay before showing tooltip (ms)`}},args:{heading:`Tooltip Heading`,description:`This is helpful information.`,placement:`top`,delay:300}},R={render:e=>s`
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
    `,play:async({canvas:e,step:t,userEvent:n})=>{await t(`Shows tooltip on hover`,async()=>{let t=e.getByShadowRole(`button`);await n.hover(t),await e.findByShadowText(/Tooltip Heading/u,{},{timeout:1e3})}),await t(`Hides tooltip on mouse leave`,async()=>{let t=e.getByShadowRole(`button`);await n.unhover(t),await L(async()=>{let t=e.queryAllByShadowText(/Tooltip Heading/u);t.length>0&&I(t[0]).not.toBeVisible()},{timeout:500})})}},z={args:{heading:`Quick tip`,description:``},render:e=>s`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip heading=${e.heading} placement=${e.placement}>
                <cosmoz-button>Hover for heading only</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `,play:async({canvas:e,step:t,userEvent:n})=>{await t(`Shows tooltip with heading only`,async()=>{let t=e.getByShadowRole(`button`);await n.hover(t),await e.findByShadowText(/Quick tip/u,{},{timeout:1e3})})}},B={args:{heading:``,description:`Just a simple description without a heading`},render:e=>s`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                description=${e.description}
                placement=${e.placement}
            >
                <cosmoz-button>Hover for description only</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `},V={render:e=>s`
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
    `,play:async({canvas:e,step:t,userEvent:n})=>{await t(`Shows tooltip when hovering span`,async()=>{let t=e.getByText(`Hover over this text`);await n.hover(t),await e.findByShadowText(/Hover tooltip/u,{},{timeout:1e3})}),await t(`Shows tooltip when hovering input`,async()=>{let t=e.getByPlaceholderText(`you@example.com`);await n.hover(t),await e.findByShadowText(/Email format/u,{},{timeout:1e3})})}},H={render:()=>s`
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
    `},U={args:{delay:0,heading:`Instant tooltip`,description:`This appears immediately`},render:e=>s`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                heading=${e.heading}
                description=${e.description}
                delay=${e.delay}
            >
                <cosmoz-button>No delay (instant)</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `,play:async({canvas:e,step:t,userEvent:n})=>{await t(`Shows tooltip immediately`,async()=>{let t=e.getByShadowRole(`button`);await n.hover(t),await e.findByShadowText(/Instant tooltip/u,{},{timeout:200})})}},W={render:e=>s`
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
    `},G={render:e=>s`
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
    `},K={args:{delay:0,heading:`Focus test tooltip`,description:`Should not appear on focus alone`},render:e=>s`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                heading=${e.heading}
                description=${e.description}
                delay=${e.delay}
            >
                <cosmoz-button>Focus me</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `,play:async({canvas:e,step:t,userEvent:n})=>{await t(`Should NOT show tooltip after hover out even with focus`,async()=>{let t=e.getByShadowRole(`button`);await n.hover(t),await n.click(t),await n.unhover(t),await new Promise(e=>setTimeout(e,200));let r=e.queryAllByShadowText(/Focus test tooltip/u);r.length>0&&I(r[0]).not.toBeVisible()})}},q={args:{delay:0,heading:`For focus test tooltip`,description:`Should not appear on focus alone`},render:e=>s`
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
    `,play:async({canvas:e,step:t,userEvent:n})=>{await t(`Should NOT show tooltip after hover out even with focus`,async()=>{let t=e.getByPlaceholderText(`Focus test input`);await n.hover(t),await n.click(t),await n.unhover(t),await new Promise(e=>setTimeout(e,200));let r=e.queryAllByShadowText(/For focus test tooltip/u);r.length>0&&I(r[0]).not.toBeVisible()})}},J={render:e=>s`
        <div style="padding: 4rem; display: flex; gap: 1rem;">
            <cosmoz-tooltip
                heading="Edit"
                placement=${e.placement}
                delay=${e.delay}
            >
                <cosmoz-button variant="tertiary" aria-label="Edit">
                    ${ol({width:`20`,height:`20`})}
                </cosmoz-button>
            </cosmoz-tooltip>

            <cosmoz-tooltip
                heading="Delete"
                description="This action cannot be undone"
                placement=${e.placement}
                delay=${e.delay}
            >
                <cosmoz-button variant="tertiary" aria-label="Delete">
                    ${ox({width:`20`,height:`20`})}
                </cosmoz-button>
            </cosmoz-tooltip>

            <cosmoz-tooltip
                heading="Filter"
                placement=${e.placement}
                delay=${e.delay}
            >
                <cosmoz-button variant="tertiary" aria-label="Filter">
                    ${Ou({width:`20`,height:`20`})}
                </cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `},Y={args:{delay:0,heading:`Disabled tooltip`,description:`This should not appear`},render:e=>s`
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
    `,play:async({canvas:e,step:t,userEvent:n})=>{await t(`Should NOT show tooltip on hover when disabled`,async()=>{let t=e.getByShadowRole(`button`);await n.hover(t),await new Promise(e=>setTimeout(e,200));let r=e.queryAllByShadowText(/Disabled tooltip/u);r.length>0&&I(r[0]).not.toBeVisible()})}},X={args:{delay:0,heading:`Disabled for tooltip`,description:`This should not appear`},render:e=>s`
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
    `,play:async({canvas:e,step:t,userEvent:n})=>{await t(`Should NOT show tooltip on hover when disabled (for mode)`,async()=>{let t=e.getByPlaceholderText(`Hover me (disabled for tooltip)`);await n.hover(t),await new Promise(e=>setTimeout(e,200));let r=e.queryAllByShadowText(/Disabled for tooltip/u);r.length>0&&I(r[0]).not.toBeVisible()})}},Z={args:{delay:300,heading:`Press to dismiss`,description:`Hidden while pressing`},render:e=>s`
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
    `,play:async({canvas:e,step:t,userEvent:n})=>{let r=e=>e.getRootNode().querySelector(`.cosmoz-tooltip-popover`)?.matches(`:popover-open`)??!1;await t(`Shows tooltip on hover`,async()=>{let t=e.getByPlaceholderText(`Hover then press me`);await n.hover(t),await L(()=>I(r(t)).toBe(!0),{timeout:1e3})}),await t(`Hides tooltip on press while visible`,async()=>{let t=e.getByPlaceholderText(`Hover then press me`);await n.click(t),await L(()=>I(r(t)).toBe(!1),{timeout:500})}),await t(`Does not reappear while the pointer stays on the target`,async()=>{let t=e.getByPlaceholderText(`Hover then press me`);await new Promise(e=>setTimeout(e,500)),I(r(t)).toBe(!1)})}},Q={args:{delay:0,heading:`Touch tooltip`,description:`Never shows for touch pointers`},render:e=>s`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                for="touch-target"
                heading=${e.heading}
                description=${e.description}
                placement=${e.placement}
                delay=${e.delay}
            ></cosmoz-tooltip>
            <input name="touch-target" placeholder="Tap me" />
        </div>
    `,play:async({canvas:e,step:t,userEvent:n})=>{let r=e=>e.getRootNode().querySelector(`.cosmoz-tooltip-popover`)?.matches(`:popover-open`)??!1;await t(`Shows tooltip for a mouse pointer`,async()=>{let t=e.getByPlaceholderText(`Tap me`);await n.hover(t),await L(()=>I(r(t)).toBe(!0),{timeout:1e3}),await n.unhover(t),await L(()=>I(r(t)).toBe(!1),{timeout:500})}),await t(`Does not show tooltip for touch pointers`,async()=>{let t=e.getByPlaceholderText(`Tap me`);t.dispatchEvent(new PointerEvent(`pointerover`,{pointerId:1,pointerType:`touch`,bubbles:!0,composed:!0})),await new Promise(e=>setTimeout(e,250)),I(r(t)).toBe(!1)})}},$={render:()=>s`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip>
                <cosmoz-button>No heading/description/slot content</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `,play:async({canvas:e,step:t})=>{await t(`Renders as pass-through without popover`,async()=>{let t=e.getByShadowRole(`button`);I(t).toBeVisible()})}},SC=[`Basic`,`HeadingOnly`,`DescriptionOnly`,`ForAttribute`,`Placements`,`CustomDelay`,`CustomContent`,`OnLinks`,`FocusWithoutHover`,`ForAttributeFocusWithoutHover`,`OnIcons`,`Disabled`,`DisabledForAttribute`,`ForAttributePointerDown`,`ForAttributeTouch`,`EmptyPassthrough`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
    step,
    userEvent
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
            <input name="touch-target" placeholder="Tap me" />
        </div>
    \`,
  play: async ({
    canvas,
    step,
    userEvent
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

    // userEvent cannot drive touch pointers; dispatch the event that the
    // touch tap produces on the target. With delay 0 any unhandled touch
    // pointerover would open the tooltip immediately.
    await step('Does not show tooltip for touch pointers', async () => {
      const input = canvas.getByPlaceholderText('Tap me');
      input.dispatchEvent(new PointerEvent('pointerover', {
        pointerId: 1,
        pointerType: 'touch',
        bubbles: true,
        composed: true
      }));
      await new Promise(resolve => setTimeout(resolve, 250));
      expect(isOpen(input)).toBe(false);
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
}`,...$.parameters?.docs?.source}}}})))()}CC();export{R as Basic,W as CustomContent,U as CustomDelay,B as DescriptionOnly,Y as Disabled,X as DisabledForAttribute,$ as EmptyPassthrough,K as FocusWithoutHover,V as ForAttribute,q as ForAttributeFocusWithoutHover,Z as ForAttributePointerDown,Q as ForAttributeTouch,z as HeadingOnly,J as OnIcons,G as OnLinks,H as Placements,SC as __namedExportsOrder,xC as default};