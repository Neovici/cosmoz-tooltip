import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{a as t,c as n,i as r,l as i,n as a,r as o,s}from"./iframe-D8Sbhy8f.js";function c(e){d=e}function l(){d=null,f=0}function u(){return f++}var d,f;function p(){return(p=e((()=>{f=0})))()}var m,h,g,_,v,y,b;function x(){return(x=e((()=>{m=Symbol(`haunted.phase`),h=Symbol(`haunted.hook`),g=Symbol(`haunted.update`),_=Symbol(`haunted.commit`),v=Symbol(`haunted.effects`),y=Symbol(`haunted.layoutEffects`),b=`haunted.context`})))()}var ee;function te(){return(te=e((()=>{p(),x(),ee=class{update;host;virtual;[h];[v];[y];constructor(e,t){this.update=e,this.host=t,this[h]=new Map,this[v]=[],this[y]=[]}run(e){c(this);let t=e();return l(),t}_runEffects(e){let t=this[e];c(this);for(let e of t)e.call(this);l()}runEffects(){this._runEffects(v)}runLayoutEffects(){this._runEffects(y)}teardown(){this[h].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})))()}var ne;function re(){return(re=e((()=>{ne=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}})))()}function ie(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=oe(n)}}var ae,oe,se,ce,le;function ue(){return(ue=e((()=>{te(),x(),re(),ae=100,oe=Promise.resolve().then.bind(Promise.resolve()),se=ie(),ce=ie(),le=class e{renderer;host;state;[m];_updateQueued;_active;_updateCount;_processing;static maxUpdates=ae;constructor(e,t){this.renderer=e,this.host=t,this.state=new ee(this.update.bind(this),t),this[m]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new ne(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,se(()=>{let e=this.handlePhase(g);ce(()=>{this.handlePhase(_,e),ce(()=>{this.handlePhase(v),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[m]=e,e){case _:this.commit(t),this.runEffects(y);return;case g:return this.render();case v:return this.runEffects(v)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})))()}var de,fe,pe,S;function me(){return(me=e((()=>{de=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},fe=e=>e?.map(e=>typeof e==`string`?de(e):e),pe=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),S=pe})))()}function he(e){class t extends le{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=fe(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``||n;Reflect.set(this,ge(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var ge;function _e(){return(_e=e((()=>{ue(),me(),ge=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)})))()}function ve(e,...t){let n=u(),r=d[h],i=r.get(n);return i||(i=new e(n,d,...t),r.set(n,i)),i.update(...t)}function C(e){return ve.bind(null,e)}var w;function T(){return(T=e((()=>{p(),x(),w=class{id;state;constructor(e,t){this.id=e,this.state=t}}})))()}function ye(e){return C(class extends w{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}function be(){return(be=e((()=>{T()})))()}function xe(e,t){e[v].push(t)}var E;function Se(){return(Se=e((()=>{x(),be(),E=ye(xe)})))()}var Ce,we;function Te(){return(Te=e((()=>{T(),x(),Se(),Ce=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,we=C(class extends w{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,xe(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};Ce(this.state.host).dispatchEvent(new CustomEvent(b,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})})))()}function Ee(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(b,this)}disconnectedCallback(){this.removeEventListener(b,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(we(n))},{useShadowDOM:!1}),defaultValue:t};return n}}function De(){return(De=e((()=>{x(),Te()})))()}var Oe;function ke(){return(ke=e((()=>{T(),Oe=C(class extends w{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})))()}var Ae;function je(){return(je=e((()=>{ke(),Ae=(e,t)=>Oe(()=>e,t)})))()}function Me(e,t){e[y].push(t)}function Ne(){return(Ne=e((()=>{x(),be(),ye(Me)})))()}var Pe;function Fe(){return(Fe=e((()=>{T(),Pe=C(class extends w{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})))()}function Ie(){return(Ie=e((()=>{T(),C(class extends w{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})))()}var Le;function Re(){return(Re=e((()=>{T(),Le=/([A-Z])/gu,C(class extends w{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Le,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);(t||!a.defaultPrevented)&&(Object.is(n,r)||(this.state.host[this.property]=r))}})})))()}function ze(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function D(e){return Oe(()=>ze(e),[])}function Be(){return(Be=e((()=>{ke()})))()}function Ve(){return(Ve=e((()=>{T(),C(class extends w{update(){return this.state.host}})})))()}function He({render:e}){let t=he(e);return{component:t,createContext:Ee(t)}}function Ue(){return(Ue=e((()=>{_e(),De(),je(),Se(),Ne(),Fe(),Ie(),ke(),Te(),Re(),Be(),Ve(),ue()})))()}var We,Ge,Ke;function qe(){return(qe=e((()=>{We={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ge=e=>(...t)=>({_$litDirective$:e,values:t}),Ke=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}})))()}function Je(e){this._$AN===void 0?this._$AM=e:(k(this),this._$AM=e,Xe(this))}function Ye(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)O(r[e],!1),k(r[e]);else r!=null&&(O(r,!1),k(r))}else O(this,e)}}var O,k,Xe,Ze,Qe;function $e(){return($e=e((()=>{a(),qe(),O=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),O(e,t);return!0},k=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Xe=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Ze(t)}},Ze=e=>{e.type==We.CHILD&&(e._$AP??=Ye,e._$AQ??=Je)},Qe=class extends Ke{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Xe(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(O(this,e),k(this))}setValue(e){if(o(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}})))()}function et(){return(et=e((()=>{qe(),n(),$e(),ue(),Array.prototype.includes})))()}var tt,nt;function rt(){return(rt=e((()=>{n(),Ue(),et(),{component:tt,createContext:nt}=He({render:t})})))()}function A(){return(A=e((()=>{rt(),Ue(),me()})))()}var it;function at(){return(at=e((()=>{A(),it=de(S`
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
`)})))()}var j;function M(){return(M=e((()=>{n(),j=e=>e??r})))()}var ot;function st(){return(st=e((()=>{A(),ot=S`
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
`})))()}var ct;function lt(){return(lt=e((()=>{st(),A(),ct=S`
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
`})))()}var ut,dt;function ft(){return(ft=e((()=>{at(),A(),n(),M(),lt(),ut=[`variant`,`size`,`disabled`,`full-width`,`type`,`value`,`href`,`target`,`rel`,`download`],dt=e=>{let t=e.hasAttribute(`disabled`),n=e.getAttribute(`type`)||`button`,i=e.getAttribute(`href`);E(()=>{let t=t=>{e.hasAttribute(`disabled`)&&t.stopImmediatePropagation()};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[]);let a=s`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`;if(i!=null){let n=e.getAttribute(`target`),o=e.getAttribute(`rel`),c=e.getAttribute(`download`);return s`
			<a
				href=${i}
				class="button"
				part="button"
				aria-disabled=${t?`true`:r}
				target=${j(n)}
				rel=${j(o)}
				download=${j(c)}
				>${a}</a
			>
		`}return s`
		<button type=${n} class="button" ?disabled=${t} part="button">
			${a}
		</button>
	`},customElements.define(`cosmoz-button`,tt(dt,{observedAttributes:ut,styleSheets:[it,ct],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}function pt(){return(pt=e((()=>{ft()})))()}function N(e,t,n){return e?t(e):n?.(e)}function mt(){return(mt=e((()=>{n(),M()})))()}function ht(){return(ht=e((()=>{n(),M()})))()}function gt(){return(gt=e((()=>{n(),M()})))()}function _t(){return(_t=e((()=>{n(),M()})))()}function vt(){return(vt=e((()=>{n(),M()})))()}function yt(){return(yt=e((()=>{n(),M()})))()}function bt(){return(bt=e((()=>{n(),M()})))()}function xt(){return(xt=e((()=>{n(),M()})))()}function St(){return(St=e((()=>{n(),M()})))()}function Ct(){return(Ct=e((()=>{n(),M()})))()}function wt(){return(wt=e((()=>{n(),M()})))()}function Tt(){return(Tt=e((()=>{n(),M()})))()}function Et(){return(Et=e((()=>{n(),M()})))()}function Dt(){return(Dt=e((()=>{n(),M()})))()}function Ot(){return(Ot=e((()=>{n(),M()})))()}function kt(){return(kt=e((()=>{n(),M()})))()}function At(){return(At=e((()=>{n(),M()})))()}function jt(){return(jt=e((()=>{n(),M()})))()}function Mt(){return(Mt=e((()=>{n(),M()})))()}function Nt(){return(Nt=e((()=>{n(),M()})))()}function Pt(){return(Pt=e((()=>{n(),M()})))()}function Ft(){return(Ft=e((()=>{n(),M()})))()}function It(){return(It=e((()=>{n(),M()})))()}function Lt(){return(Lt=e((()=>{n(),M()})))()}function Rt(){return(Rt=e((()=>{n(),M()})))()}function zt(){return(zt=e((()=>{n(),M()})))()}function Bt(){return(Bt=e((()=>{n(),M()})))()}function Vt(){return(Vt=e((()=>{n(),M()})))()}function Ht(){return(Ht=e((()=>{n(),M()})))()}function Ut(){return(Ut=e((()=>{n(),M()})))()}function Wt(){return(Wt=e((()=>{n(),M()})))()}function Gt(){return(Gt=e((()=>{n(),M()})))()}function Kt(){return(Kt=e((()=>{n(),M()})))()}function qt(){return(qt=e((()=>{n(),M()})))()}function Jt(){return(Jt=e((()=>{n(),M()})))()}function Yt(){return(Yt=e((()=>{n(),M()})))()}function Xt(){return(Xt=e((()=>{n(),M()})))()}function Zt(){return(Zt=e((()=>{n(),M()})))()}function Qt(){return(Qt=e((()=>{n(),M()})))()}function $t(){return($t=e((()=>{n(),M()})))()}function en(){return(en=e((()=>{n(),M()})))()}function tn(){return(tn=e((()=>{n(),M()})))()}function nn(){return(nn=e((()=>{n(),M()})))()}function rn(){return(rn=e((()=>{n(),M()})))()}function an(){return(an=e((()=>{n(),M()})))()}function on(){return(on=e((()=>{n(),M()})))()}function sn(){return(sn=e((()=>{n(),M()})))()}function cn(){return(cn=e((()=>{n(),M()})))()}function ln(){return(ln=e((()=>{n(),M()})))()}function un(){return(un=e((()=>{n(),M()})))()}function dn(){return(dn=e((()=>{n(),M()})))()}function fn(){return(fn=e((()=>{n(),M()})))()}function pn(){return(pn=e((()=>{n(),M()})))()}function mn(){return(mn=e((()=>{n(),M()})))()}function hn(){return(hn=e((()=>{n(),M()})))()}function gn(){return(gn=e((()=>{n(),M()})))()}function _n(){return(_n=e((()=>{n(),M()})))()}function vn(){return(vn=e((()=>{n(),M()})))()}function yn(){return(yn=e((()=>{n(),M()})))()}function bn(){return(bn=e((()=>{n(),M()})))()}function xn(){return(xn=e((()=>{n(),M()})))()}function Sn(){return(Sn=e((()=>{n(),M()})))()}function Cn(){return(Cn=e((()=>{n(),M()})))()}function wn(){return(wn=e((()=>{n(),M()})))()}function Tn(){return(Tn=e((()=>{n(),M()})))()}function En(){return(En=e((()=>{n(),M()})))()}function Dn(){return(Dn=e((()=>{n(),M()})))()}function On(){return(On=e((()=>{n(),M()})))()}function kn(){return(kn=e((()=>{n(),M()})))()}function An(){return(An=e((()=>{n(),M()})))()}function jn(){return(jn=e((()=>{n(),M()})))()}function Mn(){return(Mn=e((()=>{n(),M()})))()}function Nn(){return(Nn=e((()=>{n(),M()})))()}function Pn(){return(Pn=e((()=>{n(),M()})))()}function Fn(){return(Fn=e((()=>{n(),M()})))()}function In(){return(In=e((()=>{n(),M()})))()}function Ln(){return(Ln=e((()=>{n(),M()})))()}function Rn(){return(Rn=e((()=>{n(),M()})))()}function zn(){return(zn=e((()=>{n(),M()})))()}function Bn(){return(Bn=e((()=>{n(),M()})))()}function Vn(){return(Vn=e((()=>{n(),M()})))()}function Hn(){return(Hn=e((()=>{n(),M()})))()}function Un(){return(Un=e((()=>{n(),M()})))()}function Wn(){return(Wn=e((()=>{n(),M()})))()}function Gn(){return(Gn=e((()=>{n(),M()})))()}function Kn(){return(Kn=e((()=>{n(),M()})))()}function qn(){return(qn=e((()=>{n(),M()})))()}function Jn(){return(Jn=e((()=>{n(),M()})))()}function Yn(){return(Yn=e((()=>{n(),M()})))()}function Xn(){return(Xn=e((()=>{n(),M()})))()}function Zn(){return(Zn=e((()=>{n(),M()})))()}function Qn(){return(Qn=e((()=>{n(),M()})))()}function $n(){return($n=e((()=>{n(),M()})))()}function er(){return(er=e((()=>{n(),M()})))()}function tr(){return(tr=e((()=>{n(),M()})))()}function nr(){return(nr=e((()=>{n(),M()})))()}function rr(){return(rr=e((()=>{n(),M()})))()}function ir(){return(ir=e((()=>{n(),M()})))()}function ar(){return(ar=e((()=>{n(),M()})))()}function or(){return(or=e((()=>{n(),M()})))()}function sr(){return(sr=e((()=>{n(),M()})))()}function cr(){return(cr=e((()=>{n(),M()})))()}function lr(){return(lr=e((()=>{n(),M()})))()}function ur(){return(ur=e((()=>{n(),M()})))()}function dr(){return(dr=e((()=>{n(),M()})))()}function fr(){return(fr=e((()=>{n(),M()})))()}function pr(){return(pr=e((()=>{n(),M()})))()}function mr(){return(mr=e((()=>{n(),M()})))()}function hr(){return(hr=e((()=>{n(),M()})))()}function gr(){return(gr=e((()=>{n(),M()})))()}function _r(){return(_r=e((()=>{n(),M()})))()}function vr(){return(vr=e((()=>{n(),M()})))()}function yr(){return(yr=e((()=>{n(),M()})))()}function br(){return(br=e((()=>{n(),M()})))()}function xr(){return(xr=e((()=>{n(),M()})))()}function Sr(){return(Sr=e((()=>{n(),M()})))()}function Cr(){return(Cr=e((()=>{n(),M()})))()}function wr(){return(wr=e((()=>{n(),M()})))()}function Tr(){return(Tr=e((()=>{n(),M()})))()}function Er(){return(Er=e((()=>{n(),M()})))()}function Dr(){return(Dr=e((()=>{n(),M()})))()}function Or(){return(Or=e((()=>{n(),M()})))()}function kr(){return(kr=e((()=>{n(),M()})))()}function Ar(){return(Ar=e((()=>{n(),M()})))()}function jr(){return(jr=e((()=>{n(),M()})))()}function Mr(){return(Mr=e((()=>{n(),M()})))()}function Nr(){return(Nr=e((()=>{n(),M()})))()}function Pr(){return(Pr=e((()=>{n(),M()})))()}function Fr(){return(Fr=e((()=>{n(),M()})))()}function Ir(){return(Ir=e((()=>{n(),M()})))()}function Lr(){return(Lr=e((()=>{n(),M()})))()}function Rr(){return(Rr=e((()=>{n(),M()})))()}function zr(){return(zr=e((()=>{n(),M()})))()}function Br(){return(Br=e((()=>{n(),M()})))()}function Vr(){return(Vr=e((()=>{n(),M()})))()}function Hr(){return(Hr=e((()=>{n(),M()})))()}function Ur(){return(Ur=e((()=>{n(),M()})))()}function Wr(){return(Wr=e((()=>{n(),M()})))()}function Gr(){return(Gr=e((()=>{n(),M()})))()}function Kr(){return(Kr=e((()=>{n(),M()})))()}function qr(){return(qr=e((()=>{n(),M()})))()}function Jr(){return(Jr=e((()=>{n(),M()})))()}function Yr(){return(Yr=e((()=>{n(),M()})))()}function Xr(){return(Xr=e((()=>{n(),M()})))()}function Zr(){return(Zr=e((()=>{n(),M()})))()}function Qr(){return(Qr=e((()=>{n(),M()})))()}function $r(){return($r=e((()=>{n(),M()})))()}function ei(){return(ei=e((()=>{n(),M()})))()}function ti(){return(ti=e((()=>{n(),M()})))()}function ni(){return(ni=e((()=>{n(),M()})))()}function ri(){return(ri=e((()=>{n(),M()})))()}function ii(){return(ii=e((()=>{n(),M()})))()}function ai(){return(ai=e((()=>{n(),M()})))()}function oi(){return(oi=e((()=>{n(),M()})))()}function si(){return(si=e((()=>{n(),M()})))()}function ci(){return(ci=e((()=>{n(),M()})))()}function li(){return(li=e((()=>{n(),M()})))()}function ui(){return(ui=e((()=>{n(),M()})))()}function di(){return(di=e((()=>{n(),M()})))()}function fi(){return(fi=e((()=>{n(),M()})))()}function pi(){return(pi=e((()=>{n(),M()})))()}function mi(){return(mi=e((()=>{n(),M()})))()}function hi(){return(hi=e((()=>{n(),M()})))()}function gi(){return(gi=e((()=>{n(),M()})))()}function _i(){return(_i=e((()=>{n(),M()})))()}function vi(){return(vi=e((()=>{n(),M()})))()}function yi(){return(yi=e((()=>{n(),M()})))()}function bi(){return(bi=e((()=>{n(),M()})))()}function xi(){return(xi=e((()=>{n(),M()})))()}function Si(){return(Si=e((()=>{n(),M()})))()}function Ci(){return(Ci=e((()=>{n(),M()})))()}function wi(){return(wi=e((()=>{n(),M()})))()}function Ti(){return(Ti=e((()=>{n(),M()})))()}function Ei(){return(Ei=e((()=>{n(),M()})))()}function Di(){return(Di=e((()=>{n(),M()})))()}function Oi(){return(Oi=e((()=>{n(),M()})))()}function ki(){return(ki=e((()=>{n(),M()})))()}function Ai(){return(Ai=e((()=>{n(),M()})))()}function ji(){return(ji=e((()=>{n(),M()})))()}function Mi(){return(Mi=e((()=>{n(),M()})))()}function Ni(){return(Ni=e((()=>{n(),M()})))()}function Pi(){return(Pi=e((()=>{n(),M()})))()}function Fi(){return(Fi=e((()=>{n(),M()})))()}function Ii(){return(Ii=e((()=>{n(),M()})))()}function Li(){return(Li=e((()=>{n(),M()})))()}function Ri(){return(Ri=e((()=>{n(),M()})))()}function zi(){return(zi=e((()=>{n(),M()})))()}function Bi(){return(Bi=e((()=>{n(),M()})))()}function Vi(){return(Vi=e((()=>{n(),M()})))()}function Hi(){return(Hi=e((()=>{n(),M()})))()}function Ui(){return(Ui=e((()=>{n(),M()})))()}function Wi(){return(Wi=e((()=>{n(),M()})))()}function Gi(){return(Gi=e((()=>{n(),M()})))()}function Ki(){return(Ki=e((()=>{n(),M()})))()}function qi(){return(qi=e((()=>{n(),M()})))()}function Ji(){return(Ji=e((()=>{n(),M()})))()}function Yi(){return(Yi=e((()=>{n(),M()})))()}function Xi(){return(Xi=e((()=>{n(),M()})))()}function Zi(){return(Zi=e((()=>{n(),M()})))()}function Qi(){return(Qi=e((()=>{n(),M()})))()}function $i(){return($i=e((()=>{n(),M()})))()}function ea(){return(ea=e((()=>{n(),M()})))()}function ta(){return(ta=e((()=>{n(),M()})))()}function na(){return(na=e((()=>{n(),M()})))()}function ra(){return(ra=e((()=>{n(),M()})))()}function ia(){return(ia=e((()=>{n(),M()})))()}function aa(){return(aa=e((()=>{n(),M()})))()}function oa(){return(oa=e((()=>{n(),M()})))()}function sa(){return(sa=e((()=>{n(),M()})))()}function ca(){return(ca=e((()=>{n(),M()})))()}function la(){return(la=e((()=>{n(),M()})))()}function ua(){return(ua=e((()=>{n(),M()})))()}function da(){return(da=e((()=>{n(),M()})))()}function fa(){return(fa=e((()=>{n(),M()})))()}function pa(){return(pa=e((()=>{n(),M()})))()}function ma(){return(ma=e((()=>{n(),M()})))()}function ha(){return(ha=e((()=>{n(),M()})))()}function ga(){return(ga=e((()=>{n(),M()})))()}function _a(){return(_a=e((()=>{n(),M()})))()}function va(){return(va=e((()=>{n(),M()})))()}function ya(){return(ya=e((()=>{n(),M()})))()}function ba(){return(ba=e((()=>{n(),M()})))()}function xa(){return(xa=e((()=>{n(),M()})))()}function Sa(){return(Sa=e((()=>{n(),M()})))()}function Ca(){return(Ca=e((()=>{n(),M()})))()}function wa(){return(wa=e((()=>{n(),M()})))()}function Ta(){return(Ta=e((()=>{n(),M()})))()}function Ea(){return(Ea=e((()=>{n(),M()})))()}function Da(){return(Da=e((()=>{n(),M()})))()}function Oa(){return(Oa=e((()=>{n(),M()})))()}function ka(){return(ka=e((()=>{n(),M()})))()}function Aa(){return(Aa=e((()=>{n(),M()})))()}function ja(){return(ja=e((()=>{n(),M()})))()}function Ma(){return(Ma=e((()=>{n(),M()})))()}function Na(){return(Na=e((()=>{n(),M()})))()}function Pa(){return(Pa=e((()=>{n(),M()})))()}function Fa(){return(Fa=e((()=>{n(),M()})))()}function Ia(){return(Ia=e((()=>{n(),M()})))()}function La(){return(La=e((()=>{n(),M()})))()}function Ra(){return(Ra=e((()=>{n(),M()})))()}function za(){return(za=e((()=>{n(),M()})))()}function Ba(){return(Ba=e((()=>{n(),M()})))()}function Va(){return(Va=e((()=>{n(),M()})))()}function Ha(){return(Ha=e((()=>{n(),M()})))()}function Ua(){return(Ua=e((()=>{n(),M()})))()}function Wa(){return(Wa=e((()=>{n(),M()})))()}function Ga(){return(Ga=e((()=>{n(),M()})))()}function Ka(){return(Ka=e((()=>{n(),M()})))()}function qa(){return(qa=e((()=>{n(),M()})))()}function Ja(){return(Ja=e((()=>{n(),M()})))()}function Ya(){return(Ya=e((()=>{n(),M()})))()}function Xa(){return(Xa=e((()=>{n(),M()})))()}function Za(){return(Za=e((()=>{n(),M()})))()}function Qa(){return(Qa=e((()=>{n(),M()})))()}function $a(){return($a=e((()=>{n(),M()})))()}function eo(){return(eo=e((()=>{n(),M()})))()}function to(){return(to=e((()=>{n(),M()})))()}function no(){return(no=e((()=>{n(),M()})))()}function ro(){return(ro=e((()=>{n(),M()})))()}function io(){return(io=e((()=>{n(),M()})))()}function ao(){return(ao=e((()=>{n(),M()})))()}function oo(){return(oo=e((()=>{n(),M()})))()}function so(){return(so=e((()=>{n(),M()})))()}function co(){return(co=e((()=>{n(),M()})))()}function lo(){return(lo=e((()=>{n(),M()})))()}function uo(){return(uo=e((()=>{n(),M()})))()}function fo(){return(fo=e((()=>{n(),M()})))()}function po(){return(po=e((()=>{n(),M()})))()}function mo(){return(mo=e((()=>{n(),M()})))()}function ho(){return(ho=e((()=>{n(),M()})))()}function go(){return(go=e((()=>{n(),M()})))()}function _o(){return(_o=e((()=>{n(),M()})))()}function vo(){return(vo=e((()=>{n(),M()})))()}function yo(){return(yo=e((()=>{n(),M()})))()}function bo(){return(bo=e((()=>{n(),M()})))()}function xo(){return(xo=e((()=>{n(),M()})))()}function So(){return(So=e((()=>{n(),M()})))()}function Co(){return(Co=e((()=>{n(),M()})))()}function wo(){return(wo=e((()=>{n(),M()})))()}function To(){return(To=e((()=>{n(),M()})))()}function Eo(){return(Eo=e((()=>{n(),M()})))()}function Do(){return(Do=e((()=>{n(),M()})))()}function Oo(){return(Oo=e((()=>{n(),M()})))()}function ko(){return(ko=e((()=>{n(),M()})))()}function Ao(){return(Ao=e((()=>{n(),M()})))()}function jo(){return(jo=e((()=>{n(),M()})))()}function Mo(){return(Mo=e((()=>{n(),M()})))()}function No(){return(No=e((()=>{n(),M()})))()}function Po(){return(Po=e((()=>{n(),M()})))()}function Fo(){return(Fo=e((()=>{n(),M()})))()}function Io(){return(Io=e((()=>{n(),M()})))()}function Lo(){return(Lo=e((()=>{n(),M()})))()}function Ro(){return(Ro=e((()=>{n(),M()})))()}function zo(){return(zo=e((()=>{n(),M()})))()}function Bo(){return(Bo=e((()=>{n(),M()})))()}function Vo(){return(Vo=e((()=>{n(),M()})))()}function Ho(){return(Ho=e((()=>{n(),M()})))()}function Uo(){return(Uo=e((()=>{n(),M()})))()}function Wo(){return(Wo=e((()=>{n(),M()})))()}function Go(){return(Go=e((()=>{n(),M()})))()}function Ko(){return(Ko=e((()=>{n(),M()})))()}function qo(){return(qo=e((()=>{n(),M()})))()}function Jo(){return(Jo=e((()=>{n(),M()})))()}function Yo(){return(Yo=e((()=>{n(),M()})))()}function Xo(){return(Xo=e((()=>{n(),M()})))()}function Zo(){return(Zo=e((()=>{n(),M()})))()}function Qo(){return(Qo=e((()=>{n(),M()})))()}function $o(){return($o=e((()=>{n(),M()})))()}function es(){return(es=e((()=>{n(),M()})))()}function ts(){return(ts=e((()=>{n(),M()})))()}function ns(){return(ns=e((()=>{n(),M()})))()}function rs(){return(rs=e((()=>{n(),M()})))()}function is(){return(is=e((()=>{n(),M()})))()}function as(){return(as=e((()=>{n(),M()})))()}function os(){return(os=e((()=>{n(),M()})))()}function ss(){return(ss=e((()=>{n(),M()})))()}function cs(){return(cs=e((()=>{n(),M()})))()}function ls(){return(ls=e((()=>{n(),M()})))()}function us(){return(us=e((()=>{n(),M()})))()}function ds(){return(ds=e((()=>{n(),M()})))()}function fs(){return(fs=e((()=>{n(),M()})))()}function ps(){return(ps=e((()=>{n(),M()})))()}function ms(){return(ms=e((()=>{n(),M()})))()}function hs(){return(hs=e((()=>{n(),M()})))()}function gs(){return(gs=e((()=>{n(),M()})))()}function _s(){return(_s=e((()=>{n(),M()})))()}function vs(){return(vs=e((()=>{n(),M()})))()}function ys(){return(ys=e((()=>{n(),M()})))()}function bs(){return(bs=e((()=>{n(),M()})))()}function xs(){return(xs=e((()=>{n(),M()})))()}function Ss(){return(Ss=e((()=>{n(),M()})))()}function Cs(){return(Cs=e((()=>{n(),M()})))()}function ws(){return(ws=e((()=>{n(),M()})))()}function Ts(){return(Ts=e((()=>{n(),M()})))()}function Es(){return(Es=e((()=>{n(),M()})))()}function Ds(){return(Ds=e((()=>{n(),M()})))()}function Os(){return(Os=e((()=>{n(),M()})))()}function ks(){return(ks=e((()=>{n(),M()})))()}function As(){return(As=e((()=>{n(),M()})))()}function js(){return(js=e((()=>{n(),M()})))()}function Ms(){return(Ms=e((()=>{n(),M()})))()}function Ns(){return(Ns=e((()=>{n(),M()})))()}function Ps(){return(Ps=e((()=>{n(),M()})))()}function Fs(){return(Fs=e((()=>{n(),M()})))()}function Is(){return(Is=e((()=>{n(),M()})))()}function Ls(){return(Ls=e((()=>{n(),M()})))()}function Rs(){return(Rs=e((()=>{n(),M()})))()}function zs(){return(zs=e((()=>{n(),M()})))()}function Bs(){return(Bs=e((()=>{n(),M()})))()}function Vs(){return(Vs=e((()=>{n(),M()})))()}function Hs(){return(Hs=e((()=>{n(),M()})))()}function Us(){return(Us=e((()=>{n(),M()})))()}function Ws(){return(Ws=e((()=>{n(),M()})))()}function Gs(){return(Gs=e((()=>{n(),M()})))()}function Ks(){return(Ks=e((()=>{n(),M()})))()}function qs(){return(qs=e((()=>{n(),M()})))()}function Js(){return(Js=e((()=>{n(),M()})))()}function Ys(){return(Ys=e((()=>{n(),M()})))()}function Xs(){return(Xs=e((()=>{n(),M()})))()}function Zs(){return(Zs=e((()=>{n(),M()})))()}function Qs(){return(Qs=e((()=>{n(),M()})))()}function $s(){return($s=e((()=>{n(),M()})))()}function ec(){return(ec=e((()=>{n(),M()})))()}function tc(){return(tc=e((()=>{n(),M()})))()}function nc(){return(nc=e((()=>{n(),M()})))()}function rc(){return(rc=e((()=>{n(),M()})))()}function ic(){return(ic=e((()=>{n(),M()})))()}function ac(){return(ac=e((()=>{n(),M()})))()}function oc(){return(oc=e((()=>{n(),M()})))()}function sc(){return(sc=e((()=>{n(),M()})))()}function cc(){return(cc=e((()=>{n(),M()})))()}function lc(){return(lc=e((()=>{n(),M()})))()}function uc(){return(uc=e((()=>{n(),M()})))()}function dc(){return(dc=e((()=>{n(),M()})))()}function fc(){return(fc=e((()=>{n(),M()})))()}function pc(){return(pc=e((()=>{n(),M()})))()}function mc(){return(mc=e((()=>{n(),M()})))()}function hc(){return(hc=e((()=>{n(),M()})))()}function gc(){return(gc=e((()=>{n(),M()})))()}function _c(){return(_c=e((()=>{n(),M()})))()}function vc(){return(vc=e((()=>{n(),M()})))()}function yc(){return(yc=e((()=>{n(),M()})))()}function bc(){return(bc=e((()=>{n(),M()})))()}function xc(){return(xc=e((()=>{n(),M()})))()}function Sc(){return(Sc=e((()=>{n(),M()})))()}function Cc(){return(Cc=e((()=>{n(),M()})))()}function wc(){return(wc=e((()=>{n(),M()})))()}function Tc(){return(Tc=e((()=>{n(),M()})))()}function Ec(){return(Ec=e((()=>{n(),M()})))()}function Dc(){return(Dc=e((()=>{n(),M()})))()}function Oc(){return(Oc=e((()=>{n(),M()})))()}function kc(){return(kc=e((()=>{n(),M()})))()}function Ac(){return(Ac=e((()=>{n(),M()})))()}function jc(){return(jc=e((()=>{n(),M()})))()}function Mc(){return(Mc=e((()=>{n(),M()})))()}function Nc(){return(Nc=e((()=>{n(),M()})))()}function Pc(){return(Pc=e((()=>{n(),M()})))()}function Fc(){return(Fc=e((()=>{n(),M()})))()}function Ic(){return(Ic=e((()=>{n(),M()})))()}function Lc(){return(Lc=e((()=>{n(),M()})))()}function Rc(){return(Rc=e((()=>{n(),M()})))()}function zc(){return(zc=e((()=>{n(),M()})))()}function Bc(){return(Bc=e((()=>{n(),M()})))()}function Vc(){return(Vc=e((()=>{n(),M()})))()}function Hc(){return(Hc=e((()=>{n(),M()})))()}function Uc(){return(Uc=e((()=>{n(),M()})))()}function Wc(){return(Wc=e((()=>{n(),M()})))()}function Gc(){return(Gc=e((()=>{n(),M()})))()}function Kc(){return(Kc=e((()=>{n(),M()})))()}function qc(){return(qc=e((()=>{n(),M()})))()}function Jc(){return(Jc=e((()=>{n(),M()})))()}function Yc(){return(Yc=e((()=>{n(),M()})))()}function Xc(){return(Xc=e((()=>{n(),M()})))()}function Zc(){return(Zc=e((()=>{n(),M()})))()}function Qc(){return(Qc=e((()=>{n(),M()})))()}function $c(){return($c=e((()=>{n(),M()})))()}function el(){return(el=e((()=>{n(),M()})))()}function tl(){return(tl=e((()=>{n(),M()})))()}function nl(){return(nl=e((()=>{n(),M()})))()}function rl(){return(rl=e((()=>{n(),M()})))()}function il(){return(il=e((()=>{n(),M()})))()}function al(){return(al=e((()=>{n(),M()})))()}function ol(){return(ol=e((()=>{n(),M()})))()}var sl;function cl(){return(cl=e((()=>{n(),M(),sl=({slot:e,title:t,className:n,width:r=`24`,height:a=`24`,styles:o}={})=>s`
  <svg
    slot=${j(e)}
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
    style=${j(o)}
  >
    ${N(t,()=>i`<title>${t}</title>`)}
    <path
      d="m21 18-1 1.094A2.71 2.71 0 0 1 18 20c-.75 0-1.47-.326-2-.906a2.716 2.716 0 0 0-2-.904c-.75 0-1.469.325-2 .904M3 20h1.675c.489 0 .733 0 .964-.055.204-.05.399-.13.578-.24.201-.123.374-.296.72-.642L19.5 6.5a2.121 2.121 0 0 0-3-3L3.937 16.063c-.346.346-.519.519-.642.72a2 2 0 0 0-.24.578c-.055.23-.055.475-.055.965V20Z"
    />
  </svg>
`})))()}function ll(){return(ll=e((()=>{n(),M()})))()}function ul(){return(ul=e((()=>{n(),M()})))()}function dl(){return(dl=e((()=>{n(),M()})))()}function fl(){return(fl=e((()=>{n(),M()})))()}function pl(){return(pl=e((()=>{n(),M()})))()}function ml(){return(ml=e((()=>{n(),M()})))()}function hl(){return(hl=e((()=>{n(),M()})))()}function gl(){return(gl=e((()=>{n(),M()})))()}function _l(){return(_l=e((()=>{n(),M()})))()}function vl(){return(vl=e((()=>{n(),M()})))()}function yl(){return(yl=e((()=>{n(),M()})))()}function bl(){return(bl=e((()=>{n(),M()})))()}function xl(){return(xl=e((()=>{n(),M()})))()}function Sl(){return(Sl=e((()=>{n(),M()})))()}function Cl(){return(Cl=e((()=>{n(),M()})))()}function wl(){return(wl=e((()=>{n(),M()})))()}function Tl(){return(Tl=e((()=>{n(),M()})))()}function El(){return(El=e((()=>{n(),M()})))()}function Dl(){return(Dl=e((()=>{n(),M()})))()}function Ol(){return(Ol=e((()=>{n(),M()})))()}function kl(){return(kl=e((()=>{n(),M()})))()}function Al(){return(Al=e((()=>{n(),M()})))()}function jl(){return(jl=e((()=>{n(),M()})))()}function Ml(){return(Ml=e((()=>{n(),M()})))()}function Nl(){return(Nl=e((()=>{n(),M()})))()}function Pl(){return(Pl=e((()=>{n(),M()})))()}function Fl(){return(Fl=e((()=>{n(),M()})))()}function Il(){return(Il=e((()=>{n(),M()})))()}function Ll(){return(Ll=e((()=>{n(),M()})))()}function Rl(){return(Rl=e((()=>{n(),M()})))()}function zl(){return(zl=e((()=>{n(),M()})))()}function Bl(){return(Bl=e((()=>{n(),M()})))()}function Vl(){return(Vl=e((()=>{n(),M()})))()}function Hl(){return(Hl=e((()=>{n(),M()})))()}function Ul(){return(Ul=e((()=>{n(),M()})))()}function Wl(){return(Wl=e((()=>{n(),M()})))()}function Gl(){return(Gl=e((()=>{n(),M()})))()}function Kl(){return(Kl=e((()=>{n(),M()})))()}function ql(){return(ql=e((()=>{n(),M()})))()}function Jl(){return(Jl=e((()=>{n(),M()})))()}function Yl(){return(Yl=e((()=>{n(),M()})))()}function Xl(){return(Xl=e((()=>{n(),M()})))()}function Zl(){return(Zl=e((()=>{n(),M()})))()}function Ql(){return(Ql=e((()=>{n(),M()})))()}function $l(){return($l=e((()=>{n(),M()})))()}function eu(){return(eu=e((()=>{n(),M()})))()}function tu(){return(tu=e((()=>{n(),M()})))()}function nu(){return(nu=e((()=>{n(),M()})))()}function ru(){return(ru=e((()=>{n(),M()})))()}function iu(){return(iu=e((()=>{n(),M()})))()}function au(){return(au=e((()=>{n(),M()})))()}function ou(){return(ou=e((()=>{n(),M()})))()}function su(){return(su=e((()=>{n(),M()})))()}function cu(){return(cu=e((()=>{n(),M()})))()}function lu(){return(lu=e((()=>{n(),M()})))()}function uu(){return(uu=e((()=>{n(),M()})))()}function du(){return(du=e((()=>{n(),M()})))()}function fu(){return(fu=e((()=>{n(),M()})))()}function pu(){return(pu=e((()=>{n(),M()})))()}function mu(){return(mu=e((()=>{n(),M()})))()}function hu(){return(hu=e((()=>{n(),M()})))()}function gu(){return(gu=e((()=>{n(),M()})))()}function _u(){return(_u=e((()=>{n(),M()})))()}function vu(){return(vu=e((()=>{n(),M()})))()}function yu(){return(yu=e((()=>{n(),M()})))()}function bu(){return(bu=e((()=>{n(),M()})))()}function xu(){return(xu=e((()=>{n(),M()})))()}function Su(){return(Su=e((()=>{n(),M()})))()}function Cu(){return(Cu=e((()=>{n(),M()})))()}function wu(){return(wu=e((()=>{n(),M()})))()}function Tu(){return(Tu=e((()=>{n(),M()})))()}function Eu(){return(Eu=e((()=>{n(),M()})))()}function Du(){return(Du=e((()=>{n(),M()})))()}function Ou(){return(Ou=e((()=>{n(),M()})))()}var ku;function Au(){return(Au=e((()=>{n(),M(),ku=({slot:e,title:t,className:n,width:r=`24`,height:a=`24`,styles:o}={})=>s`
  <svg
    slot=${j(e)}
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
    style=${j(o)}
  >
    ${N(t,()=>i`<title>${t}</title>`)}
    <path d="M6 12h12M3 6h18M9 18h6" />
  </svg>
`})))()}function ju(){return(ju=e((()=>{n(),M()})))()}function Mu(){return(Mu=e((()=>{n(),M()})))()}function Nu(){return(Nu=e((()=>{n(),M()})))()}function Pu(){return(Pu=e((()=>{n(),M()})))()}function Fu(){return(Fu=e((()=>{n(),M()})))()}function Iu(){return(Iu=e((()=>{n(),M()})))()}function Lu(){return(Lu=e((()=>{n(),M()})))()}function Ru(){return(Ru=e((()=>{n(),M()})))()}function zu(){return(zu=e((()=>{n(),M()})))()}function Bu(){return(Bu=e((()=>{n(),M()})))()}function Vu(){return(Vu=e((()=>{n(),M()})))()}function Hu(){return(Hu=e((()=>{n(),M()})))()}function Uu(){return(Uu=e((()=>{n(),M()})))()}function Wu(){return(Wu=e((()=>{n(),M()})))()}function Gu(){return(Gu=e((()=>{n(),M()})))()}function Ku(){return(Ku=e((()=>{n(),M()})))()}function qu(){return(qu=e((()=>{n(),M()})))()}function Ju(){return(Ju=e((()=>{n(),M()})))()}function Yu(){return(Yu=e((()=>{n(),M()})))()}function Xu(){return(Xu=e((()=>{n(),M()})))()}function Zu(){return(Zu=e((()=>{n(),M()})))()}function Qu(){return(Qu=e((()=>{n(),M()})))()}function $u(){return($u=e((()=>{n(),M()})))()}function ed(){return(ed=e((()=>{n(),M()})))()}function td(){return(td=e((()=>{n(),M()})))()}function nd(){return(nd=e((()=>{n(),M()})))()}function rd(){return(rd=e((()=>{n(),M()})))()}function id(){return(id=e((()=>{n(),M()})))()}function ad(){return(ad=e((()=>{n(),M()})))()}function od(){return(od=e((()=>{n(),M()})))()}function sd(){return(sd=e((()=>{n(),M()})))()}function cd(){return(cd=e((()=>{n(),M()})))()}function ld(){return(ld=e((()=>{n(),M()})))()}function ud(){return(ud=e((()=>{n(),M()})))()}function dd(){return(dd=e((()=>{n(),M()})))()}function fd(){return(fd=e((()=>{n(),M()})))()}function pd(){return(pd=e((()=>{n(),M()})))()}function md(){return(md=e((()=>{n(),M()})))()}function hd(){return(hd=e((()=>{n(),M()})))()}function gd(){return(gd=e((()=>{n(),M()})))()}function _d(){return(_d=e((()=>{n(),M()})))()}function vd(){return(vd=e((()=>{n(),M()})))()}function yd(){return(yd=e((()=>{n(),M()})))()}function bd(){return(bd=e((()=>{n(),M()})))()}function xd(){return(xd=e((()=>{n(),M()})))()}function Sd(){return(Sd=e((()=>{n(),M()})))()}function Cd(){return(Cd=e((()=>{n(),M()})))()}function wd(){return(wd=e((()=>{n(),M()})))()}function Td(){return(Td=e((()=>{n(),M()})))()}function Ed(){return(Ed=e((()=>{n(),M()})))()}function Dd(){return(Dd=e((()=>{n(),M()})))()}function Od(){return(Od=e((()=>{n(),M()})))()}function kd(){return(kd=e((()=>{n(),M()})))()}function Ad(){return(Ad=e((()=>{n(),M()})))()}function jd(){return(jd=e((()=>{n(),M()})))()}function Md(){return(Md=e((()=>{n(),M()})))()}function Nd(){return(Nd=e((()=>{n(),M()})))()}function Pd(){return(Pd=e((()=>{n(),M()})))()}function Fd(){return(Fd=e((()=>{n(),M()})))()}function Id(){return(Id=e((()=>{n(),M()})))()}function Ld(){return(Ld=e((()=>{n(),M()})))()}function Rd(){return(Rd=e((()=>{n(),M()})))()}function zd(){return(zd=e((()=>{n(),M()})))()}function Bd(){return(Bd=e((()=>{n(),M()})))()}function Vd(){return(Vd=e((()=>{n(),M()})))()}function Hd(){return(Hd=e((()=>{n(),M()})))()}function Ud(){return(Ud=e((()=>{n(),M()})))()}function Wd(){return(Wd=e((()=>{n(),M()})))()}function Gd(){return(Gd=e((()=>{n(),M()})))()}function Kd(){return(Kd=e((()=>{n(),M()})))()}function qd(){return(qd=e((()=>{n(),M()})))()}function Jd(){return(Jd=e((()=>{n(),M()})))()}function Yd(){return(Yd=e((()=>{n(),M()})))()}function Xd(){return(Xd=e((()=>{n(),M()})))()}function Zd(){return(Zd=e((()=>{n(),M()})))()}function Qd(){return(Qd=e((()=>{n(),M()})))()}function $d(){return($d=e((()=>{n(),M()})))()}function ef(){return(ef=e((()=>{n(),M()})))()}function tf(){return(tf=e((()=>{n(),M()})))()}function nf(){return(nf=e((()=>{n(),M()})))()}function rf(){return(rf=e((()=>{n(),M()})))()}function af(){return(af=e((()=>{n(),M()})))()}function of(){return(of=e((()=>{n(),M()})))()}function sf(){return(sf=e((()=>{n(),M()})))()}function cf(){return(cf=e((()=>{n(),M()})))()}function lf(){return(lf=e((()=>{n(),M()})))()}function uf(){return(uf=e((()=>{n(),M()})))()}function df(){return(df=e((()=>{n(),M()})))()}function ff(){return(ff=e((()=>{n(),M()})))()}function pf(){return(pf=e((()=>{n(),M()})))()}function mf(){return(mf=e((()=>{n(),M()})))()}function hf(){return(hf=e((()=>{n(),M()})))()}function gf(){return(gf=e((()=>{n(),M()})))()}function _f(){return(_f=e((()=>{n(),M()})))()}function vf(){return(vf=e((()=>{n(),M()})))()}function yf(){return(yf=e((()=>{n(),M()})))()}function bf(){return(bf=e((()=>{n(),M()})))()}function xf(){return(xf=e((()=>{n(),M()})))()}function Sf(){return(Sf=e((()=>{n(),M()})))()}function Cf(){return(Cf=e((()=>{n(),M()})))()}function wf(){return(wf=e((()=>{n(),M()})))()}function Tf(){return(Tf=e((()=>{n(),M()})))()}function Ef(){return(Ef=e((()=>{n(),M()})))()}function Df(){return(Df=e((()=>{n(),M()})))()}function Of(){return(Of=e((()=>{n(),M()})))()}function kf(){return(kf=e((()=>{n(),M()})))()}function Af(){return(Af=e((()=>{n(),M()})))()}function jf(){return(jf=e((()=>{n(),M()})))()}function Mf(){return(Mf=e((()=>{n(),M()})))()}function Nf(){return(Nf=e((()=>{n(),M()})))()}function Pf(){return(Pf=e((()=>{n(),M()})))()}function Ff(){return(Ff=e((()=>{n(),M()})))()}function If(){return(If=e((()=>{n(),M()})))()}function Lf(){return(Lf=e((()=>{n(),M()})))()}function Rf(){return(Rf=e((()=>{n(),M()})))()}function zf(){return(zf=e((()=>{n(),M()})))()}function Bf(){return(Bf=e((()=>{n(),M()})))()}function Vf(){return(Vf=e((()=>{n(),M()})))()}function Hf(){return(Hf=e((()=>{n(),M()})))()}function Uf(){return(Uf=e((()=>{n(),M()})))()}function Wf(){return(Wf=e((()=>{n(),M()})))()}function Gf(){return(Gf=e((()=>{n(),M()})))()}function Kf(){return(Kf=e((()=>{n(),M()})))()}function qf(){return(qf=e((()=>{n(),M()})))()}function Jf(){return(Jf=e((()=>{n(),M()})))()}function Yf(){return(Yf=e((()=>{n(),M()})))()}function Xf(){return(Xf=e((()=>{n(),M()})))()}function Zf(){return(Zf=e((()=>{n(),M()})))()}function Qf(){return(Qf=e((()=>{n(),M()})))()}function $f(){return($f=e((()=>{n(),M()})))()}function ep(){return(ep=e((()=>{n(),M()})))()}function tp(){return(tp=e((()=>{n(),M()})))()}function np(){return(np=e((()=>{n(),M()})))()}function rp(){return(rp=e((()=>{n(),M()})))()}function ip(){return(ip=e((()=>{n(),M()})))()}function ap(){return(ap=e((()=>{n(),M()})))()}function op(){return(op=e((()=>{n(),M()})))()}function sp(){return(sp=e((()=>{n(),M()})))()}function cp(){return(cp=e((()=>{n(),M()})))()}function lp(){return(lp=e((()=>{n(),M()})))()}function up(){return(up=e((()=>{n(),M()})))()}function dp(){return(dp=e((()=>{n(),M()})))()}function fp(){return(fp=e((()=>{n(),M()})))()}function pp(){return(pp=e((()=>{n(),M()})))()}function mp(){return(mp=e((()=>{n(),M()})))()}function hp(){return(hp=e((()=>{n(),M()})))()}function gp(){return(gp=e((()=>{n(),M()})))()}function _p(){return(_p=e((()=>{n(),M()})))()}function vp(){return(vp=e((()=>{n(),M()})))()}function yp(){return(yp=e((()=>{n(),M()})))()}function bp(){return(bp=e((()=>{n(),M()})))()}function xp(){return(xp=e((()=>{n(),M()})))()}function Sp(){return(Sp=e((()=>{n(),M()})))()}function Cp(){return(Cp=e((()=>{n(),M()})))()}function wp(){return(wp=e((()=>{n(),M()})))()}function Tp(){return(Tp=e((()=>{n(),M()})))()}function Ep(){return(Ep=e((()=>{n(),M()})))()}function Dp(){return(Dp=e((()=>{n(),M()})))()}function Op(){return(Op=e((()=>{n(),M()})))()}function kp(){return(kp=e((()=>{n(),M()})))()}function Ap(){return(Ap=e((()=>{n(),M()})))()}function jp(){return(jp=e((()=>{n(),M()})))()}function Mp(){return(Mp=e((()=>{n(),M()})))()}function Np(){return(Np=e((()=>{n(),M()})))()}function Pp(){return(Pp=e((()=>{n(),M()})))()}function Fp(){return(Fp=e((()=>{n(),M()})))()}function Ip(){return(Ip=e((()=>{n(),M()})))()}function Lp(){return(Lp=e((()=>{n(),M()})))()}function Rp(){return(Rp=e((()=>{n(),M()})))()}function zp(){return(zp=e((()=>{n(),M()})))()}function Bp(){return(Bp=e((()=>{n(),M()})))()}function Vp(){return(Vp=e((()=>{n(),M()})))()}function Hp(){return(Hp=e((()=>{n(),M()})))()}function Up(){return(Up=e((()=>{n(),M()})))()}function Wp(){return(Wp=e((()=>{n(),M()})))()}function Gp(){return(Gp=e((()=>{n(),M()})))()}function Kp(){return(Kp=e((()=>{n(),M()})))()}function qp(){return(qp=e((()=>{n(),M()})))()}function Jp(){return(Jp=e((()=>{n(),M()})))()}function Yp(){return(Yp=e((()=>{n(),M()})))()}function Xp(){return(Xp=e((()=>{n(),M()})))()}function Zp(){return(Zp=e((()=>{n(),M()})))()}function Qp(){return(Qp=e((()=>{n(),M()})))()}function $p(){return($p=e((()=>{n(),M()})))()}function em(){return(em=e((()=>{n(),M()})))()}function tm(){return(tm=e((()=>{n(),M()})))()}function nm(){return(nm=e((()=>{n(),M()})))()}function rm(){return(rm=e((()=>{n(),M()})))()}function im(){return(im=e((()=>{n(),M()})))()}function am(){return(am=e((()=>{n(),M()})))()}function om(){return(om=e((()=>{n(),M()})))()}function sm(){return(sm=e((()=>{n(),M()})))()}function cm(){return(cm=e((()=>{n(),M()})))()}function lm(){return(lm=e((()=>{n(),M()})))()}function um(){return(um=e((()=>{n(),M()})))()}function dm(){return(dm=e((()=>{n(),M()})))()}function fm(){return(fm=e((()=>{n(),M()})))()}function pm(){return(pm=e((()=>{n(),M()})))()}function mm(){return(mm=e((()=>{n(),M()})))()}function hm(){return(hm=e((()=>{n(),M()})))()}function gm(){return(gm=e((()=>{n(),M()})))()}function _m(){return(_m=e((()=>{n(),M()})))()}function vm(){return(vm=e((()=>{n(),M()})))()}function ym(){return(ym=e((()=>{n(),M()})))()}function bm(){return(bm=e((()=>{n(),M()})))()}function xm(){return(xm=e((()=>{n(),M()})))()}function Sm(){return(Sm=e((()=>{n(),M()})))()}function Cm(){return(Cm=e((()=>{n(),M()})))()}function wm(){return(wm=e((()=>{n(),M()})))()}function Tm(){return(Tm=e((()=>{n(),M()})))()}function Em(){return(Em=e((()=>{n(),M()})))()}function Dm(){return(Dm=e((()=>{n(),M()})))()}function Om(){return(Om=e((()=>{n(),M()})))()}function km(){return(km=e((()=>{n(),M()})))()}function Am(){return(Am=e((()=>{n(),M()})))()}function jm(){return(jm=e((()=>{n(),M()})))()}function Mm(){return(Mm=e((()=>{n(),M()})))()}function Nm(){return(Nm=e((()=>{n(),M()})))()}function Pm(){return(Pm=e((()=>{n(),M()})))()}function Fm(){return(Fm=e((()=>{n(),M()})))()}function Im(){return(Im=e((()=>{n(),M()})))()}function Lm(){return(Lm=e((()=>{n(),M()})))()}function Rm(){return(Rm=e((()=>{n(),M()})))()}function zm(){return(zm=e((()=>{n(),M()})))()}function Bm(){return(Bm=e((()=>{n(),M()})))()}function Vm(){return(Vm=e((()=>{n(),M()})))()}function Hm(){return(Hm=e((()=>{n(),M()})))()}function Um(){return(Um=e((()=>{n(),M()})))()}function Wm(){return(Wm=e((()=>{n(),M()})))()}function Gm(){return(Gm=e((()=>{n(),M()})))()}function Km(){return(Km=e((()=>{n(),M()})))()}function qm(){return(qm=e((()=>{n(),M()})))()}function Jm(){return(Jm=e((()=>{n(),M()})))()}function Ym(){return(Ym=e((()=>{n(),M()})))()}function Xm(){return(Xm=e((()=>{n(),M()})))()}function Zm(){return(Zm=e((()=>{n(),M()})))()}function Qm(){return(Qm=e((()=>{n(),M()})))()}function $m(){return($m=e((()=>{n(),M()})))()}function eh(){return(eh=e((()=>{n(),M()})))()}function th(){return(th=e((()=>{n(),M()})))()}function nh(){return(nh=e((()=>{n(),M()})))()}function rh(){return(rh=e((()=>{n(),M()})))()}function ih(){return(ih=e((()=>{n(),M()})))()}function ah(){return(ah=e((()=>{n(),M()})))()}function oh(){return(oh=e((()=>{n(),M()})))()}function sh(){return(sh=e((()=>{n(),M()})))()}function ch(){return(ch=e((()=>{n(),M()})))()}function lh(){return(lh=e((()=>{n(),M()})))()}function uh(){return(uh=e((()=>{n(),M()})))()}function dh(){return(dh=e((()=>{n(),M()})))()}function fh(){return(fh=e((()=>{n(),M()})))()}function ph(){return(ph=e((()=>{n(),M()})))()}function mh(){return(mh=e((()=>{n(),M()})))()}function hh(){return(hh=e((()=>{n(),M()})))()}function gh(){return(gh=e((()=>{n(),M()})))()}function _h(){return(_h=e((()=>{n(),M()})))()}function vh(){return(vh=e((()=>{n(),M()})))()}function yh(){return(yh=e((()=>{n(),M()})))()}function bh(){return(bh=e((()=>{n(),M()})))()}function xh(){return(xh=e((()=>{n(),M()})))()}function Sh(){return(Sh=e((()=>{n(),M()})))()}function Ch(){return(Ch=e((()=>{n(),M()})))()}function wh(){return(wh=e((()=>{n(),M()})))()}function Th(){return(Th=e((()=>{n(),M()})))()}function Eh(){return(Eh=e((()=>{n(),M()})))()}function Dh(){return(Dh=e((()=>{n(),M()})))()}function Oh(){return(Oh=e((()=>{n(),M()})))()}function kh(){return(kh=e((()=>{n(),M()})))()}function Ah(){return(Ah=e((()=>{n(),M()})))()}function jh(){return(jh=e((()=>{n(),M()})))()}function Mh(){return(Mh=e((()=>{n(),M()})))()}function Nh(){return(Nh=e((()=>{n(),M()})))()}function Ph(){return(Ph=e((()=>{n(),M()})))()}function Fh(){return(Fh=e((()=>{n(),M()})))()}function Ih(){return(Ih=e((()=>{n(),M()})))()}function Lh(){return(Lh=e((()=>{n(),M()})))()}function Rh(){return(Rh=e((()=>{n(),M()})))()}function zh(){return(zh=e((()=>{n(),M()})))()}function Bh(){return(Bh=e((()=>{n(),M()})))()}function Vh(){return(Vh=e((()=>{n(),M()})))()}function Hh(){return(Hh=e((()=>{n(),M()})))()}function Uh(){return(Uh=e((()=>{n(),M()})))()}function Wh(){return(Wh=e((()=>{n(),M()})))()}function Gh(){return(Gh=e((()=>{n(),M()})))()}function Kh(){return(Kh=e((()=>{n(),M()})))()}function qh(){return(qh=e((()=>{n(),M()})))()}function Jh(){return(Jh=e((()=>{n(),M()})))()}function Yh(){return(Yh=e((()=>{n(),M()})))()}function Xh(){return(Xh=e((()=>{n(),M()})))()}function Zh(){return(Zh=e((()=>{n(),M()})))()}function Qh(){return(Qh=e((()=>{n(),M()})))()}function $h(){return($h=e((()=>{n(),M()})))()}function eg(){return(eg=e((()=>{n(),M()})))()}function tg(){return(tg=e((()=>{n(),M()})))()}function ng(){return(ng=e((()=>{n(),M()})))()}function rg(){return(rg=e((()=>{n(),M()})))()}function ig(){return(ig=e((()=>{n(),M()})))()}function ag(){return(ag=e((()=>{n(),M()})))()}function og(){return(og=e((()=>{n(),M()})))()}function sg(){return(sg=e((()=>{n(),M()})))()}function cg(){return(cg=e((()=>{n(),M()})))()}function lg(){return(lg=e((()=>{n(),M()})))()}function ug(){return(ug=e((()=>{n(),M()})))()}function dg(){return(dg=e((()=>{n(),M()})))()}function fg(){return(fg=e((()=>{n(),M()})))()}function pg(){return(pg=e((()=>{n(),M()})))()}function mg(){return(mg=e((()=>{n(),M()})))()}function hg(){return(hg=e((()=>{n(),M()})))()}function gg(){return(gg=e((()=>{n(),M()})))()}function _g(){return(_g=e((()=>{n(),M()})))()}function vg(){return(vg=e((()=>{n(),M()})))()}function yg(){return(yg=e((()=>{n(),M()})))()}function bg(){return(bg=e((()=>{n(),M()})))()}function xg(){return(xg=e((()=>{n(),M()})))()}function Sg(){return(Sg=e((()=>{n(),M()})))()}function Cg(){return(Cg=e((()=>{n(),M()})))()}function wg(){return(wg=e((()=>{n(),M()})))()}function Tg(){return(Tg=e((()=>{n(),M()})))()}function Eg(){return(Eg=e((()=>{n(),M()})))()}function Dg(){return(Dg=e((()=>{n(),M()})))()}function Og(){return(Og=e((()=>{n(),M()})))()}function kg(){return(kg=e((()=>{n(),M()})))()}function Ag(){return(Ag=e((()=>{n(),M()})))()}function jg(){return(jg=e((()=>{n(),M()})))()}function Mg(){return(Mg=e((()=>{n(),M()})))()}function Ng(){return(Ng=e((()=>{n(),M()})))()}function Pg(){return(Pg=e((()=>{n(),M()})))()}function Fg(){return(Fg=e((()=>{n(),M()})))()}function Ig(){return(Ig=e((()=>{n(),M()})))()}function Lg(){return(Lg=e((()=>{n(),M()})))()}function Rg(){return(Rg=e((()=>{n(),M()})))()}function zg(){return(zg=e((()=>{n(),M()})))()}function Bg(){return(Bg=e((()=>{n(),M()})))()}function Vg(){return(Vg=e((()=>{n(),M()})))()}function Hg(){return(Hg=e((()=>{n(),M()})))()}function Ug(){return(Ug=e((()=>{n(),M()})))()}function Wg(){return(Wg=e((()=>{n(),M()})))()}function Gg(){return(Gg=e((()=>{n(),M()})))()}function Kg(){return(Kg=e((()=>{n(),M()})))()}function qg(){return(qg=e((()=>{n(),M()})))()}function Jg(){return(Jg=e((()=>{n(),M()})))()}function Yg(){return(Yg=e((()=>{n(),M()})))()}function Xg(){return(Xg=e((()=>{n(),M()})))()}function Zg(){return(Zg=e((()=>{n(),M()})))()}function Qg(){return(Qg=e((()=>{n(),M()})))()}function $g(){return($g=e((()=>{n(),M()})))()}function e_(){return(e_=e((()=>{n(),M()})))()}function t_(){return(t_=e((()=>{n(),M()})))()}function n_(){return(n_=e((()=>{n(),M()})))()}function r_(){return(r_=e((()=>{n(),M()})))()}function i_(){return(i_=e((()=>{n(),M()})))()}function a_(){return(a_=e((()=>{n(),M()})))()}function o_(){return(o_=e((()=>{n(),M()})))()}function s_(){return(s_=e((()=>{n(),M()})))()}function c_(){return(c_=e((()=>{n(),M()})))()}function l_(){return(l_=e((()=>{n(),M()})))()}function u_(){return(u_=e((()=>{n(),M()})))()}function d_(){return(d_=e((()=>{n(),M()})))()}function f_(){return(f_=e((()=>{n(),M()})))()}function p_(){return(p_=e((()=>{n(),M()})))()}function m_(){return(m_=e((()=>{n(),M()})))()}function h_(){return(h_=e((()=>{n(),M()})))()}function g_(){return(g_=e((()=>{n(),M()})))()}function __(){return(__=e((()=>{n(),M()})))()}function v_(){return(v_=e((()=>{n(),M()})))()}function y_(){return(y_=e((()=>{n(),M()})))()}function b_(){return(b_=e((()=>{n(),M()})))()}function x_(){return(x_=e((()=>{n(),M()})))()}function S_(){return(S_=e((()=>{n(),M()})))()}function C_(){return(C_=e((()=>{n(),M()})))()}function w_(){return(w_=e((()=>{n(),M()})))()}function T_(){return(T_=e((()=>{n(),M()})))()}function E_(){return(E_=e((()=>{n(),M()})))()}function D_(){return(D_=e((()=>{n(),M()})))()}function O_(){return(O_=e((()=>{n(),M()})))()}function k_(){return(k_=e((()=>{n(),M()})))()}function A_(){return(A_=e((()=>{n(),M()})))()}function j_(){return(j_=e((()=>{n(),M()})))()}function M_(){return(M_=e((()=>{n(),M()})))()}function N_(){return(N_=e((()=>{n(),M()})))()}function P_(){return(P_=e((()=>{n(),M()})))()}function F_(){return(F_=e((()=>{n(),M()})))()}function I_(){return(I_=e((()=>{n(),M()})))()}function L_(){return(L_=e((()=>{n(),M()})))()}function R_(){return(R_=e((()=>{n(),M()})))()}function z_(){return(z_=e((()=>{n(),M()})))()}function B_(){return(B_=e((()=>{n(),M()})))()}function V_(){return(V_=e((()=>{n(),M()})))()}function H_(){return(H_=e((()=>{n(),M()})))()}function U_(){return(U_=e((()=>{n(),M()})))()}function W_(){return(W_=e((()=>{n(),M()})))()}function G_(){return(G_=e((()=>{n(),M()})))()}function K_(){return(K_=e((()=>{n(),M()})))()}function q_(){return(q_=e((()=>{n(),M()})))()}function J_(){return(J_=e((()=>{n(),M()})))()}function Y_(){return(Y_=e((()=>{n(),M()})))()}function X_(){return(X_=e((()=>{n(),M()})))()}function Z_(){return(Z_=e((()=>{n(),M()})))()}function Q_(){return(Q_=e((()=>{n(),M()})))()}function $_(){return($_=e((()=>{n(),M()})))()}function ev(){return(ev=e((()=>{n(),M()})))()}function tv(){return(tv=e((()=>{n(),M()})))()}function nv(){return(nv=e((()=>{n(),M()})))()}function rv(){return(rv=e((()=>{n(),M()})))()}function iv(){return(iv=e((()=>{n(),M()})))()}function av(){return(av=e((()=>{n(),M()})))()}function ov(){return(ov=e((()=>{n(),M()})))()}function sv(){return(sv=e((()=>{n(),M()})))()}function cv(){return(cv=e((()=>{n(),M()})))()}function lv(){return(lv=e((()=>{n(),M()})))()}function uv(){return(uv=e((()=>{n(),M()})))()}function dv(){return(dv=e((()=>{n(),M()})))()}function fv(){return(fv=e((()=>{n(),M()})))()}function pv(){return(pv=e((()=>{n(),M()})))()}function mv(){return(mv=e((()=>{n(),M()})))()}function hv(){return(hv=e((()=>{n(),M()})))()}function gv(){return(gv=e((()=>{n(),M()})))()}function _v(){return(_v=e((()=>{n(),M()})))()}function vv(){return(vv=e((()=>{n(),M()})))()}function yv(){return(yv=e((()=>{n(),M()})))()}function bv(){return(bv=e((()=>{n(),M()})))()}function xv(){return(xv=e((()=>{n(),M()})))()}function Sv(){return(Sv=e((()=>{n(),M()})))()}function Cv(){return(Cv=e((()=>{n(),M()})))()}function wv(){return(wv=e((()=>{n(),M()})))()}function Tv(){return(Tv=e((()=>{n(),M()})))()}function Ev(){return(Ev=e((()=>{n(),M()})))()}function Dv(){return(Dv=e((()=>{n(),M()})))()}function Ov(){return(Ov=e((()=>{n(),M()})))()}function kv(){return(kv=e((()=>{n(),M()})))()}function Av(){return(Av=e((()=>{n(),M()})))()}function jv(){return(jv=e((()=>{n(),M()})))()}function Mv(){return(Mv=e((()=>{n(),M()})))()}function Nv(){return(Nv=e((()=>{n(),M()})))()}function Pv(){return(Pv=e((()=>{n(),M()})))()}function Fv(){return(Fv=e((()=>{n(),M()})))()}function Iv(){return(Iv=e((()=>{n(),M()})))()}function Lv(){return(Lv=e((()=>{n(),M()})))()}function Rv(){return(Rv=e((()=>{n(),M()})))()}function zv(){return(zv=e((()=>{n(),M()})))()}function Bv(){return(Bv=e((()=>{n(),M()})))()}function Vv(){return(Vv=e((()=>{n(),M()})))()}function Hv(){return(Hv=e((()=>{n(),M()})))()}function Uv(){return(Uv=e((()=>{n(),M()})))()}function Wv(){return(Wv=e((()=>{n(),M()})))()}function Gv(){return(Gv=e((()=>{n(),M()})))()}function Kv(){return(Kv=e((()=>{n(),M()})))()}function qv(){return(qv=e((()=>{n(),M()})))()}function Jv(){return(Jv=e((()=>{n(),M()})))()}function Yv(){return(Yv=e((()=>{n(),M()})))()}function Xv(){return(Xv=e((()=>{n(),M()})))()}function Zv(){return(Zv=e((()=>{n(),M()})))()}function Qv(){return(Qv=e((()=>{n(),M()})))()}function $v(){return($v=e((()=>{n(),M()})))()}function ey(){return(ey=e((()=>{n(),M()})))()}function ty(){return(ty=e((()=>{n(),M()})))()}function ny(){return(ny=e((()=>{n(),M()})))()}function ry(){return(ry=e((()=>{n(),M()})))()}function iy(){return(iy=e((()=>{n(),M()})))()}function ay(){return(ay=e((()=>{n(),M()})))()}function oy(){return(oy=e((()=>{n(),M()})))()}function sy(){return(sy=e((()=>{n(),M()})))()}function cy(){return(cy=e((()=>{n(),M()})))()}function ly(){return(ly=e((()=>{n(),M()})))()}function uy(){return(uy=e((()=>{n(),M()})))()}function dy(){return(dy=e((()=>{n(),M()})))()}function fy(){return(fy=e((()=>{n(),M()})))()}function py(){return(py=e((()=>{n(),M()})))()}function my(){return(my=e((()=>{n(),M()})))()}function hy(){return(hy=e((()=>{n(),M()})))()}function gy(){return(gy=e((()=>{n(),M()})))()}function _y(){return(_y=e((()=>{n(),M()})))()}function vy(){return(vy=e((()=>{n(),M()})))()}function yy(){return(yy=e((()=>{n(),M()})))()}function by(){return(by=e((()=>{n(),M()})))()}function xy(){return(xy=e((()=>{n(),M()})))()}function Sy(){return(Sy=e((()=>{n(),M()})))()}function Cy(){return(Cy=e((()=>{n(),M()})))()}function wy(){return(wy=e((()=>{n(),M()})))()}function Ty(){return(Ty=e((()=>{n(),M()})))()}function Ey(){return(Ey=e((()=>{n(),M()})))()}function Dy(){return(Dy=e((()=>{n(),M()})))()}function Oy(){return(Oy=e((()=>{n(),M()})))()}function ky(){return(ky=e((()=>{n(),M()})))()}function Ay(){return(Ay=e((()=>{n(),M()})))()}function jy(){return(jy=e((()=>{n(),M()})))()}function My(){return(My=e((()=>{n(),M()})))()}function Ny(){return(Ny=e((()=>{n(),M()})))()}function Py(){return(Py=e((()=>{n(),M()})))()}function Fy(){return(Fy=e((()=>{n(),M()})))()}function Iy(){return(Iy=e((()=>{n(),M()})))()}function Ly(){return(Ly=e((()=>{n(),M()})))()}function Ry(){return(Ry=e((()=>{n(),M()})))()}function zy(){return(zy=e((()=>{n(),M()})))()}function By(){return(By=e((()=>{n(),M()})))()}function Vy(){return(Vy=e((()=>{n(),M()})))()}function Hy(){return(Hy=e((()=>{n(),M()})))()}function Uy(){return(Uy=e((()=>{n(),M()})))()}function Wy(){return(Wy=e((()=>{n(),M()})))()}function Gy(){return(Gy=e((()=>{n(),M()})))()}function Ky(){return(Ky=e((()=>{n(),M()})))()}function qy(){return(qy=e((()=>{n(),M()})))()}function Jy(){return(Jy=e((()=>{n(),M()})))()}function Yy(){return(Yy=e((()=>{n(),M()})))()}function Xy(){return(Xy=e((()=>{n(),M()})))()}function Zy(){return(Zy=e((()=>{n(),M()})))()}function Qy(){return(Qy=e((()=>{n(),M()})))()}function $y(){return($y=e((()=>{n(),M()})))()}function eb(){return(eb=e((()=>{n(),M()})))()}function tb(){return(tb=e((()=>{n(),M()})))()}function nb(){return(nb=e((()=>{n(),M()})))()}function rb(){return(rb=e((()=>{n(),M()})))()}function ib(){return(ib=e((()=>{n(),M()})))()}function ab(){return(ab=e((()=>{n(),M()})))()}function ob(){return(ob=e((()=>{n(),M()})))()}function sb(){return(sb=e((()=>{n(),M()})))()}function cb(){return(cb=e((()=>{n(),M()})))()}function lb(){return(lb=e((()=>{n(),M()})))()}function ub(){return(ub=e((()=>{n(),M()})))()}function db(){return(db=e((()=>{n(),M()})))()}function fb(){return(fb=e((()=>{n(),M()})))()}function pb(){return(pb=e((()=>{n(),M()})))()}function mb(){return(mb=e((()=>{n(),M()})))()}function hb(){return(hb=e((()=>{n(),M()})))()}function gb(){return(gb=e((()=>{n(),M()})))()}function _b(){return(_b=e((()=>{n(),M()})))()}function vb(){return(vb=e((()=>{n(),M()})))()}function yb(){return(yb=e((()=>{n(),M()})))()}function bb(){return(bb=e((()=>{n(),M()})))()}function xb(){return(xb=e((()=>{n(),M()})))()}function Sb(){return(Sb=e((()=>{n(),M()})))()}function Cb(){return(Cb=e((()=>{n(),M()})))()}function wb(){return(wb=e((()=>{n(),M()})))()}function Tb(){return(Tb=e((()=>{n(),M()})))()}function Eb(){return(Eb=e((()=>{n(),M()})))()}function Db(){return(Db=e((()=>{n(),M()})))()}function Ob(){return(Ob=e((()=>{n(),M()})))()}function kb(){return(kb=e((()=>{n(),M()})))()}function Ab(){return(Ab=e((()=>{n(),M()})))()}function jb(){return(jb=e((()=>{n(),M()})))()}function Mb(){return(Mb=e((()=>{n(),M()})))()}function Nb(){return(Nb=e((()=>{n(),M()})))()}function Pb(){return(Pb=e((()=>{n(),M()})))()}function Fb(){return(Fb=e((()=>{n(),M()})))()}function Ib(){return(Ib=e((()=>{n(),M()})))()}function Lb(){return(Lb=e((()=>{n(),M()})))()}function Rb(){return(Rb=e((()=>{n(),M()})))()}function zb(){return(zb=e((()=>{n(),M()})))()}function Bb(){return(Bb=e((()=>{n(),M()})))()}function Vb(){return(Vb=e((()=>{n(),M()})))()}function Hb(){return(Hb=e((()=>{n(),M()})))()}function Ub(){return(Ub=e((()=>{n(),M()})))()}function Wb(){return(Wb=e((()=>{n(),M()})))()}function Gb(){return(Gb=e((()=>{n(),M()})))()}function Kb(){return(Kb=e((()=>{n(),M()})))()}function qb(){return(qb=e((()=>{n(),M()})))()}function Jb(){return(Jb=e((()=>{n(),M()})))()}function Yb(){return(Yb=e((()=>{n(),M()})))()}function Xb(){return(Xb=e((()=>{n(),M()})))()}function Zb(){return(Zb=e((()=>{n(),M()})))()}function Qb(){return(Qb=e((()=>{n(),M()})))()}function $b(){return($b=e((()=>{n(),M()})))()}function ex(){return(ex=e((()=>{n(),M()})))()}function tx(){return(tx=e((()=>{n(),M()})))()}function nx(){return(nx=e((()=>{n(),M()})))()}function rx(){return(rx=e((()=>{n(),M()})))()}function ix(){return(ix=e((()=>{n(),M()})))()}function ax(){return(ax=e((()=>{n(),M()})))()}function ox(){return(ox=e((()=>{n(),M()})))()}var sx;function cx(){return(cx=e((()=>{n(),M(),sx=({slot:e,title:t,className:n,width:r=`24`,height:a=`24`,styles:o}={})=>s`
  <svg
    slot=${j(e)}
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
    style=${j(o)}
  >
    ${N(t,()=>i`<title>${t}</title>`)}
    <path
      d="M16 6v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.48 2 13.92 2 12.8 2h-1.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C8 3.52 8 4.08 8 5.2V6m2 5.5v5m4-5v5M3 6h18m-2 0v11.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C16.72 22 15.88 22 14.2 22H9.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C5 19.72 5 18.88 5 17.2V6"
    />
  </svg>
`})))()}function lx(){return(lx=e((()=>{n(),M()})))()}function ux(){return(ux=e((()=>{n(),M()})))()}function dx(){return(dx=e((()=>{n(),M()})))()}function fx(){return(fx=e((()=>{n(),M()})))()}function px(){return(px=e((()=>{n(),M()})))()}function mx(){return(mx=e((()=>{n(),M()})))()}function hx(){return(hx=e((()=>{n(),M()})))()}function gx(){return(gx=e((()=>{n(),M()})))()}function _x(){return(_x=e((()=>{n(),M()})))()}function vx(){return(vx=e((()=>{n(),M()})))()}function yx(){return(yx=e((()=>{n(),M()})))()}function bx(){return(bx=e((()=>{n(),M()})))()}function xx(){return(xx=e((()=>{n(),M()})))()}function Sx(){return(Sx=e((()=>{n(),M()})))()}function Cx(){return(Cx=e((()=>{n(),M()})))()}function wx(){return(wx=e((()=>{n(),M()})))()}function Tx(){return(Tx=e((()=>{n(),M()})))()}function Ex(){return(Ex=e((()=>{n(),M()})))()}function Dx(){return(Dx=e((()=>{n(),M()})))()}function Ox(){return(Ox=e((()=>{n(),M()})))()}function kx(){return(kx=e((()=>{n(),M()})))()}function Ax(){return(Ax=e((()=>{n(),M()})))()}function jx(){return(jx=e((()=>{n(),M()})))()}function Mx(){return(Mx=e((()=>{n(),M()})))()}function Nx(){return(Nx=e((()=>{n(),M()})))()}function Px(){return(Px=e((()=>{n(),M()})))()}function Fx(){return(Fx=e((()=>{n(),M()})))()}function Ix(){return(Ix=e((()=>{n(),M()})))()}function Lx(){return(Lx=e((()=>{n(),M()})))()}function Rx(){return(Rx=e((()=>{n(),M()})))()}function zx(){return(zx=e((()=>{n(),M()})))()}function Bx(){return(Bx=e((()=>{n(),M()})))()}function Vx(){return(Vx=e((()=>{n(),M()})))()}function Hx(){return(Hx=e((()=>{n(),M()})))()}function Ux(){return(Ux=e((()=>{n(),M()})))()}function Wx(){return(Wx=e((()=>{n(),M()})))()}function Gx(){return(Gx=e((()=>{n(),M()})))()}function Kx(){return(Kx=e((()=>{n(),M()})))()}function qx(){return(qx=e((()=>{n(),M()})))()}function Jx(){return(Jx=e((()=>{n(),M()})))()}function Yx(){return(Yx=e((()=>{n(),M()})))()}function Xx(){return(Xx=e((()=>{n(),M()})))()}function Zx(){return(Zx=e((()=>{n(),M()})))()}function Qx(){return(Qx=e((()=>{n(),M()})))()}function $x(){return($x=e((()=>{n(),M()})))()}function eS(){return(eS=e((()=>{n(),M()})))()}function tS(){return(tS=e((()=>{n(),M()})))()}function nS(){return(nS=e((()=>{n(),M()})))()}function rS(){return(rS=e((()=>{n(),M()})))()}function iS(){return(iS=e((()=>{n(),M()})))()}function aS(){return(aS=e((()=>{n(),M()})))()}function oS(){return(oS=e((()=>{n(),M()})))()}function sS(){return(sS=e((()=>{n(),M()})))()}function cS(){return(cS=e((()=>{n(),M()})))()}function lS(){return(lS=e((()=>{n(),M()})))()}function uS(){return(uS=e((()=>{n(),M()})))()}function dS(){return(dS=e((()=>{n(),M()})))()}function fS(){return(fS=e((()=>{n(),M()})))()}function pS(){return(pS=e((()=>{n(),M()})))()}function mS(){return(mS=e((()=>{n(),M()})))()}function hS(){return(hS=e((()=>{n(),M()})))()}function gS(){return(gS=e((()=>{n(),M()})))()}function _S(){return(_S=e((()=>{n(),M()})))()}function vS(){return(vS=e((()=>{n(),M()})))()}function yS(){return(yS=e((()=>{n(),M()})))()}function bS(){return(bS=e((()=>{n(),M()})))()}function xS(){return(xS=e((()=>{n(),M()})))()}function SS(){return(SS=e((()=>{n(),M()})))()}function CS(){return(CS=e((()=>{n(),M()})))()}function wS(){return(wS=e((()=>{n(),M()})))()}function TS(){return(TS=e((()=>{n(),M()})))()}function ES(){return(ES=e((()=>{n(),M()})))()}function DS(){return(DS=e((()=>{n(),M()})))()}function OS(){return(OS=e((()=>{n(),M()})))()}function kS(){return(kS=e((()=>{n(),M()})))()}function AS(){return(AS=e((()=>{n(),M()})))()}function jS(){return(jS=e((()=>{n(),M()})))()}function MS(){return(MS=e((()=>{n(),M()})))()}function NS(){return(NS=e((()=>{n(),M()})))()}function PS(){return(PS=e((()=>{n(),M()})))()}function FS(){return(FS=e((()=>{n(),M()})))()}function IS(){return(IS=e((()=>{n(),M()})))()}function LS(){return(LS=e((()=>{n(),M()})))()}function RS(){return(RS=e((()=>{n(),M()})))()}function zS(){return(zS=e((()=>{n(),M()})))()}function BS(){return(BS=e((()=>{n(),M()})))()}function VS(){return(VS=e((()=>{n(),M()})))()}function HS(){return(HS=e((()=>{n(),M()})))()}function US(){return(US=e((()=>{n(),M()})))()}function WS(){return(WS=e((()=>{n(),M()})))()}function GS(){return(GS=e((()=>{n(),M()})))()}function KS(){return(KS=e((()=>{n(),M()})))()}function qS(){return(qS=e((()=>{n(),M()})))()}function JS(){return(JS=e((()=>{n(),M()})))()}function YS(){return(YS=e((()=>{n(),M()})))()}function XS(){return(XS=e((()=>{n(),M()})))()}function ZS(){return(ZS=e((()=>{n(),M()})))()}function QS(){return(QS=e((()=>{n(),M()})))()}function $S(){return($S=e((()=>{n(),M()})))()}function eC(){return(eC=e((()=>{n(),M()})))()}function tC(){return(tC=e((()=>{n(),M()})))()}function nC(){return(nC=e((()=>{n(),M()})))()}function rC(){return(rC=e((()=>{n(),M()})))()}function iC(){return(iC=e((()=>{n(),M()})))()}function aC(){return(aC=e((()=>{mt(),ht(),gt(),_t(),vt(),yt(),bt(),xt(),St(),Ct(),wt(),Tt(),Et(),Dt(),Ot(),kt(),At(),jt(),Mt(),Nt(),Pt(),Ft(),It(),Lt(),Rt(),zt(),Bt(),Vt(),Ht(),Ut(),Wt(),Gt(),Kt(),qt(),Jt(),Yt(),Xt(),Zt(),Qt(),$t(),en(),tn(),nn(),rn(),an(),on(),sn(),cn(),ln(),un(),dn(),fn(),pn(),mn(),hn(),gn(),_n(),vn(),yn(),bn(),xn(),Sn(),Cn(),wn(),Tn(),En(),Dn(),On(),kn(),An(),jn(),Mn(),Nn(),Pn(),Fn(),In(),Ln(),Rn(),zn(),Bn(),Vn(),Hn(),Un(),Wn(),Gn(),Kn(),qn(),Jn(),Yn(),Xn(),Zn(),Qn(),$n(),er(),tr(),nr(),rr(),ir(),ar(),or(),sr(),cr(),lr(),ur(),dr(),fr(),pr(),mr(),hr(),gr(),_r(),vr(),yr(),br(),xr(),Sr(),Cr(),wr(),Tr(),Er(),Dr(),Or(),kr(),Ar(),jr(),Mr(),Nr(),Pr(),Fr(),Ir(),Lr(),Rr(),zr(),Br(),Vr(),Hr(),Ur(),Wr(),Gr(),Kr(),qr(),Jr(),Yr(),Xr(),Zr(),Qr(),$r(),ei(),ti(),ni(),ri(),ii(),ai(),oi(),si(),ci(),li(),ui(),di(),fi(),pi(),mi(),hi(),gi(),_i(),vi(),yi(),bi(),xi(),Si(),Ci(),wi(),Ti(),Ei(),Di(),Oi(),ki(),Ai(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Li(),Ri(),zi(),Bi(),Vi(),Hi(),Ui(),Wi(),Gi(),Ki(),qi(),Ji(),Yi(),Xi(),Zi(),Qi(),$i(),ea(),ta(),na(),ra(),ia(),aa(),oa(),sa(),ca(),la(),ua(),da(),fa(),pa(),ma(),ha(),ga(),_a(),va(),ya(),ba(),xa(),Sa(),Ca(),wa(),Ta(),Ea(),Da(),Oa(),ka(),Aa(),ja(),Ma(),Na(),Pa(),Fa(),Ia(),La(),Ra(),za(),Ba(),Va(),Ha(),Ua(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Za(),Qa(),$a(),eo(),to(),no(),ro(),io(),ao(),oo(),so(),co(),lo(),uo(),fo(),po(),mo(),ho(),go(),_o(),vo(),yo(),bo(),xo(),So(),Co(),wo(),To(),Eo(),Do(),Oo(),ko(),Ao(),jo(),Mo(),No(),Po(),Fo(),Io(),Lo(),Ro(),zo(),Bo(),Vo(),Ho(),Uo(),Wo(),Go(),Ko(),qo(),Jo(),Yo(),Xo(),Zo(),Qo(),$o(),es(),ts(),ns(),rs(),is(),as(),os(),ss(),cs(),ls(),us(),ds(),fs(),ps(),ms(),hs(),gs(),_s(),vs(),ys(),bs(),xs(),Ss(),Cs(),ws(),Ts(),Es(),Ds(),Os(),ks(),As(),js(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec(),Dc(),Oc(),kc(),Ac(),jc(),Mc(),Nc(),Pc(),Fc(),Ic(),Lc(),Rc(),zc(),Bc(),Vc(),Hc(),Uc(),Wc(),Gc(),Kc(),qc(),Jc(),Yc(),Xc(),Zc(),Qc(),$c(),el(),tl(),nl(),rl(),il(),al(),ol(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),Rl(),zl(),Bl(),Vl(),Hl(),Ul(),Wl(),Gl(),Kl(),ql(),Jl(),Yl(),Xl(),Zl(),Ql(),$l(),eu(),tu(),nu(),ru(),iu(),au(),ou(),su(),cu(),lu(),uu(),du(),fu(),pu(),mu(),hu(),gu(),_u(),vu(),yu(),bu(),xu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),Au(),ju(),Mu(),Nu(),Pu(),Fu(),Iu(),Lu(),Ru(),zu(),Bu(),Vu(),Hu(),Uu(),Wu(),Gu(),Ku(),qu(),Ju(),Yu(),Xu(),Zu(),Qu(),$u(),ed(),td(),nd(),rd(),id(),ad(),od(),sd(),cd(),ld(),ud(),dd(),fd(),pd(),md(),hd(),gd(),_d(),vd(),yd(),bd(),xd(),Sd(),Cd(),wd(),Td(),Ed(),Dd(),Od(),kd(),Ad(),jd(),Md(),Nd(),Pd(),Fd(),Id(),Ld(),Rd(),zd(),Bd(),Vd(),Hd(),Ud(),Wd(),Gd(),Kd(),qd(),Jd(),Yd(),Xd(),Zd(),Qd(),$d(),ef(),tf(),nf(),rf(),af(),of(),sf(),cf(),lf(),uf(),df(),ff(),pf(),mf(),hf(),gf(),_f(),vf(),yf(),bf(),xf(),Sf(),Cf(),wf(),Tf(),Ef(),Df(),Of(),kf(),Af(),jf(),Mf(),Nf(),Pf(),Ff(),If(),Lf(),Rf(),zf(),Bf(),Vf(),Hf(),Uf(),Wf(),Gf(),Kf(),qf(),Jf(),Yf(),Xf(),Zf(),Qf(),$f(),ep(),tp(),np(),rp(),ip(),ap(),op(),sp(),cp(),lp(),up(),dp(),fp(),pp(),mp(),hp(),gp(),_p(),vp(),yp(),bp(),xp(),Sp(),Cp(),wp(),Tp(),Ep(),Dp(),Op(),kp(),Ap(),jp(),Mp(),Np(),Pp(),Fp(),Ip(),Lp(),Rp(),zp(),Bp(),Vp(),Hp(),Up(),Wp(),Gp(),Kp(),qp(),Jp(),Yp(),Xp(),Zp(),Qp(),$p(),em(),tm(),nm(),rm(),im(),am(),om(),sm(),cm(),lm(),um(),dm(),fm(),pm(),mm(),hm(),gm(),_m(),vm(),ym(),bm(),xm(),Sm(),Cm(),wm(),Tm(),Em(),Dm(),Om(),km(),Am(),jm(),Mm(),Nm(),Pm(),Fm(),Im(),Lm(),Rm(),zm(),Bm(),Vm(),Hm(),Um(),Wm(),Gm(),Km(),qm(),Jm(),Ym(),Xm(),Zm(),Qm(),$m(),eh(),th(),nh(),rh(),ih(),ah(),oh(),sh(),ch(),lh(),uh(),dh(),fh(),ph(),mh(),hh(),gh(),_h(),vh(),yh(),bh(),xh(),Sh(),Ch(),wh(),Th(),Eh(),Dh(),Oh(),kh(),Ah(),jh(),Mh(),Nh(),Ph(),Fh(),Ih(),Lh(),Rh(),zh(),Bh(),Vh(),Hh(),Uh(),Wh(),Gh(),Kh(),qh(),Jh(),Yh(),Xh(),Zh(),Qh(),$h(),eg(),tg(),ng(),rg(),ig(),ag(),og(),sg(),cg(),lg(),ug(),dg(),fg(),pg(),mg(),hg(),gg(),_g(),vg(),yg(),bg(),xg(),Sg(),Cg(),wg(),Tg(),Eg(),Dg(),Og(),kg(),Ag(),jg(),Mg(),Ng(),Pg(),Fg(),Ig(),Lg(),Rg(),zg(),Bg(),Vg(),Hg(),Ug(),Wg(),Gg(),Kg(),qg(),Jg(),Yg(),Xg(),Zg(),Qg(),$g(),e_(),t_(),n_(),r_(),i_(),a_(),o_(),s_(),c_(),l_(),u_(),d_(),f_(),p_(),m_(),h_(),g_(),__(),v_(),y_(),b_(),x_(),S_(),C_(),w_(),T_(),E_(),D_(),O_(),k_(),A_(),j_(),M_(),N_(),P_(),F_(),I_(),L_(),R_(),z_(),B_(),V_(),H_(),U_(),W_(),G_(),K_(),q_(),J_(),Y_(),X_(),Z_(),Q_(),$_(),ev(),tv(),nv(),rv(),iv(),av(),ov(),sv(),cv(),lv(),uv(),dv(),fv(),pv(),mv(),hv(),gv(),_v(),vv(),yv(),bv(),xv(),Sv(),Cv(),wv(),Tv(),Ev(),Dv(),Ov(),kv(),Av(),jv(),Mv(),Nv(),Pv(),Fv(),Iv(),Lv(),Rv(),zv(),Bv(),Vv(),Hv(),Uv(),Wv(),Gv(),Kv(),qv(),Jv(),Yv(),Xv(),Zv(),Qv(),$v(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),sy(),cy(),ly(),uy(),dy(),fy(),py(),my(),hy(),gy(),_y(),vy(),yy(),by(),xy(),Sy(),Cy(),wy(),Ty(),Ey(),Dy(),Oy(),ky(),Ay(),jy(),My(),Ny(),Py(),Fy(),Iy(),Ly(),Ry(),zy(),By(),Vy(),Hy(),Uy(),Wy(),Gy(),Ky(),qy(),Jy(),Yy(),Xy(),Zy(),Qy(),$y(),eb(),tb(),nb(),rb(),ib(),ab(),ob(),sb(),cb(),lb(),ub(),db(),fb(),pb(),mb(),hb(),gb(),_b(),vb(),yb(),bb(),xb(),Sb(),Cb(),wb(),Tb(),Eb(),Db(),Ob(),kb(),Ab(),jb(),Mb(),Nb(),Pb(),Fb(),Ib(),Lb(),Rb(),zb(),Bb(),Vb(),Hb(),Ub(),Wb(),Gb(),Kb(),qb(),Jb(),Yb(),Xb(),Zb(),Qb(),$b(),ex(),tx(),nx(),rx(),ix(),ax(),ox(),cx(),lx(),ux(),dx(),fx(),px(),mx(),hx(),gx(),_x(),vx(),yx(),bx(),xx(),Sx(),Cx(),wx(),Tx(),Ex(),Dx(),Ox(),kx(),Ax(),jx(),Mx(),Nx(),Px(),Fx(),Ix(),Lx(),Rx(),zx(),Bx(),Vx(),Hx(),Ux(),Wx(),Gx(),Kx(),qx(),Jx(),Yx(),Xx(),Zx(),Qx(),$x(),eS(),tS(),nS(),rS(),iS(),aS(),oS(),sS(),cS(),lS(),uS(),dS(),fS(),pS(),mS(),hS(),gS(),_S(),vS(),yS(),bS(),xS(),SS(),CS(),wS(),TS(),ES(),DS(),OS(),kS(),AS(),jS(),MS(),NS(),PS(),FS(),IS(),LS(),RS(),zS(),BS(),VS(),HS(),US(),WS(),GS(),KS(),qS(),JS(),YS(),XS(),ZS(),QS(),$S(),eC(),tC(),nC(),rC(),iC()})))()}var oC;function sC(){return(sC=e((()=>{A(),oC=de(S`
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
`)})))()}var cC,lC;function uC(){return(uC=e((()=>{n(),$e(),qe(),cC=new WeakMap,lC=Ge(class extends Qe{render(e){return r}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),r}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=cC.get(t);n===void 0&&(n=new WeakMap,cC.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?cC.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})))()}var dC;function fC(){return(fC=e((()=>{sC(),A(),n(),dC=S`
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
		`,{styleSheets:[oC,dC]}))})))()}var pC;function mC(){return(mC=e((()=>{A(),pC=de(S`
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
`)})))()}var hC,gC;function _C(){return(_C=e((()=>{A(),n(),fC(),mC(),hC=(e,n,r)=>t(s`<cosmoz-tooltip-content>
			${N(n,()=>s`<strong slot="heading">${n}</strong>`)}
			${N(r,()=>s`<p slot="description">${r}</p>`)}
		</cosmoz-tooltip-content>`,e),gC=(e,t)=>{let{for:n,heading:r,description:i,placement:a=`top`,delay:o=300,disabled:s=!1}=t,c=D(),l=!!(r||i)&&!s;E(()=>{if(!n||!l)return;let t=e.getRootNode(),u=t.adoptedStyleSheets??[];u.includes(pC)||(t.adoptedStyleSheets=[...u,pC]);let d=document.createElement(`div`);d.setAttribute(`popover`,`manual`),d.setAttribute(`role`,`tooltip`),d.classList.add(`cosmoz-tooltip-popover`),e.after(d),c.current=d,hC(d,r,i);let f=`[name="${n}"]`,p=`--tooltip-anchor-${n}`,m,h=!1,g=e=>{h||s||(clearTimeout(m),e.style.anchorName=p,d.style.positionAnchor=p,d.style.positionArea=a,m=window.setTimeout(()=>d.showPopover(),o))},_=()=>{clearTimeout(m),d.hidePopover()},v=e=>{let t=e.target.closest?.(f);t&&e.pointerType!==`touch`&&g(t)},y=e=>{e.target.closest?.(f)&&(h=!0,_())},b=()=>{h=!1},x=e=>{let t=e.target.closest?.(f);if(!t)return;let n=e.relatedTarget;n&&t.contains(n)||_()},ee=e=>{let t=e.target.closest?.(f);t&&g(t)},te=e=>{e.target.closest?.(f)&&_()};return t.addEventListener(`pointerover`,v),t.addEventListener(`pointerdown`,y),t.addEventListener(`pointerup`,b),t.addEventListener(`pointerout`,x),t.addEventListener(`focusin`,ee),t.addEventListener(`focusout`,te),()=>{clearTimeout(m),t.removeEventListener(`pointerover`,v),t.removeEventListener(`pointerdown`,y),t.removeEventListener(`pointerup`,b),t.removeEventListener(`pointerout`,x),t.removeEventListener(`focusin`,ee),t.removeEventListener(`focusout`,te),d.hidePopover(),d.remove(),c.current=void 0}},[n,a,o,l]),E(()=>{n&&c.current&&hC(c.current,r,i)},[r,i,n]),E(()=>{s&&c.current&&c.current.hidePopover()},[s])}})))()}var vC;function yC(){return(yC=e((()=>{A(),vC=e=>{let[t,n]=Pe(!1);return E(()=>{let t=e.current;if(!t)return;let r=()=>{n(t.assignedElements().length>0)};return r(),t.addEventListener(`slotchange`,r),()=>t.removeEventListener(`slotchange`,r)},[e.current]),t}})))()}var bC,xC;function SC(){return(SC=e((()=>{sC(),A(),n(),uC(),fC(),mC(),_C(),yC(),bC=S`
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
`,xC=e=>{let{heading:t,description:n,for:i,placement:a=`top`,delay:o=300,disabled:c=!1}=e,l=D(),u=D(),d=D(!1),f=D(),p=vC(f),m=!!(t||n||p)&&!c,h=Ae(()=>{!d.current&&m&&(clearTimeout(u.current),u.current=window.setTimeout(()=>{l.current?.showPopover()},o))},[o,m]);E(()=>{c&&(clearTimeout(u.current),l.current?.hidePopover())},[c]);let g=Ae(()=>{clearTimeout(u.current),l.current?.hidePopover()},[]);return E(()=>{if(i)return;let t=e.getRootNode(),n=e=>{e.pointerType!==`touch`&&h()},r=()=>{d.current=!0,g()},a=()=>{d.current=!1},o=t=>{let n=t.relatedTarget;n&&e.contains(n)||g()};return e.addEventListener(`pointerover`,n),e.addEventListener(`pointerdown`,r),t.addEventListener(`pointerup`,a),e.addEventListener(`pointerout`,o),()=>{e.removeEventListener(`pointerover`,n),e.removeEventListener(`pointerdown`,r),t.removeEventListener(`pointerup`,a),e.removeEventListener(`pointerout`,o)}},[i,h,g]),gC(e,{for:i,heading:t,description:n,placement:a,delay:o,disabled:c}),i?r:m?s`
		<slot @focusin=${h} @focusout=${g}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${a}"
			${lC(l)}
		>
			<cosmoz-tooltip-content>
				${N(t,()=>s`<strong slot="heading">${t}</strong>`)}
				${N(n,()=>s`<p slot="description">${n}</p>`)}
				<slot name="content" ${lC(f)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:s`
			<slot></slot>
			<slot name="content" ${lC(f)} hidden></slot>
		`},customElements.define(`cosmoz-tooltip`,tt(xC,{styleSheets:[oC,pC,bC],observedAttributes:[`heading`,`description`,`for`,`placement`,`delay`,`disabled`]}))})))()}var P,F,CC,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,wC;function TC(){return(TC=e((()=>{pt(),aC(),A(),SC(),{expect:P,waitFor:F}=__STORYBOOK_MODULE_TEST__,CC={title:`CosmozTooltip`,component:`cosmoz-tooltip`,tags:[`autodocs`],argTypes:{heading:{control:`text`,description:`Tooltip heading (bold text)`},description:{control:`text`,description:`Tooltip description (secondary text)`},placement:{control:`select`,options:[`top`,`bottom`,`left`,`right`,`top center`,`bottom center`],description:`Position relative to trigger`},delay:{control:`number`,description:`Delay before showing tooltip (ms)`}},args:{heading:`Tooltip Heading`,description:`This is helpful information.`,placement:`top`,delay:300}},I={render:e=>s`
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
            <input name="touch-target" placeholder="Tap me" />
        </div>
    `,play:async({canvas:e,step:t,userEvent:n})=>{let r=e=>e.getRootNode().querySelector(`.cosmoz-tooltip-popover`)?.matches(`:popover-open`)??!1;await t(`Shows tooltip for a mouse pointer`,async()=>{let t=e.getByPlaceholderText(`Tap me`);await n.hover(t),await F(()=>P(r(t)).toBe(!0),{timeout:1e3}),await n.unhover(t),await F(()=>P(r(t)).toBe(!1),{timeout:500})}),await t(`Does not show tooltip for touch pointers`,async()=>{let t=e.getByPlaceholderText(`Tap me`);t.dispatchEvent(new PointerEvent(`pointerover`,{pointerId:1,pointerType:`touch`,bubbles:!0,composed:!0})),await new Promise(e=>setTimeout(e,250)),P(r(t)).toBe(!1)})}},Z={args:{delay:300,heading:`Press to dismiss`,description:`Hidden while pressing`},render:e=>s`
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
                <cosmoz-button>Tap me</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `,play:async({canvas:e,step:t,userEvent:n})=>{let r=e=>(e.getRootNode().host?.closest?.(`cosmoz-tooltip`))?.shadowRoot?.querySelector(`.cosmoz-tooltip-popover`)?.matches(`:popover-open`)??!1;await t(`Shows tooltip for a mouse pointer`,async()=>{let t=e.getByShadowRole(`button`);await n.hover(t),await F(async()=>P(r(t)).toBe(!0),{timeout:1e3}),await n.unhover(t),await F(async()=>P(r(t)).toBe(!1),{timeout:500})}),await t(`Does not show tooltip for touch pointers`,async()=>{let t=e.getByShadowRole(`button`);t.dispatchEvent(new PointerEvent(`pointerover`,{pointerId:1,pointerType:`touch`,bubbles:!0,composed:!0})),await new Promise(e=>setTimeout(e,250)),P(r(t)).toBe(!1),P(r(t)).toBe(!1)})}},$={render:()=>s`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip>
                <cosmoz-button>No heading/description/slot content</cosmoz-button>
            </cosmoz-tooltip>
        </div>
    `,play:async({canvas:e,step:t})=>{await t(`Renders as pass-through without popover`,async()=>{let t=e.getByShadowRole(`button`);P(t).toBeVisible()})}},wC=[`Basic`,`HeadingOnly`,`DescriptionOnly`,`ForAttribute`,`Placements`,`CustomDelay`,`CustomContent`,`OnLinks`,`FocusWithoutHover`,`ForAttributeFocusWithoutHover`,`OnIcons`,`Disabled`,`DisabledForAttribute`,`ForAttributePointerDown`,`ForAttributeTouch`,`WrappingPointerDown`,`WrappingTouch`,`EmptyPassthrough`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
                <cosmoz-button>Tap me</cosmoz-button>
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

    // userEvent cannot drive touch pointers; dispatch the event that the
    // touch tap produces on the trigger. With delay 0 any unhandled touch
    // pointerover would open the tooltip immediately.
    await step('Does not show tooltip for touch pointers', async () => {
      const button = canvas.getByShadowRole('button');
      button.dispatchEvent(new PointerEvent('pointerover', {
        pointerId: 1,
        pointerType: 'touch',
        bubbles: true,
        composed: true
      }));
      await new Promise(resolve => setTimeout(resolve, 250));
      expect(isOpen(button)).toBe(false);
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
}`,...$.parameters?.docs?.source}}}})))()}TC();export{I as Basic,H as CustomContent,V as CustomDelay,R as DescriptionOnly,q as Disabled,J as DisabledForAttribute,$ as EmptyPassthrough,W as FocusWithoutHover,z as ForAttribute,G as ForAttributeFocusWithoutHover,Y as ForAttributePointerDown,X as ForAttributeTouch,L as HeadingOnly,K as OnIcons,U as OnLinks,B as Placements,Z as WrappingPointerDown,Q as WrappingTouch,wC as __namedExportsOrder,CC as default};