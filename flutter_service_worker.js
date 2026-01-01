'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d07b9be6496a8704ed76a54f96fbf62c",
"assets/AssetManifest.bin.json": "2e6067c9b397c2f905dfd7ee5ba52a8c",
"assets/assets/animations/countdown.json": "131012d70bd14ec4c7c42cdcb1c59239",
"assets/assets/images/maps/far_buildings_day.png": "1e9a900124ccf09634f71e03836a4cad",
"assets/assets/images/maps/far_buildings_night.png": "5eef713de2ff84193a43581185bf0cc8",
"assets/assets/images/maps/far_buildings_sunset.png": "21ff52c91e87626fa8d576097284a59d",
"assets/assets/images/maps/near_buildings_day.png": "6f16c357621fe2dc49c0dc54c9880715",
"assets/assets/images/maps/near_buildings_night.png": "20d8184d880ed79bf7976426b73a4c01",
"assets/assets/images/maps/near_buildings_sunset.png": "b3bb99e2f897f47238dd75cd31fc8d48",
"assets/assets/images/maps/preview/road_day.png": "9cd3f8b510fe6923c0a8f68013b2f725",
"assets/assets/images/maps/preview/road_night.png": "0e1f5dbcf06690f1b4d749b13edeff25",
"assets/assets/images/maps/preview/road_sunset.png": "e49f9264c1704149ecc64f2077ebdbf4",
"assets/assets/images/maps/road_day.png": "ac536461ed1c07e16c43d93ffcf6581d",
"assets/assets/images/maps/road_night.png": "ba1565c9e390ef8f74b524d0d92f3f5c",
"assets/assets/images/maps/road_sunset.png": "ceb6e3f7ced22cf6eb2183e7671131fe",
"assets/assets/images/maps/sky_day.png": "db94d172d805375879e20a4b6ab513bf",
"assets/assets/images/maps/sky_night.png": "ff5b0e095c88e48714cb28658dcb589e",
"assets/assets/images/maps/sky_sunset.png": "21617477220b090a8aab1ec2e860281a",
"assets/assets/images/sprite/female/cole/dash/0.png": "0cb3b07a834ec9d08a47f9b814010bee",
"assets/assets/images/sprite/female/cole/dash/1.png": "bd81df18727a3f1d419ce2f629147f78",
"assets/assets/images/sprite/female/cole/dash/2.png": "f76eedeaf7c02ea2a5f7c3ddbaca63ce",
"assets/assets/images/sprite/female/cole/dash/3.png": "3c866f838897e6db718a2ad2e495f81d",
"assets/assets/images/sprite/female/cole/dash/4.png": "fc19d187daeed998e8fd4ffcf920d1cb",
"assets/assets/images/sprite/female/cole/dash/5.png": "1f3706a187b6913aaa6841b6412c9191",
"assets/assets/images/sprite/female/cole/idle/0.png": "8d6b692dd2c4c0a52bf2d342af5dbd65",
"assets/assets/images/sprite/female/cole/idle/1.png": "45d954c092d0c979f9fc5beeff41bcaf",
"assets/assets/images/sprite/female/cole/idle/2.png": "eb776b8062d19182fccb7b3d5146e8e3",
"assets/assets/images/sprite/female/cole/move/0.png": "a4e4419f7b553797de198e1a91b53ff2",
"assets/assets/images/sprite/female/cole/move/1.png": "ffe9ecca1897616268b097ac0a34d017",
"assets/assets/images/sprite/female/cole/move/2.png": "b9c1f3ce19311cafbf7e7a9730e290f2",
"assets/assets/images/sprite/female/cole/move/3.png": "21fdf44c072437b75e94a35efc263231",
"assets/assets/images/sprite/female/cole/move/4.png": "c08716d1082bf7bfbff773ff363dab33",
"assets/assets/images/sprite/female/cole/move/5.png": "d60d77c89346a42eab3e2369bbc68594",
"assets/assets/images/sprite/female/doux/dash/0.png": "51836a61d20151a0203a51f8f05b8289",
"assets/assets/images/sprite/female/doux/dash/1.png": "d24d046a84c92ca204960bf0f4e148be",
"assets/assets/images/sprite/female/doux/dash/2.png": "e3bbb2a8520240304eda762fe6ed8ec6",
"assets/assets/images/sprite/female/doux/dash/3.png": "b4a90e73c6805ec8404939788a6217ac",
"assets/assets/images/sprite/female/doux/dash/4.png": "0ace1bab304fc1502a1e0b5046cf3af8",
"assets/assets/images/sprite/female/doux/dash/5.png": "b7173b0ad3d80392790c75d6dab4a05f",
"assets/assets/images/sprite/female/doux/idle/0.png": "6156e57d1171ee9f65be56a41c64af1d",
"assets/assets/images/sprite/female/doux/idle/1.png": "97d48a69eb0e9c926a93acd175a93c22",
"assets/assets/images/sprite/female/doux/idle/2.png": "6e2f3cabee49612385196011f6d0afb5",
"assets/assets/images/sprite/female/doux/move/0.png": "43d4a6ee54149e574d3a7c68f5480b3a",
"assets/assets/images/sprite/female/doux/move/1.png": "c1d8f95682c8cce1534a24fc52c38631",
"assets/assets/images/sprite/female/doux/move/2.png": "1dbaaaa469ca2e41292094d43a68949b",
"assets/assets/images/sprite/female/doux/move/3.png": "ac358e9c1148a4c9d10d595ccd57a172",
"assets/assets/images/sprite/female/doux/move/4.png": "b346f69c272ceb2c9f8957a94d72907e",
"assets/assets/images/sprite/female/doux/move/5.png": "319f64161cf5eb2e82996ccdafeaffbe",
"assets/assets/images/sprite/female/kira/dash/0.png": "f9ee037648491a99583c1fd8020581c4",
"assets/assets/images/sprite/female/kira/dash/1.png": "683512908be0ea59a4a455bfc8491cad",
"assets/assets/images/sprite/female/kira/dash/2.png": "e4a9233825cad4138f3b16633799885c",
"assets/assets/images/sprite/female/kira/dash/3.png": "dddf348e1dd4a1d400ba2dc7b5770902",
"assets/assets/images/sprite/female/kira/dash/4.png": "a4bc4622d09c6f7317f0f4cb241d1827",
"assets/assets/images/sprite/female/kira/dash/5.png": "485c0a6cd25462212051e9790a203e05",
"assets/assets/images/sprite/female/kira/idle/0.png": "7ef216cc38c6a8f4b66055d6e195625a",
"assets/assets/images/sprite/female/kira/idle/1.png": "6225e1f1d8519e9f2da464cc12391351",
"assets/assets/images/sprite/female/kira/idle/2.png": "bc73e8687927f1999f2ef8684c6f87b3",
"assets/assets/images/sprite/female/kira/move/0.png": "b26b42200aaeeb6b86e859f9dde15c05",
"assets/assets/images/sprite/female/kira/move/1.png": "ada1f4ad0e733f715741a45f8419d321",
"assets/assets/images/sprite/female/kira/move/2.png": "87aba052b3404e5fb223f2e8a5e5ccca",
"assets/assets/images/sprite/female/kira/move/3.png": "5c220a10bbfc71cd0bd278953cbfe666",
"assets/assets/images/sprite/female/kira/move/4.png": "0594b41d03db0cdf8cea7d707b9fe0f0",
"assets/assets/images/sprite/female/kira/move/5.png": "5fb65f2eefa03b66a35799c47b8e5d3b",
"assets/assets/images/sprite/female/kuro/dash/0.png": "538c5cfd3ce7ccca2e38384bfac42955",
"assets/assets/images/sprite/female/kuro/dash/1.png": "8406b88d441cf501bcd02ac071cfb9bf",
"assets/assets/images/sprite/female/kuro/dash/2.png": "71d1fdeeb68bb9e5dc7b26276da04afb",
"assets/assets/images/sprite/female/kuro/dash/3.png": "b2f0ffa4149c9e18f2161f5f9d67b799",
"assets/assets/images/sprite/female/kuro/dash/4.png": "efe3b06f1c64fffd2270718cd0b5c09c",
"assets/assets/images/sprite/female/kuro/dash/5.png": "7290cc99188e4bd71ce7106cb9958bd7",
"assets/assets/images/sprite/female/kuro/idle/0.png": "24b0b6c8e82ea838aa5e61489323250b",
"assets/assets/images/sprite/female/kuro/idle/1.png": "1580cc647202b214b4d5b9c0fa2e935a",
"assets/assets/images/sprite/female/kuro/idle/2.png": "52952a7acf60b709ba69c8f423a04291",
"assets/assets/images/sprite/female/kuro/move/0.png": "1e7d1c52a583e710e7a83820177bdd31",
"assets/assets/images/sprite/female/kuro/move/1.png": "69946714627376b8d63c38785d516565",
"assets/assets/images/sprite/female/kuro/move/2.png": "369ef44e4d6f68e98eab65fd508436f9",
"assets/assets/images/sprite/female/kuro/move/3.png": "7cb5ea5727fe8290c82d87449bae9872",
"assets/assets/images/sprite/female/kuro/move/4.png": "24cc1b114679bd78ec9801b9c01184eb",
"assets/assets/images/sprite/female/kuro/move/5.png": "1162baeaed6bd4633108fafe05285441",
"assets/assets/images/sprite/female/loki/dash/0.png": "e9ebde267f206b203734831dd49f5926",
"assets/assets/images/sprite/female/loki/dash/1.png": "c4abcb56470702218b29f4b5a15302d5",
"assets/assets/images/sprite/female/loki/dash/2.png": "1d914812755de23823b23dff2110da4c",
"assets/assets/images/sprite/female/loki/dash/3.png": "f41d6f71827db0fa3e6bbd4202367740",
"assets/assets/images/sprite/female/loki/dash/4.png": "0ec27ddf57447192b21489c5a6f61ef2",
"assets/assets/images/sprite/female/loki/dash/5.png": "358b23b4fc51fc16cc8c0417033fc570",
"assets/assets/images/sprite/female/loki/idle/0.png": "6f5b86ee20079a445a545c0dfa96e01d",
"assets/assets/images/sprite/female/loki/idle/1.png": "ed1d5b1c5499e019196e913d64e7d007",
"assets/assets/images/sprite/female/loki/idle/2.png": "e512cd47e733fb2355d2f67acc7a2d53",
"assets/assets/images/sprite/female/loki/move/0.png": "f41144c2e9c364ed9f351b94f657ffad",
"assets/assets/images/sprite/female/loki/move/1.png": "8a7930d34c2dcd922d8132e69a189c1d",
"assets/assets/images/sprite/female/loki/move/2.png": "95aceb0502109e106beeedc3b3437269",
"assets/assets/images/sprite/female/loki/move/3.png": "b949c3059498fdd53de19f563da9ca2e",
"assets/assets/images/sprite/female/loki/move/4.png": "a4a4546fd35b10ddbae2c6e1be3b7c5a",
"assets/assets/images/sprite/female/loki/move/5.png": "345b0dc2934f9fd1c1e26d34e469d1b2",
"assets/assets/images/sprite/female/mono/dash/0.png": "6d11f8d662779fc99aa2b39014c2040e",
"assets/assets/images/sprite/female/mono/dash/1.png": "d567d6a4346b370a4cf96a4fbbe1c94a",
"assets/assets/images/sprite/female/mono/dash/2.png": "20d655e036edeeff6aac3980c7a8e159",
"assets/assets/images/sprite/female/mono/dash/3.png": "f1c16d0d3ba599712f76ac6bbc4153c9",
"assets/assets/images/sprite/female/mono/dash/4.png": "8a3d99036280d453fa75ee23cc94fe92",
"assets/assets/images/sprite/female/mono/dash/5.png": "7c167c93a27cc3146b6ecd3de5928458",
"assets/assets/images/sprite/female/mono/idle/0.png": "6957f1bdf6d49d2542488719874fcc6b",
"assets/assets/images/sprite/female/mono/idle/1.png": "81dbdb6848b783dea0b6887eb1e0e5c3",
"assets/assets/images/sprite/female/mono/idle/2.png": "4e4a8ab6b9f4e936a51710b08492b301",
"assets/assets/images/sprite/female/mono/move/0.png": "e6ec9f1008215e0d562e63930061d796",
"assets/assets/images/sprite/female/mono/move/1.png": "2da505858153842a3cd4f0efa7a0ca02",
"assets/assets/images/sprite/female/mono/move/2.png": "1dfea2448b9e41e5a7b89677182af966",
"assets/assets/images/sprite/female/mono/move/3.png": "8ad1ce43550b64fcf7d85cef436894a8",
"assets/assets/images/sprite/female/mono/move/4.png": "f9a8c6dfadeff84cbff46b08ffd47bf4",
"assets/assets/images/sprite/female/mono/move/5.png": "f23c18923e347a0d3a02b462a66cf43e",
"assets/assets/images/sprite/female/mort/dash/0.png": "d4ee68980575dc59a67645c60b234065",
"assets/assets/images/sprite/female/mort/dash/1.png": "eda1312475a197203214f4f410957260",
"assets/assets/images/sprite/female/mort/dash/2.png": "79812666d2fe649229c39b44e7770c4b",
"assets/assets/images/sprite/female/mort/dash/3.png": "d5e863d57e1743f05747c9db99dc4762",
"assets/assets/images/sprite/female/mort/dash/4.png": "c436ba5ff3f8b0a21e62325939db54a6",
"assets/assets/images/sprite/female/mort/dash/5.png": "c52d5b7250e61444ef55896169e75c23",
"assets/assets/images/sprite/female/mort/idle/0.png": "84f146ad114b751207db9912ca0219aa",
"assets/assets/images/sprite/female/mort/idle/1.png": "47025dfee2044035597f29a08810ed2d",
"assets/assets/images/sprite/female/mort/idle/2.png": "ee325aeb10336043577dbc411ba51cb1",
"assets/assets/images/sprite/female/mort/move/0.png": "de100918c31a3d46fbe664ad7cd0f886",
"assets/assets/images/sprite/female/mort/move/1.png": "1ea75144b24a8b8f5af327e36c6b6655",
"assets/assets/images/sprite/female/mort/move/2.png": "22e8a70a273cba91abc6ee40813227a0",
"assets/assets/images/sprite/female/mort/move/3.png": "3379fc6058d8d8bdabe15f68aa2bfccc",
"assets/assets/images/sprite/female/mort/move/4.png": "a2830425cd2c1d5e16be904aff3380b8",
"assets/assets/images/sprite/female/mort/move/5.png": "e87bca5a2219ef18442e38c8de130fbf",
"assets/assets/images/sprite/female/nico/dash/0.png": "f52aae4a11b1f4b3824c1eca69770a7f",
"assets/assets/images/sprite/female/nico/dash/1.png": "a47c8f32ff107ef5e68d79721a11dd20",
"assets/assets/images/sprite/female/nico/dash/2.png": "892a16374093f9b8ea506ae6ef94b712",
"assets/assets/images/sprite/female/nico/dash/3.png": "edeed5b33efaec61ad4ddcfd535fd15a",
"assets/assets/images/sprite/female/nico/dash/4.png": "83ca7ae68acbf68edb1f75f29cad0994",
"assets/assets/images/sprite/female/nico/dash/5.png": "83825940e89fe9f7445a5398f3467633",
"assets/assets/images/sprite/female/nico/idle/0.png": "310783085e2a5596a77e9f8ba9ebb1ce",
"assets/assets/images/sprite/female/nico/idle/1.png": "cfa4404b3bd398668fd69450b9bcf085",
"assets/assets/images/sprite/female/nico/idle/2.png": "547b54d43ed2ea1525591b6ad0e4a6c3",
"assets/assets/images/sprite/female/nico/move/0.png": "cd1d8d3122d0cf5463d60ad0976c2f6b",
"assets/assets/images/sprite/female/nico/move/1.png": "78f442a41397fb90db03c69f3680b1bc",
"assets/assets/images/sprite/female/nico/move/2.png": "0b9104647b02a675a24dd95ebeb04711",
"assets/assets/images/sprite/female/nico/move/3.png": "5b9785a2556f50cbbdc882df46cdf58d",
"assets/assets/images/sprite/female/nico/move/4.png": "ee0a8485527e9605bba143a061ecd36d",
"assets/assets/images/sprite/female/nico/move/5.png": "e5b4bee748b607920bf006362c16d304",
"assets/assets/images/sprite/female/olaf/dash/0.png": "d6ea2f2ae24da1ea5d3111e346f05f79",
"assets/assets/images/sprite/female/olaf/dash/1.png": "1f948ceec3ad5f08e45609a95648edc4",
"assets/assets/images/sprite/female/olaf/dash/2.png": "4853d8996b4f0fe64df96f0560557ffb",
"assets/assets/images/sprite/female/olaf/dash/3.png": "48a5bc94becb3cd53b180843fc279a42",
"assets/assets/images/sprite/female/olaf/dash/4.png": "cbc7d7499fd28c8fd690ace4a2e58f22",
"assets/assets/images/sprite/female/olaf/dash/5.png": "9961c5c5bd22066ea7ffdde2ed139f01",
"assets/assets/images/sprite/female/olaf/idle/0.png": "19ec23491cb1f2cb9b4c8e305d5afd75",
"assets/assets/images/sprite/female/olaf/idle/1.png": "ab43f6bdab8be5b32d124baa6860a9a4",
"assets/assets/images/sprite/female/olaf/idle/2.png": "a4a6bf1d1e71aedae646170665e613e7",
"assets/assets/images/sprite/female/olaf/move/0.png": "56f1cd9319907cca67aa222867a68f21",
"assets/assets/images/sprite/female/olaf/move/1.png": "1b14087d05c4d80fa44cccc2c9a67953",
"assets/assets/images/sprite/female/olaf/move/2.png": "39ab846a06a8078dcb1d41d0bd3ab0fa",
"assets/assets/images/sprite/female/olaf/move/3.png": "37c032a9e4e10aa15ae3d664731e46e4",
"assets/assets/images/sprite/female/olaf/move/4.png": "61ccc5ed71e2270db284ed307d02fbc7",
"assets/assets/images/sprite/female/olaf/move/5.png": "5ac4678e119cb8196f6f4f0d1390c035",
"assets/assets/images/sprite/female/sena/dash/0.png": "df1222576e83296e7fb02568668d0718",
"assets/assets/images/sprite/female/sena/dash/1.png": "ee6a65e63edf267ac2a09e046670a9eb",
"assets/assets/images/sprite/female/sena/dash/2.png": "c4f5185287ee2057a8f99e5a3e40811c",
"assets/assets/images/sprite/female/sena/dash/3.png": "8aa95fd6334818fa935088d850f1f05d",
"assets/assets/images/sprite/female/sena/dash/4.png": "b4ef8eec5b174188e0a0dfeb46113feb",
"assets/assets/images/sprite/female/sena/dash/5.png": "ba444222cb03fa9710d0b230a9cfe14f",
"assets/assets/images/sprite/female/sena/idle/0.png": "0963d67fa51469063f8605361bd46321",
"assets/assets/images/sprite/female/sena/idle/1.png": "1c7183ec4aaab7f716ba5fb402a7400a",
"assets/assets/images/sprite/female/sena/idle/2.png": "ebbc05482a4430f9ac439dec305b0730",
"assets/assets/images/sprite/female/sena/move/0.png": "60b04ad32c8bd174effd0c88f40bf523",
"assets/assets/images/sprite/female/sena/move/1.png": "47acc6e76db19e1d74734c2839307997",
"assets/assets/images/sprite/female/sena/move/2.png": "d1f0f6eaa6fcecbbeee77accfe338746",
"assets/assets/images/sprite/female/sena/move/3.png": "7bd03e32ca22d7a4d3e1afd27a945f91",
"assets/assets/images/sprite/female/sena/move/4.png": "ca3874a8968809db7992d5250206199c",
"assets/assets/images/sprite/female/sena/move/5.png": "37a398de743f0268bec2cd7b6e0bc288",
"assets/assets/images/sprite/female/tard/dash/0.png": "6b12fc6abeb9bc7997d912fbd6dcb86d",
"assets/assets/images/sprite/female/tard/dash/1.png": "6389a06e88b1a9cb47e6db11256aede7",
"assets/assets/images/sprite/female/tard/dash/2.png": "16626e4ec02fd8f3569611456c36cf51",
"assets/assets/images/sprite/female/tard/dash/3.png": "4c223c1a2ef9781e71c40ee2e1649b1c",
"assets/assets/images/sprite/female/tard/dash/4.png": "ddba95f82de4bfe76789ef18a4e95758",
"assets/assets/images/sprite/female/tard/dash/5.png": "878f89ae20cc5bd3b2455a5b516491ac",
"assets/assets/images/sprite/female/tard/idle/0.png": "d7cc0e553146233a125278d097056ba5",
"assets/assets/images/sprite/female/tard/idle/1.png": "da3be1f9df5c98766d112589183c1f17",
"assets/assets/images/sprite/female/tard/idle/2.png": "bf6af4cb11db4402a4bc0dd123541f90",
"assets/assets/images/sprite/female/tard/move/0.png": "f31f82529f5ec5f350e55f6a5115b42f",
"assets/assets/images/sprite/female/tard/move/1.png": "2a9e326dfc66840ea42cbce4815091be",
"assets/assets/images/sprite/female/tard/move/2.png": "fe289720f3b3a6363cd3cb6a40fb28f5",
"assets/assets/images/sprite/female/tard/move/3.png": "686795df84f5ce937b9c8d96d599b1db",
"assets/assets/images/sprite/female/tard/move/4.png": "370b7fdc8232e97e03e6a4b5fd11a9a5",
"assets/assets/images/sprite/female/tard/move/5.png": "32dd60d902c717c911028a7078a2ed4d",
"assets/assets/images/sprite/female/vita/dash/0.png": "c8507098a0270de1abfe79b8b45bad32",
"assets/assets/images/sprite/female/vita/dash/1.png": "063b310a57ed6d506669ab4bb29870ff",
"assets/assets/images/sprite/female/vita/dash/2.png": "2e5d8c3afd9af3d7d168252ff6ba85aa",
"assets/assets/images/sprite/female/vita/dash/3.png": "d3cc48a00ffb3f17a495f36982e8d85c",
"assets/assets/images/sprite/female/vita/dash/4.png": "c4403d99d2c6cb8d7e9f1a1e2b239a00",
"assets/assets/images/sprite/female/vita/dash/5.png": "ae745527917b08ad273b9ec6328c5f47",
"assets/assets/images/sprite/female/vita/idle/0.png": "85d10be650115ed31c588c61ff0564af",
"assets/assets/images/sprite/female/vita/idle/1.png": "921d29f233fca37bb7afadea884da486",
"assets/assets/images/sprite/female/vita/idle/2.png": "681918389e6bd454bcb662e4e9956ae4",
"assets/assets/images/sprite/female/vita/move/0.png": "cf773943b4a9f6250d94742a8a26d4c4",
"assets/assets/images/sprite/female/vita/move/1.png": "d308fc2d0f48a43be55769ac5b07d3a2",
"assets/assets/images/sprite/female/vita/move/2.png": "9ae2deb9847581d5c155271a52fe7f34",
"assets/assets/images/sprite/female/vita/move/3.png": "04894e121e3fbba8ae7a4f95531b1a16",
"assets/assets/images/sprite/female/vita/move/4.png": "0070967d01c1c79b90ddc9b736f46b12",
"assets/assets/images/sprite/female/vita/move/5.png": "5bde276ec8168c16e9e2a388c6a0190a",
"assets/assets/images/sprite/male/cole/dash/0.png": "81de73abeaf859fd0cc26922f2d9a6ff",
"assets/assets/images/sprite/male/cole/dash/1.png": "733d03fd98d4157a8acce56526fc8ba5",
"assets/assets/images/sprite/male/cole/dash/2.png": "726fd2a22c77080668ba2340ef2d61a3",
"assets/assets/images/sprite/male/cole/dash/3.png": "7fb587049a79051109248700aefbb38c",
"assets/assets/images/sprite/male/cole/dash/4.png": "f9d081ed6d0ef2e0ccfe293afc964cc1",
"assets/assets/images/sprite/male/cole/dash/5.png": "49b193cc6da722cfb0b2280365be9744",
"assets/assets/images/sprite/male/cole/idle/0.png": "43ce8ee850ce3176c719333965adf21c",
"assets/assets/images/sprite/male/cole/idle/1.png": "140a98c6207ed530b8cb235b2d4e142b",
"assets/assets/images/sprite/male/cole/idle/2.png": "b9d2d2f6507833f7359e9fe3cba335ae",
"assets/assets/images/sprite/male/cole/move/0.png": "fb9a5f60c70800569a96d5456b90e72b",
"assets/assets/images/sprite/male/cole/move/1.png": "fe6677a694f55b647e92fc3c5090e4d7",
"assets/assets/images/sprite/male/cole/move/2.png": "217ae44408301fa1b10fb74a06e0aaa5",
"assets/assets/images/sprite/male/cole/move/3.png": "0726d08ef1dfb0749166d53419703bf0",
"assets/assets/images/sprite/male/cole/move/4.png": "f2d5b389ef373fddf634ef2a66226e43",
"assets/assets/images/sprite/male/cole/move/5.png": "2f069bc32b6a7dfaf93ec6b6ef713b8b",
"assets/assets/images/sprite/male/doux/dash/0.png": "7a65df7af28803bf313374628db81215",
"assets/assets/images/sprite/male/doux/dash/1.png": "758c873e0b6045d014d0acb3f944200a",
"assets/assets/images/sprite/male/doux/dash/2.png": "03c366d697d143baa831d8b6510d1231",
"assets/assets/images/sprite/male/doux/dash/3.png": "097430f8761daeacc7a518a3ef508bfa",
"assets/assets/images/sprite/male/doux/dash/4.png": "4f2e727264bd23bb71743fc33e2b6ca5",
"assets/assets/images/sprite/male/doux/dash/5.png": "513174f6936e6e4dd0485210f1ef39f9",
"assets/assets/images/sprite/male/doux/move/0.png": "a79a0591f0c92e838d8585d82fb22016",
"assets/assets/images/sprite/male/doux/move/1.png": "e73d70f57b72bb9e561540cc95d13da6",
"assets/assets/images/sprite/male/doux/move/2.png": "d841ea31cdd6cab62a2877600882d8b2",
"assets/assets/images/sprite/male/doux/move/3.png": "86045beb93bd8a1148c2fde3a91f2ff1",
"assets/assets/images/sprite/male/doux/move/4.png": "20b4b3721517ac0c3e80a7ffcc07e421",
"assets/assets/images/sprite/male/doux/move/5.png": "9c14adc7528b19db32f398db4ec747b5",
"assets/assets/images/sprite/male/kira/dash/0.png": "8f821f8b27a04dfe6bdd77cf497f11de",
"assets/assets/images/sprite/male/kira/dash/1.png": "794291a3195e976b9a856254bc4b3cf4",
"assets/assets/images/sprite/male/kira/dash/2.png": "d9da8158234d7906cc9d6b651fc5f3e2",
"assets/assets/images/sprite/male/kira/dash/3.png": "0b912ad8af0ade9e34ccca03f0928664",
"assets/assets/images/sprite/male/kira/dash/4.png": "220045c494669f880565aaf2adc761c4",
"assets/assets/images/sprite/male/kira/dash/5.png": "15e67289eb065c1fd59dddf2834dc692",
"assets/assets/images/sprite/male/kira/idle/0.png": "6c619a6b43c3f9a2e0a30b2e0f47635d",
"assets/assets/images/sprite/male/kira/idle/1.png": "d63e46970623fba6c9e551e08d9c780e",
"assets/assets/images/sprite/male/kira/idle/2.png": "b125ee1e38dc7725860825d16fe33e7e",
"assets/assets/images/sprite/male/kira/move/0.png": "bce7a461fbc44a861450ea7fc2d94159",
"assets/assets/images/sprite/male/kira/move/1.png": "c4e7c4418d0f8aad4d400bd627894f69",
"assets/assets/images/sprite/male/kira/move/2.png": "28e1720da49b5cb992c8afb5e2b95872",
"assets/assets/images/sprite/male/kira/move/3.png": "326ebbd320034ad2259d7fa412849667",
"assets/assets/images/sprite/male/kira/move/4.png": "27f43106fa1472f563b03a621abf432a",
"assets/assets/images/sprite/male/kira/move/5.png": "a6a277148d59043329991652a2b7d8dd",
"assets/assets/images/sprite/male/kuro/dash/0.png": "4be6ff53eaa7bdb91f24dea64005fabd",
"assets/assets/images/sprite/male/kuro/dash/1.png": "d4449cc16fbadab4463ee2c229929448",
"assets/assets/images/sprite/male/kuro/dash/2.png": "86af253d741abb210ce84eb6e075ebff",
"assets/assets/images/sprite/male/kuro/dash/3.png": "87c74efcd39b7f1b3e49c341242157c5",
"assets/assets/images/sprite/male/kuro/dash/4.png": "138d9e2659442a556cc938557df0ea10",
"assets/assets/images/sprite/male/kuro/dash/5.png": "c9a918022efb4e76af03512952c817c9",
"assets/assets/images/sprite/male/kuro/idle/0.png": "687d0d2e515ed0d4db1de8361a5c2596",
"assets/assets/images/sprite/male/kuro/idle/1.png": "de3f845ba8bea5ec8ed54d825c42a67e",
"assets/assets/images/sprite/male/kuro/idle/2.png": "fe83edff4d79dae72b271a4c8392dac4",
"assets/assets/images/sprite/male/kuro/move/0.png": "29e7a4db097e91da801ffc58c037e1e0",
"assets/assets/images/sprite/male/kuro/move/1.png": "8c9db79a794c8044785fb59389619f96",
"assets/assets/images/sprite/male/kuro/move/2.png": "a457491492d680d1cf34142ed38b359c",
"assets/assets/images/sprite/male/kuro/move/3.png": "585e75dd52e499284f942f747db45dcd",
"assets/assets/images/sprite/male/kuro/move/4.png": "79743a322b7ca4bf2d12a76009b8b214",
"assets/assets/images/sprite/male/kuro/move/5.png": "de927de8b4f415ed02d7724261aa63bd",
"assets/assets/images/sprite/male/loki/dash/0.png": "6808d6741788e30e1c9c6c020ddfa101",
"assets/assets/images/sprite/male/loki/dash/1.png": "efa12f114dcb656856dc226c5a884961",
"assets/assets/images/sprite/male/loki/dash/2.png": "79aee3c9123ec0fd5913945a94b4e8ba",
"assets/assets/images/sprite/male/loki/dash/3.png": "9ea455fe888894d862f3d10962894245",
"assets/assets/images/sprite/male/loki/dash/4.png": "74ce1d07b1b54e0dd6d9125d1f1bf74b",
"assets/assets/images/sprite/male/loki/dash/5.png": "c253b0971d6476a8f2e634dcc55caef3",
"assets/assets/images/sprite/male/loki/idle/0.png": "b950c2396877603942b834ee60858696",
"assets/assets/images/sprite/male/loki/idle/1.png": "9e69ef7390e3f20ed2dd69531e8c3e4d",
"assets/assets/images/sprite/male/loki/idle/2.png": "446482bbe9e5ef711b336e194867d928",
"assets/assets/images/sprite/male/loki/move/0.png": "9e8931d14a991491e9c0671bc323cb6b",
"assets/assets/images/sprite/male/loki/move/1.png": "a9f33bf03fa5021e24dcd01677a4e1e8",
"assets/assets/images/sprite/male/loki/move/2.png": "f571e0c3e5c2d052b475e94cd302fe34",
"assets/assets/images/sprite/male/loki/move/3.png": "ac9e408706d0bb0349d287cf6b7d4eef",
"assets/assets/images/sprite/male/loki/move/4.png": "9ce89c1490dc3a4d5e21e934ec079186",
"assets/assets/images/sprite/male/loki/move/5.png": "14a39c2229db934cfd0a45c65772a6e1",
"assets/assets/images/sprite/male/mono/dash/0.png": "2cc5071bedb9ed55bc01a91a2296bec1",
"assets/assets/images/sprite/male/mono/dash/1.png": "a4bd17f97c1e1f7e5a28bcc703e7ffa7",
"assets/assets/images/sprite/male/mono/dash/2.png": "a2a42f8d2431c2cb141cb6011473d087",
"assets/assets/images/sprite/male/mono/dash/3.png": "cb1548470e6e8fd22d09fc9221218110",
"assets/assets/images/sprite/male/mono/dash/4.png": "31a14e6e1b9c117d9f4e84c6a57446a2",
"assets/assets/images/sprite/male/mono/dash/5.png": "ba12dfb01496c1d8ee29d48a60109694",
"assets/assets/images/sprite/male/mono/idle/0.png": "9a22fcf0235bb02f90df4e1b810bfdef",
"assets/assets/images/sprite/male/mono/idle/1.png": "58f92458a8ccff52835ef5cc17888369",
"assets/assets/images/sprite/male/mono/idle/2.png": "4f90959354e0d5a608fb48546dc49ede",
"assets/assets/images/sprite/male/mono/move/0.png": "6ecd5f07c311e31858738303e3a683d7",
"assets/assets/images/sprite/male/mono/move/1.png": "8b3936af9ead2e302c15e554d2c1529e",
"assets/assets/images/sprite/male/mono/move/2.png": "dd22071f58509d93f6dd83b5dcd5a9f5",
"assets/assets/images/sprite/male/mono/move/3.png": "ddd29850e15e4165a04308ea4cbb047c",
"assets/assets/images/sprite/male/mono/move/4.png": "72ad4a629aef545f73a43bb9f61adf18",
"assets/assets/images/sprite/male/mono/move/5.png": "2cb655c6c9cce17582ee3a0aa882784b",
"assets/assets/images/sprite/male/mort/dash/0.png": "c4cf1a36c6776403e67d301c57989b39",
"assets/assets/images/sprite/male/mort/dash/1.png": "2e1ce07eb240990b6683c17cfcc0c3e6",
"assets/assets/images/sprite/male/mort/dash/2.png": "62c9b0d7ce7af84a54e63f050710d8a0",
"assets/assets/images/sprite/male/mort/dash/3.png": "804565780a99d406190d7853814ce295",
"assets/assets/images/sprite/male/mort/dash/4.png": "370ab72ed5fc7dab2f79072055f49cda",
"assets/assets/images/sprite/male/mort/dash/5.png": "0db0f97188cd16de7e3f623776af128a",
"assets/assets/images/sprite/male/mort/move/0.png": "b079f5ee6bbac5d5b2513c32f6ae6c7f",
"assets/assets/images/sprite/male/mort/move/1.png": "6bf9a10132b7efc579f714f7325ac3fb",
"assets/assets/images/sprite/male/mort/move/2.png": "7a61c026ef9ecf05985582a6f292e217",
"assets/assets/images/sprite/male/mort/move/3.png": "3cfed2895b7b325ac7bb5494b66f2ecb",
"assets/assets/images/sprite/male/mort/move/4.png": "4e4c56976b98d80ae1fe241aac51cfa9",
"assets/assets/images/sprite/male/mort/move/5.png": "89e9cfb5f87e94a7b4e7df3e509a08ae",
"assets/assets/images/sprite/male/nico/dash/0.png": "018b57b8d9f215892e5a7f2dfd9d5bfb",
"assets/assets/images/sprite/male/nico/dash/1.png": "ff1e160a504b8e7fd881f816c2cf92f0",
"assets/assets/images/sprite/male/nico/dash/2.png": "7a5c1b7c0f1d79f5dff6a8a16af6f9a4",
"assets/assets/images/sprite/male/nico/dash/3.png": "df680bfe7ca05932aca662575370b2e5",
"assets/assets/images/sprite/male/nico/dash/4.png": "d8c0c1ae446d8191d14c6818035a2f3f",
"assets/assets/images/sprite/male/nico/dash/5.png": "edd72d2aada5b41876856e20ef037b86",
"assets/assets/images/sprite/male/nico/idle/0.png": "e17e23969d4cae5e8e62829ea160c1ac",
"assets/assets/images/sprite/male/nico/idle/1.png": "1d9ff22ecb5291242592fef48e101db4",
"assets/assets/images/sprite/male/nico/idle/2.png": "632482a7e43e6978bd685ff88cac0b95",
"assets/assets/images/sprite/male/nico/move/0.png": "ac301bc5ad96af622587e76e9aac3318",
"assets/assets/images/sprite/male/nico/move/1.png": "90cd720dc68920d503309b15de94f8cb",
"assets/assets/images/sprite/male/nico/move/2.png": "cef7040c1fe1eabe57937f27a5bad861",
"assets/assets/images/sprite/male/nico/move/3.png": "6cdcdcff5c9273d23906396e19e75880",
"assets/assets/images/sprite/male/nico/move/4.png": "15a1cdda8da98c18b1881bacdb53b196",
"assets/assets/images/sprite/male/nico/move/5.png": "09bba8dab09f86089c9bd0f0ca929bf4",
"assets/assets/images/sprite/male/olaf/dash/0.png": "57c4e6b36fef7d5dcee16be9526efc35",
"assets/assets/images/sprite/male/olaf/dash/1.png": "e2a09b3cbfde4eb81ef821c3b4cfdeb5",
"assets/assets/images/sprite/male/olaf/dash/2.png": "81d99528b91fd22790d10bd7969f4c0c",
"assets/assets/images/sprite/male/olaf/dash/3.png": "57224bfd17633611b7e82b68d9d5d4dd",
"assets/assets/images/sprite/male/olaf/dash/4.png": "bac1127de29aa325d6a0c7cdad072820",
"assets/assets/images/sprite/male/olaf/dash/5.png": "ad1c6d592f3fb7eb8ea48cef550a3843",
"assets/assets/images/sprite/male/olaf/idle/0.png": "1fb61eaabfbecaa111bae61ed21986b3",
"assets/assets/images/sprite/male/olaf/idle/1.png": "d3520a2c7ac86d83943c87b57d13949d",
"assets/assets/images/sprite/male/olaf/idle/2.png": "37d1484c6a0f426e011b3dd8911764ff",
"assets/assets/images/sprite/male/olaf/move/0.png": "a1f7b96242343cdb47df7081fd8b3c32",
"assets/assets/images/sprite/male/olaf/move/1.png": "f5549f9a5f885a43379b136dc0cb9133",
"assets/assets/images/sprite/male/olaf/move/2.png": "f15dbd204e45aeff86e35f423690f284",
"assets/assets/images/sprite/male/olaf/move/3.png": "6105079b73ba16b79066e9ad3cf20ca6",
"assets/assets/images/sprite/male/olaf/move/4.png": "09d5e7187240c87d7fbfa2f61e04fe7b",
"assets/assets/images/sprite/male/olaf/move/5.png": "b37f71a03cba287fd1025a917e439217",
"assets/assets/images/sprite/male/sena/dash/0.png": "e151ee9d0d75bfabbaaa76c70881716d",
"assets/assets/images/sprite/male/sena/dash/1.png": "92cc00e586022a39d216181045cea61e",
"assets/assets/images/sprite/male/sena/dash/2.png": "0c2626c0b444c2bb7b5503fe7df89e24",
"assets/assets/images/sprite/male/sena/dash/3.png": "8fbb3fcd4146f4d80b39c40f9a672dd9",
"assets/assets/images/sprite/male/sena/dash/4.png": "47f0b4ba6f51add979627f0ad17a6701",
"assets/assets/images/sprite/male/sena/dash/5.png": "3d7e9bd8aa5eaa5bf710f83a1bf34e8f",
"assets/assets/images/sprite/male/sena/idle/0.png": "14dc9f845f1f6c4a25f040b3ac099f92",
"assets/assets/images/sprite/male/sena/idle/1.png": "fd396d7bb49374b5aad3f26a58c8f81c",
"assets/assets/images/sprite/male/sena/idle/2.png": "e7638615851018c09ff1b2b5ab932a2a",
"assets/assets/images/sprite/male/sena/move/0.png": "19d9e0b712d12becf7d8f288fa1c9cf3",
"assets/assets/images/sprite/male/sena/move/1.png": "e98c9f8430ab8792c306a677b9bc55ba",
"assets/assets/images/sprite/male/sena/move/2.png": "013f1025c3c02201491a2908a1ca82e5",
"assets/assets/images/sprite/male/sena/move/3.png": "919394b2da4e07d22bb354ad4192b5b2",
"assets/assets/images/sprite/male/sena/move/4.png": "b73091341bc18c00af7e1c9f30c04a4c",
"assets/assets/images/sprite/male/sena/move/5.png": "0b12ee09ceae956a8cd12331d51b9632",
"assets/assets/images/sprite/male/tard/dash/0.png": "a8db9956d6c47480643c8b1239e18c8d",
"assets/assets/images/sprite/male/tard/dash/1.png": "3bf7fbe16376cc5bfb026e16b613d87b",
"assets/assets/images/sprite/male/tard/dash/2.png": "6cfdc909911b0938d42d499cf42ffad6",
"assets/assets/images/sprite/male/tard/dash/3.png": "4744102b826f8755f04969ee4635b434",
"assets/assets/images/sprite/male/tard/dash/4.png": "74b16a6c8d3d73ef508ee62247faab25",
"assets/assets/images/sprite/male/tard/dash/5.png": "0aca80c77eac0aabb2fb9204c327590c",
"assets/assets/images/sprite/male/tard/move/0.png": "7fc62fb8fd6f21b7e32370ed342e94cf",
"assets/assets/images/sprite/male/tard/move/1.png": "669aad385f34d71b45b7376a0ebe9dff",
"assets/assets/images/sprite/male/tard/move/2.png": "0f8eb83e39ab9ef204bd73ba4903a717",
"assets/assets/images/sprite/male/tard/move/3.png": "1d53f6ecd9435953fa23e3ab0dead8a0",
"assets/assets/images/sprite/male/tard/move/4.png": "2baeba0c9e0e648dbc37b32d37bce859",
"assets/assets/images/sprite/male/tard/move/5.png": "262d558b4731b57d9956b77760c27048",
"assets/assets/images/sprite/male/vita/dash/0.png": "1c5c8c6b41902c684a99ca72775b5bf2",
"assets/assets/images/sprite/male/vita/dash/1.png": "0ee0f03bdbebb47f8d24ff4f54dcdf8c",
"assets/assets/images/sprite/male/vita/dash/2.png": "d191e8afc5dde47a923af3d5e3b842ed",
"assets/assets/images/sprite/male/vita/dash/3.png": "57647b5ca21ef9f05d0b068ef145af4d",
"assets/assets/images/sprite/male/vita/dash/4.png": "ced3345e8ea56dbe8d286f7e65729c02",
"assets/assets/images/sprite/male/vita/dash/5.png": "9c7136f044bbc838c15912f4c945f7dc",
"assets/assets/images/sprite/male/vita/move/0.png": "1755dd423ab651e506e8a3d2bcfeaf80",
"assets/assets/images/sprite/male/vita/move/1.png": "e996dc505ce36faab9986aae4fdb3936",
"assets/assets/images/sprite/male/vita/move/2.png": "e9fd2062d59462dd0cc146f493e03a7e",
"assets/assets/images/sprite/male/vita/move/3.png": "80a4dd1ff8674dea480668e2b0560b98",
"assets/assets/images/sprite/male/vita/move/4.png": "8b25c394ee18c4bcc08fb7876098052e",
"assets/assets/images/sprite/male/vita/move/5.png": "8f43a8e1c172be7e1765174f634ca5b4",
"assets/assets/splash.png": "a22463b7e127669d6d0ea6c3b81a0718",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2ea352c7d414195cf54b0c37cf98ce09",
"assets/NOTICES": "f3c1d0274bae4da84c3a43ffb34b4421",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "4e15a9506df192ad9e608325a8ee93dd",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "3923dc8896df99fda88886d67ab37169",
"icons/Icon-192.png": "40bdddb066f5d2c1230bff8c2c4de7ab",
"icons/Icon-512.png": "3fd60be6d0758d9b0b3cc376bae34f27",
"icons/Icon-maskable-192.png": "40bdddb066f5d2c1230bff8c2c4de7ab",
"icons/Icon-maskable-512.png": "3fd60be6d0758d9b0b3cc376bae34f27",
"index.html": "be5497344b30967eabd4149640dc52e7",
"/": "be5497344b30967eabd4149640dc52e7",
"main.dart.js": "c9c9eb774cc896472108d3b31326d896",
"manifest.json": "29d8ea9455cb607ddd160c98adbb94f0",
"splash/img/dark-1x.png": "8cec310d25b55e512548a0a4e9d09e93",
"splash/img/dark-2x.png": "0b2d60319ac06c7c48a5e087cb5fd1f5",
"splash/img/dark-3x.png": "bc4186b8b0056e646d1181f6011a9aa7",
"splash/img/dark-4x.png": "1357888e4bbe973c2ca663257dff60a3",
"splash/img/light-1x.png": "8cec310d25b55e512548a0a4e9d09e93",
"splash/img/light-2x.png": "0b2d60319ac06c7c48a5e087cb5fd1f5",
"splash/img/light-3x.png": "bc4186b8b0056e646d1181f6011a9aa7",
"splash/img/light-4x.png": "1357888e4bbe973c2ca663257dff60a3",
"version.json": "1a663e6c981a5704d9eace368eae81f1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
