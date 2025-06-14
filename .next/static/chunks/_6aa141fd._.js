(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/constants.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/lib/constants.tsx
__turbopack_context__.s({
    "CLUSTER": (()=>CLUSTER),
    "CLUSTERS": (()=>CLUSTERS),
    "DEFAULT_ADDRESS": (()=>DEFAULT_ADDRESS),
    "PROGRAM_IDS": (()=>PROGRAM_IDS)
});
const CLUSTER = 'devnet'// Change to 'mainnet-beta' or 'localnet' as needed
;
const DEFAULT_ADDRESS = '9xQeWvG816bUx9EPZ2gfrzjp1edw6uX7yjzFZZLL8Mjt';
const PROGRAM_IDS = {
    anaheim: '78aAD6rT9QNwjXEUwrrTwRdtE35khVh1opAQLjMsxvVb',
    journal: 'F4ao4JM1dfxnKNAUJtJP6mPyrHD7QeYEBZwLU5ANVThd'
};
const CLUSTERS = [
    'devnet',
    'mainnet-beta',
    'testnet',
    'localnet'
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/DebugConstants.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DebugConstants": (()=>DebugConstants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_@babel+core@7.27.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_@babel+core@7.27.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function DebugConstants() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DebugConstants.useEffect": ()=>{
            console.log('Cluster actif:', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLUSTER"]);
            console.log('Adresse par défaut:', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ADDRESS"]);
            console.log('Program IDs:', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROGRAM_IDS"]);
        }
    }["DebugConstants.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
        style: {
            color: 'lime',
            background: 'black',
            padding: '1rem'
        },
        children: JSON.stringify({
            CLUSTER: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLUSTER"],
            DEFAULT_ADDRESS: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ADDRESS"],
            PROGRAM_IDS: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROGRAM_IDS"]
        }, null, 2)
    }, void 0, false, {
        fileName: "[project]/src/components/DebugConstants.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(DebugConstants, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = DebugConstants;
var _c;
__turbopack_context__.k.register(_c, "DebugConstants");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/solana/wrapConnectionWithRpc.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/lib/solana/wrapConnectionWithRpc.tsx
__turbopack_context__.s({
    "getSolanaClient": (()=>getSolanaClient),
    "wrapConnectionWithRpc": (()=>wrapConnectionWithRpc)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$web3$2e$js$40$1$2e$98$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+web3.js@1.98.2_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anza$2d$xyz$2b$solana$2d$rpc$2d$get$2d$stake$2d$activation$40$1$2e$0$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$anza$2d$xyz$2f$solana$2d$rpc$2d$get$2d$stake$2d$activation$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@anza-xyz+solana-rpc-get-stake-activation@1.0.1_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10/node_modules/@anza-xyz/solana-rpc-get-stake-activation/dist/src/index.mjs [app-client] (ecmascript)");
;
;
const RPC_URL = 'https://api.devnet.solana.com';
function getSolanaClient() {
    const connection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$web3$2e$js$40$1$2e$98$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Connection"](RPC_URL, 'confirmed');
    return {
        // Ne pas passer le troisième argument, la lib ne le veut pas
        getStakeActivation: (pubkey)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$anza$2d$xyz$2b$solana$2d$rpc$2d$get$2d$stake$2d$activation$40$1$2e$0$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$anza$2d$xyz$2f$solana$2d$rpc$2d$get$2d$stake$2d$activation$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStakeActivation"])(connection, pubkey),
        getStakeMinimumDelegation: ()=>Promise.resolve(1000000),
        getVoteAccounts: ()=>connection.getVoteAccounts(),
        getBlockHeight: (commitment)=>connection.getBlockHeight(commitment),
        onAccountChange: (publicKey, callback, commitment = 'confirmed')=>{
            return connection.onAccountChange(publicKey, callback, {
                commitment
            });
        },
        removeAccountChangeListener: async (id)=>connection.removeAccountChangeListener(id)
    };
}
class wrapConnectionWithRpc {
    constructor(connection){
    // YODO ORION XXX
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/solana/useWrappedConnection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useWrappedConnection": (()=>useWrappedConnection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_@babel+core@7.27.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$web3$2e$js$40$1$2e$98$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+web3.js@1.98.2_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$solana$2f$wrapConnectionWithRpc$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/solana/wrapConnectionWithRpc.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/gill@0.10.1_@solana+sysvars@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5_dbfcb2cc90f2ba1af096ecd3c7668049/node_modules/gill/dist/index.browser.mjs [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
;
;
;
;
// Par exemple, on hardcode le cluster ici
const CLUSTER = 'devnet';
function useWrappedConnection() {
    _s();
    // On passe le cluster au getter d’URL RPC
    const rpcUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getPublicSolanaRpcUrl"])(CLUSTER);
    const connection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useWrappedConnection.useMemo[connection]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$web3$2e$js$40$1$2e$98$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Connection"](rpcUrl, 'confirmed')
    }["useWrappedConnection.useMemo[connection]"], [
        rpcUrl
    ]);
    const wrapped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useWrappedConnection.useMemo[wrapped]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$solana$2f$wrapConnectionWithRpc$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapConnectionWithRpc"](connection)
    }["useWrappedConnection.useMemo[wrapped]"], [
        connection
    ]);
    return wrapped;
}
_s(useWrappedConnection, "45n/KJ0SQ2/pfaF5gW+FnqZYhys=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/getClusterUrl.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getClusterConfig": (()=>getClusterConfig),
    "getClusterUrl": (()=>getClusterUrl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$web3$2e$js$40$1$2e$98$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+web3.js@1.98.2_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
;
const rpcUrl = getClusterUrl('devnet') // "https://api.devnet.solana.com"
;
console.log('RPC URL:', rpcUrl);
function getClusterConfig(clusterLabel) {
    switch(clusterLabel){
        case 'mainnet':
            return {
                urlOrMoniker: 'mainnet-beta',
                label: 'mainnet'
            };
        case 'devnet':
            return {
                urlOrMoniker: 'devnet',
                label: 'devnet'
            };
        case 'testnet':
            return {
                urlOrMoniker: 'testnet',
                label: 'testnet'
            };
        default:
            return {
                urlOrMoniker: 'devnet',
                label: 'devnet'
            };
    }
}
function getClusterUrl(clusterLabel) {
    const config = getClusterConfig(clusterLabel);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$web3$2e$js$40$1$2e$98$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clusterApiUrl"])(config.urlOrMoniker);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/rapper.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Rapper": (()=>Rapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_@babel+core@7.27.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_@babel+core@7.27.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$web3$2e$js$40$1$2e$98$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+web3.js@1.98.2_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$solana$2f$useWrappedConnection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/solana/useWrappedConnection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$getClusterUrl$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/getClusterUrl.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cluster$2f$cluster$2d$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cluster/cluster-ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const DEFAULT_ADDRESS = '9xQeWvG816bUx9EPZ2gfrzjp1edw6uX7yjzFZZLL8Mjt';
const CLUSTER = "devnet";
function Rapper() {
    _s();
    const rpcUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$getClusterUrl$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClusterUrl"])(CLUSTER);
    const wrapped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$solana$2f$useWrappedConnection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWrappedConnection"])(rpcUrl);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Rapper.useEffect": ()=>{
            const address = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$web3$2e$js$40$1$2e$98$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](DEFAULT_ADDRESS);
            wrapped.rpc.getSignaturesForAddress(address).send().then({
                "Rapper.useEffect": (sigs)=>{
                    console.log(`Signatures for ${DEFAULT_ADDRESS}:`, sigs);
                }
            }["Rapper.useEffect"]).catch(console.error);
        }
    }["Rapper.useEffect"], [
        wrapped
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-black text-white p-4 rounded-xl mt-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cluster$2f$cluster$2d$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClusterDisplay"], {
                clusterLabel: CLUSTER
            }, void 0, false, {
                fileName: "[project]/src/components/rapper.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-gray-400",
                children: [
                    "Monitoring signatures on ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        children: DEFAULT_ADDRESS
                    }, void 0, false, {
                        fileName: "[project]/src/components/rapper.tsx",
                        lineNumber: 31,
                        columnNumber: 34
                    }, this),
                    " via ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        children: rpcUrl
                    }, void 0, false, {
                        fileName: "[project]/src/components/rapper.tsx",
                        lineNumber: 31,
                        columnNumber: 69
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/rapper.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/rapper.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(Rapper, "lbcDycu1pM+Fz1Nq5P0MaMCGeco=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$solana$2f$useWrappedConnection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWrappedConnection"]
    ];
});
_c = Rapper;
var _c;
__turbopack_context__.k.register(_c, "Rapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/.pnpm/@anza-xyz+solana-rpc-get-stake-activation@1.0.1_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10/node_modules/@anza-xyz/solana-rpc-get-stake-activation/dist/src/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getStakeAccount": (()=>getStakeAccount),
    "getStakeActivatingAndDeactivating": (()=>getStakeActivatingAndDeactivating),
    "getStakeActivation": (()=>getStakeActivation),
    "getStakeAndActivating": (()=>getStakeAndActivating),
    "getStakeHistory": (()=>getStakeHistory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_@babel+core@7.27.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$web3$2e$js$40$1$2e$98$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+web3.js@1.98.2_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
;
// src/delegation.ts
function getStakeHistoryEntry(epoch, stakeHistory) {
    for (const entry of stakeHistory){
        if (entry.epoch === epoch) {
            return entry;
        }
    }
    return null;
}
var WARMUP_COOLDOWN_RATE = 0.09;
function getStakeAndActivating(delegation, targetEpoch, stakeHistory) {
    if (delegation.activationEpoch === delegation.deactivationEpoch) {
        return {
            effective: BigInt(0),
            activating: BigInt(0)
        };
    } else if (targetEpoch === delegation.activationEpoch) {
        return {
            effective: BigInt(0),
            activating: delegation.stake
        };
    } else if (targetEpoch < delegation.activationEpoch) {
        return {
            effective: BigInt(0),
            activating: BigInt(0)
        };
    }
    let currentEpoch = delegation.activationEpoch;
    let entry = getStakeHistoryEntry(currentEpoch, stakeHistory);
    if (entry !== null) {
        let currentEffectiveStake = BigInt(0);
        while(entry !== null){
            currentEpoch++;
            const remaining = delegation.stake - currentEffectiveStake;
            const weight = Number(remaining) / Number(entry.activating);
            const newlyEffectiveClusterStake = Number(entry.effective) * WARMUP_COOLDOWN_RATE;
            const newlyEffectiveStake = BigInt(Math.max(1, Math.round(weight * newlyEffectiveClusterStake)));
            currentEffectiveStake += newlyEffectiveStake;
            if (currentEffectiveStake >= delegation.stake) {
                currentEffectiveStake = delegation.stake;
                break;
            }
            if (currentEpoch >= targetEpoch || currentEpoch >= delegation.deactivationEpoch) {
                break;
            }
            entry = getStakeHistoryEntry(currentEpoch, stakeHistory);
        }
        return {
            effective: currentEffectiveStake,
            activating: delegation.stake - currentEffectiveStake
        };
    } else {
        return {
            effective: delegation.stake,
            activating: BigInt(0)
        };
    }
}
function getStakeActivatingAndDeactivating(delegation, targetEpoch, stakeHistory) {
    const { effective, activating } = getStakeAndActivating(delegation, targetEpoch, stakeHistory);
    if (targetEpoch < delegation.deactivationEpoch) {
        return {
            effective,
            activating,
            deactivating: BigInt(0)
        };
    } else if (targetEpoch == delegation.deactivationEpoch) {
        return {
            effective,
            activating: BigInt(0),
            deactivating: effective
        };
    }
    let currentEpoch = delegation.deactivationEpoch;
    let entry = getStakeHistoryEntry(currentEpoch, stakeHistory);
    if (entry !== null) {
        let currentEffectiveStake = effective;
        while(entry !== null){
            currentEpoch++;
            if (entry.deactivating === BigInt(0)) {
                break;
            }
            const weight = Number(currentEffectiveStake) / Number(entry.deactivating);
            const newlyNotEffectiveClusterStake = Number(entry.effective) * WARMUP_COOLDOWN_RATE;
            const newlyNotEffectiveStake = BigInt(Math.max(1, Math.round(weight * newlyNotEffectiveClusterStake)));
            currentEffectiveStake -= newlyNotEffectiveStake;
            if (currentEffectiveStake <= 0) {
                currentEffectiveStake = BigInt(0);
                break;
            }
            if (currentEpoch >= targetEpoch) {
                break;
            }
            entry = getStakeHistoryEntry(currentEpoch, stakeHistory);
        }
        return {
            effective: currentEffectiveStake,
            deactivating: currentEffectiveStake,
            activating: BigInt(0)
        };
    } else {
        return {
            effective: BigInt(0),
            activating: BigInt(0),
            deactivating: BigInt(0)
        };
    }
}
// src/stake.ts
var getStakeHistory = function(parsedData) {
    if (parsedData.value === null || parsedData.value.data instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"]) {
        throw new Error("Account not found");
    }
    const stakeHistory = [];
    parsedData.value.data.parsed.info.forEach((entry)=>{
        stakeHistory.push({
            epoch: BigInt(entry.epoch),
            effective: BigInt(entry.stakeHistory.effective),
            activating: BigInt(entry.stakeHistory.activating),
            deactivating: BigInt(entry.stakeHistory.deactivating)
        });
    });
    return stakeHistory;
};
var getStakeAccount = function(parsedData) {
    if (parsedData.value === null || parsedData.value.data instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"]) {
        throw new Error("Account not found");
    }
    let discriminant = BigInt(0);
    if (parsedData.value.data.parsed.type === "initialized") {
        discriminant = BigInt(1);
    } else if (parsedData.value.data.parsed.type === "delegated") {
        discriminant = BigInt(2);
    }
    return {
        discriminant,
        meta: {
            rentExemptReserve: BigInt(parsedData.value.data.parsed.info.meta.rentExemptReserve),
            authorized: {
                staker: parsedData.value.data.parsed.info.meta.authorized.staker,
                withdrawer: parsedData.value.data.parsed.info.meta.authorized.withdrawer
            },
            lockup: {
                unixTimestamp: BigInt(parsedData.value.data.parsed.info.meta.lockup.unixTimestamp),
                epoch: BigInt(parsedData.value.data.parsed.info.meta.lockup.epoch),
                custodian: parsedData.value.data.parsed.info.meta.lockup.custodian
            }
        },
        stake: parsedData.value.data.parsed.info.stake ? {
            delegation: {
                voterPubkey: parsedData.value.data.parsed.info.stake.delegation.voterPubkey,
                stake: BigInt(parsedData.value.data.parsed.info.stake.delegation.stake),
                activationEpoch: BigInt(parsedData.value.data.parsed.info.stake.delegation.activationEpoch),
                deactivationEpoch: BigInt(parsedData.value.data.parsed.info.stake.delegation.deactivationEpoch)
            },
            creditsObserved: BigInt(parsedData.value.data.parsed.info.stake.creditsObserved)
        } : null
    };
};
async function getStakeActivation(connection, stakeAddress) {
    const SYSVAR_STAKE_HISTORY_ADDRESS = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$web3$2e$js$40$1$2e$98$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"]("SysvarStakeHistory1111111111111111111111111");
    const [epochInfo, { stakeAccount, stakeAccountLamports }, stakeHistory] = await Promise.all([
        connection.getEpochInfo(),
        (async ()=>{
            const stakeAccountParsed = await connection.getParsedAccountInfo(stakeAddress);
            if (stakeAccountParsed === null || stakeAccountParsed.value === null) {
                throw new Error("Account not found");
            }
            const stakeAccount2 = getStakeAccount(stakeAccountParsed);
            const stakeAccountLamports2 = stakeAccountParsed.value.lamports;
            return {
                stakeAccount: stakeAccount2,
                stakeAccountLamports: stakeAccountLamports2
            };
        })(),
        (async ()=>{
            const stakeHistoryParsed = await connection.getParsedAccountInfo(SYSVAR_STAKE_HISTORY_ADDRESS);
            if (stakeHistoryParsed === null) {
                throw new Error("StakeHistory not found");
            }
            return getStakeHistory(stakeHistoryParsed);
        })()
    ]);
    const { effective, activating, deactivating } = stakeAccount.stake ? getStakeActivatingAndDeactivating(stakeAccount.stake.delegation, BigInt(epochInfo.epoch), stakeHistory) : {
        effective: BigInt(0),
        activating: BigInt(0),
        deactivating: BigInt(0)
    };
    let status;
    if (deactivating > 0) {
        status = "deactivating";
    } else if (activating > 0) {
        status = "activating";
    } else if (effective > 0) {
        status = "active";
    } else {
        status = "inactive";
    }
    const inactive = BigInt(stakeAccountLamports) - effective - stakeAccount.meta.rentExemptReserve;
    return {
        status,
        active: effective,
        inactive
    };
}
;
 //# sourceMappingURL=index.mjs.map
 //# sourceMappingURL=index.mjs.map
}}),
}]);

//# sourceMappingURL=_6aa141fd._.js.map