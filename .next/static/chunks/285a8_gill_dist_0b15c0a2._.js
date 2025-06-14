(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/gill@0.10.1_@solana+sysvars@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5_dbfcb2cc90f2ba1af096ecd3c7668049/node_modules/gill/dist/index.browser.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GENESIS_HASH": (()=>GENESIS_HASH),
    "LAMPORTS_PER_SOL": (()=>LAMPORTS_PER_SOL),
    "assertKeyPairIsExtractable": (()=>assertKeyPairIsExtractable),
    "checkedAddress": (()=>checkedAddress),
    "checkedTransactionSigner": (()=>checkedTransactionSigner),
    "createKeypairFromBase58": (()=>createKeypairFromBase58),
    "createKeypairSignerFromBase58": (()=>createKeypairSignerFromBase58),
    "createSolanaClient": (()=>createSolanaClient),
    "createTransaction": (()=>createTransaction),
    "debug": (()=>debug),
    "extractBytesFromKeyPair": (()=>extractBytesFromKeyPair),
    "extractBytesFromKeyPairSigner": (()=>extractBytesFromKeyPairSigner),
    "generateExtractableKeyPair": (()=>generateExtractableKeyPair),
    "generateExtractableKeyPairSigner": (()=>generateExtractableKeyPairSigner),
    "getExplorerLink": (()=>getExplorerLink),
    "getMinimumBalanceForRentExemption": (()=>getMinimumBalanceForRentExemption),
    "getMonikerFromGenesisHash": (()=>getMonikerFromGenesisHash),
    "getOldestSignatureForAddress": (()=>getOldestSignatureForAddress),
    "getPublicSolanaRpcUrl": (()=>getPublicSolanaRpcUrl),
    "insertReferenceKeyToTransactionMessage": (()=>insertReferenceKeyToTransactionMessage),
    "insertReferenceKeysToTransactionMessage": (()=>insertReferenceKeysToTransactionMessage),
    "isDebugEnabled": (()=>isDebugEnabled),
    "lamportsToSol": (()=>lamportsToSol),
    "localnet": (()=>localnet),
    "prepareTransaction": (()=>prepareTransaction),
    "sendAndConfirmTransactionWithSignersFactory": (()=>sendAndConfirmTransactionWithSignersFactory),
    "simulateTransactionFactory": (()=>simulateTransactionFactory),
    "transactionFromBase64": (()=>transactionFromBase64),
    "transactionToBase64": (()=>transactionToBase64),
    "transactionToBase64WithSigners": (()=>transactionToBase64WithSigners)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_@babel+core@7.27.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_@babel+core@7.27.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$signers$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+signers@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5.8.3/node_modules/@solana/signers/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$functional$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+functional@2.1.1_typescript@5.8.3/node_modules/@solana/functional/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transaction$2d$messages$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+transaction-messages@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5.8.3/node_modules/@solana/transaction-messages/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3_ws$40$7$2e$5$2e$10_b_8a8b0ed6f92aa26061cd1e4cd880ee89$2f$node_modules$2f40$solana$2f$kit$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+kit@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5.8.3_ws@7.5.10_b_8a8b0ed6f92aa26061cd1e4cd880ee89/node_modules/@solana/kit/dist/index.browser.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transactions$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+transactions@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5.8.3/node_modules/@solana/transactions/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$rpc$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$rpc$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+rpc@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5.8.3/node_modules/@solana/rpc/dist/index.browser.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$rpc$2d$subscriptions$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8_c5512e481dae86e5a99d98cc01e876d3$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+rpc-subscriptions@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5.8_c5512e481dae86e5a99d98cc01e876d3/node_modules/@solana/rpc-subscriptions/dist/index.browser.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$keys$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$keys$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+keys@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5.8.3/node_modules/@solana/keys/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$strings$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+codecs-strings@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5.8.3/node_modules/@solana/codecs-strings/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$errors$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+errors@2.1.1_typescript@5.8.3/node_modules/@solana/errors/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$instructions$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+instructions@2.1.1_typescript@5.8.3/node_modules/@solana/instructions/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$compute$2d$budget$40$0$2e$8$2e$0_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecode_ae25ff47cc92c2ac7ecca07a4e274973$2f$node_modules$2f40$solana$2d$program$2f$compute$2d$budget$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana-program+compute-budget@0.8.0_@solana+kit@2.1.1_fastestsmallesttextencoderdecode_ae25ff47cc92c2ac7ecca07a4e274973/node_modules/@solana-program/compute-budget/dist/src/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$assertions$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+assertions@2.1.1_typescript@5.8.3/node_modules/@solana/assertions/dist/index.browser.mjs [app-client] (ecmascript)");
;
;
;
;
// src/index.ts
// src/core/debug.ts
var GILL_LOG_LEVELS = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
};
var getMinLogLevel = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.GILL_DEBUG_LEVEL || global.__GILL_DEBUG_LEVEL__ || typeof window !== "undefined" && window.__GILL_DEBUG_LEVEL__ || "info";
var isDebugEnabled = ()=>Boolean(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.GILL_DEBUG_LEVEL || global.__GILL_DEBUG_LEVEL__ || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.GILL_DEBUG === "true" || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.GILL_DEBUG === "1" || global.__GILL_DEBUG__ === true || typeof window !== "undefined" && window.__GILL_DEBUG__ === true);
function debug(message, level = "info", prefix = "[GILL]") {
    if (!isDebugEnabled()) return;
    if (GILL_LOG_LEVELS[level] < GILL_LOG_LEVELS[getMinLogLevel()]) return;
    const formattedMessage = typeof message === "string" ? message : JSON.stringify(message, null, 2);
    switch(level){
        case "debug":
            console.log(prefix, formattedMessage);
            break;
        case "info":
            console.info(prefix, formattedMessage);
            break;
        case "warn":
            console.warn(prefix, formattedMessage);
            break;
        case "error":
            console.error(prefix, formattedMessage);
            break;
    }
}
// src/core/const.ts
var LAMPORTS_PER_SOL = 1e9;
var GENESIS_HASH = {
    mainnet: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdpKuc147dw2N9d",
    devnet: "EtWTRABZaYq6iMfeYKouRu166VU2xqa1wcaWoxPkrZBG",
    testnet: "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3zQawwpjk2NsNY"
};
function getMonikerFromGenesisHash(hash) {
    switch(hash){
        case GENESIS_HASH.mainnet:
            return "mainnet";
        case GENESIS_HASH.devnet:
            return "devnet";
        case GENESIS_HASH.testnet:
            return "testnet";
        default:
            return "unknown";
    }
}
function checkedAddress(input) {
    return typeof input == "string" ? input : input.address;
}
function checkedTransactionSigner(input) {
    if (typeof input === "string" || "address" in input == false) input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$signers$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNoopSigner"])(input);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$signers$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTransactionSigner"])(input)) throw new Error("A signer or address is required");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$signers$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsTransactionSigner"])(input);
    return input;
}
function lamportsToSol(lamports) {
    return new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 9
    }).format(`${lamports}E-9`);
}
// src/core/rpc.ts
function localnet(putativeString) {
    return putativeString;
}
function getPublicSolanaRpcUrl(cluster) {
    switch(cluster){
        case "devnet":
            return "https://api.devnet.solana.com";
        case "testnet":
            return "https://api.testnet.solana.com";
        case "mainnet-beta":
        case "mainnet":
            return "https://api.mainnet-beta.solana.com";
        case "localnet":
        case "localhost":
            return "http://127.0.0.1:8899";
        default:
            throw new Error("Invalid cluster moniker");
    }
}
// src/core/explorer.ts
function getExplorerLink(props = {}) {
    let url = new URL("https://explorer.solana.com");
    if (!props.cluster || props.cluster == "mainnet") props.cluster = "mainnet-beta";
    if ("address" in props) {
        url.pathname = `/address/${props.address}`;
    } else if ("transaction" in props) {
        url.pathname = `/tx/${props.transaction}`;
    } else if ("block" in props) {
        url.pathname = `/block/${props.block}`;
    }
    if (props.cluster !== "mainnet-beta") {
        if (props.cluster === "localnet" || props.cluster === "localhost") {
            url.searchParams.set("cluster", "custom");
            url.searchParams.set("customUrl", "http://localhost:8899");
        } else {
            url.searchParams.set("cluster", props.cluster);
        }
    }
    return url.toString();
}
function createTransaction({ version, feePayer, instructions, latestBlockhash, computeUnitLimit, computeUnitPrice }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$functional$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transaction$2d$messages$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTransactionMessage"])({
        version
    }), (tx)=>{
        if (latestBlockhash) {
            tx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transaction$2d$messages$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTransactionMessageLifetimeUsingBlockhash"])(latestBlockhash, tx);
        }
        if (typeof feePayer !== "string" && "address" in feePayer && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$signers$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTransactionSigner"])(feePayer)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$signers$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTransactionMessageFeePayerSigner"])(feePayer, tx);
        } else return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transaction$2d$messages$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTransactionMessageFeePayer"])(feePayer, tx);
    }, (tx)=>{
        if (typeof computeUnitLimit !== "undefined") {
            tx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transaction$2d$messages$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendTransactionMessageInstruction"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$compute$2d$budget$40$0$2e$8$2e$0_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecode_ae25ff47cc92c2ac7ecca07a4e274973$2f$node_modules$2f40$solana$2d$program$2f$compute$2d$budget$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSetComputeUnitLimitInstruction"])({
                units: Number(computeUnitLimit)
            }), tx);
        }
        if (typeof computeUnitPrice !== "undefined") {
            tx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transaction$2d$messages$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendTransactionMessageInstruction"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$compute$2d$budget$40$0$2e$8$2e$0_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecode_ae25ff47cc92c2ac7ecca07a4e274973$2f$node_modules$2f40$solana$2d$program$2f$compute$2d$budget$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSetComputeUnitPriceInstruction"])({
                microLamports: Number(computeUnitPrice)
            }), tx);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transaction$2d$messages$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendTransactionMessageInstructions"])(instructions, tx);
    });
}
function sendAndConfirmTransactionWithSignersFactory({ rpc, rpcSubscriptions }) {
    const sendAndConfirmTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3_ws$40$7$2e$5$2e$10_b_8a8b0ed6f92aa26061cd1e4cd880ee89$2f$node_modules$2f40$solana$2f$kit$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sendAndConfirmTransactionFactory"])({
        rpc,
        rpcSubscriptions
    });
    return async function sendAndConfirmTransactionWithSigners(transaction, config = {
        commitment: "confirmed"
    }) {
        if ("messageBytes" in transaction == false) {
            transaction = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$signers$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signTransactionMessageWithSigners"])(transaction);
        }
        debug(`Sending transaction: ${getExplorerLink({
            transaction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transactions$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSignatureFromTransaction"])(transaction)
        })}`);
        debug(`Transaction as base64: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transactions$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBase64EncodedWireTransaction"])(transaction)}`, "debug");
        await sendAndConfirmTransaction(transaction, config);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transactions$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSignatureFromTransaction"])(transaction);
    };
}
function isSetComputeLimitInstruction(instruction) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$instructions$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInstructionForProgram"])(instruction, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$compute$2d$budget$40$0$2e$8$2e$0_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecode_ae25ff47cc92c2ac7ecca07a4e274973$2f$node_modules$2f40$solana$2d$program$2f$compute$2d$budget$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPUTE_BUDGET_PROGRAM_ADDRESS"]) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$instructions$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInstructionWithData"])(instruction) && instruction.data[0] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$compute$2d$budget$40$0$2e$8$2e$0_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecode_ae25ff47cc92c2ac7ecca07a4e274973$2f$node_modules$2f40$solana$2d$program$2f$compute$2d$budget$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComputeBudgetInstruction"].SetComputeUnitLimit;
}
function transactionToBase64(tx) {
    if ("messageBytes" in tx) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$functional$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(tx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transactions$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBase64EncodedWireTransaction"]);
    else return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$functional$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(tx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transactions$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compileTransaction"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transactions$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBase64EncodedWireTransaction"]);
}
async function transactionToBase64WithSigners(tx) {
    if ("messageBytes" in tx) return transactionToBase64(tx);
    else return transactionToBase64(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$signers$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partiallySignTransactionMessageWithSigners"])(tx));
}
// src/core/prepare-transaction.ts
async function prepareTransaction(config) {
    if (!config.computeUnitLimitMultiplier) config.computeUnitLimitMultiplier = 1.1;
    if (config.blockhashReset !== false) config.blockhashReset = true;
    const computeBudgetIndex = {
        limit: -1,
        price: -1
    };
    config.transaction.instructions.map((ix, index)=>{
        if (ix.programAddress != __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$compute$2d$budget$40$0$2e$8$2e$0_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecode_ae25ff47cc92c2ac7ecca07a4e274973$2f$node_modules$2f40$solana$2d$program$2f$compute$2d$budget$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPUTE_BUDGET_PROGRAM_ADDRESS"]) return;
        if (isSetComputeLimitInstruction(ix)) {
            computeBudgetIndex.limit = index;
        }
    });
    if (computeBudgetIndex.limit < 0 || config.computeUnitLimitReset) {
        const units = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3_ws$40$7$2e$5$2e$10_b_8a8b0ed6f92aa26061cd1e4cd880ee89$2f$node_modules$2f40$solana$2f$kit$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getComputeUnitEstimateForTransactionMessageFactory"])({
            rpc: config.rpc
        })(config.transaction);
        debug(`Obtained compute units from simulation: ${units}`, "debug");
        const ix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$compute$2d$budget$40$0$2e$8$2e$0_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecode_ae25ff47cc92c2ac7ecca07a4e274973$2f$node_modules$2f40$solana$2d$program$2f$compute$2d$budget$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSetComputeUnitLimitInstruction"])({
            units: units * config.computeUnitLimitMultiplier
        });
        if (computeBudgetIndex.limit < 0) {
            config.transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transaction$2d$messages$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendTransactionMessageInstruction"])(ix, config.transaction);
        } else if (config.computeUnitLimitReset) {
            const nextInstructions = [
                ...config.transaction.instructions
            ];
            nextInstructions.splice(computeBudgetIndex.limit, 1, ix);
            config.transaction = Object.freeze({
                ...config.transaction,
                instructions: nextInstructions
            });
        }
    }
    if (config.blockhashReset || "lifetimeConstraint" in config.transaction == false) {
        const { value: latestBlockhash } = await config.rpc.getLatestBlockhash().send();
        if ("lifetimeConstraint" in config.transaction == false) {
            debug("Transaction missing latest blockhash, fetching one.", "debug");
            config.transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transaction$2d$messages$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTransactionMessageLifetimeUsingBlockhash"])(latestBlockhash, config.transaction);
        } else if (config.blockhashReset) {
            debug("Auto resetting the latest blockhash.", "debug");
            config.transaction = Object.freeze({
                ...config.transaction,
                lifetimeConstraint: latestBlockhash
            });
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transaction$2d$messages$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsTransactionMessageWithBlockhashLifetime"])(config.transaction);
    if (isDebugEnabled()) {
        debug(`Transaction as base64: ${await transactionToBase64WithSigners(config.transaction)}`, "debug");
    }
    return config.transaction;
}
function simulateTransactionFactory({ rpc }) {
    return async function simulateTransaction(transaction, config) {
        if ("messageBytes" in transaction == false) {
            transaction = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$signers$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partiallySignTransactionMessageWithSigners"])(transaction);
        }
        return rpc.simulateTransaction((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transactions$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBase64EncodedWireTransaction"])(transaction), {
            replaceRecentBlockhash: true,
            // innerInstructions: true,
            ...config,
            sigVerify: false,
            encoding: "base64"
        }).send();
    };
}
// src/core/create-solana-client.ts
function createSolanaClient({ urlOrMoniker, rpcConfig, rpcSubscriptionsConfig }) {
    if (!urlOrMoniker) throw new Error("Cluster url or moniker is required");
    if (urlOrMoniker instanceof URL == false) {
        try {
            urlOrMoniker = new URL(urlOrMoniker.toString());
        } catch (err) {
            try {
                urlOrMoniker = new URL(getPublicSolanaRpcUrl(urlOrMoniker.toString()));
            } catch (err2) {
                throw new Error("Invalid URL or cluster moniker");
            }
        }
    }
    if (!urlOrMoniker.protocol.match(/^https?/i)) {
        throw new Error("Unsupported protocol. Only HTTP and HTTPS are supported");
    }
    if (rpcConfig?.port) {
        urlOrMoniker.port = rpcConfig.port.toString();
    }
    const rpc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$rpc$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$rpc$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSolanaRpc"])(urlOrMoniker.toString(), rpcConfig);
    urlOrMoniker.protocol = urlOrMoniker.protocol.replace("http", "ws");
    if (rpcSubscriptionsConfig?.port) {
        urlOrMoniker.port = rpcSubscriptionsConfig.port.toString();
    } else if (urlOrMoniker.hostname == "localhost" || urlOrMoniker.hostname.startsWith("127")) {
        urlOrMoniker.port = "8900";
    }
    const rpcSubscriptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$rpc$2d$subscriptions$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8_c5512e481dae86e5a99d98cc01e876d3$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSolanaRpcSubscriptions"])(urlOrMoniker.toString(), rpcSubscriptionsConfig);
    return {
        rpc,
        rpcSubscriptions,
        sendAndConfirmTransaction: sendAndConfirmTransactionWithSignersFactory({
            // @ts-ignore - TODO(FIXME:nick)
            rpc,
            // @ts-ignore - TODO(FIXME:nick)
            rpcSubscriptions
        }),
        // @ts-ignore
        simulateTransaction: simulateTransactionFactory({
            rpc
        })
    };
}
// src/core/accounts.ts
function getMinimumBalanceForRentExemption(space = 0) {
    const RENT = {
        /**
     * Account storage overhead for calculation of base rent. (aka the number of bytes required to store an account with no data.
     */ ACCOUNT_STORAGE_OVERHEAD: 128n,
        /**
     * Amount of time (in years) a balance must include rent for the account to
     * be rent exempt.
     */ DEFAULT_EXEMPTION_THRESHOLD: BigInt(Math.floor(2 * 1e3)) / 1000n,
        /**
     * Default rental rate in lamports/byte-year. This calculation is based on:
     * - 10^9 lamports per SOL
     * - $1 per SOL
     * - $0.01 per megabyte day
     * - $3.65 per megabyte year
     */ DEFAULT_LAMPORTS_PER_BYTE_YEAR: BigInt(Math.floor(1e9 / 100 * 365 / (1024 * 1024)))
    };
    return (RENT.ACCOUNT_STORAGE_OVERHEAD + BigInt(space)) * RENT.DEFAULT_LAMPORTS_PER_BYTE_YEAR * RENT.DEFAULT_EXEMPTION_THRESHOLD / 1n;
}
function assertKeyPairIsExtractable(keyPair) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$assertions$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertKeyExporterIsAvailable"])();
    if (!keyPair.privateKey) {
        throw new Error("Keypair is missing private key");
    }
    if (!keyPair.publicKey) {
        throw new Error("Keypair is missing public key");
    }
    if (!keyPair.privateKey.extractable) {
        throw new Error("Private key is not extractable");
    }
}
async function generateExtractableKeyPair() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$assertions$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertKeyGenerationIsAvailable"])();
    return crypto.subtle.generateKey(/* algorithm */ "Ed25519", // Native implementation status: https://github.com/WICG/webcrypto-secure-curves/issues/20
    /* extractable */ true, /* allowed uses */ [
        "sign",
        "verify"
    ]);
}
async function generateExtractableKeyPairSigner() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$signers$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSignerFromKeyPair"])(await generateExtractableKeyPair());
}
async function extractBytesFromKeyPair(keypair) {
    assertKeyPairIsExtractable(keypair);
    const [publicKeyBytes, privateKeyJwk] = await Promise.all([
        crypto.subtle.exportKey("raw", keypair.publicKey),
        crypto.subtle.exportKey("jwk", keypair.privateKey)
    ]);
    if (!privateKeyJwk.d) throw new Error("Failed to get private key bytes");
    return new Uint8Array([
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(privateKeyJwk.d, "base64"),
        ...new Uint8Array(publicKeyBytes)
    ]);
}
async function extractBytesFromKeyPairSigner(keypairSigner) {
    return extractBytesFromKeyPair(keypairSigner.keyPair);
}
async function createKeypairFromBase58(punitiveSecretKey) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$keys$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$keys$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createKeyPairFromBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$strings$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBase58Encoder"])().encode(punitiveSecretKey));
}
async function createKeypairSignerFromBase58(punitiveSecretKey) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$signers$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSignerFromKeyPair"])(await createKeypairFromBase58(punitiveSecretKey));
}
function transactionFromBase64(base64EncodedTransaction) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transactions$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionDecoder"])().decode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$strings$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBase64Encoder"])().encode(base64EncodedTransaction));
}
async function getOldestSignatureForAddress(rpc, address, config) {
    const signatures = await rpc.getSignaturesForAddress(address, config).send({
        abortSignal: config?.abortSignal
    });
    if (!signatures.length) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$errors$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$errors$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION_ERROR__UNKNOWN"], {
            errorName: "OldestSignatureNotFound"
        });
    }
    const oldest = signatures[signatures.length - 1];
    if (signatures.length < (config?.limit || 1e3)) return oldest;
    try {
        return await getOldestSignatureForAddress(rpc, address, {
            ...config,
            before: oldest.signature
        });
    } catch (err) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$errors$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSolanaError"])(err, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$errors$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION_ERROR__UNKNOWN"])) return oldest;
        throw err;
    }
}
function insertReferenceKeyToTransactionMessage(reference, transaction) {
    return insertReferenceKeysToTransactionMessage([
        reference
    ], transaction);
}
function insertReferenceKeysToTransactionMessage(references, transaction) {
    const nonMemoIndex = transaction.instructions.findIndex((ix)=>ix.programAddress !== "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");
    if (transaction.instructions.length == 0 || nonMemoIndex == -1) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$errors$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$errors$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__INSTRUCTION_ERROR__GENERIC_ERROR"], {
            index: transaction.instructions.length || nonMemoIndex,
            cause: "At least one non-memo instruction is required"
        });
    }
    const modifiedIx = {
        ...transaction.instructions[nonMemoIndex],
        accounts: [
            ...transaction.instructions[nonMemoIndex].accounts || [],
            // actually insert the reference keys
            ...references.map((ref)=>({
                    address: ref,
                    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$instructions$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountRole"].READONLY
                }))
        ]
    };
    const instructions = [
        ...transaction.instructions
    ];
    instructions.splice(nonMemoIndex, 1, modifiedIx);
    return Object.freeze({
        ...transaction,
        instructions: Object.freeze(instructions)
    });
}
;
 //# sourceMappingURL=index.browser.mjs.map
 //# sourceMappingURL=index.browser.mjs.map
}}),
"[project]/node_modules/.pnpm/gill@0.10.1_@solana+sysvars@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5_dbfcb2cc90f2ba1af096ecd3c7668049/node_modules/gill/dist/chunk-NEQINEXL.node.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GENESIS_HASH": (()=>GENESIS_HASH),
    "LAMPORTS_PER_SOL": (()=>LAMPORTS_PER_SOL),
    "checkedAddress": (()=>checkedAddress),
    "checkedTransactionSigner": (()=>checkedTransactionSigner),
    "getMonikerFromGenesisHash": (()=>getMonikerFromGenesisHash),
    "hasSetComputeLimitInstruction": (()=>hasSetComputeLimitInstruction),
    "hasSetComputeUnitPriceInstruction": (()=>hasSetComputeUnitPriceInstruction),
    "isSetComputeLimitInstruction": (()=>isSetComputeLimitInstruction),
    "isSetComputeUnitPriceInstruction": (()=>isSetComputeUnitPriceInstruction),
    "lamportsToSol": (()=>lamportsToSol)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$signers$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+signers@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5.8.3/node_modules/@solana/signers/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$instructions$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+instructions@2.1.1_typescript@5.8.3/node_modules/@solana/instructions/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$compute$2d$budget$40$0$2e$8$2e$0_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecode_ae25ff47cc92c2ac7ecca07a4e274973$2f$node_modules$2f40$solana$2d$program$2f$compute$2d$budget$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana-program+compute-budget@0.8.0_@solana+kit@2.1.1_fastestsmallesttextencoderdecode_ae25ff47cc92c2ac7ecca07a4e274973/node_modules/@solana-program/compute-budget/dist/src/index.mjs [app-client] (ecmascript)");
