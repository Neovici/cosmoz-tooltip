import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{a as t,c as n,i as r,l as i,n as a,r as o,s}from"./iframe-gUdh2PdW.js";function c(e){d=e}function l(){d=null,f=0}function u(){return f++}var d,f;function p(){return(p=e((()=>{f=0})))()}var m,h,g,ee,_,v,te;function y(){return(y=e((()=>{m=Symbol(`haunted.phase`),h=Symbol(`haunted.hook`),g=Symbol(`haunted.update`),ee=Symbol(`haunted.commit`),_=Symbol(`haunted.effects`),v=Symbol(`haunted.layoutEffects`),te=`haunted.context`})))()}var ne;function re(){return(re=e((()=>{p(),y(),ne=class{update;host;virtual;[h];[_];[v];constructor(e,t){this.update=e,this.host=t,this[h]=new Map,this[_]=[],this[v]=[]}run(e){c(this);let t=e();return l(),t}_runEffects(e){let t=this[e];c(this);for(let e of t)e.call(this);l()}runEffects(){this._runEffects(_)}runLayoutEffects(){this._runEffects(v)}teardown(){this[h].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})))()}var ie;function ae(){return(ae=e((()=>{ie=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}})))()}function oe(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=ce(n)}}var se,ce,le,ue,de;function fe(){return(fe=e((()=>{re(),y(),ae(),se=100,ce=Promise.resolve().then.bind(Promise.resolve()),le=oe(),ue=oe(),de=class e{renderer;host;state;[m];_updateQueued;_active;_updateCount;_processing;static maxUpdates=se;constructor(e,t){this.renderer=e,this.host=t,this.state=new ne(this.update.bind(this),t),this[m]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new ie(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,le(()=>{let e=this.handlePhase(g);ue(()=>{this.handlePhase(ee,e),ue(()=>{this.handlePhase(_),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[m]=e,e){case ee:this.commit(t),this.runEffects(v);return;case g:return this.render();case _:return this.runEffects(_)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})))()}var b,pe,me,x;function he(){return(he=e((()=>{b=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},pe=e=>e?.map(e=>typeof e==`string`?b(e):e),me=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),x=me})))()}function ge(e){class t extends de{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=pe(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``||n;Reflect.set(this,_e(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var _e;function ve(){return(ve=e((()=>{fe(),he(),_e=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)})))()}function ye(e,...t){let n=u(),r=d[h],i=r.get(n);return i||(i=new e(n,d,...t),r.set(n,i)),i.update(...t)}function S(e){return ye.bind(null,e)}var C;function w(){return(w=e((()=>{p(),y(),C=class{id;state;constructor(e,t){this.id=e,this.state=t}}})))()}function be(e){return S(class extends C{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}function xe(){return(xe=e((()=>{w()})))()}function Se(e,t){e[_].push(t)}var T;function Ce(){return(Ce=e((()=>{y(),xe(),T=be(Se)})))()}var we,Te;function Ee(){return(Ee=e((()=>{w(),y(),Ce(),we=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,Te=S(class extends C{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Se(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};we(this.state.host).dispatchEvent(new CustomEvent(te,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})})))()}function De(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(te,this)}disconnectedCallback(){this.removeEventListener(te,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(Te(n))},{useShadowDOM:!1}),defaultValue:t};return n}}function Oe(){return(Oe=e((()=>{y(),Ee()})))()}var ke;function E(){return(E=e((()=>{w(),ke=S(class extends C{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})))()}function Ae(){return(Ae=e((()=>{E()})))()}function je(e,t){e[v].push(t)}function Me(){return(Me=e((()=>{y(),xe(),be(je)})))()}var Ne;function Pe(){return(Pe=e((()=>{w(),Ne=S(class extends C{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})))()}function Fe(){return(Fe=e((()=>{w(),S(class extends C{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})))()}var Ie;function Le(){return(Le=e((()=>{w(),Ie=/([A-Z])/gu,S(class extends C{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Ie,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);(t||!a.defaultPrevented)&&(Object.is(n,r)||(this.state.host[this.property]=r))}})})))()}function Re(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function ze(e){return ke(()=>Re(e),[])}function Be(){return(Be=e((()=>{E()})))()}function Ve(){return(Ve=e((()=>{w(),S(class extends C{update(){return this.state.host}})})))()}function He({render:e}){let t=ge(e);return{component:t,createContext:De(t)}}function Ue(){return(Ue=e((()=>{ve(),Oe(),Ae(),Ce(),Me(),Pe(),Fe(),E(),Ee(),Le(),Be(),Ve(),fe()})))()}var We,Ge,Ke;function qe(){return(qe=e((()=>{We={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ge=e=>(...t)=>({_$litDirective$:e,values:t}),Ke=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}})))()}function Je(e){this._$AN===void 0?this._$AM=e:(O(this),this._$AM=e,Xe(this))}function Ye(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)D(r[e],!1),O(r[e]);else r!=null&&(D(r,!1),O(r))}else D(this,e)}}var D,O,Xe,Ze,Qe;function $e(){return($e=e((()=>{a(),qe(),D=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),D(e,t);return!0},O=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Xe=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Ze(t)}},Ze=e=>{e.type==We.CHILD&&(e._$AP??=Ye,e._$AQ??=Je)},Qe=class extends Ke{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Xe(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(D(this,e),O(this))}setValue(e){if(o(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}})))()}function et(){return(et=e((()=>{qe(),n(),$e(),fe(),Array.prototype.includes})))()}var tt,nt;function rt(){return(rt=e((()=>{n(),Ue(),et(),{component:tt,createContext:nt}=He({render:t})})))()}function k(){return(k=e((()=>{rt(),Ue(),he()})))()}var it;function at(){return(at=e((()=>{k(),it=b(x`
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
`)})))()}var A;function j(){return(j=e((()=>{n(),A=e=>e??r})))()}var ot;function st(){return(st=e((()=>{k(),ot=x`
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
`})))()}var ct;function lt(){return(lt=e((()=>{st(),k(),ct=x`
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
		${ot}
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
`})))()}var ut,dt;function ft(){return(ft=e((()=>{at(),k(),n(),j(),lt(),ut=[`variant`,`size`,`disabled`,`full-width`,`type`,`value`,`href`,`target`,`rel`,`download`],dt=e=>{let t=e.hasAttribute(`disabled`),n=e.getAttribute(`type`)||`button`,i=e.getAttribute(`href`);T(()=>{let t=t=>{e.hasAttribute(`disabled`)&&t.stopImmediatePropagation()};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[]);let a=s`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`;if(i!=null){let n=e.getAttribute(`target`),o=e.getAttribute(`rel`),c=e.getAttribute(`download`);return s`
			<a
				href=${i}
				class="button"
				part="button"
				aria-disabled=${t?`true`:r}
				target=${A(n)}
				rel=${A(o)}
				download=${A(c)}
				>${a}</a
			>
		`}return s`
		<button type=${n} class="button" ?disabled=${t} part="button">
			${a}
		</button>
	`},customElements.define(`cosmoz-button`,tt(dt,{observedAttributes:ut,styleSheets:[it,ct],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}function pt(){return(pt=e((()=>{ft()})))()}function M(e,t,n){return e?t(e):n?.(e)}function mt(){return(mt=e((()=>{n(),j()})))()}function ht(){return(ht=e((()=>{n(),j()})))()}function gt(){return(gt=e((()=>{n(),j()})))()}function _t(){return(_t=e((()=>{n(),j()})))()}function vt(){return(vt=e((()=>{n(),j()})))()}function yt(){return(yt=e((()=>{n(),j()})))()}function bt(){return(bt=e((()=>{n(),j()})))()}function xt(){return(xt=e((()=>{n(),j()})))()}function St(){return(St=e((()=>{n(),j()})))()}function Ct(){return(Ct=e((()=>{n(),j()})))()}function wt(){return(wt=e((()=>{n(),j()})))()}function Tt(){return(Tt=e((()=>{n(),j()})))()}function Et(){return(Et=e((()=>{n(),j()})))()}function Dt(){return(Dt=e((()=>{n(),j()})))()}function Ot(){return(Ot=e((()=>{n(),j()})))()}function kt(){return(kt=e((()=>{n(),j()})))()}function At(){return(At=e((()=>{n(),j()})))()}function jt(){return(jt=e((()=>{n(),j()})))()}function Mt(){return(Mt=e((()=>{n(),j()})))()}function Nt(){return(Nt=e((()=>{n(),j()})))()}function Pt(){return(Pt=e((()=>{n(),j()})))()}function Ft(){return(Ft=e((()=>{n(),j()})))()}function It(){return(It=e((()=>{n(),j()})))()}function Lt(){return(Lt=e((()=>{n(),j()})))()}function Rt(){return(Rt=e((()=>{n(),j()})))()}function zt(){return(zt=e((()=>{n(),j()})))()}function Bt(){return(Bt=e((()=>{n(),j()})))()}function Vt(){return(Vt=e((()=>{n(),j()})))()}function Ht(){return(Ht=e((()=>{n(),j()})))()}function Ut(){return(Ut=e((()=>{n(),j()})))()}function Wt(){return(Wt=e((()=>{n(),j()})))()}function Gt(){return(Gt=e((()=>{n(),j()})))()}function Kt(){return(Kt=e((()=>{n(),j()})))()}function qt(){return(qt=e((()=>{n(),j()})))()}function Jt(){return(Jt=e((()=>{n(),j()})))()}function Yt(){return(Yt=e((()=>{n(),j()})))()}function Xt(){return(Xt=e((()=>{n(),j()})))()}function Zt(){return(Zt=e((()=>{n(),j()})))()}function Qt(){return(Qt=e((()=>{n(),j()})))()}function $t(){return($t=e((()=>{n(),j()})))()}function en(){return(en=e((()=>{n(),j()})))()}function tn(){return(tn=e((()=>{n(),j()})))()}function nn(){return(nn=e((()=>{n(),j()})))()}function rn(){return(rn=e((()=>{n(),j()})))()}function an(){return(an=e((()=>{n(),j()})))()}function on(){return(on=e((()=>{n(),j()})))()}function sn(){return(sn=e((()=>{n(),j()})))()}function cn(){return(cn=e((()=>{n(),j()})))()}function ln(){return(ln=e((()=>{n(),j()})))()}function un(){return(un=e((()=>{n(),j()})))()}function dn(){return(dn=e((()=>{n(),j()})))()}function fn(){return(fn=e((()=>{n(),j()})))()}function pn(){return(pn=e((()=>{n(),j()})))()}function mn(){return(mn=e((()=>{n(),j()})))()}function hn(){return(hn=e((()=>{n(),j()})))()}function gn(){return(gn=e((()=>{n(),j()})))()}function _n(){return(_n=e((()=>{n(),j()})))()}function vn(){return(vn=e((()=>{n(),j()})))()}function yn(){return(yn=e((()=>{n(),j()})))()}function bn(){return(bn=e((()=>{n(),j()})))()}function xn(){return(xn=e((()=>{n(),j()})))()}function Sn(){return(Sn=e((()=>{n(),j()})))()}function Cn(){return(Cn=e((()=>{n(),j()})))()}function wn(){return(wn=e((()=>{n(),j()})))()}function Tn(){return(Tn=e((()=>{n(),j()})))()}function En(){return(En=e((()=>{n(),j()})))()}function Dn(){return(Dn=e((()=>{n(),j()})))()}function On(){return(On=e((()=>{n(),j()})))()}function kn(){return(kn=e((()=>{n(),j()})))()}function An(){return(An=e((()=>{n(),j()})))()}function jn(){return(jn=e((()=>{n(),j()})))()}function Mn(){return(Mn=e((()=>{n(),j()})))()}function Nn(){return(Nn=e((()=>{n(),j()})))()}function Pn(){return(Pn=e((()=>{n(),j()})))()}function Fn(){return(Fn=e((()=>{n(),j()})))()}function In(){return(In=e((()=>{n(),j()})))()}function Ln(){return(Ln=e((()=>{n(),j()})))()}function Rn(){return(Rn=e((()=>{n(),j()})))()}function zn(){return(zn=e((()=>{n(),j()})))()}function Bn(){return(Bn=e((()=>{n(),j()})))()}function Vn(){return(Vn=e((()=>{n(),j()})))()}function Hn(){return(Hn=e((()=>{n(),j()})))()}function Un(){return(Un=e((()=>{n(),j()})))()}function Wn(){return(Wn=e((()=>{n(),j()})))()}function Gn(){return(Gn=e((()=>{n(),j()})))()}function Kn(){return(Kn=e((()=>{n(),j()})))()}function qn(){return(qn=e((()=>{n(),j()})))()}function Jn(){return(Jn=e((()=>{n(),j()})))()}function Yn(){return(Yn=e((()=>{n(),j()})))()}function Xn(){return(Xn=e((()=>{n(),j()})))()}function Zn(){return(Zn=e((()=>{n(),j()})))()}function Qn(){return(Qn=e((()=>{n(),j()})))()}function $n(){return($n=e((()=>{n(),j()})))()}function er(){return(er=e((()=>{n(),j()})))()}function tr(){return(tr=e((()=>{n(),j()})))()}function nr(){return(nr=e((()=>{n(),j()})))()}function rr(){return(rr=e((()=>{n(),j()})))()}function ir(){return(ir=e((()=>{n(),j()})))()}function ar(){return(ar=e((()=>{n(),j()})))()}function or(){return(or=e((()=>{n(),j()})))()}function sr(){return(sr=e((()=>{n(),j()})))()}function cr(){return(cr=e((()=>{n(),j()})))()}function lr(){return(lr=e((()=>{n(),j()})))()}function ur(){return(ur=e((()=>{n(),j()})))()}function dr(){return(dr=e((()=>{n(),j()})))()}function fr(){return(fr=e((()=>{n(),j()})))()}function pr(){return(pr=e((()=>{n(),j()})))()}function mr(){return(mr=e((()=>{n(),j()})))()}function hr(){return(hr=e((()=>{n(),j()})))()}function gr(){return(gr=e((()=>{n(),j()})))()}function _r(){return(_r=e((()=>{n(),j()})))()}function vr(){return(vr=e((()=>{n(),j()})))()}function yr(){return(yr=e((()=>{n(),j()})))()}function br(){return(br=e((()=>{n(),j()})))()}function xr(){return(xr=e((()=>{n(),j()})))()}function Sr(){return(Sr=e((()=>{n(),j()})))()}function Cr(){return(Cr=e((()=>{n(),j()})))()}function wr(){return(wr=e((()=>{n(),j()})))()}function Tr(){return(Tr=e((()=>{n(),j()})))()}function Er(){return(Er=e((()=>{n(),j()})))()}function Dr(){return(Dr=e((()=>{n(),j()})))()}function Or(){return(Or=e((()=>{n(),j()})))()}function kr(){return(kr=e((()=>{n(),j()})))()}function Ar(){return(Ar=e((()=>{n(),j()})))()}function jr(){return(jr=e((()=>{n(),j()})))()}function Mr(){return(Mr=e((()=>{n(),j()})))()}function Nr(){return(Nr=e((()=>{n(),j()})))()}function Pr(){return(Pr=e((()=>{n(),j()})))()}function Fr(){return(Fr=e((()=>{n(),j()})))()}function Ir(){return(Ir=e((()=>{n(),j()})))()}function Lr(){return(Lr=e((()=>{n(),j()})))()}function Rr(){return(Rr=e((()=>{n(),j()})))()}function zr(){return(zr=e((()=>{n(),j()})))()}function Br(){return(Br=e((()=>{n(),j()})))()}function Vr(){return(Vr=e((()=>{n(),j()})))()}function Hr(){return(Hr=e((()=>{n(),j()})))()}function Ur(){return(Ur=e((()=>{n(),j()})))()}function Wr(){return(Wr=e((()=>{n(),j()})))()}function Gr(){return(Gr=e((()=>{n(),j()})))()}function Kr(){return(Kr=e((()=>{n(),j()})))()}function qr(){return(qr=e((()=>{n(),j()})))()}function Jr(){return(Jr=e((()=>{n(),j()})))()}function Yr(){return(Yr=e((()=>{n(),j()})))()}function Xr(){return(Xr=e((()=>{n(),j()})))()}function Zr(){return(Zr=e((()=>{n(),j()})))()}function Qr(){return(Qr=e((()=>{n(),j()})))()}function $r(){return($r=e((()=>{n(),j()})))()}function ei(){return(ei=e((()=>{n(),j()})))()}function ti(){return(ti=e((()=>{n(),j()})))()}function ni(){return(ni=e((()=>{n(),j()})))()}function ri(){return(ri=e((()=>{n(),j()})))()}function ii(){return(ii=e((()=>{n(),j()})))()}function ai(){return(ai=e((()=>{n(),j()})))()}function oi(){return(oi=e((()=>{n(),j()})))()}function si(){return(si=e((()=>{n(),j()})))()}function ci(){return(ci=e((()=>{n(),j()})))()}function li(){return(li=e((()=>{n(),j()})))()}function ui(){return(ui=e((()=>{n(),j()})))()}function di(){return(di=e((()=>{n(),j()})))()}function fi(){return(fi=e((()=>{n(),j()})))()}function pi(){return(pi=e((()=>{n(),j()})))()}function mi(){return(mi=e((()=>{n(),j()})))()}function hi(){return(hi=e((()=>{n(),j()})))()}function gi(){return(gi=e((()=>{n(),j()})))()}function _i(){return(_i=e((()=>{n(),j()})))()}function vi(){return(vi=e((()=>{n(),j()})))()}function yi(){return(yi=e((()=>{n(),j()})))()}function bi(){return(bi=e((()=>{n(),j()})))()}function xi(){return(xi=e((()=>{n(),j()})))()}function Si(){return(Si=e((()=>{n(),j()})))()}function Ci(){return(Ci=e((()=>{n(),j()})))()}function wi(){return(wi=e((()=>{n(),j()})))()}function Ti(){return(Ti=e((()=>{n(),j()})))()}function Ei(){return(Ei=e((()=>{n(),j()})))()}function Di(){return(Di=e((()=>{n(),j()})))()}function Oi(){return(Oi=e((()=>{n(),j()})))()}function ki(){return(ki=e((()=>{n(),j()})))()}function Ai(){return(Ai=e((()=>{n(),j()})))()}function ji(){return(ji=e((()=>{n(),j()})))()}function Mi(){return(Mi=e((()=>{n(),j()})))()}function Ni(){return(Ni=e((()=>{n(),j()})))()}function Pi(){return(Pi=e((()=>{n(),j()})))()}function Fi(){return(Fi=e((()=>{n(),j()})))()}function Ii(){return(Ii=e((()=>{n(),j()})))()}function Li(){return(Li=e((()=>{n(),j()})))()}function Ri(){return(Ri=e((()=>{n(),j()})))()}function zi(){return(zi=e((()=>{n(),j()})))()}function Bi(){return(Bi=e((()=>{n(),j()})))()}function Vi(){return(Vi=e((()=>{n(),j()})))()}function Hi(){return(Hi=e((()=>{n(),j()})))()}function Ui(){return(Ui=e((()=>{n(),j()})))()}function Wi(){return(Wi=e((()=>{n(),j()})))()}function Gi(){return(Gi=e((()=>{n(),j()})))()}function Ki(){return(Ki=e((()=>{n(),j()})))()}function qi(){return(qi=e((()=>{n(),j()})))()}function Ji(){return(Ji=e((()=>{n(),j()})))()}function Yi(){return(Yi=e((()=>{n(),j()})))()}function Xi(){return(Xi=e((()=>{n(),j()})))()}function Zi(){return(Zi=e((()=>{n(),j()})))()}function Qi(){return(Qi=e((()=>{n(),j()})))()}function $i(){return($i=e((()=>{n(),j()})))()}function ea(){return(ea=e((()=>{n(),j()})))()}function ta(){return(ta=e((()=>{n(),j()})))()}function na(){return(na=e((()=>{n(),j()})))()}function ra(){return(ra=e((()=>{n(),j()})))()}function ia(){return(ia=e((()=>{n(),j()})))()}function aa(){return(aa=e((()=>{n(),j()})))()}function oa(){return(oa=e((()=>{n(),j()})))()}function sa(){return(sa=e((()=>{n(),j()})))()}function ca(){return(ca=e((()=>{n(),j()})))()}function la(){return(la=e((()=>{n(),j()})))()}function ua(){return(ua=e((()=>{n(),j()})))()}function da(){return(da=e((()=>{n(),j()})))()}function fa(){return(fa=e((()=>{n(),j()})))()}function pa(){return(pa=e((()=>{n(),j()})))()}function ma(){return(ma=e((()=>{n(),j()})))()}function ha(){return(ha=e((()=>{n(),j()})))()}function ga(){return(ga=e((()=>{n(),j()})))()}function _a(){return(_a=e((()=>{n(),j()})))()}function va(){return(va=e((()=>{n(),j()})))()}function ya(){return(ya=e((()=>{n(),j()})))()}function ba(){return(ba=e((()=>{n(),j()})))()}function xa(){return(xa=e((()=>{n(),j()})))()}function Sa(){return(Sa=e((()=>{n(),j()})))()}function Ca(){return(Ca=e((()=>{n(),j()})))()}function wa(){return(wa=e((()=>{n(),j()})))()}function Ta(){return(Ta=e((()=>{n(),j()})))()}function Ea(){return(Ea=e((()=>{n(),j()})))()}function Da(){return(Da=e((()=>{n(),j()})))()}function Oa(){return(Oa=e((()=>{n(),j()})))()}function ka(){return(ka=e((()=>{n(),j()})))()}function Aa(){return(Aa=e((()=>{n(),j()})))()}function ja(){return(ja=e((()=>{n(),j()})))()}function Ma(){return(Ma=e((()=>{n(),j()})))()}function Na(){return(Na=e((()=>{n(),j()})))()}function Pa(){return(Pa=e((()=>{n(),j()})))()}function Fa(){return(Fa=e((()=>{n(),j()})))()}function Ia(){return(Ia=e((()=>{n(),j()})))()}function La(){return(La=e((()=>{n(),j()})))()}function Ra(){return(Ra=e((()=>{n(),j()})))()}function za(){return(za=e((()=>{n(),j()})))()}function Ba(){return(Ba=e((()=>{n(),j()})))()}function Va(){return(Va=e((()=>{n(),j()})))()}function Ha(){return(Ha=e((()=>{n(),j()})))()}function Ua(){return(Ua=e((()=>{n(),j()})))()}function Wa(){return(Wa=e((()=>{n(),j()})))()}function Ga(){return(Ga=e((()=>{n(),j()})))()}function Ka(){return(Ka=e((()=>{n(),j()})))()}function qa(){return(qa=e((()=>{n(),j()})))()}function Ja(){return(Ja=e((()=>{n(),j()})))()}function Ya(){return(Ya=e((()=>{n(),j()})))()}function Xa(){return(Xa=e((()=>{n(),j()})))()}function Za(){return(Za=e((()=>{n(),j()})))()}function Qa(){return(Qa=e((()=>{n(),j()})))()}function $a(){return($a=e((()=>{n(),j()})))()}function eo(){return(eo=e((()=>{n(),j()})))()}function to(){return(to=e((()=>{n(),j()})))()}function no(){return(no=e((()=>{n(),j()})))()}function ro(){return(ro=e((()=>{n(),j()})))()}function io(){return(io=e((()=>{n(),j()})))()}function ao(){return(ao=e((()=>{n(),j()})))()}function oo(){return(oo=e((()=>{n(),j()})))()}function so(){return(so=e((()=>{n(),j()})))()}function co(){return(co=e((()=>{n(),j()})))()}function lo(){return(lo=e((()=>{n(),j()})))()}function uo(){return(uo=e((()=>{n(),j()})))()}function fo(){return(fo=e((()=>{n(),j()})))()}function po(){return(po=e((()=>{n(),j()})))()}function mo(){return(mo=e((()=>{n(),j()})))()}function ho(){return(ho=e((()=>{n(),j()})))()}function go(){return(go=e((()=>{n(),j()})))()}function _o(){return(_o=e((()=>{n(),j()})))()}function vo(){return(vo=e((()=>{n(),j()})))()}function yo(){return(yo=e((()=>{n(),j()})))()}function bo(){return(bo=e((()=>{n(),j()})))()}function xo(){return(xo=e((()=>{n(),j()})))()}function So(){return(So=e((()=>{n(),j()})))()}function Co(){return(Co=e((()=>{n(),j()})))()}function wo(){return(wo=e((()=>{n(),j()})))()}function To(){return(To=e((()=>{n(),j()})))()}function Eo(){return(Eo=e((()=>{n(),j()})))()}function Do(){return(Do=e((()=>{n(),j()})))()}function Oo(){return(Oo=e((()=>{n(),j()})))()}function ko(){return(ko=e((()=>{n(),j()})))()}function Ao(){return(Ao=e((()=>{n(),j()})))()}function jo(){return(jo=e((()=>{n(),j()})))()}function Mo(){return(Mo=e((()=>{n(),j()})))()}function No(){return(No=e((()=>{n(),j()})))()}function Po(){return(Po=e((()=>{n(),j()})))()}function Fo(){return(Fo=e((()=>{n(),j()})))()}function Io(){return(Io=e((()=>{n(),j()})))()}function Lo(){return(Lo=e((()=>{n(),j()})))()}function Ro(){return(Ro=e((()=>{n(),j()})))()}function zo(){return(zo=e((()=>{n(),j()})))()}function Bo(){return(Bo=e((()=>{n(),j()})))()}function Vo(){return(Vo=e((()=>{n(),j()})))()}function Ho(){return(Ho=e((()=>{n(),j()})))()}function Uo(){return(Uo=e((()=>{n(),j()})))()}function Wo(){return(Wo=e((()=>{n(),j()})))()}function Go(){return(Go=e((()=>{n(),j()})))()}function Ko(){return(Ko=e((()=>{n(),j()})))()}function qo(){return(qo=e((()=>{n(),j()})))()}function Jo(){return(Jo=e((()=>{n(),j()})))()}function Yo(){return(Yo=e((()=>{n(),j()})))()}function Xo(){return(Xo=e((()=>{n(),j()})))()}function Zo(){return(Zo=e((()=>{n(),j()})))()}function Qo(){return(Qo=e((()=>{n(),j()})))()}function $o(){return($o=e((()=>{n(),j()})))()}function es(){return(es=e((()=>{n(),j()})))()}function ts(){return(ts=e((()=>{n(),j()})))()}function ns(){return(ns=e((()=>{n(),j()})))()}function rs(){return(rs=e((()=>{n(),j()})))()}function is(){return(is=e((()=>{n(),j()})))()}function as(){return(as=e((()=>{n(),j()})))()}function os(){return(os=e((()=>{n(),j()})))()}function ss(){return(ss=e((()=>{n(),j()})))()}function cs(){return(cs=e((()=>{n(),j()})))()}function ls(){return(ls=e((()=>{n(),j()})))()}function us(){return(us=e((()=>{n(),j()})))()}function ds(){return(ds=e((()=>{n(),j()})))()}function fs(){return(fs=e((()=>{n(),j()})))()}function ps(){return(ps=e((()=>{n(),j()})))()}function ms(){return(ms=e((()=>{n(),j()})))()}function hs(){return(hs=e((()=>{n(),j()})))()}function gs(){return(gs=e((()=>{n(),j()})))()}function _s(){return(_s=e((()=>{n(),j()})))()}function vs(){return(vs=e((()=>{n(),j()})))()}function ys(){return(ys=e((()=>{n(),j()})))()}function bs(){return(bs=e((()=>{n(),j()})))()}function xs(){return(xs=e((()=>{n(),j()})))()}function Ss(){return(Ss=e((()=>{n(),j()})))()}function Cs(){return(Cs=e((()=>{n(),j()})))()}function ws(){return(ws=e((()=>{n(),j()})))()}function Ts(){return(Ts=e((()=>{n(),j()})))()}function Es(){return(Es=e((()=>{n(),j()})))()}function Ds(){return(Ds=e((()=>{n(),j()})))()}function Os(){return(Os=e((()=>{n(),j()})))()}function ks(){return(ks=e((()=>{n(),j()})))()}function As(){return(As=e((()=>{n(),j()})))()}function js(){return(js=e((()=>{n(),j()})))()}function Ms(){return(Ms=e((()=>{n(),j()})))()}function Ns(){return(Ns=e((()=>{n(),j()})))()}function Ps(){return(Ps=e((()=>{n(),j()})))()}function Fs(){return(Fs=e((()=>{n(),j()})))()}function Is(){return(Is=e((()=>{n(),j()})))()}function Ls(){return(Ls=e((()=>{n(),j()})))()}function Rs(){return(Rs=e((()=>{n(),j()})))()}function zs(){return(zs=e((()=>{n(),j()})))()}function Bs(){return(Bs=e((()=>{n(),j()})))()}function Vs(){return(Vs=e((()=>{n(),j()})))()}function Hs(){return(Hs=e((()=>{n(),j()})))()}function Us(){return(Us=e((()=>{n(),j()})))()}function Ws(){return(Ws=e((()=>{n(),j()})))()}function Gs(){return(Gs=e((()=>{n(),j()})))()}function Ks(){return(Ks=e((()=>{n(),j()})))()}function qs(){return(qs=e((()=>{n(),j()})))()}function Js(){return(Js=e((()=>{n(),j()})))()}function Ys(){return(Ys=e((()=>{n(),j()})))()}function Xs(){return(Xs=e((()=>{n(),j()})))()}function Zs(){return(Zs=e((()=>{n(),j()})))()}function Qs(){return(Qs=e((()=>{n(),j()})))()}function $s(){return($s=e((()=>{n(),j()})))()}function ec(){return(ec=e((()=>{n(),j()})))()}function tc(){return(tc=e((()=>{n(),j()})))()}function nc(){return(nc=e((()=>{n(),j()})))()}function rc(){return(rc=e((()=>{n(),j()})))()}function ic(){return(ic=e((()=>{n(),j()})))()}function ac(){return(ac=e((()=>{n(),j()})))()}function oc(){return(oc=e((()=>{n(),j()})))()}function sc(){return(sc=e((()=>{n(),j()})))()}function cc(){return(cc=e((()=>{n(),j()})))()}function lc(){return(lc=e((()=>{n(),j()})))()}function uc(){return(uc=e((()=>{n(),j()})))()}function dc(){return(dc=e((()=>{n(),j()})))()}function fc(){return(fc=e((()=>{n(),j()})))()}function pc(){return(pc=e((()=>{n(),j()})))()}function mc(){return(mc=e((()=>{n(),j()})))()}function hc(){return(hc=e((()=>{n(),j()})))()}function gc(){return(gc=e((()=>{n(),j()})))()}function _c(){return(_c=e((()=>{n(),j()})))()}function vc(){return(vc=e((()=>{n(),j()})))()}function yc(){return(yc=e((()=>{n(),j()})))()}function bc(){return(bc=e((()=>{n(),j()})))()}function xc(){return(xc=e((()=>{n(),j()})))()}function Sc(){return(Sc=e((()=>{n(),j()})))()}function Cc(){return(Cc=e((()=>{n(),j()})))()}function wc(){return(wc=e((()=>{n(),j()})))()}function Tc(){return(Tc=e((()=>{n(),j()})))()}function Ec(){return(Ec=e((()=>{n(),j()})))()}function Dc(){return(Dc=e((()=>{n(),j()})))()}function Oc(){return(Oc=e((()=>{n(),j()})))()}function kc(){return(kc=e((()=>{n(),j()})))()}function Ac(){return(Ac=e((()=>{n(),j()})))()}function jc(){return(jc=e((()=>{n(),j()})))()}function Mc(){return(Mc=e((()=>{n(),j()})))()}function Nc(){return(Nc=e((()=>{n(),j()})))()}function Pc(){return(Pc=e((()=>{n(),j()})))()}function Fc(){return(Fc=e((()=>{n(),j()})))()}function Ic(){return(Ic=e((()=>{n(),j()})))()}function Lc(){return(Lc=e((()=>{n(),j()})))()}function Rc(){return(Rc=e((()=>{n(),j()})))()}function zc(){return(zc=e((()=>{n(),j()})))()}function Bc(){return(Bc=e((()=>{n(),j()})))()}function Vc(){return(Vc=e((()=>{n(),j()})))()}function Hc(){return(Hc=e((()=>{n(),j()})))()}function Uc(){return(Uc=e((()=>{n(),j()})))()}function Wc(){return(Wc=e((()=>{n(),j()})))()}function Gc(){return(Gc=e((()=>{n(),j()})))()}function Kc(){return(Kc=e((()=>{n(),j()})))()}function qc(){return(qc=e((()=>{n(),j()})))()}function Jc(){return(Jc=e((()=>{n(),j()})))()}function Yc(){return(Yc=e((()=>{n(),j()})))()}function Xc(){return(Xc=e((()=>{n(),j()})))()}function Zc(){return(Zc=e((()=>{n(),j()})))()}function Qc(){return(Qc=e((()=>{n(),j()})))()}function $c(){return($c=e((()=>{n(),j()})))()}function el(){return(el=e((()=>{n(),j()})))()}function tl(){return(tl=e((()=>{n(),j()})))()}function nl(){return(nl=e((()=>{n(),j()})))()}function rl(){return(rl=e((()=>{n(),j()})))()}function il(){return(il=e((()=>{n(),j()})))()}function al(){return(al=e((()=>{n(),j()})))()}function ol(){return(ol=e((()=>{n(),j()})))()}var sl;function cl(){return(cl=e((()=>{n(),j(),sl=({slot:e,title:t,className:n,width:r=`24`,height:a=`24`,styles:o}={})=>s`
  <svg
    slot=${A(e)}
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
    style=${A(o)}
  >
    ${M(t,()=>i`<title>${t}</title>`)}
    <path
      d="m21 18-1 1.094A2.71 2.71 0 0 1 18 20c-.75 0-1.47-.326-2-.906a2.716 2.716 0 0 0-2-.904c-.75 0-1.469.325-2 .904M3 20h1.675c.489 0 .733 0 .964-.055.204-.05.399-.13.578-.24.201-.123.374-.296.72-.642L19.5 6.5a2.121 2.121 0 0 0-3-3L3.937 16.063c-.346.346-.519.519-.642.72a2 2 0 0 0-.24.578c-.055.23-.055.475-.055.965V20Z"
    />
  </svg>
`})))()}function ll(){return(ll=e((()=>{n(),j()})))()}function ul(){return(ul=e((()=>{n(),j()})))()}function dl(){return(dl=e((()=>{n(),j()})))()}function fl(){return(fl=e((()=>{n(),j()})))()}function pl(){return(pl=e((()=>{n(),j()})))()}function ml(){return(ml=e((()=>{n(),j()})))()}function hl(){return(hl=e((()=>{n(),j()})))()}function gl(){return(gl=e((()=>{n(),j()})))()}function _l(){return(_l=e((()=>{n(),j()})))()}function vl(){return(vl=e((()=>{n(),j()})))()}function yl(){return(yl=e((()=>{n(),j()})))()}function bl(){return(bl=e((()=>{n(),j()})))()}function xl(){return(xl=e((()=>{n(),j()})))()}function Sl(){return(Sl=e((()=>{n(),j()})))()}function Cl(){return(Cl=e((()=>{n(),j()})))()}function wl(){return(wl=e((()=>{n(),j()})))()}function Tl(){return(Tl=e((()=>{n(),j()})))()}function El(){return(El=e((()=>{n(),j()})))()}function Dl(){return(Dl=e((()=>{n(),j()})))()}function Ol(){return(Ol=e((()=>{n(),j()})))()}function kl(){return(kl=e((()=>{n(),j()})))()}function Al(){return(Al=e((()=>{n(),j()})))()}function jl(){return(jl=e((()=>{n(),j()})))()}function Ml(){return(Ml=e((()=>{n(),j()})))()}function Nl(){return(Nl=e((()=>{n(),j()})))()}function Pl(){return(Pl=e((()=>{n(),j()})))()}function Fl(){return(Fl=e((()=>{n(),j()})))()}function Il(){return(Il=e((()=>{n(),j()})))()}function Ll(){return(Ll=e((()=>{n(),j()})))()}function Rl(){return(Rl=e((()=>{n(),j()})))()}function zl(){return(zl=e((()=>{n(),j()})))()}function Bl(){return(Bl=e((()=>{n(),j()})))()}function Vl(){return(Vl=e((()=>{n(),j()})))()}function Hl(){return(Hl=e((()=>{n(),j()})))()}function Ul(){return(Ul=e((()=>{n(),j()})))()}function Wl(){return(Wl=e((()=>{n(),j()})))()}function Gl(){return(Gl=e((()=>{n(),j()})))()}function Kl(){return(Kl=e((()=>{n(),j()})))()}function ql(){return(ql=e((()=>{n(),j()})))()}function Jl(){return(Jl=e((()=>{n(),j()})))()}function Yl(){return(Yl=e((()=>{n(),j()})))()}function Xl(){return(Xl=e((()=>{n(),j()})))()}function Zl(){return(Zl=e((()=>{n(),j()})))()}function Ql(){return(Ql=e((()=>{n(),j()})))()}function $l(){return($l=e((()=>{n(),j()})))()}function eu(){return(eu=e((()=>{n(),j()})))()}function tu(){return(tu=e((()=>{n(),j()})))()}function nu(){return(nu=e((()=>{n(),j()})))()}function ru(){return(ru=e((()=>{n(),j()})))()}function iu(){return(iu=e((()=>{n(),j()})))()}function au(){return(au=e((()=>{n(),j()})))()}function ou(){return(ou=e((()=>{n(),j()})))()}function su(){return(su=e((()=>{n(),j()})))()}function cu(){return(cu=e((()=>{n(),j()})))()}function lu(){return(lu=e((()=>{n(),j()})))()}function uu(){return(uu=e((()=>{n(),j()})))()}function du(){return(du=e((()=>{n(),j()})))()}function fu(){return(fu=e((()=>{n(),j()})))()}function pu(){return(pu=e((()=>{n(),j()})))()}function mu(){return(mu=e((()=>{n(),j()})))()}function hu(){return(hu=e((()=>{n(),j()})))()}function gu(){return(gu=e((()=>{n(),j()})))()}function _u(){return(_u=e((()=>{n(),j()})))()}function vu(){return(vu=e((()=>{n(),j()})))()}function yu(){return(yu=e((()=>{n(),j()})))()}function bu(){return(bu=e((()=>{n(),j()})))()}function xu(){return(xu=e((()=>{n(),j()})))()}function Su(){return(Su=e((()=>{n(),j()})))()}function Cu(){return(Cu=e((()=>{n(),j()})))()}function wu(){return(wu=e((()=>{n(),j()})))()}function Tu(){return(Tu=e((()=>{n(),j()})))()}function Eu(){return(Eu=e((()=>{n(),j()})))()}function Du(){return(Du=e((()=>{n(),j()})))()}function Ou(){return(Ou=e((()=>{n(),j()})))()}var ku;function Au(){return(Au=e((()=>{n(),j(),ku=({slot:e,title:t,className:n,width:r=`24`,height:a=`24`,styles:o}={})=>s`
  <svg
    slot=${A(e)}
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
    style=${A(o)}
  >
    ${M(t,()=>i`<title>${t}</title>`)}
    <path d="M6 12h12M3 6h18M9 18h6" />
  </svg>
`})))()}function ju(){return(ju=e((()=>{n(),j()})))()}function Mu(){return(Mu=e((()=>{n(),j()})))()}function Nu(){return(Nu=e((()=>{n(),j()})))()}function Pu(){return(Pu=e((()=>{n(),j()})))()}function Fu(){return(Fu=e((()=>{n(),j()})))()}function Iu(){return(Iu=e((()=>{n(),j()})))()}function Lu(){return(Lu=e((()=>{n(),j()})))()}function Ru(){return(Ru=e((()=>{n(),j()})))()}function zu(){return(zu=e((()=>{n(),j()})))()}function Bu(){return(Bu=e((()=>{n(),j()})))()}function Vu(){return(Vu=e((()=>{n(),j()})))()}function Hu(){return(Hu=e((()=>{n(),j()})))()}function Uu(){return(Uu=e((()=>{n(),j()})))()}function Wu(){return(Wu=e((()=>{n(),j()})))()}function Gu(){return(Gu=e((()=>{n(),j()})))()}function Ku(){return(Ku=e((()=>{n(),j()})))()}function qu(){return(qu=e((()=>{n(),j()})))()}function Ju(){return(Ju=e((()=>{n(),j()})))()}function Yu(){return(Yu=e((()=>{n(),j()})))()}function Xu(){return(Xu=e((()=>{n(),j()})))()}function Zu(){return(Zu=e((()=>{n(),j()})))()}function Qu(){return(Qu=e((()=>{n(),j()})))()}function $u(){return($u=e((()=>{n(),j()})))()}function ed(){return(ed=e((()=>{n(),j()})))()}function td(){return(td=e((()=>{n(),j()})))()}function nd(){return(nd=e((()=>{n(),j()})))()}function rd(){return(rd=e((()=>{n(),j()})))()}function id(){return(id=e((()=>{n(),j()})))()}function ad(){return(ad=e((()=>{n(),j()})))()}function od(){return(od=e((()=>{n(),j()})))()}function sd(){return(sd=e((()=>{n(),j()})))()}function cd(){return(cd=e((()=>{n(),j()})))()}function ld(){return(ld=e((()=>{n(),j()})))()}function ud(){return(ud=e((()=>{n(),j()})))()}function dd(){return(dd=e((()=>{n(),j()})))()}function fd(){return(fd=e((()=>{n(),j()})))()}function pd(){return(pd=e((()=>{n(),j()})))()}function md(){return(md=e((()=>{n(),j()})))()}function hd(){return(hd=e((()=>{n(),j()})))()}function gd(){return(gd=e((()=>{n(),j()})))()}function _d(){return(_d=e((()=>{n(),j()})))()}function vd(){return(vd=e((()=>{n(),j()})))()}function yd(){return(yd=e((()=>{n(),j()})))()}function bd(){return(bd=e((()=>{n(),j()})))()}function xd(){return(xd=e((()=>{n(),j()})))()}function Sd(){return(Sd=e((()=>{n(),j()})))()}function Cd(){return(Cd=e((()=>{n(),j()})))()}function wd(){return(wd=e((()=>{n(),j()})))()}function Td(){return(Td=e((()=>{n(),j()})))()}function Ed(){return(Ed=e((()=>{n(),j()})))()}function Dd(){return(Dd=e((()=>{n(),j()})))()}function Od(){return(Od=e((()=>{n(),j()})))()}function kd(){return(kd=e((()=>{n(),j()})))()}function Ad(){return(Ad=e((()=>{n(),j()})))()}function jd(){return(jd=e((()=>{n(),j()})))()}function Md(){return(Md=e((()=>{n(),j()})))()}function Nd(){return(Nd=e((()=>{n(),j()})))()}function Pd(){return(Pd=e((()=>{n(),j()})))()}function Fd(){return(Fd=e((()=>{n(),j()})))()}function Id(){return(Id=e((()=>{n(),j()})))()}function Ld(){return(Ld=e((()=>{n(),j()})))()}function Rd(){return(Rd=e((()=>{n(),j()})))()}function zd(){return(zd=e((()=>{n(),j()})))()}function Bd(){return(Bd=e((()=>{n(),j()})))()}function Vd(){return(Vd=e((()=>{n(),j()})))()}function Hd(){return(Hd=e((()=>{n(),j()})))()}function Ud(){return(Ud=e((()=>{n(),j()})))()}function Wd(){return(Wd=e((()=>{n(),j()})))()}function Gd(){return(Gd=e((()=>{n(),j()})))()}function Kd(){return(Kd=e((()=>{n(),j()})))()}function qd(){return(qd=e((()=>{n(),j()})))()}function Jd(){return(Jd=e((()=>{n(),j()})))()}function Yd(){return(Yd=e((()=>{n(),j()})))()}function Xd(){return(Xd=e((()=>{n(),j()})))()}function Zd(){return(Zd=e((()=>{n(),j()})))()}function Qd(){return(Qd=e((()=>{n(),j()})))()}function $d(){return($d=e((()=>{n(),j()})))()}function ef(){return(ef=e((()=>{n(),j()})))()}function tf(){return(tf=e((()=>{n(),j()})))()}function nf(){return(nf=e((()=>{n(),j()})))()}function rf(){return(rf=e((()=>{n(),j()})))()}function af(){return(af=e((()=>{n(),j()})))()}function of(){return(of=e((()=>{n(),j()})))()}function sf(){return(sf=e((()=>{n(),j()})))()}function cf(){return(cf=e((()=>{n(),j()})))()}function lf(){return(lf=e((()=>{n(),j()})))()}function uf(){return(uf=e((()=>{n(),j()})))()}function df(){return(df=e((()=>{n(),j()})))()}function ff(){return(ff=e((()=>{n(),j()})))()}function pf(){return(pf=e((()=>{n(),j()})))()}function mf(){return(mf=e((()=>{n(),j()})))()}function hf(){return(hf=e((()=>{n(),j()})))()}function gf(){return(gf=e((()=>{n(),j()})))()}function _f(){return(_f=e((()=>{n(),j()})))()}function vf(){return(vf=e((()=>{n(),j()})))()}function yf(){return(yf=e((()=>{n(),j()})))()}function bf(){return(bf=e((()=>{n(),j()})))()}function xf(){return(xf=e((()=>{n(),j()})))()}function Sf(){return(Sf=e((()=>{n(),j()})))()}function Cf(){return(Cf=e((()=>{n(),j()})))()}function wf(){return(wf=e((()=>{n(),j()})))()}function Tf(){return(Tf=e((()=>{n(),j()})))()}function Ef(){return(Ef=e((()=>{n(),j()})))()}function Df(){return(Df=e((()=>{n(),j()})))()}function Of(){return(Of=e((()=>{n(),j()})))()}function kf(){return(kf=e((()=>{n(),j()})))()}function Af(){return(Af=e((()=>{n(),j()})))()}function jf(){return(jf=e((()=>{n(),j()})))()}function Mf(){return(Mf=e((()=>{n(),j()})))()}function Nf(){return(Nf=e((()=>{n(),j()})))()}function Pf(){return(Pf=e((()=>{n(),j()})))()}function Ff(){return(Ff=e((()=>{n(),j()})))()}function If(){return(If=e((()=>{n(),j()})))()}function Lf(){return(Lf=e((()=>{n(),j()})))()}function Rf(){return(Rf=e((()=>{n(),j()})))()}function zf(){return(zf=e((()=>{n(),j()})))()}function Bf(){return(Bf=e((()=>{n(),j()})))()}function Vf(){return(Vf=e((()=>{n(),j()})))()}function Hf(){return(Hf=e((()=>{n(),j()})))()}function Uf(){return(Uf=e((()=>{n(),j()})))()}function Wf(){return(Wf=e((()=>{n(),j()})))()}function Gf(){return(Gf=e((()=>{n(),j()})))()}function Kf(){return(Kf=e((()=>{n(),j()})))()}function qf(){return(qf=e((()=>{n(),j()})))()}function Jf(){return(Jf=e((()=>{n(),j()})))()}function Yf(){return(Yf=e((()=>{n(),j()})))()}function Xf(){return(Xf=e((()=>{n(),j()})))()}function Zf(){return(Zf=e((()=>{n(),j()})))()}function Qf(){return(Qf=e((()=>{n(),j()})))()}function $f(){return($f=e((()=>{n(),j()})))()}function ep(){return(ep=e((()=>{n(),j()})))()}function tp(){return(tp=e((()=>{n(),j()})))()}function np(){return(np=e((()=>{n(),j()})))()}function rp(){return(rp=e((()=>{n(),j()})))()}function ip(){return(ip=e((()=>{n(),j()})))()}function ap(){return(ap=e((()=>{n(),j()})))()}function op(){return(op=e((()=>{n(),j()})))()}function sp(){return(sp=e((()=>{n(),j()})))()}function cp(){return(cp=e((()=>{n(),j()})))()}function lp(){return(lp=e((()=>{n(),j()})))()}function up(){return(up=e((()=>{n(),j()})))()}function dp(){return(dp=e((()=>{n(),j()})))()}function fp(){return(fp=e((()=>{n(),j()})))()}function pp(){return(pp=e((()=>{n(),j()})))()}function mp(){return(mp=e((()=>{n(),j()})))()}function hp(){return(hp=e((()=>{n(),j()})))()}function gp(){return(gp=e((()=>{n(),j()})))()}function _p(){return(_p=e((()=>{n(),j()})))()}function vp(){return(vp=e((()=>{n(),j()})))()}function yp(){return(yp=e((()=>{n(),j()})))()}function bp(){return(bp=e((()=>{n(),j()})))()}function xp(){return(xp=e((()=>{n(),j()})))()}function Sp(){return(Sp=e((()=>{n(),j()})))()}function Cp(){return(Cp=e((()=>{n(),j()})))()}function wp(){return(wp=e((()=>{n(),j()})))()}function Tp(){return(Tp=e((()=>{n(),j()})))()}function Ep(){return(Ep=e((()=>{n(),j()})))()}function Dp(){return(Dp=e((()=>{n(),j()})))()}function Op(){return(Op=e((()=>{n(),j()})))()}function kp(){return(kp=e((()=>{n(),j()})))()}function Ap(){return(Ap=e((()=>{n(),j()})))()}function jp(){return(jp=e((()=>{n(),j()})))()}function Mp(){return(Mp=e((()=>{n(),j()})))()}function Np(){return(Np=e((()=>{n(),j()})))()}function Pp(){return(Pp=e((()=>{n(),j()})))()}function Fp(){return(Fp=e((()=>{n(),j()})))()}function Ip(){return(Ip=e((()=>{n(),j()})))()}function Lp(){return(Lp=e((()=>{n(),j()})))()}function Rp(){return(Rp=e((()=>{n(),j()})))()}function zp(){return(zp=e((()=>{n(),j()})))()}function Bp(){return(Bp=e((()=>{n(),j()})))()}function Vp(){return(Vp=e((()=>{n(),j()})))()}function Hp(){return(Hp=e((()=>{n(),j()})))()}function Up(){return(Up=e((()=>{n(),j()})))()}function Wp(){return(Wp=e((()=>{n(),j()})))()}function Gp(){return(Gp=e((()=>{n(),j()})))()}function Kp(){return(Kp=e((()=>{n(),j()})))()}function qp(){return(qp=e((()=>{n(),j()})))()}function Jp(){return(Jp=e((()=>{n(),j()})))()}function Yp(){return(Yp=e((()=>{n(),j()})))()}function Xp(){return(Xp=e((()=>{n(),j()})))()}function Zp(){return(Zp=e((()=>{n(),j()})))()}function Qp(){return(Qp=e((()=>{n(),j()})))()}function $p(){return($p=e((()=>{n(),j()})))()}function em(){return(em=e((()=>{n(),j()})))()}function tm(){return(tm=e((()=>{n(),j()})))()}function nm(){return(nm=e((()=>{n(),j()})))()}function rm(){return(rm=e((()=>{n(),j()})))()}function im(){return(im=e((()=>{n(),j()})))()}function am(){return(am=e((()=>{n(),j()})))()}function om(){return(om=e((()=>{n(),j()})))()}function sm(){return(sm=e((()=>{n(),j()})))()}function cm(){return(cm=e((()=>{n(),j()})))()}function lm(){return(lm=e((()=>{n(),j()})))()}function um(){return(um=e((()=>{n(),j()})))()}function dm(){return(dm=e((()=>{n(),j()})))()}function fm(){return(fm=e((()=>{n(),j()})))()}function pm(){return(pm=e((()=>{n(),j()})))()}function mm(){return(mm=e((()=>{n(),j()})))()}function hm(){return(hm=e((()=>{n(),j()})))()}function gm(){return(gm=e((()=>{n(),j()})))()}function _m(){return(_m=e((()=>{n(),j()})))()}function vm(){return(vm=e((()=>{n(),j()})))()}function ym(){return(ym=e((()=>{n(),j()})))()}function bm(){return(bm=e((()=>{n(),j()})))()}function xm(){return(xm=e((()=>{n(),j()})))()}function Sm(){return(Sm=e((()=>{n(),j()})))()}function Cm(){return(Cm=e((()=>{n(),j()})))()}function wm(){return(wm=e((()=>{n(),j()})))()}function Tm(){return(Tm=e((()=>{n(),j()})))()}function Em(){return(Em=e((()=>{n(),j()})))()}function Dm(){return(Dm=e((()=>{n(),j()})))()}function Om(){return(Om=e((()=>{n(),j()})))()}function km(){return(km=e((()=>{n(),j()})))()}function Am(){return(Am=e((()=>{n(),j()})))()}function jm(){return(jm=e((()=>{n(),j()})))()}function Mm(){return(Mm=e((()=>{n(),j()})))()}function Nm(){return(Nm=e((()=>{n(),j()})))()}function Pm(){return(Pm=e((()=>{n(),j()})))()}function Fm(){return(Fm=e((()=>{n(),j()})))()}function Im(){return(Im=e((()=>{n(),j()})))()}function Lm(){return(Lm=e((()=>{n(),j()})))()}function Rm(){return(Rm=e((()=>{n(),j()})))()}function zm(){return(zm=e((()=>{n(),j()})))()}function Bm(){return(Bm=e((()=>{n(),j()})))()}function Vm(){return(Vm=e((()=>{n(),j()})))()}function Hm(){return(Hm=e((()=>{n(),j()})))()}function Um(){return(Um=e((()=>{n(),j()})))()}function Wm(){return(Wm=e((()=>{n(),j()})))()}function Gm(){return(Gm=e((()=>{n(),j()})))()}function Km(){return(Km=e((()=>{n(),j()})))()}function qm(){return(qm=e((()=>{n(),j()})))()}function Jm(){return(Jm=e((()=>{n(),j()})))()}function Ym(){return(Ym=e((()=>{n(),j()})))()}function Xm(){return(Xm=e((()=>{n(),j()})))()}function Zm(){return(Zm=e((()=>{n(),j()})))()}function Qm(){return(Qm=e((()=>{n(),j()})))()}function $m(){return($m=e((()=>{n(),j()})))()}function eh(){return(eh=e((()=>{n(),j()})))()}function th(){return(th=e((()=>{n(),j()})))()}function nh(){return(nh=e((()=>{n(),j()})))()}function rh(){return(rh=e((()=>{n(),j()})))()}function ih(){return(ih=e((()=>{n(),j()})))()}function ah(){return(ah=e((()=>{n(),j()})))()}function oh(){return(oh=e((()=>{n(),j()})))()}function sh(){return(sh=e((()=>{n(),j()})))()}function ch(){return(ch=e((()=>{n(),j()})))()}function lh(){return(lh=e((()=>{n(),j()})))()}function uh(){return(uh=e((()=>{n(),j()})))()}function dh(){return(dh=e((()=>{n(),j()})))()}function fh(){return(fh=e((()=>{n(),j()})))()}function ph(){return(ph=e((()=>{n(),j()})))()}function mh(){return(mh=e((()=>{n(),j()})))()}function hh(){return(hh=e((()=>{n(),j()})))()}function gh(){return(gh=e((()=>{n(),j()})))()}function _h(){return(_h=e((()=>{n(),j()})))()}function vh(){return(vh=e((()=>{n(),j()})))()}function yh(){return(yh=e((()=>{n(),j()})))()}function bh(){return(bh=e((()=>{n(),j()})))()}function xh(){return(xh=e((()=>{n(),j()})))()}function Sh(){return(Sh=e((()=>{n(),j()})))()}function Ch(){return(Ch=e((()=>{n(),j()})))()}function wh(){return(wh=e((()=>{n(),j()})))()}function Th(){return(Th=e((()=>{n(),j()})))()}function Eh(){return(Eh=e((()=>{n(),j()})))()}function Dh(){return(Dh=e((()=>{n(),j()})))()}function Oh(){return(Oh=e((()=>{n(),j()})))()}function kh(){return(kh=e((()=>{n(),j()})))()}function Ah(){return(Ah=e((()=>{n(),j()})))()}function jh(){return(jh=e((()=>{n(),j()})))()}function Mh(){return(Mh=e((()=>{n(),j()})))()}function Nh(){return(Nh=e((()=>{n(),j()})))()}function Ph(){return(Ph=e((()=>{n(),j()})))()}function Fh(){return(Fh=e((()=>{n(),j()})))()}function Ih(){return(Ih=e((()=>{n(),j()})))()}function Lh(){return(Lh=e((()=>{n(),j()})))()}function Rh(){return(Rh=e((()=>{n(),j()})))()}function zh(){return(zh=e((()=>{n(),j()})))()}function Bh(){return(Bh=e((()=>{n(),j()})))()}function Vh(){return(Vh=e((()=>{n(),j()})))()}function Hh(){return(Hh=e((()=>{n(),j()})))()}function Uh(){return(Uh=e((()=>{n(),j()})))()}function Wh(){return(Wh=e((()=>{n(),j()})))()}function Gh(){return(Gh=e((()=>{n(),j()})))()}function Kh(){return(Kh=e((()=>{n(),j()})))()}function qh(){return(qh=e((()=>{n(),j()})))()}function Jh(){return(Jh=e((()=>{n(),j()})))()}function Yh(){return(Yh=e((()=>{n(),j()})))()}function Xh(){return(Xh=e((()=>{n(),j()})))()}function Zh(){return(Zh=e((()=>{n(),j()})))()}function Qh(){return(Qh=e((()=>{n(),j()})))()}function $h(){return($h=e((()=>{n(),j()})))()}function eg(){return(eg=e((()=>{n(),j()})))()}function tg(){return(tg=e((()=>{n(),j()})))()}function ng(){return(ng=e((()=>{n(),j()})))()}function rg(){return(rg=e((()=>{n(),j()})))()}function ig(){return(ig=e((()=>{n(),j()})))()}function ag(){return(ag=e((()=>{n(),j()})))()}function og(){return(og=e((()=>{n(),j()})))()}function sg(){return(sg=e((()=>{n(),j()})))()}function cg(){return(cg=e((()=>{n(),j()})))()}function lg(){return(lg=e((()=>{n(),j()})))()}function ug(){return(ug=e((()=>{n(),j()})))()}function dg(){return(dg=e((()=>{n(),j()})))()}function fg(){return(fg=e((()=>{n(),j()})))()}function pg(){return(pg=e((()=>{n(),j()})))()}function mg(){return(mg=e((()=>{n(),j()})))()}function hg(){return(hg=e((()=>{n(),j()})))()}function gg(){return(gg=e((()=>{n(),j()})))()}function _g(){return(_g=e((()=>{n(),j()})))()}function vg(){return(vg=e((()=>{n(),j()})))()}function yg(){return(yg=e((()=>{n(),j()})))()}function bg(){return(bg=e((()=>{n(),j()})))()}function xg(){return(xg=e((()=>{n(),j()})))()}function Sg(){return(Sg=e((()=>{n(),j()})))()}function Cg(){return(Cg=e((()=>{n(),j()})))()}function wg(){return(wg=e((()=>{n(),j()})))()}function Tg(){return(Tg=e((()=>{n(),j()})))()}function Eg(){return(Eg=e((()=>{n(),j()})))()}function Dg(){return(Dg=e((()=>{n(),j()})))()}function Og(){return(Og=e((()=>{n(),j()})))()}function kg(){return(kg=e((()=>{n(),j()})))()}function Ag(){return(Ag=e((()=>{n(),j()})))()}function jg(){return(jg=e((()=>{n(),j()})))()}function Mg(){return(Mg=e((()=>{n(),j()})))()}function Ng(){return(Ng=e((()=>{n(),j()})))()}function Pg(){return(Pg=e((()=>{n(),j()})))()}function Fg(){return(Fg=e((()=>{n(),j()})))()}function Ig(){return(Ig=e((()=>{n(),j()})))()}function Lg(){return(Lg=e((()=>{n(),j()})))()}function Rg(){return(Rg=e((()=>{n(),j()})))()}function zg(){return(zg=e((()=>{n(),j()})))()}function Bg(){return(Bg=e((()=>{n(),j()})))()}function Vg(){return(Vg=e((()=>{n(),j()})))()}function Hg(){return(Hg=e((()=>{n(),j()})))()}function Ug(){return(Ug=e((()=>{n(),j()})))()}function Wg(){return(Wg=e((()=>{n(),j()})))()}function Gg(){return(Gg=e((()=>{n(),j()})))()}function Kg(){return(Kg=e((()=>{n(),j()})))()}function qg(){return(qg=e((()=>{n(),j()})))()}function Jg(){return(Jg=e((()=>{n(),j()})))()}function Yg(){return(Yg=e((()=>{n(),j()})))()}function Xg(){return(Xg=e((()=>{n(),j()})))()}function Zg(){return(Zg=e((()=>{n(),j()})))()}function Qg(){return(Qg=e((()=>{n(),j()})))()}function $g(){return($g=e((()=>{n(),j()})))()}function e_(){return(e_=e((()=>{n(),j()})))()}function t_(){return(t_=e((()=>{n(),j()})))()}function n_(){return(n_=e((()=>{n(),j()})))()}function r_(){return(r_=e((()=>{n(),j()})))()}function i_(){return(i_=e((()=>{n(),j()})))()}function a_(){return(a_=e((()=>{n(),j()})))()}function o_(){return(o_=e((()=>{n(),j()})))()}function s_(){return(s_=e((()=>{n(),j()})))()}function c_(){return(c_=e((()=>{n(),j()})))()}function l_(){return(l_=e((()=>{n(),j()})))()}function u_(){return(u_=e((()=>{n(),j()})))()}function d_(){return(d_=e((()=>{n(),j()})))()}function f_(){return(f_=e((()=>{n(),j()})))()}function p_(){return(p_=e((()=>{n(),j()})))()}function m_(){return(m_=e((()=>{n(),j()})))()}function h_(){return(h_=e((()=>{n(),j()})))()}function g_(){return(g_=e((()=>{n(),j()})))()}function __(){return(__=e((()=>{n(),j()})))()}function v_(){return(v_=e((()=>{n(),j()})))()}function y_(){return(y_=e((()=>{n(),j()})))()}function b_(){return(b_=e((()=>{n(),j()})))()}function x_(){return(x_=e((()=>{n(),j()})))()}function S_(){return(S_=e((()=>{n(),j()})))()}function C_(){return(C_=e((()=>{n(),j()})))()}function w_(){return(w_=e((()=>{n(),j()})))()}function T_(){return(T_=e((()=>{n(),j()})))()}function E_(){return(E_=e((()=>{n(),j()})))()}function D_(){return(D_=e((()=>{n(),j()})))()}function O_(){return(O_=e((()=>{n(),j()})))()}function k_(){return(k_=e((()=>{n(),j()})))()}function A_(){return(A_=e((()=>{n(),j()})))()}function j_(){return(j_=e((()=>{n(),j()})))()}function M_(){return(M_=e((()=>{n(),j()})))()}function N_(){return(N_=e((()=>{n(),j()})))()}function P_(){return(P_=e((()=>{n(),j()})))()}function F_(){return(F_=e((()=>{n(),j()})))()}function I_(){return(I_=e((()=>{n(),j()})))()}function L_(){return(L_=e((()=>{n(),j()})))()}function R_(){return(R_=e((()=>{n(),j()})))()}function z_(){return(z_=e((()=>{n(),j()})))()}function B_(){return(B_=e((()=>{n(),j()})))()}function V_(){return(V_=e((()=>{n(),j()})))()}function H_(){return(H_=e((()=>{n(),j()})))()}function U_(){return(U_=e((()=>{n(),j()})))()}function W_(){return(W_=e((()=>{n(),j()})))()}function G_(){return(G_=e((()=>{n(),j()})))()}function K_(){return(K_=e((()=>{n(),j()})))()}function q_(){return(q_=e((()=>{n(),j()})))()}function J_(){return(J_=e((()=>{n(),j()})))()}function Y_(){return(Y_=e((()=>{n(),j()})))()}function X_(){return(X_=e((()=>{n(),j()})))()}function Z_(){return(Z_=e((()=>{n(),j()})))()}function Q_(){return(Q_=e((()=>{n(),j()})))()}function $_(){return($_=e((()=>{n(),j()})))()}function ev(){return(ev=e((()=>{n(),j()})))()}function tv(){return(tv=e((()=>{n(),j()})))()}function nv(){return(nv=e((()=>{n(),j()})))()}function rv(){return(rv=e((()=>{n(),j()})))()}function iv(){return(iv=e((()=>{n(),j()})))()}function av(){return(av=e((()=>{n(),j()})))()}function ov(){return(ov=e((()=>{n(),j()})))()}function sv(){return(sv=e((()=>{n(),j()})))()}function cv(){return(cv=e((()=>{n(),j()})))()}function lv(){return(lv=e((()=>{n(),j()})))()}function uv(){return(uv=e((()=>{n(),j()})))()}function dv(){return(dv=e((()=>{n(),j()})))()}function fv(){return(fv=e((()=>{n(),j()})))()}function pv(){return(pv=e((()=>{n(),j()})))()}function mv(){return(mv=e((()=>{n(),j()})))()}function hv(){return(hv=e((()=>{n(),j()})))()}function gv(){return(gv=e((()=>{n(),j()})))()}function _v(){return(_v=e((()=>{n(),j()})))()}function vv(){return(vv=e((()=>{n(),j()})))()}function yv(){return(yv=e((()=>{n(),j()})))()}function bv(){return(bv=e((()=>{n(),j()})))()}function xv(){return(xv=e((()=>{n(),j()})))()}function Sv(){return(Sv=e((()=>{n(),j()})))()}function Cv(){return(Cv=e((()=>{n(),j()})))()}function wv(){return(wv=e((()=>{n(),j()})))()}function Tv(){return(Tv=e((()=>{n(),j()})))()}function Ev(){return(Ev=e((()=>{n(),j()})))()}function Dv(){return(Dv=e((()=>{n(),j()})))()}function Ov(){return(Ov=e((()=>{n(),j()})))()}function kv(){return(kv=e((()=>{n(),j()})))()}function Av(){return(Av=e((()=>{n(),j()})))()}function jv(){return(jv=e((()=>{n(),j()})))()}function Mv(){return(Mv=e((()=>{n(),j()})))()}function Nv(){return(Nv=e((()=>{n(),j()})))()}function Pv(){return(Pv=e((()=>{n(),j()})))()}function Fv(){return(Fv=e((()=>{n(),j()})))()}function Iv(){return(Iv=e((()=>{n(),j()})))()}function Lv(){return(Lv=e((()=>{n(),j()})))()}function Rv(){return(Rv=e((()=>{n(),j()})))()}function zv(){return(zv=e((()=>{n(),j()})))()}function Bv(){return(Bv=e((()=>{n(),j()})))()}function Vv(){return(Vv=e((()=>{n(),j()})))()}function Hv(){return(Hv=e((()=>{n(),j()})))()}function Uv(){return(Uv=e((()=>{n(),j()})))()}function Wv(){return(Wv=e((()=>{n(),j()})))()}function Gv(){return(Gv=e((()=>{n(),j()})))()}function Kv(){return(Kv=e((()=>{n(),j()})))()}function qv(){return(qv=e((()=>{n(),j()})))()}function Jv(){return(Jv=e((()=>{n(),j()})))()}function Yv(){return(Yv=e((()=>{n(),j()})))()}function Xv(){return(Xv=e((()=>{n(),j()})))()}function Zv(){return(Zv=e((()=>{n(),j()})))()}function Qv(){return(Qv=e((()=>{n(),j()})))()}function $v(){return($v=e((()=>{n(),j()})))()}function ey(){return(ey=e((()=>{n(),j()})))()}function ty(){return(ty=e((()=>{n(),j()})))()}function ny(){return(ny=e((()=>{n(),j()})))()}function ry(){return(ry=e((()=>{n(),j()})))()}function iy(){return(iy=e((()=>{n(),j()})))()}function ay(){return(ay=e((()=>{n(),j()})))()}function oy(){return(oy=e((()=>{n(),j()})))()}function sy(){return(sy=e((()=>{n(),j()})))()}function cy(){return(cy=e((()=>{n(),j()})))()}function ly(){return(ly=e((()=>{n(),j()})))()}function uy(){return(uy=e((()=>{n(),j()})))()}function dy(){return(dy=e((()=>{n(),j()})))()}function fy(){return(fy=e((()=>{n(),j()})))()}function py(){return(py=e((()=>{n(),j()})))()}function my(){return(my=e((()=>{n(),j()})))()}function hy(){return(hy=e((()=>{n(),j()})))()}function gy(){return(gy=e((()=>{n(),j()})))()}function _y(){return(_y=e((()=>{n(),j()})))()}function vy(){return(vy=e((()=>{n(),j()})))()}function yy(){return(yy=e((()=>{n(),j()})))()}function by(){return(by=e((()=>{n(),j()})))()}function xy(){return(xy=e((()=>{n(),j()})))()}function Sy(){return(Sy=e((()=>{n(),j()})))()}function Cy(){return(Cy=e((()=>{n(),j()})))()}function wy(){return(wy=e((()=>{n(),j()})))()}function Ty(){return(Ty=e((()=>{n(),j()})))()}function Ey(){return(Ey=e((()=>{n(),j()})))()}function Dy(){return(Dy=e((()=>{n(),j()})))()}function Oy(){return(Oy=e((()=>{n(),j()})))()}function ky(){return(ky=e((()=>{n(),j()})))()}function Ay(){return(Ay=e((()=>{n(),j()})))()}function jy(){return(jy=e((()=>{n(),j()})))()}function My(){return(My=e((()=>{n(),j()})))()}function Ny(){return(Ny=e((()=>{n(),j()})))()}function Py(){return(Py=e((()=>{n(),j()})))()}function Fy(){return(Fy=e((()=>{n(),j()})))()}function Iy(){return(Iy=e((()=>{n(),j()})))()}function Ly(){return(Ly=e((()=>{n(),j()})))()}function Ry(){return(Ry=e((()=>{n(),j()})))()}function zy(){return(zy=e((()=>{n(),j()})))()}function By(){return(By=e((()=>{n(),j()})))()}function Vy(){return(Vy=e((()=>{n(),j()})))()}function Hy(){return(Hy=e((()=>{n(),j()})))()}function Uy(){return(Uy=e((()=>{n(),j()})))()}function Wy(){return(Wy=e((()=>{n(),j()})))()}function Gy(){return(Gy=e((()=>{n(),j()})))()}function Ky(){return(Ky=e((()=>{n(),j()})))()}function qy(){return(qy=e((()=>{n(),j()})))()}function Jy(){return(Jy=e((()=>{n(),j()})))()}function Yy(){return(Yy=e((()=>{n(),j()})))()}function Xy(){return(Xy=e((()=>{n(),j()})))()}function Zy(){return(Zy=e((()=>{n(),j()})))()}function Qy(){return(Qy=e((()=>{n(),j()})))()}function $y(){return($y=e((()=>{n(),j()})))()}function eb(){return(eb=e((()=>{n(),j()})))()}function tb(){return(tb=e((()=>{n(),j()})))()}function nb(){return(nb=e((()=>{n(),j()})))()}function rb(){return(rb=e((()=>{n(),j()})))()}function ib(){return(ib=e((()=>{n(),j()})))()}function ab(){return(ab=e((()=>{n(),j()})))()}function ob(){return(ob=e((()=>{n(),j()})))()}function sb(){return(sb=e((()=>{n(),j()})))()}function cb(){return(cb=e((()=>{n(),j()})))()}function lb(){return(lb=e((()=>{n(),j()})))()}function ub(){return(ub=e((()=>{n(),j()})))()}function db(){return(db=e((()=>{n(),j()})))()}function fb(){return(fb=e((()=>{n(),j()})))()}function pb(){return(pb=e((()=>{n(),j()})))()}function mb(){return(mb=e((()=>{n(),j()})))()}function hb(){return(hb=e((()=>{n(),j()})))()}function gb(){return(gb=e((()=>{n(),j()})))()}function _b(){return(_b=e((()=>{n(),j()})))()}function vb(){return(vb=e((()=>{n(),j()})))()}function yb(){return(yb=e((()=>{n(),j()})))()}function bb(){return(bb=e((()=>{n(),j()})))()}function xb(){return(xb=e((()=>{n(),j()})))()}function Sb(){return(Sb=e((()=>{n(),j()})))()}function Cb(){return(Cb=e((()=>{n(),j()})))()}function wb(){return(wb=e((()=>{n(),j()})))()}function Tb(){return(Tb=e((()=>{n(),j()})))()}function Eb(){return(Eb=e((()=>{n(),j()})))()}function Db(){return(Db=e((()=>{n(),j()})))()}function Ob(){return(Ob=e((()=>{n(),j()})))()}function kb(){return(kb=e((()=>{n(),j()})))()}function Ab(){return(Ab=e((()=>{n(),j()})))()}function jb(){return(jb=e((()=>{n(),j()})))()}function Mb(){return(Mb=e((()=>{n(),j()})))()}function Nb(){return(Nb=e((()=>{n(),j()})))()}function Pb(){return(Pb=e((()=>{n(),j()})))()}function Fb(){return(Fb=e((()=>{n(),j()})))()}function Ib(){return(Ib=e((()=>{n(),j()})))()}function Lb(){return(Lb=e((()=>{n(),j()})))()}function Rb(){return(Rb=e((()=>{n(),j()})))()}function zb(){return(zb=e((()=>{n(),j()})))()}function Bb(){return(Bb=e((()=>{n(),j()})))()}function Vb(){return(Vb=e((()=>{n(),j()})))()}function Hb(){return(Hb=e((()=>{n(),j()})))()}function Ub(){return(Ub=e((()=>{n(),j()})))()}function Wb(){return(Wb=e((()=>{n(),j()})))()}function Gb(){return(Gb=e((()=>{n(),j()})))()}function Kb(){return(Kb=e((()=>{n(),j()})))()}function qb(){return(qb=e((()=>{n(),j()})))()}function Jb(){return(Jb=e((()=>{n(),j()})))()}function Yb(){return(Yb=e((()=>{n(),j()})))()}function Xb(){return(Xb=e((()=>{n(),j()})))()}function Zb(){return(Zb=e((()=>{n(),j()})))()}function Qb(){return(Qb=e((()=>{n(),j()})))()}function $b(){return($b=e((()=>{n(),j()})))()}function ex(){return(ex=e((()=>{n(),j()})))()}function tx(){return(tx=e((()=>{n(),j()})))()}function nx(){return(nx=e((()=>{n(),j()})))()}function rx(){return(rx=e((()=>{n(),j()})))()}function ix(){return(ix=e((()=>{n(),j()})))()}function ax(){return(ax=e((()=>{n(),j()})))()}function ox(){return(ox=e((()=>{n(),j()})))()}var sx;function cx(){return(cx=e((()=>{n(),j(),sx=({slot:e,title:t,className:n,width:r=`24`,height:a=`24`,styles:o}={})=>s`
  <svg
    slot=${A(e)}
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
    style=${A(o)}
  >
    ${M(t,()=>i`<title>${t}</title>`)}
    <path
      d="M16 6v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.48 2 13.92 2 12.8 2h-1.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C8 3.52 8 4.08 8 5.2V6m2 5.5v5m4-5v5M3 6h18m-2 0v11.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C16.72 22 15.88 22 14.2 22H9.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C5 19.72 5 18.88 5 17.2V6"
    />
  </svg>
`})))()}function lx(){return(lx=e((()=>{n(),j()})))()}function ux(){return(ux=e((()=>{n(),j()})))()}function dx(){return(dx=e((()=>{n(),j()})))()}function fx(){return(fx=e((()=>{n(),j()})))()}function px(){return(px=e((()=>{n(),j()})))()}function mx(){return(mx=e((()=>{n(),j()})))()}function hx(){return(hx=e((()=>{n(),j()})))()}function gx(){return(gx=e((()=>{n(),j()})))()}function _x(){return(_x=e((()=>{n(),j()})))()}function vx(){return(vx=e((()=>{n(),j()})))()}function yx(){return(yx=e((()=>{n(),j()})))()}function bx(){return(bx=e((()=>{n(),j()})))()}function xx(){return(xx=e((()=>{n(),j()})))()}function Sx(){return(Sx=e((()=>{n(),j()})))()}function Cx(){return(Cx=e((()=>{n(),j()})))()}function wx(){return(wx=e((()=>{n(),j()})))()}function Tx(){return(Tx=e((()=>{n(),j()})))()}function Ex(){return(Ex=e((()=>{n(),j()})))()}function Dx(){return(Dx=e((()=>{n(),j()})))()}function Ox(){return(Ox=e((()=>{n(),j()})))()}function kx(){return(kx=e((()=>{n(),j()})))()}function Ax(){return(Ax=e((()=>{n(),j()})))()}function jx(){return(jx=e((()=>{n(),j()})))()}function Mx(){return(Mx=e((()=>{n(),j()})))()}function Nx(){return(Nx=e((()=>{n(),j()})))()}function Px(){return(Px=e((()=>{n(),j()})))()}function Fx(){return(Fx=e((()=>{n(),j()})))()}function Ix(){return(Ix=e((()=>{n(),j()})))()}function Lx(){return(Lx=e((()=>{n(),j()})))()}function Rx(){return(Rx=e((()=>{n(),j()})))()}function zx(){return(zx=e((()=>{n(),j()})))()}function Bx(){return(Bx=e((()=>{n(),j()})))()}function Vx(){return(Vx=e((()=>{n(),j()})))()}function Hx(){return(Hx=e((()=>{n(),j()})))()}function Ux(){return(Ux=e((()=>{n(),j()})))()}function Wx(){return(Wx=e((()=>{n(),j()})))()}function Gx(){return(Gx=e((()=>{n(),j()})))()}function Kx(){return(Kx=e((()=>{n(),j()})))()}function qx(){return(qx=e((()=>{n(),j()})))()}function Jx(){return(Jx=e((()=>{n(),j()})))()}function Yx(){return(Yx=e((()=>{n(),j()})))()}function Xx(){return(Xx=e((()=>{n(),j()})))()}function Zx(){return(Zx=e((()=>{n(),j()})))()}function Qx(){return(Qx=e((()=>{n(),j()})))()}function $x(){return($x=e((()=>{n(),j()})))()}function eS(){return(eS=e((()=>{n(),j()})))()}function tS(){return(tS=e((()=>{n(),j()})))()}function nS(){return(nS=e((()=>{n(),j()})))()}function rS(){return(rS=e((()=>{n(),j()})))()}function iS(){return(iS=e((()=>{n(),j()})))()}function aS(){return(aS=e((()=>{n(),j()})))()}function oS(){return(oS=e((()=>{n(),j()})))()}function sS(){return(sS=e((()=>{n(),j()})))()}function cS(){return(cS=e((()=>{n(),j()})))()}function lS(){return(lS=e((()=>{n(),j()})))()}function uS(){return(uS=e((()=>{n(),j()})))()}function dS(){return(dS=e((()=>{n(),j()})))()}function fS(){return(fS=e((()=>{n(),j()})))()}function pS(){return(pS=e((()=>{n(),j()})))()}function mS(){return(mS=e((()=>{n(),j()})))()}function hS(){return(hS=e((()=>{n(),j()})))()}function gS(){return(gS=e((()=>{n(),j()})))()}function _S(){return(_S=e((()=>{n(),j()})))()}function vS(){return(vS=e((()=>{n(),j()})))()}function yS(){return(yS=e((()=>{n(),j()})))()}function bS(){return(bS=e((()=>{n(),j()})))()}function xS(){return(xS=e((()=>{n(),j()})))()}function SS(){return(SS=e((()=>{n(),j()})))()}function CS(){return(CS=e((()=>{n(),j()})))()}function wS(){return(wS=e((()=>{n(),j()})))()}function TS(){return(TS=e((()=>{n(),j()})))()}function ES(){return(ES=e((()=>{n(),j()})))()}function DS(){return(DS=e((()=>{n(),j()})))()}function OS(){return(OS=e((()=>{n(),j()})))()}function kS(){return(kS=e((()=>{n(),j()})))()}function AS(){return(AS=e((()=>{n(),j()})))()}function jS(){return(jS=e((()=>{n(),j()})))()}function MS(){return(MS=e((()=>{n(),j()})))()}function NS(){return(NS=e((()=>{n(),j()})))()}function PS(){return(PS=e((()=>{n(),j()})))()}function FS(){return(FS=e((()=>{n(),j()})))()}function IS(){return(IS=e((()=>{n(),j()})))()}function LS(){return(LS=e((()=>{n(),j()})))()}function RS(){return(RS=e((()=>{n(),j()})))()}function zS(){return(zS=e((()=>{n(),j()})))()}function BS(){return(BS=e((()=>{n(),j()})))()}function VS(){return(VS=e((()=>{n(),j()})))()}function HS(){return(HS=e((()=>{n(),j()})))()}function US(){return(US=e((()=>{n(),j()})))()}function WS(){return(WS=e((()=>{n(),j()})))()}function GS(){return(GS=e((()=>{n(),j()})))()}function KS(){return(KS=e((()=>{n(),j()})))()}function qS(){return(qS=e((()=>{n(),j()})))()}function JS(){return(JS=e((()=>{n(),j()})))()}function YS(){return(YS=e((()=>{n(),j()})))()}function XS(){return(XS=e((()=>{n(),j()})))()}function ZS(){return(ZS=e((()=>{n(),j()})))()}function QS(){return(QS=e((()=>{n(),j()})))()}function $S(){return($S=e((()=>{n(),j()})))()}function eC(){return(eC=e((()=>{n(),j()})))()}function tC(){return(tC=e((()=>{n(),j()})))()}function nC(){return(nC=e((()=>{n(),j()})))()}function rC(){return(rC=e((()=>{n(),j()})))()}function iC(){return(iC=e((()=>{n(),j()})))()}function aC(){return(aC=e((()=>{mt(),ht(),gt(),_t(),vt(),yt(),bt(),xt(),St(),Ct(),wt(),Tt(),Et(),Dt(),Ot(),kt(),At(),jt(),Mt(),Nt(),Pt(),Ft(),It(),Lt(),Rt(),zt(),Bt(),Vt(),Ht(),Ut(),Wt(),Gt(),Kt(),qt(),Jt(),Yt(),Xt(),Zt(),Qt(),$t(),en(),tn(),nn(),rn(),an(),on(),sn(),cn(),ln(),un(),dn(),fn(),pn(),mn(),hn(),gn(),_n(),vn(),yn(),bn(),xn(),Sn(),Cn(),wn(),Tn(),En(),Dn(),On(),kn(),An(),jn(),Mn(),Nn(),Pn(),Fn(),In(),Ln(),Rn(),zn(),Bn(),Vn(),Hn(),Un(),Wn(),Gn(),Kn(),qn(),Jn(),Yn(),Xn(),Zn(),Qn(),$n(),er(),tr(),nr(),rr(),ir(),ar(),or(),sr(),cr(),lr(),ur(),dr(),fr(),pr(),mr(),hr(),gr(),_r(),vr(),yr(),br(),xr(),Sr(),Cr(),wr(),Tr(),Er(),Dr(),Or(),kr(),Ar(),jr(),Mr(),Nr(),Pr(),Fr(),Ir(),Lr(),Rr(),zr(),Br(),Vr(),Hr(),Ur(),Wr(),Gr(),Kr(),qr(),Jr(),Yr(),Xr(),Zr(),Qr(),$r(),ei(),ti(),ni(),ri(),ii(),ai(),oi(),si(),ci(),li(),ui(),di(),fi(),pi(),mi(),hi(),gi(),_i(),vi(),yi(),bi(),xi(),Si(),Ci(),wi(),Ti(),Ei(),Di(),Oi(),ki(),Ai(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Li(),Ri(),zi(),Bi(),Vi(),Hi(),Ui(),Wi(),Gi(),Ki(),qi(),Ji(),Yi(),Xi(),Zi(),Qi(),$i(),ea(),ta(),na(),ra(),ia(),aa(),oa(),sa(),ca(),la(),ua(),da(),fa(),pa(),ma(),ha(),ga(),_a(),va(),ya(),ba(),xa(),Sa(),Ca(),wa(),Ta(),Ea(),Da(),Oa(),ka(),Aa(),ja(),Ma(),Na(),Pa(),Fa(),Ia(),La(),Ra(),za(),Ba(),Va(),Ha(),Ua(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Za(),Qa(),$a(),eo(),to(),no(),ro(),io(),ao(),oo(),so(),co(),lo(),uo(),fo(),po(),mo(),ho(),go(),_o(),vo(),yo(),bo(),xo(),So(),Co(),wo(),To(),Eo(),Do(),Oo(),ko(),Ao(),jo(),Mo(),No(),Po(),Fo(),Io(),Lo(),Ro(),zo(),Bo(),Vo(),Ho(),Uo(),Wo(),Go(),Ko(),qo(),Jo(),Yo(),Xo(),Zo(),Qo(),$o(),es(),ts(),ns(),rs(),is(),as(),os(),ss(),cs(),ls(),us(),ds(),fs(),ps(),ms(),hs(),gs(),_s(),vs(),ys(),bs(),xs(),Ss(),Cs(),ws(),Ts(),Es(),Ds(),Os(),ks(),As(),js(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec(),Dc(),Oc(),kc(),Ac(),jc(),Mc(),Nc(),Pc(),Fc(),Ic(),Lc(),Rc(),zc(),Bc(),Vc(),Hc(),Uc(),Wc(),Gc(),Kc(),qc(),Jc(),Yc(),Xc(),Zc(),Qc(),$c(),el(),tl(),nl(),rl(),il(),al(),ol(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),Rl(),zl(),Bl(),Vl(),Hl(),Ul(),Wl(),Gl(),Kl(),ql(),Jl(),Yl(),Xl(),Zl(),Ql(),$l(),eu(),tu(),nu(),ru(),iu(),au(),ou(),su(),cu(),lu(),uu(),du(),fu(),pu(),mu(),hu(),gu(),_u(),vu(),yu(),bu(),xu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),Au(),ju(),Mu(),Nu(),Pu(),Fu(),Iu(),Lu(),Ru(),zu(),Bu(),Vu(),Hu(),Uu(),Wu(),Gu(),Ku(),qu(),Ju(),Yu(),Xu(),Zu(),Qu(),$u(),ed(),td(),nd(),rd(),id(),ad(),od(),sd(),cd(),ld(),ud(),dd(),fd(),pd(),md(),hd(),gd(),_d(),vd(),yd(),bd(),xd(),Sd(),Cd(),wd(),Td(),Ed(),Dd(),Od(),kd(),Ad(),jd(),Md(),Nd(),Pd(),Fd(),Id(),Ld(),Rd(),zd(),Bd(),Vd(),Hd(),Ud(),Wd(),Gd(),Kd(),qd(),Jd(),Yd(),Xd(),Zd(),Qd(),$d(),ef(),tf(),nf(),rf(),af(),of(),sf(),cf(),lf(),uf(),df(),ff(),pf(),mf(),hf(),gf(),_f(),vf(),yf(),bf(),xf(),Sf(),Cf(),wf(),Tf(),Ef(),Df(),Of(),kf(),Af(),jf(),Mf(),Nf(),Pf(),Ff(),If(),Lf(),Rf(),zf(),Bf(),Vf(),Hf(),Uf(),Wf(),Gf(),Kf(),qf(),Jf(),Yf(),Xf(),Zf(),Qf(),$f(),ep(),tp(),np(),rp(),ip(),ap(),op(),sp(),cp(),lp(),up(),dp(),fp(),pp(),mp(),hp(),gp(),_p(),vp(),yp(),bp(),xp(),Sp(),Cp(),wp(),Tp(),Ep(),Dp(),Op(),kp(),Ap(),jp(),Mp(),Np(),Pp(),Fp(),Ip(),Lp(),Rp(),zp(),Bp(),Vp(),Hp(),Up(),Wp(),Gp(),Kp(),qp(),Jp(),Yp(),Xp(),Zp(),Qp(),$p(),em(),tm(),nm(),rm(),im(),am(),om(),sm(),cm(),lm(),um(),dm(),fm(),pm(),mm(),hm(),gm(),_m(),vm(),ym(),bm(),xm(),Sm(),Cm(),wm(),Tm(),Em(),Dm(),Om(),km(),Am(),jm(),Mm(),Nm(),Pm(),Fm(),Im(),Lm(),Rm(),zm(),Bm(),Vm(),Hm(),Um(),Wm(),Gm(),Km(),qm(),Jm(),Ym(),Xm(),Zm(),Qm(),$m(),eh(),th(),nh(),rh(),ih(),ah(),oh(),sh(),ch(),lh(),uh(),dh(),fh(),ph(),mh(),hh(),gh(),_h(),vh(),yh(),bh(),xh(),Sh(),Ch(),wh(),Th(),Eh(),Dh(),Oh(),kh(),Ah(),jh(),Mh(),Nh(),Ph(),Fh(),Ih(),Lh(),Rh(),zh(),Bh(),Vh(),Hh(),Uh(),Wh(),Gh(),Kh(),qh(),Jh(),Yh(),Xh(),Zh(),Qh(),$h(),eg(),tg(),ng(),rg(),ig(),ag(),og(),sg(),cg(),lg(),ug(),dg(),fg(),pg(),mg(),hg(),gg(),_g(),vg(),yg(),bg(),xg(),Sg(),Cg(),wg(),Tg(),Eg(),Dg(),Og(),kg(),Ag(),jg(),Mg(),Ng(),Pg(),Fg(),Ig(),Lg(),Rg(),zg(),Bg(),Vg(),Hg(),Ug(),Wg(),Gg(),Kg(),qg(),Jg(),Yg(),Xg(),Zg(),Qg(),$g(),e_(),t_(),n_(),r_(),i_(),a_(),o_(),s_(),c_(),l_(),u_(),d_(),f_(),p_(),m_(),h_(),g_(),__(),v_(),y_(),b_(),x_(),S_(),C_(),w_(),T_(),E_(),D_(),O_(),k_(),A_(),j_(),M_(),N_(),P_(),F_(),I_(),L_(),R_(),z_(),B_(),V_(),H_(),U_(),W_(),G_(),K_(),q_(),J_(),Y_(),X_(),Z_(),Q_(),$_(),ev(),tv(),nv(),rv(),iv(),av(),ov(),sv(),cv(),lv(),uv(),dv(),fv(),pv(),mv(),hv(),gv(),_v(),vv(),yv(),bv(),xv(),Sv(),Cv(),wv(),Tv(),Ev(),Dv(),Ov(),kv(),Av(),jv(),Mv(),Nv(),Pv(),Fv(),Iv(),Lv(),Rv(),zv(),Bv(),Vv(),Hv(),Uv(),Wv(),Gv(),Kv(),qv(),Jv(),Yv(),Xv(),Zv(),Qv(),$v(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),sy(),cy(),ly(),uy(),dy(),fy(),py(),my(),hy(),gy(),_y(),vy(),yy(),by(),xy(),Sy(),Cy(),wy(),Ty(),Ey(),Dy(),Oy(),ky(),Ay(),jy(),My(),Ny(),Py(),Fy(),Iy(),Ly(),Ry(),zy(),By(),Vy(),Hy(),Uy(),Wy(),Gy(),Ky(),qy(),Jy(),Yy(),Xy(),Zy(),Qy(),$y(),eb(),tb(),nb(),rb(),ib(),ab(),ob(),sb(),cb(),lb(),ub(),db(),fb(),pb(),mb(),hb(),gb(),_b(),vb(),yb(),bb(),xb(),Sb(),Cb(),wb(),Tb(),Eb(),Db(),Ob(),kb(),Ab(),jb(),Mb(),Nb(),Pb(),Fb(),Ib(),Lb(),Rb(),zb(),Bb(),Vb(),Hb(),Ub(),Wb(),Gb(),Kb(),qb(),Jb(),Yb(),Xb(),Zb(),Qb(),$b(),ex(),tx(),nx(),rx(),ix(),ax(),ox(),cx(),lx(),ux(),dx(),fx(),px(),mx(),hx(),gx(),_x(),vx(),yx(),bx(),xx(),Sx(),Cx(),wx(),Tx(),Ex(),Dx(),Ox(),kx(),Ax(),jx(),Mx(),Nx(),Px(),Fx(),Ix(),Lx(),Rx(),zx(),Bx(),Vx(),Hx(),Ux(),Wx(),Gx(),Kx(),qx(),Jx(),Yx(),Xx(),Zx(),Qx(),$x(),eS(),tS(),nS(),rS(),iS(),aS(),oS(),sS(),cS(),lS(),uS(),dS(),fS(),pS(),mS(),hS(),gS(),_S(),vS(),yS(),bS(),xS(),SS(),CS(),wS(),TS(),ES(),DS(),OS(),kS(),AS(),jS(),MS(),NS(),PS(),FS(),IS(),LS(),RS(),zS(),BS(),VS(),HS(),US(),WS(),GS(),KS(),qS(),JS(),YS(),XS(),ZS(),QS(),$S(),eC(),tC(),nC(),rC(),iC()})))()}var oC;function sC(){return(sC=e((()=>{k(),oC=b(x`
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
`)})))()}var cC,lC;function uC(){return(uC=e((()=>{n(),$e(),qe(),cC=new WeakMap,lC=Ge(class extends Qe{render(e){return r}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),r}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=cC.get(t);n===void 0&&(n=new WeakMap,cC.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?cC.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})))()}var dC;function fC(){return(fC=e((()=>{sC(),k(),n(),dC=x`
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
`,customElements.define(`cosmoz-tooltip-content`,tt(()=>s`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[oC,dC]}))})))()}var N;function pC(){return(pC=e((()=>{k(),N=b(x`
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
`)})))()}var mC;function hC(){return(hC=e((()=>{mC=({root:e,delay:t,matchTarget:n,show:r,hide:i})=>{let a,o=!1,s=!1,c=()=>{clearTimeout(a),a=void 0},l=e=>{o||(c(),a=window.setTimeout(()=>{a=void 0,r(e)},t))},u=e=>{if(e.pointerType===`touch`)return;s=!1;let t=n(e);t&&l(t)},d=e=>{n(e)&&(s=e.pointerType!==`mouse`,o=!0,c(),i())},f=()=>{o=!1},p=e=>{let t=n(e);t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(c(),i()))},m=()=>{s=!1},h=e=>{let t=n(e);if(t){if(s){s=!1;return}l(t)}},g=e=>{n(e)&&(c(),i())};return e.addEventListener(`pointerover`,u),e.addEventListener(`pointerdown`,d),e.addEventListener(`pointerup`,f),e.addEventListener(`pointerout`,p),e.addEventListener(`keydown`,m),e.addEventListener(`focusin`,h),e.addEventListener(`focusout`,g),{dispose(){c(),e.removeEventListener(`pointerover`,u),e.removeEventListener(`pointerdown`,d),e.removeEventListener(`pointerup`,f),e.removeEventListener(`pointerout`,p),e.removeEventListener(`keydown`,m),e.removeEventListener(`focusin`,h),e.removeEventListener(`focusout`,g)}}}})))()}var gC,_C;function vC(){return(vC=e((()=>{k(),n(),fC(),pC(),hC(),gC=(e,n,r)=>t(s`<cosmoz-tooltip-content>
			${M(n,()=>s`<strong slot="heading">${n}</strong>`)}
			${M(r,()=>s`<p slot="description">${r}</p>`)}
		</cosmoz-tooltip-content>`,e),_C=(e,t)=>{let{for:n,heading:r,description:i,placement:a=`top`,delay:o=300,disabled:s=!1}=t,c=!!(r||i)&&!s;T(()=>{if(!n||!c)return;let t=e.getRootNode(),s=t.adoptedStyleSheets??[];s.includes(N)||(t.adoptedStyleSheets=[...s,N]);let l=document.createElement(`div`);l.setAttribute(`popover`,`manual`),l.setAttribute(`role`,`tooltip`),l.classList.add(`cosmoz-tooltip-popover`),e.after(l),gC(l,r,i);let u=`--tooltip-anchor-${n}`,d=mC({root:t,delay:o,matchTarget:e=>e.target.closest?.(`[name="${n}"]`)??void 0,show:e=>{e.style.anchorName=u,l.style.positionAnchor=u,l.style.positionArea=a,l.showPopover()},hide:()=>l.hidePopover()});return()=>{d.dispose(),l.hidePopover(),l.remove()}},[n,r,i,a,o,c])}})))()}var yC;function bC(){return(bC=e((()=>{k(),yC=e=>{let[t,n]=Ne(!1);return T(()=>{let t=e.current;if(!t)return;let r=()=>{n(t.assignedElements().length>0)};return r(),t.addEventListener(`slotchange`,r),()=>t.removeEventListener(`slotchange`,r)},[e.current]),t}})))()}var xC,SC;function CC(){return(CC=e((()=>{sC(),k(),n(),uC(),fC(),pC(),hC(),vC(),bC(),xC=x`
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
`,SC=e=>{let{heading:t,description:n,for:i,placement:a=`top`,delay:o=300,disabled:c=!1}=e,l=ze(),u=yC(l),d=!!(t||n||u)&&!c;return T(()=>{if(i||!d)return;let t=e.getRootNode(),n=e.shadowRoot?.querySelector(`.cosmoz-tooltip-popover`);if(!n)return;let r=mC({root:t,delay:o,matchTarget:t=>{let n=t.target;return n===e||e.contains(n)?e:void 0},show:()=>n.showPopover(),hide:()=>n.hidePopover()});return()=>{r.dispose(),n.hidePopover()}},[i,d,o]),_C(e,{for:i,heading:t,description:n,placement:a,delay:o,disabled:c}),i?r:d?s`
		<slot></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${a}"
		>
			<cosmoz-tooltip-content>
				${M(t,()=>s`<strong slot="heading">${t}</strong>`)}
				${M(n,()=>s`<p slot="description">${n}</p>`)}
				<slot name="content" ${lC(l)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:s`
			<slot></slot>
			<slot name="content" ${lC(l)} hidden></slot>
		`},customElements.define(`cosmoz-tooltip`,tt(SC,{styleSheets:[oC,N,xC],observedAttributes:[`heading`,`description`,`for`,`placement`,`delay`,`disabled`]}))})))()}var P,F,wC,TC,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,EC;function DC(){return(DC=e((()=>{pt(),aC(),k(),CC(),{expect:P,waitFor:F}=__STORYBOOK_MODULE_TEST__,wC={title:`CosmozTooltip`,component:`cosmoz-tooltip`,tags:[`autodocs`],argTypes:{heading:{control:`text`,description:`Tooltip heading (bold text)`},description:{control:`text`,description:`Tooltip description (secondary text)`},placement:{control:`select`,options:[`top`,`bottom`,`left`,`right`,`top center`,`bottom center`],description:`Position relative to trigger`},delay:{control:`number`,description:`Delay before showing tooltip (ms)`}},args:{heading:`Tooltip Heading`,description:`This is helpful information.`,placement:`top`,delay:300}},TC=e=>null.commands.realTap(e),I={render:e=>s`
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
    `,play:async({canvas:e,step:t,userEvent:n})=>{await t(`Shows tooltip on hover`,async()=>{let t=e.getByShadowRole(`button`);await n.hover(t),await e.findByShadowText(/Tooltip Heading/u,{},{timeout:1e3})}),await t(`Hides tooltip on mouse leave`,async()=>{let t=e.getByShadowRole(`button`);await n.unhover(t),await F(async()=>{let t=e.queryAllByShadowText(/Tooltip Heading/u);t.length>0&&P(t[0]).not.toBeVisible()},{timeout:500})})}},L={args:{heading:`Quick tip`,description:``},render:e=>s`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip heading=${e.heading} placement=${e.placement}>
                <cosmoz-button>Hover for heading only</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `,play:async({canvas:e,step:t,userEvent:n})=>{await t(`Shows tooltip with heading only`,async()=>{let t=e.getByShadowRole(`button`);await n.hover(t),await e.findByShadowText(/Quick tip/u,{},{timeout:1e3})})}},R={args:{heading:``,description:`Just a simple description without a heading`},render:e=>s`
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
    `,play:async({canvas:e,step:t,userEvent:n})=>{await t(`Shows tooltip when hovering span`,async()=>{let t=e.getByText(`Hover over this text`);await n.hover(t),await e.findByShadowText(/Hover tooltip/u,{},{timeout:1e3})}),await t(`Shows tooltip when hovering input`,async()=>{let t=e.getByPlaceholderText(`you@example.com`);await n.hover(t),await e.findByShadowText(/Email format/u,{},{timeout:1e3})})}},B={render:()=>s`
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
    `,play:async({canvas:e,step:t,userEvent:n})=>{await t(`Shows tooltip immediately`,async()=>{let t=e.getByShadowRole(`button`);await n.hover(t),await e.findByShadowText(/Instant tooltip/u,{},{timeout:200})})}},H={render:e=>s`
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
    `,play:async({canvas:e,step:t,userEvent:n})=>{await t(`Should NOT show tooltip after hover out even with focus`,async()=>{let t=e.getByShadowRole(`button`);await n.hover(t),await n.click(t),await n.unhover(t),await new Promise(e=>setTimeout(e,200));let r=e.queryAllByShadowText(/Focus test tooltip/u);r.length>0&&P(r[0]).not.toBeVisible()})}},G={args:{delay:0,heading:`For focus test tooltip`,description:`Should not appear on focus alone`},render:e=>s`
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
    `,play:async({canvas:e,step:t,userEvent:n})=>{await t(`Should NOT show tooltip after hover out even with focus`,async()=>{let t=e.getByPlaceholderText(`Focus test input`);await n.hover(t),await n.click(t),await n.unhover(t),await new Promise(e=>setTimeout(e,200));let r=e.queryAllByShadowText(/For focus test tooltip/u);r.length>0&&P(r[0]).not.toBeVisible()})}},K={render:e=>s`
        <div style="padding: 4rem; display: flex; gap: 1rem;">
            <cosmoz-tooltip
                heading="Edit"
                placement=${e.placement}
                delay=${e.delay}
            >
                <cosmoz-button variant="tertiary" aria-label="Edit">
                    ${sl({width:`20`,height:`20`})}
                </cosmoz-button>
            </cosmoz-tooltip>

            <cosmoz-tooltip
                heading="Delete"
                description="This action cannot be undone"
                placement=${e.placement}
                delay=${e.delay}
            >
                <cosmoz-button variant="tertiary" aria-label="Delete">
                    ${sx({width:`20`,height:`20`})}
                </cosmoz-button>
            </cosmoz-tooltip>

            <cosmoz-tooltip
                heading="Filter"
                placement=${e.placement}
                delay=${e.delay}
            >
                <cosmoz-button variant="tertiary" aria-label="Filter">
                    ${ku({width:`20`,height:`20`})}
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
    `,play:async({canvas:e,step:t,userEvent:n})=>{await t(`Should NOT show tooltip on hover when disabled`,async()=>{let t=e.getByShadowRole(`button`);await n.hover(t),await new Promise(e=>setTimeout(e,200));let r=e.queryAllByShadowText(/Disabled tooltip/u);r.length>0&&P(r[0]).not.toBeVisible()})}},J={args:{delay:0,heading:`Disabled for tooltip`,description:`This should not appear`},render:e=>s`
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
    `,play:async({canvas:e,step:t,userEvent:n})=>{await t(`Should NOT show tooltip on hover when disabled (for mode)`,async()=>{let t=e.getByPlaceholderText(`Hover me (disabled for tooltip)`);await n.hover(t),await new Promise(e=>setTimeout(e,200));let r=e.queryAllByShadowText(/Disabled for tooltip/u);r.length>0&&P(r[0]).not.toBeVisible()})}},Y={args:{delay:300,heading:`Press to dismiss`,description:`Hidden while pressing`},render:e=>s`
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
    `,play:async({canvas:e,step:t,userEvent:n})=>{let r=e=>e.getRootNode().querySelector(`.cosmoz-tooltip-popover`)?.matches(`:popover-open`)??!1;await t(`Shows tooltip on hover`,async()=>{let t=e.getByPlaceholderText(`Hover then press me`);await n.hover(t),await F(()=>P(r(t)).toBe(!0),{timeout:1e3})}),await t(`Hides tooltip on press while visible`,async()=>{let t=e.getByPlaceholderText(`Hover then press me`);await n.click(t),await F(()=>P(r(t)).toBe(!1),{timeout:500})}),await t(`Does not reappear while the pointer stays on the target`,async()=>{let t=e.getByPlaceholderText(`Hover then press me`);await new Promise(e=>setTimeout(e,500)),P(r(t)).toBe(!1)})}},X={args:{delay:0,heading:`Touch tooltip`,description:`Never shows for touch pointers`},render:e=>s`
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
    `,play:async({canvas:e,step:t,userEvent:n})=>{let r=e=>e.getRootNode().querySelector(`.cosmoz-tooltip-popover`)?.matches(`:popover-open`)??!1;await t(`Shows tooltip for a mouse pointer`,async()=>{let t=e.getByPlaceholderText(`Tap me`);await n.hover(t),await F(()=>P(r(t)).toBe(!0),{timeout:1e3}),await n.unhover(t),await F(()=>P(r(t)).toBe(!1),{timeout:500})}),await t(`Does not show tooltip for a real tap`,async()=>{let t=e.getByPlaceholderText(`Tap me`);await TC(`[data-testid="tap-input"]`),await new Promise(e=>setTimeout(e,300)),P(r(t)).toBe(!1)})}},Z={args:{delay:300,heading:`Press to dismiss`,description:`Hidden while pressing`},render:e=>s`
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
    `,play:async({canvas:e,step:t,userEvent:n})=>{let r=e=>(e.getRootNode().host?.closest?.(`cosmoz-tooltip`))?.shadowRoot?.querySelector(`.cosmoz-tooltip-popover`)?.matches(`:popover-open`)??!1;await t(`Shows tooltip on hover`,async()=>{let t=e.getByShadowRole(`button`);await n.hover(t),await F(async()=>P(r(t)).toBe(!0),{timeout:1e3})}),await t(`Hides tooltip on press while visible`,async()=>{let t=e.getByShadowRole(`button`);await n.click(t),await F(async()=>P(r(t)).toBe(!1),{timeout:500})}),await t(`Does not reappear while the trigger keeps focus`,async()=>{let t=e.getByShadowRole(`button`);await new Promise(e=>setTimeout(e,500)),P(r(t)).toBe(!1)})}},Q={args:{delay:0,heading:`Touch tooltip`,description:`Never shows for touch pointers`},render:e=>s`
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
    `,play:async({canvas:e,step:t,userEvent:n})=>{let r=e=>(e.getRootNode().host?.closest?.(`cosmoz-tooltip`))?.shadowRoot?.querySelector(`.cosmoz-tooltip-popover`)?.matches(`:popover-open`)??!1;await t(`Shows tooltip for a mouse pointer`,async()=>{let t=e.getByShadowRole(`button`);await n.hover(t),await F(async()=>P(r(t)).toBe(!0),{timeout:1e3}),await n.unhover(t),await F(async()=>P(r(t)).toBe(!1),{timeout:500})}),await t(`Does not show tooltip for a real tap`,async()=>{let t=e.getByShadowRole(`button`);await TC(`[data-testid="tap-button"]`),await new Promise(e=>setTimeout(e,300)),P(r(t)).toBe(!1)})}},$={render:()=>s`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip>
                <cosmoz-button>No heading/description/slot content</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `,play:async({canvas:e,step:t})=>{await t(`Renders as pass-through without popover`,async()=>{let t=e.getByShadowRole(`button`);P(t).toBeVisible()})}},EC=[`Basic`,`HeadingOnly`,`DescriptionOnly`,`ForAttribute`,`Placements`,`CustomDelay`,`CustomContent`,`OnLinks`,`FocusWithoutHover`,`ForAttributeFocusWithoutHover`,`OnIcons`,`Disabled`,`DisabledForAttribute`,`ForAttributePointerDown`,`ForAttributeTouch`,`WrappingPointerDown`,`WrappingTouch`,`EmptyPassthrough`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
    step,
    userEvent
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
    step,
    userEvent
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
}`,...$.parameters?.docs?.source}}}})))()}DC();export{I as Basic,H as CustomContent,V as CustomDelay,R as DescriptionOnly,q as Disabled,J as DisabledForAttribute,$ as EmptyPassthrough,W as FocusWithoutHover,z as ForAttribute,G as ForAttributeFocusWithoutHover,Y as ForAttributePointerDown,X as ForAttributeTouch,L as HeadingOnly,K as OnIcons,U as OnLinks,B as Placements,Z as WrappingPointerDown,Q as WrappingTouch,EC as __namedExportsOrder,wC as default};