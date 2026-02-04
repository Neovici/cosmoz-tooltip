import{A as v,b as a,w as D,r as st,D as it}from"./iframe-BAi-4sbT.js";import"./preload-helper-PPVm8Dsz.js";const y=t=>t??v;function G(t,e,o){return t?e(t):o?.(t)}const rt=({slot:t,title:e,className:o,width:n="24",height:s="24",styles:i}={})=>a`
  <svg
    slot=${y(t)}
    class=${`delete-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${n}
    height=${s}
    style=${y(i)}
  >
    ${G(e,()=>D`<title>${e}</title>`)}
    <path
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
    />
  </svg>
`,at=({slot:t,title:e,className:o,width:n="24",height:s="24",styles:i}={})=>a`
	<svg
		slot=${y(t)}
		class=${`edit-icon ${o??""}`}
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width=${n}
		height=${s}
		style=${y(i)}
	>
		${G(e,()=>D`<title>${e}</title>`)}
		<path
			d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
		/>
	</svg>
`,lt=({slot:t,title:e,className:o,width:n="24",height:s="24",styles:i}={})=>a`<svg
    slot=${y(t)}
    class=${`filter-icon ${o??""}`}
    width=${n}
    height=${s}
    viewBox="0 0 11 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${y(i)}
  >
    ${G(e,()=>D`<title>${e}</title>`)}
    <path
      d="M9.5 10L9.5 7M9.5 7L8 7M9.5 7L11 7M5.5 4.5L5.5 10M1.5 10L1.5 6M1.5 6L3.49691e-07 6M1.5 6L3 6M5.5 -1.4345e-06L5.5 3M5.5 3L7 3M5.5 3L4 3M9.5 -2.03848e-06L9.5 5.5M1.5 -1.78419e-06L1.5 4.5"
      stroke="black"
      stroke-linejoin="round"
    />
  </svg> `;let R,J=0;function Q(t){R=t}function U(){R=null,J=0}function ct(){return J++}const H=Symbol("haunted.phase"),M=Symbol("haunted.hook"),Y=Symbol("haunted.update"),W=Symbol("haunted.commit"),b=Symbol("haunted.effects"),$=Symbol("haunted.layoutEffects"),N="haunted.context";class dt{update;host;virtual;[M];[b];[$];constructor(e,o){this.update=e,this.host=o,this[M]=new Map,this[b]=[],this[$]=[]}run(e){Q(this);let o=e();return U(),o}_runEffects(e){let o=this[e];Q(this);for(let n of o)n.call(this);U()}runEffects(){this._runEffects(b)}runLayoutEffects(){this._runEffects($)}teardown(){this[M].forEach(o=>{typeof o.teardown=="function"&&o.teardown(!0)})}}const ut=Promise.resolve().then.bind(Promise.resolve());function K(){let t=[],e;function o(){e=null;let n=t;t=[];for(var s=0,i=n.length;s<i;s++)n[s]()}return function(n){t.push(n),e==null&&(e=ut(o))}}const pt=K(),V=K();class ht{renderer;host;state;[H];_updateQueued;_active;constructor(e,o){this.renderer=e,this.host=o,this.state=new dt(this.update.bind(this),o),this[H]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(pt(()=>{let e=this.handlePhase(Y);V(()=>{this.handlePhase(W,e),V(()=>{this.handlePhase(b)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,o){switch(this[H]=e,e){case W:this.commit(o),this.runEffects($);return;case Y:return this.render();case b:return this.runEffects(b)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const mt=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},ft=t=>t?.map(e=>typeof e=="string"?mt(e):e),bt=(t,...e)=>t.flatMap((o,n)=>[o,e[n]||""]).join(""),vt=bt,yt=(t="")=>t.replace(/-+([a-z])?/g,(e,o)=>o?o.toUpperCase():"");function gt(t){class e extends ht{frag;renderResult;constructor(s,i,m){super(s,m||i),this.frag=i}commit(s){this.renderResult=t(s,this.frag)}}function o(n,s,i){const m=(i||s||{}).baseElement||HTMLElement,{observedAttributes:p=[],useShadowDOM:h=!0,shadowRootInit:z={},styleSheets:O}=i||s||{},r=ft(n.styleSheets||O);class j extends m{_scheduler;static get observedAttributes(){return n.observedAttributes||p||[]}constructor(){if(super(),h===!1)this._scheduler=new e(n,this);else{const l=this.attachShadow({mode:"open",...z});r&&(l.adoptedStyleSheets=r),this._scheduler=new e(n,l,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(l,u,c){if(u===c)return;let d=c===""?!0:c;Reflect.set(this,yt(l),d)}}function ot(f){let l=f,u=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return l},set(c){u&&l===c||(u=!0,l=c,this._scheduler&&this._scheduler.update())}})}const nt=new Proxy(m.prototype,{getPrototypeOf(f){return f},set(f,l,u,c){let d;return l in f?(d=Object.getOwnPropertyDescriptor(f,l),d&&d.set?(d.set.call(c,u),!0):(Reflect.set(f,l,u,c),!0)):(typeof l=="symbol"||l[0]==="_"?d={enumerable:!0,configurable:!0,writable:!0,value:u}:d=ot(u),Object.defineProperty(c,l,d),d.set&&d.set.call(c,u),!0)}});return Object.setPrototypeOf(j.prototype,nt),j}return o}class g{id;state;constructor(e,o){this.id=e,this.state=o}}function wt(t,...e){let o=ct(),n=R[M],s=n.get(o);return s||(s=new t(o,R,...e),n.set(o,s)),s.update(...e)}function w(t){return wt.bind(null,t)}function Z(t){return w(class extends g{callback;lastValues;values;_teardown;constructor(e,o,n,s){super(e,o),t(o,this)}update(e,o){this.callback=e,this.values=o}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,o)=>this.lastValues[o]!==e)}})}function X(t,e){t[b].push(e)}const $t=Z(X),_t=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,zt=w(class extends g{Context;value;_ranEffect;_unsubscribe;constructor(t,e,o){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,X(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};_t(this.state.host).dispatchEvent(new CustomEvent(N,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:s}=e;this.value=n?s:t.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function xt(t){return e=>{const o={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(N,this)}disconnectedCallback(){this.removeEventListener(N,this)}handleEvent(n){const{detail:s}=n;s.Context===o&&(s.value=this.value,s.unsubscribe=this.unsubscribe.bind(this,s.callback),this.listeners.add(s.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let s of this.listeners)s(n)}get value(){return this._value}},Consumer:t(function({render:n}){const s=zt(o);return n(s)},{useShadowDOM:!1}),defaultValue:e};return o}}const tt=w(class extends g{value;values;constructor(t,e,o,n){super(t,e),this.value=o(),this.values=n}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,o)=>this.values[o]!==e)}}),I=(t,e)=>tt(()=>t,e);function Et(t,e){t[$].push(e)}Z(Et);w(class extends g{args;constructor(t,e,o){super(t,e),this.updater=this.updater.bind(this),typeof o=="function"&&(o=o()),this.makeArgs(o)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});w(class extends g{reducer;currentState;constructor(t,e,o,n,s){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(n):n}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const St=/([A-Z])/gu;w(class extends g{property;eventName;constructor(t,e,o,n){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=o,this.eventName=o.replace(St,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updateProp(n))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}});function q(t){return tt(()=>({current:t}),[])}function Ct({render:t}){const e=gt(t),o=xt(e);return{component:e,createContext:o}}const Tt={CHILD:2},kt=t=>(...e)=>({_$litDirective$:t,values:e});class At{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,n){this._$Ct=e,this._$AM=o,this._$Ci=n}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}}const _=(t,e)=>{const o=t._$AN;if(o===void 0)return!1;for(const n of o)n._$AO?.(e,!1),_(n,e);return!0},P=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while(o?.size===0)},et=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),Mt(e)}};function Lt(t){this._$AN!==void 0?(P(this),this._$AM=t,et(this)):this._$AM=t}function Bt(t,e=!1,o=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(n))for(let i=o;i<n.length;i++)_(n[i],!1),P(n[i]);else n!=null&&(_(n,!1),P(n));else _(this,t)}const Mt=t=>{t.type==Tt.CHILD&&(t._$AP??=Bt,t._$AQ??=Lt)};class Rt extends At{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,n){super._$AT(e,o,n),et(this),this.isConnected=e._$AU}_$AO(e,o=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),o&&(_(this,e),P(this))}setValue(e){if(st(this._$Ct))this._$Ct._$AI(e,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const{component:Pt}=Ct({render:it}),F=new WeakMap,Ot=kt(class extends Rt{render(t){return v}update(t,[e]){const o=e!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),v}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let o=F.get(e);o===void 0&&(o=new WeakMap,F.set(e,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?F.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Ht=vt`
	:host {
		display: inline-block;
		anchor-name: --tooltip-anchor;
	}

	/* When using for="" attribute, host doesn't provide anchor */
	:host([for]) {
		display: contents;
		anchor-name: unset;
	}

	[popover] {
		position: fixed;
		position-anchor: var(--tooltip-anchor-name, --tooltip-anchor);
		inset: unset;
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
		[popover]:popover-open {
			opacity: 0;
			transform: translateY(4px) scale(0.96);
		}
	}

	[popover]:not(:popover-open) {
		opacity: 0;
		transform: translateY(4px) scale(0.96);
	}

	.title {
		font-weight: var(--cz-font-weight-semibold);
		display: block;
	}

	.description {
		margin: 0;
		color: var(--cz-color-gray-300);
	}

	.title + .description {
		margin-top: var(--cz-spacing);
	}

	@media (prefers-reduced-motion: reduce) {
		[popover] {
			transition: none;
		}
	}