;
;
// src/core/const.ts
var LAMPORTS_PER_SOL = 1e9;
var GENESIS_HASH = {
    mainnet: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdpKuc147dw2N9d",
    devnet: "EtWTRABZaYq6iMfeYKouRu166VU2xqa1wcaWoxPkrZBG",
    testnet: "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3zQawwpjk2NsNY"
};
function getMonikerFromGenesisHash(hash) {
    switch(hash){
        case GENESIS_HASH.mainnet:
            return "mainnet";
        case GENESIS_HASH.devnet:
            return "devnet";
        case GENESIS_HASH.testnet:
            return "testnet";
        default:
            return "unknown";
    }
}
function checkedAddress(input) {
    return typeof input == "string" ? input : input.address;
}
function checkedTransactionSigner(input) {
    if (typeof input === "string" || "address" in input == false) input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$signers$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNoopSigner"])(input);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$signers$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTransactionSigner"])(input)) throw new Error("A signer or address is required");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$signers$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsTransactionSigner"])(input);
    return input;
}
function lamportsToSol(lamports) {
    return new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 9
    }).format(`${lamports}E-9`);
}
function isSetComputeLimitInstruction(instruction) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$instructions$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInstructionForProgram"])(instruction, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$compute$2d$budget$40$0$2e$8$2e$0_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecode_ae25ff47cc92c2ac7ecca07a4e274973$2f$node_modules$2f40$solana$2d$program$2f$compute$2d$budget$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPUTE_BUDGET_PROGRAM_ADDRESS"]) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$instructions$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInstructionWithData"])(instruction) && instruction.data[0] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$compute$2d$budget$40$0$2e$8$2e$0_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecode_ae25ff47cc92c2ac7ecca07a4e274973$2f$node_modules$2f40$solana$2d$program$2f$compute$2d$budget$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComputeBudgetInstruction"].SetComputeUnitLimit;
}
function hasSetComputeLimitInstruction(tx) {
    return tx.instructions.filter(isSetComputeLimitInstruction).length == 1;
}
function isSetComputeUnitPriceInstruction(instruction) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$instructions$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInstructionForProgram"])(instruction, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$compute$2d$budget$40$0$2e$8$2e$0_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecode_ae25ff47cc92c2ac7ecca07a4e274973$2f$node_modules$2f40$solana$2d$program$2f$compute$2d$budget$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPUTE_BUDGET_PROGRAM_ADDRESS"]) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$instructions$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInstructionWithData"])(instruction) && instruction.data[0] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$compute$2d$budget$40$0$2e$8$2e$0_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecode_ae25ff47cc92c2ac7ecca07a4e274973$2f$node_modules$2f40$solana$2d$program$2f$compute$2d$budget$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComputeBudgetInstruction"].SetComputeUnitPrice;
}
function hasSetComputeUnitPriceInstruction(tx) {
    return tx.instructions.filter(isSetComputeUnitPriceInstruction).length == 1;
}
;
 //# sourceMappingURL=chunk-NEQINEXL.node.mjs.map
 //# sourceMappingURL=chunk-NEQINEXL.node.mjs.map
}}),
"[project]/node_modules/.pnpm/gill@0.10.1_@solana+sysvars@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5_dbfcb2cc90f2ba1af096ecd3c7668049/node_modules/gill/dist/chunk-DF5RIJC5.node.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "assertKeyPairIsExtractable": (()=>assertKeyPairIsExtractable),
    "createKeypairFromBase58": (()=>createKeypairFromBase58),
    "createKeypairSignerFromBase58": (()=>createKeypairSignerFromBase58),
    "createSolanaClient": (()=>createSolanaClient),
    "createTransaction": (()=>createTransaction),
    "debug": (()=>debug),
    "extractBytesFromKeyPair": (()=>extractBytesFromKeyPair),
    "extractBytesFromKeyPairSigner": (()=>extractBytesFromKeyPairSigner),
    "generateExtractableKeyPair": (()=>generateExtractableKeyPair),
    "generateExtractableKeyPairSigner": (()=>generateExtractableKeyPairSigner),
    "getExplorerLink": (()=>getExplorerLink),
    "getMinimumBalanceForRentExemption": (()=>getMinimumBalanceForRentExemption),
    "getOldestSignatureForAddress": (()=>getOldestSignatureForAddress),
    "getPublicSolanaRpcUrl": (()=>getPublicSolanaRpcUrl),
    "insertReferenceKeyToTransactionMessage": (()=>insertReferenceKeyToTransactionMessage),
    "insertReferenceKeysToTransactionMessage": (()=>insertReferenceKeysToTransactionMessage),
    "isDebugEnabled": (()=>isDebugEnabled),
    "localnet": (()=>localnet),
    "prepareTransaction": (()=>prepareTransaction),
    "sendAndConfirmTransactionWithSignersFactory": (()=>sendAndConfirmTransactionWithSignersFactory),
    "simulateTransactionFactory": (()=>simulateTransactionFactory),
    "transactionFromBase64": (()=>transactionFromBase64),
    "transactionToBase64": (()=>transactionToBase64),
    "transactionToBase64WithSigners": (()=>transactionToBase64WithSigners)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_@babel+core@7.27.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_@babel+core@7.27.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$NEQINEXL$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/gill@0.10.1_@solana+sysvars@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5_dbfcb2cc90f2ba1af096ecd3c7668049/node_modules/gill/dist/chunk-NEQINEXL.node.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$compute$2d$budget$40$0$2e$8$2e$0_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecode_ae25ff47cc92c2ac7ecca07a4e274973$2f$node_modules$2f40$solana$2d$program$2f$compute$2d$budget$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana-program+compute-budget@0.8.0_@solana+kit@2.1.1_fastestsmallesttextencoderdecode_ae25ff47cc92c2ac7ecca07a4e274973/node_modules/@solana-program/compute-budget/dist/src/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$functional$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+functional@2.1.1_typescript@5.8.3/node_modules/@solana/functional/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transaction$2d$messages$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+transaction-messages@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5.8.3/node_modules/@solana/transaction-messages/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$signers$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+signers@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5.8.3/node_modules/@solana/signers/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3_ws$40$7$2e$5$2e$10_b_8a8b0ed6f92aa26061cd1e4cd880ee89$2f$node_modules$2f40$solana$2f$kit$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+kit@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5.8.3_ws@7.5.10_b_8a8b0ed6f92aa26061cd1e4cd880ee89/node_modules/@solana/kit/dist/index.browser.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transactions$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+transactions@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5.8.3/node_modules/@solana/transactions/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$rpc$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$rpc$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+rpc@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5.8.3/node_modules/@solana/rpc/dist/index.browser.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$rpc$2d$subscriptions$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8_c5512e481dae86e5a99d98cc01e876d3$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+rpc-subscriptions@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5.8_c5512e481dae86e5a99d98cc01e876d3/node_modules/@solana/rpc-subscriptions/dist/index.browser.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$keys$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$keys$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+keys@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5.8.3/node_modules/@solana/keys/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$strings$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+codecs-strings@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5.8.3/node_modules/@solana/codecs-strings/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$errors$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+errors@2.1.1_typescript@5.8.3/node_modules/@solana/errors/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$instructions$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+instructions@2.1.1_typescript@5.8.3/node_modules/@solana/instructions/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$assertions$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+assertions@2.1.1_typescript@5.8.3/node_modules/@solana/assertions/dist/index.browser.mjs [app-client] (ecmascript)");
