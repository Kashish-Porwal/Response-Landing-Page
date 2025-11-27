(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/particle-field.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ParticleField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ParticleField() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleField.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            // Set canvas size
            const resizeCanvas = {
                "ParticleField.useEffect.resizeCanvas": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["ParticleField.useEffect.resizeCanvas"];
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);
            // Initialize particles
            const particleCount = 80;
            particlesRef.current = Array.from({
                length: particleCount
            }, {
                "ParticleField.useEffect": ()=>({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        vx: (Math.random() - 0.5) * 0.5,
                        vy: (Math.random() - 0.5) * 0.5,
                        size: Math.random() * 2 + 1
                    })
            }["ParticleField.useEffect"]);
            // Mouse move handler
            const handleMouseMove = {
                "ParticleField.useEffect.handleMouseMove": (e)=>{
                    mouseRef.current = {
                        x: e.clientX,
                        y: e.clientY
                    };
                }
            }["ParticleField.useEffect.handleMouseMove"];
            window.addEventListener('mousemove', handleMouseMove);
            // Animation loop
            const animate = {
                "ParticleField.useEffect.animate": ()=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    particlesRef.current.forEach({
                        "ParticleField.useEffect.animate": (particle, i)=>{
                            // Update position
                            particle.x += particle.vx;
                            particle.y += particle.vy;
                            // Bounce off edges
                            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
                            // Mouse interaction
                            const dx = mouseRef.current.x - particle.x;
                            const dy = mouseRef.current.y - particle.y;
                            const distance = Math.sqrt(dx * dx + dy * dy);
                            if (distance < 150) {
                                const angle = Math.atan2(dy, dx);
                                particle.vx -= Math.cos(angle) * 0.05;
                                particle.vy -= Math.sin(angle) * 0.05;
                            }
                            // Draw particle
                            ctx.beginPath();
                            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                            ctx.fillStyle = 'rgba(102, 126, 234, 0.6)';
                            ctx.fill();
                            // Draw connections
                            particlesRef.current.slice(i + 1).forEach({
                                "ParticleField.useEffect.animate": (otherParticle)=>{
                                    const dx = particle.x - otherParticle.x;
                                    const dy = particle.y - otherParticle.y;
                                    const distance = Math.sqrt(dx * dx + dy * dy);
                                    if (distance < 120) {
                                        ctx.beginPath();
                                        ctx.moveTo(particle.x, particle.y);
                                        ctx.lineTo(otherParticle.x, otherParticle.y);
                                        ctx.strokeStyle = `rgba(102, 126, 234, ${0.2 * (1 - distance / 120)})`;
                                        ctx.lineWidth = 0.5;
                                        ctx.stroke();
                                    }
                                }
                            }["ParticleField.useEffect.animate"]);
                        }
                    }["ParticleField.useEffect.animate"]);
                    animationFrameRef.current = requestAnimationFrame(animate);
                }
            }["ParticleField.useEffect.animate"];
            animate();
            return ({
                "ParticleField.useEffect": ()=>{
                    window.removeEventListener('resize', resizeCanvas);
                    window.removeEventListener('mousemove', handleMouseMove);
                    if (animationFrameRef.current) {
                        cancelAnimationFrame(animationFrameRef.current);
                    }
                }
            })["ParticleField.useEffect"];
        }
    }["ParticleField.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 -z-10 pointer-events-none opacity-40"
    }, void 0, false, {
        fileName: "[project]/components/particle-field.tsx",
        lineNumber: 112,
        columnNumber: 9
    }, this);
}
_s(ParticleField, "p23GqBR2ggcRN/Sn/cUDxVEq7U8=");
_c = ParticleField;
var _c;
__turbopack_context__.k.register(_c, "ParticleField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/particle-field.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/particle-field.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_particle-field_tsx_4d3d85f3._.js.map