`,It=({title:t,description:e,for:o,placement:n="top",delay:s=300})=>{const i=q(),m=q(),p=I(()=>{clearTimeout(m.current),m.current=window.setTimeout(()=>{i.current?.showPopover()},s)},[s]),h=I(()=>{clearTimeout(m.current),i.current?.hidePopover()},[]),z=I(()=>o?i.current?.getRootNode()?.querySelector(`[name="${o}"]`):null,[o]);$t(()=>{if(!o)return;const r=z();if(r)return r.style.anchorName="--tooltip-anchor-external",r.addEventListener("mouseenter",p),r.addEventListener("mouseleave",h),r.addEventListener("focusin",p),r.addEventListener("focusout",h),()=>{r.removeEventListener("mouseenter",p),r.removeEventListener("mouseleave",h),r.removeEventListener("focusin",p),r.removeEventListener("focusout",h),r.style.anchorName=""}},[o,z,p,h]);const O=o?`position-area: ${n}; --tooltip-anchor-name: --tooltip-anchor-external;`:`position-area: ${n};`;return a`
		${o?v:a`
					<slot
						@mouseenter=${p}
						@mouseleave=${h}
						@focusin=${p}
						@focusout=${h}
					></slot>
				`}
		<div
			popover="manual"
			role="tooltip"
			style=${O}
			${Ot(r=>{i.current=r})}
		>
			${t?a`<strong class="title">${t}</strong>`:v}
			${e?a`<p class="description">${e}</p>`:v}
			<slot name="content"></slot>
		</div>
	`};customElements.define("cosmoz-tooltip",Pt(It,{styleSheets:[Ht],observedAttributes:["title","description","for","placement","delay"]}));const{expect:Ft,waitFor:Nt}=__STORYBOOK_MODULE_TEST__,jt={title:"CosmozTooltip",component:"cosmoz-tooltip",tags:["autodocs"],argTypes:{title:{control:"text",description:"Tooltip title (bold heading)"},description:{control:"text",description:"Tooltip description (secondary text)"},placement:{control:"select",options:["top","bottom","left","right","top center","bottom center"],description:"Position relative to trigger"},delay:{control:"number",description:"Delay before showing tooltip (ms)"}},args:{title:"Tooltip Title",description:"This is helpful information about the element.",placement:"top",delay:300}},x={render:t=>a`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                title=${t.title}
                description=${t.description}
                placement=${t.placement}
                delay=${t.delay}
            >
                <button>Hover me</button>
            </cosmoz-tooltip>
        </div>
    `,play:async({canvas:t,step:e,userEvent:o})=>{await e("Shows tooltip on hover",async()=>{const n=t.getByRole("button");await o.hover(n),await t.findByShadowText(/Tooltip Title/u,{},{timeout:1e3})}),await e("Hides tooltip on mouse leave",async()=>{const n=t.getByRole("button");await o.unhover(n),await Nt(async()=>{const s=t.queryAllByShadowText(/Tooltip Title/u);s.length>0&&Ft(s[0]).not.toBeVisible()},{timeout:500})})}},E={args:{title:"Quick tip",description:""},render:t=>a`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip title=${t.title} placement=${t.placement}>
                <button>Hover for title only</button>
            </cosmoz-tooltip>
        </div>
    `,play:async({canvas:t,step:e,userEvent:o})=>{await e("Shows tooltip with title only",async()=>{const n=t.getByRole("button");await o.hover(n),await t.findByShadowText(/Quick tip/u,{},{timeout:1e3})})}},S={args:{title:"",description:"Just a simple description without a title"},render:t=>a`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                description=${t.description}
                placement=${t.placement}
            >
                <button>Hover for description only</button>
            </cosmoz-tooltip>
        </div>
    `},C={render:()=>a`
        <div style="padding: 4rem;">
            <div
                style="display: flex; flex-direction: column; gap: 0.5rem; max-width: 300px;"
            >
                <label for="email-input">Email address</label>
                <input name="email-input" type="email" placeholder="you@example.com" />
                <cosmoz-tooltip
                    for="email-input"
                    title="Email format"
                    description="Enter a valid email address like name@domain.com"
                ></cosmoz-tooltip>
            </div>
        </div>
    `,play:async({canvas:t,step:e,userEvent:o})=>{await e("Shows tooltip when input is focused",async()=>{const n=t.getByPlaceholderText("you@example.com");await o.click(n),await t.findByShadowText(/Email format/u,{},{timeout:1e3})})}},T={render:()=>a`
        <div
            style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4rem; padding: 6rem; place-items: center;"
        >
            <cosmoz-tooltip title="Top placement" placement="top">
                <button style="padding: 1rem 2rem;">Top</button>
            </cosmoz-tooltip>
            <cosmoz-tooltip title="Top Center" placement="top center">
                <button style="padding: 1rem 2rem;">Top Center</button>
            </cosmoz-tooltip>
            <div></div>

            <cosmoz-tooltip title="Left placement" placement="left">
                <button style="padding: 1rem 2rem;">Left</button>
            </cosmoz-tooltip>
            <div></div>
            <cosmoz-tooltip title="Right placement" placement="right">
                <button style="padding: 1rem 2rem;">Right</button>
            </cosmoz-tooltip>

            <div></div>
            <cosmoz-tooltip title="Bottom placement" placement="bottom">
                <button style="padding: 1rem 2rem;">Bottom</button>
            </cosmoz-tooltip>
            <cosmoz-tooltip title="Bottom Center" placement="bottom center">
                <button style="padding: 1rem 2rem;">Bottom Center</button>
            </cosmoz-tooltip>
        </div>
    `},k={args:{delay:0,title:"Instant tooltip",description:"This appears immediately"},render:t=>a`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                title=${t.title}
                description=${t.description}
                delay=${t.delay}
            >
                <button>No delay (instant)</button>
            </cosmoz-tooltip>
        </div>
    `,play:async({canvas:t,step:e,userEvent:o})=>{await e("Shows tooltip immediately",async()=>{const n=t.getByRole("button");await o.hover(n),await t.findByShadowText(/Instant tooltip/u,{},{timeout:200})})}},A={render:()=>a`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip>
                <button>Rich content tooltip</button>
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
    `},L={render:()=>a`
        <div style="padding: 4rem;">
            <p>
                Check out our
                <cosmoz-tooltip
                    title="External link"
                    description="Opens in a new tab"
                    placement="top"
                >
                    <a href="https://example.com" target="_blank">documentation</a>
                </cosmoz-tooltip>
                for more information.
            </p>
        </div>
    `},B={render:()=>a`
        <div style="padding: 4rem; display: flex; gap: 1rem;">
            <cosmoz-tooltip title="Edit" placement="bottom">
                <button aria-label="Edit" style="padding: 0.5rem;">
                    ${at({width:"20",height:"20"})}
                </button>
            </cosmoz-tooltip>

            <cosmoz-tooltip
                title="Delete"
                description="This action cannot be undone"
                placement="bottom"
            >
                <button aria-label="Delete" style="padding: 0.5rem;">
                    ${rt({width:"20",height:"20"})}
                </button>
            </cosmoz-tooltip>

            <cosmoz-tooltip title="Filter" placement="bottom">
                <button aria-label="Filter" style="padding: 0.5rem;">
                    ${lt({width:"20",height:"20"})}
                </button>
            </cosmoz-tooltip>
        </div>
    `};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                title=\${args.title}
                description=\${args.description}
                placement=\${args.placement}
                delay=\${args.delay}
            >
                <button>Hover me</button>
            </cosmoz-tooltip>
        </div>
    \`,
  play: async ({
    canvas,
    step,
    userEvent
  }) => {
    await step('Shows tooltip on hover', async () => {
      const button = canvas.getByRole('button');
      await userEvent.hover(button);
      // Wait for the title text to become visible (popover opened)
      await canvas.findByShadowText(/Tooltip Title/u, {}, {
        timeout: 1000
      });
    });
    await step('Hides tooltip on mouse leave', async () => {
      const button = canvas.getByRole('button');
      await userEvent.unhover(button);
      // Give time for popover to close
      await waitFor(async () => {
        const elements = canvas.queryAllByShadowText(/Tooltip Title/u);
        // Element exists but should not be visible
        if (elements.length > 0) {
          expect(elements[0]).not.toBeVisible();
        }
      }, {
        timeout: 500
      });
    });
  }
}`,...x.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Quick tip',
    description: ''
  },
  render: args => html\`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip title=\${args.title} placement=\${args.placement}>
                <button>Hover for title only</button>
            </cosmoz-tooltip>
        </div>
    \`,
  play: async ({
    canvas,
    step,
    userEvent
  }) => {
    await step('Shows tooltip with title only', async () => {
      const button = canvas.getByRole('button');
      await userEvent.hover(button);
      await canvas.findByShadowText(/Quick tip/u, {}, {
        timeout: 1000
      });
    });
  }
}`,...E.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: '',
    description: 'Just a simple description without a title'
  },
  render: args => html\`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                description=\${args.description}
                placement=\${args.placement}
            >
                <button>Hover for description only</button>
            </cosmoz-tooltip>
        </div>
    \`
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="padding: 4rem;">
            <div
                style="display: flex; flex-direction: column; gap: 0.5rem; max-width: 300px;"
            >
                <label for="email-input">Email address</label>
                <input name="email-input" type="email" placeholder="you@example.com" />
                <cosmoz-tooltip
                    for="email-input"
                    title="Email format"
                    description="Enter a valid email address like name@domain.com"
                ></cosmoz-tooltip>
            </div>
        </div>
    \`,
  play: async ({
    canvas,
    step,
    userEvent
  }) => {
    await step('Shows tooltip when input is focused', async () => {
      const input = canvas.getByPlaceholderText('you@example.com');
      await userEvent.click(input);
      await canvas.findByShadowText(/Email format/u, {}, {
        timeout: 1000
      });
    });
  }
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div
            style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4rem; padding: 6rem; place-items: center;"
        >
            <cosmoz-tooltip title="Top placement" placement="top">
                <button style="padding: 1rem 2rem;">Top</button>
            </cosmoz-tooltip>
            <cosmoz-tooltip title="Top Center" placement="top center">
                <button style="padding: 1rem 2rem;">Top Center</button>
            </cosmoz-tooltip>
            <div></div>

            <cosmoz-tooltip title="Left placement" placement="left">
                <button style="padding: 1rem 2rem;">Left</button>
            </cosmoz-tooltip>
            <div></div>
            <cosmoz-tooltip title="Right placement" placement="right">
                <button style="padding: 1rem 2rem;">Right</button>
            </cosmoz-tooltip>

            <div></div>
            <cosmoz-tooltip title="Bottom placement" placement="bottom">
                <button style="padding: 1rem 2rem;">Bottom</button>
            </cosmoz-tooltip>
            <cosmoz-tooltip title="Bottom Center" placement="bottom center">
                <button style="padding: 1rem 2rem;">Bottom Center</button>
            </cosmoz-tooltip>
        </div>
    \`
}`,...T.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    delay: 0,
    title: 'Instant tooltip',
    description: 'This appears immediately'
  },
  render: args => html\`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip
                title=\${args.title}
                description=\${args.description}
                delay=\${args.delay}
            >
                <button>No delay (instant)</button>
            </cosmoz-tooltip>
        </div>
    \`,
  play: async ({
    canvas,
    step,
    userEvent
  }) => {
    await step('Shows tooltip immediately', async () => {
      const button = canvas.getByRole('button');
      await userEvent.hover(button);
      // With 0 delay, should appear almost immediately
      await canvas.findByShadowText(/Instant tooltip/u, {}, {
        timeout: 200
      });
    });
  }
}`,...k.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="padding: 4rem; text-align: center;">
            <cosmoz-tooltip>
                <button>Rich content tooltip</button>
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
}`,...A.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="padding: 4rem;">
            <p>
                Check out our
                <cosmoz-tooltip
                    title="External link"
                    description="Opens in a new tab"
                    placement="top"
                >
                    <a href="https://example.com" target="_blank">documentation</a>
                </cosmoz-tooltip>
                for more information.
            </p>
        </div>
    \`
}`,...L.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="padding: 4rem; display: flex; gap: 1rem;">
            <cosmoz-tooltip title="Edit" placement="bottom">
                <button aria-label="Edit" style="padding: 0.5rem;">
                    \${editIcon({
    width: '20',
    height: '20'
  })}
                </button>
            </cosmoz-tooltip>

            <cosmoz-tooltip
                title="Delete"
                description="This action cannot be undone"
                placement="bottom"
            >
                <button aria-label="Delete" style="padding: 0.5rem;">
                    \${deleteIcon({
    width: '20',
    height: '20'
  })}
                </button>
            </cosmoz-tooltip>

            <cosmoz-tooltip title="Filter" placement="bottom">
                <button aria-label="Filter" style="padding: 0.5rem;">
                    \${filterIcon({
    width: '20',
    height: '20'
  })}
                </button>
            </cosmoz-tooltip>
        </div>
    \`
}`,...B.parameters?.docs?.source}}};const Qt=["Basic","TitleOnly","DescriptionOnly","ForAttribute","Placements","CustomDelay","CustomContent","OnLinks","OnIcons"];export{x as Basic,A as CustomContent,k as CustomDelay,S as DescriptionOnly,C as ForAttribute,B as OnIcons,L as OnLinks,T as Placements,E as TitleOnly,Qt as __namedExportsOrder,jt as default};
