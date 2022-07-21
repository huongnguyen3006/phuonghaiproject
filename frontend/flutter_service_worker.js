'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "78c9a89cc53196345e7cc95c33f27c6f",
"splash/img/light-2x.png": "a47a96d7b093efa96eb6af8e8da6bea4",
"splash/img/dark-4x.png": "1a71d135c55fe854375bd3b55b3d55c1",
"splash/img/light-3x.png": "6a4cb120e6238adea57009f715028ef1",
"splash/img/dark-3x.png": "6a4cb120e6238adea57009f715028ef1",
"splash/img/light-4x.png": "1a71d135c55fe854375bd3b55b3d55c1",
"splash/img/dark-2x.png": "a47a96d7b093efa96eb6af8e8da6bea4",
"splash/img/dark-1x.png": "a65cc8c0db8a63e3f6d1c5b268220560",
"splash/img/light-1x.png": "a65cc8c0db8a63e3f6d1c5b268220560",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "db6178791b6369b77311c0ae92809585",
"index.html": "130808d69fceb8b21638d7c70fde9d40",
"/": "130808d69fceb8b21638d7c70fde9d40",
"main.dart.js": "ccff2adcefcfe574649b9246c0e3635a",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e8e10956bc2b286e6b9dccf031a8252e",
"assets/AssetManifest.json": "f7c2add2e376573e53002dd33ead9af5",
"assets/NOTICES": "a0af3bbca5eb626c3d05668b60d95176",
"assets/FontManifest.json": "e3637cec141ff037b4151edf1c0411cb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttericon/lib/fonts/Octicons.ttf": "7242d2fe9e36eb4193d2bc7e521779bf",
"assets/packages/fluttericon/lib/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/fluttericon/lib/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/fluttericon/lib/fonts/Entypo.ttf": "58edfaf27b1032ea4778b69297c02b5a",
"assets/packages/fluttericon/lib/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/fluttericon/lib/fonts/Iconic.ttf": "34e12214307f5f7cf7bc62086fbf55a3",
"assets/packages/fluttericon/lib/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/fluttericon/lib/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/fluttericon/lib/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/fluttericon/lib/fonts/FontAwesome.ttf": "799bb4e5c577847874f20bd0e9b38a9d",
"assets/packages/fluttericon/lib/fonts/Zocial.ttf": "c29d6e34d8f703a745c6f18d94ce316d",
"assets/packages/fluttericon/lib/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/fluttericon/lib/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/fluttericon/lib/fonts/FontAwesome5.ttf": "221b27a41202ddd33990e299939e4504",
"assets/packages/fluttericon/lib/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/fluttericon/lib/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/fluttericon/lib/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/fluttericon/lib/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/packages/circle_flags/assets/png/tg.png": "77e16fe9855f2ba1b73406c7d34197f8",
"assets/packages/circle_flags/assets/png/me.png": "cc268bcd9746d5fe04f3a5729c6b6d2c",
"assets/packages/circle_flags/assets/png/la.png": "d7f4c9ff3306decd74c61c08d7c2af21",
"assets/packages/circle_flags/assets/png/mr.png": "8c10ee246a65dea1ddcbd21e434695e5",
"assets/packages/circle_flags/assets/png/ni.png": "e3ab6b9db1b69db67b5b358f1e41dd65",
"assets/packages/circle_flags/assets/png/lv.png": "b237758ac4c804301b9f203f648c1b39",
"assets/packages/circle_flags/assets/png/om.png": "79e8cbadbd0c47316db4bd14f3072567",
"assets/packages/circle_flags/assets/png/af.png": "da95d3f0b8cea81ba8b8f48a401855df",
"assets/packages/circle_flags/assets/png/cy.png": "7feff3aa834a18031641abc99218aef9",
"assets/packages/circle_flags/assets/png/bj.png": "03239348f8af6ee6839a2d000827390b",
"assets/packages/circle_flags/assets/png/aq.png": "c380da292c04230d58a32aa4d1cb638a",
"assets/packages/circle_flags/assets/png/cn.png": "d195fb7b5514cc87d532a40cb7e21725",
"assets/packages/circle_flags/assets/png/kannada.png": "fd9a009f56b5f72fae1e7bd4ef9284c9",
"assets/packages/circle_flags/assets/png/gb-sct.png": "e3b3460376017787993531b24e89b38e",
"assets/packages/circle_flags/assets/png/co.png": "6bcc16d836d499a6e2a20ea3678e4174",
"assets/packages/circle_flags/assets/png/cx.png": "f26ddb490212cdcc273fd59c817c6e7a",
"assets/packages/circle_flags/assets/png/ag.png": "82fbe0da0e182637b3a0aa7fee4d572d",
"assets/packages/circle_flags/assets/png/ms.png": "fbf56d56d143e5d68a08655ed77c01d4",
"assets/packages/circle_flags/assets/png/md.png": "5fb6d946ec5bd47478538c95c95fef6f",
"assets/packages/circle_flags/assets/png/zm.png": "82a5c4ee674b98b1fb9412cf91a68427",
"assets/packages/circle_flags/assets/png/vn.png": "4ac778149e5035b04d06bb01106ab85e",
"assets/packages/circle_flags/assets/png/tf.png": "5f383d301231576985d353f92b08cbfa",
"assets/packages/circle_flags/assets/png/es-ml.png": "ad688fb9d7ffe82191d9e2f93bf23a85",
"assets/packages/circle_flags/assets/png/td.png": "ea1300c3bc1beb7dbec4b01587a9a306",
"assets/packages/circle_flags/assets/png/es-ce.png": "c7a1e1821d454f655fc651a2bcbb6be5",
"assets/packages/circle_flags/assets/png/yt.png": "6c3de614459a60ec3395c819440d1855",
"assets/packages/circle_flags/assets/png/lb.png": "9ce213e0530f5d331255982714932835",
"assets/packages/circle_flags/assets/png/mf.png": "255c99edcd31fb2d3c760202a677b1b6",
"assets/packages/circle_flags/assets/png/lu.png": "2439199e7cf85c6e22f0a2b9fe15315a",
"assets/packages/circle_flags/assets/png/mq.png": "e68b26b02f3e76827eeb51471b939bbf",
"assets/packages/circle_flags/assets/png/cz.png": "20842c21c4e53d3f2f0319017293fdc0",
"assets/packages/circle_flags/assets/png/ae.png": "2475bad00ef171913d44e24b91583f8e",
"assets/packages/circle_flags/assets/png/cm.png": "77c011d3a844106778af152ad8705e8c",
"assets/packages/circle_flags/assets/png/bi.png": "8dd4730e34f4d0743c690f547c62642a",
"assets/packages/circle_flags/assets/png/ar.png": "862cd82aa0149c99ad07ad687007e007",
"assets/packages/circle_flags/assets/png/nato.png": "4cb32a73b619a3f2e8af2d781ef5ce9a",
"assets/packages/circle_flags/assets/png/bq-se.png": "f9d20509478d825f2a4bf36ed7327828",
"assets/packages/circle_flags/assets/png/as.png": "68a3a86011d510963820772d6e660032",
"assets/packages/circle_flags/assets/png/bh.png": "b213a80640d00e9c91bae0e6661fc514",
"assets/packages/circle_flags/assets/png/cl.png": "9e35474fbae95627c4655feb86fc430b",
"assets/packages/circle_flags/assets/png/ad.png": "d026729924482a576374e567550f5c14",
"assets/packages/circle_flags/assets/png/tibet.png": "9031f53024e200b247572c0e4d09c4ac",
"assets/packages/circle_flags/assets/png/mp.png": "14d689d9560748e571141bd715762f81",
"assets/packages/circle_flags/assets/png/lt.png": "d4b972884586dcf92fdb3ef29dc0eca0",
"assets/packages/circle_flags/assets/png/mg.png": "c962021492eb56552a2dc027b120eb6a",
"assets/packages/circle_flags/assets/png/lc.png": "b4554713ebff8bb863160ab4c956d3b9",
"assets/packages/circle_flags/assets/png/tr.png": "46f618b8c7bfbe78b50f0f8b3124a2c5",
"assets/packages/circle_flags/assets/png/ua.png": "1fe74a844a24821fd9376740dee33ed4",
"assets/packages/circle_flags/assets/png/yiddish.png": "d6e3adf3306a7ac9d41f367a298cdc29",
"assets/packages/circle_flags/assets/png/tv.png": "65db29a6af65cc8a8de95cdee5f84772",
"assets/packages/circle_flags/assets/png/vi.png": "f998bef967bc0f7c956e3b18bd9db0e8",
"assets/packages/circle_flags/assets/png/ta.png": "4a3733f093a4c820fb3dfedaa3a7e1e5",
"assets/packages/circle_flags/assets/png/mt.png": "8b94c5c93d82685fc3380e0d1d853633",
"assets/packages/circle_flags/assets/png/no.png": "8b81e3c86f4ff4f92b9e80b95af72c59",
"assets/packages/circle_flags/assets/png/mc.png": "6cdbf2451731e1bd9b405e1dc19c5383",
"assets/packages/circle_flags/assets/png/ch.png": "489e197e274a8bf1a40e122695e0d1b5",
"assets/packages/circle_flags/assets/png/bl.png": "00d012b1060a902be0fd1ecca524d7cb",
"assets/packages/circle_flags/assets/png/aw.png": "b493ba958779b152c8d5769ee4876912",
"assets/packages/circle_flags/assets/png/gb-ork.png": "34e4d279ed022039376750e1a9d19a12",
"assets/packages/circle_flags/assets/png/maori.png": "36ee78f8ae595872ea5d6ce01b32880f",
"assets/packages/circle_flags/assets/png/bq-sa.png": "4c234acae2cbda32da92c5891c5b37e6",
"assets/packages/circle_flags/assets/png/bz.png": "6c11249aa4dd585088e85b28ea9533fa",
"assets/packages/circle_flags/assets/png/bm.png": "cae6c6d1f178038ba210366bb1a87706",
"assets/packages/circle_flags/assets/png/ci.png": "13de0aa8a02af034ae75b03e36dbb2ea",
"assets/packages/circle_flags/assets/png/mu.png": "9c5abcdaa5e35cbc72eb589dae2d9e0a",
"assets/packages/circle_flags/assets/png/us.png": "e14fb2673adda9a8dc006cab5d4c5f60",
"assets/packages/circle_flags/assets/png/tw.png": "41ad0673907c248046985bea2f9abbde",
"assets/packages/circle_flags/assets/png/ye.png": "48afa49f8d8062ca13da159264833ca7",
"assets/packages/circle_flags/assets/png/mw.png": "bb58dd3cea34d822c84527736ad00aee",
"assets/packages/circle_flags/assets/png/nl.png": "b7434a6b35bfc0b68370cda1f9ecf2c8",
"assets/packages/circle_flags/assets/png/ls.png": "fda8a09c4d59446625aebe9ebb229764",
"assets/packages/circle_flags/assets/png/it-82.png": "822212f8334d551ba55142deb17a0b18",
"assets/packages/circle_flags/assets/png/bo.png": "45a50332673fc460639a51eb1a170a2c",
"assets/packages/circle_flags/assets/png/at.png": "973ad9b49d274f436d84ac191af9980d",
"assets/packages/circle_flags/assets/png/ck.png": "6389c96af70ebea2d01ed1492ccb88ad",
"assets/packages/circle_flags/assets/png/ac.png": "7a22b00440fc343886cb7527fae8632f",
"assets/packages/circle_flags/assets/png/somaliland.png": "a682ecfe2785dea18d74cf54782d7fd5",
"assets/packages/circle_flags/assets/png/by.png": "58e51fa96a1cf7dc2c09bf8749f36f45",
"assets/packages/circle_flags/assets/png/au.png": "da2e9c8d65cd5f0ee61a61d112bd10fe",
"assets/packages/circle_flags/assets/png/bn.png": "b4bd12e6666f48822a2d921aa4f2d69c",
"assets/packages/circle_flags/assets/png/ma.png": "5c2cbfd6cf417f3c400358e5cdf8288c",
"assets/packages/circle_flags/assets/png/nz.png": "f772f30544b4272d64f440114d4ddadd",
"assets/packages/circle_flags/assets/png/lr.png": "2284a93437a8b9f212ed4e16018150d9",
"assets/packages/circle_flags/assets/png/mv.png": "3a995828df0fdcc707cfdf5783f0157d",
"assets/packages/circle_flags/assets/png/tc.png": "ba30648e4604387c124c8adaab580a8e",
"assets/packages/circle_flags/assets/png/ug.png": "9f15e8cb51e153ef2c2a030e14902db3",
"assets/packages/circle_flags/assets/png/tt.png": "c9fb48c3b22e3b46e554203ff6ac97c3",
"assets/packages/circle_flags/assets/png/pl.png": "804cc193c6f217d7c8d86a586a837db1",
"assets/packages/circle_flags/assets/png/rs.png": "c04e702b963e3712cd1751f9d9a0848c",
"assets/packages/circle_flags/assets/png/in.png": "80f1c0a67546fdd0e01b5e2f7f6f8f92",
"assets/packages/circle_flags/assets/png/ge.png": "83c2d395c07be383c180ef251d85069d",
"assets/packages/circle_flags/assets/png/gr.png": "c12a0c41fb0eb0662d50242e986b87d0",
"assets/packages/circle_flags/assets/png/es-variant.png": "404c6c5cc8580d0695ff016f2392fadf",
"assets/packages/circle_flags/assets/png/gs.png": "2632a27558f6f9359b7a47a575da3eb2",
"assets/packages/circle_flags/assets/png/gd.png": "4a195b258ee5dae59a3e479acf942264",
"assets/packages/circle_flags/assets/png/io.png": "74a027f89d5b1ffe6ada20212570f0c8",
"assets/packages/circle_flags/assets/png/hk.png": "8ac9f0a83d770c2af361d1e32b49e3aa",
"assets/packages/circle_flags/assets/png/kp.png": "d265a97f577a4f110da9b40ccffccd4c",
"assets/packages/circle_flags/assets/png/kg.png": "875b16f7e0ace23c9cf98422500df0e9",
"assets/packages/circle_flags/assets/png/pm.png": "9f3ef6d933f360e80ad7348543bcd516",
"assets/packages/circle_flags/assets/png/sv.png": "63d6bceb1fe2f1e96bcf03f71315ea24",
"assets/packages/circle_flags/assets/png/re.png": "80b6c977e2860d0f713649ff34b4da89",
"assets/packages/circle_flags/assets/png/sa.png": "3fac06b28f2eab37f7b8fb5fae5200b4",
"assets/packages/circle_flags/assets/png/sc.png": "af6d99ccaaecda838311fa910eda0c35",
"assets/packages/circle_flags/assets/png/st.png": "2623c362c8195137ed794ba29931132f",
"assets/packages/circle_flags/assets/png/ke.png": "41dd59fb85265774e268f9940640f4a8",
"assets/packages/circle_flags/assets/png/im.png": "7ca1175e4b7bba5d9c1eac269287c4da",
"assets/packages/circle_flags/assets/png/kr.png": "8ef5284cb12c9a8f84c1163a229f3d40",
"assets/packages/circle_flags/assets/png/gf.png": "0f3703af70eecf8eea79d1447879efb7",
"assets/packages/circle_flags/assets/png/esperanto.png": "99293daa38185c10d483943cfeb3a648",
"assets/packages/circle_flags/assets/png/dj.png": "b610c0b0c50de1e5cd8d341040e84764",
"assets/packages/circle_flags/assets/png/gq.png": "f99f1ff056ad75a8fc58632ec1470bbc",
"assets/packages/circle_flags/assets/png/fr-h.png": "687dca007d5c456a0c0317eac57e214c",
"assets/packages/circle_flags/assets/png/gp.png": "44812acc8ca3285722d2626d58c394b1",
"assets/packages/circle_flags/assets/png/dk.png": "dc75a73a1ca6b5cd3bfce3f6f7abef2d",
"assets/packages/circle_flags/assets/png/gg.png": "c790aef67bb77011c1517904bbbf064a",
"assets/packages/circle_flags/assets/png/il.png": "af9f6d5ebc5b41dbeb34ba0f3c7331aa",
"assets/packages/circle_flags/assets/png/pn.png": "44b994dc30501e4f74d309abed1f5b25",
"assets/packages/circle_flags/assets/png/sb.png": "b5e77294c0fadf65e1e5d403db477de2",
"assets/packages/circle_flags/assets/png/py.png": "e5523b516f85d9169af4b903a572a018",
"assets/packages/circle_flags/assets/png/ru.png": "85e6556c5282b36a1e3233487391c4ed",
"assets/packages/circle_flags/assets/png/kw.png": "7e00bb598fdc9fc624e1fe27d40bb5e5",
"assets/packages/circle_flags/assets/png/hl.png": "34bd43e622e19948031d6b246b7ea896",
"assets/packages/circle_flags/assets/png/do.png": "7ccacc7ce965c6ba7ee992efd0c33e4b",
"assets/packages/circle_flags/assets/png/gt.png": "b5f6615461e1806b843b12b664caeb1c",
"assets/packages/circle_flags/assets/png/us-hi.png": "6de64dadd7da6f2175b02183f8875801",
"assets/packages/circle_flags/assets/png/northern_cyprus.png": "5a56ef8402393d475a56e1db4f41f99c",
"assets/packages/circle_flags/assets/png/kurdistan.png": "046cc4de66cb95585a94d355d55bb271",
"assets/packages/circle_flags/assets/png/gb.png": "68c4e1cd63e0be4f7a981095a6e71236",
"assets/packages/circle_flags/assets/png/gu.png": "36c1cf1f5c9a8fc264b0e40dbae3ee1b",
"assets/packages/circle_flags/assets/png/je.png": "92fcff04ed40eea4469e5dc76f6cff5c",
"assets/packages/circle_flags/assets/png/sg.png": "db28a351472baaea06dac1401c98b562",
"assets/packages/circle_flags/assets/png/pk.png": "15b73b4406b19432b83b7d3212f0f1af",
"assets/packages/circle_flags/assets/png/sr.png": "c9b2b32d36dd92363bd80a44cb838a23",
"assets/packages/circle_flags/assets/png/se.png": "7d575d81f4faca8ed85146b9a5387e81",
"assets/packages/circle_flags/assets/png/jp.png": "2c8b2c68f404390435305646fdda1d79",
"assets/packages/circle_flags/assets/png/es-pv.png": "7d6ecd9a46469d64bad30d939074b069",
"assets/packages/circle_flags/assets/png/gw.png": "06124bf80828f22325c5b2af36af424f",
"assets/packages/circle_flags/assets/png/eh.png": "bdf4d6114caa924fd955490c7cbaecc4",
"assets/packages/circle_flags/assets/png/hausa.png": "fd867f777142484216dec4f77120b645",
"assets/packages/circle_flags/assets/png/dz.png": "66074fc63aefb37bfee26101e1daf6a0",
"assets/packages/circle_flags/assets/png/ga.png": "09827603f0ffffb928d798dca330c964",
"assets/packages/circle_flags/assets/png/fr.png": "82453b843f5958038b44b920fa729383",
"assets/packages/circle_flags/assets/png/dm.png": "0a60eb36303203f60df5fd94775476dc",
"assets/packages/circle_flags/assets/png/hn.png": "81081cb2b7ec1c8a3f8c06bf32fd68b1",
"assets/packages/circle_flags/assets/png/sd.png": "03e75bd807d6adaa763a6cd2c25fbe6a",
"assets/packages/circle_flags/assets/png/rw.png": "db1aa6c22414a515d3678220be17fcec",
"assets/packages/circle_flags/assets/png/es-ib.png": "5792251c97cc023666c6a2c27c780595",
"assets/packages/circle_flags/assets/png/ph.png": "17f2147cb5f1715b00e97d30f23d4f15",
"assets/packages/circle_flags/assets/png/ss.png": "afad671d0364fd7fc98b78dbaaadfd6e",
"assets/packages/circle_flags/assets/png/qa.png": "84548374ed0a913ed868f79410840842",
"assets/packages/circle_flags/assets/png/pe.png": "7fe8d438e64ce655cf3dfce33b580ecd",
"assets/packages/circle_flags/assets/png/transnistria.png": "66b76ead422e02eda800d972f24fbb7e",
"assets/packages/circle_flags/assets/png/pr.png": "c362f82a1646c7abbe8841c4dbee13f5",
"assets/packages/circle_flags/assets/png/si.png": "4ad0749e98da508a4c8318f027f19465",
"assets/packages/circle_flags/assets/png/ht.png": "0fb11dd34bca49b7a89b2f9fda3f40f3",
"assets/packages/circle_flags/assets/png/es.png": "78e2ac241abb207aef1274989b115e46",
"assets/packages/circle_flags/assets/png/gl.png": "85a1d09bf6af5be1296580d5ee16fdc6",
"assets/packages/circle_flags/assets/png/pt-20.png": "59e4d5421fb702390902e2e5259195ef",
"assets/packages/circle_flags/assets/png/hmong.png": "f3338752cdcc4d2f6f8c7db82ff90bcd",
"assets/packages/circle_flags/assets/png/gm.png": "a40a1cfad16141b44d8ddd1b55da9938",
"assets/packages/circle_flags/assets/png/er.png": "15709a85a3af722ec98aed2d47661672",
"assets/packages/circle_flags/assets/png/fi.png": "41c7875dcfc2401156cd1a975a57a956",
"assets/packages/circle_flags/assets/png/ee.png": "a7f246d8ee66d90512a266756319b40a",
"assets/packages/circle_flags/assets/png/kn.png": "3547bf07fe419da3bb738c660e5a3156",
"assets/packages/circle_flags/assets/png/hu.png": "15791204f65417155fb2fbb825a6a3ad",
"assets/packages/circle_flags/assets/png/iq.png": "f12bd62768eaf49098a6fffa1772dc0a",
"assets/packages/circle_flags/assets/png/ky.png": "2681f255a065be62966560904348a507",
"assets/packages/circle_flags/assets/png/malayali.png": "f73f11f98ca952d4caae8c187e7768d9",
"assets/packages/circle_flags/assets/png/ps.png": "d3f2042a961bf3dffae166b3d1b224d5",
"assets/packages/circle_flags/assets/png/pf.png": "16edae498454cfa205c702d3a4200b78",
"assets/packages/circle_flags/assets/png/id.png": "bf9588cefdf79ca61ef1ca9818f92ac5",
"assets/packages/circle_flags/assets/png/is.png": "e286eabff56d0cab4c6c4a0bd129a2e5",
"assets/packages/circle_flags/assets/png/eg.png": "f918695c766a4b611f6b6298e61aa1d0",
"assets/packages/circle_flags/assets/png/fk.png": "dc86c3286f4c1d5d3c4c78e77967f4cc",
"assets/packages/circle_flags/assets/png/fj.png": "7fc1091160cd41222e0803fba2df967b",
"assets/packages/circle_flags/assets/png/gn.png": "c3f16d722d67249f369a7ee751b21555",
"assets/packages/circle_flags/assets/png/gy.png": "aef6eb2f00f811518dcab0db5b6ee7dc",
"assets/packages/circle_flags/assets/png/ir.png": "791d45bf1175eb0e02a055597fff4ae3",
"assets/packages/circle_flags/assets/png/km.png": "25d2218002b3e7da0cecd442168fb4bd",
"assets/packages/circle_flags/assets/png/ie.png": "a14a899e7e3dc6e9ef47e068782d51c8",
"assets/packages/circle_flags/assets/png/sindh.png": "72bb069f56b4a6e434da4e770f8cd8d3",
"assets/packages/circle_flags/assets/png/kz.png": "5db07dbaa2d968bd7901eafba6d557f5",
"assets/packages/circle_flags/assets/png/ro.png": "6acd28ac9cdfc77919be7cbc6e65f54f",
"assets/packages/circle_flags/assets/png/sk.png": "bbd75566cfe6549be8c0ba1e49115665",
"assets/packages/circle_flags/assets/png/pg.png": "0785afcf5b79c2465a75564e753a034a",
"assets/packages/circle_flags/assets/png/pt.png": "bf0f38de3f45f05dbfbe82233de89a1f",
"assets/packages/circle_flags/assets/png/so.png": "d6a293cb2cdcbcace095f2c4df86870e",
"assets/packages/circle_flags/assets/png/sx.png": "3e690404f3fe8559b4b255021f8e3046",
"assets/packages/circle_flags/assets/png/hr.png": "cb1f18abf3dc426cb903e36a1d6b2cda",
"assets/packages/circle_flags/assets/png/ki.png": "8e6c528221109b98b099559fc10352a3",
"assets/packages/circle_flags/assets/png/jm.png": "f3f399f215000683dee4f77b6a8cd018",
"assets/packages/circle_flags/assets/png/ge-ab.png": "297250baf87e0599d8816eb5e3e949de",
"assets/packages/circle_flags/assets/png/ec.png": "1fba242c22fe4d69da52049a7d0d7075",
"assets/packages/circle_flags/assets/png/et.png": "93df8c684ef99747359fc82d8ec1753a",
"assets/packages/circle_flags/assets/png/fo.png": "5bf01ea066a4f466f8b9dfaafe9f52d4",
"assets/packages/circle_flags/assets/png/kh.png": "4a27a6b9d74d054d405b7f37619355a5",
"assets/packages/circle_flags/assets/png/sy.png": "34d845a7dae686f1f4f20f85faa2f8f5",
"assets/packages/circle_flags/assets/png/sn.png": "b0e285ae74fdf2f579d9efbcfb168bff",
"assets/packages/circle_flags/assets/png/pw.png": "881bdd8284d19fbac63f4993c38cdd7f",
"assets/packages/circle_flags/assets/png/sl.png": "04dbb9d68e39d762eb3716851a66a17d",
"assets/packages/circle_flags/assets/png/es-ga.png": "add7577250091c209e3bad7d098fcb02",
"assets/packages/circle_flags/assets/png/gb-eng.png": "92196ea37e204d280ad8999ce59e76ce",
"assets/packages/circle_flags/assets/png/fm.png": "e43c8abdb8bb57715d97baffc6b91536",
"assets/packages/circle_flags/assets/png/gi.png": "eb6c5b964b3076e1fda99f31886a3680",
"assets/packages/circle_flags/assets/png/de.png": "474b2630ce75bb4afd48717f679ad293",
"assets/packages/circle_flags/assets/png/pt-30.png": "a4a7d0b6bf4295d01fc8b796ebc11ead",
"assets/packages/circle_flags/assets/png/gh.png": "db0fc3bbc7a9585a30a6988af95f25bb",
"assets/packages/circle_flags/assets/png/jo.png": "a49d368561934016ab53383d53b64ba9",
"assets/packages/circle_flags/assets/png/it.png": "c7156f29ac90d4127c6b0a9e5c3c927b",
"assets/packages/circle_flags/assets/png/pa.png": "dc6ca6fc12b17da035161b2efd5e4511",
"assets/packages/circle_flags/assets/png/sz.png": "b57da390f346f8b7e4a331e74d33a6f5",
"assets/packages/circle_flags/assets/png/sm.png": "95929200e77bb36656df23a1b7839f5f",
"assets/packages/circle_flags/assets/png/tn.png": "2fbad308820ca4c970b642dd12fd0e63",
"assets/packages/circle_flags/assets/png/ml.png": "6b61b40ded984ae4f246f3dbc89da8e2",
"assets/packages/circle_flags/assets/png/cg.png": "772685534eda5a109d88b75ef855fa26",
"assets/packages/circle_flags/assets/png/ax.png": "311d81deea8b75ab367084de6fc774e2",
"assets/packages/circle_flags/assets/png/ao.png": "da8a14eb09d5623451202b119cd8875e",
"assets/packages/circle_flags/assets/png/bt.png": "82a287cf68d53488d71ce42d40b3da77",
"assets/packages/circle_flags/assets/png/bb.png": "8997096f8fe86651301370d083988b87",
"assets/packages/circle_flags/assets/png/cf.png": "f6cf4ec5d8f64bf13292905aa785c800",
"assets/packages/circle_flags/assets/png/mm.png": "f2fc9609ea54f87480b17dedfc9e69dc",
"assets/packages/circle_flags/assets/png/li.png": "0cf84ee5c23055e2117134581456d512",
"assets/packages/circle_flags/assets/png/easter_island.png": "85305969159afca9552e2288acde0dc7",
"assets/packages/circle_flags/assets/png/na.png": "6c8d8cc2ef5ae254091725da4ecc9c23",
"assets/packages/circle_flags/assets/png/mz.png": "2d3798d8bb448e4d131f04c8ee477b9e",
"assets/packages/circle_flags/assets/png/es-cn.png": "1f8e343ed36e39d2657788441ab5e564",
"assets/packages/circle_flags/assets/png/to.png": "4c45019abb840109b4af36d2b7ced768",
"assets/packages/circle_flags/assets/png/vg.png": "22115158d1d53ed2977f6d1b44cddc9d",
"assets/packages/circle_flags/assets/png/ve.png": "5135d177f165669cb41ea3f2eb907eca",
"assets/packages/circle_flags/assets/png/tz.png": "8ac98cf61ae234c7fb7130aeeb591527",
"assets/packages/circle_flags/assets/png/tm.png": "065f5a3bc07ed2f49d604ec3fd45ecd7",
"assets/packages/circle_flags/assets/png/mx.png": "cc6c86e49a1a1820d96d4edce31c4fbc",
"assets/packages/circle_flags/assets/png/nc.png": "b768d0498582f77f64a7351f26436a17",
"assets/packages/circle_flags/assets/png/mo.png": "6d86aead270e125f67c9bd2f87875e85",
"assets/packages/circle_flags/assets/png/lk.png": "db8f4aee9f23fbb771f6c95518035e3f",
"assets/packages/circle_flags/assets/png/cd.png": "13188adec950a6c587a89a010af94508",
"assets/packages/circle_flags/assets/png/al.png": "2b2afdbae0aaf1a40f193032f7149ea3",
"assets/packages/circle_flags/assets/png/bw.png": "997e771763e1c1ff39a4a87e32d576d4",
"assets/packages/circle_flags/assets/png/european_union.png": "f0409361f1a93a43f032f791027b77c9",
"assets/packages/circle_flags/assets/png/south_ossetia.png": "7aeb4b42406ac9283f2f30a566cb3d0e",
"assets/packages/circle_flags/assets/png/cr.png": "1dfa04df7e081630250ccd89ab86daca",
"assets/packages/circle_flags/assets/png/am.png": "4b21343422176867a1a06e289fd0d830",
"assets/packages/circle_flags/assets/png/az.png": "e95a312ef130514288f68fb9befc02c9",
"assets/packages/circle_flags/assets/png/ba.png": "489201ff16f2eec3ccdf16d34dbe23bd",
"assets/packages/circle_flags/assets/png/mn.png": "d4b60dc615b3c7636ca9d38a1f90887b",
"assets/packages/circle_flags/assets/png/nu.png": "93f588781c195e3436629698e070438e",
"assets/packages/circle_flags/assets/png/united_nations.png": "99bb55e1b4280480e1dd6c0ceb8be930",
"assets/packages/circle_flags/assets/png/my.png": "43420d95ddd6a7fbad83e3a465af2044",
"assets/packages/circle_flags/assets/png/xx.png": "24cc317b8152595c313338438b587a7f",
"assets/packages/circle_flags/assets/png/tl.png": "64b6968cecff28a125882feb74e27de8",
"assets/packages/circle_flags/assets/png/ws.png": "70226de9ff41706f22f1565b3bb5aa9a",
"assets/packages/circle_flags/assets/png/th.png": "7a9640b692bd226fb58cb73df77154cc",
"assets/packages/circle_flags/assets/png/ec-w.png": "5788ea7c10113fe8e2585627486c491c",
"assets/packages/circle_flags/assets/png/xk.png": "7b28215457775eda8f6cdee057945e26",
"assets/packages/circle_flags/assets/png/it-88.png": "38c05c70ef83e86329f66cf57735c756",
"assets/packages/circle_flags/assets/png/nf.png": "61d50d97ecf0566085686136450cb5bd",
"assets/packages/circle_flags/assets/png/ly.png": "c9d75546effbfcf907e45201058f0ebb",
"assets/packages/circle_flags/assets/png/ai.png": "05dd008915bca22195bab3a4bec40893",
"assets/packages/circle_flags/assets/png/br.png": "c56e8e2fc8d408dc03cecbdc49e71cdb",
"assets/packages/circle_flags/assets/png/cv.png": "b7ce3cf87b665cdeb38d3a8d14703d05",
"assets/packages/circle_flags/assets/png/be.png": "87bd39e440de14cdef19bf819ddaa5ad",
"assets/packages/circle_flags/assets/png/ca.png": "1e71c4aa2370ae162f5c1f1fdd289cc5",
"assets/packages/circle_flags/assets/png/bd.png": "22c1113778b47d3de3c76eb236359962",
"assets/packages/circle_flags/assets/png/cw.png": "c3d71fa27e21e1af13e3cee9c7b344b8",
"assets/packages/circle_flags/assets/png/bs.png": "32aa44e67c108625166849d7b42c017b",
"assets/packages/circle_flags/assets/png/ng.png": "f2251d80d787e8e5a4a594210347dce2",
"assets/packages/circle_flags/assets/png/mk.png": "c0696c47c156029c8e409375acb75ae2",
"assets/packages/circle_flags/assets/png/np.png": "8dd7ed2aa0e791f65b70cbb41e8ed763",
"assets/packages/circle_flags/assets/png/va.png": "5e4f6687cd52bfc7a87b68393a5f499f",
"assets/packages/circle_flags/assets/png/uz.png": "97762956a586758b5b935d2e8ff762c9",
"assets/packages/circle_flags/assets/png/tk.png": "f86289fe48c83a129daf3689ee8bfca3",
"assets/packages/circle_flags/assets/png/vc.png": "bedb626d26b358f5d4cfaed9759b3d56",
"assets/packages/circle_flags/assets/png/ca-bc.png": "767532585ec6dcf78557df1199ad4afd",
"assets/packages/circle_flags/assets/png/zw.png": "4d5b805fcdb4a56734eb70d23a6adbb6",
"assets/packages/circle_flags/assets/png/nr.png": "6211f466e39cce7d8ee06ce9b42c9d40",
"assets/packages/circle_flags/assets/png/ne.png": "f37bb2c062bddc072c3d20df8cd2f36a",
"assets/packages/circle_flags/assets/png/cu.png": "26a329291af8b0658a4e66463dc87855",
"assets/packages/circle_flags/assets/png/bq.png": "901af73ebde62a11bf1e3625c132d3b5",
"assets/packages/circle_flags/assets/png/bf.png": "a6d37368d2db13e2af67793b13be544a",
"assets/packages/circle_flags/assets/png/bg.png": "17bcacec27847fb8ea1b83b2b2e1cf5e",
"assets/packages/circle_flags/assets/png/cc.png": "6c4a305245fefd645e47e7f3b2c8f7aa",
"assets/packages/circle_flags/assets/png/gb-wls.png": "2ad048be682195d86f898754ab1904ad",
"assets/packages/circle_flags/assets/png/mh.png": "ade5568fb3a7f08bc7fc039fe7894cdf",
"assets/packages/circle_flags/assets/png/za.png": "71bc967c5dd27254f85816b0dcc51e64",
"assets/packages/circle_flags/assets/png/uy.png": "ffa892d200746068cb355766bf6af294",
"assets/packages/circle_flags/assets/png/wf.png": "c246a8385285414b19d33ec78a65adb5",
"assets/packages/circle_flags/assets/png/vu.png": "e56f8bce566ac1daeabf6c135c203124",
"assets/packages/circle_flags/assets/png/tj.png": "6d6cba19d6f622b76415f3dfce1d489f",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/login.jpg": "c6330dc7e22f5d7029cd4582e40a7a31",
"assets/assets/images/greenlab.png": "d82d6021ea0b6e6483bda4e2a7f92560",
"assets/assets/images/greenlab_512x512.png": "d565dac2e8b27ac2dbb5a8320440b837",
"assets/assets/images/splash1.png": "95bafd296035ad38fed9702d4233c923",
"assets/assets/images/dashboard1.jpg": "9ce31985ccc0226135eb03efeb690fb8",
"assets/assets/images/splash.png": "3c606d1143f89c46d2a5eee36f4630e5",
"assets/assets/images/dashboard3.jpg": "29c99900a3e28302dc91f18ee37a43a1",
"assets/assets/images/dashboard2.jpg": "5f10d8400483fdf6b9fde6c238de6df4",
"assets/assets/images/he-thong-quan-trac-nuoc-thai-hoat-dong-nhu-the-nao.jpg": "5a6506e38974889f160101c643f91f08",
"assets/assets/lang/en.json": "ed0c12481cc6b11dceb636a9e3719cf3",
"assets/assets/lang/vi.json": "0ccbd16677e701a126a6aa5b602cb5fe",
"assets/assets/icons/lamp.svg": "9cbc58d5de326a48cf7908923d0ceb23",
"assets/assets/icons/turbine.svg": "4960a94d11a7853c805318c2415c3bef",
"assets/assets/icons/heart-eyes.png": "ac3ee07a8cf58e0753e70c3821a4dfee",
"assets/assets/icons/menu.svg": "2207be9a2a3032708e26e3a65884b50c",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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