;
;
;
;
// src/core/debug.ts
var GILL_LOG_LEVELS = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
};
var getMinLogLevel = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.GILL_DEBUG_LEVEL || global.__GILL_DEBUG_LEVEL__ || typeof window !== "undefined" && window.__GILL_DEBUG_LEVEL__ || "info";
var isDebugEnabled = ()=>Boolean(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.GILL_DEBUG_LEVEL || global.__GILL_DEBUG_LEVEL__ || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.GILL_DEBUG === "true" || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.GILL_DEBUG === "1" || global.__GILL_DEBUG__ === true || typeof window !== "undefined" && window.__GILL_DEBUG__ === true);
function debug(message, level = "info", prefix = "[GILL]") {
    if (!isDebugEnabled()) return;
    if (GILL_LOG_LEVELS[level] < GILL_LOG_LEVELS[getMinLogLevel()]) return;
    const formattedMessage = typeof message === "string" ? message : JSON.stringify(message, null, 2);
    switch(level){
        case "debug":
            console.log(prefix, formattedMessage);
            break;
        case "info":
            console.info(prefix, formattedMessage);
            break;
        case "warn":
            console.warn(prefix, formattedMessage);
            break;
        case "error":
            console.error(prefix, formattedMessage);
            break;
    }
}
// src/core/rpc.ts
function localnet(putativeString) {
    return putativeString;
}
function getPublicSolanaRpcUrl(cluster) {
    switch(cluster){
        case "devnet":
            return "https://api.devnet.solana.com";
        case "testnet":
            return "https://api.testnet.solana.com";
        case "mainnet-beta":
        case "mainnet":
            return "https://api.mainnet-beta.solana.com";
        case "localnet":
        case "localhost":
            return "http://127.0.0.1:8899";
        default:
            throw new Error("Invalid cluster moniker");
    }
}
// src/core/explorer.ts
function getExplorerLink(props = {}) {
    let url = new URL("https://explorer.solana.com");
    if (!props.cluster || props.cluster == "mainnet") props.cluster = "mainnet-beta";
    if ("address" in props) {
        url.pathname = `/address/${props.address}`;
    } else if ("transaction" in props) {
        url.pathname = `/tx/${props.transaction}`;
    } else if ("block" in props) {
        url.pathname = `/block/${props.block}`;
    }
    if (props.cluster !== "mainnet-beta") {
        if (props.cluster === "localnet" || props.cluster === "localhost") {
            url.searchParams.set("cluster", "custom");
            url.searchParams.set("customUrl", "http://localhost:8899");
        } else {
            url.searchParams.set("cluster", props.cluster);
        }
    }
    return url.toString();
}
function createTransaction({ version, feePayer, instructions, latestBlockhash, computeUnitLimit, computeUnitPrice }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$functional$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transaction$2d$messages$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTransactionMessage"])({
        version
    }), (tx)=>{
        if (latestBlockhash) {
            tx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transaction$2d$messages$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTransactionMessageLifetimeUsingBlockhash"])(latestBlockhash, tx);
        }
        if (typeof feePayer !== "string" && "address" in feePayer && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$signers$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTransactionSigner"])(feePayer)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$signers$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTransactionMessageFeePayerSigner"])(feePayer, tx);
        } else return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transaction$2d$messages$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTransactionMessageFeePayer"])(feePayer, tx);
    }, (tx)=>{
        if (typeof computeUnitLimit !== "undefined") {
            tx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transaction$2d$messages$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendTransactionMessageInstruction"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$compute$2d$budget$40$0$2e$8$2e$0_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecode_ae25ff47cc92c2ac7ecca07a4e274973$2f$node_modules$2f40$solana$2d$program$2f$compute$2d$budget$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSetComputeUnitLimitInstruction"])({
                units: Number(computeUnitLimit)
            }), tx);
        }
        if (typeof computeUnitPrice !== "undefined") {
            tx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transaction$2d$messages$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendTransactionMessageInstruction"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$compute$2d$budget$40$0$2e$8$2e$0_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecode_ae25ff47cc92c2ac7ecca07a4e274973$2f$node_modules$2f40$solana$2d$program$2f$compute$2d$budget$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSetComputeUnitPriceInstruction"])({
                microLamports: Number(computeUnitPrice)
            }), tx);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transaction$2d$messages$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendTransactionMessageInstructions"])(instructions, tx);
    });
}
function sendAndConfirmTransactionWithSignersFactory({ rpc, rpcSubscriptions }) {
    const sendAndConfirmTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3_ws$40$7$2e$5$2e$10_b_8a8b0ed6f92aa26061cd1e4cd880ee89$2f$node_modules$2f40$solana$2f$kit$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sendAndConfirmTransactionFactory"])({
        rpc,
        rpcSubscriptions
    });
    return async function sendAndConfirmTransactionWithSigners(transaction, config = {
        commitment: "confirmed"
    }) {
        if ("messageBytes" in transaction == false) {
            transaction = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$signers$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signTransactionMessageWithSigners"])(transaction);
        }
        debug(`Sending transaction: ${getExplorerLink({
            transaction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transactions$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSignatureFromTransaction"])(transaction)
        })}`);
        debug(`Transaction as base64: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transactions$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBase64EncodedWireTransaction"])(transaction)}`, "debug");
        await sendAndConfirmTransaction(transaction, config);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transactions$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSignatureFromTransaction"])(transaction);
    };
}
function transactionToBase64(tx) {
    if ("messageBytes" in tx) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$functional$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(tx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transactions$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBase64EncodedWireTransaction"]);
    else return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$functional$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(tx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transactions$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compileTransaction"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transactions$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBase64EncodedWireTransaction"]);
}
async function transactionToBase64WithSigners(tx) {
    if ("messageBytes" in tx) return transactionToBase64(tx);
    else return transactionToBase64(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$signers$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partiallySignTransactionMessageWithSigners"])(tx));
}
async function prepareTransaction(config) {
    if (!config.computeUnitLimitMultiplier) config.computeUnitLimitMultiplier = 1.1;
    if (config.blockhashReset !== false) config.blockhashReset = true;
    const computeBudgetIndex = {
        limit: -1,
        price: -1
    };
    config.transaction.instructions.map((ix, index)=>{
        if (ix.programAddress != __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$compute$2d$budget$40$0$2e$8$2e$0_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecode_ae25ff47cc92c2ac7ecca07a4e274973$2f$node_modules$2f40$solana$2d$program$2f$compute$2d$budget$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPUTE_BUDGET_PROGRAM_ADDRESS"]) return;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$NEQINEXL$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSetComputeLimitInstruction"])(ix)) {
            computeBudgetIndex.limit = index;
        }
    });
    if (computeBudgetIndex.limit < 0 || config.computeUnitLimitReset) {
        const units = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3_ws$40$7$2e$5$2e$10_b_8a8b0ed6f92aa26061cd1e4cd880ee89$2f$node_modules$2f40$solana$2f$kit$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getComputeUnitEstimateForTransactionMessageFactory"])({
            rpc: config.rpc
        })(config.transaction);
        debug(`Obtained compute units from simulation: ${units}`, "debug");
        const ix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$compute$2d$budget$40$0$2e$8$2e$0_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecode_ae25ff47cc92c2ac7ecca07a4e274973$2f$node_modules$2f40$solana$2d$program$2f$compute$2d$budget$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSetComputeUnitLimitInstruction"])({
            units: units * config.computeUnitLimitMultiplier
        });
        if (computeBudgetIndex.limit < 0) {
            config.transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transaction$2d$messages$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendTransactionMessageInstruction"])(ix, config.transaction);
        } else if (config.computeUnitLimitReset) {
            const nextInstructions = [
                ...config.transaction.instructions
            ];
            nextInstructions.splice(computeBudgetIndex.limit, 1, ix);
            config.transaction = Object.freeze({
                ...config.transaction,
                instructions: nextInstructions
            });
        }
    }
    if (config.blockhashReset || "lifetimeConstraint" in config.transaction == false) {
        const { value: latestBlockhash } = await config.rpc.getLatestBlockhash().send();
        if ("lifetimeConstraint" in config.transaction == false) {
            debug("Transaction missing latest blockhash, fetching one.", "debug");
            config.transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transaction$2d$messages$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTransactionMessageLifetimeUsingBlockhash"])(latestBlockhash, config.transaction);
        } else if (config.blockhashReset) {
            debug("Auto resetting the latest blockhash.", "debug");
            config.transaction = Object.freeze({
                ...config.transaction,
                lifetimeConstraint: latestBlockhash
            });
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transaction$2d$messages$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsTransactionMessageWithBlockhashLifetime"])(config.transaction);
    if (isDebugEnabled()) {
        debug(`Transaction as base64: ${await transactionToBase64WithSigners(config.transaction)}`, "debug");
    }
    return config.transaction;
}
function simulateTransactionFactory({ rpc }) {
    return async function simulateTransaction(transaction, config) {
        if ("messageBytes" in transaction == false) {
            transaction = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$signers$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partiallySignTransactionMessageWithSigners"])(transaction);
        }
        return rpc.simulateTransaction((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transactions$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBase64EncodedWireTransaction"])(transaction), {
            replaceRecentBlockhash: true,
            // innerInstructions: true,
            ...config,
            sigVerify: false,
            encoding: "base64"
        }).send();
    };
}
function createSolanaClient({ urlOrMoniker, rpcConfig, rpcSubscriptionsConfig }) {
    if (!urlOrMoniker) throw new Error("Cluster url or moniker is required");
    if (urlOrMoniker instanceof URL == false) {
        try {
            urlOrMoniker = new URL(urlOrMoniker.toString());
        } catch (err) {
            try {
                urlOrMoniker = new URL(getPublicSolanaRpcUrl(urlOrMoniker.toString()));
            } catch (err2) {
                throw new Error("Invalid URL or cluster moniker");
            }
        }
    }
    if (!urlOrMoniker.protocol.match(/^https?/i)) {
        throw new Error("Unsupported protocol. Only HTTP and HTTPS are supported");
    }
    if (rpcConfig?.port) {
        urlOrMoniker.port = rpcConfig.port.toString();
    }
    const rpc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$rpc$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$rpc$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSolanaRpc"])(urlOrMoniker.toString(), rpcConfig);
    urlOrMoniker.protocol = urlOrMoniker.protocol.replace("http", "ws");
    if (rpcSubscriptionsConfig?.port) {
        urlOrMoniker.port = rpcSubscriptionsConfig.port.toString();
    } else if (urlOrMoniker.hostname == "localhost" || urlOrMoniker.hostname.startsWith("127")) {
        urlOrMoniker.port = "8900";
    }
    const rpcSubscriptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$rpc$2d$subscriptions$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8_c5512e481dae86e5a99d98cc01e876d3$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSolanaRpcSubscriptions"])(urlOrMoniker.toString(), rpcSubscriptionsConfig);
    return {
        rpc,
        rpcSubscriptions,
        sendAndConfirmTransaction: sendAndConfirmTransactionWithSignersFactory({
            // @ts-ignore - TODO(FIXME:nick)
            rpc,
            // @ts-ignore - TODO(FIXME:nick)
            rpcSubscriptions
        }),
        // @ts-ignore
        simulateTransaction: simulateTransactionFactory({
            rpc
        })
    };
}
// src/core/accounts.ts
function getMinimumBalanceForRentExemption(space = 0) {
    const RENT = {
        /**
     * Account storage overhead for calculation of base rent. (aka the number of bytes required to store an account with no data.
     */ ACCOUNT_STORAGE_OVERHEAD: 128n,
        /**
     * Amount of time (in years) a balance must include rent for the account to
     * be rent exempt.
     */ DEFAULT_EXEMPTION_THRESHOLD: BigInt(Math.floor(2 * 1e3)) / 1000n,
        /**
     * Default rental rate in lamports/byte-year. This calculation is based on:
     * - 10^9 lamports per SOL
     * - $1 per SOL
     * - $0.01 per megabyte day
     * - $3.65 per megabyte year
     */ DEFAULT_LAMPORTS_PER_BYTE_YEAR: BigInt(Math.floor(1e9 / 100 * 365 / (1024 * 1024)))
    };
    return (RENT.ACCOUNT_STORAGE_OVERHEAD + BigInt(space)) * RENT.DEFAULT_LAMPORTS_PER_BYTE_YEAR * RENT.DEFAULT_EXEMPTION_THRESHOLD / 1n;
}
function assertKeyPairIsExtractable(keyPair) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$assertions$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertKeyExporterIsAvailable"])();
    if (!keyPair.privateKey) {
        throw new Error("Keypair is missing private key");
    }
    if (!keyPair.publicKey) {
        throw new Error("Keypair is missing public key");
    }
    if (!keyPair.privateKey.extractable) {
        throw new Error("Private key is not extractable");
    }
}
async function generateExtractableKeyPair() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$assertions$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertKeyGenerationIsAvailable"])();
    return crypto.subtle.generateKey(/* algorithm */ "Ed25519", // Native implementation status: https://github.com/WICG/webcrypto-secure-curves/issues/20
    /* extractable */ true, /* allowed uses */ [
        "sign",
        "verify"
    ]);
}
async function generateExtractableKeyPairSigner() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$signers$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSignerFromKeyPair"])(await generateExtractableKeyPair());
}
async function extractBytesFromKeyPair(keypair) {
    assertKeyPairIsExtractable(keypair);
    const [publicKeyBytes, privateKeyJwk] = await Promise.all([
        crypto.subtle.exportKey("raw", keypair.publicKey),
        crypto.subtle.exportKey("jwk", keypair.privateKey)
    ]);
    if (!privateKeyJwk.d) throw new Error("Failed to get private key bytes");
    return new Uint8Array([
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(privateKeyJwk.d, "base64"),
        ...new Uint8Array(publicKeyBytes)
    ]);
}
async function extractBytesFromKeyPairSigner(keypairSigner) {
    return extractBytesFromKeyPair(keypairSigner.keyPair);
}
async function createKeypairFromBase58(punitiveSecretKey) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$keys$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$keys$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createKeyPairFromBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$strings$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBase58Encoder"])().encode(punitiveSecretKey));
}
async function createKeypairSignerFromBase58(punitiveSecretKey) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$signers$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSignerFromKeyPair"])(await createKeypairFromBase58(punitiveSecretKey));
}
function transactionFromBase64(base64EncodedTransaction) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$transactions$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionDecoder"])().decode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$strings$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBase64Encoder"])().encode(base64EncodedTransaction));
}
async function getOldestSignatureForAddress(rpc, address, config) {
    const signatures = await rpc.getSignaturesForAddress(address, config).send({
        abortSignal: config?.abortSignal
    });
    if (!signatures.length) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$errors$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$errors$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION_ERROR__UNKNOWN"], {
            errorName: "OldestSignatureNotFound"
        });
    }
    const oldest = signatures[signatures.length - 1];
    if (signatures.length < (config?.limit || 1e3)) return oldest;
    try {
        return await getOldestSignatureForAddress(rpc, address, {
            ...config,
            before: oldest.signature
        });
    } catch (err) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$errors$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSolanaError"])(err, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$errors$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION_ERROR__UNKNOWN"])) return oldest;
        throw err;
    }
}
function insertReferenceKeyToTransactionMessage(reference, transaction) {
    return insertReferenceKeysToTransactionMessage([
        reference
    ], transaction);
}
function insertReferenceKeysToTransactionMessage(references, transaction) {
    const nonMemoIndex = transaction.instructions.findIndex((ix)=>ix.programAddress !== "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");
    if (transaction.instructions.length == 0 || nonMemoIndex == -1) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$errors$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$errors$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__INSTRUCTION_ERROR__GENERIC_ERROR"], {
            index: transaction.instructions.length || nonMemoIndex,
            cause: "At least one non-memo instruction is required"
        });
    }
    const modifiedIx = {
        ...transaction.instructions[nonMemoIndex],
        accounts: [
            ...transaction.instructions[nonMemoIndex].accounts || [],
            // actually insert the reference keys
            ...references.map((ref)=>({
                    address: ref,
                    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$instructions$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountRole"].READONLY
                }))
        ]
    };
    const instructions = [
        ...transaction.instructions
    ];
    instructions.splice(nonMemoIndex, 1, modifiedIx);
    return Object.freeze({
        ...transaction,
        instructions: Object.freeze(instructions)
    });
}
;
 //# sourceMappingURL=chunk-DF5RIJC5.node.mjs.map
 //# sourceMappingURL=chunk-DF5RIJC5.node.mjs.map
}}),
"[project]/node_modules/.pnpm/gill@0.10.1_@solana+sysvars@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5_dbfcb2cc90f2ba1af096ecd3c7668049/node_modules/gill/dist/chunk-S3U672XX.node.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CREATE_METADATA_ACCOUNT_V3_DISCRIMINATOR": (()=>CREATE_METADATA_ACCOUNT_V3_DISCRIMINATOR),
    "TOKEN_METADATA_PROGRAM_ADDRESS": (()=>TOKEN_METADATA_PROGRAM_ADDRESS),
    "TokenMetadataAccount": (()=>TokenMetadataAccount),
    "TokenMetadataInstruction": (()=>TokenMetadataInstruction),
    "UseMethod": (()=>UseMethod),
    "collectionDetails": (()=>collectionDetails),
    "getAccountMetaFactory": (()=>getAccountMetaFactory),
    "getCollectionCodec": (()=>getCollectionCodec),
    "getCollectionDecoder": (()=>getCollectionDecoder),
    "getCollectionDetailsCodec": (()=>getCollectionDetailsCodec),
    "getCollectionDetailsDecoder": (()=>getCollectionDetailsDecoder),
    "getCollectionDetailsEncoder": (()=>getCollectionDetailsEncoder),
    "getCollectionEncoder": (()=>getCollectionEncoder),
    "getCreateMetadataAccountV3DiscriminatorBytes": (()=>getCreateMetadataAccountV3DiscriminatorBytes),
    "getCreateMetadataAccountV3Instruction": (()=>getCreateMetadataAccountV3Instruction),
    "getCreateMetadataAccountV3InstructionDataCodec": (()=>getCreateMetadataAccountV3InstructionDataCodec),
    "getCreateMetadataAccountV3InstructionDataDecoder": (()=>getCreateMetadataAccountV3InstructionDataDecoder),
    "getCreateMetadataAccountV3InstructionDataEncoder": (()=>getCreateMetadataAccountV3InstructionDataEncoder),
    "getCreatorCodec": (()=>getCreatorCodec),
    "getCreatorDecoder": (()=>getCreatorDecoder),
    "getCreatorEncoder": (()=>getCreatorEncoder),
    "getDataV2Codec": (()=>getDataV2Codec),
    "getDataV2Decoder": (()=>getDataV2Decoder),
    "getDataV2Encoder": (()=>getDataV2Encoder),
    "getTokenMetadataAddress": (()=>getTokenMetadataAddress),
    "getUseMethodCodec": (()=>getUseMethodCodec),
    "getUseMethodDecoder": (()=>getUseMethodDecoder),
    "getUseMethodEncoder": (()=>getUseMethodEncoder),
    "getUsesCodec": (()=>getUsesCodec),
    "getUsesDecoder": (()=>getUsesDecoder),
    "getUsesEncoder": (()=>getUsesEncoder),
    "isCollectionDetails": (()=>isCollectionDetails),
    "parseCreateMetadataAccountV3Instruction": (()=>parseCreateMetadataAccountV3Instruction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_@babel+core@7.27.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$NEQINEXL$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/gill@0.10.1_@solana+sysvars@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5_dbfcb2cc90f2ba1af096ecd3c7668049/node_modules/gill/dist/chunk-NEQINEXL.node.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+codecs-data-structures@2.1.1_typescript@5.8.3/node_modules/@solana/codecs-data-structures/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$addresses$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+addresses@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5.8.3/node_modules/@solana/addresses/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$core$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+codecs-core@2.1.1_typescript@5.8.3/node_modules/@solana/codecs-core/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$numbers$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+codecs-numbers@2.1.1_typescript@5.8.3/node_modules/@solana/codecs-numbers/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$strings$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+codecs-strings@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5.8.3/node_modules/@solana/codecs-strings/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$options$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+options@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5.8.3/node_modules/@solana/options/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$instructions$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+instructions@2.1.1_typescript@5.8.3/node_modules/@solana/instructions/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$signers$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+signers@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5.8.3/node_modules/@solana/signers/dist/index.browser.mjs [app-client] (ecmascript)");
;
;
;
function getCollectionEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "verified",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanEncoder"])()
        ],
        [
            "key",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$addresses$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddressEncoder"])()
        ]
    ]);
}
function getCollectionDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "verified",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanDecoder"])()
        ],
        [
            "key",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$addresses$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddressDecoder"])()
        ]
    ]);
}
function getCollectionCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$core$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getCollectionEncoder(), getCollectionDecoder());
}
function getCollectionDetailsEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDiscriminatedUnionEncoder"])([
        [
            "V1",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructEncoder"])([
                [
                    "size",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$numbers$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU64Encoder"])()
                ]
            ])
        ],
        [
            "V2",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructEncoder"])([
                [
                    "padding",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$core$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fixEncoderSize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytesEncoder"])(), 8)
                ]
            ])
        ]
    ]);
}
function getCollectionDetailsDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDiscriminatedUnionDecoder"])([
        [
            "V1",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructDecoder"])([
                [
                    "size",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$numbers$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU64Decoder"])()
                ]
            ])
        ],
        [
            "V2",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructDecoder"])([
                [
                    "padding",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$core$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fixDecoderSize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytesDecoder"])(), 8)
                ]
            ])
        ]
    ]);
}
function getCollectionDetailsCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$core$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getCollectionDetailsEncoder(), getCollectionDetailsDecoder());
}
function collectionDetails(kind, data) {
    return Array.isArray(data) ? {
        __kind: kind,
        fields: data
    } : {
        __kind: kind,
        ...data ?? {}
    };
}
function isCollectionDetails(kind, value) {
    return value.__kind === kind;
}
function getCreatorEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "address",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$addresses$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddressEncoder"])()
        ],
        [
            "verified",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanEncoder"])()
        ],
        [
            "share",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$numbers$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ]
    ]);
}
function getCreatorDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "address",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$addresses$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddressDecoder"])()
        ],
        [
            "verified",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanDecoder"])()
        ],
        [
            "share",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$numbers$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ]
    ]);
}
function getCreatorCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$core$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getCreatorEncoder(), getCreatorDecoder());
}
function getUsesEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "useMethod",
            getUseMethodEncoder()
        ],
        [
            "remaining",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$numbers$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU64Encoder"])()
        ],
        [
            "total",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$numbers$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU64Encoder"])()
        ]
    ]);
}
function getUsesDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "useMethod",
            getUseMethodDecoder()
        ],
        [
            "remaining",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$numbers$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU64Decoder"])()
        ],
        [
            "total",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$numbers$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU64Decoder"])()
        ]
    ]);
}
function getUsesCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$core$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getUsesEncoder(), getUsesDecoder());
}
var UseMethod = /* @__PURE__ */ ((UseMethod2)=>{
    UseMethod2[UseMethod2["Burn"] = 0] = "Burn";
    UseMethod2[UseMethod2["Multiple"] = 1] = "Multiple";
    UseMethod2[UseMethod2["Single"] = 2] = "Single";
    return UseMethod2;
})(UseMethod || {});
function getUseMethodEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnumEncoder"])(UseMethod);
}
function getUseMethodDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnumDecoder"])(UseMethod);
}
function getUseMethodCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$core$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getUseMethodEncoder(), getUseMethodDecoder());
}
// src/programs/token-metadata/generated/types/dataV2.ts
function getDataV2Encoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "name",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$core$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addEncoderSizePrefix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$strings$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUtf8Encoder"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$numbers$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU32Encoder"])())
        ],
        [
            "symbol",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$core$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addEncoderSizePrefix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$strings$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUtf8Encoder"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$numbers$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU32Encoder"])())
        ],
        [
            "uri",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$core$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addEncoderSizePrefix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$strings$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUtf8Encoder"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$numbers$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU32Encoder"])())
        ],
        [
            "sellerFeeBasisPoints",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$numbers$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU16Encoder"])()
        ],
        [
            "creators",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$options$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptionEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrayEncoder"])(getCreatorEncoder()))
        ],
        [
            "collection",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$options$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptionEncoder"])(getCollectionEncoder())
        ],
        [
            "uses",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$options$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptionEncoder"])(getUsesEncoder())
        ]
    ]);
}
function getDataV2Decoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "name",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$core$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDecoderSizePrefix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$strings$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUtf8Decoder"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$numbers$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU32Decoder"])())
        ],
        [
            "symbol",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$core$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDecoderSizePrefix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$strings$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUtf8Decoder"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$numbers$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU32Decoder"])())
        ],
        [
            "uri",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$core$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDecoderSizePrefix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$strings$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUtf8Decoder"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$numbers$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU32Decoder"])())
        ],
        [
            "sellerFeeBasisPoints",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$numbers$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU16Decoder"])()
        ],
        [
            "creators",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$options$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptionDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrayDecoder"])(getCreatorDecoder()))
        ],
        [
            "collection",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$options$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptionDecoder"])(getCollectionDecoder())
        ],
        [
            "uses",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$options$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptionDecoder"])(getUsesDecoder())
        ]
    ]);
}
function getDataV2Codec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$core$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getDataV2Encoder(), getDataV2Decoder());
}
// src/programs/token-metadata/generated/programs/tokenMetadata.ts
var TOKEN_METADATA_PROGRAM_ADDRESS = "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s";
var TokenMetadataAccount = /* @__PURE__ */ ((TokenMetadataAccount2)=>{
    TokenMetadataAccount2[TokenMetadataAccount2["CollectionAuthorityRecord"] = 0] = "CollectionAuthorityRecord";
    TokenMetadataAccount2[TokenMetadataAccount2["MetadataDelegateRecord"] = 1] = "MetadataDelegateRecord";
    TokenMetadataAccount2[TokenMetadataAccount2["HolderDelegateRecord"] = 2] = "HolderDelegateRecord";
    TokenMetadataAccount2[TokenMetadataAccount2["Edition"] = 3] = "Edition";
    TokenMetadataAccount2[TokenMetadataAccount2["EditionMarker"] = 4] = "EditionMarker";
    TokenMetadataAccount2[TokenMetadataAccount2["EditionMarkerV2"] = 5] = "EditionMarkerV2";
    TokenMetadataAccount2[TokenMetadataAccount2["TokenOwnedEscrow"] = 6] = "TokenOwnedEscrow";
    TokenMetadataAccount2[TokenMetadataAccount2["MasterEditionV2"] = 7] = "MasterEditionV2";
    TokenMetadataAccount2[TokenMetadataAccount2["MasterEditionV1"] = 8] = "MasterEditionV1";
    TokenMetadataAccount2[TokenMetadataAccount2["Metadata"] = 9] = "Metadata";
    TokenMetadataAccount2[TokenMetadataAccount2["TokenRecord"] = 10] = "TokenRecord";
    TokenMetadataAccount2[TokenMetadataAccount2["ReservationListV2"] = 11] = "ReservationListV2";
    TokenMetadataAccount2[TokenMetadataAccount2["ReservationListV1"] = 12] = "ReservationListV1";
    TokenMetadataAccount2[TokenMetadataAccount2["UseAuthorityRecord"] = 13] = "UseAuthorityRecord";
    return TokenMetadataAccount2;
})(TokenMetadataAccount || {});
var TokenMetadataInstruction = /* @__PURE__ */ ((TokenMetadataInstruction2)=>{
    TokenMetadataInstruction2[TokenMetadataInstruction2["CreateMetadataAccount"] = 0] = "CreateMetadataAccount";
    TokenMetadataInstruction2[TokenMetadataInstruction2["UpdateMetadataAccount"] = 1] = "UpdateMetadataAccount";
    TokenMetadataInstruction2[TokenMetadataInstruction2["DeprecatedCreateMasterEdition"] = 2] = "DeprecatedCreateMasterEdition";
    TokenMetadataInstruction2[TokenMetadataInstruction2["DeprecatedMintNewEditionFromMasterEditionViaPrintingToken"] = 3] = "DeprecatedMintNewEditionFromMasterEditionViaPrintingToken";
    TokenMetadataInstruction2[TokenMetadataInstruction2["UpdatePrimarySaleHappenedViaToken"] = 4] = "UpdatePrimarySaleHappenedViaToken";
    TokenMetadataInstruction2[TokenMetadataInstruction2["DeprecatedSetReservationList"] = 5] = "DeprecatedSetReservationList";
    TokenMetadataInstruction2[TokenMetadataInstruction2["DeprecatedCreateReservationList"] = 6] = "DeprecatedCreateReservationList";
    TokenMetadataInstruction2[TokenMetadataInstruction2["SignMetadata"] = 7] = "SignMetadata";
    TokenMetadataInstruction2[TokenMetadataInstruction2["DeprecatedMintPrintingTokensViaToken"] = 8] = "DeprecatedMintPrintingTokensViaToken";
    TokenMetadataInstruction2[TokenMetadataInstruction2["DeprecatedMintPrintingTokens"] = 9] = "DeprecatedMintPrintingTokens";
    TokenMetadataInstruction2[TokenMetadataInstruction2["CreateMasterEdition"] = 10] = "CreateMasterEdition";
    TokenMetadataInstruction2[TokenMetadataInstruction2["MintNewEditionFromMasterEditionViaToken"] = 11] = "MintNewEditionFromMasterEditionViaToken";
    TokenMetadataInstruction2[TokenMetadataInstruction2["ConvertMasterEditionV1ToV2"] = 12] = "ConvertMasterEditionV1ToV2";
    TokenMetadataInstruction2[TokenMetadataInstruction2["MintNewEditionFromMasterEditionViaVaultProxy"] = 13] = "MintNewEditionFromMasterEditionViaVaultProxy";
    TokenMetadataInstruction2[TokenMetadataInstruction2["PuffMetadata"] = 14] = "PuffMetadata";
    TokenMetadataInstruction2[TokenMetadataInstruction2["UpdateMetadataAccountV2"] = 15] = "UpdateMetadataAccountV2";
    TokenMetadataInstruction2[TokenMetadataInstruction2["CreateMetadataAccountV2"] = 16] = "CreateMetadataAccountV2";
    TokenMetadataInstruction2[TokenMetadataInstruction2["CreateMasterEditionV3"] = 17] = "CreateMasterEditionV3";
    TokenMetadataInstruction2[TokenMetadataInstruction2["VerifyCollection"] = 18] = "VerifyCollection";
    TokenMetadataInstruction2[TokenMetadataInstruction2["Utilize"] = 19] = "Utilize";
    TokenMetadataInstruction2[TokenMetadataInstruction2["ApproveUseAuthority"] = 20] = "ApproveUseAuthority";
    TokenMetadataInstruction2[TokenMetadataInstruction2["RevokeUseAuthority"] = 21] = "RevokeUseAuthority";
    TokenMetadataInstruction2[TokenMetadataInstruction2["UnverifyCollection"] = 22] = "UnverifyCollection";
    TokenMetadataInstruction2[TokenMetadataInstruction2["ApproveCollectionAuthority"] = 23] = "ApproveCollectionAuthority";
    TokenMetadataInstruction2[TokenMetadataInstruction2["RevokeCollectionAuthority"] = 24] = "RevokeCollectionAuthority";
    TokenMetadataInstruction2[TokenMetadataInstruction2["SetAndVerifyCollection"] = 25] = "SetAndVerifyCollection";
    TokenMetadataInstruction2[TokenMetadataInstruction2["FreezeDelegatedAccount"] = 26] = "FreezeDelegatedAccount";
    TokenMetadataInstruction2[TokenMetadataInstruction2["ThawDelegatedAccount"] = 27] = "ThawDelegatedAccount";
    TokenMetadataInstruction2[TokenMetadataInstruction2["RemoveCreatorVerification"] = 28] = "RemoveCreatorVerification";
    TokenMetadataInstruction2[TokenMetadataInstruction2["BurnNft"] = 29] = "BurnNft";
    TokenMetadataInstruction2[TokenMetadataInstruction2["VerifySizedCollectionItem"] = 30] = "VerifySizedCollectionItem";
    TokenMetadataInstruction2[TokenMetadataInstruction2["UnverifySizedCollectionItem"] = 31] = "UnverifySizedCollectionItem";
    TokenMetadataInstruction2[TokenMetadataInstruction2["SetAndVerifySizedCollectionItem"] = 32] = "SetAndVerifySizedCollectionItem";
    TokenMetadataInstruction2[TokenMetadataInstruction2["CreateMetadataAccountV3"] = 33] = "CreateMetadataAccountV3";
    TokenMetadataInstruction2[TokenMetadataInstruction2["SetCollectionSize"] = 34] = "SetCollectionSize";
    TokenMetadataInstruction2[TokenMetadataInstruction2["SetTokenStandard"] = 35] = "SetTokenStandard";
    TokenMetadataInstruction2[TokenMetadataInstruction2["BubblegumSetCollectionSize"] = 36] = "BubblegumSetCollectionSize";
    TokenMetadataInstruction2[TokenMetadataInstruction2["BurnEditionNft"] = 37] = "BurnEditionNft";
    TokenMetadataInstruction2[TokenMetadataInstruction2["CreateEscrowAccount"] = 38] = "CreateEscrowAccount";
    TokenMetadataInstruction2[TokenMetadataInstruction2["CloseEscrowAccount"] = 39] = "CloseEscrowAccount";
    TokenMetadataInstruction2[TokenMetadataInstruction2["TransferOutOfEscrow"] = 40] = "TransferOutOfEscrow";
    TokenMetadataInstruction2[TokenMetadataInstruction2["Burn"] = 41] = "Burn";
    TokenMetadataInstruction2[TokenMetadataInstruction2["Create"] = 42] = "Create";
    TokenMetadataInstruction2[TokenMetadataInstruction2["Mint"] = 43] = "Mint";
    TokenMetadataInstruction2[TokenMetadataInstruction2["Delegate"] = 44] = "Delegate";
    TokenMetadataInstruction2[TokenMetadataInstruction2["Revoke"] = 45] = "Revoke";
    TokenMetadataInstruction2[TokenMetadataInstruction2["Lock"] = 46] = "Lock";
    TokenMetadataInstruction2[TokenMetadataInstruction2["Unlock"] = 47] = "Unlock";
    TokenMetadataInstruction2[TokenMetadataInstruction2["Migrate"] = 48] = "Migrate";
    TokenMetadataInstruction2[TokenMetadataInstruction2["Transfer"] = 49] = "Transfer";
    TokenMetadataInstruction2[TokenMetadataInstruction2["Update"] = 50] = "Update";
    TokenMetadataInstruction2[TokenMetadataInstruction2["Use"] = 51] = "Use";
    TokenMetadataInstruction2[TokenMetadataInstruction2["Verify"] = 52] = "Verify";
    TokenMetadataInstruction2[TokenMetadataInstruction2["Unverify"] = 53] = "Unverify";
    TokenMetadataInstruction2[TokenMetadataInstruction2["Collect"] = 54] = "Collect";
    TokenMetadataInstruction2[TokenMetadataInstruction2["Print"] = 55] = "Print";
    TokenMetadataInstruction2[TokenMetadataInstruction2["Resize"] = 56] = "Resize";
    TokenMetadataInstruction2[TokenMetadataInstruction2["CloseAccounts"] = 57] = "CloseAccounts";
    return TokenMetadataInstruction2;
})(TokenMetadataInstruction || {});
function expectAddress(value) {
    if (!value) {
        throw new Error("Expected a Address.");
    }
    if (typeof value === "object" && "address" in value) {
        return value.address;
    }
    if (Array.isArray(value)) {
        return value[0];
    }
    return value;
}
function getAccountMetaFactory(programAddress, optionalAccountStrategy) {
    return (account)=>{
        if (!account.value) {
            if (optionalAccountStrategy === "omitted") return;
            return Object.freeze({
                address: programAddress,
                role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$instructions$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountRole"].READONLY
            });
        }
        const writableRole = account.isWritable ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$instructions$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountRole"].WRITABLE : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$instructions$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountRole"].READONLY;
        return Object.freeze({
            address: expectAddress(account.value),
            role: isTransactionSigner(account.value) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$instructions$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upgradeRoleToSigner"])(writableRole) : writableRole,
            ...isTransactionSigner(account.value) ? {
                signer: account.value
            } : {}
        });
    };
}
function isTransactionSigner(value) {
    return !!value && typeof value === "object" && "address" in value && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$signers$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTransactionSigner"])(value);
}
// src/programs/token-metadata/generated/instructions/createMetadataAccountV3.ts
var CREATE_METADATA_ACCOUNT_V3_DISCRIMINATOR = 33;
function getCreateMetadataAccountV3DiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$numbers$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(CREATE_METADATA_ACCOUNT_V3_DISCRIMINATOR);
}
function getCreateMetadataAccountV3InstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$core$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$numbers$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "data",
            getDataV2Encoder()
        ],
        [
            "isMutable",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanEncoder"])()
        ],
        [
            "collectionDetails",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$options$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptionEncoder"])(getCollectionDetailsEncoder())
        ]
    ]), (value)=>({
            ...value,
            discriminator: CREATE_METADATA_ACCOUNT_V3_DISCRIMINATOR
        }));
}
function getCreateMetadataAccountV3InstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$numbers$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "data",
            getDataV2Decoder()
        ],
        [
            "isMutable",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$data$2d$structures$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanDecoder"])()
        ],
        [
            "collectionDetails",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$options$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptionDecoder"])(getCollectionDetailsDecoder())
        ]
    ]);
}
function getCreateMetadataAccountV3InstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$codecs$2d$core$40$2$2e$1$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getCreateMetadataAccountV3InstructionDataEncoder(), getCreateMetadataAccountV3InstructionDataDecoder());
}
function getCreateMetadataAccountV3Instruction(input, config) {
    const programAddress = config?.programAddress ?? TOKEN_METADATA_PROGRAM_ADDRESS;
    const originalAccounts = {
        metadata: {
            value: input.metadata ?? null,
            isWritable: true
        },
        mint: {
            value: input.mint ?? null,
            isWritable: false
        },
        mintAuthority: {
            value: input.mintAuthority ?? null,
            isWritable: false
        },
        payer: {
            value: input.payer ?? null,
            isWritable: true
        },
        updateAuthority: {
            value: input.updateAuthority ?? null,
            isWritable: false
        },
        systemProgram: {
            value: input.systemProgram ?? null,
            isWritable: false
        },
        rent: {
            value: input.rent ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    if (!accounts.systemProgram.value) {
        accounts.systemProgram.value = "11111111111111111111111111111111";
    }
    const getAccountMeta = getAccountMetaFactory(programAddress, "omitted");
    const instruction = {
        accounts: [
            getAccountMeta(accounts.metadata),
            getAccountMeta(accounts.mint),
            getAccountMeta(accounts.mintAuthority),
            getAccountMeta(accounts.payer),
            getAccountMeta(accounts.updateAuthority),
            getAccountMeta(accounts.systemProgram),
            getAccountMeta(accounts.rent)
        ].filter((x)=>x !== void 0),
        programAddress,
        data: getCreateMetadataAccountV3InstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseCreateMetadataAccountV3Instruction(instruction) {
    if (instruction.accounts.length < 6) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    let optionalAccountsRemaining = instruction.accounts.length - 6;
    const getNextOptionalAccount = ()=>{
        if (optionalAccountsRemaining === 0) return void 0;
        optionalAccountsRemaining -= 1;
        return getNextAccount();
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            metadata: getNextAccount(),
            mint: getNextAccount(),
            mintAuthority: getNextAccount(),
            payer: getNextAccount(),
            updateAuthority: getNextAccount(),
            systemProgram: getNextAccount(),
            rent: getNextOptionalAccount()
        },
        data: getCreateMetadataAccountV3InstructionDataDecoder().decode(instruction.data)
    };
}
async function getTokenMetadataAddress(mint) {
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$addresses$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProgramDerivedAddress"])({
        programAddress: TOKEN_METADATA_PROGRAM_ADDRESS,
        seeds: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from("metadata"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$addresses$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddressEncoder"])().encode(TOKEN_METADATA_PROGRAM_ADDRESS),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$addresses$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddressEncoder"])().encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$NEQINEXL$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkedAddress"])(mint))
        ]
    }))[0];
}
;
 //# sourceMappingURL=chunk-S3U672XX.node.mjs.map
 //# sourceMappingURL=chunk-S3U672XX.node.mjs.map
}}),
"[project]/node_modules/.pnpm/gill@0.10.1_@solana+sysvars@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5_dbfcb2cc90f2ba1af096ecd3c7668049/node_modules/gill/dist/programs/token/index.node.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TOKEN_PROGRAM_ADDRESS": (()=>TOKEN_PROGRAM_ADDRESS),
    "assertIsSupportedTokenProgram": (()=>assertIsSupportedTokenProgram),
    "buildCreateTokenTransaction": (()=>buildCreateTokenTransaction),
    "buildMintTokensTransaction": (()=>buildMintTokensTransaction),
    "buildTransferTokensTransaction": (()=>buildTransferTokensTransaction),
    "checkedTokenProgramAddress": (()=>checkedTokenProgramAddress),
    "getAssociatedTokenAccountAddress": (()=>getAssociatedTokenAccountAddress),
    "getCreateTokenInstructions": (()=>getCreateTokenInstructions),
    "getMintTokensInstructions": (()=>getMintTokensInstructions),
    "getTransferTokensInstructions": (()=>getTransferTokensInstructions),
    "parseTokenProgramAddressOrMoniker": (()=>parseTokenProgramAddressOrMoniker),
    "tokenAmountToUiAmount": (()=>tokenAmountToUiAmount),
    "tokenUiAmountToAmount": (()=>tokenUiAmountToAmount)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$DF5RIJC5$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/gill@0.10.1_@solana+sysvars@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5_dbfcb2cc90f2ba1af096ecd3c7668049/node_modules/gill/dist/chunk-DF5RIJC5.node.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$S3U672XX$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/gill@0.10.1_@solana+sysvars@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5_dbfcb2cc90f2ba1af096ecd3c7668049/node_modules/gill/dist/chunk-S3U672XX.node.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$NEQINEXL$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/gill@0.10.1_@solana+sysvars@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5_dbfcb2cc90f2ba1af096ecd3c7668049/node_modules/gill/dist/chunk-NEQINEXL.node.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$token$2d$2022$40$0$2e$4$2e$2_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$_4c0560fe49c3c9d82fff7f6813a7b338$2f$node_modules$2f40$solana$2d$program$2f$token$2d$2022$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana-program+token-2022@0.4.2_@solana+kit@2.1.1_fastestsmallesttextencoderdecoder@1._4c0560fe49c3c9d82fff7f6813a7b338/node_modules/@solana-program/token-2022/dist/src/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$system$40$0$2e$7$2e$0_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_36fb089cabfe771affb2b5bfb92af26a$2f$node_modules$2f40$solana$2d$program$2f$system$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana-program+system@0.7.0_@solana+kit@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_36fb089cabfe771affb2b5bfb92af26a/node_modules/@solana-program/system/dist/src/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$addresses$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+addresses@2.1.1_fastestsmallesttextencoderdecoder@1.0.22_typescript@5.8.3/node_modules/@solana/addresses/dist/index.browser.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
var TOKEN_PROGRAM_ADDRESS = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
async function getAssociatedTokenAccountAddress(mint, owner, tokenProgram) {
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$token$2d$2022$40$0$2e$4$2e$2_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$_4c0560fe49c3c9d82fff7f6813a7b338$2f$node_modules$2f40$solana$2d$program$2f$token$2d$2022$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findAssociatedTokenPda"])({
        mint: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$NEQINEXL$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkedAddress"])(mint),
        owner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$NEQINEXL$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkedAddress"])(owner),
        tokenProgram: checkedTokenProgramAddress(tokenProgram)
    }))[0];
}
function parseTokenProgramAddressOrMoniker(tokenProgram) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$addresses$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(tokenProgram)) {
        tokenProgram = tokenProgram.toLowerCase();
    }
    switch(tokenProgram){
        case "legacy":
        case "token":
        case TOKEN_PROGRAM_ADDRESS:
            {
                return TOKEN_PROGRAM_ADDRESS;
            }
        case "token22":
        case "token2022":
        case "tokenextension":
        case "tokenextensions":
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$token$2d$2022$40$0$2e$4$2e$2_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$_4c0560fe49c3c9d82fff7f6813a7b338$2f$node_modules$2f40$solana$2d$program$2f$token$2d$2022$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_2022_PROGRAM_ADDRESS"]:
            {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$token$2d$2022$40$0$2e$4$2e$2_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$_4c0560fe49c3c9d82fff7f6813a7b338$2f$node_modules$2f40$solana$2d$program$2f$token$2d$2022$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_2022_PROGRAM_ADDRESS"];
            }
        default:
            throw Error("Unsupported token program. Try 'TOKEN_PROGRAM_ADDRESS' or 'TOKEN_2022_PROGRAM_ADDRESS'");
    }
}
function assertIsSupportedTokenProgram(tokenProgram) {
    if (tokenProgram !== TOKEN_PROGRAM_ADDRESS && tokenProgram !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$token$2d$2022$40$0$2e$4$2e$2_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$_4c0560fe49c3c9d82fff7f6813a7b338$2f$node_modules$2f40$solana$2d$program$2f$token$2d$2022$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_2022_PROGRAM_ADDRESS"]) {
        throw Error("Unsupported token program. Try 'TOKEN_PROGRAM_ADDRESS' or 'TOKEN_2022_PROGRAM_ADDRESS'");
    }
}
function checkedTokenProgramAddress(tokenProgram) {
    if (!tokenProgram) return TOKEN_PROGRAM_ADDRESS;
    tokenProgram = parseTokenProgramAddressOrMoniker(tokenProgram);
    assertIsSupportedTokenProgram(tokenProgram);
    return tokenProgram;
}
// src/programs/token/instructions/create-token.ts
function getCreateTokenInstructions(args) {
    args.tokenProgram = checkedTokenProgramAddress(args.tokenProgram);
    args.feePayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$NEQINEXL$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkedTransactionSigner"])(args.feePayer);
    if (args.decimals == null) args.decimals = 9;
    if (!args.mintAuthority) args.mintAuthority = args.feePayer;
    if (!args.updateAuthority) args.updateAuthority = args.feePayer;
    if (args.freezeAuthority) args.freezeAuthority = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$NEQINEXL$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkedAddress"])(args.freezeAuthority);
    if (args.tokenProgram === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$token$2d$2022$40$0$2e$4$2e$2_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$_4c0560fe49c3c9d82fff7f6813a7b338$2f$node_modules$2f40$solana$2d$program$2f$token$2d$2022$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_2022_PROGRAM_ADDRESS"]) {
        const metadataPointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$token$2d$2022$40$0$2e$4$2e$2_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$_4c0560fe49c3c9d82fff7f6813a7b338$2f$node_modules$2f40$solana$2d$program$2f$token$2d$2022$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extension"])("MetadataPointer", {
            metadataAddress: args.mint.address,
            authority: args.updateAuthority.address
        });
        const metadataExtensionData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$token$2d$2022$40$0$2e$4$2e$2_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$_4c0560fe49c3c9d82fff7f6813a7b338$2f$node_modules$2f40$solana$2d$program$2f$token$2d$2022$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extension"])("TokenMetadata", {
            updateAuthority: args.updateAuthority.address,
            mint: args.mint.address,
            name: args.metadata.name,
            symbol: args.metadata.symbol,
            uri: args.metadata.uri,
            // todo: support token22 additional metadata
            additionalMetadata: /* @__PURE__ */ new Map()
        });
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$system$40$0$2e$7$2e$0_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_36fb089cabfe771affb2b5bfb92af26a$2f$node_modules$2f40$solana$2d$program$2f$system$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCreateAccountInstruction"])({
                payer: args.feePayer,
                newAccount: args.mint,
                /**
         * token22 requires only the pre-mint-initialization extensions (like metadata pointer)
         * to be the `space`. then it will extend the account's space for each applicable extension
         * */ space: BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$token$2d$2022$40$0$2e$4$2e$2_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$_4c0560fe49c3c9d82fff7f6813a7b338$2f$node_modules$2f40$solana$2d$program$2f$token$2d$2022$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMintSize"])([
                    metadataPointer
                ])),
                /**
         * token22 requires the total lamport balance for all extensions,
         * including pre-initialization and post-initialization
         */ lamports: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$DF5RIJC5$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinimumBalanceForRentExemption"])(BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$token$2d$2022$40$0$2e$4$2e$2_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$_4c0560fe49c3c9d82fff7f6813a7b338$2f$node_modules$2f40$solana$2d$program$2f$token$2d$2022$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMintSize"])([
                    metadataPointer,
                    metadataExtensionData
                ]))),
                programAddress: args.tokenProgram
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$token$2d$2022$40$0$2e$4$2e$2_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$_4c0560fe49c3c9d82fff7f6813a7b338$2f$node_modules$2f40$solana$2d$program$2f$token$2d$2022$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitializeMetadataPointerInstruction"])({
                authority: args.mintAuthority.address,
                metadataAddress: args.metadataAddress,
                mint: args.mint.address
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$token$2d$2022$40$0$2e$4$2e$2_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$_4c0560fe49c3c9d82fff7f6813a7b338$2f$node_modules$2f40$solana$2d$program$2f$token$2d$2022$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitializeMintInstruction"])({
                mint: args.mint.address,
                decimals: Number(args.decimals),
                mintAuthority: args.mintAuthority.address,
                freezeAuthority: args.freezeAuthority || null
            }, {
                programAddress: args.tokenProgram
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$token$2d$2022$40$0$2e$4$2e$2_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$_4c0560fe49c3c9d82fff7f6813a7b338$2f$node_modules$2f40$solana$2d$program$2f$token$2d$2022$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitializeTokenMetadataInstruction"])({
                metadata: args.mint.address,
                mint: args.mint.address,
                mintAuthority: args.mintAuthority,
                name: args.metadata.name,
                symbol: args.metadata.symbol,
                uri: args.metadata.uri,
                updateAuthority: args.updateAuthority.address
            })
        ];
    } else {
        const space = BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$token$2d$2022$40$0$2e$4$2e$2_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$_4c0560fe49c3c9d82fff7f6813a7b338$2f$node_modules$2f40$solana$2d$program$2f$token$2d$2022$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMintSize"])());
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$system$40$0$2e$7$2e$0_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_36fb089cabfe771affb2b5bfb92af26a$2f$node_modules$2f40$solana$2d$program$2f$system$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCreateAccountInstruction"])({
                payer: args.feePayer,
                newAccount: args.mint,
                lamports: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$DF5RIJC5$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinimumBalanceForRentExemption"])(space),
                space,
                programAddress: args.tokenProgram
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$token$2d$2022$40$0$2e$4$2e$2_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$_4c0560fe49c3c9d82fff7f6813a7b338$2f$node_modules$2f40$solana$2d$program$2f$token$2d$2022$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitializeMintInstruction"])({
                mint: args.mint.address,
                decimals: Number(args.decimals),
                mintAuthority: args.mintAuthority.address,
                freezeAuthority: args.freezeAuthority || null
            }, {
                programAddress: args.tokenProgram
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$S3U672XX$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCreateMetadataAccountV3Instruction"])({
                metadata: args.metadataAddress,
                mint: args.mint.address,
                mintAuthority: args.mintAuthority,
                payer: args.feePayer,
                updateAuthority: args.updateAuthority,
                data: {
                    name: args.metadata.name,
                    symbol: args.metadata.symbol,
                    uri: args.metadata.uri,
                    sellerFeeBasisPoints: 0,
                    creators: null,
                    collection: null,
                    uses: null
                },
                isMutable: args.metadata.isMutable,
                collectionDetails: null
            })
        ];
    }
}
function getMintTokensInstructions(args) {
    args.tokenProgram = checkedTokenProgramAddress(args.tokenProgram);
    args.feePayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$NEQINEXL$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkedTransactionSigner"])(args.feePayer);
    args.mint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$NEQINEXL$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkedAddress"])(args.mint);
    return [
        // create idempotent will gracefully fail if the ata already exists. this is the gold standard!
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$token$2d$2022$40$0$2e$4$2e$2_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$_4c0560fe49c3c9d82fff7f6813a7b338$2f$node_modules$2f40$solana$2d$program$2f$token$2d$2022$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCreateAssociatedTokenIdempotentInstruction"])({
            owner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$NEQINEXL$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkedAddress"])(args.destination),
            mint: args.mint,
            ata: args.ata,
            payer: args.feePayer,
            tokenProgram: args.tokenProgram
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$token$2d$2022$40$0$2e$4$2e$2_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$_4c0560fe49c3c9d82fff7f6813a7b338$2f$node_modules$2f40$solana$2d$program$2f$token$2d$2022$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMintToInstruction"])({
            mint: args.mint,
            mintAuthority: args.mintAuthority,
            token: args.ata,
            amount: args.amount
        }, {
            programAddress: args.tokenProgram
        })
    ];
}
function getTransferTokensInstructions(args) {
    args.tokenProgram = checkedTokenProgramAddress(args.tokenProgram);
    args.feePayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$NEQINEXL$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkedTransactionSigner"])(args.feePayer);
    args.mint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$NEQINEXL$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkedAddress"])(args.mint);
    return [
        // create idempotent will gracefully fail if the ata already exists. this is the gold standard!
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$token$2d$2022$40$0$2e$4$2e$2_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$_4c0560fe49c3c9d82fff7f6813a7b338$2f$node_modules$2f40$solana$2d$program$2f$token$2d$2022$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCreateAssociatedTokenIdempotentInstruction"])({
            owner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$NEQINEXL$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkedAddress"])(args.destination),
            mint: args.mint,
            ata: args.destinationAta,
            payer: args.feePayer,
            tokenProgram: args.tokenProgram
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$token$2d$2022$40$0$2e$4$2e$2_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$_4c0560fe49c3c9d82fff7f6813a7b338$2f$node_modules$2f40$solana$2d$program$2f$token$2d$2022$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransferInstruction"])({
            authority: args.authority,
            source: args.sourceAta,
            destination: args.destinationAta,
            amount: args.amount
        }, {
            programAddress: args.tokenProgram
        })
    ];
}
async function buildCreateTokenTransaction(args) {
    args.tokenProgram = checkedTokenProgramAddress(args.tokenProgram);
    args.feePayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$NEQINEXL$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkedTransactionSigner"])(args.feePayer);
    let metadataAddress = args.mint.address;
    if (args.tokenProgram === TOKEN_PROGRAM_ADDRESS) {
        metadataAddress = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$S3U672XX$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTokenMetadataAddress"])(args.mint);
        if (!args.computeUnitLimit) {
            args.computeUnitLimit = 6e4;
        }
    } else if (args.tokenProgram === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2d$program$2b$token$2d$2022$40$0$2e$4$2e$2_$40$solana$2b$kit$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$_4c0560fe49c3c9d82fff7f6813a7b338$2f$node_modules$2f40$solana$2d$program$2f$token$2d$2022$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_2022_PROGRAM_ADDRESS"]) {
        if (!args.computeUnitLimit) {
            args.computeUnitLimit = 1e4;
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$DF5RIJC5$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTransaction"])((({ feePayer, version, computeUnitLimit, computeUnitPrice, latestBlockhash })=>({
            feePayer,
            version: version || "legacy",
            computeUnitLimit,
            computeUnitPrice,
            latestBlockhash,
            instructions: getCreateTokenInstructions((({ decimals, mintAuthority, freezeAuthority, updateAuthority, metadata, feePayer: feePayer2, tokenProgram, mint })=>({
                    mint,
                    feePayer: feePayer2,
                    metadataAddress,
                    metadata,
                    decimals,
                    mintAuthority,
                    freezeAuthority,
                    updateAuthority,
                    tokenProgram
                }))(args))
        }))(args));
}
// src/programs/token/transactions/mint-tokens.ts
async function buildMintTokensTransaction(args) {
    args.tokenProgram = checkedTokenProgramAddress(args.tokenProgram);
    args.feePayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$NEQINEXL$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkedTransactionSigner"])(args.feePayer);
    args.mint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$NEQINEXL$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkedAddress"])(args.mint);
    if (!args.ata) {
        args.ata = await getAssociatedTokenAccountAddress(args.mint, args.destination, args.tokenProgram);
    }
    if (!args.computeUnitLimit) {
        args.computeUnitLimit = 31e3;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$DF5RIJC5$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTransaction"])((({ feePayer, version, computeUnitLimit, computeUnitPrice, latestBlockhash })=>({
            feePayer,
            version: version || "legacy",
            computeUnitLimit,
            computeUnitPrice,
            latestBlockhash,
            instructions: getMintTokensInstructions((({ tokenProgram, feePayer: feePayer2, mint, ata, mintAuthority, amount, destination })=>({
                    tokenProgram,
                    feePayer: feePayer2,
                    mint,
                    mintAuthority,
                    ata,
                    amount,
                    destination
                }))(args))
        }))(args));
}
// src/programs/token/transactions/transfer-tokens.ts
async function buildTransferTokensTransaction(args) {
    args.tokenProgram = checkedTokenProgramAddress(args.tokenProgram);
    args.feePayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$NEQINEXL$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkedTransactionSigner"])(args.feePayer);
    args.mint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$NEQINEXL$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkedAddress"])(args.mint);
    [args.destinationAta, args.sourceAta] = await Promise.all([
        !args.destinationAta ? getAssociatedTokenAccountAddress(args.mint, args.destination, args.tokenProgram) : args.destinationAta,
        !args.sourceAta ? getAssociatedTokenAccountAddress(args.mint, args.authority, args.tokenProgram) : args.sourceAta
    ]);
    if (!args.computeUnitLimit) {
        args.computeUnitLimit = 31e3;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gill$40$0$2e$10$2e$1_$40$solana$2b$sysvars$40$2$2e$1$2e$1_fastestsmallesttextencoderdecoder$40$1$2e$0$2e$22_typescript$40$5_dbfcb2cc90f2ba1af096ecd3c7668049$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$DF5RIJC5$2e$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTransaction"])((({ feePayer, version, computeUnitLimit, computeUnitPrice, latestBlockhash })=>({
            feePayer,
            version: version || "legacy",
            computeUnitLimit,
            computeUnitPrice,
            latestBlockhash,
            instructions: getTransferTokensInstructions((({ tokenProgram, feePayer: feePayer2, mint, amount, destination, authority, destinationAta, sourceAta })=>({
                    tokenProgram,
                    feePayer: feePayer2,
                    mint,
                    amount,
                    authority,
                    destination,
                    sourceAta,
                    destinationAta
                }))(args))
        }))(args));
}
// src/programs/token/ui-amount.ts
function tokenUiAmountToAmount(uiAmount, decimals) {
    const uiAmountStr = uiAmount.toFixed(decimals);
    const decimalPointIndex = uiAmountStr.indexOf(".");
    let wholeNumber;
    let fractionalPart;
    if (decimalPointIndex === -1) {
        wholeNumber = uiAmountStr;
        fractionalPart = "";
    } else {
        wholeNumber = uiAmountStr.substring(0, decimalPointIndex);
        fractionalPart = uiAmountStr.substring(decimalPointIndex + 1);
    }
    if (fractionalPart.length > decimals) {
        fractionalPart = fractionalPart.substring(0, decimals);
    } else {
        fractionalPart = fractionalPart.padEnd(decimals, "0");
    }
    const rawAmountStr = wholeNumber + fractionalPart;
    if (rawAmountStr.replace(/0/g, "") === "") {
        return BigInt(0);
    }
    return BigInt(rawAmountStr);
}
function tokenAmountToUiAmount(amount, decimals) {
    let amountStr = amount.toString();
    if (amountStr.length <= decimals) {
        amountStr = amountStr.padStart(decimals + 1, "0");
    }
    const wholePartLength = amountStr.length - decimals;
    const wholePart = amountStr.substring(0, wholePartLength);
    const fractionalPart = amountStr.substring(wholePartLength);
    const uiAmountStr = `${wholePart || "0"}.${fractionalPart}`;
    return parseFloat(uiAmountStr);
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}}),
}]);

//# sourceMappingURL=285a8_gill_dist_0b15c0a2._.js.map